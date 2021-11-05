import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  margin-top: 20px;
  width: 70%;
  text-align: left;
`;

const Header = styled.h2``;

const Body = styled.div`
  display: flex;
`;

const LeftSide = styled.div`
  width: 50%;
`;

const RightSide = styled.div`
  width: 50%;
`;

const AboutMe = () => {
  return (
    <Container>
      <Header> About Me</Header>
      <Body>
        <LeftSide>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          vitae earum rerum, provident explicabo laboriosam iusto repellendus
          aliquid nisi officia!
          <p />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum vero
          deleniti eius debitis. Error neque nobis ut! Facilis, modi.
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
