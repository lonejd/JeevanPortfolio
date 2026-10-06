import { Instagram, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { ContactCardCtas } from "./contact-card-ctas";
import { FadeIn } from "@/components/ui/motion-primitives";
import { ShaderFlow } from "../shaders/shader-flow";

const CARD_FADE_MASK =
  "radial-gradient(ellipse 90% 110% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.4) 90%, rgba(0,0,0,0.15) 100%)";

export function ContactCard(): ReactNode {
  return (
    <section className="mx-auto my-10 w-full max-w-275 px-4 sm:my-16 sm:px-8 md:my-20 md:px-10">
      <FadeIn>
        <div className="relative w-full overflow-hidden rounded-3xl border border-foreground/8 bg-background p-1 shadow-sm sm:rounded-4xl sm:p-1.5">
          <div className="relative w-full overflow-hidden rounded-[1.35rem] sm:rounded-[1.6rem]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-45 dark:opacity-25"
              style={{
                WebkitMaskImage: CARD_FADE_MASK,
                maskImage: CARD_FADE_MASK,
              }}
            >
              <ShaderFlow scale={3} brightness={3}/>
            </div>

            <div className="relative grid gap-6 p-5 sm:gap-8 sm:p-7 md:grid-cols-[1.2fr_1fr] md:items-stretch md:gap-6 md:p-6">
              <div className="flex flex-col gap-4 sm:gap-5">
                <h2 className="font-serif text-[2rem] font-medium leading-[1.05] tracking-tight text-foreground sm:text-[2.5rem] md:text-[2.75rem] lg:text-[3.25rem]">
                  Let&rsquo;s connect
                </h2>
                <p className="mb-2 max-w-[29ch] text-[16px] leading-[1.45] tracking-tight text-foreground/65 sm:mb-6 sm:text-[18px] md:text-[22px]">
                  I&rsquo;m always open to discussing new projects, creative
                  ideas, or opportunities to be part of your visions. Just reach out!
                </p>
                <ContactCardCtas />
              </div>

              <div className="border-foreground/8 flex flex-col items-center justify-center gap-5 rounded-[1.1rem] border bg-background p-5 sm:gap-6 sm:p-8">
                <div className="flex items-center gap-3 opacity-75">
                  <SocialIcon
                    href="mailto:heyitslonejd@gmail.com"
                    label="Email"
                    lucideIcon={Mail}
                  />
                  <SocialIcon
                    href="https://wa.me/919342395946"
                    label="WhatsApp"
                    imageSrc="/whatsapp.svg"
                  />
                  <SocialIcon
                    href="https://www.instagram.com/lone.jd_/"
                    label="Instagram"
                    lucideIcon={Instagram}
                  />
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <p className="text-[12px] tracking-tight text-foreground/70 sm:text-[13px]">
                    2026 &copy; Built with Next.js
                  </p>
                  <p className="text-[11px] tracking-tight text-foreground/45 sm:text-[12px]">
                    By React Bits Pro
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  lucideIcon: LucideIcon,
  imageSrc,
}: {
  href: string;
  label: string;
  lucideIcon?: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  imageSrc?: string;
}): ReactNode {
  const isExternal = href.startsWith("http");
  const props = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <Link
      href={href}
      aria-label={label}
      className="border-foreground/8 hover:border-foreground/15 focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl border bg-background text-foreground/70 transition-colors hover:text-foreground"
      {...props}
    >
      {LucideIcon ? (
        <LucideIcon className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
      ) : imageSrc ? (
        <Image
          src={imageSrc}
          alt=""
          width={14}
          height={14}
          aria-hidden="true"
          className="max-h-[14px] max-w-[14px] object-contain dark:invert"
        />
      ) : null}
    </Link>
  );
}
