import type { CollectionConfig } from 'payload'

export const Agents: CollectionConfig = {
  slug: 'agents',
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
