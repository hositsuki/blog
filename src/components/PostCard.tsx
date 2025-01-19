import Link from 'next/link'
import { format } from 'date-fns'

interface PostMetadata {
  title: string
  date: string
  description?: string
  slug: string
  tags?: string[]
}

interface PostCardProps {
  post: PostMetadata
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center gap-2">
        <time dateTime={post.date} className="text-sm text-zinc-500 dark:text-zinc-400">
          {format(new Date(post.date), 'yyyy年MM月dd日')}
        </time>
        {post.tags && post.tags.map(tag => (
          <span
            key={tag}
            className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link
        href={`/posts/${post.slug}`}
        className="group space-y-1"
      >
        <h2 className="text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {post.title}
        </h2>
        {post.description && (
          <p className="text-zinc-600 dark:text-zinc-400 line-clamp-2">
            {post.description}
          </p>
        )}
      </Link>
    </div>
  )
}
