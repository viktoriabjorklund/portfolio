// SkillsSection.jsx
import React, { useEffect, useRef, useState } from 'react';

    function SkillsSection() {
    const skillsRef = useRef(null);
    const [showLine, setShowLine] = useState(false);
    const skillsData = [
        {
          category: 'programming',
          skills: ['TypeScript', 'Angular', 'Python', 'Java', 'React', 'HTML/CSS', 'SQL'],
        },
        {
          category: 'project management',
          skills: ['Scrum', 'Jira', 'Linear'],
        },
        {
            category: 'CI/CD',
            skills: ['Git', 'BitBucket', 'Docker', 'Jenkins'],
          },

      ];

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setShowLine(true);
            }
        },
        { threshold: 0.8 }
        );

        if (skillsRef.current) {
        observer.observe(skillsRef.current);
        }

        return () => {
        if (skillsRef.current) {
            observer.unobserve(skillsRef.current);
        }
        };
    }, []);

    return (
        <>
        <div
            className="text-2xl text-left xl:text-xl px-6 xl:px-12 mt-54 xl:mt-36 2xl:mt-[500px] 2xl:pl-32"
            ref={skillsRef}
        >
            skills
            <div className="w-[100%] lg:w-[650px] overflow-hidden">
            <div
                className={`border-t border-white transition-transform duration-1000 ease-out origin-left transform ${
                showLine ? 'scale-x-100' : 'scale-x-0'
                }`}
            />
            </div>
        </div>

        <div className="mt-2 text-left text-xs xl:text-xl flex flex-col xl:flex-row px-6 xl:px-12 gap-8 xl:gap-16 2xl:pl-32">
        {skillsData.map((section, index) => (
            <div key={index} className="flex flex-row flex-wrap xl:flex-col">
            <p className="w-full mb-1 xl:mb-4 font-bold text-xl">{section.category}</p>
            {section.skills.map((skill, idx) => (
                <p key={idx} className="mr-2 mb-1 xl:mr-0 xl:mb-3 text-lg">{skill}</p>
            ))}
            </div>
        ))}
        </div>


        </>
    );
    }
export default SkillsSection;