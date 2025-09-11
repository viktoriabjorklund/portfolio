import { projects } from "./projects";
import ProjectItem from "./ProjectItem";
import ProjectItemRight from "./ProjectItemRight";

function ProjectSection() {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(0,0,0,0.5)_10%,rgba(0,0,0,0.4)_80%,transparent_99%)]"></div>

      <div className="flex flex-col xl:text-2xl xl:mt-20 2xl:mt-32">
        <p className="text-3xl text-center mb-24 font-semi-bold">projects</p>
        <div className="flex flex-col w-full xl:text-xl xl:mt-8 gap-20">
          {projects.map((project, index) =>
            index % 2 === 0 ? (
              <ProjectItem
                key={project.link}
                name={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                imgW={360}
                imgH={240}
              />
            ) : (
              <ProjectItemRight
                key={project.link}
                name={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                imgW={360}
                imgH={240}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
