import '../App.css';
import DetailsNavbar from '../components/details_navbar';
import NavbarBottom from '../components/navbar_bottom';
import ProjectHeader from '../components/project_header';


function LemmeCook() {
    return (
      <div>
        {/* Header bakgrund + nav */}
        <div className="bg-linear-to-b from-[#659FC9] to-white h-72">
          <DetailsNavbar />
        </div>
  
        {/* Content */}
        <div className="flex flex-col text-left ml-24 mr-24">
          {/* TOP: vänster text, höger bild */}
          <div className="flex flex-row items-start gap-12">
            {/* Vänster kolumn */}
            <div className="flex flex-col w-1/2 pr-8">
              <ProjectHeader
                title="let me cook"
                description="A social web application where you can upload, share and see other users’ recipes!"
              />
  
              <div className="mt-8">
                <p className="font-bold text-xl mb-2">description</p>
                <p>
                This web application aimed to solve the problem one can often face which is - what should i cook for dinner today? 
                The app is social as you can see your friends recipes on the application, and save them to your own archieve. The app 
                does also offer AI-integrated recipe suggestions, adding an extra spark of creativity. The work was done via agile methods, 
                specifically scrum, and was divided between 5 group memebers. My tasks was within frontend and during the second part of the project, 
                I acted as product owner.
                </p>
              </div>
  
              <div className="mt-8">
                <p className="font-bold text-xl">tech stack</p>
                <p>JavaScript, TailwindCSS, React, Flask, Ollama, Firebase</p>
              </div>
  
              <div className="mt-8">
                <p className="font-bold text-xl">project management</p>
                <p>Jira, Github, Discord</p>
              </div>
  
              <div className="mt-8">
                <p className="font-bold text-xl">duration</p>
                <p>02/2025 - 04/2025</p>
              </div>
            </div>
  
            {/* Höger kolumn: huvudbild */}
            <div className="flex w-1/2 justify-center">
              <img
                src="/assets/lemmecook1.png"
                className="w-[600px] 2xl:w-[800px] h-auto"
                alt="mingle mixer home"
              />
            </div>
          </div>
  
          {/* BOTTOM: tre centrerade bilder */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-36 place-items-center">
            <img src="assets/lemmecook2.png" className="w-[650px] 2xl:w-[800px] h-auto" />
            <img src="assets/lemmecook3.png" className="w-[650px] 2xl:w-[800px] h-auto" />
            <img src="assets/lemmecook4.png" className="w-[650px] 2xl:w-[800px] h-auto" />
            <img src="assets/lemmecook5.png" className="w-[650px] 2xl:w-[800px] h-auto" />
          </div>


  
          {/* Bottom nav */}
          <NavbarBottom />
        </div>
      </div>
    );
  }
  

export default LemmeCook;
