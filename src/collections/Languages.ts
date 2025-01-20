import type { CollectionConfig } from 'payload'

export const Languages: CollectionConfig = {
  slug: 'languages',
  admin: {
    useAsTitle: 'code',
  },
  fields: [
    {
      name: 'id',
      type: 'number',
      required: true,
    },
    {
      name: 'code',
      type: 'text',
      required: true,
    },
  ],
}
