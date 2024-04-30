import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Categories from './collections/Categories'
import Users from './collections/Users'
import Media from './collections/Media';
import Pages from './collections/Pages'
import Blocks from './collections/Blocks'
import Products from './collections/Products'
import Solutions from './collections/Solutions'
import News from './collections/News'
import Calendar from './collections/Calendar'
import Files from './collections/Files'
import Teams from './collections/Teams'

import Settings from './globals/Settings';
import Home from './globals/Home';
import AboutUs from './globals/AboutUs'
import ProductsPage from './globals/ProductsPage'
import SolutionsPage from './globals/SolutionsPage'
import ContactPage from './globals/ContactPage'
import ShowcasePage from './globals/ShowcasePage'
import NewsPage from './globals/NewsPage'
import TeamsPage from './globals/TeamsPage'
import ServicesPage from './globals/ServicesPage'
import AfterLogin from "./components/AfterLogin";
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { s3Adapter } from '@payloadcms/plugin-cloud-storage/s3';

export default buildConfig({
  admin: {
    user: Users.slug,
    components: {
      afterLogin: [AfterLogin],
    },
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Users, Categories, Media, Pages, Products, Solutions, News, Blocks, Calendar, Files, Teams],
  globals: [
    Home,
    AboutUs,
    ProductsPage,
    SolutionsPage,
    ShowcasePage,
    ContactPage,
    Settings,
    NewsPage,
    TeamsPage,
    ServicesPage
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
    declare: false
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
    ...[].reduce((_, { mutations, queries }) => {
      return {
        mutations: (graphQL, payload) => {
          return {
            ...(_?.mutations?.(graphQL, payload) ?? {}),
            ...mutations(graphQL, payload),
          };
        },
        queries: (graphQL, payload) => {
          return {
            ...(_?.queries?.(graphQL, payload) ?? {}),
            ...queries(graphQL, payload),
          };
        },
      };
    }, {}),
  },
  plugins: [payloadCloud(),
    cloudStorage({
      collections: {
        media: {
          adapter: s3Adapter({
            bucket: process.env.S3_BUCKET_NAME,
            config: {
              // endpoint: "https://c-max-bucket.s3.ap-east-1.amazonaws.com",
              credentials: {
                accessKeyId: "AKIA4HWDFA76EGIL3MMU",
                secretAccessKey: "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",
              },
              region: "ap-east-1",
            },
          }),
          // disablePayloadAccessControl: true,
        },
      },
    })
  ],
  upload:{
    limits: {
      fileSize: 20000000, // 20MB, written in bytes
    },
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  // cors: [process.env.PAYLOAD_PUBLIC_SITE_URL],
  // csrf: [process.env.PAYLOAD_PUBLIC_SITE_URL],
  // cookiePrefix: 'c-max',
  localization: {
    locales: ['en', 'cn', 'zh', 'jp'],
    defaultLocale: 'en',
    fallback: true,
  },
  
})
