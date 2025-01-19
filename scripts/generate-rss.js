const { generateRssFeed } = require('../dist/lib/feed')

async function generate() {
  await generateRssFeed()
  console.log('RSS feed generated successfully')
}

generate().catch(console.error)
