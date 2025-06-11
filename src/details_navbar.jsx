import { useNavigate } from 'react-router-dom';

function DetailsNavbar() {
    const navigate = useNavigate();
    return (
      <div className="flex justify-between items-center w-full p-5 text-white fixed top-0 left-0 z-20 bg-opacity-50">
        <div className="text-2xl">
          viktoria björklund
        </div>
  
        <div className="flex space-x-10 text-2xl text-amber-200">
          <div
          className='cursor-pointer'
          onClick={() => navigate("/")}
          >home</div>

        </div>
      </div>
    );
  }
  
  export default DetailsNavbar;
  