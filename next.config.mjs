import createMDX from '@next/mdx'
import rehypePrism from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeToc from 'rehype-toc'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@mdx-js/react'],
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypePrism,
      rehypeSlug,
      [
        rehypeToc,
        {
          headings: ['h2', 'h3'],
          cssClasses: {
            toc: 'table-of-contents',
            link: 'toc-link',
          },
        },
      ],
    ],
  },
})

export default withMDX(nextConfig)
