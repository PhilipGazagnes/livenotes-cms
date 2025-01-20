import type { CollectionConfig } from 'payload'

export const AgentSong: CollectionConfig = {
  slug: 'agent_song',
  fields: [
    {
      name: 'agent',
      type: 'relationship',
      relationTo: 'agents',
      required: true,
    },
    {
      name: 'song',
      type: 'relationship',
      relationTo: 'songs',
      required: true,
    },
  ],
}
