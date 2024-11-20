import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";

const SmoothScrollLenis = () => {
  return (
    <div className="bg-zinc-950 text-5xl px-4 text-white font-medium text-center">
      <Hero />
      <div className="h-screen" />
    </div>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="w-full relative bg-black"
    >
      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-50/0 to-zinc-50" />
    </div>
  );
};
export default SmoothScrollLenis;

const CenterImage = () => {
  const { scrollY } = useScroll();
  const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
  const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );
  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        opacity,
        backgroundSize,
        clipPath,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImage
        src="https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="astronaut"
        start={-200}
        end={200}
        className="w-1/3 relative z-10"
      />
      <ParallaxImage
        src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="radio-signal"
        start={200}
        end={-250}
        className="mx-auto w-2/3 relative z-10"
      />
      <ParallaxImage
        src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="radio-signal"
        start={-200}
        end={200}
        className="ml-auto w-1/4 relative z-10"
      />
      <ParallaxImage
        src="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="radio-signal"
        start={0}
        end={-500}
        className="ml-24 w-5/12 relative z-10"
      />
    </div>
  );
};

const ParallaxImage = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  //   useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //     console.log(latest);
  //   });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);

  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      style={{
        opacity,
        transform,
      }}
      ref={ref}
      src={src}
      alt={alt}
      className={className}
    />
  );
};
