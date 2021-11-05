import styled from "styled-components";
import COLORS from "../../resources/styles/colors";

const Container = styled.div`
  font-weight: bold;
  width: 20%;
  display: flex;
  justify-content: space-evenly;
  margin-right: 15%;
`;

const NavOption = styled.div`
  font-size: 20px;
  cursor: pointer;
  :hover {
    color: ${COLORS.ownOrange};
    border-bottom: 2px solid ${COLORS.ownOrange};
  }
`;

const NavSection = () => {
  return (
    <Container>
      <NavOption>Home</NavOption>
      <NavOption>About</NavOption>
      <NavOption>Contact</NavOption>
    </Container>
  );
};

export default NavSection;
