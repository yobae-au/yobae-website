import type { HomeToppings } from '@/sanity/types'

type Props = {
  data: HomeToppings
}

export default function Toppings({ data }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold">{data.title}</h2>
      <p className="text-base">{data.blurb}</p>
      {/* Render items later */}
    </div>
  )
}
