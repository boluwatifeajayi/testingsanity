import React from 'react';
import Header from '@/components/Header';
import one from '../../assets/images/image 39.png';
import two from '../../assets/images/image 39 (1).png';
import three from '../../assets/images/image 39 (2).png';
import Image from 'next/image';
import Footer from '@/components/Footer';
import search from '../../assets/images/search-normal.png'
import filter from '../../assets/images/arrow-square-down.png'
import Link from 'next/link';
import { getPosts } from '@/sanity/sanity-utils';

async function Page() {

 
  const posts = await getPosts();
  return (
    <div>
      <Header />
      <section className="px-6 md:px-36 bg-[#FFFCF3] py-10 md:py-20 mt-20">
        <div className="block container mx-auto justify-center md:flex gap-2 md:gap-36">
          <div className="w-full md:w-1/2 py-6 md:py-14">
            <h2 className="text-3xl md:text-5xl font-bold text-[#082630]">
              Explore Topics In <br />{' '}
              <span className="text-[#40B8D3]">Data Analytics</span> &{' '}
              <span className="text-[#40B8D3]">AI</span>
            </h2>
          </div>
          <div className='w-1/2'>

          </div>
          </div>
          <div className="w-full">
            {/* Searches Here */}
            <div className="block md:flex container mx-auto justify-center gap-2">
              {/* Search Input */}
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search for course"
                  className="w-full py-2 px-4 rounded-full border border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <Image src={search} alt="blog"/>
                </div>
              </div>

              {/* Filter Dropdown */}
              <div className="relative">
                <select className="block appearance-none w-full mt-4 md:mt-0 md:w-48 py-2 px-4 rounded-lg border border-gray-300 bg-transparent text-gray-700 focus:outline-none focus:ring focus:border-blue-500">
                  <option value="all">All Categories</option>
                  <option value="ai">AI</option>
                  <option value="data-analytics">Data Analytics</option>
                  <option value="cloud">Cloud</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <Image src={filter} alt="blog"/>
                </div>
              </div>
            </div>

            <div className='container mx-auto justify-center'>
                <p className='text-[#40B8D3] mt-8'>RECENT POSTS</p>
           
                <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-5">
  {posts.slice(0, 2).map((post) => (
    <Link
    href={`/blog/${post?.slug}`}
      key={post._id}
      className=""
    >
      <Image
              src={post?.image}
              width={60}
              height={60}
              alt={post.name}
              className="w-full h-400 rounded-lg"
            />
      <div>
        <h2 className='text-lg md:text-2xl mt-3'>{post.title}</h2>
        <p className='mt-1'>September 18, 2023</p>
        <p className="mt-1 text-[#40B8D3]">{post.readtime} minutes</p>
      </div>
    </Link>
  ))}
</div>

            </div>
        </div>
      </section>
      <section className='container mx-auto mt-10 mb-10 justify-center px-4 md:px-3'>
        <div className="grid grid-cols-1 mt-10 md:grid-cols-3 gap-5">
        {posts.map((post) => (
          <Link
            href={`/blog/${post?.slug}`}
            key={post._id}
            className=""
          >
            <Image
              src={post?.image}
              width={60}
              height={60}
              alt={post.name}
              className="w-full h-400 rounded-lg"
            />
            <div>
              <h2 className='text-lg md:text-2xl mt-3'>{post.name}</h2>
              <p className='mt-1'>{post.publishedAt}</p>
              <p className="mt-1 text-[#40B8D3]">{post.readtime} minutes</p>
            </div>
          </Link>
        ))}
       </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Page;
