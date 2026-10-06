import { ContactCard } from "@/components/contact/contact-card";
import { Projects } from "@/components/projects/projects";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description: "Selected work and case studies.",
  path: "/projects",
});

export default function ProjectsPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col overflow-x-clip">
      <section className="mx-auto w-full max-w-275 px-4 pt-32 pb-10 sm:px-8 sm:pt-48 sm:pb-16 md:px-10 md:pt-56 md:pb-20">
        <FadeIn className="flex flex-col items-center gap-4 text-center sm:gap-5">
          <h1 className="font-serif text-[2.15rem] font-medium leading-[1.05] tracking-tight text-foreground sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.75rem]">
            My recent work
          </h1>
          <p className="max-w-[33ch] text-[16px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px] md:text-[22px]">
            Experiments, collaborations, and projects I&rsquo;m especially proud to have shipped.
          </p>
        </FadeIn>
      </section>
      <Projects />
      <ContactCard />
      <div className="h-10 sm:h-16" />
    </main>
  );
}
