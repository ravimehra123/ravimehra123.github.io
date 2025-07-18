import "./App.css";
import { VerticalSideMenu } from "../components/VerticalMenu";
import { HomePage } from "../pages/home";
import { AboutMe } from "../components/AboutMe";
import { Toolkit } from "../components/Toolkit";
import { ExperienceTimeline } from "../components/Expierence";
import { Projects } from "../pages/Projects";
import { MediumArticles } from "../pages/MediumArticles";
import { Initiatives } from "../pages/Initiatives";
import { userInfo } from "../data/userInfo";
import { userSkills } from "../data/skills";
import { userExperiencesData } from "../data/experienceTimeLine";
import { projects } from "../data/projects";
import { gitProjects } from "../data/githubProjects";
import { articlesData } from "../data/articles";
import { Contact } from "../pages/contacts";
import { contactData } from "../data/contactData";

function App() {
  return (
    <div className="bg-[hsl(var(--background))] min-h-[100vh] flex justify-around">
      <VerticalSideMenu />
      <main className="w-full flex flex-row flex-wrap justify-around sm:max-w-[90%] lg:max-w-[80%] self-center min-h-[100vh] p-4">
        <HomePage />
        <AboutMe user={userInfo} />
        <Toolkit skills={userSkills} />
        <ExperienceTimeline
          experiences={userExperiencesData}
          careerStartDate="2013-11-11 00:00:00"
        />
        <Projects projects={projects} />
        <Initiatives gitProjects={gitProjects} />
        <MediumArticles articlesData={articlesData} />
        <Contact contactData={contactData} />
      </main>
    </div>
  );
}

export default App;
