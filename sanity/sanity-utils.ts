import { createClient, groq } from "next-sanity";
import { Post } from "@/types/Post";
import clientConfig from './config/client-config'
import { Page } from "@/types/Page";

export async function getPosts(): Promise<Post[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      readtime,
      publishedAt,
      content
    }`
  )
}

export async function getPost(slug: string): Promise<Post> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      publishedAt,
      readtime,
      content
    }`,
    { slug }
  )
}


export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
  name, "image": image.asset->url, readtime, publishedAt, content
}`;


export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;


