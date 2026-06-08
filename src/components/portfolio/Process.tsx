const steps = [
  { n: "01", t: "Kontakt", d: "Piszesz do mnie krótko, czego potrzebujesz. Odpowiadam zwykle tego samego dnia." },
  { n: "02", t: "Analiza potrzeb", d: "Rozmawiamy o Twoim biznesie, celach i oczekiwaniach. Dobieram najlepsze rozwiązanie." },
  { n: "03", t: "Projekt i realizacja", d: "Przygotowuję projekt graficzny, akceptujesz kierunek — i przechodzę do kodowania." },
  { n: "04", t: "Poprawki", d: "Razem dopracowujemy każdy szczegół. Bez limitu drobnych zmian." },
  { n: "05", t: "Publikacja", d: "Wdrażam stronę na Twoją domenę, konfiguruję SEO i przekazuję dostęp." },
];

export function Process() {
  return (
    <section id="proces" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Współpraca</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold leading-tight">
            Jak to wygląda krok po kroku.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Prosty, przejrzysty proces. Bez tajemnic, bez zbędnych formalności.
          </p>
        </div>

        <div className="mt-16 relative">
          <div
            aria-hidden
            className="hidden md:block absolute left-0 right-0 top-12 h-px"
            style={{ background: "linear-gradient(to right, transparent, var(--color-glass-border), transparent)" }}
          />
          <ol className="grid md:grid-cols-5 gap-6">
            {steps.map((s) => (
              <li key={s.n} className="relative">
                <div className="glass rounded-2xl p-6 h-full transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06]">
                  <div
                    className="size-12 rounded-full flex items-center justify-center font-display text-sm font-semibold mb-5 relative z-10"
                    style={{ background: "var(--gradient-accent)", color: "var(--background)" }}
                  >
                    {s.n}
                  </div>
                  <h3 className="font-display text-lg font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
