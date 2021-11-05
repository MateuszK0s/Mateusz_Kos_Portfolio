import styled from "styled-components";
import COLORS from "../../resources/styles/colors";

interface Props {
  name: string;
  img: string;
  rate: string;
}

const Container = styled.div`
  background-color: white;
  color: black;
  width: 200px;
  text-align: center;
  margin: 0px 50px;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  border-radius: 10px;
`;

const SkillImg = styled.h4`
  margin: auto;
  img {
    width: 48px;
    height: 48px;
  }
`;

const SkillName = styled.h2`
  margin: auto;
  color: ${COLORS.ownBlue};
  font-weight: bold;
  padding-top: 6px;
`;

const SkillRate = styled.h4`
  margin: auto;
  padding-top: 6px;
`;

const SkillBox = (props: Props) => {
  return (
    <Container>
      <SkillImg>
        <img src={props.img} alt={props.name} />
      </SkillImg>
      <SkillName>{props.name}</SkillName>
      <SkillRate>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempora
        repellat nihil sit eum esse excepturi tenetur, adipisci mollitia harum!
      </SkillRate>
    </Container>
  );
};

export default SkillBox;
