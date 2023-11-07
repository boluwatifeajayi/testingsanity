import React from 'react';
import Image from 'next/image';
import tick from '../assets/images/ticket.png';

const Request: React.FC = () => {
  return (
    <section id="comm" className="story mt-12 mx-auto justify-center py-8">
      <div className="mx-auto justify-center">
        <center>
          <div className="w-full hero">
            <Image src={tick} alt="image" />
          </div>
        </center>

        <div className="w-full">
          <div className="mt-16 hero mx-6 md:mx-14">
            <center>
              <p className="text-[#40B8D3] font-bold">JOIN THE COMMUNITY</p>
              <p className="text-[#082630] md:text-5xl text-3xl font-bold mt-2 mb-5">
                Ready to Become One of Us?
              </p>
              <p>
                At Instig Labs, we believe that knowledge knows no bounds, and we're
                <br /> dedicated to fostering a vibrant community of brilliant minds.
              </p>
            </center>

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
                  placeholder="Enter Your Email address"
                  required
                />
              </div>
              </div>
             
             

              <div className=' w-full mx-auto max-w-3xl gap-4'>
              <div className="mb-8 w-full">
                <label className="text-[#082630] mb-6">Interest</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full mt-4 mx-auto max-w-3xl px-2 py-2 border-[#d4d6dc] bg-transparent border rounded"
                  placeholder="What would you like to learn"
                  required
                />
              </div>
              
              </div>

             

              <button className="text-[#40B8D3] w-full px-5 py-3 text-sm font-semibold bg-[#082630] mt-2 rounded">
                Join Us
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Request;
