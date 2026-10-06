import { ArrowRight, BookOpen, Building2, Leaf, ScanEye } from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  href: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
};

const PROJECTS: Project[] = [
  {
    id: "kadhaster",
    icon: BookOpen,
    iconLabel: "KADHASTER",
    title: "AI-based personalized books",
    description:
      "Enhanced the existing website into an animation marvel, with unique user interactions showcasing 3D books.",
    meta: "Frontend Developer & Admin, 2025",
    href: "https://www.kadhaster.com",
    imageRatio: 1024 / 441,
    image: "/projects/kadhaster.jpg",
    imageAlt: "KADHASTER AI personalized books landing page",
  },
  {
    id: "nokki-ai",
    icon: ScanEye,
    iconLabel: "NOKKI AI",
    title: "AI-integrated CCTV cameras",
    description:
      "An AI-powered video intelligence platform that upgrades your existing camera setup with real-time monitoring, smart alerts, and analytics.",
    meta: "Frontend & Mobile Developer, 2025",
    href: "https://nokkiai.com/",
    imageRatio: 1024 / 469,
    image: "/projects/nokki-ai.jpg",
    imageAlt: "Nokki AI video intelligence platform landing page",
  },
  {
    id: "sr-groups",
    icon: Building2,
    iconLabel: "SR Groups",
    title: "Built website for a construction company",
    description:
      "SR Groups transforms ideas into durable, sustainable, and innovative engineering solutions trusted by businesses, governments, and communities.",
    meta: "Frontend Developer, 2025",
    href: "https://srgroupsindia.co.in/",
    imageRatio: 1024 / 439,
    image: "/projects/sr-groups.jpg",
    imageAlt: "SR Groups construction company website landing page",
  },
  {
    id: "gvajra",
    icon: Leaf,
    iconLabel: "gVajra",
    title: "Built mobile app for bio-waste",
    description:
      "Built a mobile app for bio-waste monitoring, fertilizer management, and EV charging.",
    meta: "Mobile App Developer, 2026",
    href: "https://srgroupsindia.co.in/",
    imageRatio: 1024 / 1023,
    image: "/projects/gvajra.jpg",
    imageAlt: "gVajra bio-waste mobile app logo",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-4 sm:px-8 md:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-4 px-1 pt-8 pb-8 text-center sm:gap-5 sm:pt-16 sm:pb-12 md:pt-20 md:pb-14">
            <h2 className="font-serif text-[2.15rem] font-medium leading-[1.05] tracking-tight text-foreground sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem]">
              My projects
            </h2>
            <p className="max-w-[33ch] text-[16px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[18px] md:text-[20px]">
              From playful experiments to thoughtful systems, a look at the
              work I&rsquo;m proud to have shipped.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-5 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {viewMoreVisible && PROJECTS.length > 4 ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;
  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-5 break-inside-avoid md:mb-7"
    >
      <article>
        <Link
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card flex cursor-pointer flex-col gap-3 rounded-2xl border border-foreground/8 bg-background p-2.5 sm:gap-4 sm:rounded-3xl sm:p-3.5"
        >
          <header className="flex items-center gap-2.5 px-1 pt-2">
            <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
              <Icon className="h-3.5 w-3.5 text-foreground" aria-hidden="true" />
            </span>
            <span className="text-sm font-medium tracking-tight text-foreground">
              {project.iconLabel}
            </span>
          </header>

          <div
            className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
            style={{ aspectRatio: project.imageRatio }}
          >
            <div className="project-card__image-inner">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
                className="object-cover"
                priority={index < 2}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2.5 px-1 pb-1">
            <h3 className="text-[18px] font-medium leading-[1.25] tracking-tight text-foreground sm:text-[20px] md:text-[22px]">
              {project.title}
            </h3>
            <p className="text-[13px] leading-normal tracking-tight text-foreground/65 sm:text-[14px] md:text-[15px]">
              {project.description}
            </p>
          </div>

          <p className="px-1 pb-2 text-[12px] tracking-tight text-foreground/50">
            {project.meta}
          </p>
        </Link>
      </article>
    </FadeIn>
  );
}
