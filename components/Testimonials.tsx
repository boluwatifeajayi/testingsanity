'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import person1 from '../assets/images/person1.png';
import person2 from '../assets/images/person2.png';
import person3 from '../assets/images/person3.png';

const contents = [
  {
    title: 'Cloud Technologies',
    content: "We connect talents to quality mentorship support, provide robust training on cloud opportunities, and engage talents with hands-on experiences.",
    personImage: person2, // Add the person image for this content
  },
  {
    title: 'Artificial Intelligence',
    content: "More than a buzzword, Artificial Intelligence at Instig Labs is the beacon for future innovations. We demystify AI through clear education, inspire groundbreaking solutions, and integrate intelligent automation into real-world applications.",
    personImage: person3, // Add the person image for this content
  },
  {
    title: 'Data Analytics',
    content: "We champion the transformative power of data. Our commitment is to educate talents on extracting insights, innovate with cutting-edge techniques, and elevate businesses with data-informed strategies.",
    personImage: person1, // Add the person image for this content
  },
];

const cardColors = ['bg-[#2792AA]', 'bg-[#2565B0]', 'bg-[#2825B0]'];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? contents.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === contents.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === contents.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className='story mt-12 py-16 px-6 md:px-20 bg-[#082630]'>
      <div className='container mx-auto block md:flex gap-3 flex-col md:flex-row justify-between'>
        <div className='w-full md:w-1/2'>
          <p className='text-[#40B8D3] font-bold'>ABOUT INSTIG LABS</p>
          <p className='text-white md:text-5xl text-4xl font-bold mt-2 mb-5'>
           Why InstigLabs
          </p>
        </div>
        <div className='w-full md:w-1/2'>
          <p className='text-gray-50 mt-1'>
          We are on a mission to empower the next generation of data analytics and AI experts. Our platform is designed to equip you with the skills, knowledge, and resources you need to excel in these rapidly evolving fields.
          </p>
        </div>
      </div>

      <div className='container mt-8 mx-auto block md:flex gap-6 flex-col md:flex-row justify-between'>
        <div className='w-full mb-6 md:mb-1 md:w-1/2'>
          <Image alt="person" src={contents[activeIndex].personImage} /> {/* Use the person image based on activeIndex */}
        </div>
        <div className='w-full mb-6 md:mb-1 md:w-1/2'>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`w-full sm:w-[100%] h-full ${cardColors[activeIndex]} rounded-lg p-4 border border-gray-100`}

          >
            <div className="w-full h-full p-6 flex flex-col justify-between">
              <div>
                <button onClick={handlePrevClick} className="pr-2 py-1 text-gray-600 hover:text-gray-800">
                  <Image src="/arrow-left.svg" className='w-full h-full' alt='' width={100} height={100} />
                </button>
                <button onClick={handleNextClick} className="py-1 text-gray-600 hover:text-gray-800">
                  <Image src="/arrow-right.svg" className='w-full h-full' alt='' width={100} height={100} />
                </button>
              </div>

              <div className='mt-20 sm:mt-0'>
                <h2 className="text-xl sm:text-3xl mb-3 font-semibold text-white">{contents[activeIndex].title}</h2>
                <p className='text-white text-xs sm:text-lg'>{contents[activeIndex].content}</p>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
