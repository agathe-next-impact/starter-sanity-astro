import { defineType, defineField } from 'sanity';
import { linksField, linkObject, variantField, slotFields } from './_fields';

export const pricingsBlock = defineType({
  name: 'pricingsBlock',
  title: 'Pricings',
  type: 'object',
  preview: { select: { title: 'title', subtitle: 'variant' } },
  fields: [
    variantField(['pricings-1','pricings-2','pricings-3']),
    ...slotFields,
    linksField,
    defineField({
      name: 'items',
      title: 'Pricing Plans',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', type: 'string' }),
          defineField({ name: 'description', type: 'text', rows: 2 }),
          defineField({ name: 'icon', title: 'Icon (Lucide)', type: 'string' }),
          defineField({ name: 'price', type: 'string' }),
          defineField({ name: 'unit', title: 'Unit (e.g. /month)', type: 'string' }),
          defineField({ name: 'list', title: 'Features', type: 'array', of: [{ type: 'string' }] }),
          defineField({ name: 'links', type: 'array', of: [linkObject] }),
        ],
      }],
    }),
  ],
});
