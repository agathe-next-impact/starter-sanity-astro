import { defineType } from 'sanity';

export const seo = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      validation: (rule) => rule.max(60).warning('Max 60 characters recommended'),
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(160).warning('Max 160 characters recommended'),
    },
    {
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
    },
    {
      name: 'noIndex',
      title: 'No Index',
      type: 'boolean',
      initialValue: false,
    },
  ],
});
