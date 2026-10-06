import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { PolaroidStrip } from "@/components/about/polaroid-strip";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { ContactCard } from "@/components/contact/contact-card";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: "About me, background, and how to get in touch.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col overflow-x-clip">
      <section className="mx-auto w-full max-w-312 px-1 pt-28 sm:px-0 sm:pt-44 md:pt-56">
        <PolaroidStrip />
      </section>

      <section className="mx-auto w-full max-w-160 px-4 pt-14 pb-12 sm:px-8 sm:pt-24 sm:pb-20 md:px-10 md:pt-28 md:pb-24">
        <FadeIn delay={0.5}>
          <div className="rounded-3xl border border-foreground/5 bg-foreground/1.5 p-5 sm:rounded-4xl sm:p-10 md:p-12 dark:bg-foreground/3">
            <h1 className="font-serif text-[1.5rem] font-medium tracking-tight text-foreground sm:text-[1.75rem] md:text-[2rem]">
              Heyy I&rsquo;m <span className="border-b border-foreground/30 pb-0.5">Jeevan</span>.
            </h1>
            <div className="mt-5 space-y-6 text-[16px] leading-[1.7] tracking-tight text-foreground/75 sm:mt-8 sm:text-[17px] md:text-[18px]">
              <p>
                I&rsquo;m a <strong className="font-semibold text-foreground">Full-Stack &amp; Mobile App Developer</strong> who enjoys turning ideas into functional, user-friendly digital products. I build modern web applications, mobile apps, and scalable solutions, combining clean development with thoughtful design to create experiences that are simple, fast, and impactful.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[40rem] px-4 pb-14 sm:px-8 sm:pb-24 md:px-10 md:pb-28">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-8 sm:gap-10">
            <Experience />
            <Education />
            <Skills />
            <Stack />
          </div>
        </FadeIn>
      </section>

      <ContactCard />
      <div className="h-10 sm:h-16" />
    </main>
  );
}
