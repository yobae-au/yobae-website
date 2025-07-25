import type { HomeStory } from '@/sanity/types'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

type Props = {
  data: HomeStory
}

export default function Story({ data }: Props) {
  const image = data.image

  return (
    <div className="grid grid-cols-12 lg:gap-4 gap-2 lg:mx-0 mx-4">
      <div className="col-span-10 col-start-3 lg:col-span-4 lg:col-start-8">
        <h2 className='title uppercase title-scale lg:mb-4 mb-2'>{data.title}</h2>
        <p>{data.blurb}</p>
      </div>
      <div className="lg:col-span-3 lg:col-start-10 col-start-3 col-span-10 lg:mt-16 mt-8">
        <div className="flex justify-end">
          <div className="relative  h-auto m-h-[400px]">
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
