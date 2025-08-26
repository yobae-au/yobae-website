// lib/sanity/fetchSiteSettings.ts
import { SITE_SETTINGS_SINGLETON_ID } from '@/sanity/schemaTypes/siteSettings'
import { client } from './client' // Your configured Sanity client

export async function fetchSiteSettings() {
  return await client.fetch(`
    *[_id == "${SITE_SETTINGS_SINGLETON_ID}"][0]{
      metaTitle,
      metaDescription
    }
  `)
}
