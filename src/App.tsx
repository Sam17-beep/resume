import Competitions from "./components/Competitions";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Summary from "./components/Summary";
import { resumeData } from "./data/resumeData";

function App() {
  return (
    <div
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: resumeData.backgroundColor }}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        <Header
          name={resumeData.name}
          title={resumeData.title}
          contact={resumeData.contact}
          accentColor={resumeData.accentColor}
        />
        <div className="flex flex-col md:mx-36">
          <Summary
            summary={resumeData.summary}
            accentColor={resumeData.accentColor}
          />
          <Experience
            experience={resumeData.experience}
            accentColor={resumeData.accentColor}
          />
          <Skills
            skills={resumeData.skills}
            accentColor={resumeData.accentColor}
          />
          <Projects
            projects={resumeData.projects}
            accentColor={resumeData.accentColor}
          />
          <Competitions
            competitions={resumeData.competitions}
            accentColor={resumeData.accentColor}
          />
          <Education
            education={resumeData.education}
            accentColor={resumeData.accentColor}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
