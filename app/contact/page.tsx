'use client'
import React, {useState} from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import pic from '../../assets/images/Group 38523.png'
import Header from '@/components/Header';
import close from '../../assets/images/close-circle.png';
import plus from '../../assets/images/plus-circle.png';
import Footer from '@/components/Footer';


const Hero = () => {

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
    <div>
        <Header/>
        
    <section className='px-6 mt-10 md:px-36 py-20'>
        <div className='block container mx-auto justify-center'>

        <p className='text-[#40B8D3] text-center font-bold'>Contact Us</p>
        <p className='text-[#082630] md:text-5xl text-4xl text-center font-bold mt-2 mb-5'>
        Got Questions?
        </p>
        <p className='text-[#082630] text-center text-lg mt-2 mb-5'>
        Got questions or feedback? Reach out to us! We value your input <br/> and are here to assist you in any way we can.
        </p>


        <form className="mt-10 mx-auto max-w-3xl">
              <div className='flex w-full mx-auto max-w-3xl gap-4'>
              <div className="mb-8 w-1/2">
                <label className="text-[#082630] mb-6">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full mt-4 mx-auto max-w-3xl px-2 py-2 border-[#d4d6dc] bg-transparent border rounded"
                  placeholder="Enter Your Full name"
                  required
                />
              </div>
              <div className="mb-8 w-1/2">
                <label className="text-[#082630] mb-6">Email Address</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="w-full px-2 mt-4 py-2 border-[#d6d6d8] bg-transparent border rounded"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              </div>
             
              

              <div className='flex w-full mx-auto max-w-3xl gap-4'>
              <div className="mb-8 w-full">
                <label className="text-[#082630] mb-6">Message</label>
                <textarea
                  
                  id="fullName"
                  name="fullName"
                  className="w-full mt-4 mx-auto max-w-3xl h-52 px-2 py-2 border-[#d4d6dc] bg-transparent border rounded"
                  placeholder="What would you like to let us Know"
                  required
                ></textarea>
              </div>
              
              </div>

             

              <button className="text-[#40B8D3] w-full px-5 py-3 text-sm font-semibold bg-[#082630] mt-6 rounded">
                Send Message
              </button>
            </form>
      </div>
    </section>
    
    <Footer/>
    </div>
  );
};

export default Hero;