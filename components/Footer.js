import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background: black;
  color: white;
  display: flex;
  justify-content: space-around;

  .invisible-container {
    width: 1110px;
    padding: 20px 0;
    font-family: "Inter", sans-serif;
  }

  .left {
    width: 50%;
  }

  h3 {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 3px;
  }
  p {
    color: #999;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`;

function Footer() {
  return (
    <Container>
      <div className="invisible-container">
        <div className="left">
          <h3>
            <strong>THOMAS</strong> NGUYEN
          </h3>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
