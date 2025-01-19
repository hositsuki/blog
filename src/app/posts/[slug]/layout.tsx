import { MDXProvider } from '@mdx-js/react'
import { mdxComponents } from '@/components/mdx'
import Link from 'next/link'
import ReadingProgress from '@/components/ReadingProgress'
import Comments from '@/components/Comments'
import LazyLoad from '@/components/LazyLoad'
import PostSkeleton from '@/components/PostSkeleton'

export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ReadingProgress />
      <article className="prose prose-zinc dark:prose-invert max-w-none">
        <div className="mb-8">
          <Link
            href="/posts"
            className="text-sm text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
          >
            ← 返回文章列表
          </Link>
        </div>
        <LazyLoad fallback={<PostSkeleton />}>
          <MDXProvider components={mdxComponents}>{children}</MDXProvider>
        </LazyLoad>
        
        {/* 文章底部 */}
        <div className="mt-16 border-t pt-8 dark:border-zinc-800">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">分享文章</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <Link
              href="/posts"
              className="rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
            >
              查看更多文章
            </Link>
          </div>
        </div>
      </article>
      
      {/* 评论区 */}
      <LazyLoad>
        <Comments />
      </LazyLoad>
    </>
  )
}
