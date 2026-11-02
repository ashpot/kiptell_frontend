import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Container, btn } from "./ui";

export default function CtaSection() {
  return (
    <section className="bg-white pb-16 dark:bg-black md:pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] bg-black px-6 py-14 text-white ring-1 ring-white/10 md:px-16 md:py-20">
          {/* soft yellow glow along the bottom edge */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_55%_at_50%_125%,rgba(255,200,61,0.35),transparent)]"
          />
          <div className="relative">
            <h2 className="max-w-[640px] text-[clamp(2.25rem,4.8vw,3.75rem)] font-medium leading-[1.04] tracking-tight">
              Better outcomes start with accountable action.
            </h2>
            <p className="mt-6 max-w-[460px] text-[14px] leading-6 text-white/65">
              Explore the Needs on Kiptell, or sign in to take part as a Need Owner, Funder or Company.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/explore" className={btn.onBlack}>
                Explore Needs <ArrowUpRight size={14} />
              </Link>
              <Link to="/signup" className={btn.ctaSecondary}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}