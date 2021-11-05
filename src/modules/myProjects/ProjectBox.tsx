import styled from "styled-components";
import COLORS from "../../resources/styles/colors";

const Container = styled.div`
  background-color: white;
  color: black;
  width: 200px;
  text-align: center;
  margin: 0px 50px;
  border-radius: 10px;
  height: 250px;
  overflow: hidden;
`;

const ProjectImage = styled.div`
  background-color: ${COLORS.ownBlue};
  color: white;
  line-height: calc(250px * 0.6);
  height: 60%;
  width: 100%;
`;

const Header = styled.div`
  font-size: 24px;
  height: 12%;
`;

const Description = styled.div`
  height: 28%;
  margin: 6px 20px 0 20px;
`;

const ProjectBox = () => {
  return (
    <Container>
      <ProjectImage>Image</ProjectImage>
      <Header>Project title</Header>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Description>
    </Container>
  );
};

export default ProjectBox;
