import { MDXComponents } from 'mdx/types'
import Image from './Image'
import BlurImage from './BlurImage'
import Link from 'next/link'

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mt-8 mb-4 text-3xl font-bold">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-8 mb-4 text-2xl font-bold">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 mb-4 text-xl font-bold">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="my-4 leading-7 text-zinc-600 dark:text-zinc-400">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="my-4 ml-8 list-disc space-y-2 text-zinc-600 dark:text-zinc-400">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 ml-8 list-decimal space-y-2 text-zinc-600 dark:text-zinc-400">{children}</ol>
  ),
  li: ({ children }) => <li>{children}</li>,
  a: ({ href, children }) => {
    if (!href) return children

    const isInternalLink = href.startsWith('/')
    const isAnchorLink = href.startsWith('#')

    if (isInternalLink) {
      return (
        <Link href={href}>
          {children}
        </Link>
      )
    }

    if (isAnchorLink) {
      return <a href={href}>{children}</a>
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline dark:text-blue-400"
      >
        {children}
      </a>
    )
  },
  img: ({ src, alt, ...props }) => {
    if (!src) return null

    // 如果是外部图片链接
    if (src.startsWith('http')) {
      return (
        <Image
          src={src}
          alt={alt || ''}
          width={800}
          height={450}
          className="w-full"
          {...props}
        />
      )
    }

    // 如果是本地图片
    return (
      <BlurImage
        src={src}
        alt={alt || ''}
        priority={props.loading === 'eager'}
      />
    )
  },
  code: ({ children }) => (
    <code className="rounded bg-zinc-100 px-1 py-0.5 font-mono text-sm dark:bg-zinc-800">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="my-4 overflow-auto rounded-lg bg-zinc-100 p-4 dark:bg-zinc-800">
      {children}
    </pre>
  ),
}
