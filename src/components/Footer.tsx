import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t py-12 dark:border-zinc-800">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {new Date().getFullYear()} ゆきさゆ. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/hositsuki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/yukisayu_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              Twitter
            </a>
            <a
              href="/rss.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              RSS
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
