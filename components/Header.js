import Link from "next/link";
import styled from "styled-components";

const HeaderContainer = styled.div`
  margin: 3em 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  font-size: 1em;
  @media (max-width: 768px) {
    margin: 2.5em 0 0 0;
    padding: 0 3em;
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
`;

const Avatar2 = styled.img`
  width: 7em;
  height: 7em;
  background: pink;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 1.5em 0 0;
  border-radius: 50%;
  background-image: url("/ac_avatar.png");
  background-position: center;
  background-size: 7em 7em;
`;

const Avatar = styled.img`
  width: 5em;
  height: 5em;
  margin: 0 1.5em 0 0;
  border-radius: 50%;
`;

const LogoText = styled.div`
  h1 {
    font-size: 1.8em;
    font-weight: 500;
    margin: 0.1em 0;
  }
  h2 {
    font-size: 1.2em;
    font-weight: 300;
    margin: 0;
    padding: 0 0 0 0.2em;
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
  font-size: 1.1em;
  opacity: 0.9;
  &:hover {
    color: #688624;
    text-decoration: underline dotted;
  }
`;

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Logo>
          <Avatar src="/ac_avatar.png" />
          <LogoText>
            <h1>Thomas Nguyen</h1>
            <h2>Engineering a better humanity.</h2>
          </LogoText>
        </Logo>
        <Nav>
          <Link href="/">
            <L>Home</L>
          </Link>
          <Link href="/blog">
            <L>Blog</L>
          </Link>
        </Nav>
      </HeaderContainer>
    </>
  );
}
