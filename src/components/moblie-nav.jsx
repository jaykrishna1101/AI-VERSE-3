import { IconX } from '@tabler/icons-react';
import React from 'react';
import { Link } from 'react-router-dom';

function MobileNav({isOpen ,setIsOpen}) {

 const scrollto = (id) => {
  const element = document.getElementById(id);
  setIsOpen(true)
  if (element) {
    const offset = 200; // Approx height of your mobile nav
    const y = element.offsetTop - offset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};


  return (

    <div className={`block md:hidden fixed z-50 w-full h-[28rem] transition-all bg-neutral-900 ${isOpen ? "-translate-y-full" : "-translate-y-0" }  `}>
      <div className='w-full h-20 flex items-center justify-between px-3 pr-16'>
        <div className='h-16 w-16 scale-90  rounded-full'>
          <img src="/aiverse.png" alt="Logo" />
        </div>
      </div>

      <h1 className='avenger text-lg text-center bg-red-600 p-2'>Menu</h1>

      <div className='avenger tracking-wider w-full flex flex-col items-center mt-5 gap-2'>
        <button className='text-2xl mb-2 w-full text-center' onClick={() => scrollto("home")}>Home</button>
        <button className='text-2xl mb-2 w-full text-center' onClick={() => scrollto("event_moblie")}>Events</button>
        <button className='text-2xl mb-2 w-full text-center' onClick={() => scrollto("timeline")}>Timeline</button>

        <Link to="/team" className='text-2xl mb-2 w-full text-center'>
          Team
        </Link>

        <a
          href="https://www.instagram.com/aiverse_svpcet"
          target="_blank"
          rel="noopener noreferrer"
          className='text-2xl mb-2 w-full text-center'
        >
          Instagram
        </a>

        <button className='text-2xl mb-2 w-full text-center' onClick={() => scrollto("footer")}>
          Credits
        </button>
      </div>
    </div>
  );
}

export default MobileNav;
