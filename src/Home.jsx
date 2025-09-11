import Navbar from './navbar';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import SkillsSection from './skills_section';
import ProjectSection from './projects_section';
import BottomBar from './BottomBar';



function Home() {

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="w-full overflow-x-hidden text-white">
      <div className="relative w-full">
        <img
          src="/background.png"
          alt="background"
          className="w-full h-auto block"
        />

        <div className="absolute top-0 left-0 w-full h-full z-10">
          <Navbar />

          <div className="text-base text-center xl:text-left mt-8 xl:mt-72 xl:text-2xl 2xl:text-2xl pt-24 xl:px-12 xl:w-3/5 3xl:w-2/5 2xl:pl-32">
            I'm a fourth-year student in the Media Technology program at KTH,
            currently pursuing a Master's degree in Interactive Media Technology.
            I'm passionate about web development and data, and this page showcases
            some of my current expertise through a selection of projects.
          </div>

          <div className="h-20 xl:h-80" />
          <div className="xl:h-80 3xl:mb-28"  />
          
          <SkillsSection/>
          <section id="projects">
            <ProjectSection/>
          </section>
          
          <section id="contact">
            <BottomBar/>
          </section>
        </div>
      </div>

      <img
        src="/vatten.jpg"
        alt="vatten"
        className="w-full h-auto block rotate-180"
        style={{ marginTop: '-4px' }}
      />
      <img
        src="/vatten.jpg"
        alt="vatten"
        className="w-full h-auto block mt-[-4px]"
      />

      <img
        src="/vatten.jpg"
        alt="vatten"
        className="w-full h-auto block rotate-180 mt-[-4px]"
      />

      <img
        src="/vatten.jpg"
        alt="vatten"
        className="w-full h-auto block mt-[-4px]"
      />

      <img
        src="/vatten.jpg"
        alt="vatten"
        className="w-full h-auto block rotate-180 mt-[-4px]"
      />

      <img
        src="/vatten.jpg"
        alt="vatten"
        className="w-full h-auto block mt-[-4px]"
      />

      <div className=''>
      <img
        src="/vatten.jpg"
        alt="vatten"
        className="w-full h-auto block rotate-180 mt-[-4px]"
      />
      </div>
      
      <div className=''>
        <img
          src="/vatten.jpg"
          alt="vatten"
          className="w-full h-auto block mt-[-4px]"
        />
      </div>

      <div className=''>
      <img
        src="/vatten.jpg"
        alt="vatten"
        className="w-full h-auto block rotate-180 mt-[-4px]"
      />
      </div>

    </div>
  );
}

export default Home;
