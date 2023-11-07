'use client'
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import client from "@/sanity/lib/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Carousel from "@/components/carousel/Carousel";


const builder = imageUrlBuilder(client);

function Post({ post }: { post: SanityDocument }) {
 
  return (
    <div>
      <Header/>
      <main className="mt-[87px]">
        <div className="block sm:flex">
          <div className="sm:w-1/2 p-5 sm:p-20 bg-[#40B8D3]">
            <Link href="/post" className="mt-5 mb-5">
              <Image alt="back" width={10} height={10} className="w-8 h-8" src="/arrow-square-down.png"/>
            </Link>
            <h1 className="text-5xl text-white">{post.title}</h1>
            <p className="mt-3 text-lg text-white">September 18, 2023</p>
            <p className="mt-3 text-lg text-white">{post.readtime}</p>
          </div>
          <div className="sm:w-1/2">
          {post?.mainImage ? (
          <Image
              className=""
              width={900}
              height={500}
              src={post.mainImage?.image}
              alt={post.title}
            />

            ) : null}
          </div>
        </div>
        <div className="container mx-auto mt-10 mb-10 justify-center px-4 md:px-3">
        <div>
        {post?.body ? <PortableText value={post.body} /> : null}
        </div>
        <div className="mt-10">
        <div className='container mx-auto block md:flex gap-3 flex-col md:flex-row justify-between'>
        <div className='w-full md:w-1/2'>
          <p className='text-[#40B8D3] font-bold'>INSTIG LABS POST</p>
          <p className='text-[#333] md:text-5xl text-4xl font-bold mt-2 mb-5'>
           Theres Always More
          </p>
        </div>
        <div className='w-full md:w-1/2'>
          <p className='text-[#333] mt-1'>
          Stay updated with the latest industry insights, trends, and expert opinions by exploring our post.
          </p>
        </div>
      </div>
      <div className="mt-6">
      <Carousel/>
      </div>
       

        </div>
        </div>
    </main>
    <Footer/>
    </div>

    
  );
}

export default Post;
