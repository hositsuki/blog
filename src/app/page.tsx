import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">Welcome to My Blog</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Sharing thoughts on technology, life, and everything in between.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">Recent Posts</h2>
        <div className="space-y-4">
          {/* We'll populate this with real posts later */}
          <article className="group">
            <Link href="/posts/hello-world" className="block space-y-2">
              <time className="text-sm text-zinc-500">January 19, 2025</time>
              <h3 className="text-xl font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400">
                Hello World
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Welcome to my new blog where I'll be sharing my thoughts and experiences.
              </p>
            </Link>
          </article>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          I'm a passionate creator sharing my journey and insights. This blog is my digital garden where I cultivate ideas and share experiences.
        </p>
      </section>
    </div>
  )
}
