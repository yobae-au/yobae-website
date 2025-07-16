import { defineType, defineField } from 'sanity'

export const HOME_INTRO_ID = 'homeIntro'

export default defineType({
  name: 'homeIntro',
  title: 'Home: Intro',
  type: 'document',
  fields: [
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'marquee',
      title: 'Marquee Text',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})
