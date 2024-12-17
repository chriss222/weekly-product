// src/schemas/product.ts
import {defineField, defineType} from 'sanity'

const productType = defineType({
  name: 'product',
  title: 'Product of the Week',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Product Title',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Publication Date',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'image',
      type: 'image',
      title: 'Product Image',
    }),

    defineField({
      name: 'description',
      type: 'text',
      title: 'Product Description',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'body',
      type: 'array',
      title: 'Body Content',
      of: [{type: 'block'}],
    }),
  ],
})

export default productType
