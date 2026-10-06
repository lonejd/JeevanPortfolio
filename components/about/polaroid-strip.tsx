"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useSyncExternalStore, type ReactNode } from "react";

type Polaroid = {
  id: string;
  src: string;
  alt: string;
  rotate: number;
};

const PHOTOS: Polaroid[] = [
  {
    id: "a",
    src: "/about/1.jpg",
    alt: "Jeevan outdoors wearing sunglasses and a cap",
    rotate: -8,
  },
  {
    id: "b",
    src: "/about/2.jpg",
    alt: "Jeevan smiling at the beach in black and white",
    rotate: 6,
  },
  {
    id: "c",
    src: "/about/3.jpg",
    alt: "Jeevan sitting indoors against decorative plates",
    rotate: -4,
  },
  {
    id: "d",
    src: "/about/4.jpg",
    alt: "Jeevan on a motorcycle in black and white",
    rotate: 7,
  },
  {
    id: "e",
    src: "/about/5.jpg",
    alt: "Jeevan portrait outdoors in a pink shirt",
    rotate: -6,
  },
  {
    id: "f",
    src: "/about/6.jpg",
    alt: "Jeevan by the ocean adjusting his glasses",
    rotate: 5,
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

function PolaroidCard({
  photo,
  index,
}: {
  photo: Polaroid;
  index: number;
}): ReactNode {
  const ref = useRef<HTMLDivElement | null>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 220, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 220, damping: 18, mass: 0.6 });
  const tx = useTransform(sx, (v) => v);
  const ty = useTransform(sy, (v) => v);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>): void => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const max = 18;
    const k = 0.25;
    mx.set(Math.max(-max, Math.min(max, dx * k)));
    my.set(Math.max(-max, Math.min(max, dy * k)));
  };

  const handleLeave = (): void => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -120, filter: "blur(18px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.9,
        delay: 0.05 + index * 0.08,
        ease: EASE,
      }}
      className="shrink-0"
    >
      <motion.div
        ref={ref}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        style={{
          x: tx,
          y: ty,
          rotate: photo.rotate,
        }}
        className="relative aspect-[3/4] w-[clamp(5rem,28vw,9rem)] overflow-hidden rounded-2xl border-4 border-neutral-300/40 bg-white p-1 sm:w-[clamp(6rem,11vw,9rem)] sm:border-6 sm:p-1.5 dark:border-white/15 dark:bg-neutral-900"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo.src}
          alt={photo.alt}
          draggable={false}
          className="h-full w-full rounded-xl object-cover object-center select-none"
        />
      </motion.div>
    </motion.div>
  );
}

export function PolaroidStrip(): ReactNode {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return <div aria-hidden="true" className="h-[clamp(8rem,15vw,12rem)] w-full" />;
  }

  return (
    <div className="flex w-full flex-wrap items-start justify-center gap-1.5 px-3 sm:gap-1.5 sm:px-8">
      {PHOTOS.map((photo, i) => (
        <PolaroidCard key={photo.id} photo={photo} index={i} />
      ))}
    </div>
  );
}
