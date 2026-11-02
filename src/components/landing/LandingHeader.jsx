import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import { NAV_LINKS } from "@/data/landing";
import { Container, Logo, btn } from "./ui";

export default function LandingHeader({ isDark, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20">
      <Container className="flex h-[76px] items-center justify-between gap-4">
        <Link to="/" aria-label="Kiptell home">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-[13px] text-neutral-600 transition-colors hover:text-ink dark:text-white/70 dark:hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-600 transition-colors hover:bg-black/5 dark:text-white/70 dark:hover:bg-white/10"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link to="/login" className={`${btn.outline} !py-2`}>
            Log in
          </Link>
          <Link to="/signup" className={`${btn.solid} !py-2`}>
            Sign up
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {open && (
        <div className="absolute inset-x-0 top-full border-t border-black/5 bg-white px-5 pb-6 pt-3 shadow-lg dark:border-white/10 dark:bg-neutral-950 lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-black/5 py-3.5 text-[15px] dark:border-white/10">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex gap-3">
            <Link to="/login" className={`${btn.outline} flex-1`}>
              Log in
            </Link>
            <Link to="/signup" className={`${btn.solid} flex-1`}>
              Sign up
            </Link>
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="flex h-[46px] w-[46px] items-center justify-center rounded-full border border-black/15 dark:border-white/25"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}