import Navbar from './navbar';
import './App.css';
import DetailsNavbar from './details_navbar';
import NavbarBottom from './navbar_bottom';
import { useEffect, useRef, useState } from 'react';
import ProjectHeader from './project_header';


function Loadtester() {


  return (
    <div>
        <div className='bg-linear-to-b from-[#659FC9] to-white h-72'>
            <DetailsNavbar/>
        </div>

        <div className="flex flex-col text-left ml-24">
            <div className="flex flex-row">
                <div className="flex flex-col w-1/2 pr-8 text-left">
                     <ProjectHeader
                        title="loadtester angular UI"
                        description="Project part of intenship at the IT company Giesecke+Devrient"
                    />

                         <div className="mt-8">
                            <p className="font-bold text-xl mb-2">description</p>
                            <p>
                                This is one of my projects at my internship. The task was to rewrite an
                                old Vaadin UI to a new Angular based UI. Additionaly to implementing
                                already existing features, we also implemented new features such as
                                error threshold, possibility to download the results from a test, help
                                box and more. Some parts on the screens are erased due to security
                                reasons. The top image is furthermore cropped too much at the right.
                            </p>
                        </div>

                        <div className="mt-8">
                            <p className="font-bold text-xl">tech stack</p>
                            <p>Angular, Java, Spring Boot, Gitlab, Docker, Jenkins</p>
                         </div>

                        <div className="mt-8">
                            <p className="font-bold text-xl">project management</p>
                            <p>Jira, Gitlab</p>
                        </div>

                        <div className="mt-8">
                            <p className="font-bold text-xl">duration</p>
                            <p>06-2025 - 08-2025</p>
                        </div>
                </div>

    {/* Höger kolumn: bilder */}
    <div className="flex flex-col w-1/2 gap-8 items-center">
        <img src="/loadtester_home.png" className="w-96 h-auto" alt="loadtester home" />
        <img src="/loadtester_config.png" className="w-96 h-auto" alt="loadtester home" />
    </div>
    </div>
            <NavbarBottom/>
        </div>
        </div>
          
  );
}

export default Loadtester;
