import { useNavigate } from 'react-router-dom';

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
        <div className=' flex flex-col text-2xl xl:mt-20 2xl:mt-32'>
            <p className='text-center'>projects</p>
            <div className='flex flex-row justify-evenly w-full text-xl mt-8'>
            {projects.map((project, index) => (
                <div key={index} className="group">
                    <p className="font-bold cursor-pointer">{project.title}</p>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="border-t border-white w-60 origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-600" />
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
        )  
        };
export default ProjectSection;