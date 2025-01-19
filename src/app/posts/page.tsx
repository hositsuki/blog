import { Metadata } from 'next'
import { generateSeoMetadata } from '@/components/Seo'
import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export const metadata: Metadata = generateSeoMetadata({
  title: '文章列表 - 雪桜さゆ',
  description: '分享技术、法律和金融领域的思考与经验',
})

export default function Posts() {
  const posts = getAllPosts()

  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold sm:text-4xl">文章列表</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          分享我在技术、法律和金融领域的思考与经验
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))
        ) : (
          <p className="text-zinc-600 dark:text-zinc-400 col-span-2 text-center py-8">
            文章正在准备中...
          </p>
        )}
      </div>
    </div>
  )
}
