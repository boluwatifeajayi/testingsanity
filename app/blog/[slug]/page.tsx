
import { getPost } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image"
import Link from "next/link";
import Carousel from "@/components/carousel/Carousel";

type Props = {
  params: { post: string }
}

export default async function Post({ params }: Props) {
  const slug = params.slug;
  console.log(params.slug)
  const post = await getPost(slug);

  return <div>
     <Header/>
      <main className="mt-[87px]">
        <div className="block sm:flex">
          <div className="sm:w-1/2 p-5 sm:p-20 bg-[#40B8D3]">
            <Link href="/blog" className="mt-5 mb-5">
              <Image alt="back" width={10} height={10} className="w-8 h-8" src="/arrow-square-down.png"/>
            </Link>
            <h1 className="text-5xl text-white mt-4">{post.name}</h1>
            <p className="mt-3 text-lg text-white">September 18, 2023</p>
            <p className="mt-3 text-lg text-white">{post.readtime} minutes</p>
          </div>
          <div className="sm:w-1/2">
          
          <Image
              className=""
              width={900}
              height={500}
              src={post.image} 
              alt={post.name}
            />
          </div>
        </div>
        <div className="container mx-auto mt-10 mb-10 justify-center px-4 md:px-3">
        <div>
        <PortableText value={post.content} />
        </div>
        <div className="mt-10">
        {/* <div className='container mx-auto block md:flex gap-3 flex-col md:flex-row justify-between'>
        <div className='w-full md:w-1/2'>
          <p className='text-[#40B8D3] font-bold'>INSTIG LABS BLOG</p>
          <p className='text-[#333] md:text-5xl text-4xl font-bold mt-2 mb-5'>
           Theres Always More
          </p>
        </div>
        <div className='w-full md:w-1/2'>
          <p className='text-[#333] mt-1'>
          Stay updated with the latest industry insights, trends, and expert opinions by exploring our blog.
          </p>
        </div>
      </div> */}
      {/* <div className="mt-6">
      <Carousel/>
      </div> */}
       

        </div>
        </div>
    </main>
    
    <Footer/>
  </div>
} 

