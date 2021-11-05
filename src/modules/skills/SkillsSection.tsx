import styled from "styled-components";
import GradientLine from "../../library/common/components/GradientLine";
import SkillsBottom from "./SkillsBottom";

const Container = styled.div`
  background-color: white;
  color: black;
  width: 100%;
`;

const Header = styled.h1`
  margin: auto;
  text-align: center;
  margin: 20px 0;
`;

const SkillsSection = () => {
  return (
    <Container>
      <Header>My skills</Header>
      <GradientLine width="45%" />
      <SkillsBottom />
    </Container>
  );
};

export default SkillsSection;
