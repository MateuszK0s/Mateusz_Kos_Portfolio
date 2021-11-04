import styled from "styled-components";

interface Props {
  name: string;
  img: string;
  rate: string;
}

const Container = styled.div`
  background-color: #000000;
  color: #ffffff;
  width: 200px;
  height: 120px;
  text-align: center;
  margin: 0px 20px;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

const SkillImg = styled.h4`
  margin: auto;
`;

const SkillName = styled.h3`
  margin: auto;
`;

const SkillRate = styled.h4`
  margin: auto;
`;

const SkillBox = (props: Props) => {
  return (
    <Container>
      <SkillImg>{props.img}img</SkillImg>
      <SkillName>{props.name}</SkillName>
      <SkillRate>{props.rate}</SkillRate>
    </Container>
  );
};

export default SkillBox;
