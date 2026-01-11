import '../App.css';
import DetailsNavbar from '../components/details_navbar';
import NavbarBottom from '../components/navbar_bottom';
import ProjectHeader from '../components/project_header';

function PitchImperfect() {
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
              title="pitch imperfect"
              description="A pitch recognition application integrated with Furhat robotics"
            />

            <div className="mt-8">
              <p className="font-bold text-xl mb-2">description</p>
              <p>
                In this project, we had a Furhat robot act as a singing teacher to users.
                Furhat plays a pitch, which the user then replicates, and receives feedback 
                in real time. The feedback is distributed via 2 ways – verbal cues and head 
                nodding. The system tracks the user’s pitch in real time, making it possible 
                to analyse the sung pitch and let Furhat give feedback. 
                The application is Kotlin based and the work was distributed between 4 group members.
              </p>
            </div>

            <div className="mt-8">
              <p className="font-bold text-xl">tech stack</p>
              <p>Kotlin, Java, Furhat SDK</p>
            </div>

            <div className="mt-8">
              <p className="font-bold text-xl">duration</p>
              <p>10/2024 - 01/2025</p>
            </div>

            <div className="mt-8">
              <p className="font-bold text-xl mb-2">demo</p>
              <iframe
                width="640"
                height="360"
                src="https://www.youtube.com/embed/yD6-LCzyFVA"
                title="YouTube video player"
                className="mt-4 rounded-xl shadow-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Höger kolumn: huvudbild */}
          <div className="flex w-1/2 justify-center">
            <img
              src="/assets/furhat.svg"
              className="w-[450px] h-auto"
              alt="furhat robot"
            />
          </div>
        </div>

        {/* Bottom nav */}
        <NavbarBottom />
      </div>
    </div>
  );
}

export default PitchImperfect;
