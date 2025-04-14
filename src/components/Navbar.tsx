import { useState } from 'react';
import { dahlia_new, menu, closeMenu } from '../assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  const handleClick = () => setToggle(!toggle)

  return (

    <div className='w-full h-[80px] z-10 bg-[#394931] fixed drop-shadow-lg relative rounded-b-2xl'>
      <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>
        <Link to={'/'}>
          <div className='flex items-center'>
            <img src={dahlia_new} alt="dahlia" className='sm:ml-2 ss:ml-2  w-[70px] h-[70px]' />
            <h1 className='ml-1 text-4xl md:text-7xl whitespace-nowrap font-qwitcher'>Prone To Wander</h1>
          </div>
        </Link>
        <div className='flex items-center'>
          <ul className='hidden md:flex text-white'>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/about'}><li>About</li></Link>
            <li>Gallery</li>
          </ul>
        </div>

        <div className="lg:hidden" onClick={handleClick}>
          <img src={menu} alt="menu" className='w-8 h-8 object-contain mr-10' />
        </div>

        <ul className={!toggle ? 'absolute top-0 right-0 bg-[#333333] w-[calc(80%)] rounded-2xl drop-shadow-xl' : 'hidden'}>
          <div className='lg:hidden absolute top-6 right-0' onClick={handleClick}>
            <img src={closeMenu} alt="closeMenu" className='w-8 h-8 object-contain mr-10' />
          </div>
          <div className='ml-2 mt-2'>
            <Link to={'/'}><li>Home</li></Link>
            <Link to={'/about'}><li>About</li></Link>
            <li>Gallery</li>
            <li>Archive</li>
          </div>
          <hr className='h-px ml-15 mr-15 my-2 bg-gray-400 border-0' />
          <div className='flex flex-col'>
            <button className='border-gray-400 mr-6 ml-6 my-2 bg-transparent px-6 py-2 hover:bg-white hover:text-black'>
              Login
            </button>
            <button className='border-none mr-6 ml-6 my-2 mb-4 px-6 py-2 hover:bg-white hover:text-black'>
              Sign Up
            </button>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar