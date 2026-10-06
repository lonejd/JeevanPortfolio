import type { ReactNode } from "react";

import { HeroCtas } from "./hero-ctas";
import { FadeIn, ScaleUnblur } from "@/components/ui/motion-primitives";
import { PortraitMorph } from "./portrait-morph";

const PORTRAIT_SRC = "/jeevan.jpg";
const PORTRAIT_HOVER_SRC = "/jeevan-hover.jpg";

export function Hero(): ReactNode {
  return (
    <section className="relative w-full overflow-x-clip">
      <div className="mx-auto w-full max-w-275 px-4 pt-32 pb-16 sm:px-8 sm:pt-48 sm:pb-28 md:px-10 md:pt-56 md:pb-32">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-10 lg:gap-12">
          <FadeIn className="flex flex-col gap-3 sm:gap-4">
            <p className="text-[17px] font-medium leading-tight tracking-tight text-foreground sm:text-[20px]">
              Hey
              <span aria-hidden="true" className="mx-0.5">
                👋
              </span>
              , I&rsquo;m Jeevan
            </p>

            <h1 className="text-[2.15rem] font-medium leading-[1.08] tracking-tight text-foreground sm:text-[2.75rem] md:text-[2.5rem] lg:text-[3.65rem]">
              <span className="block sm:whitespace-nowrap">Fullstack &amp;</span>
              <span className="block sm:whitespace-nowrap">
                Mobile app Developer
              </span>
            </h1>

            <p className="max-w-[34ch] text-[17px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px] md:text-[22px]">
              Full-Stack &amp; Mobile App Developer focused on creating seamless
              digital experiences across web and mobile.
            </p>

            <HeroCtas />
          </FadeIn>

          <ScaleUnblur className="mx-auto flex w-full max-w-md justify-stretch md:mx-0 md:max-w-none md:justify-end">
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-foreground/8 bg-background p-1.5 shadow-sm sm:rounded-4xl md:max-w-105">
              <div className="relative h-full w-full overflow-hidden rounded-[1.35rem] sm:rounded-[1.6rem]">
                <PortraitMorph
                  srcA={PORTRAIT_SRC}
                  srcB={PORTRAIT_HOVER_SRC}
                  alt="Jeevan portrait"
                />
              </div>
            </div>
          </ScaleUnblur>
        </div>
      </div>
    </section>
  );
}
