import { defineField } from 'sanity';

export const linkObject = {
  type: 'object' as const,
  fields: [
    defineField({ name: 'text', title: 'Text', type: 'string' }),
    defineField({ name: 'href', title: 'URL', type: 'string' }),
    defineField({ name: 'icon', title: 'Icon (Lucide)', type: 'string' }),
    defineField({
      name: 'target',
      title: 'Target',
      type: 'string',
      options: { list: ['_blank', '_self'] },
    }),
  ],
};

export const linksField = defineField({
  name: 'links',
  title: 'Links / Buttons',
  type: 'array',
  of: [linkObject],
});

export const imageField = (name = 'image', title = 'Image') =>
  defineField({
    name,
    title,
    type: 'image',
    options: { hotspot: true },
    fields: [defineField({ name: 'alt', title: 'Alt Text', type: 'string' })],
  });

export const variantField = (variants: string[]) =>
  defineField({
    name: 'variant',
    title: 'Variant',
    type: 'string',
    options: { list: variants.map((v) => ({ title: v, value: v })) },
    initialValue: variants[0],
    validation: (rule) => rule.required(),
  });

export const slotFields = [
  defineField({ name: 'title', title: 'Title', type: 'string' }),
  defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
];
