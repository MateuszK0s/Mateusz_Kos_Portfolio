import styled from "styled-components";
import ProjectBox from "./ProjectBox";

const Container = styled.div`
  color: black;
  width: 100%;
  margin: auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const ProjectsBottom = () => {
  return (
    <Container>
      <ProjectBox />
      <ProjectBox />
      <ProjectBox />
      <ProjectBox />
    </Container>
  );
};

export default ProjectsBottom;
