import styled from "styled-components";
import ProjectsBottom from "./ProjectsBottom";

const Container = styled.div`
  background-color: #202835;
  color: white;
  width: 100%;
`;

const Header = styled.h1`
  margin: auto;
  text-align: center;
  margin: 20px 0;
  padding: 20px 0;
`;

const ProjectsSection = () => {
  return (
    <Container>
      <Header>My latest projects</Header>
      <ProjectsBottom />
    </Container>
  );
};

export default ProjectsSection;
