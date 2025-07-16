function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) throw new Error(errorMessage)
  return v
}

export const apiVersion =
  process.env.SANITY_STUDIO_SANITY_API_VERSION || '2025-07-14'

export const dataset = 
  process.env.NEXT_PUBLIC_SANITY_DATASET || 
  assertValue(process.env.SANITY_STUDIO_SANITY_DATASET, 'Missing SANITY DATASET')

export const projectId = 
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 
  assertValue(process.env.SANITY_STUDIO_SANITY_PROJECT_ID, 'Missing SANITY PROJECT_ID')
