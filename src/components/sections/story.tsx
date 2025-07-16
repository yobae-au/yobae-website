import type { HomeStory } from '@/sanity/types'

type Props = {
  data: HomeStory
}

export default function Story({ data }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold">{data.title}</h2>
      <p className="text-base">{data.blurb}</p>
      {/* Render image later */}
    </div>
  )
}
