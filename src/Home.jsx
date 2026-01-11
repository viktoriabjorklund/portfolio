import Navbar from './navbar';
import './App.css';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SkillsSection from './skills_section';
import ProjectSection from './projects_section';
import BottomBar from './BottomBar';

function Home() {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);

  // Vänta tills allt på sidan (inkl bilder) är laddat
  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    if (document.readyState === 'complete') {
      setIsLoaded(true);
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  // Smooth scroll till sektion (när sidan väl är laddad)
  useEffect(() => {
    if (!isLoaded) return;

    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location, isLoaded]);

  if (!isLoaded) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#9DD1F9]">
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen overflow-x-hidden text-white bg-gradient-to-b from-[#0c2745] to-[#001B3A] lg:bg-transparent">
      <div className="relative w-full">

        <img
          src="/assets/background.png"
          alt="background"
          className="w-full h-auto block mt-[-4px]"
        />

        <div className="absolute top-0 left-0 w-full h-full z-10">
          <Navbar />

          <div className="text-white text-lg mt-64 text-center w-[90%] mx-auto xl:mx-0 xl:text-left xl:mt-72 xl:text-2xl 2xl:text-2xl pt-24 xl:px-12 xl:w-3/5 3xl:w-2/5 2xl:pl-32">
            I'm a fift-year student in the Media Technology program at KTH,
            currently pursuing a Master's degree in Interactive Media Technology.
            I'm passionate about web development and data, and this page showcases
            some of my current expertise through a selection of projects.
          </div>

          <div className="xl:h-48 3xl:mb-28" />
          <div>
            <SkillsSection />
          </div>

          <section id="projects">
            <ProjectSection />
          </section>

          <section id="contact">
            <BottomBar />
          </section>
        </div>
      </div>

      {/* Alla vatten-bilder visas endast på större skärmar */}
      <div className="">
        <img
          src="/assets/vattenbg.png"
          alt="vatten"
          className="w-full h-auto"
        />
      
      </div>
      <div className="">
        <img
          src="/assets/vattenfyllnad.png"
          alt="vatten"
          className="w-full h-auto"
        />
      
      </div>
      <div className="block 2xl:hidden">
        <img
          src="/assets/vattenfyllnad.png"
          alt="vatten"
          className="w-full h-auto"
        />
      
      </div>
    </div>
  );
}

export default Home;
