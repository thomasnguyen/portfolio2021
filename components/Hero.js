import styled from "styled-components";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: auto;
  margin-top: 5em;
  width: 100%;
  max-width: 1250px;

  .hero-text {
    max-width: 480px;
    padding-top: 5em;

    @media (max-width: 768px) {
    }
  }

  .hero__pretitle {
    color: #0252cd;
    font-size: 1.2em;
    margin: 0;
  }

  .hero__title {
    color: #0252cd;
    font-size: 4em;
    font-weight: 600;
    color: #151e2c;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  p {
    color: #4f5c71;
    font-size: 1.5em;
    margin: 0;
    line-height: 1.5;
  }

  .hero-image {
    margin-right: -100px;
    filter: sharp(2);

    @media (max-width: 768px) {
      margin-right: 0px;
      width: 100%;
    }
  }

  .hero-image__gradient {
    background: linear-gradient(90deg, #ecc45c 2.34%, #ff6543 100.78%);
    background-clip: text;
    -webkit-background-clip: text;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
  }

  .underline {
    position: relative;
    ::after,
    ::before {
      content: "";
      display: block;
      height: 0.5em;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      background-color: #ffca00;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export default function Hero() {
  return (
    <HeroContainer>
      <div className="hero-text">
        <div className="hero__pretitle">SOFTWARE ENGINEER - MENTOR</div>
        <h2 className="hero__title">
          Hello! I’m 👋{" "}
          <div className="hero-image__gradient">Thomas Nguyen</div>
        </h2>
        <p>
          Currently, I'm a <strong>frontend engineer</strong> at
          <strong> Amazon</strong> empowering organizations to make better
          data-driven decisions. I also help engineers take their career to the
          next level.
        </p>
      </div>
      <div>
        <img className="hero-image" src="/hero.png" />
      </div>
    </HeroContainer>
  );
}
