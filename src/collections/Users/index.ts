import { CollectionConfig } from 'payload/types'
import { admins } from '../access/admins'
import adminsAndUser from '../access/adminsAndUser'
import { anyone } from '../access/anyone'
import { checkRole } from '../access/checkRole'
import { loginAfterCreate } from '../hooks/loginAfterCreate'
import { protectRoles } from '../hooks/protectRoles'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  // auth: {
  //   tokenExpiration: 86400, // 24 hours
  //   cookies: {
  //     sameSite: 'none',
  //     secure: true,
  //     domain: process.env.COOKIE_DOMAIN,
  //   },
  // },
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: ()=> true,
    create: anyone,
    update: adminsAndUser,
    delete: admins,
    admin: ({ req: { user } }) => checkRole(['admin'], user),
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
    },
    {
      name: 'lastName',
      type: 'text',
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      saveToJWT: true,
      // hooks: {
      //   beforeChange: [protectRoles],
      // },
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'User',
          value: 'user',
        },
        {
          label: 'Staff',
          value: 'staff',
        }
      ],
    }
  ],
}

export default Users
