import { Feed } from 'feed'
import { getAllPosts } from './posts'
import fs from 'fs'
import path from 'path'

export async function generateRssFeed() {
  const posts = getAllPosts()
  const site_url = 'https://blog.hositsuki.dev'

  const feedOptions = {
    title: '雪桜さゆ',
    description: '分享技术与生活，记录成长与思考',
    id: site_url,
    link: site_url,
    language: 'zh-CN',
    image: `${site_url}/og-image.png`,
    favicon: `${site_url}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Hositsuki`,
    generator: 'Feed for Node.js',
    feedLinks: {
      rss2: `${site_url}/rss.xml`,
      json: `${site_url}/feed.json`,
      atom: `${site_url}/atom.xml`,
    },
  }

  const feed = new Feed(feedOptions)

  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      id: `${site_url}/posts/${post.slug}`,
      link: `${site_url}/posts/${post.slug}`,
      description: post.description,
      date: new Date(post.date),
      ...(post.tags && { category: post.tags.map((tag) => ({ name: tag })) }),
    })
  })

  // 确保 public 目录存在
  const PUBLIC_PATH = path.join(process.cwd(), 'public')
  if (!fs.existsSync(PUBLIC_PATH)) {
    fs.mkdirSync(PUBLIC_PATH, { recursive: true })
  }

  // 写入 RSS feed 文件
  fs.writeFileSync(path.join(PUBLIC_PATH, 'rss.xml'), feed.rss2())
  fs.writeFileSync(path.join(PUBLIC_PATH, 'atom.xml'), feed.atom1())
  fs.writeFileSync(path.join(PUBLIC_PATH, 'feed.json'), feed.json1())
}
