import {createConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

import {muxInput} from 'sanity-plugin-mux-input'

export default createConfig({
  name: 'default',
  title: 'Boring+Ordinary',

  projectId: 'qnrs6r79',
  dataset: 'production',

  plugins: [
    deskTool(),
    muxInput(),
    visionTool({
      defaultApiVersion: '2022-08-15',
      defaultDataset: 'production',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
