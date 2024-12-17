import {defineField, defineType} from 'sanity'

const articleType = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'content',
      type: 'text',
      title: 'Content',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'date',
      type: 'date',
      title: 'Publication Date',
    }),

    defineField({
      name: 'product',
      type: 'reference',
      title: 'Featured Product',
      to: [{type: 'product'}],
      validation: (rule) => rule.required(),
    }),
  ],
})

export default articleType
