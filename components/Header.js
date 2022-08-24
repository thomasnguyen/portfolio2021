import Link from "next/link";
import styled from "styled-components";

const HeaderContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 3em 0;
  font-size: 1em;
  color: #151e2c;

  .primary-color {
    color: #0252cd;
  }

  @media (max-width: 768px) {
    padding: 2.5em 3em;
    justify-content: space-around;
    & > :first-child {
      margin-bottom: 1.5em;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const Avatar = styled.img`
  cursor: pointer;
  width: 5em;
  height: 5em;
  margin: 0 1em 0 0;
  border-radius: 50%;
  transition: transform 0.2s; /* Animation */

  &:hover {
    transform: scale(
      1.2
    ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }
`;

const LogoText = styled.div`
  h1 {
    font-size: 1.3em;
    font-weight: 600;
    margin: 0.2em 0;
  }
  h2 {
    font-size: 1.2em;
    font-weight: 300;
    margin: 0;
    padding: 0 0 0 0.2em;
    opacity: 0.7;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  & > a {
    font-size: 1.5em;
    margin-right: 2.5em;
    border-bottom: dashed 0.1em rgba(0, 0, 0, 0.4);
    padding-bottom: 0.2em;
    transition: border-bottom 500ms ease-in-out;
    text-decoration: none;
    color: black;
    &:hover {
      cursor: pointer;
      border-bottom: solid 0.1em rgba(0, 0, 0, 0.4);
    }
    font-weight: 600;
  }
`;

const L = styled.div`
  font-weight: 600;
  cursor: pointer;
  margin-left: 1.5em;
  font-size: 1.2em;
  opacity: 0.9;
  &:hover {
    text-decoration: underline dotted;
  }
`;

export default function Header({ darkMode, ...props }) {
  return (
    <>
      <HeaderContainer darkMode={darkMode}>
        <Link href="/">
          <Logo>
            <Avatar src="/logo.png" />
            <LogoText>
              <h1>Thomas Nguyen</h1>
            </LogoText>
          </Logo>
        </Link>
        <Nav>
          <Link href="/">
            <L>
              <span className="primary-color">01</span> Home
            </L>
          </Link>
          {/*           <Link href="/blog">
            <L>Blog</L>
          </Link> */}
        </Nav>
      </HeaderContainer>
    </>
  );
}
