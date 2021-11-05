import AboutMe from "./aboutMe/AboutMe";
import ProjectsSection from "./myProjects/ProjectsSection";
import SkillsSection from "./skills/SkillsSection";
import SocialMediaBar from "./socialMediaBar/SocialMediaBar";
import TopBox from "./topBox/TopBox";

function App() {
  return (
    <div className="App">
      <TopBox />
      <SkillsSection />
      <ProjectsSection />
      <SocialMediaBar />
      <AboutMe />
    </div>
  );
}

export default App;
