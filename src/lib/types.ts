import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import type { PortableTextBlock } from '@portabletext/types';

export interface SeoData {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImageSource;
  noIndex?: boolean;
}

export interface HeroData {
  headline: string;
  subheadline?: string;
  image?: SanityImageSource & { alt?: string };
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  variant?: 'default' | 'centered' | 'split';
}

export interface FeatureData {
  title: string;
  description?: string;
  icon?: string;
}

export interface TestimonialData {
  quote: string;
  author: string;
  role?: string;
  avatar?: SanityImageSource & { alt?: string };
}

export interface FaqData {
  question: string;
  answer: string;
}

export interface CtaData {
  headline: string;
  text?: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface ThemeData {
  primaryColor?: string;
  primaryForeground?: string;
  secondaryColor?: string;
  secondaryForeground?: string;
  accentColor?: string;
  accentForeground?: string;
  backgroundColor?: string;
  foregroundColor?: string;
  mutedColor?: string;
  mutedForeground?: string;
  destructiveColor?: string;
  borderColor?: string;
  ringColor?: string;
  darkBackground?: string;
  darkForeground?: string;
  darkPrimary?: string;
  darkPrimaryForeground?: string;
  darkSecondary?: string;
  darkAccent?: string;
  darkMuted?: string;
  darkMutedForeground?: string;
  darkDestructive?: string;
  darkBorder?: string;
  fontFamily?: string;
  fontFamilyHeading?: string;
  fontWeights?: string;
  borderRadius?: number;
  hueShift?: number;
}

export interface SiteSettings {
  siteName: string;
  tagline?: string;
  logo?: SanityImageSource;
  email?: string;
  phone?: string;
  address?: string;
  socialLinks?: SocialLink[];
  seo?: SeoData;
  theme?: ThemeData;
}

export interface Post {
  title: string;
  slug: string;
  publishedAt: string;
  excerpt?: string;
  coverImage?: SanityImageSource & { alt?: string };
  categories?: string[];
  author?: {
    name: string;
    role?: string;
    photo?: SanityImageSource;
  };
  body?: PortableTextBlock[];
  seo?: SeoData;
}

export interface ServiceItem {
  title: string;
  slug: string;
  icon?: string;
  shortDescription?: string;
  description?: PortableTextBlock[];
  price?: string;
  featured?: boolean;
  order?: number;
}

export interface TeamMemberItem {
  name: string;
  role?: string;
  bio?: string;
  photo?: SanityImageSource & { alt?: string };
  linkedinUrl?: string;
  order?: number;
}

export interface PageData {
  title: string;
  slug: string;
  hero?: HeroData;
  content?: PortableTextBlock[];
  seo?: SeoData;
}

export interface HomePageData {
  title: string;
  hero?: HeroData;
  content?: PortableTextBlock[];
  features?: FeatureData[];
  testimonials?: TestimonialData[];
  seo?: SeoData;
}

// Page builder types
export interface BlockLink {
  text?: string;
  href?: string;
  icon?: string;
  target?: string;
}

export interface PageBlock {
  _type: string;
  _key: string;
  variant: string;
  title?: string;
  description?: string;
  [key: string]: any;
}

export interface PageWithBlocks {
  title: string;
  slug: string;
  blocks?: PageBlock[];
  seo?: SeoData;
}
