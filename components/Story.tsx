'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import pic1 from '../assets/images/pic1.png';
import pic2 from '../assets/images/pic2.png';
import pic3 from '../assets/images/pic3.png';
import pic4 from '../assets/images/pic4.png';
import pic5 from '../assets/images/pic5.png';
import Carousel from './carousel/Carousel';

import { useMediaQuery } from '@react-hook/media-query';

const Explore: React.FC = () => {
  const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Define your breakpoint
  const numberOfCardsToShow = isSmallScreen ? 1 : 4; // Number of cards to show initially

  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    {
      image: pic1,
      title: '5 tricks you should know about SEO',
      date: 'September 18, 2023',
      price: '5 minutes read',
    },
    {
      image: pic2,
      title: '5 tricks you should know about SEO',
      date: 'September 18, 2023',
      price: '5 minutes read',
    },
    {
      image: pic5,
      title: '5 tricks you should know about SEO',
      date: 'September 18, 2023',
      price: '5 minutes read',
    },
    {
      image: pic2,
      title: '5 tricks you should know about SEO',
      date: 'September 18, 2023',
      price: '5 minutes read',
    },
    {
      image: pic5,
      title: '5 tricks you should know about SEO',
      date: 'September 18, 2023',
      price: '5 minutes read',
    },
    {
      image: pic1,
      title: 'Cote d’Azur, France',
      date: 'September 18, 2023',
      price: '5 minutes read',
    },
    // Add more cards here
  ];

  const handleNext = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + cards.length) % cards.length);
  };

  return (
    <section id="explore" className="story px-5 md:px-0 py-20 container mx-auto">
      <div className="hero">
        <div>
        <div className="block md:flex px-3 md:px-0 mb-4 gap-2 md:gap-12">
        <div className="w-full md:w-1/2">
          <p className="text-[#40B8D3] font-bold">INSTIGLAB BLOG</p>
          <p className="text-[#082630] md:text-5xl text-4xl font-bold mt-2 mb-5">
            Stay Connected
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-[#082630] text-lg mt-1">
            Stay updated with the latest industry insights, trends, and expert
            opinions by exploring our blog.
          </p>
        </div>
      </div>

      <Carousel/>

        </div>
      </div>
    </section>
  );
};

export default Explore;