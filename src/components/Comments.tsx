'use client'

import Giscus from '@giscus/react'
import { useTheme } from './ThemeProvider'

export default function Comments() {
  const { theme } = useTheme()

  return (
    <div className="mt-16">
      <div className="border-t pt-8 dark:border-zinc-800">
        <h2 className="mb-8 text-2xl font-bold">评论</h2>
        <Giscus
          id="comments"
          repo="hositsuki/blog"
          repoId="R_kgDONsG_MA"
          category="General"
          categoryId="DIC_kwDONsG_MM4CmJz8"
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          theme={theme === 'dark' ? 'dark' : 'light'}
          lang="zh-CN"
          loading="lazy"
        />
      </div>
    </div>
  )
}
