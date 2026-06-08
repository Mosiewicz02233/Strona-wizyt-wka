import michalPhoto from "../../assets/michal.jpeg";
export function About() {
  return (
    <section id="o-mnie" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="relative aspect-[4/5] rounded-3xl glass-strong overflow-hidden group">
              <img
                src={michalPhoto}
                alt="Michał Moskal — web designer i web developer"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
              />
              {/* Subtelny gradient dopasowujący zdjęcie do ciemnej stylistyki */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 40%, oklch(0.14 0.02 260 / 0.55) 100%)",
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-40"
                style={{
                  background:
                    "radial-gradient(ellipse at 30% 20%, oklch(0.5 0.18 250 / 0.35), transparent 60%)",
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/5 rounded-3xl"
              />
            </div>
          </div>

          <div className="md:col-span-3">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">O mnie</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold leading-tight">
              Designer i&nbsp;developer<br />
              w <span className="text-gradient">jednej osobie</span>.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Od niedawna zajmuję się projektowaniem i&nbsp;tworzeniem stron internetowych, ale
                podchodzę do tego w&nbsp;pełni profesjonalnie. Aktywnie rozwijam swoje umiejętności
                i&nbsp;zdobywam doświadczenie poprzez realne projekty oraz codzienną pracę nad
                własnym warsztatem.
              </p>
              <p>
                Łączę zmysł estetyczny z&nbsp;wiedzą techniczną — projektuję interfejsy, a&nbsp;potem
                samodzielnie wprowadzam je w&nbsp;życie w&nbsp;kodzie. Stawiam na nowoczesne
                technologie, czysty kod i&nbsp;dopracowane detale, które realnie wpływają na efekt
                końcowy.
              </p>
              <p>
                Ciągle się uczę, śledzę trendy i&nbsp;testuję nowe rozwiązania. Dzięki temu mogę
                zaproponować świeże spojrzenie i&nbsp;w&nbsp;pełni zaangażowane podejście do każdego
                projektu, z&nbsp;którym mam okazję pracować.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["React", "TypeScript", "Tailwind", "UI / UX", "Figma", "Webflow", "SEO", "Performance"].map((t) => (
                <span key={t} className="glass text-sm rounded-full px-3 py-1 text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
