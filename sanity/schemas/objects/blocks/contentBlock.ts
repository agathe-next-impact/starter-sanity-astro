import { defineType, defineField } from 'sanity';
import { linksField, imageField, variantField, slotFields } from './_fields';

export const contentBlock = defineType({
  name: 'contentBlock',
  title: 'Content',
  type: 'object',
  preview: { select: { title: 'title', subtitle: 'variant' } },
  fields: [
    variantField(['content-1','content-2','content-3','content-4','content-5','content-6']),
    ...slotFields,
    linksField,
    imageField(),
    defineField({
      name: 'images',
      title: 'Image Gallery',
      type: 'array',
      of: [{ type: 'image', fields: [defineField({ name: 'alt', type: 'string' })] }],
    }),
    defineField({ name: 'list', title: 'Bullet Points', type: 'array', of: [{ type: 'string' }] }),
  ],
});
