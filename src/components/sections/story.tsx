import type { HomeStory } from '@/sanity/types'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

type Props = {
  data: HomeStory
}

export default function Story({ data }: Props) {
  const image = data.image

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-5 col-start-7">
        <h2>{data.title}</h2>
        <p>{data.blurb}</p>
        <div className="flex justify-end">
          <div className="relative w-3/5 h-auto m-h-[400px]">
            {image?.asset && (
              <Image
              src={urlFor(image).url()}
              alt={image.alt || data.title || 'Story Image'}
              width={800}
              height={800}
              />
            )}
          </div>
        </div>
      </div>

    </div>
  )
}
