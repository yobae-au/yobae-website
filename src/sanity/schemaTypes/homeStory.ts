import { defineType, defineField } from 'sanity'

export const HOME_STORY_ID = 'homeStory'

export default defineType({
  name: 'homeStory',
  title: 'Home: Story',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'blurb', title: 'Blurb', type: 'text' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
  ],
})