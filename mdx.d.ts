declare module '*.mdx' {
  import type { MDXProps } from 'mdx/types'
  export default function MDXContent(props: MDXProps): JSX.Element
  export const metadata: {
    title: string
    date: string
    description?: string
  }
}
