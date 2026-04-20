import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import i18next from 'eslint-plugin-i18next'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({ baseDirectory: __dirname })

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: [
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'src/lib/i18n/**',
      'content/**',
    ],
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: { i18next },
    rules: {
      'i18next/no-literal-string': [
        'warn',
        {
          mode: 'jsx-only',
          'jsx-components': {
            exclude: ['Trans', 'JsonLd', 'Script'],
          },
          'jsx-attributes': {
            exclude: [
              'className',
              'styleName',
              'style',
              'type',
              'key',
              'id',
              'width',
              'height',
              'href',
              'src',
              'rel',
              'target',
              'loading',
              'srcSet',
              'sizes',
              'media',
              'name',
              'role',
              'slot',
              'lang',
              'dir',
              'viewBox',
              'xmlns',
              'fill',
              'stroke',
              'strokeWidth',
              'preserveAspectRatio',
              'd',
              'x',
              'y',
              'cx',
              'cy',
              'r',
              'property',
              'charSet',
              'httpEquiv',
              'itemProp',
              'itemType',
              'itemScope',
              /^aria-/,
              /^data-/,
            ],
          },
          words: {
            exclude: [
              '[0-9!-/:-@[-`{-~]+',
              '[A-Z_-]+',
              /^\s*$/,
              /^https?:\/\//,
              /^\/[A-Za-z0-9/_\-#?=&.]*$/,
              /^mailto:/,
              /^tel:/,
              /^[a-z]+:[a-z0-9/_\-#?=&.]*$/,
              /^@[a-z0-9/_\-]+$/,
              /^\p{Emoji}+$/u,
            ],
          },
        },
      ],
    },
  },
  {
    files: [
      'src/lib/icons.ts',
      'src/lib/fonts.ts',
      'src/lib/metadata.ts',
      'src/lib/content.ts',
      'src/data/**',
      'src/app/sitemap.ts',
      '**/*.config.*',
    ],
    rules: {
      'i18next/no-literal-string': 'off',
    },
  },
]

export default eslintConfig
