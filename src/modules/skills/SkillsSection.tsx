import styled from "styled-components";
import GradientLine from "../../library/common/components/GradientLine";
import SkillsBottom from "./SkillsBottom";

const Container = styled.div`
  background-color: white;
  color: black;
  width: 100%;
  height: 100px;
`;

const Header = styled.h1`
  margin: auto;
  text-align: center;
  margin: 20px 0;
`;

const SkillsSection = () => {
  return (
    <Container>
      <Header>My still developing skills</Header>
      <GradientLine width="35%" />
      <SkillsBottom />
    </Container>
  );
};

export default SkillsSection;
