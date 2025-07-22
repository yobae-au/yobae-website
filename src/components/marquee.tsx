// "use client"
import Marquee from "react-fast-marquee";

interface TextTickerProps {
  data: string[];
}

export default function TextTicker({ data }: TextTickerProps) {
  return (
    <Marquee autoFill={true}>
      <div>
        {data.map((text, index) => (
          <span key={index} className="text-base font-semibold mx-2">
            {text}
          </span>
        ))}
      </div>
    </Marquee>
     
  )
}

