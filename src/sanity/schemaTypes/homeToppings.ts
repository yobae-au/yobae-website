import { defineType, defineField } from 'sanity'

export const HOME_TOPPINGS_ID = 'homeToppings'

export default defineType({
  name: 'homeToppings',
  title: 'Home Toppings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'blurb',
      title: 'Blurb',
      type: 'text',
    }),
    defineField({
      name: 'items',
      title: 'Topping Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            }),
          ],
        },
      ],
    }),
  ],
})
