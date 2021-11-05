import styled from "styled-components";
import COLORS from "../../resources/styles/colors";

const Container = styled.button`
  width: 120px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  background-color: black;
  border: 2px solid white;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
  font-size: 18px;
  line-height: 2.2;
  :hover {
    border: 2px solid ${COLORS.ownOrange};
    color: ${COLORS.ownOrange};
  }
  user-select: none;
`;

const HireButton = () => {
  return <Container>Hire me</Container>;
};

export default HireButton;
