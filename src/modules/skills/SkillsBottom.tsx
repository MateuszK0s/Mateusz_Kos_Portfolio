import styled from "styled-components";
import SkillBox from "./SkillBox";
import JsImg from "../../resources/images/icons/js.svg";
import TsImg from "../../resources/images/icons/ts.svg";
import ReactImg from "../../resources/images/icons/react.svg";

const Container = styled.div`
  color: black;
  width: 100%;
  margin: auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const SkillsBottom = () => {
  return (
    <Container>
      <SkillBox name="React" rate="4/5" img={ReactImg} />
      <SkillBox name="JavaScript" rate="4/5" img={JsImg} />
      <SkillBox name="TypeScript" rate="3/5" img={TsImg} />
    </Container>
  );
};

export default SkillsBottom;
