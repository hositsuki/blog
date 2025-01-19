# Personal Blog

A minimal, modern blog built with Next.js 14, MDX, and Tailwind CSS. Perfect for content creators who want to focus on writing.

## Features

- Write posts in MDX
- Beautiful, minimal design
- Dark mode support
- Fast page loads
- Fully responsive
- SEO optimized

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser

## Writing Posts

1. Create a new directory in `src/app/posts/[your-post-slug]`
2. Add a `page.mdx` file in that directory
3. Include metadata at the top of your MDX file:
   ```mdx
   export const metadata = {
     title: 'Your Post Title',
     date: 'YYYY-MM-DD',
     description: 'A brief description of your post',
   }
   ```
4. Write your post content in MDX

## Deploy on Vercel

The easiest way to deploy your blog is to use [Vercel](https://vercel.com):

1. Push your code to a Git repository
2. Import your repository on Vercel
3. Deploy!
