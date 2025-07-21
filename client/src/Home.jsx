import "./App.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import FearSection from "./components/FearSection/FearSection";
import TechSection from "./components/TechSection/TechSection";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import TrackingSection from "./components/TrackingSection/TrackingSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";
import AboutSection from "./components/AboutSection/AboutSection";
import DesignSection from "./components/DesignSection/DesignSection";
import FoundationSection from "./components/FoundationSection/FoundationSection";
import EngineeringSection from "./components/EngineeringSection/EngineeringSection";
import LandscapeSection from "./components/LandscapeSection/LandscapeSection";
function Home() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <FearSection />
      <TechSection />
      <DesignSection />
      <FoundationSection />
      <EngineeringSection />
      <LandscapeSection />
      <ProjectsSection />
      <TrackingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Home;
