import { defineType, defineField } from 'sanity'

export const HOME_FOOTER_ID = 'homeFooter'

export default defineType({
  name: 'homeFooter',
  title: 'Home Footer',
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
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'mobileImage', title: 'Mobile Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'offers',
      title: 'Offers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Offer Name', type: 'string' }),
            defineField({ name: 'value', title: 'Offer Value', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'marquee',
      title: 'Marquee Text',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})
