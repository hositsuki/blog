import { Metadata } from 'next'
import { generateSeoMetadata } from '@/components/Seo'
import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export const metadata: Metadata = generateSeoMetadata({
  title: '雪桜さゆ',
  description: '程序员，热爱技术与文学。专注于法律、金融和技术领域的学习与探索。',
})

export default function Home() {
  const posts = getAllPosts().slice(0, 4) // 只显示最新的4篇文章

  return (
    <div className="space-y-16">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">你好，我是雪桜さゆ 👋</h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400">
          一个热爱技术与文学的程序员，目前在日本生活和工作。我在攻读法学学位，备考 CFA。
          热衷于探索技术、法律和金融的交叉领域，同时也是一名业余诗人和作家。
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/hositsuki"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/DawnSayu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            Twitter
          </a>
          <a
            href="mailto:yukisakuranoyume@gmail.com"
            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            Email
          </a>
        </div>
      </div>

      {posts.length > 0 && (
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">最新文章</h2>
            <a
              href="/posts"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              查看全部 →
            </a>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
