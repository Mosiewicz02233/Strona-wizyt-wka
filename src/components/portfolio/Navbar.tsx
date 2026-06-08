import { useEffect, useState } from "react";

const links = [
  { href: "#o-mnie", label: "O mnie" },
  { href: "#uslugi", label: "Usługi" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#proces", label: "Proces" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-[var(--shadow-elegant)]" : "glass"
          }`}
        >
          <a href="#top" className="flex items-center gap-2 font-display font-semibold text-lg">
            <span className="inline-block size-2 rounded-full bg-accent shadow-[0_0_16px_var(--color-accent)]" />
            Michał<span className="text-muted-foreground">Moskal</span>
          </a>

          <ul className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-foreground transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#kontakt"
            className="hidden md:inline-flex items-center rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition"
          >
            Porozmawiajmy
          </a>

          <button
            aria-label="Menu"
            className="md:hidden text-foreground"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-4 animate-fade-up">
            <ul className="flex flex-col gap-3 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-muted-foreground hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#kontakt"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-foreground text-background text-center px-4 py-2 font-medium"
                >
                  Porozmawiajmy
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
