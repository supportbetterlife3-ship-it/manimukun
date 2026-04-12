import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemaTypes from './schemaTypes/index.js';

export default defineConfig({
  name: 'default',
  title: 'Manimukundeshwor',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'feazbsqy',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  // include the default desk tool so the studio has a workspace
  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },

  basePath: '/admin',
});
