import type { CollectionConfig } from 'payload'

export const Songs: CollectionConfig = {
  slug: 'songs',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'id',
      type: 'number',
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'id_language',
      type: 'relationship',
      relationTo: 'languages',
      label: 'Language',
      required: true,
    },
  ],
}
