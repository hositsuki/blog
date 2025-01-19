import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { useState } from 'react'

type ImageProps = {
  caption?: string
} & NextImageProps

export default function Image({ caption, alt, ...props }: ImageProps) {
  const [isLoading, setLoading] = useState(true)

  return (
    <figure className="my-8">
      <div
        className={`overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800 ${
          isLoading ? 'animate-pulse' : ''
        }`}
      >
        <NextImage
          className={`
            duration-700 ease-in-out
            ${
              isLoading
                ? 'scale-[1.02] blur-xl grayscale'
                : 'scale-100 blur-0 grayscale-0'
            }
          `}
          onLoadingComplete={() => setLoading(false)}
          alt={alt}
          {...props}
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-zinc-600 dark:text-zinc-400">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
