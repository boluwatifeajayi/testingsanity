'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../assets/images/logo.svg';
import Link from 'next/link';

const Header: React.FC = () => {
 
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };


  return (
    <div>

   
    <div className='hidden md:block'>
      <nav
      className={`px-3 md:px-6 py-5 bg-white gap-8 md:gap-96 flex shadow-sm nav  mx-auto  fixed w-full top-0 z-10`}
    >
      <div className="flex items-center w-full max-w-7xl">

        <Link href="/"><Image alt="logo" src={logo}  className="mr-0" /></Link>
        
        <ul className="md:flex space-x-20 mx-auto hidden text-sm font-bold text-[#082630]">
          <Link href="/events" className="cursor-pointer hover:font-bold">
            Events
          </Link>
          <Link href="/community" className="cursor-pointer hover:font-bold">
            Community
          </Link>
          <Link className="cursor-pointer hover:font-bold" href="/blog">
            Blog
          </Link>
          <Link href="/about" className="cursor-pointer hover:font-bold">
            About
          </Link>
        </ul>
        <Link href="/contact" className="text-[#40B8D3] px-6 py-3 text-xs md:text-sm  bg-[#082630] rounded-lg ml-auto md:ml-0">
          Contact Us
        </Link>
      </div>
      
    </nav>
    </div>



      <div className='md:hidden block'>
      <div className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm py-10 text-white flex items-center justify-between z-20 px-6">
      <div>
       <Link href="/"><Image alt="logo" src={logo}  className="mr-20" /></Link>
      </div>
      <div>
        
      </div>
      <div>
        <button
          className="text-black hover:text-gray-300"
          onClick={toggleSidebar}
        >
          <Image src="/burger.svg" alt="Logo" width='500' height='500' className="w-full" />
        </button>
      </div>
      {sidebarVisible && (
        <div className="fixed top-0 right-0 h-screen w-[65%] bg-white shadow-lg transition-transform duration-300 transform translate-x-0">
         
          <div className="h-screen relative">
    
            <div className="flex-1 bg-white  text-black relative">
            <div className="flex flex-col justify-center h-full">
          

      <div className="text-2xl sm:text-6xl text-black pl-10 py-36 font-bold text-left">
        <Link href="/events">
          <p className="text-2xl mb-4 cursor-pointer hover:transform hover:translate-x-2">
            Events
          </p>
        </Link>
        <Link href="/community">
          <p className="text-2xl mb-4 cursor-pointer hover:transform hover:translate-x-2">
            Community
          </p>
        </Link>
        <Link href="/blog">
          <p className="text-2xl mb-4 cursor-pointer hover:transform hover:translate-x-2">
            Blog
          </p>
        </Link>
        <Link href="/about">
          <p className="text-2xl mb-4 cursor-pointer hover:transform hover:translate-x-2">
            About
          </p>
        </Link>
        <Link href="/media">
          <p className="text-2xl mb-4 cursor-pointer hover:transform hover:translate-x-2">
            Contact Us
          </p>
        </Link>
  
        </div>
      </div>
    </div>

    </div>
          <button
            className="text-black hover:text-gray-300 absolute top-8 right-8"
            onClick={toggleSidebar}
          >
             <Image src="/ex.svg" alt="Logo" width='500' height='500' className="w-full" />
          </button>
        </div>
      )}
    </div>
      </div>


    </div>
  );
};

export default Header;
