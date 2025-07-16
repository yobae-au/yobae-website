import type { HomeFlavours } from '@/sanity/types'

type Props = {
  data: HomeFlavours
}

export default function Flavours({ data }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold">{data.title}</h2>
      <p className="text-base">{data.blurb}</p>
    </div>
  )
}
