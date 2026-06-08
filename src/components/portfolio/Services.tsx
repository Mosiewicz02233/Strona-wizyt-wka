const services = [
  {
    title: "Landing Page",
    desc: "Skoncentrowana strona sprzedażowa, która zamienia odwiedzających w klientów.",
    benefit: "Większa konwersja i jasny przekaz oferty.",
  },
  {
    title: "Strona firmowa",
    desc: "Profesjonalna obecność Twojej firmy w sieci — czytelna, szybka i wiarygodna.",
    benefit: "Budujesz zaufanie i wyglądasz poważnie.",
  },
  {
    title: "Strona wizytówka",
    desc: "Elegancka prezentacja Ciebie lub Twojej działalności — bez zbędnego rozpraszania.",
    benefit: "Idealna dla freelancerów i marek osobistych.",
  },
  {
    title: "Portfolio online",
    desc: "Pięknie zaprezentowane realizacje, które robią wrażenie od pierwszej sekundy.",
    benefit: "Pokazujesz, co potrafisz — bez słów.",
  },
  {
    title: "Modernizacja stron",
    desc: "Odświeżam stare strony — design, szybkość, responsywność i SEO.",
    benefit: "Nowa jakość bez budowania wszystkiego od zera.",
  },
  {
    title: "Opieka techniczna",
    desc: "Aktualizacje, kopie zapasowe, bezpieczeństwo i drobne zmiany — w jednym miejscu.",
    benefit: "Masz pewność, że strona zawsze działa.",
  },
];

export function Services() {
  return (
    <section id="uslugi" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Usługi</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold leading-tight">
            Co mogę dla Ciebie zrobić.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Każdy projekt zaczynam od zrozumienia Twoich celów. Potem proponuję rozwiązanie,
            które realnie pomaga Twojemu biznesowi.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative glass rounded-3xl p-6 transition-all duration-500 hover:bg-white/[0.06] hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div
                aria-hidden
                className="absolute -top-px left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "var(--gradient-accent)" }}
              />
              <div className="font-display text-sm text-muted-foreground">
                0{i + 1}
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-5 pt-5 border-t border-white/5 text-sm text-foreground/80">
                <span className="text-gradient font-medium">→</span> {s.benefit}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
