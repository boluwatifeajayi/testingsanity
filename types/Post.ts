import { PortableTextBlock } from "sanity";

export type Post = {
  _id: string;
  publishedAt: string;
  name: string;
  slug: string;
  image: string;
  readtime: string;
  content: PortableTextBlock[];
}