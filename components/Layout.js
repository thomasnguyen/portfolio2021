import Head from "next/head";
import styled from "styled-components";

import Header from "./Header";

const Section = styled.section`
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 32px;
  padding-right: 32px;
  position: sticky;
  top: 0px;
  z-index: 2;

  font-size: 12px;
  font-family: "Inter", sans-serif;
`;

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300,500,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Section>
        <Header />
        <Header />
        <div className="content">{children}</div>
      </Section>
      <footer>Built by me!</footer>
    </>
  );
}
