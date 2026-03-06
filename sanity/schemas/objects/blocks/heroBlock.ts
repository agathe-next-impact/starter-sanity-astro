import { defineType, defineField } from 'sanity';
import { linksField, linkObject, imageField, variantField, slotFields } from './_fields';

export const heroBlock = defineType({
  name: 'heroBlock',
  title: 'Hero',
  type: 'object',
  preview: { select: { title: 'title', subtitle: 'variant' } },
  fields: [
    variantField([
      'hero-1','hero-2','hero-3','hero-4','hero-5','hero-6','hero-7',
      'hero-8','hero-9','hero-10','hero-11','hero-12','hero-13',
    ]),
    ...slotFields,
    defineField({
      name: 'link',
      title: 'Badge Link',
      ...linkObject,
    }),
    linksField,
    imageField(),
    defineField({ name: 'list', title: 'Bullet Points', type: 'array', of: [{ type: 'string' }] }),
    defineField({
      name: 'item',
      title: 'Social Proof',
      type: 'object',
      fields: [
        defineField({
          name: 'images',
          title: 'Avatar Images',
          type: 'array',
          of: [{ type: 'image', fields: [defineField({ name: 'alt', type: 'string' })] }],
        }),
        defineField({ name: 'rating', title: 'Rating', type: 'number', validation: (r) => r.min(0).max(5) }),
        defineField({ name: 'description', title: 'Description', type: 'string' }),
      ],
    }),
  ],
});
