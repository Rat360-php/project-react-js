import { useEffect, useState } from 'react';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const menu = show ? 'left-0' : '-left-full';
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    });
  });

  let layar = scroll ? 'py-6 bg-white shadow' : 'py-4';

  return (
    <div className={`navbar fixed w-full transition-all ${layar} `}>
      <div className='container mx-auto px-4 '>
        <div className='navbar-box flex items-center justify-between'>
          <div className='logo'>
            <h1 className='text-xl font-semibold'>Ngoding</h1>
          </div>
          {/* Menu Links */}
          <ul
            className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:text-black md:translate-y-0 md:p-0 md:m-0 md:transition-none gap-8 fixed ${menu} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-slate-500 shadow-lg bg-slate-700 transition-all duration-500 font-bold text-white`}
          >
            <li className='flex items-center gap-3'>
              <i class='ri-home-4-line md:hidden block text-3xl'></i>
              <a href='#' className='font-medium opacity-75'>
                Home
              </a>
            </li>
            <li className='flex items-center gap-3'>
              <i class='ri-information-2-line md:hidden block text-3xl'></i>
              <a href='#' className='font-medium opacity-75'>
                About
              </a>
            </li>
            <li className='flex items-center gap-3'>
              <i class='ri-settings-3-line md:hidden block text-3xl'></i>
              <a href='#' className='font-medium opacity-75'>
                Service
              </a>
            </li>
            <li className='flex items-center gap-3'>
              <i class='ri-image-line md:hidden block text-3xl'></i>
              <a href='#' className='font-medium opacity-75'>
                Project
              </a>
            </li>
          </ul>
          {/* Social and Menu Icon */}
          <div className='social flex gap-2 items-center'>
            <a
              href='#'
              className='bg-slate-700 px-5 py-2 rounded-full text-white font-bold hover:bg-slate-800'
            >
              Social Media
            </a>
            {/* Icon untuk membuka atau menutup menu */}
            <i
              className={`${
                show ? 'ri-close-line' : 'ri-menu-3-line'
              } text-2xl cursor-pointer md:hidden block`}
              onClick={handleClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
