import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import moment from "moment";
import React from "react";
import Layout from "@components/Layout";

function flatten(text, child) {
  return typeof child === "string"
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
}

function HeadingRenderer(props) {
  var children = React.Children.toArray(props.children);
  var text = children.reduce(flatten, "");

  var slug = text.toLowerCase().replace(/\W/g, "-");
  // TODO: add a nested anchor tag that with href
  return React.createElement("h" + props.level, { id: slug }, props.children);
}

export const Article = styled.article`
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 50px;
  padding-bottom: 100px;

  line-height: 1.6;
  font-size: 18px;
  box-sizing: border-box;

  .post-content {
  }

  .meta {
    margin-bottom: 150px;
  }

  h1 {
    text-align: center;
    font-size: 2em;
    margin-bottom: 0;
  }

  h4 {
    opacity: 0.5;
    font-size: 14px;
    margin: 0;
    font-weight: 400;
  }

  h2 {
    margin-top: 40px;
    margin-bottom: 15px;
    padding-bottom: 5px;
    font-size: 24px;
    border-bottom: 4px solid #ededed;
    color: #343a3f;
  }

  p {
    margin-bottom: 32px;
    color: #292929;
  }

  img {
    width: 100%;
  }

  a {
    text-decoration: none;
    font-weight: 600;
    color: black;
    text-decoration: underline;

    &:hover {
      color: #688624;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>;
  const { title, dateCreated, dateModified, tags } = frontmatter;

  const dateCreatedString = moment.unix(dateCreated).format("MMMM DD, YYYY");

  return (
    <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
      <Article>
        <div className="meta">
          <h1>{title}</h1>
          <h4>{dateCreatedString}</h4>
        </div>

        <div className="post-content">
          <ReactMarkdown
            source={markdownBody}
            renderers={{ heading: HeadingRenderer }}
          />
        </div>
      </Article>
    </Layout>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params;

  const content = await import(`../../posts/${postname}.md`);
  const config = await import(`../../siteconfig.json`);
  const data = matter(content.default);
  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);

      return slug;
    });
    return data;
  })(require.context("../../posts", true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/post/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
