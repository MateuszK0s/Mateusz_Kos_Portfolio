import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  margin-top: 20px;
  width: 70%;
  text-align: left;
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
      <LeftSide>
        <h2>About Me</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        vitae earum rerum, provident explicabo laboriosam iusto repellendus
        aliquid nisi officia!
        <p />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum vero
        deleniti eius debitis. Error neque nobis ut! Facilis, modi.
      </LeftSide>
    </Container>
  );
};

export default AboutMe;
