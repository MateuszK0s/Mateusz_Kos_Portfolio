import styled from "styled-components";
import COLORS from "../../../resources/styles/colors";

interface Props {
  width?: string;
  margin?: string;
  marginTop?: string;
}

const Line = styled.div`
  height: 2px;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    right top,
    color-stop(0.15, ${COLORS.ownBlue}),
    color-stop(0.85, ${COLORS.ownOrange})
  );
  width: 70%;
  margin: auto;
  margin-top: 20px;
`;

const GradientLine = ({ width, margin, marginTop }: Props) => {
  return <Line style={{ width, margin, marginTop }} />;
};

export default GradientLine;
