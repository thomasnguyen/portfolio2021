import matter from "gray-matter";
import Layout from "@components/Layout";
import Hero from "@components/Hero";
import Projects from "@components/Projects";
import Resume from "@components/Resume";
import { SnowFlakes } from "../components/snowflakes";

import styled from "styled-components";

const Overlay = styled.div`
  width: 100%;
  height: 594px;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  opacity: 0.5;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.38) 0,
    rgba(0, 0, 0, 0.38) 3.5%,
    rgba(0, 0, 0, 0.379) 7%,
    rgba(0, 0, 0, 0.377) 10.35%,
    rgba(0, 0, 0, 0.375) 13.85%,
    rgba(0, 0, 0, 0.372) 17.35%,
    rgba(0, 0, 0, 0.369) 20.85%,
    rgba(0, 0, 0, 0.366) 24.35%,
    rgba(0, 0, 0, 0.364) 27.85%,
    rgba(0, 0, 0, 0.361) 31.35%,
    rgba(0, 0, 0, 0.358) 34.85%,
    rgba(0, 0, 0, 0.355) 38.35%,
    rgba(0, 0, 0, 0.353) 41.85%,
    rgba(0, 0, 0, 0.351) 45.35%,
    rgba(0, 0, 0, 0.35) 48.85%,
    rgba(0, 0, 0, 0.353) 52.35%,
    rgba(0, 0, 0, 0.36) 55.85%,
    rgba(0, 0, 0, 0.371) 59.35%,
    rgba(0, 0, 0, 0.385) 62.85%,
    rgba(0, 0, 0, 0.402) 66.35%,
    rgba(0, 0, 0, 0.42) 69.85%,
    rgba(0, 0, 0, 0.44) 73.35%,
    rgba(0, 0, 0, 0.46) 76.85%,
    rgba(0, 0, 0, 0.48) 80.35%,
    rgba(0, 0, 0, 0.498) 83.85%,
    rgba(0, 0, 0, 0.515) 87.35%,
    rgba(0, 0, 0, 0.529) 90.85%,
    rgba(0, 0, 0, 0.54) 94.35%,
    rgba(0, 0, 0, 0.547) 97.85%,
    rgba(0, 0, 0, 0.55)
  );
  background-color: #14123e;
`;

const Bg = styled.div`
  width: 100%;
  height: 594px;
  background-color: black;
  background: url("https://images.unsplash.com/photo-1608395609438-f304ee3b0d07?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&dpr=1&auto=format%2Ccompress&fit=crop&w=899&h=594%201x&q=10,%20https://images.unsplash.com/photo-1608395609438-f304ee3b0d07?ixid=MXwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&dpr=2&auto=format%2Ccompress&fit=crop&w=1199&h=594%202x&q=10");
  background-position: center;
  background-size: cover;
  position: absolute;
  z-index: -2;
  filter: blur(1px);
`;

const Index = ({ posts, title, description, ...props }) => {
  return (
    <>
      <Overlay />
      <Bg />
      <Layout pageTitle={title} darkMode={true}>
        <Hero />
        <Projects darkMode={true} />
        <Resume />
      </Layout>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../posts", true, /\.md$/));

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
