import { defineType, defineField } from 'sanity';
import { variantField, slotFields } from './_fields';

export const logosBlock = defineType({
  name: 'logosBlock',
  title: 'Logos',
  type: 'object',
  preview: { select: { title: 'title', subtitle: 'variant' } },
  fields: [
    variantField(['logos-1','logos-2','logos-3']),
    ...slotFields,
    defineField({
      name: 'logos',
      title: 'Logos',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({
            name: 'image',
            type: 'image',
            fields: [defineField({ name: 'alt', type: 'string' })],
          }),
          defineField({ name: 'text', type: 'string' }),
          defineField({ name: 'href', type: 'string' }),
        ],
      }],
    }),
  ],
});
