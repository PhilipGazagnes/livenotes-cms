import type { CollectionConfig } from 'payload'

export const Lists: CollectionConfig = {
  slug: 'lists',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
}
