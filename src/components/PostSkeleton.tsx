'use client'

export default function PostSkeleton() {
  return (
    <div className="animate-pulse">
      {/* 标题 */}
      <div className="mb-4 h-8 w-3/4 rounded bg-zinc-200 dark:bg-zinc-800" />
      
      {/* 元信息 */}
      <div className="mb-8 flex gap-4">
        <div className="h-4 w-24 rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-4 w-24 rounded bg-zinc-200 dark:bg-zinc-800" />
      </div>
      
      {/* 内容段落 */}
      <div className="space-y-4">
        <div className="h-4 w-full rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-4 w-5/6 rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-4 w-4/6 rounded bg-zinc-200 dark:bg-zinc-800" />
      </div>
      
      {/* 图片占位符 */}
      <div className="my-8 h-64 w-full rounded bg-zinc-200 dark:bg-zinc-800" />
      
      {/* 更多段落 */}
      <div className="space-y-4">
        <div className="h-4 w-full rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-4 w-5/6 rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-4 w-4/6 rounded bg-zinc-200 dark:bg-zinc-800" />
      </div>
    </div>
  )
}
