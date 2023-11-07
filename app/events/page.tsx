'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import frame1 from '../../assets/images/Frame 38515 (2).svg';
import frame2 from '../../assets/images/Frame 38515 (1).svg';
import frame3 from '../../assets/images/Frame 38515.svg';
import photo1 from '../../assets/images/Group 38594 (1).png';
import photo2 from '../../assets/images/Group 38594.png';
import photo3 from '../../assets/images/Rectangle 4997 (1).png';
import photo4 from '../../assets/images/Rectangle 4997 (2).png';
import photo5 from '../../assets/images/Rectangle 4997.png';
import Footer from '@/components/Footer';
import cal from '../../assets/images/cal.png';
import time from '../../assets/images/time.png';
import three from '../../assets/images/woman.png';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('section-A');

  const handleTabClick = (tab:any) => {
    setActiveTab(tab);
  };

  return (
    <div className="text-[#082630] bg-[#FFFCF3]">
      <Header />
      <section
        id="hero"
        className="px-5 pt-48 container mx-auto justify-center hero-2 w-full"
      >
        <div className='block mx-auto hero'>
        <div className="mx-auto">
          <div>
            <h2 className='text-3xl md:text-7xl text-center  font-bold text-[#082630]'>
            Join industry experts as they share
            their knowledge and insights on the latest
            trends and technologies in data 
            analytics and AI.
            </h2>
            
          </div>
          
          
        </div>
        
      </div>
      </section>

      <section
  id="tabs"
  className="px-5 mt-20 hidden md:block container mx-auto justify-center hero-2 w-full"
>
  <div className="container mx-auto flex border justify-center gap-28 py-4">
    <div
      onClick={() => handleTabClick('section-A')}
      className={`cursor-pointer ${
        activeTab === 'section-A'
          ? 'bg-white rounded-full p-2'
          : 'border-b-4 border-transparent'
      }`}
    >
      <Image src={frame1} alt="frame" />
    </div>
    <div
      onClick={() => handleTabClick('section-B')}
      className={`cursor-pointer ${
        activeTab === 'section-B'
          ? 'bg-white rounded-full p-2'
          : 'border-b-4 border-transparent'
      }`}
    >
      <Image src={frame2} alt="frame" />
    </div>
    <div
      onClick={() => handleTabClick('section-C')}
      className={`cursor-pointer ${
        activeTab === 'section-C'
          ? 'bg-white rounded-full p-2'
          : 'border-b-4 border-transparent'
      }`}
    >
      <Image src={frame3} alt="frame" />
    </div>
  </div>
</section>


      <section
        id="section-A"
        className={`px-5 mt-20 container mx-auto justify-between hero-2 w-full ${
          activeTab === 'section-A' ? 'block' : 'hidden'
        }`}
      >
       <div className='mx-4 md:mx-44 py-4'>

        <div className='mb-12 '>
          <Image src={photo1} alt="frame"/>
          <p className='pt-2 text-lg md:text-3xl'>Future of Architecture Summit</p>
          <p className='pt-4'>Unlock the power of data analytics with Instig Data. Dive into a world of data-driven insights. Discover how data can drive innovation and growth in your career.</p>
          <div className='flex mt-4 gap-3'>
          <div className='flex gap-1'><Image src={cal} alt=""/><p>December 3, 2023</p></div>
          <div className='flex gap-1'><Image src={time} alt=""/><p>6PM - 8PM</p></div>
          </div>
          
        </div>
        <div className='mb-12'>
          <Image src={photo2} alt="frame"/>
          <p className='pt-2 text-lg md:text-3xl'>Future of Architecture Summit</p>
          <p className='pt-4'>Unlock the power of data analytics with Instig Data. Dive into a world of data-driven insights. Discover how data can drive innovation and growth in your career.</p>
          <div className='flex mt-4 gap-3'>
          <div className='flex gap-1'><Image src={cal} alt=""/><p>December 3, 2023</p></div>
          <div className='flex gap-1'><Image src={time} alt=""/><p>6PM - 8PM</p></div>
          </div>
        </div>
        <div className='mb-12'>
          <Image src={photo3} alt="frame"/>
          <p className='pt-2 text-lg md:text-3xl'>Future of Architecture Summit</p>
          <p className='pt-4'>Unlock the power of data analytics with Instig Data. Dive into a world of data-driven insights. Discover how data can drive innovation and growth in your career.</p>
          <div className='flex mt-4 gap-3'>
          <div className='flex gap-1'><Image src={cal} alt=""/><p>December 3, 2023</p></div>
          <div className='flex gap-1'><Image src={time} alt=""/><p>6PM - 8PM</p></div>
          </div>
        </div>
        <div className='mb-12'>
          <Image src={photo4} alt="frame"/>
          <p className='pt-2 text-lg md:text-3xl'>Future of Architecture Summit</p>
          <p className='pt-4'>Unlock the power of data analytics with Instig Data. Dive into a world of data-driven insights. Discover how data can drive innovation and growth in your career.</p>
          <div className='flex mt-4 gap-3'>
          <div className='flex gap-1'><Image src={cal} alt=""/><p>December 3, 2023</p></div>
          <div className='flex gap-1'><Image src={time} alt=""/><p>6PM - 8PM</p></div>
          </div>
        </div>
        <div className='mb-12'>
          <Image src={photo5} alt="frame"/>
          <p className='pt-2 text-lg md:text-3xl'>Future of Architecture Summit</p>
          <p className='pt-4'>Unlock the power of data analytics with Instig Data. Dive into a world of data-driven insights. Discover how data can drive innovation and growth in your career.</p>
          <div className='flex mt-4 gap-3'>
          <div className='flex gap-1'><Image src={cal} alt=""/><p>December 3, 2023</p></div>
          <div className='flex gap-1'><Image src={time} alt=""/><p>6PM - 8PM</p></div>
          </div>
        </div>
      </div>
      </section>

      <section
        id="section-B"
        className={`px-5 mt-20 mb-10 container mx-auto justify-between hero-2 w-full ${
          activeTab === 'section-B' ? 'block' : 'hidden'
        }`}
      >
        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 md:grid-cols-3 gap-6">
                <div className='bg-white border-blue-950 border rounded-lg'>
                    <Image src={three} className='w-full' alt="blog"/>
                    <div className='p-3'>
                      <p className='text-lg mt-3 font-bold'>Future of Architecture Summit</p>
                      <p className='mt-1 text-sm'>Unlock the power of data analytics with Instig Data. Dive into a world of data-driven insights. Discover how data can drive innovation and growth in your career.</p>
                      <div className='flex gap-4 pt-4 pb-3'>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'>technology</span>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'>Programmers</span>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'> Designers</span>
                      </div>
                      <p className='mt-1 text-[#082630] text-sm'>120 minutes</p>
                    </div>
                </div>
                <div className='bg-white border-blue-950 border rounded-lg'>
                    <Image src={three} className='w-full' alt="blog"/>
                    <div className='p-3'>
                      <p className='text-lg mt-3 font-bold'>Future of Architecture Summit</p>
                      <p className='mt-1 text-sm'>Unlock the power of data analytics with Instig Data. Dive into a world of data-driven insights. Discover how data can drive innovation and growth in your career.</p>
                      <div className='flex gap-4 pt-4 pb-3'>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'>technology</span>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'>Programmers</span>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'> Designers</span>
                      </div>
                      <p className='mt-1 text-[#082630] text-sm'>120 minutes</p>
                    </div>
                </div>
                <div className='bg-white border-blue-950 border rounded-lg'>
                    <Image src={three} className='w-full' alt="blog"/>
                    <div className='p-3'>
                      <p className='text-lg mt-3 font-bold'>Future of Architecture Summit</p>
                      <p className='mt-1 text-sm'>Unlock the power of data analytics with Instig Data. Dive into a world of data-driven insights. Discover how data can drive innovation and growth in your career.</p>
                      <div className='flex gap-4 pt-4 pb-3'>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'>technology</span>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'>Programmers</span>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'> Designers</span>
                      </div>
                      <p className='mt-1 text-[#082630] text-sm'>120 minutes</p>
                    </div>
                </div>
                <div className='bg-white border-blue-950 border rounded-lg'>
                    <Image src={three} className='w-full' alt="blog"/>
                    <div className='p-3'>
                      <p className='text-lg mt-3 font-bold'>Future of Architecture Summit</p>
                      <p className='mt-1 text-sm'>Unlock the power of data analytics with Instig Data. Dive into a world of data-driven insights. Discover how data can drive innovation and growth in your career.</p>
                      <div className='flex gap-4 pt-4 pb-3'>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'>technology</span>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'>Programmers</span>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'> Designers</span>
                      </div>
                      <p className='mt-1 text-[#082630] text-sm'>120 minutes</p>
                    </div>
                </div>
                <div className='bg-white border-blue-950 border rounded-lg'>
                    <Image src={three} className='w-full' alt="blog"/>
                    <div className='p-3'>
                      <p className='text-lg mt-3 font-bold'>Future of Architecture Summit</p>
                      <p className='mt-1 text-sm'>Unlock the power of data analytics with Instig Data. Dive into a world of data-driven insights. Discover how data can drive innovation and growth in your career.</p>
                      <div className='flex gap-4 pt-4 pb-3'>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'>technology</span>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'>Programmers</span>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'> Designers</span>
                      </div>
                      <p className='mt-1 text-[#082630] text-sm'>120 minutes</p>
                    </div>
                </div>
                <div className='bg-white border-blue-950 border rounded-lg'>
                    <Image src={three} className='w-full' alt="blog"/>
                    <div className='p-3'>
                      <p className='text-lg mt-3 font-bold'>Future of Architecture Summit</p>
                      <p className='mt-1 text-sm'>Unlock the power of data analytics with Instig Data. Dive into a world of data-driven insights. Discover how data can drive innovation and growth in your career.</p>
                      <div className='flex gap-4 pt-4 pb-3'>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'>technology</span>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'>Programmers</span>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'> Designers</span>
                      </div>
                      <p className='mt-1 text-[#082630] text-sm'>120 minutes</p>
                    </div>
                </div>
        </div>
      </section>

      <section
        id="section-C"
        className={`px-5 mt-20 container mx-auto justify-between hero-2 w-full ${
          activeTab === 'section-C' ? 'block' : 'hidden'
        }`}
      >
         <div className="grid grid-cols-1 mt-10 md:grid-cols-2 md:grid-cols-3 gap-6">
                <div className='bg-white border-blue-950 border rounded-lg'>
                    <Image src={three} className='w-full' alt="blog"/>
                    <div className='p-3'>
                      <p className='text-lg mt-3 font-bold'>Future of Architecture Summit</p>
                      <p className='mt-1 text-sm'>Unlock the power of data analytics with Instig Data. Dive into a world of data-driven insights. Discover how data can drive innovation and growth in your career.</p>
                      <div className='flex gap-4 pt-4 pb-3'>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'>technology</span>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'>Programmers</span>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'> Designers</span>
                      </div>
                      <p className='mt-1 text-[#082630] text-sm'>120 minutes</p>
                    </div>
                </div>
                <div className='bg-white border-blue-950 border rounded-lg'>
                    <Image src={three} className='w-full' alt="blog"/>
                    <div className='p-3'>
                      <p className='text-lg mt-3 font-bold'>Future of Architecture Summit</p>
                      <p className='mt-1 text-sm'>Unlock the power of data analytics with Instig Data. Dive into a world of data-driven insights. Discover how data can drive innovation and growth in your career.</p>
                      <div className='flex gap-4 pt-4 pb-3'>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'>technology</span>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'>Programmers</span>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'> Designers</span>
                      </div>
                      <p className='mt-1 text-[#082630] text-sm'>120 minutes</p>
                    </div>
                </div>
                <div className='bg-white border-blue-950 border rounded-lg'>
                    <Image src={three} className='w-full' alt="blog"/>
                    <div className='p-3'>
                      <p className='text-lg mt-3 font-bold'>Future of Architecture Summit</p>
                      <p className='mt-1 text-sm'>Unlock the power of data analytics with Instig Data. Dive into a world of data-driven insights. Discover how data can drive innovation and growth in your career.</p>
                      <div className='flex gap-4 pt-4 pb-3'>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'>technology</span>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'>Programmers</span>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'> Designers</span>
                      </div>
                      <p className='mt-1 text-[#082630] text-sm'>120 minutes</p>
                    </div>
                </div>
                <div className='bg-white border-blue-950 border rounded-lg'>
                    <Image src={three} className='w-full' alt="blog"/>
                    <div className='p-3'>
                      <p className='text-lg mt-3 font-bold'>Future of Architecture Summit</p>
                      <p className='mt-1 text-sm'>Unlock the power of data analytics with Instig Data. Dive into a world of data-driven insights. Discover how data can drive innovation and growth in your career.</p>
                      <div className='flex gap-4 pt-4 pb-3'>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'>technology</span>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'>Programmers</span>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'> Designers</span>
                      </div>
                      <p className='mt-1 text-[#082630] text-sm'>120 minutes</p>
                    </div>
                </div>
                <div className='bg-white border-blue-950 border rounded-lg'>
                    <Image src={three} className='w-full' alt="blog"/>
                    <div className='p-3'>
                      <p className='text-lg mt-3 font-bold'>Future of Architecture Summit</p>
                      <p className='mt-1 text-sm'>Unlock the power of data analytics with Instig Data. Dive into a world of data-driven insights. Discover how data can drive innovation and growth in your career.</p>
                      <div className='flex gap-4 pt-4 pb-3'>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'>technology</span>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'>Programmers</span>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'> Designers</span>
                      </div>
                      <p className='mt-1 text-[#082630] text-sm'>120 minutes</p>
                    </div>
                </div>
                <div className='bg-white border-blue-950 border rounded-lg'>
                    <Image src={three} className='w-full' alt="blog"/>
                    <div className='p-3'>
                      <p className='text-lg mt-3 font-bold'>Future of Architecture Summit</p>
                      <p className='mt-1 text-sm'>Unlock the power of data analytics with Instig Data. Dive into a world of data-driven insights. Discover how data can drive innovation and growth in your career.</p>
                      <div className='flex gap-4 pt-4 pb-3'>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'>technology</span>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'>Programmers</span>
                        <span className='text-blue-950 px-2 py-1 text-sm rounded-md bg-[#d4f2f9]'> Designers</span>
                      </div>
                      <p className='mt-1 text-[#082630] text-sm'>120 minutes</p>
                    </div>
                </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hero;
