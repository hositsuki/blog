'use client'

import Script from 'next/script'

export default function Analytics() {
  // 只在生产环境中加载统计脚本
  if (process.env.NODE_ENV !== 'production') {
    return null
  }

  return (
    <Script
      async
      defer
      data-website-id="6cf7ee5e-712f-4c34-8db4-7ff1d6b69396"
      src="https://umami-analytics-red.vercel.app/script.js"
      data-domains="yume.ink"
      data-do-not-track="true"
    />
  )
}
