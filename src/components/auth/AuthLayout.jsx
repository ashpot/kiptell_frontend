import { Link } from "react-router-dom";
import { ChevronDown, Globe } from "lucide-react";
import { Logo } from "@/components/landing/ui";
import { AUTH_FOOTER_LINKS, ROLE_BENEFITS } from "@/data/auth";
import { cn } from "@/lib/cn";

/** Faint perspective grid behind the page */
export function AuthBackground({ vanishX = 560 }) {
  const rows = [18, 46, 80, 120, 168, 224, 290];
  const cols = Array.from({ length: 12 }, (_, i) => -500 + i * 220);
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMin slice"
      className="pointer-events-none absolute inset-0 h-full w-full text-neutral-300/70 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
    >
      {rows.map((y) => (
        <line key={y} x1="0" x2="1440" y1={y} y2={y} stroke="currentColor" strokeWidth="1" />
      ))}
      {cols.map((x) => (
        <line key={x} x1={vanishX} y1="-140" x2={x} y2="900" stroke="currentColor" strokeWidth="1" />
      ))}
    </svg>
  );
}

function Benefits({ className }) {
  return (
    <ul className={cn("space-y-9", className)}>
      {ROLE_BENEFITS.map((b) => (
        <li key={b.title} className="border-l-2 border-brand pl-5">
          <h2 className="text-xl font-medium leading-tight">{b.title}</h2>
          <p className="mt-1.5 text-[15px] text-neutral-600">{b.text}</p>
        </li>
      ))}
    </ul>
  );
}

export function AuthFooter({ className }) {
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[15px] text-neutral-500 lg:justify-between", className)}>
      <nav aria-label="Legal" className="flex items-center gap-3">
        {AUTH_FOOTER_LINKS.map((l, i) => (
          <span key={l.to} className="flex items-center gap-3">
            {i > 0 && <span aria-hidden className="h-1 w-1 rounded-full bg-neutral-400" />}
            <Link to={l.to} className="transition-colors hover:text-ink">
              {l.label}
            </Link>
          </span>
        ))}
      </nav>
      {/* TODO: more languages once the app is translated */}
      <label className="relative flex items-center gap-2">
        <Globe size={20} strokeWidth={1.5} className="text-ink" />
        <select aria-label="Language" defaultValue="en" className="appearance-none bg-transparent pr-6 text-neutral-500 focus:outline-none">
          <option value="en">English</option>
        </select>
        <ChevronDown size={16} className="pointer-events-none absolute right-0 text-ink" />
      </label>
    </div>
  );
}

/** White rounded card the form sits in, with a faint dot pattern along the bottom */
export function AuthCard({ children }) {
  return (
    <div className="relative w-full max-w-[724px] overflow-hidden rounded-[36px] border border-white bg-white px-6 py-8 shadow-[0_1px_0_rgba(0,0,0,0.04)] sm:px-12 sm:py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%] bg-[radial-gradient(circle,#D4D4D4_1px,transparent_1px)] [background-size:12px_12px] [mask-image:linear-gradient(to_top,black,transparent)]"
      />
      <div className="relative">{children}</div>
    </div>
  );
}

/** Shared frame for Sign up and Log in: brand message on the left, form card on the right. */
export default function AuthLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-100 text-ink">
      <AuthBackground />

      <div className="relative mx-auto grid min-h-screen max-w-[1440px] gap-10 px-5 py-8 lg:grid-cols-2 lg:gap-0 lg:px-0 lg:py-6">
        <section className="flex flex-col lg:py-14 lg:pl-24 lg:pr-12">
          <Link to="/" aria-label="Kiptell home" className="self-start">
            <Logo />
          </Link>
          <h1 className="mt-10 max-w-[560px] text-[clamp(2.25rem,4vw,3.5rem)] font-medium leading-[1.1] tracking-tight lg:mt-28">
            Connect needs with impact.
          </h1>
          <p className="mt-6 max-w-[470px] text-[15px] leading-6 text-neutral-600">
            Connect needs with the people and organizations that can make an impact.
          </p>
          <Benefits className="mt-20 hidden lg:block" />
          <AuthFooter className="mt-auto hidden pt-12 lg:flex" />
        </section>

        <section className="flex items-start lg:items-center lg:pr-6">{children}</section>

        {/* Phones: the role list and footer sit under the card */}
        <div className="space-y-12 lg:hidden">
          <Benefits />
          <AuthFooter />
        </div>
      </div>
    </div>
  );
}