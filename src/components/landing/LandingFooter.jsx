import { Link } from "react-router-dom";
import { FOOTER_LINKS } from "@/data/landing";
import { Container, Logo } from "./ui";

const linkClass = "text-[13px] text-white/60 transition-colors hover:text-white";

export default function LandingFooter() {
  return (
    <footer className="bg-black text-white">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" aria-label="Kiptell home">
              <Logo onBlack />
            </Link>
            <p className="mt-5 max-w-[320px] text-[13px] leading-5 text-white/50">
              Connecting community needs with funders and companies, with milestones, evidence and outcomes on record.
            </p>
          </div>

          <ul className="grid gap-3 content-start max-md:grid-cols-2">
            {FOOTER_LINKS.product.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={linkClass}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="grid gap-3 content-start max-md:grid-cols-2 md:justify-items-end">
            {FOOTER_LINKS.legal.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-14 text-[11px] text-white/40">
          © {new Date().getFullYear()} Kiptell. Payments are processed via a licensed payment partner.
        </p>
      </Container>
    </footer>
  );
}