import type { CollectionConfig } from 'payload'

export const Artists: CollectionConfig = {
  slug: 'artists',
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
  ],
}
