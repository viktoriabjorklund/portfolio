import Navbar from './navbar';
import './App.css';
import DetailsNavbar from './details_navbar';
import NavbarBottom from './navbar_bottom';
import { useEffect, useRef, useState } from 'react';
import ProjectHeader from './project_header';

function PlantCare() {
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
          <div className="flex flex-col w-1/2 2xl:w-2/5 pr-8">
            <ProjectHeader
              title="plant care prototype"
              description="A UX research project which culminated in a Figma prototype"
            />

            <div className="mt-8">
              <p className="font-bold text-xl mb-2">description</p>
              <p>
                This UX research project aimed to explore how plant owners interact with
                their plants and what challenges they face. The project resulted in a 
                Figma prototype. The work was carried out in a group, where I contributed 
                to both the research and design phases. 
              </p>
            </div>

            <div className="mt-8">
              <p className="font-bold text-xl">duration</p>
              <p>10/2024 - 01/2025</p>
            </div>

            <div className="mt-8 2xl:mt-48">
              <p className="font-bold text-xl mb-2">the process</p>
              <p>
                The project followed the double diamond process and can therefore be divided 
                into the four stages: define, discover, develop, deliver.
              </p>

              <div className="mt-6">
                <p className="font-bold">discover</p>
                <div className="border-t border-black w-1/3 mb-2"></div>
                <p>
                  Even though it was not intended that we were going to think of solutions 
                  in this phase, we hypothesized that our solution would include some kind 
                  of community to make plant care more interdependent among plant owners. 
                  We also discussed which methods would be suitable for plant owners, and 
                  we all agreed that interviews should be one of the methods. We also 
                  considered diary studies, product reviews and heuristic evaluation as 
                  alternatives, but in the end we chose interviews and diary studies to 
                  focus directly on plant owners.
                </p>
              </div>

              <div className="mt-10">
                <p className="font-bold">define</p>
                <div className="border-t border-black w-1/3 mb-2"></div>
                <p>
                In the Define phase, we analyzed data collected from interviews and diary studies to 
                identify key challenges faced by plant owners. We began by compiling interview responses 
                in Excel, color-coding them according to themes, and then organizing them into an affinity 
                diagram in Miro. This helped us cluster ideas, rank themes by importance, and identify 
                “Knowledge of plant care” as the most critical issue affecting both novice and experienced 
                plant owners. The interviews highlighted difficulties such as keeping plants alive, understanding 
                care routines, and managing different plant needs.
                <p className='mt-4'></p>
                The diary studies complemented these findings by providing insight into daily routines and frustrations. 
                They confirmed that plant owners often struggled with uncertainty about plant health, and that accurate 
                knowledge not only improves plant care but also provides emotional satisfaction.
                <p className='mt-4'></p>
                Based on these insights, we created <b>personas</b> – Hannah, a young, knowledgeable plant enthusiast, and Johan, 
                a middle-aged man with limited time and knowledge. We developed <b>scenarios</b> for each persona to capture their 
                goals and struggles, and from these, we formulated <b>POVs</b> (Points of View).
                <p className='mt-4'></p>
                Finally, we generated <b>HMW</b> (How Might We) questions aligned with the POVs. After discussing and voting, we 
                selected two final HMWs that best addressed the needs of our personas and provided a foundation for the next phase.
                </p>
              </div>

              <div className="mt-10">
                <p className="font-bold">develop</p>
                <div className="border-t border-black w-1/3 mb-2"></div>
                <p>
                In the Develop phase, we began with the method <b>brainwrite</b> as out first ideation method. Each one of us
                wrote 3 different ideas in response to the HMW's and problem statement. In the following rounds, each persona
                continued on the notes from the previous person. After three rounds, we tructured the data into clusters of frequently
                appeared themes.
                <p className='mt-4'></p>
                We then conducted the <b>worst possible idea method</b>. At first, each one of us individually generated solutions 
                to the HMW and problem statement. We then passed on our own worst idea to another person in your group, and had them 
                extended, and finally we voted for what idea that was the worst. After this, we did a final round of <b>brainstorming </b> 
                where we discussed the ideas generated and determine core features.
                <p className='mt-4'></p>
                After this, we started with the <b>low fidelity prototyping</b>, focusing on the core features. This was done via the parallel
                design method. We did a user testing of the low fidelity prototype by using the <b>Wizard of Oz method</b> and combining 
                this with the <b>Think Aloud method</b>. Continious refinements and discussions took place in order before we could start developing the 
                <b> high fidelity prototype</b>.
                </p>
              </div>

              <div className="mt-10">
                <p className="font-bold">deliver</p>
                <div className="border-t border-black w-1/3 mb-2"></div>
                <p>
                Finally, we had a finalised prototype which we in the first batch conducted user tests on via the 
                the think aloud method. We did also employ <b>unstructured interview </b> evaluation methods in order to gain 
                insights regarding the perception of the prototype.
               
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-1/2 flex-col items-center gap-6">
            <img
              src="assets/2plants.svg"
              className="w-[400px] 2xl:w-[600px] h-auto"
              alt="plant care prototype illustration"
            />
            <img
              src="assets/pov2.jpg"
              className="w-[400px] 2xl:w-[600px] h-auto mt-64 2xl:mt-6"
              alt="plant care prototype illustration"
            />
            <p className='text-left'>Some of the HMW</p>

            <img
              src="assets/scenario2.jpg"
              className="w-[400px] 2xl:w-[600px] h-auto mt-6 2xl:mt-6"
              alt="plant care prototype illustration"
            />
            <p className='text-left'>Some scenarios for the personas</p>

            <img
              src="assets/brainwrite.jpg"
              className="w-[400px] 2xl:w-[600px] h-auto mt-6 2xl:mt-6"
              alt="plant care prototype illustration"
            />
            <p className='text-left'>The conducted brainwrite</p>

            <img
              src="assets/commonthemes.jpg"
              className="w-[400px] 2xl:w-[600px] h-auto mt-6 2xl:mt-6"
              alt="plant care prototype illustration"
            />
            <p className='text-left'>Common themes from brainwrite</p>

          </div>
        </div>
        <img
              src="assets/plantsection.png"
              alt="plant care prototype illustration"
              className='mr-24 mt-14'
            />

        <NavbarBottom />
      </div>
    </div>
  );
}

export default PlantCare;
