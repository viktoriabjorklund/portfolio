import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleNavigateProjects = () => {
    navigate('/', { state: { scrollTo: 'projects' } });
  };

  const handleNavigateContact = () => {
    navigate('/', { state: { scrollTo: 'contact' } });
  };

  return (
    <div className="flex justify-between items-center w-full p-5 text-white fixed top-0 left-0 z-20 bg-opacity-50">
      <div className="xl:text-2xl">viktoria björklund</div>

      <div className="flex space-x-10 xl:text-2xl text-amber-200">
        <div onClick={handleNavigateProjects} className="cursor-pointer">
          projects
        </div>
        <div onClick={handleNavigateContact} className="cursor-pointer">
          contact
          </div>
      </div>
    </div>
  );
}

export default Navbar;
