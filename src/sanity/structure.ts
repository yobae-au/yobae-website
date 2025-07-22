import type {StructureResolver} from 'sanity/structure'
import { SITE_SETTINGS_SINGLETON_ID } from './schemaTypes/siteSettings'
import { HOME_INTRO_ID } from './schemaTypes/homeIntro'
import { HOME_STORY_ID } from './schemaTypes/homeStory'
import { HOME_FLAVOURS_ID } from './schemaTypes/homeFlavours'
import { HOME_TOPPINGS_ID } from './schemaTypes/homeToppings'
import { HOME_FOOTER_ID } from './schemaTypes/homeFooter'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .id(SITE_SETTINGS_SINGLETON_ID)
        .child(
          S.editor()
            .id(SITE_SETTINGS_SINGLETON_ID)
            .schemaType('siteSettings')
            .documentId(SITE_SETTINGS_SINGLETON_ID)
        ),
      S.divider(),
      S.listItem()
        .title('Home Intro')
        .id(HOME_INTRO_ID)
        .child(
          S.editor()
            .id(HOME_INTRO_ID)
            .schemaType('homeIntro')
            .documentId(HOME_INTRO_ID)
        ),
      S.listItem()
        .title('Home Story')
        .id(HOME_STORY_ID)
        .child(
          S.editor()
            .id(HOME_STORY_ID)
            .schemaType('homeStory')
            .documentId(HOME_STORY_ID)
        ),
      S.listItem()
        .title('Home Flavours')
        .id(HOME_FLAVOURS_ID)
        .child(
          S.editor()
            .id(HOME_FLAVOURS_ID)
            .schemaType('homeFlavours')
            .documentId(HOME_FLAVOURS_ID)
        ),
        S.listItem()
        .title('Home Toppings')
        .id(HOME_TOPPINGS_ID)
        .child(
          S.editor()
            .id(HOME_TOPPINGS_ID)
            .schemaType('homeToppings')
            .documentId(HOME_TOPPINGS_ID)
        ),
        S.listItem()
          .title('Home Footer')
          .id(HOME_FOOTER_ID)
          .child(
            S.editor()
              .id(HOME_FOOTER_ID)
              .schemaType('homeFooter')
              .documentId(HOME_FOOTER_ID)
          ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            'siteSettings',
            'homeIntro',
            'homeStory',
            'homeFlavours',
            'homeToppings',
            'homeFooter',
          ].includes(item.getId() ?? '')
      ),
    ])