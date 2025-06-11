import { useEffect, useRef, useState } from 'react';

function ProjectHeader({title, description}) {
          const skillsRef = useRef(null);
          const [showLine, setShowLine] = useState(false);
    
        
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
        <div className=' flex flex-col w-1/3'>
        <p className='font-bold text-3xl -mt-16'>{title}</p>
        
        <div
            className="text-left text-xl w-full"
            ref={skillsRef}
        >
            <div className="overflow-hidden">
            <div
                className={`border-t border-black transition-transform duration-1000 ease-out origin-left transform ${
                showLine ? 'scale-x-100' : 'scale-x-0'
                }`}
            />
            </div>
        </div>
        <p className='mt-3'>{description}</p>

    </div>
    );
  }
  
  export default ProjectHeader;
  