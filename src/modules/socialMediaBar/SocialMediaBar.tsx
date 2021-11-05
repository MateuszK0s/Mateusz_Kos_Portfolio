import styled from "styled-components";
import githubIcon from "../../resources/images/icons/github.svg";
import linkedinIcon from "../../resources/images/icons/linkedin.svg";
import facebookIcon from "../../resources/images/icons/facebook.svg";
import GradientLine from "../../library/common/components/GradientLine";

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
  }
  :hover {
    cursor: pointer;
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
