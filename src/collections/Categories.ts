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
  slug: 'categories',
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
    },
    {
      name: 'value',
      type: 'text',
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeChange: [
          ({ siblingData }) => {
            const value = siblingData.title
              .toLowerCase()
              .replace(/ /g, "-")
              .replace(/[^\w-]+/g, "");
            return value;
          },
        ],
      },
    }
  ],
}

export default Categories
