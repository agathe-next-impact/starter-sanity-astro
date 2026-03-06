import { defineType, defineField } from 'sanity';
import { linksField, variantField, slotFields } from './_fields';

export const faqsBlock = defineType({
  name: 'faqsBlock',
  title: 'FAQs',
  type: 'object',
  preview: { select: { title: 'title', subtitle: 'variant' } },
  fields: [
    variantField(['faqs-1','faqs-2','faqs-3','faqs-4']),
    ...slotFields,
    linksField,
    defineField({
      name: 'items',
      title: 'FAQ Items',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', title: 'Question', type: 'string' }),
          defineField({ name: 'description', title: 'Answer', type: 'text', rows: 3 }),
        ],
      }],
    }),
  ],
});
