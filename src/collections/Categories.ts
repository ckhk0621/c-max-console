import type { CollectionConfig } from 'payload/types'

const Categories: CollectionConfig = {
  access: {
    delete: () => true,
    read: () => true,
    create: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
    },
    {
      name: 'value',
      type: 'text',
    },
  ],
  slug: 'categories',
}

export default Categories
