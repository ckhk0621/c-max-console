/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    categories: Category;
    media: Media;
    pages: Page;
    products: Product;
    solutions: Solution;
    news: News;
    blocks: Block;
    calendar: Calendar;
    files: File;
    teams: Team;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    home: Home;
    AboutUs: AboutUs;
    productsPage: ProductsPage;
    solutionsPage: SolutionsPage;
    ShowcasePage: ShowcasePage;
    contactPage: ContactPage;
    settings: Setting;
    newsPage: NewsPage;
    teamsPage: TeamsPage;
    servicesPage: ServicesPage;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  roles?: ('admin' | 'user' | 'staff')[] | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: string;
  title?: string | null;
  value?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt?: string | null;
  creator?: (string | null) | User;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    sixteenByNineMedium?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  slug: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "products".
 */
export interface Product {
  id: string;
  category?: (string | Category)[] | null;
  type?: 'product' | null;
  title?: string | null;
  slug?: string | null;
  thumbnail?: string | Media | null;
  content?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "solutions".
 */
export interface Solution {
  id: string;
  type?: 'solution' | null;
  file?: string | Media | null;
  title?: string | null;
  slug?: string | null;
  thumbnail?: string | Media | null;
  content?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "news".
 */
export interface News {
  id: string;
  category?: (string | Category)[] | null;
  type?: 'news' | null;
  title?: string | null;
  slug?: string | null;
  publishDate?: string | null;
  thumbnail?: string | Media | null;
  content?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blocks".
 */
export interface Block {
  id: string;
  type?: 'email' | null;
  title?: string | null;
  content: {
    [k: string]: unknown;
  }[];
  email?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "calendar".
 */
export interface Calendar {
  id: string;
  title: string;
  staff: string | User;
  startDateTime?: string | null;
  endDateTime?: string | null;
  status?: ('public' | 'private') | null;
  description?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "files".
 */
export interface File {
  id: string;
  status?: ('public' | 'private') | null;
  creator?: (string | null) | User;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "teams".
 */
export interface Team {
  id: string;
  title?: string | null;
  name?: string | null;
  email?: string | null;
  phone?: string | null;
  slug?: string | null;
  thumbnail?: string | Media | null;
  description?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "home".
 */
export interface Home {
  id: string;
  content: {
    layout?:
      | (
          | {
              image: string | Media;
              title?: string | null;
              id?: string | null;
              blockName?: string | null;
              blockType: 'banner';
            }
          | {
              title?: string | null;
              content?:
                | {
                    [k: string]: unknown;
                  }[]
                | null;
              link?: (string | null) | Page;
              id?: string | null;
              blockName?: string | null;
              blockType: 'introduction';
            }
          | {
              subTitle?: string | null;
              title?: string | null;
              list?:
                | {
                    title?: string | null;
                    link?: (string | null) | Page;
                    description?:
                      | {
                          [k: string]: unknown;
                        }[]
                      | null;
                    image?: string | Media | null;
                    id?: string | null;
                  }[]
                | null;
              id?: string | null;
              blockName?: string | null;
              blockType: 'listContent';
            }
          | {
              title?: string | null;
              content?:
                | {
                    [k: string]: unknown;
                  }[]
                | null;
              button?: string | null;
              link?: (string | null) | Page;
              id?: string | null;
              blockName?: string | null;
              blockType: 'promotion';
            }
          | {
              image: string | Media;
              imagePosition?: ('left' | 'right') | null;
              subTitle?: string | null;
              title?: string | null;
              highlight?: string | null;
              content?:
                | {
                    [k: string]: unknown;
                  }[]
                | null;
              button?: string | null;
              link?: (string | null) | Page;
              id?: string | null;
              blockName?: string | null;
              blockType: 'twoColumnContent';
            }
          | {
              subTitle?: string | null;
              title?: string | null;
              list?:
                | {
                    name?: string | null;
                    content?:
                      | {
                          [k: string]: unknown;
                        }[]
                      | null;
                    id?: string | null;
                  }[]
                | null;
              id?: string | null;
              blockName?: string | null;
              blockType: 'testimonials';
            }
          | {
              subTitle?: string | null;
              title?: string | null;
              highlight?: string | null;
              content?:
                | {
                    [k: string]: unknown;
                  }[]
                | null;
              images?:
                | {
                    image: string | Media;
                    link?: (string | null) | Page;
                    id?: string | null;
                  }[]
                | null;
              id?: string | null;
              blockName?: string | null;
              blockType: 'horizontalListImages';
            }
        )[]
      | null;
  };
  seo: {
    title?: string | null;
  };
  others: {
    displayNewsletter?: boolean | null;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "AboutUs".
 */
export interface AboutUs {
  id: string;
  content: {
    layout?:
      | (
          | {
              image: string | Media;
              title?: string | null;
              id?: string | null;
              blockName?: string | null;
              blockType: 'banner';
            }
          | {
              title?: string | null;
              content?:
                | {
                    [k: string]: unknown;
                  }[]
                | null;
              id?: string | null;
              blockName?: string | null;
              blockType: 'paragraph';
            }
          | {
              title?: string | null;
              images?:
                | {
                    image: string | Media;
                    id?: string | null;
                  }[]
                | null;
              id?: string | null;
              blockName?: string | null;
              blockType: 'listImages';
            }
          | {
              subTitle?: string | null;
              title?: string | null;
              list?:
                | {
                    title?: string | null;
                    link?: (string | null) | Page;
                    description?:
                      | {
                          [k: string]: unknown;
                        }[]
                      | null;
                    image?: string | Media | null;
                    id?: string | null;
                  }[]
                | null;
              id?: string | null;
              blockName?: string | null;
              blockType: 'listContent';
            }
        )[]
      | null;
  };
  seo: {
    title?: string | null;
  };
  others: {
    displayNewsletter?: boolean | null;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "productsPage".
 */
export interface ProductsPage {
  id: string;
  content: {
    title?: string | null;
  };
  seo: {
    title?: string | null;
  };
  others: {
    displayNewsletter?: boolean | null;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "solutionsPage".
 */
export interface SolutionsPage {
  id: string;
  content: {
    title?: string | null;
    content?:
      | {
          [k: string]: unknown;
        }[]
      | null;
    file?: (string | null) | Media;
  };
  seo: {
    title?: string | null;
  };
  others: {
    displayNewsletter?: boolean | null;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ShowcasePage".
 */
export interface ShowcasePage {
  id: string;
  content: {
    layout?:
      | (
          | {
              title?: string | null;
              content?:
                | {
                    [k: string]: unknown;
                  }[]
                | null;
              id?: string | null;
              blockName?: string | null;
              blockType: 'paragraph';
            }
          | {
              title?: string | null;
              images?:
                | {
                    image: string | Media;
                    id?: string | null;
                  }[]
                | null;
              id?: string | null;
              blockName?: string | null;
              blockType: 'listImages';
            }
          | {
              subTitle?: string | null;
              title?: string | null;
              list?:
                | {
                    name?: string | null;
                    content?:
                      | {
                          [k: string]: unknown;
                        }[]
                      | null;
                    id?: string | null;
                  }[]
                | null;
              id?: string | null;
              blockName?: string | null;
              blockType: 'testimonials';
            }
          | {
              subTitle?: string | null;
              title?: string | null;
              images?:
                | {
                    image: string | Media;
                    id?: string | null;
                  }[]
                | null;
              id?: string | null;
              blockName?: string | null;
              blockType: 'listSupport';
            }
        )[]
      | null;
  };
  seo: {
    title?: string | null;
  };
  others: {
    displayNewsletter?: boolean | null;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "contactPage".
 */
export interface ContactPage {
  id: string;
  content: {
    title?: string | null;
    content?:
      | {
          [k: string]: unknown;
        }[]
      | null;
  };
  seo: {
    title?: string | null;
  };
  others: {
    displayNewsletter?: boolean | null;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings".
 */
export interface Setting {
  id: string;
  website: {
    name?: string | null;
    description?: string | null;
    logo?: string | Media | null;
  };
  socials: {
    email?: string | null;
    phone?: string | null;
    instagram?: string | null;
    facebook?: string | null;
    youtube?: string | null;
    twitter?: string | null;
  };
  menu: {
    nestedNavigation?:
      | {
          title?: string | null;
          slug?: string | null;
          external?: boolean | null;
          id?: string | null;
        }[]
      | null;
  };
  footer: {
    copyright?: string | null;
    address?: string | null;
    links?:
      | {
          title?: string | null;
          slug?: string | null;
          external?: boolean | null;
          id?: string | null;
        }[]
      | null;
  };
  options: {
    categories?: (string | Category)[] | null;
  };
  others: {
    name?: string | null;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "newsPage".
 */
export interface NewsPage {
  id: string;
  content: {
    subTitle?: string | null;
    title?: string | null;
  };
  seo: {
    title?: string | null;
  };
  others: {
    displayNewsletter?: boolean | null;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "teamsPage".
 */
export interface TeamsPage {
  id: string;
  content: {
    subTitle?: string | null;
    title?: string | null;
  };
  seo: {
    title?: string | null;
  };
  others: {
    displayNewsletter?: boolean | null;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "servicesPage".
 */
export interface ServicesPage {
  id: string;
  content: {
    layout?:
      | (
          | {
              image: string | Media;
              title?: string | null;
              id?: string | null;
              blockName?: string | null;
              blockType: 'banner';
            }
          | {
              title?: string | null;
              content?:
                | {
                    [k: string]: unknown;
                  }[]
                | null;
              id?: string | null;
              blockName?: string | null;
              blockType: 'paragraph';
            }
          | {
              title?: string | null;
              images?:
                | {
                    image: string | Media;
                    id?: string | null;
                  }[]
                | null;
              id?: string | null;
              blockName?: string | null;
              blockType: 'listImages';
            }
          | {
              subTitle?: string | null;
              title?: string | null;
              list?:
                | {
                    title?: string | null;
                    link?: (string | null) | Page;
                    description?:
                      | {
                          [k: string]: unknown;
                        }[]
                      | null;
                    image?: string | Media | null;
                    id?: string | null;
                  }[]
                | null;
              id?: string | null;
              blockName?: string | null;
              blockType: 'listContent';
            }
          | {
              image: string | Media;
              imagePosition?: ('left' | 'right') | null;
              subTitle?: string | null;
              title?: string | null;
              highlight?: string | null;
              content?:
                | {
                    [k: string]: unknown;
                  }[]
                | null;
              button?: string | null;
              link?: (string | null) | Page;
              id?: string | null;
              blockName?: string | null;
              blockType: 'twoColumnContent';
            }
        )[]
      | null;
  };
  seo: {
    title?: string | null;
  };
  others: {
    displayNewsletter?: boolean | null;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
