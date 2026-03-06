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
];
