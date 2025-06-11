import { useNavigate } from 'react-router-dom';

function NavbarBottom() {
    const navigate = useNavigate();

    return (
        <div className='flex justify-between w-full mt-64 mb-16 text-xl font-bold'>
            <p
            className='cursor-pointer'
            onClick={() => navigate("/")}
            >{'<'} home</p>
            <p className='mr-24'>next project {'>'}</p>
        </div>
    );
  }
  
  export default NavbarBottom;
  