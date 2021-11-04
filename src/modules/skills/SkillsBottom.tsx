import styled from "styled-components";
import SkillBox from "./SkillBox";

const Container = styled.div`
  color: black;
  width: 100%;
  height: 100px;
  margin: auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const SkillsBottom = () => {
  return (
    <Container>
      <SkillBox name="React" rate="4/5" img="" />
      <SkillBox name="JavaScript" rate="4/5" img="" />
      <SkillBox name="TypeScript" rate="3/5" img="" />
    </Container>
  );
};

export default SkillsBottom;
