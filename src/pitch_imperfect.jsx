import Navbar from './navbar';
import './App.css';
import DetailsNavbar from './details_navbar';
import NavbarBottom from './navbar_bottom';
import { useEffect, useRef, useState } from 'react';
import ProjectHeader from './project_header';


function PitchImperfect() {


  return (
    <div>
        <div className='bg-linear-to-b from-[#659FC9] to-white h-72'>
            <DetailsNavbar/>
        </div>

        <div className='flex flex-col text-left ml-24'>
            <div className='flex flex-row'>
                <ProjectHeader
                title="pitch imperfect"
                description="A pitch recongnition application integrated with Furhat robotics"
                />

                <div className='-mt-32 ml-72'>
                    <img src="/public/furhat.svg" 
                    className='flex justify-end w-[450px]'
                />
                </div>
            </div>
            <div className=' flex flex-col w-1/2 -mt-32'>
                <p className='font-bold text-xl'>description</p>
                <p>In this project, we had a Furhat robot act as a singning teacher to users. Furhat plays a pitch, which the user then replicates, and recieves feedback in real time from Furhat. The feedback is distributed via 2 ways - verbal cues and head nodding. The system tracks the user's pitch in realtime, making it possible to analyse the sung pitch and let Furhat give feedback. 
                    The application is Kotlin based and the work was distributed between 4 group memebers. </p>
            </div>

            <div className=' flex flex-col w-1/2 mt-8'>
                <p className='font-bold text-xl'>tech stack</p>
                <p>Kotlin, Java, Furhat SDK </p>
            </div>

            <div className=' flex flex-col w-1/2 mt-8'>
                <p className='font-bold text-xl'>duration</p>
                <p>10-2024 - 01-2025 </p>
            </div>

            <div className=' flex flex-col w-1/2 mt-8'>
                <p className='font-bold text-xl'>demo</p>
                <div class="mt-10">
                    <iframe 
                        width="640" 
                        height="360" 
                        src="https://www.youtube.com/embed/yD6-LCzyFVA" 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                    ></iframe>
                    </div>
            </div>
            
            <NavbarBottom/>
        </div>
    </div>
          
  );
}

export default PitchImperfect;
