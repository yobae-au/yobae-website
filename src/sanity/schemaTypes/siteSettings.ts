import { defineType, defineField } from 'sanity'

export const SITE_SETTINGS_SINGLETON_ID = 'siteSettings'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      validation: Rule => Rule.email(),
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url',
    }),
    defineField({
      name: 'appStoreUrl',
      title: 'Apple App Store URL',
      type: 'url',
    }),
    defineField({
      name: 'googlePlayUrl',
      title: 'Google Play Store URL',
      type: 'url',
    }),
    defineField({
      name: 'locations',
      title: 'Locations',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'location', title: 'Location', type: 'string' },
            { name: 'store', title: 'Store', type: 'string' },
            { name: 'street', title: 'Street', type: 'string' },
            { name: 'suburb', title: 'Suburb', type: 'string' },
          ],
        },
      ],
    }),
  ],
})
