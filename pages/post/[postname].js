import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

import Layout from "@components/Layout";

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
  h1 {
    text-align: center;
    font-size: 2em;
  }

  h3 {
    margin-top: 40px;
    margin-bottom: 15px;
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

  return (
    <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
      <Article>
        <h1>{frontmatter.title}</h1>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1519827226394-4f4903100cbc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
            loading="lazy"
            alt=""
            width="100%"
          />
        </figure>
        <div className="post-content">
          <ReactMarkdown source={markdownBody} />
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
