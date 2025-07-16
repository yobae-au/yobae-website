// "use client"
import Marquee from "react-fast-marquee";

interface TextTickerProps {
  text: string;
}

export default function TextTicker({ text }: TextTickerProps) {
  return (
    <Marquee autoFill={true}>
      <div>
        {text}
      </div>
    </Marquee>
     
  )
}

