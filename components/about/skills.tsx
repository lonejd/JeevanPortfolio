import type { ReactNode } from "react";

const SKILLS = [
  "Website Animation",
  "Mobile App UI Motion",
  "3D Product Animation",
  "Interactive Experiences",
  "Scroll & Micro Interactions",
  "WebGL & 3D Web",
  "Motion Design",
  "Frontend Development",
  "Creative Interfaces",
];

export function Skills(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[15px] font-semibold tracking-tight text-foreground">
        What I do
      </h3>
      <div className="rounded-3xl border border-foreground/5 bg-foreground/2 p-2 sm:rounded-4xl sm:p-4 dark:bg-foreground/5">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-foreground/8 bg-background px-3 py-1.5 text-[13px] tracking-tight text-foreground/85 sm:px-4 sm:py-2 sm:text-[15px]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
