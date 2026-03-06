import { defineType, defineField } from 'sanity';
import { linksField, imageField, variantField, slotFields } from './_fields';

export const reviewsBlock = defineType({
  name: 'reviewsBlock',
  title: 'Reviews',
  type: 'object',
  preview: { select: { title: 'title', subtitle: 'variant' } },
  fields: [
    variantField(['reviews-1','reviews-2','reviews-3','reviews-4','reviews-5']),
    ...slotFields,
    linksField,
    defineField({
      name: 'items',
      title: 'Review Items',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', type: 'string' }),
          defineField({ name: 'description', type: 'text', rows: 3 }),
          defineField({ name: 'rating', type: 'number', validation: (r) => r.min(0).max(5) }),
          imageField(),
          defineField({
            name: 'item',
            title: 'Author',
            type: 'object',
            fields: [
              defineField({ name: 'title', title: 'Name', type: 'string' }),
              defineField({ name: 'description', title: 'Role', type: 'string' }),
              imageField(),
            ],
          }),
        ],
      }],
    }),
  ],
});
