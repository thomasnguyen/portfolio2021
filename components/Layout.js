import Head from "next/head";
import styled from "styled-components";
import { withRouter } from "next/router";
import Link from "next/link";

import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";

const Section = styled.section`
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 32px;
  padding-right: 32px;
  z-index: 2;
  box-sizing: border-box;
  font-size: 12px;
  font-family: "Inter", sans-serif;
  margin-bottom: 50px;
  position: relative;
`;

function Layout({ children, pageTitle, darkMode, router, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{pageTitle}</title>
        <link rel="icon" href="/ac_avatar.png"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Section>
        <Header darkMode={darkMode} />
        <div className="content">{children}</div>
      </Section>

      <Footer />
    </>
  );
}

export default withRouter(Layout);
