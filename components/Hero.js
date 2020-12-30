import styled from "styled-components";

const HeroContainer = styled.div`
  max-width: 800px;
  margin: auto;
  color: white;

  h2 {
    margin-bottom: 25px;
    font-size: 2.8em;
    line-height: 1.5s;
    font-weight: 200;
    text-transform: none;

    strong {
      font-weight: 500;
    }
  }
  p {
    font-size: 1.3em;
    font-weight: 300;
    color: #a7a7a7;
  }
  a {
    color: #ffffffcc;
    font-weight: 500;
    text-decoration: none;
    border-bottom: 1px dashed #ffffffcc;
    font-weight: 600;
  }

  a:hover {
    color: white;
  }
  margin-top: 75px;
  margin-bottom: 100px;
  @media (max-width: 768px) {
    h2 {
      font-size: 30px;
    }
    padding: 20px;
    margin: auto;
  }
`;

export default function Hero() {
  return (
    <HeroContainer>
      <h2>
        👋&nbsp; I enjoy building
        <strong> beautiful software </strong>to solve real-world problems.
      </h2>

      <p>
        Currently engineering <a href="https://www.suki.ai/">@suki.ai</a> to
        help battle&nbsp;
        <a href="https://www.forbes.com/sites/robertpearl/2019/07/08/physician-burnout-1/#45def0fd119e">
          physician burnout
        </a>
      </p>
    </HeroContainer>
  );
}
