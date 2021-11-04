import styled from "styled-components";
import HireButton from "./HireButton";

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  color: white;
  width: 70%;
  margin: auto;
  margin-top: 20px;
`;

const Intro = () => {
  return (
    <Container>
      <h1>Welcome on my portfiolio website</h1>
      <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
        ducimus optio vero neque suscipit dolorem aperiam repellat voluptate rem
        tenetur soluta ipsam unde quos. Suscipit laboriosam temporibus aliquid
        voluptatibus est odio cum aspernatur repellendus odit doloribus nesciunt
        quidem incidunt sed ipsa, pariatur magnam, debitis fugiat sint sit
        delectus nobis! Incidunt voluptatibus temporibus itaque veniam labore
        voluptas quo ipsa nostrum inventore!
      </span>
      <HireButton />
    </Container>
  );
};

export default Intro;
