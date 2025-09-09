// ProjectItem.jsx
import { useNavigate } from 'react-router-dom';

function ProjectItem({ name, description, image, link, onReadMore, imgW, imgH }) {
  const navigate = useNavigate();

  const handleReadMore = () => {
    if (typeof onReadMore === 'function') return onReadMore();
    if (link) return navigate(link);
  };

  return (
    <div className="pl-48 w-2/3 flex items-center gap-6 mb-16">
      {/* Bild till vänster */}
      <img
        src={image}
        alt={name}
        className="object-cover rounded-xl flex-shrink-0"
        style={{width: imgW, height: imgH}}
      />

      {/* Textkolumn till höger (vänsterjusterad) */}
      <div className="flex flex-col text-left">
        <p className="font-bold">{name}</p>
        <p className="mt-2">{description}</p>
        <div
          onClick={handleReadMore}
          className="mt-4 w-fit font-bold text-amber-200 transition-transform duration-200 hover:translate-x-2"
        >
          {'>'} read more
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
