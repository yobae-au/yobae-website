'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }), // ✅ custom desk structure with singleton support
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  document: {
    // 🔒 Disable actions for singleton
    actions: (input, context) =>
      ['siteSettings', 'homeIntro', 'homeStory', 'homeFlavours'].includes(context.schemaType) //TODO
      ? input.filter(
          (actionItem) =>
            actionItem.action &&
            !['create', 'delete', 'duplicate'].includes(actionItem.action)
        )
      : input,
  },
})
