import { SOCIALS } from "@/data/site";
import { cn } from "@/lib/utils";

const MONOGRAM: Record<string, string> = {
  Facebook: "f",
  Instagram: "ig",
  X: "X",
  Pinterest: "P",
  Threads: "@",
  TikTok: "tt",
};

export function SocialLinks({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-2", className)}>
      {SOCIALS.map((s) => (
        <li key={s.name}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener"
            referrerPolicy="strict-origin-when-cross-origin"
            aria-label={`Ismailify on ${s.name}`}
            title={s.name}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold lowercase transition-colors",
              variant === "light"
                ? "border-border bg-card text-foreground hover:border-primary hover:bg-accent hover:text-accent-foreground"
                : "border-white/15 bg-white/5 text-white hover:border-primary hover:bg-primary",
            )}
          >
            {MONOGRAM[s.name]}
          </a>
        </li>
      ))}
    </ul>
  );
}
