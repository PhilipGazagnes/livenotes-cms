import type { CollectionConfig } from 'payload'

export const SongArtist: CollectionConfig = {
  slug: 'song_artist',
  fields: [
    {
      name: 'song',
      type: 'relationship',
      relationTo: 'songs',
      required: true,
    },
    {
      name: 'artist',
      type: 'relationship',
      relationTo: 'artists',
      required: true,
    },
  ],
}
