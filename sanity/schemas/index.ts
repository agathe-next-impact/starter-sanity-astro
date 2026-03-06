import { siteSettings } from './documents/siteSettings';
import { page } from './documents/page';
import { post } from './documents/post';
import { service } from './documents/service';
import { teamMember } from './documents/teamMember';
import { hero } from './objects/hero';
import { feature } from './objects/feature';
import { testimonial } from './objects/testimonial';
import { faq } from './objects/faq';
import { cta } from './objects/cta';
import { seo } from './objects/seo';
import { theme } from './objects/theme';

// Page builder blocks
import { heroBlock } from './objects/blocks/heroBlock';
import { featuresBlock } from './objects/blocks/featuresBlock';
import { servicesBlock } from './objects/blocks/servicesBlock';
import { faqsBlock } from './objects/blocks/faqsBlock';
import { reviewsBlock } from './objects/blocks/reviewsBlock';
import { ctaBlock } from './objects/blocks/ctaBlock';
import { pricingsBlock } from './objects/blocks/pricingsBlock';
import { contactBlock } from './objects/blocks/contactBlock';
import { contentBlock } from './objects/blocks/contentBlock';
import { logosBlock } from './objects/blocks/logosBlock';
import { articlesBlock } from './objects/blocks/articlesBlock';
import { bannerBlock } from './objects/blocks/bannerBlock';

export const schemaTypes = [
  // Documents
  siteSettings,
  page,
  post,
  service,
  teamMember,
  // Objects
  hero,
  feature,
  testimonial,
  faq,
  cta,
  seo,
  theme,
  // Page builder blocks
  heroBlock,
  featuresBlock,
  servicesBlock,
  faqsBlock,
  reviewsBlock,
  ctaBlock,
  pricingsBlock,
  contactBlock,
  contentBlock,
  logosBlock,
  articlesBlock,
  bannerBlock,
];
