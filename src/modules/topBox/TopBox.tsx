import styled from "styled-components";
import IntroImage from "../../resources/images/intro.jpg";
import Intro from "../introSection/Intro";
import GradientLine from "../../library/common/components/GradientLine";
import NavSection from "./NavSection";
import PortfolioName from "./PortfolioName";

const Container = styled.div`
  background-image: url(${IntroImage});
  height: 700px;
  background-size: cover;
`;

const TopBar = styled.div`
  width: 100%;
  font-weight: bold;
  height: 60px;
  line-height: 80px;
  display: flex;
  color: white;
  justify-content: space-between;
  user-select: none;
`;

const TopBox = () => {
  return (
    <Container>
      <TopBar>
        <PortfolioName />
        <NavSection />
      </TopBar>
      <GradientLine />
      <Intro />
    </Container>
  );
};

export default TopBox;
