import styled from "styled-components";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 5em;
  margin-bottom: 5em;

  .hero-text {
    max-width: 480px;
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
  }
`;

export default function Hero() {
  return (
    <HeroContainer>
      <div className="hero-text">
        <div className="hero__pretitle">SOFTWARE ENGINEER - MENTOR</div>
        <h2 className="hero__title">
          Hello! I’m 👋 <div>Thomas Nguyen</div>
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
