// ProjectItemRight.jsx
import { useNavigate } from 'react-router-dom';

function ProjectItemRight({ name, description, image, link, onReadMore, imgW, imgH }) {
  const navigate = useNavigate();

  const handleReadMore = () => {
    if (typeof onReadMore === 'function') return onReadMore();
    if (link) return navigate(link);
  };

  return (
    <div className="pr-48 2xl:pr-80 w-2/3 ml-auto flex items-center gap-6 justify-end mb-16">
      {/* Textkolumn till vänster om bilden */}
      <div className="flex flex-col text-left">
        <p className="font-bold">{name}</p>
        <p className="mt-2">{description}</p>
        <div
          onClick={handleReadMore}
          className="mt-4 w-fit font-bold text-amber-200 transition-transform duration-200 hover:translate-x-2 cursor-pointer"
        >
          {'>'} read more
        </div>
      </div>

      {/* Bild längst till höger */}
      <img
        src={image}
        alt={name}
        width={imgW}
        height={imgH}
        onClick={handleReadMore}
        className="object-cover rounded-xl flex-shrink-0 cursor-pointer"
        
      />
    </div>
  );
}

export default ProjectItemRight;
