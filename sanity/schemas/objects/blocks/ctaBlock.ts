import { defineType, defineField } from 'sanity';
import { linksField, imageField, variantField, slotFields } from './_fields';

export const ctaBlock = defineType({
  name: 'ctaBlock',
  title: 'Call to Action',
  type: 'object',
  preview: { select: { title: 'title', subtitle: 'variant' } },
  fields: [
    variantField(['cta-1','cta-2','cta-3','cta-4','cta-5','cta-6','cta-7','cta-8']),
    ...slotFields,
    linksField,
    imageField(),
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
        defineField({ name: 'rating', type: 'number', validation: (r) => r.min(0).max(5) }),
        defineField({ name: 'description', type: 'string' }),
      ],
    }),
  ],
});
