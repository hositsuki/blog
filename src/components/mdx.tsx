import { MDXComponents } from 'mdx/types'

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mt-8 mb-4 text-3xl font-bold">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-8 mb-4 text-2xl font-semibold">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-6 mb-4 text-xl font-semibold">{children}</h3>
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
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-blue-600 hover:underline dark:text-blue-400"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
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
