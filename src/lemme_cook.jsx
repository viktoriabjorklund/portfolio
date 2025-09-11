import Navbar from './navbar';
import './App.css';
import DetailsNavbar from './details_navbar';
import NavbarBottom from './navbar_bottom';
import { useEffect, useRef, useState } from 'react';
import ProjectHeader from './project_header';


function Recipe_details() {


  return (
    <div>
        <div className='bg-linear-to-b from-[#659FC9] to-white h-72'>
            <DetailsNavbar/>
        </div>

        <div className='flex flex-col text-left ml-24'>
            <div className='flex flex-row'>
                <ProjectHeader
                title="let me cook"
                description="A social web application where you can upload, share and see other users’ recipes!"
                />

                <div className='-mt-24 ml-72'>
                    <img src="/assets/lemmecook1.png" 
                    className='flex justify-end'
                />
                </div>
            </div>
            <div className=' flex flex-col w-1/2 -mt-32'>
                <p className='font-bold text-xl'>description</p>
                <p>This web application aimed to solve the problem one can often face which is - what should i cook for dinner today? The app is social as you can see your friends recipes on the application, and save them to your own archieve. The app does also offer AI-integrated recipe suggestions, adding an extra spark of creativity. The work was done via agile methods, specifically scrum, and was divided between 5 group memebers. My tasks was within frontend and 
                during the second part of the project, I acted as product owner. </p>
            </div>

            <div className=' flex flex-col w-1/2 mt-8'>
                <p className='font-bold text-xl'>tech stack</p>
                <p>JavaScript, TailwindCSS, React, Flask, Ollama, Firebase </p>
            </div>

            <div className=' flex flex-col w-1/2 mt-8'>
                <p className='font-bold text-xl'>project management</p>
                <p>Jira, Github, Slack </p>
            </div>

            <div className=' flex flex-col w-1/2 mt-8'>
                <p className='font-bold text-xl'>duration</p>
                <p>02-2025 - 04-2025 </p>
            </div>
            <div className='flex flex-row ml-0 mt-12'>
            <div className=''>
                    <img src="public/lemmecook2.png" 
                    className='flex justify-end'
                />
                </div>

                <div className=''>
                    <img src="public/lemmecook3.png" 
                    className='flex justify-end'
                />
                </div>

                <div className=''>
                    <img src="public/lemmecook4.png" 
                    className='flex justify-end'
                />
                </div>

                <div className=''>
                    <img src="public/lemmecook5.png" 
                    className='flex justify-end'
                />
                </div>
            </div>
            <NavbarBottom/>
        </div>
    </div>
          
  );
}

export default Recipe_details;
