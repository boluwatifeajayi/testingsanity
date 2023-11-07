'use client'
import React from 'react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import apple from '../assets/images/apple.png';
import Link from 'next/link';
import play from '../assets/images/play.png';
import country from '../assets/images/country.png';
import phone from '../assets/images/per.png';

const Hero = () => {
  const gradientBackground = {
    backgroundImage: 'linear-gradient(to bottom left, #020d1f, #072a63',
  };

  const phoneVariants = {
    hidden: {
      y: 200
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  

  return (
    <section id="hero" className='px-5 mt-48 hero-2 w-full'>
      <div className='block mx-auto hero'>
        <div className="mx-auto">
          <div>
            <h2 className='text-3xl md:text-7xl text-center  font-bold text-[#082630]'>
            Your Gateway to <span className='text-[#40B8D3]'>Data</span>  <br/> <span className='text-[#40B8D3]'>& AI </span> Excellence
            </h2>
            <p className='text-[#082630] text-lg md:text-xl text-center mt-6'>
            Learn and build with a community of data professionals 
            and AI developers
            </p>
          </div>
          <div className='flex mx-auto gap-5 justify-center mt-auto'>
              <button onClick={() => scrollToSection('comm')} className='bg-[#082630] px-8 md:px-14  mt-8 border border-[#082630] text-[#40B8D3] rounded-lg py-3'>Join Us</button>
           
          </div>
          
        </div>
        <div 
          className="flex items-end"
        >
          <div className='mx-auto mt-8 justify-center'>
          <video autoPlay playsInline muted loop className="w-full h-auto rounded-lg">
        <source src='https://res.cloudinary.com/kaypappi/video/upload/c_scale,q_auto,w_985/v1697289427/falcon/vid.mp4' type="video/mp4" />
      </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;