import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
const links = [
  { href: "#o-mnie", label: "O mnie" },
  { href: "#uslugi", label: "Usługi" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#proces", label: "Proces" },
  { href: "#kontakt", label: "Kontakt" }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
        /* @__PURE__ */ jsxs(
          "nav",
          {
            className: `flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${scrolled ? "glass-strong shadow-[var(--shadow-elegant)]" : "glass"}`,
            children: [
              /* @__PURE__ */ jsxs("a", { href: "#top", className: "flex items-center gap-2 font-display font-semibold text-lg", children: [
                /* @__PURE__ */ jsx("span", { className: "inline-block size-2 rounded-full bg-accent shadow-[0_0_16px_var(--color-accent)]" }),
                "Michał",
                /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Moskal" })
              ] }),
              /* @__PURE__ */ jsx("ul", { className: "hidden md:flex items-center gap-7 text-sm text-muted-foreground", children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: l.href, className: "hover:text-foreground transition-colors", children: l.label }) }, l.href)) }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: "#kontakt",
                  className: "hidden md:inline-flex items-center rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition",
                  children: "Porozmawiajmy"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  "aria-label": "Menu",
                  className: "md:hidden text-foreground",
                  onClick: () => setOpen((v) => !v),
                  children: /* @__PURE__ */ jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: open ? /* @__PURE__ */ jsx("path", { d: "M18 6L6 18M6 6l12 12" }) : /* @__PURE__ */ jsx("path", { d: "M4 7h16M4 12h16M4 17h16" }) })
                }
              )
            ]
          }
        ),
        open && /* @__PURE__ */ jsx("div", { className: "md:hidden mt-2 glass-strong rounded-2xl p-4 animate-fade-up", children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-3 text-sm", children: [
          links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: l.href,
              onClick: () => setOpen(false),
              className: "block py-2 text-muted-foreground hover:text-foreground",
              children: l.label
            }
          ) }, l.href)),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "#kontakt",
              onClick: () => setOpen(false),
              className: "block rounded-full bg-foreground text-background text-center px-4 py-2 font-medium",
              children: "Porozmawiajmy"
            }
          ) })
        ] }) })
      ] })
    }
  );
}
function Hero() {
  return /* @__PURE__ */ jsxs("section", { id: "top", className: "relative overflow-hidden pt-40 pb-28 md:pt-52 md:pb-40", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 hero-bg pointer-events-none" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute top-1/4 left-1/2 -translate-x-1/2 size-[600px] rounded-full blur-3xl opacity-30 animate-glow",
        style: { background: "var(--gradient-accent)" }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute inset-0 opacity-[0.04] pointer-events-none",
        style: {
          backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)"
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-5xl px-4 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8 animate-fade-up", children: [
        /* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-emerald-400 animate-pulse" }),
        "Dostępny na nowe projekty"
      ] }),
      /* @__PURE__ */ jsxs(
        "h1",
        {
          className: "font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] animate-fade-up",
          style: { animationDelay: "100ms" },
          children: [
            "Tworzę strony,",
            /* @__PURE__ */ jsx("br", {}),
            "które ",
            /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "sprzedają" }),
            " i zachwycają."
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "p",
        {
          className: "mt-8 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground animate-fade-up",
          style: { animationDelay: "200ms" },
          children: "Cześć, jestem Michał — web designer i developer. Projektuję i buduję nowoczesne, szybkie strony internetowe dopasowane do Twojego biznesu i marki osobistej."
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up",
          style: { animationDelay: "300ms" },
          children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "#kontakt",
                className: "inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition shadow-[var(--shadow-glow)]",
                children: [
                  "Skontaktuj się",
                  /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx("path", { d: "M5 12h14M13 6l6 6-6 6" }) })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#portfolio",
                className: "inline-flex items-center rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/5 transition",
                children: "Zobacz portfolio"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "mt-20 grid grid-cols-3 gap-4 max-w-2xl mx-auto animate-fade-up",
          style: { animationDelay: "400ms" },
          children: [
            { k: "100%", v: "Responsywność" },
            { k: "<2s", v: "Czas ładowania" },
            { k: "1:1", v: "Indywidualny projekt" }
          ].map((s) => /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-4 text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl md:text-3xl font-display font-semibold text-gradient", children: s.k }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground mt-1", children: s.v })
          ] }, s.v))
        }
      )
    ] })
  ] });
}
const michalPhoto = "/assets/michal-ZQqCGxw9.jpeg";
function About() {
  return /* @__PURE__ */ jsx("section", { id: "o-mnie", className: "relative py-28 md:py-40", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-5 gap-12 items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/5] rounded-3xl glass-strong overflow-hidden group", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: michalPhoto,
          alt: "Michał Moskal — web designer i web developer",
          loading: "lazy",
          className: "absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          "aria-hidden": true,
          className: "absolute inset-0 pointer-events-none",
          style: {
            background: "linear-gradient(180deg, transparent 40%, oklch(0.14 0.02 260 / 0.55) 100%)"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          "aria-hidden": true,
          className: "absolute inset-0 pointer-events-none mix-blend-overlay opacity-40",
          style: {
            background: "radial-gradient(ellipse at 30% 20%, oklch(0.5 0.18 250 / 0.35), transparent 60%)"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          "aria-hidden": true,
          className: "absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/5 rounded-3xl"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "md:col-span-3", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "O mnie" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-3 font-display text-4xl md:text-5xl font-semibold leading-tight", children: [
        "Designer i developer",
        /* @__PURE__ */ jsx("br", {}),
        "w ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "jednej osobie" }),
        "."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-4 text-muted-foreground leading-relaxed", children: [
        /* @__PURE__ */ jsx("p", { children: "Od niedawna zajmuję się projektowaniem i tworzeniem stron internetowych, ale podchodzę do tego w pełni profesjonalnie. Aktywnie rozwijam swoje umiejętności i zdobywam doświadczenie poprzez realne projekty oraz codzienną pracę nad własnym warsztatem." }),
        /* @__PURE__ */ jsx("p", { children: "Łączę zmysł estetyczny z wiedzą techniczną — projektuję interfejsy, a potem samodzielnie wprowadzam je w życie w kodzie. Stawiam na nowoczesne technologie, czysty kod i dopracowane detale, które realnie wpływają na efekt końcowy." }),
        /* @__PURE__ */ jsx("p", { children: "Ciągle się uczę, śledzę trendy i testuję nowe rozwiązania. Dzięki temu mogę zaproponować świeże spojrzenie i w pełni zaangażowane podejście do każdego projektu, z którym mam okazję pracować." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 flex flex-wrap gap-2", children: ["React", "TypeScript", "Tailwind", "UI / UX", "Figma", "Webflow", "SEO", "Performance"].map((t) => /* @__PURE__ */ jsx("span", { className: "glass text-sm rounded-full px-3 py-1 text-muted-foreground", children: t }, t)) })
    ] })
  ] }) }) });
}
const services = [
  {
    title: "Landing Page",
    desc: "Skoncentrowana strona sprzedażowa, która zamienia odwiedzających w klientów.",
    benefit: "Większa konwersja i jasny przekaz oferty."
  },
  {
    title: "Strona firmowa",
    desc: "Profesjonalna obecność Twojej firmy w sieci — czytelna, szybka i wiarygodna.",
    benefit: "Budujesz zaufanie i wyglądasz poważnie."
  },
  {
    title: "Strona wizytówka",
    desc: "Elegancka prezentacja Ciebie lub Twojej działalności — bez zbędnego rozpraszania.",
    benefit: "Idealna dla freelancerów i marek osobistych."
  },
  {
    title: "Portfolio online",
    desc: "Pięknie zaprezentowane realizacje, które robią wrażenie od pierwszej sekundy.",
    benefit: "Pokazujesz, co potrafisz — bez słów."
  },
  {
    title: "Modernizacja stron",
    desc: "Odświeżam stare strony — design, szybkość, responsywność i SEO.",
    benefit: "Nowa jakość bez budowania wszystkiego od zera."
  },
  {
    title: "Opieka techniczna",
    desc: "Aktualizacje, kopie zapasowe, bezpieczeństwo i drobne zmiany — w jednym miejscu.",
    benefit: "Masz pewność, że strona zawsze działa."
  }
];
function Services() {
  return /* @__PURE__ */ jsx("section", { id: "uslugi", className: "relative py-28 md:py-40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Usługi" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-4xl md:text-5xl font-semibold leading-tight", children: "Co mogę dla Ciebie zrobić." }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Każdy projekt zaczynam od zrozumienia Twoich celów. Potem proponuję rozwiązanie, które realnie pomaga Twojemu biznesowi." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5", children: services.map((s, i) => /* @__PURE__ */ jsxs(
      "article",
      {
        className: "group relative glass rounded-3xl p-6 transition-all duration-500 hover:bg-white/[0.06] hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]",
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              "aria-hidden": true,
              className: "absolute -top-px left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity",
              style: { background: "var(--gradient-accent)" }
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "font-display text-sm text-muted-foreground", children: [
            "0",
            i + 1
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "mt-3 font-display text-xl font-semibold", children: s.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: s.desc }),
          /* @__PURE__ */ jsxs("div", { className: "mt-5 pt-5 border-t border-white/5 text-sm text-foreground/80", children: [
            /* @__PURE__ */ jsx("span", { className: "text-gradient font-medium", children: "→" }),
            " ",
            s.benefit
          ] })
        ]
      },
      s.title
    )) })
  ] }) });
}
function Portfolio() {
  return /* @__PURE__ */ jsx("section", { id: "portfolio", className: "relative py-28 md:py-40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between flex-wrap gap-6 mb-14", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Portfolio" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-4xl md:text-5xl font-semibold leading-tight", children: "Wybrane realizacje." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground max-w-xs", children: "Portfolio jest aktualnie rozbudowywane — wkrótce pojawią się tutaj pierwsze realizacje." })
    ] }),
    /* @__PURE__ */ jsx("article", { className: "group relative glass-strong rounded-3xl overflow-hidden", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: "relative aspect-[16/8] flex items-center justify-center text-center px-6",
        style: {
          background: "radial-gradient(ellipse at 30% 30%, oklch(0.5 0.22 250 / 0.5), transparent 60%), radial-gradient(ellipse at 70% 70%, oklch(0.55 0.2 220 / 0.4), transparent 60%), oklch(0.18 0.02 260)"
        },
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              "aria-hidden": true,
              className: "absolute inset-0 opacity-[0.06]",
              style: {
                backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "relative max-w-xl", children: [
            /* @__PURE__ */ jsx("span", { className: "inline-block glass text-xs rounded-full px-3 py-1 text-muted-foreground mb-5", children: "Wkrótce" }),
            /* @__PURE__ */ jsxs("h3", { className: "font-display text-3xl md:text-5xl font-semibold leading-tight", children: [
              "Portfolio ",
              /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "w budowie" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Pracuję obecnie nad pierwszymi realizacjami, które niedługo znajdą się w tej sekcji. Jeśli chcesz, aby Twój projekt pojawił się tutaj jako jeden z pierwszych — napisz do mnie." })
          ] })
        ]
      }
    ) })
  ] }) });
}
const steps = [
  { n: "01", t: "Kontakt", d: "Piszesz do mnie krótko, czego potrzebujesz. Odpowiadam zwykle tego samego dnia." },
  { n: "02", t: "Analiza potrzeb", d: "Rozmawiamy o Twoim biznesie, celach i oczekiwaniach. Dobieram najlepsze rozwiązanie." },
  { n: "03", t: "Projekt i realizacja", d: "Przygotowuję projekt graficzny, akceptujesz kierunek — i przechodzę do kodowania." },
  { n: "04", t: "Poprawki", d: "Razem dopracowujemy każdy szczegół. Bez limitu drobnych zmian." },
  { n: "05", t: "Publikacja", d: "Wdrażam stronę na Twoją domenę, konfiguruję SEO i przekazuję dostęp." }
];
function Process() {
  return /* @__PURE__ */ jsx("section", { id: "proces", className: "relative py-28 md:py-40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Współpraca" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-4xl md:text-5xl font-semibold leading-tight", children: "Jak to wygląda krok po kroku." }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Prosty, przejrzysty proces. Bez tajemnic, bez zbędnych formalności." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 relative", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          "aria-hidden": true,
          className: "hidden md:block absolute left-0 right-0 top-12 h-px",
          style: { background: "linear-gradient(to right, transparent, var(--color-glass-border), transparent)" }
        }
      ),
      /* @__PURE__ */ jsx("ol", { className: "grid md:grid-cols-5 gap-6", children: steps.map((s) => /* @__PURE__ */ jsx("li", { className: "relative", children: /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-6 h-full transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06]", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "size-12 rounded-full flex items-center justify-center font-display text-sm font-semibold mb-5 relative z-10",
            style: { background: "var(--gradient-accent)", color: "var(--background)" },
            children: s.n
          }
        ),
        /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold", children: s.t }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: s.d })
      ] }) }, s.n)) })
    ] })
  ] }) });
}
const items = [
  { t: "Nowoczesny design", d: "Strony, które wyglądają tak, jakbyś zatrudnił topowe studio.", icon: "✦" },
  { t: "Szybkie działanie", d: "Zoptymalizowany kod i obrazy — Twoja strona ładuje się błyskawicznie.", icon: "⚡" },
  { t: "Pełna responsywność", d: "Telefon, tablet, laptop — wszędzie wygląda i działa idealnie.", icon: "▣" },
  { t: "Indywidualne podejście", d: "Żadnych szablonów. Każdy projekt budowany pod Ciebie od zera.", icon: "◈" },
  { t: "Sprawna komunikacja", d: "Odpowiadam szybko, mówię konkretnie, bez technicznego żargonu.", icon: "✉" },
  { t: "Wsparcie po wdrożeniu", d: "Nie znikam po publikacji. Pomagam, gdy potrzebujesz zmian.", icon: "✓" }
];
function Why() {
  return /* @__PURE__ */ jsx("section", { className: "relative py-28 md:py-40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Dlaczego ja" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-4xl md:text-5xl font-semibold leading-tight", children: "Dlaczego warto ze mną pracować." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-3xl overflow-hidden glass", children: items.map((it) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "bg-background/40 p-8 transition-colors hover:bg-white/[0.04]",
        children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl text-gradient mb-4", children: it.icon }),
          /* @__PURE__ */ jsx("h3", { className: "font-display text-lg font-semibold", children: it.t }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: it.d })
        ]
      },
      it.t
    )) })
  ] }) });
}
function Contact() {
  const [sent, setSent] = useState(false);
  return /* @__PURE__ */ jsx("section", { id: "kontakt", className: "relative py-28 md:py-40", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-5xl px-4", children: /* @__PURE__ */ jsxs("div", { className: "relative glass-strong rounded-3xl p-8 md:p-14 overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": true,
        className: "absolute -top-32 -right-32 size-96 rounded-full blur-3xl opacity-40",
        style: { background: "var(--gradient-accent)" }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative grid md:grid-cols-5 gap-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Kontakt" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-3 font-display text-3xl md:text-4xl font-semibold leading-tight", children: [
          "Porozmawiajmy",
          /* @__PURE__ */ jsx("br", {}),
          "o Twoim projekcie."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "Napisz krótko, czego potrzebujesz — odpowiem zwykle w ciągu 24 godzin." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxs("a", { href: "mailto:kontakt@michalmoskal.pl", className: "flex items-center gap-3 text-foreground hover:text-gradient", children: [
            /* @__PURE__ */ jsx("span", { className: "size-9 glass rounded-full flex items-center justify-center", children: "✉" }),
            "kontakt@michalmoskal.pl"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "size-9 glass rounded-full flex items-center justify-center", children: "⌖" }),
            "Polska — pracuję zdalnie"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 flex gap-2", children: [
          { l: "IG", h: "#" },
          { l: "in", h: "#" },
          { l: "BE", h: "#" },
          { l: "GH", h: "#" }
        ].map((s) => /* @__PURE__ */ jsx(
          "a",
          {
            href: s.h,
            "aria-label": s.l,
            className: "size-10 glass rounded-full flex items-center justify-center text-xs hover:bg-white/10 transition",
            children: s.l
          },
          s.l
        )) })
      ] }),
      /* @__PURE__ */ jsxs(
        "form",
        {
          className: "md:col-span-3 space-y-4",
          onSubmit: (e) => {
            e.preventDefault();
            setSent(true);
          },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsx(Field, { label: "Imię", name: "name", placeholder: "Jan Kowalski" }),
              /* @__PURE__ */ jsx(Field, { label: "E-mail", name: "email", type: "email", placeholder: "jan@example.com" })
            ] }),
            /* @__PURE__ */ jsx(Field, { label: "Temat", name: "subject", placeholder: "Strona firmowa, landing page…" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "block text-xs uppercase tracking-wider text-muted-foreground mb-2", children: "Wiadomość" }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  required: true,
                  rows: 5,
                  placeholder: "Napisz krótko o swoim projekcie…",
                  className: "w-full rounded-2xl glass px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40 resize-none"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:opacity-90 transition shadow-[var(--shadow-glow)]",
                children: sent ? "Dziękuję — odezwę się wkrótce ✓" : "Wyślij wiadomość"
              }
            )
          ]
        }
      )
    ] })
  ] }) }) });
}
function Field({
  label,
  name,
  type = "text",
  placeholder
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { htmlFor: name, className: "block text-xs uppercase tracking-wider text-muted-foreground mb-2", children: label }),
    /* @__PURE__ */ jsx(
      "input",
      {
        id: name,
        name,
        type,
        required: true,
        placeholder,
        className: "w-full rounded-full glass px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40"
      }
    )
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "relative border-t border-white/5 py-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-block size-1.5 rounded-full bg-accent" }),
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Michał Moskal. Wszystkie prawa zastrzeżone."
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
      /* @__PURE__ */ jsx("a", { href: "#o-mnie", className: "hover:text-foreground transition", children: "O mnie" }),
      /* @__PURE__ */ jsx("a", { href: "#uslugi", className: "hover:text-foreground transition", children: "Usługi" }),
      /* @__PURE__ */ jsx("a", { href: "#kontakt", className: "hover:text-foreground transition", children: "Kontakt" })
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen bg-background text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Services, {}),
      /* @__PURE__ */ jsx(Portfolio, {}),
      /* @__PURE__ */ jsx(Process, {}),
      /* @__PURE__ */ jsx(Why, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Index as component
};
