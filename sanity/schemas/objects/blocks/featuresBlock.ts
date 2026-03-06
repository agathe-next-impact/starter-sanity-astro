import { defineType, defineField } from 'sanity';
import { linksField, linkObject, imageField, variantField, slotFields } from './_fields';

export const featuresBlock = defineType({
  name: 'featuresBlock',
  title: 'Features',
  type: 'object',
  preview: { select: { title: 'title', subtitle: 'variant' } },
  fields: [
    variantField(['features-1','features-2','features-3','features-4','features-5','features-6']),
    ...slotFields,
    linksField,
    defineField({
      name: 'items',
      title: 'Feature Items',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', type: 'string' }),
          defineField({ name: 'description', type: 'text', rows: 2 }),
          defineField({ name: 'icon', title: 'Icon (Lucide)', type: 'string' }),
          defineField({ name: 'href', title: 'URL', type: 'string' }),
          imageField(),
          defineField({ name: 'links', type: 'array', of: [linkObject] }),
        ],
      }],
    }),
  ],
});
