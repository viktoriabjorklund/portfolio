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
            skills: ['Git', 'Docker'],
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
            className="text-left xl:text-xl px-6 xl:px-12 xl:mt-36 2xl:mt-[30%] w-2/5 2xl:pl-32"
            ref={skillsRef}
        >
            skills
            <div className="w-[240px] lg:w-[650px] overflow-hidden">
            <div
                className={`border-t border-white transition-transform duration-1000 ease-out origin-left transform ${
                showLine ? 'scale-x-100' : 'scale-x-0'
                }`}
            />
            </div>
        </div>

        <div className="mt-2 text-left text-xs xl:text-xl flex flex-row px-6 xl:px-12 gap-8 xl:gap-16 2xl:pl-32">
        {skillsData.map((section, index) => (
            <div key={index} className="flex flex-col">
            <p className="mb-1 xl:mb-4 font-bold">{section.category}</p>
            {section.skills.map((skill, idx) => (
                <p key={idx} className="mb-1 xl:mb-3">{skill}</p>
            ))}
            </div>
        ))}
        </div>

        </>
    );
    }
export default SkillsSection;