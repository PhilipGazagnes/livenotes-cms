import type { CollectionConfig } from 'payload'

export const AgentList: CollectionConfig = {
  slug: 'agent_list',
  fields: [
    {
      name: 'agent',
      type: 'relationship',
      relationTo: 'agents',
      required: true,
    },
    {
      name: 'list',
      type: 'relationship',
      relationTo: 'lists',
      required: true,
    },
  ],
}
