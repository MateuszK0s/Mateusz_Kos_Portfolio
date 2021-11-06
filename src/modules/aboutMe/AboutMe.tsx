import styled from "styled-components";
import GradientLine from "../../library/common/components/GradientLine";
import SocialMediaBar from "../socialMediaBar/SocialMediaBar";

const Container = styled.div`
  margin: auto;
`;

const Header = styled.h2`
  text-align: center;
  font-size: 32px;
`;

const Body = styled.div`
  display: flex;
  margin: auto;
  margin-top: 20px;
  width: 70%;
`;

const LeftSide = styled.div`
  width: 50%;
  margin: 0 10px 0 0;
`;

const RightSide = styled.div`
  width: 50%;
  margin: 0 0 0 10px;
`;

const AboutMe = () => {
  return (
    <Container>
      <Header> About Me</Header>
      <GradientLine width="45%" />

      <Body>
        <LeftSide>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          vitae earum rerum, provident explicabo laboriosam iusto repellendus
          aliquid nisi officia!
          <p />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum vero
          deleniti eius debitis. Error neque nobis ut! Facilis, modi.
          <SocialMediaBar />
        </LeftSide>
        <RightSide>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          illum veniam dolorum culpa quo facilis rerum modi eveniet odio
          eligendi quisquam ipsa itaque repellat, fugiat eos possimus nesciunt
          quaerat nam aliquid, eius recusandae molestias. Cupiditate facilis at
          ducimus nostrum enim!
        </RightSide>
      </Body>
    </Container>
  );
};

export default AboutMe;
