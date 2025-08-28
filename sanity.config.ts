'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import { dashboardTool } from "@sanity/dashboard";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './src/sanity/env'
import {schema} from './src/sanity/schemaTypes'
import {structure} from './src/sanity/structure'
// import { netlifyTool } from 'sanity-plugin-netlify'
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure }), // ✅ custom desk structure with singleton support
    visionTool({ defaultApiVersion: apiVersion }),
    dashboardTool({
      widgets: [
        netlifyWidget({
            title: 'Yobae Netlify Deploy',
            sites: [
              {
                title: 'Main Branch',
                apiId: process.env.NETLIFY_PROJECT_ID!,
                buildHookId: process.env.NETLIFY_BUILD_HOOK_ID!,
                name: 'yobae-au',
                url: 'https://yobae.com.au'
              }
            ]
        })
      ]
    })
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
