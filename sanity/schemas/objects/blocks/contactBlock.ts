import { defineType, defineField } from 'sanity';
import { linksField, variantField, slotFields } from './_fields';

export const contactBlock = defineType({
  name: 'contactBlock',
  title: 'Contact',
  type: 'object',
  preview: { select: { title: 'title', subtitle: 'variant' } },
  fields: [
    variantField(['contact-1','contact-2','contact-3']),
    ...slotFields,
    linksField,
    defineField({
      name: 'items',
      title: 'Contact Methods',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'icon', title: 'Icon (Lucide)', type: 'string' }),
          defineField({ name: 'title', type: 'string' }),
          defineField({ name: 'description', type: 'string' }),
          defineField({ name: 'href', type: 'string' }),
        ],
      }],
    }),
  ],
});
