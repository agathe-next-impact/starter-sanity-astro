import { defineType, defineField } from 'sanity';
import { linksField, imageField, variantField, slotFields } from './_fields';

export const articlesBlock = defineType({
  name: 'articlesBlock',
  title: 'Articles',
  type: 'object',
  preview: { select: { title: 'title', subtitle: 'variant' } },
  fields: [
    variantField(['articles-1','articles-2','articles-3','articles-4']),
    ...slotFields,
    linksField,
    defineField({
      name: 'items',
      title: 'Article Items',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'href', type: 'string' }),
          defineField({ name: 'title', type: 'string' }),
          defineField({ name: 'description', type: 'text', rows: 2 }),
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
