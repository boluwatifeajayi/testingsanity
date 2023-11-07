'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import phone from '../assets/images/phone-middle.png';
import close from '../assets/images/close-circle.png';
import plus from '../assets/images/plus-circle.png';
import radar from '../assets/images/radar-2.png';

const Faq: React.FC = () => {
  const [accordionItems, setAccordionItems] = useState([
    { title: 'How can Instig Labs help aspiring entrepreneurs', content: 'Instig Labs is dedicated to supporting entrepreneurs. We offer mentorship, networking opportunities, and even investment possibilities for promising startup ventures created by our community members.', isOpen: false },
    { title: 'Is there a fee to access Instig Labs educational content?', content: 'Content 2', isOpen: false },
    { title: 'Can I network with other members on Instig Labs?', content: 'Our no-code and API solutions support 20+ payment methods,  and we offer bank payouts in 11 countries so you can getpaid quickly.', isOpen: false },
    { title: 'How does Instig Labs invest in portfolio companies?', content: 'Content 4', isOpen: false },
    { title: 'How do I get involved in the Instig Labs community?', content: 'Content 5', isOpen: false },
  ]);

  const toggleAccordion = (index: number) => {
    const updatedItems = [...accordionItems];
    updatedItems[index].isOpen = !updatedItems[index].isOpen;
    setAccordionItems(updatedItems);
  };

  return (
    <section id="faq" className='story px-6 md:px-20 py-16 bg-[#F0F9FF]'>
      <div className='block md:flex gap-2 md:gap-32'>
        <div className='w-full md:w-1/2'>
          <p className='text-[#2AACC9] font-bold'>F.A.Q</p>
          <p className='text-[#082630] md:text-4xl text-3xl font-bold mt-2 mb-5'>
            Frequently Asked <br />
            Questions
          </p>
          <p className='text-[#082630]'>
          At Instig Labs, we believe that knowledge knows no bounds, and we're dedicated to fostering a vibrant community of brilliant minds. 
          </p>
        </div>
        <div className='w-full md:w-1/2'>
          <div className='mt-12'>
            {/* Accordions */}
            {accordionItems.map((item, index) => (
              <div key={index} className='mb-5'>
                <div
                  className={`cursor-pointer flex border-b font-bold pb-4 items-center text-lg justify-between ${
                    item.isOpen ? 'text-gray-900' : 'text-gray-800'
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                  <Image src={item.isOpen ? close : plus} alt='icon' />
                </div>
                {item.isOpen && (
                  <div className=' text-gray-600 pt-4'>{item.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
