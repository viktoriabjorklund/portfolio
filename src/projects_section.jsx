import { useNavigate } from 'react-router-dom';
import ProjectItem from './ProjectItem';
import ProjectItemRight from './ProjectItemRight';

function ProjectSection(){
    const navigate = useNavigate();

    const projects = [
        {
          title: 'let me cook',
          description:
            'Created a full-stack social recipe website using agile methods.',
          tags: '#JavaScript #Python #React #Scrum',
          link: '/lemme-cook',
        },
        {
          title: 'pitch imperfect',
          description: 'Created pitch recognition application.',
          tags: '#Kotlin #Furhat #Pitch recognition',
          link: '/pitch-imperfect',
        },
        {
            title: 'plant care prototype',
            description: 'Created a prototype for a plant care mobile application.',
            tags: '#UX research #UX design, #Figma, #Double diamond process',
            link: '/plant-care',
          },

          {
            title: 'mingle mixer',
            description: 'Created drink website, tailored for finding and saving drinks',
            tags: '#JavaScript, #REST API, #UX design',
            link: '/mingle-mixer',
          },
      ];
    return(
      /* 
        <div className=' flex flex-col xl:text-2xl xl:mt-20 2xl:mt-32'>
            <p className='text-center'>projects</p>
            <div className='flex flex-col md:flex-col justify-evenly w-full xl:text-xl xl:mt-8'>
            {projects.map((project, index) => (
                <div key={index} className="group">
                    <p className="font-bold cursor-pointer">{project.title}</p>
                    <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="border-t border-white xl:w-60 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-600" />
                    <p className="w-60 text-left mt-4">{project.description}</p>
                    <p className="w-60 text-left mt-4">{project.tags}</p>
                    <p
                        className="font-bold text-left mt-8 text-amber-200 cursor-pointer transition-transform duration-200 hover:translate-x-2"
                        onClick={() => navigate(project.link)}
                    >
                        {'>'} read more
                    </p>
                    </div>
                </div>
                ))}

            </div>
        </div>
        ÄNDRA HÄR: ta bort md:flex-row + justify-evenly, lägg gap för mellanrum */
        <div className=' flex flex-col xl:text-2xl xl:mt-20 2xl:mt-32'>
            <p className='text-center'>projects</p>
            <div className='flex flex-col md:flex-col justify-evenly w-full xl:text-xl xl:mt-8'>
            {projects.map((project, index) => (
                <div key={index} className="group">
                    <p className="font-bold cursor-pointer">{project.title}</p>
                    
                </div>
                ))}
                <ProjectItem
                  name="let me cook"
                  description="Created a full-stack social recipe website using agile methods."
                  image="public/Group 24.svg"
                  link="/lemme-cook"
                  imgW={360}
                  imgH={240}
                />

                <ProjectItemRight
                  name="pitch imperfect"
                  description="Created a full-stack social recipe website using agile methods."
                  image="/public/furhat.png"
                  link="/pitch-imperfect"
                  imgW={360}
                  imgH={240}
                />

                <ProjectItem
                  name="plant care app"
                  description="Created a full-stack social recipe website using agile methods."
                  image="public/2plants.svg"
                  link="/plant-care"
                  imgW={360}
                  imgH={350}
                />

            </div>
        </div>

        )  
        };
export default ProjectSection;