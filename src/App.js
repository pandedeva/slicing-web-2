import "./App.css";
import ContactSection from "./components/contact-section/ContactSection";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import ProfileSection from "./components/profile-section/ProfileSection";
import ProjectsSection from "./components/projects-section/ProjectsSection";
import SkillSection from "./components/skills-section/SkillSection";

function App() {
  return (
    <>
      <Hero />
      <ProfileSection />
      <SkillSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
