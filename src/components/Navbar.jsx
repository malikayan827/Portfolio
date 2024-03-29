import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../style';
import { navLinks } from '../constants';
import { menu, close, logo2, logo3,bg } from '../assets';
import { github,linkedin } from '../assets';
const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddindX} w-full flex items-center py-5 fixed top-0 z-20 `}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo3} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Muhammad Ayan  &nbsp;
            <span className='sm:block hidden'> | Software Engineer</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex gap-10 justify-end'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? 'text-white' : 'text-secondary'}
                hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setToggle(!toggle);
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li>
                <a
                  href='https://github.com/malikayan827'
                  target='_blank'
                  rel='noreferrer'
                  className={`font-poppins font-medium cursor-pointer text-[16px] text-secondary `}
                >
                <img src={github} alt='github' className='w-7 h-7 ' /> 
                </a>
                
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/muhammad-ayan-b9643a211/'
                  target='_blank'
                  rel='noreferrer'
                  className={`font-poppins font-medium cursor-pointer text-[16px] text-secondary `}
                >
                <img src={linkedin} alt='github' className='w-6 h-6 mr-10' /> 
                </a>
                
              </li>
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

         <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li>
                <a
                  href='https://github.com/malikayan827'
                  target='_blank'
                  rel='noreferrer'
                  className={`font-poppins font-medium cursor-pointer text-[16px] text-secondary `}
                >
                 
                </a>
                <img src={github} alt='github' className='w-6 h-6' /> 
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/muhammad-ayan-b9643a211/7'
                  target='_blank'
                  rel='noreferrer'
                  className={`font-poppins font-medium cursor-pointer text-[16px] text-secondary `}
                >
                <img src={linkedin} alt='github' className='w-6 h-6 mr-10' /> 
                </a>
                
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;