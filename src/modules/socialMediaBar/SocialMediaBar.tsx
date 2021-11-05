import styled from "styled-components";
import githubIcon from "../../resources/images/icons/github.svg";
import linkedinIcon from "../../resources/images/icons/linkedin.svg";
import facebookIcon from "../../resources/images/icons/facebook.svg";
import GradientLine from "../../library/common/components/GradientLine";
import COLORS from "../../resources/styles/colors";

const Container = styled.div`
  width: 100%;
  height: 60px;
  padding-top: 20px;
  display: flex;
  justify-content: center;
`;

const SocialMediaIcon = styled.div`
  img {
    height: 100%;
    margin: 0 50px;
    overflow: inherit;
    border-radius: 15px;
    :hover {
      cursor: pointer;
      background-image: -webkit-gradient(
        linear,
        left bottom,
        right top,
        color-stop(0.6, ${COLORS.ownBlue}),
        color-stop(0.4, ${COLORS.ownOrange})
      );
    }
  }
`;

const SocialMediaBar = () => {
  return (
    <>
      <Container>
        <SocialMediaIcon>
          <img src={githubIcon} alt="My GitHub profile" />
        </SocialMediaIcon>
        <SocialMediaIcon>
          <img src={linkedinIcon} alt="My LinkedIn profile" />
        </SocialMediaIcon>
        <SocialMediaIcon>
          <img src={facebookIcon} alt="My Facebook profile" />
        </SocialMediaIcon>
      </Container>
      <GradientLine width="45%" />
    </>
  );
};

export default SocialMediaBar;
