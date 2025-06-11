import Navbar from './navbar';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import SkillsSection from './skills_section';
import ProjectSection from './projects_section';



function Home() {

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

          <div className="text-left mt-72 xl:text-2xl 2xl:text-2xl pt-24 px-12 xl:w-3/5 2xl:w-2/5">
            I'm a fourth-year student in the Media Technology program at KTH,
            currently pursuing a Master's degree in Interactive Media Technology.
            I'm passionate about expanding my skills, and this page showcases
            some of my current expertise through a selection of projects.
          </div>

          <div className="h-80" />
          <div className="h-80" />
          
          <SkillsSection/>
          <ProjectSection/>
        </div>
      </div>

      <img
        src="/vatten.jpg"
        alt="vatten"
        className="w-full h-auto block rotate-180"
        style={{ marginTop: '-4px' }}
      />
    </div>
  );
}

export default Home;
