import styled from "styled-components";

const Container = styled.div`
  background-color: #1c2d3e;
  color: white;
  width: 100%;
  height: 200px;
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
    </Container>
  );
};

export default ProjectsSection;
