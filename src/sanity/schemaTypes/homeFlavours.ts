import { defineType, defineField } from 'sanity'

export const HOME_FLAVOURS_ID = 'homeFlavours'

export default defineType({
  name: 'homeFlavours',
  title: 'Home Flavours',
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
      title: 'Flavour Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
            defineField({
              name: 'primaryImage',
              title: 'Primary Image',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'secondaryImage',
              title: 'Secondary Image',
              type: 'image',
              options: { hotspot: true },
            }),
          ],
        },
      ],
    }),
  ],
})
