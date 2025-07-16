import type { HomeIntro } from '@/sanity/types'

type Props = {
  data: HomeIntro
}

export default function Intro({ data }: Props) {
  // console.log('Intro data:', data)
  return (
    <div>
      <h2 className="text-2xl font-bold">Intro</h2>
      {/* <p className="text-base">{data.marquee?.join(' · ')}</p> */}
      {/* You can render the image later */}
    </div>
  )
}
