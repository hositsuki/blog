'use client'

import { Suspense } from 'react'

type LazyLoadProps = {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export default function LazyLoad({ children, fallback }: LazyLoadProps) {
  return <Suspense fallback={fallback}>{children}</Suspense>
}
