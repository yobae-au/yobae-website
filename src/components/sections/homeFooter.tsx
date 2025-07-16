import type { HomeFooter } from '@/sanity/types'

type Props = {
  data: HomeFooter
}

export default function HomeFooter({ data }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold">{data.title}</h2>
      <p className="text-base">{data.blurb}</p>
      {/* Render offers and marquee later */}
    </div>
  )
}
