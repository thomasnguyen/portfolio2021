import styled from "styled-components";
import { ProjectsHeadline } from "./Projects";
import moment from "moment";

const Container = styled.section`
  margin: 10rem 0;
  margin-top: 15rem;
`;

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;
  font-size: 0.6rem;
`;

const PointList = styled.ul`
  list-style-type: none;
  margin: 1em 0;
  padding: 0;
`;

const Point = styled.li`
  font-size: 1.4em;
  color: #565656;
  line-height: 1.5;
  margin: 0.2em 0;
`;

const Header3 = styled.h3`
  font-size: 2em;
  font-weight: 500;
  opacity: 0.855;
  margin: 0 0.3em 0 0;
`;

const Header4 = styled.h4`
  font-size: 1rem;
  font-weight: 300;
  border-bottom: dashed 0.1em rgba(0, 0, 0, 0.4);
  padding-bottom: 0.1em;
  transition: border-bottom-color 500ms ease-in-out;
  display: inline;
  margin-right: 1em;
  & a {
    color: black;
    text-decoration: none;
  }
`;

const ResumeHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 0.2rem 0;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Pill = styled.div`
  display: inline-flex;
  align-items: center;
  height: 1.8em;
  color: rgb(54, 54, 54);
  font-size: 1.1em;
  margin: 0.5em;
  padding: 0 0.8em;
  border-radius: 0.4em;
  background: rgb(235, 235, 235);
`;

const getDateEmployed = (startDate, endDate) => {
  const start = moment(startDate).format("MMM YYYY");
  const end = endDate ? moment(endDate).format("MMM YYYY") : "Present";
  let workLength;
  if (endDate) {
    const length = moment.duration(moment(endDate).diff(startDate));
    const years = `${length.years().toString()} years`;
    const months = `${length.years().toString()} months`;
    workLength = years ? `${years} ${months}` : months;
  } else {
    workLength = moment(startDate).fromNow().toString();
  }

  return `${start} - ${end} · ${workLength}`;
};

const resume = [
  {
    companyName: "Suki AI",
    companyURL: "https://www.suki.ai/",
    skills: [
      { name: "reactjs", color: "blue" },
      { name: "nodejs", color: "green" },
      { name: "graphql", color: "pink" },
      { name: "mysql", color: "green" },
    ],
    location: "Redwood City, California",
    position: "Front-End Engineer",
    points: [
      "Design, architect, code, and implement components & UI with React.js",
      "Partner with designers and product managers to provide a best-in-class doctor experience",
    ],
    workedLength: getDateEmployed(new Date("2020-01-02"), null),
  },
  {
    companyName: "Education Elements",
    location: "San Carlos, California",
    companyURL: "https://www.edelements.com/",
    skills: [
      { name: "angular", color: "red" },
      { name: "typescript", color: "darkBlue" },
      { name: "rxjs", color: "pink" },
    ],
    position: "Front-End Engineer",
    points: [
      "Developed and implemented a drag-n-drop kanban tool for teachers and school leaders with Angular/Ionic",
      "Deployed project management application to web, App Store, and Google Play store",
    ],
    workedLength: getDateEmployed(
      new Date("2018-10-02"),
      new Date("2019-11-02")
    ),
  },
  {
    companyName: "Santa Clara Valley Water District",
    companyURL: "https://www.valleywater.org/",
    skills: [
      { name: "Oracle SQL", color: "red" },
      { name: "jQuery", color: "orange" },
    ],
    location: "San Jose, California",
    position: "Fullstack Developer",
    points: [
      "Manage a small team of developers in a building internal application for the chemists and biologists.",
    ],
    workedLength: getDateEmployed(
      new Date("2017-07-02"),
      new Date("2018-10-02")
    ),
  },
  {
    companyName: "Code For San Jose",
    companyURL: "https://www.codeforsanjose.com/",
    skills: [
      { name: "reactjs", color: "blue" },
      { name: "jQuery", color: "orange" },
    ],
    location: "San Jose, California",
    position: "UI Developer",
    points: [
      "Teamed up with engineers to build community tools and promote civic innovation in San Jose.",
    ],
    workedLength: getDateEmployed(
      new Date("2016-08-02"),
      new Date("2018-10-02")
    ),
  },
];
// add BABC
// add boys & girls club
const ResumeItem = ({
  points,
  skills,
  position,
  companyURL,
  companyName,
  workedLength,
}) => {
  const pointList = points.map((point) => {
    return <Point key={point}>{point}</Point>;
  });

  const skillsList = skills.map((skill) => {
    return <Pill key={skill.name}>{skill.name}</Pill>;
  });
  return (
    <ResumeContainer>
      <ResumeHeader>
        <Header3>{position}</Header3>
        <SkillsContainer>{skillsList}</SkillsContainer>
      </ResumeHeader>
      <div>
        <Header4>
          <a href={companyURL} target="_blank">
            {companyName}
          </a>
        </Header4>
        <span>{workedLength}</span>
      </div>
      <PointList>{pointList}</PointList>
    </ResumeContainer>
  );
};

const Resume = () => {
  const resumeList = resume.map((job) => (
    <ResumeItem key={job.companyName} {...job} />
  ));

  return (
    <Container id="resume">
      <ProjectsHeadline>RESUME</ProjectsHeadline>
      {resumeList}
    </Container>
  );
};

export default Resume;
