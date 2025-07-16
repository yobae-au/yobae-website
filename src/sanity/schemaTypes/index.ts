import { type SchemaTypeDefinition } from 'sanity'
import siteSettings from './siteSettings'
import homeIntro from './homeIntro'
import homeStory from './homeStory'
import homeFlavours from './homeFlavours'
import homeToppings from './homeToppings'
import homeFooter from './homeFooter'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    homeIntro, 
    homeStory,
    homeFlavours,
    homeToppings,
    homeFooter
  ],
}
