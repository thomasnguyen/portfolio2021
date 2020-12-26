import styled from "styled-components";

export const ProjectsHeadline = styled.div`
  color: #688624;
  font-size: 1.1em;
  letter-spacing: 2px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const ProjectPreviewContainer = styled.div`
  width: 100%;
  margin: auto;
  text-align: center;
  height: 350px;
  background: #ffd452;

  margin: 1.8em 0px 1.8em;
  overflow: hidden;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    top: 10px;
  }
`;

const ProjectPreview = styled.div`
  background-image: url("https://user-images.githubusercontent.com/14298038/103112895-e9bd9600-460c-11eb-93ab-ed02f7a64d2a.png");
  background-repeat: repeat-y;
  background-position: center;
  background-size: 960px 688px;

  transform: rotate(-15deg);
  transform-origin: 0px 0px;
  width: 960px;
  height: 688px;

  @keyframes MOVE-BG {
    from {
      transform: rotate(-13deg) translateY(0);
    }
    to {
      transform: rotate(-13deg) translateY(-639px);
    }
  }
`;

const ProjectHeader = styled.div`
  font-size: 2em;
  font-weight: 500;
  margin: 0 0 0.2em 0;
`;

const ProjectSubtitle = styled.div`
  font-size: 1.3em;
  color: #565656;
  line-height: 1.5;
`;

const ProjectItem = styled.div`
  margin: 1em 0 5em 0;

  p {
    font-size: 1.4em;
    line-height: 1.7;
    color: #565656;
  }
`;

const ProjectControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Projects = () => {
  return (
    <>
      <ProjectsHeadline>SIDE PROJECTS</ProjectsHeadline>
      <ProjectItem key={1}>
        <ProjectHeader>BookFriends</ProjectHeader>
        <ProjectSubtitle>
          BookFriends enables readers to track their reading, set goals and
          catalog book libraries for friends.
        </ProjectSubtitle>
        <ProjectPreviewContainer>
          <ProjectPreview></ProjectPreview>
        </ProjectPreviewContainer>
        <p>
          As an avid book reader, I was amazed to find out there wasn't a decent
          reading log app. So that's when I started to flirt with the idea of
          building my own. The idea was simple, a reading tracker that will
          allow me to interact with my friends. It also became an opportunity to
          grow as an multidisciplinary engineer to build from idea to launch.
        </p>
        <ProjectControls></ProjectControls>
      </ProjectItem>
    </>
  );
};

export default Projects;
