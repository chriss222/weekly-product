import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'produc of the week',

  projectId: 'tcdiv41s',
  dataset: 'true',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
