import Image from 'next/image'

type BlurImageProps = {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
}

export default function BlurImage({
  src,
  alt,
  width,
  height,
  priority = false,
}: BlurImageProps) {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
      <Image
        src={src}
        alt={alt}
        className="object-cover"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${Buffer.from(
          `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
            <rect width="100%" height="100%" fill="#f4f4f5"/>
          </svg>`
        ).toString('base64')}`}
        fill
        sizes="(min-width: 1280px) 51rem, (min-width: 1024px) calc(64vw - 5rem), (min-width: 640px) calc(100vw - 3rem), calc(100vw - 3rem)"
        priority={priority}
      />
    </div>
  )
}
