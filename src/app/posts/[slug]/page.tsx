import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { Metadata } from 'next'
import { getPostBySlug } from '@/lib/posts'
import { generateSeoMetadata } from '@/components/Seo'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return generateSeoMetadata({
      title: '文章未找到',
      description: '抱歉，您请求的文章不存在。',
    })
  }

  return generateSeoMetadata({
    title: `${post.title} - 雪桜さゆ`,
    description: post.description,
  })
}

export default function PostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="mx-auto max-w-2xl">
      <header className="mb-8">
        <h1 className="mb-2 text-3xl font-bold sm:text-4xl">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
          <time dateTime={post.date}>
            {format(new Date(post.date), 'yyyy年MM月dd日')}
          </time>
          <div className="flex gap-2">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="prose prose-zinc max-w-none dark:prose-invert">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </div>

      <footer className="mt-8 border-t pt-8 dark:border-zinc-800">
        <a
          href="/posts"
          className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          ← 返回文章列表
        </a>
      </footer>
    </article>
  )
}
