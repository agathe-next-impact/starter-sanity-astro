import { defineType, defineField } from 'sanity';
import { variantField } from './_fields';

export const bannerBlock = defineType({
  name: 'bannerBlock',
  title: 'Banner',
  type: 'object',
  preview: { select: { title: 'title', subtitle: 'variant' } },
  fields: [
    variantField(['banner-1','banner-2']),
    defineField({ name: 'icon', title: 'Icon (Lucide)', type: 'string' }),
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'description', type: 'string' }),
  ],
});
