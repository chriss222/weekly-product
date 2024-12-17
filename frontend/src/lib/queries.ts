import { groq } from "next-sanity";

export const getProductsOfTheWeek = groq`*[_type == "product"]{
  _id,
  name,
  description,
  image,
  slug,
  price,
  "featuredImage": image.asset->url
} | order(_createdAt desc)`;
