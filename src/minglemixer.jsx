import Navbar from './navbar';
import './App.css';
import DetailsNavbar from './details_navbar';
import NavbarBottom from './navbar_bottom';
import { useEffect, useRef, useState } from 'react';
import ProjectHeader from './project_header';


function MingleMixer() {
    return (
      <div>
        {/* Header bakgrund + nav */}
        <div className="bg-linear-to-b from-[#659FC9] to-white h-72">
          <DetailsNavbar />
        </div>
  
        {/* Content */}
        <div className="flex flex-col text-left ml-24">
          {/* TOP: vänster text, höger bild */}
          <div className="flex flex-row items-start gap-12">
            {/* Vänster kolumn */}
            <div className="flex flex-col w-1/2 pr-8">
              <ProjectHeader
                title="mingle mixer"
                description="A website for browsing and saving tasty drinks!"
              />
  
              <div className="mt-8">
                <p className="font-bold text-xl mb-2">description</p>
                <p>
                  This web application aimed to solve the problem one can often
                  face which is – what should I cook for dinner today? …
                </p>
              </div>
  
              <div className="mt-8">
                <p className="font-bold text-xl">tech stack</p>
                <p>JavaScript, React, REST API, Firebase</p>
              </div>
  
              <div className="mt-8">
                <p className="font-bold text-xl">project management</p>
                <p>Github</p>
              </div>
  
              <div className="mt-8">
                <p className="font-bold text-xl">duration</p>
                <p>10/2023 - 01/2024</p>
              </div>
            </div>
  
            {/* Höger kolumn: huvudbild */}
            <div className="flex w-1/2 justify-center">
              <img
                src="assets/minglemixer_home.png"
                className="w-[600px] h-auto"
                alt="mingle mixer home"
              />
            </div>
          </div>
  
          {/* BOTTOM: tre centrerade bilder */}
          <div className="flex justify-center gap-2 mt-36 -ml-24">
            <img src="assets/minglemixer_details.png" className="w-[470px] h-auto" alt="mingle mixer screen 1" />
            <img src="assets/minglemixer_resultat.png" className="w-[470px] h-auto" alt="mingle mixer screen 2" />
            <img src="assets/minglemixer_favorites.png" className="w-[470px] h-auto" alt="mingle mixer screen 3" />
          </div>
  
          {/* Bottom nav */}
          <NavbarBottom />
        </div>
      </div>
    );
  }
  

export default MingleMixer;
