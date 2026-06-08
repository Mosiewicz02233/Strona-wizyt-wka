const items = [
  { t: "Nowoczesny design", d: "Strony, które wyglądają tak, jakbyś zatrudnił topowe studio.", icon: "✦" },
  { t: "Szybkie działanie", d: "Zoptymalizowany kod i obrazy — Twoja strona ładuje się błyskawicznie.", icon: "⚡" },
  { t: "Pełna responsywność", d: "Telefon, tablet, laptop — wszędzie wygląda i działa idealnie.", icon: "▣" },
  { t: "Indywidualne podejście", d: "Żadnych szablonów. Każdy projekt budowany pod Ciebie od zera.", icon: "◈" },
  { t: "Sprawna komunikacja", d: "Odpowiadam szybko, mówię konkretnie, bez technicznego żargonu.", icon: "✉" },
  { t: "Wsparcie po wdrożeniu", d: "Nie znikam po publikacji. Pomagam, gdy potrzebujesz zmian.", icon: "✓" },
];

export function Why() {
  return (
    <section className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Dlaczego ja</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold leading-tight">
            Dlaczego warto ze mną pracować.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-3xl overflow-hidden glass">
          {items.map((it) => (
            <div
              key={it.t}
              className="bg-background/40 p-8 transition-colors hover:bg-white/[0.04]"
            >
              <div className="text-2xl text-gradient mb-4">{it.icon}</div>
              <h3 className="font-display text-lg font-semibold">{it.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
