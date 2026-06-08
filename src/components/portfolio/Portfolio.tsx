export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div className="max-w-xl">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Portfolio</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold leading-tight">
              Wybrane realizacje.
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Portfolio jest aktualnie rozbudowywane — wkrótce pojawią się tutaj pierwsze realizacje.
          </p>
        </div>

        <article className="group relative glass-strong rounded-3xl overflow-hidden">
          <div
            className="relative aspect-[16/8] flex items-center justify-center text-center px-6"
            style={{
              background:
                "radial-gradient(ellipse at 30% 30%, oklch(0.5 0.22 250 / 0.5), transparent 60%), radial-gradient(ellipse at 70% 70%, oklch(0.55 0.2 220 / 0.4), transparent 60%), oklch(0.18 0.02 260)",
            }}
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative max-w-xl">
              <span className="inline-block glass text-xs rounded-full px-3 py-1 text-muted-foreground mb-5">
                Wkrótce
              </span>
              <h3 className="font-display text-3xl md:text-5xl font-semibold leading-tight">
                Portfolio <span className="text-gradient">w&nbsp;budowie</span>
              </h3>
              <p className="mt-4 text-muted-foreground">
                Pracuję obecnie nad pierwszymi realizacjami, które niedługo znajdą się w&nbsp;tej
                sekcji. Jeśli chcesz, aby Twój projekt pojawił się tutaj jako jeden z&nbsp;pierwszych
                — napisz do mnie.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
