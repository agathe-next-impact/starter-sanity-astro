import { defineType, defineField } from 'sanity';
import { linksField, linkObject, imageField, variantField, slotFields } from './_fields';

export const servicesBlock = defineType({
  name: 'servicesBlock',
  title: 'Services',
  type: 'object',
  preview: { select: { title: 'title', subtitle: 'variant' } },
  fields: [
    variantField(['services-1','services-2','services-3','services-4','services-5','services-6','services-7']),
    ...slotFields,
    linksField,
    defineField({
      name: 'items',
      title: 'Service Items',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'href', type: 'string' }),
          defineField({ name: 'tagline', type: 'string' }),
          defineField({ name: 'title', type: 'string' }),
          defineField({ name: 'description', type: 'text', rows: 2 }),
          imageField(),
          defineField({ name: 'links', type: 'array', of: [linkObject] }),
        ],
      }],
    }),
  ],
});
