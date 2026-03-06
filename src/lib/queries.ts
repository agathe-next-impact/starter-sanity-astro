import { sanityClient } from './sanity';
import type {
  SiteSettings,
  Post,
  ServiceItem,
  TeamMemberItem,
  PageData,
  HomePageData,
  PageWithBlocks,
} from './types';

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return sanityClient.fetch<SiteSettings | null>(
    `*[_type == "siteSettings"][0]{
      siteName,
      tagline,
      logo,
      email,
      phone,
      address,
      socialLinks[]{platform, url},
      seo,
      theme
    }`
  );
}

export async function getHomePage(): Promise<HomePageData | null> {
  return sanityClient.fetch<HomePageData | null>(
    `*[_type == "page" && slug.current == "home"][0]{
      title,
      hero,
      content,
      "features": *[_type == "feature"],
      "testimonials": *[_type == "testimonial"],
      seo
    }`
  );
}

export async function getAllPosts(): Promise<Post[]> {
  return sanityClient.fetch<Post[]>(
    `*[_type == "post"] | order(publishedAt desc){
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      coverImage,
      categories,
      "author": author->{name, role, photo}
    }`
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return sanityClient.fetch<Post | null>(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      publishedAt,
      excerpt,
      coverImage,
      categories,
      "author": author->{name, role, photo},
      body,
      seo
    }`,
    { slug }
  );
}

export async function getAllServices(): Promise<ServiceItem[]> {
  return sanityClient.fetch<ServiceItem[]>(
    `*[_type == "service"] | order(order asc){
      title,
      "slug": slug.current,
      icon,
      shortDescription,
      description,
      price,
      featured,
      order
    }`
  );
}

export async function getTeamMembers(): Promise<TeamMemberItem[]> {
  return sanityClient.fetch<TeamMemberItem[]>(
    `*[_type == "teamMember"] | order(order asc){
      name,
      role,
      bio,
      photo,
      linkedinUrl,
      order
    }`
  );
}

export async function getPageBySlug(slug: string): Promise<PageData | null> {
  return sanityClient.fetch<PageData | null>(
    `*[_type == "page" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      hero,
      content,
      seo
    }`,
    { slug }
  );
}

export async function getPageWithBlocks(slug: string): Promise<PageWithBlocks | null> {
  return sanityClient.fetch<PageWithBlocks | null>(
    `*[_type == "page" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      blocks[]{...},
      seo
    }`,
    { slug }
  );
}

export async function getAllPages(): Promise<{ slug: string }[]> {
  return sanityClient.fetch<{ slug: string }[]>(
    `*[_type == "page"]{"slug": slug.current}`
  );
}
