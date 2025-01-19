'use client'

import { useEffect, useState } from 'react'

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const windowHeight = scrollHeight - clientHeight
      const progress = windowHeight === 0 ? 100 : (scrollTop / windowHeight) * 100
      setProgress(progress)
    }

    window.addEventListener('scroll', updateProgress)
    updateProgress()

    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 z-50 h-1 w-full bg-zinc-200 dark:bg-zinc-800">
      <div
        className="h-full bg-blue-600 transition-all duration-150 ease-out dark:bg-blue-400"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
