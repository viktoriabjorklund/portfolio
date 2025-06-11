import Navbar from './navbar';
import './App.css';
import DetailsNavbar from './details_navbar';
import NavbarBottom from './navbar_bottom';
import { useEffect, useRef, useState } from 'react';
import ProjectHeader from './project_header';


function PlantCare() {


  return (
    <div>
        <div className='bg-linear-to-b from-[#659FC9] to-white h-72'>
            <DetailsNavbar/>
        </div>

        <div className='flex flex-col text-left ml-24'>
            <div className='flex flex-row'>
                <ProjectHeader
                title="plant care prototype"
                description="A UX research project which culminated in a Figma prototype"
                />

                <div className='-mt-16 ml-80'>
                    <img src="public/2plants.svg" 
                    className='flex justify-end w-[400px]'
                />
                </div>
            </div>
            <div className=' flex flex-col w-1/2 -mt-64'>
                <p className='font-bold text-xl'>description</p>
                <p>In this project, we had a Furhat robot act as a singning teacher to users. Furhat plays a pitch, which the user then replicates, and recieves feedback in real time from Furhat. The feedback is distributed via 2 ways - verbal cues and head nodding. The system tracks the user's pitch in realtime, making it possible to analyse the sung pitch and let Furhat give feedback. 
                    The application is Kotlin based and the work was distributed between 4 group memebers. </p>
            </div>

            <div className=' flex flex-col w-1/2 mt-8'>
                <p className='font-bold text-xl'>duration</p>
                <p>10-2024 - 01-2025 </p>
            </div>

            <div className=' flex flex-col w-1/2 mt-8'>
                <p className='font-bold text-xl'>the process</p>
                <p>
                    The project followed the double diamond process can therefore be divided into the four stages define, discover, develop, deliver
                </p>

                <p className='font-bold mt-4'>discover</p>
                <div className='border-t border-black w-1/3'></div>
                <p> Even though it was not intended that we were going to 
                    think of solutions in this phase, we hypothesized that our 
                    solution would include some kind of community to make plant 
                    care more interdependent among plant owners. We also discussed 
                    which methods would be suitable for plant owners, and we all agreed 
                    that interviews should be one of the methods. We also discussed diary 
                    studies, product reviews and heuristic evaluation as alternative methods, 
                    but we wanted to focus on the plant owners so we picked diary studies as a second method. </p>
                <p></p>
            </div>
            
            <NavbarBottom/>
        </div>
    </div>
          
  );
}

export default PlantCare;
