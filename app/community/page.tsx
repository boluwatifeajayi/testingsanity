import React from 'react'
import Header from '@/components/Header'
import Image from 'next/image';
import Link from 'next/link';
import comm from '../../assets/images/comm.png'
import comm3 from '../../assets/images/comm3.png'
import comm1 from '../../assets/images/comm1.png';
import comm2 from '../../assets/images/comm2.png';
import Footer from '@/components/Footer';

function page() {
  return (
    <div>
        <Header/>
        {/* hero */}
        <section id="hero" className='px-5 mt-48 hero-2 w-full'>
      <div className='block container justify-center mx-auto hero'>
        <div className="mx-auto">
          <div>
            <h2 className='text-4xl md:text-7xl text-center  font-bold text-[#082630]'>
            Instig Labs Community 
            </h2>
            <p className='text-[#082630] text-xl text-center mt-6'>
            Learn and build with a community of data professionals 
            <br/>and AI developers
            </p>
          </div>
          
          
        </div>
        <div 
          className="flex items-end"
        >
          <div className='mx-auto mt-8 justify-center'>
            <Image className='ml-3' src={comm} alt='phone' />
          </div>
        </div>
      </div>
    </section>

    <section className='px-12 md:px-36 bg-[#F5FDFF] mt-24  py-20'>
        <div className='block container mx-auto justify-center md:flex gap-2 md:gap-36'>
            <div className='w-full md:w-1/2  py-6 md:py-24'>
            <p className='text-[#40B8D3] font-bold'>DATA ANALYTICS</p>
            <p className='text-[#082630] md:text-5xl text-4xl font-bold mt-2 mb-5'>
                Instig Data
            </p>
                <p className='text-md'>Unlock the power of data analytics with Instig Data. Dive into a <br/>
                world of data-driven insights. Discover how data can drive innovation 
                and growth in your career.</p>
                <button  className="bg-transparent border-[#082630] border mt-8 px-6 py-3 text-xs md:text-sm  text-[#082630] rounded-lg">
                  Join Community
                </button>
            </div>
            <div className='w-full md:w-1/2'>
                <Image src={comm3} alt='data'/>
            </div>
        </div>
    </section>

    <section className='px-12 md:px-36 bg-[#F5FDFF]  py-20'>
        <div className='block container mx-auto justify-center md:flex gap-2 md:gap-36'>
            <div className='w-full md:w-1/2  py-6 md:py-24'>
            <p className='text-[#40B8D3] font-bold'>ARTIFICIAL INTELLIGENCE</p>
            <p className='text-[#082630] md:text-5xl text-4xl font-bold mt-2 mb-5'>
            Instig AI
            </p>
                <p className='text-md'>Take your skills to the next level with Instig AI. Explore the limitless possibilities of artificial intelligence and become a trailblazer in this exciting field.</p>
                <button  className="bg-transparent border-[#082630] border mt-8 px-6 py-3 text-xs md:text-sm  text-[#082630] rounded-lg">
                  Join Community
                </button>
            </div>
            <div className='w-full md:w-1/2'>
                <Image src={comm1} alt='data'/>
            </div>
        </div>
    </section>

    

    <section className='px-12 md:px-36 bg-[#F5FDFF]  py-20'>
        <div className='block container mx-auto justify-center md:flex gap-2 md:gap-36'>
            <div className='w-full md:w-1/2  py-6 md:py-24'>
            <p className='text-[#40B8D3] font-bold'>CLOUD COMPUTING</p>
            <p className='text-[#082630] md:text-5xl text-4xl font-bold mt-2 mb-5'>
              Instig Cloud
            </p>
                <p className='text-md'>Harness the potential of cloud computing with Instig Cloud. Learn how to leverage cloud technologies to scale your posts and enhance your capabilities.</p>
                <button  className="bg-transparent border-[#082630] border mt-8 px-6 py-3 text-xs md:text-sm  text-[#082630] rounded-lg">
                  Join Community
                </button>
            </div>
           
            <div className='w-full md:w-1/2'>
                <Image src={comm2} alt='data'/>
            </div>
        </div>
    </section>

    <section className='px-12 md:px-36 py-20'>
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
  )
}

export default page