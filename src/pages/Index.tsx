
import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { trackPageView } from "../lib/firebase";
import { useViewTracking } from "../hooks/useViewTracking";

const Index = () => {
  console.log('Index component rendering');

  // Track page view on component mount
  useEffect(() => {
    console.log('Index component mounted, tracking page view');
    trackPageView("Portfolio Home");
  }, []);

  // Track section views
  useViewTracking("Hero");
  useViewTracking("About");
  useViewTracking("Skills");
  useViewTracking("Experience");
  useViewTracking("Projects");
  useViewTracking("Achievements");
  useViewTracking("Contact");

  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="achievements">
        <Achievements />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
