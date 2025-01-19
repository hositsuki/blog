import { MDXProvider } from '@mdx-js/react'
import { mdxComponents } from '@/components/mdx'
import Link from 'next/link'

export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none">
      <div className="mb-8">
        <Link
          href="/"
          className="text-sm text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
        >
          ← Back to home
        </Link>
      </div>
      <MDXProvider components={mdxComponents}>{children}</MDXProvider>
    </article>
  )
}
