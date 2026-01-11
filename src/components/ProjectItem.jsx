// ProjectItem.jsx
import { useNavigate } from 'react-router-dom';

function ProjectItem({ name, description, image, link, onReadMore, imgW, imgH, imgWMobile, imgHMobile }) {
  const navigate = useNavigate();

  const handleReadMore = () => {
    if (typeof onReadMore === 'function') return onReadMore();
    if (link) return navigate(link);
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-16 
                    px-6 md:px-0 md:pl-48 2xl:pl-80 md:w-2/3">
      
      {/* Bild */}
      <img
  src={image}
  alt={name}
  onClick={handleReadMore}
  style={{
    width: `${imgWMobile}px`,
    height: `${imgHMobile}px`,
  }}
  className="object-cover rounded-xl cursor-pointer md:hidden"
/>

<img
  src={image}
  alt={name}
  onClick={handleReadMore}
  style={{
    width: `${imgW}px`,
    height: `${imgH}px`,
  }}
  className="object-cover rounded-xl cursor-pointer hidden md:block"
/>


      {/* Text */}
      <div className="flex flex-col text-center md:text-left mt-4 md:mt-0">
        <p className="font-bold">{name}</p>
        <p className="mt-2">{description}</p>
        <div
          onClick={handleReadMore}
          className="mt-4 w-fit font-bold text-amber-200 transition-transform duration-200 
                     hover:translate-x-2 cursor-pointer mx-auto md:mx-0"
        >
          {'>'} read more
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
