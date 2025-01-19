import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'src/app/posts')

export type Post = {
  slug: string
  title: string
  date: string
  description: string
  content: string
  tags: string[]
}

export function getAllPosts(): Post[] {
  try {
    // 获取posts目录下的所有文件夹
    const folders = fs.readdirSync(postsDirectory).filter((folder) => {
      try {
        const stats = fs.statSync(path.join(postsDirectory, folder))
        return stats.isDirectory() && folder !== '[slug]'
      } catch (error) {
        console.error(`Error reading folder ${folder}:`, error)
        return false
      }
    })

    const posts = folders
      .map((folder) => {
        try {
          const fullPath = path.join(postsDirectory, folder, 'page.mdx')
          
          // 如果文件不存在，跳过
          if (!fs.existsSync(fullPath)) {
            return null
          }

          const fileContents = fs.readFileSync(fullPath, 'utf8')
          const { data, content } = matter(fileContents)

          // 验证必需的字段
          if (!data.title || !data.date) {
            console.warn(`Post ${folder} is missing required fields`)
            return null
          }

          return {
            slug: folder,
            title: data.title,
            date: new Date(data.date).toISOString(),
            description: data.description || '',
            content,
            tags: Array.isArray(data.tags) ? data.tags : [],
          }
        } catch (error) {
          console.error(`Error processing post ${folder}:`, error)
          return null
        }
      })
      .filter((post): post is Post => post !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return posts
  } catch (error) {
    console.error('Error getting all posts:', error)
    return []
  }
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, slug, 'page.mdx')
    
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    if (!data.title || !data.date) {
      console.warn(`Post ${slug} is missing required fields`)
      return null
    }

    return {
      slug,
      title: data.title,
      date: new Date(data.date).toISOString(),
      description: data.description || '',
      content,
      tags: Array.isArray(data.tags) ? data.tags : [],
    }
  } catch (error) {
    console.error(`Error getting post ${slug}:`, error)
    return null
  }
}

export function getAllTags(): string[] {
  try {
    const posts = getAllPosts()
    const tags = new Set<string>()
    
    posts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag))
    })

    return Array.from(tags).sort()
  } catch (error) {
    console.error('Error getting all tags:', error)
    return []
  }
}
