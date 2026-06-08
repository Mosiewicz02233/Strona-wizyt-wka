export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-28 md:pt-52 md:pb-40">
      <div className="absolute inset-0 hero-bg pointer-events-none" />
      <div
        aria-hidden
        className="absolute top-1/4 left-1/2 -translate-x-1/2 size-[600px] rounded-full blur-3xl opacity-30 animate-glow"
        style={{ background: "var(--gradient-accent)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 text-center">
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8 animate-fade-up">
          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Dostępny na nowe projekty
        </div>

        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          Tworzę strony,<br />
          które <span className="text-gradient">sprzedają</span> i&nbsp;zachwycają.
        </h1>

        <p
          className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground animate-fade-up"
          style={{ animationDelay: "200ms" }}
        >
          Cześć, jestem Michał — web designer i developer. Projektuję i&nbsp;buduję nowoczesne,
          szybkie strony internetowe dopasowane do Twojego biznesu i&nbsp;marki osobistej.
        </p>

        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition shadow-[var(--shadow-glow)]"
          >
            Skontaktuj się
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/5 transition"
          >
            Zobacz portfolio
          </a>
        </div>

        <div
          className="mt-20 grid grid-cols-3 gap-4 max-w-2xl mx-auto animate-fade-up"
          style={{ animationDelay: "400ms" }}
        >
          {[
            { k: "100%", v: "Responsywność" },
            { k: "<2s", v: "Czas ładowania" },
            { k: "1:1", v: "Indywidualny projekt" },
          ].map((s) => (
            <div key={s.v} className="glass rounded-2xl p-4 text-center">
              <div className="text-2xl md:text-3xl font-display font-semibold text-gradient">{s.k}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
