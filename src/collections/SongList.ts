import type { CollectionConfig } from 'payload'

export const SongList: CollectionConfig = {
  slug: 'song_list',
  fields: [
    {
      name: 'song',
      type: 'relationship',
      relationTo: 'songs',
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
