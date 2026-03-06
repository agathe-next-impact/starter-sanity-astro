import { defineType } from 'sanity';

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    },
    {
      name: 'blocks',
      title: 'Page Blocks',
      type: 'array',
      of: [
        { type: 'heroBlock' },
        { type: 'featuresBlock' },
        { type: 'servicesBlock' },
        { type: 'faqsBlock' },
        { type: 'reviewsBlock' },
        { type: 'ctaBlock' },
        { type: 'pricingsBlock' },
        { type: 'contactBlock' },
        { type: 'contentBlock' },
        { type: 'logosBlock' },
        { type: 'articlesBlock' },
        { type: 'bannerBlock' },
      ],
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
  ],
});
