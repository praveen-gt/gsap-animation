// components/Parallax.tsx
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxProps {
  title: string;
}

function Parallax({ title }: ParallaxProps) {
  const [background, setBackground] = useState<number>(20);

  const parallaxRef = useRef<HTMLDivElement | null>(null);
  const mountain3 = useRef<HTMLImageElement | null>(null);
  const mountain2 = useRef<HTMLImageElement | null>(null);
  const mountain1 = useRef<HTMLImageElement | null>(null);
  const cloudsBottom = useRef<HTMLImageElement | null>(null);
  const cloudsLeft = useRef<HTMLImageElement | null>(null);
  const cloudsRight = useRef<HTMLImageElement | null>(null);
  const stars = useRef<HTMLImageElement | null>(null);
  const sun = useRef<HTMLImageElement | null>(null);
  const copy = useRef<HTMLDivElement | null>(null);
  const btn = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!parallaxRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top top",
          end: "5000px bottom",
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            setBackground(Math.ceil(self.progress * 100 + 20));
          },
        },
      });

      // Adding animations to the timeline
      tl.to(mountain3.current, { y: "-=80" }, 0);
      tl.to(mountain2.current, { y: "-=30" }, 0);
      tl.to(mountain1.current, { y: "+=50" }, 0);
      tl.to(stars.current, { top: 0 }, 0.5);
      tl.to(cloudsBottom.current, { opacity: 0, duration: 0.5 }, 0);
      tl.to(cloudsLeft.current, { x: "-20%", opacity: 0 }, 0);
      tl.to(cloudsRight.current, { x: "20%", opacity: 0 }, 0);
      tl.to(sun.current, { y: "+=210" }, 0);
      tl.to(copy.current, { y: "-250%", opacity: 1 }, 0);
      tl.to(btn.current, { opacity: 1 }, 1.1);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="parallax-outer">
      <div
        ref={parallaxRef}
        style={{
          background: `linear-gradient(#0F2B9C, #673D7D ${background}%, #A74A67, #EDFC54 )`,
        }}
        className="parallax"
      >
        <Image
          ref={mountain3}
          className="mountain-3"
          src="/parallax/mountain-3.svg"
          height={0}
          width={0}
          style={{
            height: 'auto',
            width: '100%'
          }}
          alt="Mountain"
        />
        <Image ref={mountain2} className="mountain-2" src="/parallax/mountain-2.svg"  height={0}
          width={0}
          style={{
            height: 'auto',
            width: '100%'
          }} alt="Mountain" />
        <Image ref={mountain1} className="mountain-1" src="/parallax/mountain-1.svg"  height={0}
          width={0}
          style={{
            height: 'auto',
            width: '100%'
          }} alt="Mountain" />
        <Image ref={sun} className="sun" src="/parallax/sun.svg"  height={0}
          width={0}
          style={{
            height: 'auto',
            width: '40%'
          }} alt="Sun" />
        <Image ref={cloudsBottom} className="clouds-bottom" src="/parallax/cloud-bottom.svg"  height={0}
          width={0}
          style={{
            height: 'auto',
            width: '100%'
          }} alt="Clouds Bottom" />
        <Image ref={cloudsLeft} className="clouds-left" src="/parallax/clouds-left.svg"  height={0}
          width={0}
          style={{
            height: 'auto',
            width: '20%'
          }} alt="Clouds Left" />
        <Image ref={cloudsRight} className="clouds-right" src="/parallax/clouds-right.svg"  height={0}
          width={0}
          style={{
            height: 'auto',
            width: '20%'
          }} alt="Clouds Right" />
        <Image ref={stars} className="stars" src="/parallax/stars.svg"  height={0}
          width={0}
          style={{
            height: 'auto',
            width: '100%'
          }} alt="Stars" />
        <div ref={copy} className="copy">
          <h1>{title}</h1>
          <span ref={btn}>Discover more</span>
        </div>
      </div>
    </div>
  );
}

export default Parallax;
