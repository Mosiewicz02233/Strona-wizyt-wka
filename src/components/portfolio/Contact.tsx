import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="kontakt" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative glass-strong rounded-3xl p-8 md:p-14 overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-32 -right-32 size-96 rounded-full blur-3xl opacity-40"
            style={{ background: "var(--gradient-accent)" }}
          />

          <div className="relative grid md:grid-cols-5 gap-10">
            <div className="md:col-span-2">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Kontakt</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold leading-tight">
                Porozmawiajmy<br />o&nbsp;Twoim projekcie.
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Napisz krótko, czego potrzebujesz — odpowiem zwykle w&nbsp;ciągu 24 godzin.
              </p>

              <div className="mt-8 space-y-3 text-sm">
                <a href="mailto:kontakt@michalmoskal.pl" className="flex items-center gap-3 text-foreground hover:text-gradient">
                  <span className="size-9 glass rounded-full flex items-center justify-center">✉</span>
                  kontakt@michalmoskal.pl
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="size-9 glass rounded-full flex items-center justify-center">⌖</span>
                  Polska — pracuję zdalnie
                </div>
              </div>

              <div className="mt-8 flex gap-2">
                {[
                  { l: "IG", h: "#" },
                  { l: "in", h: "#" },
                  { l: "BE", h: "#" },
                  { l: "GH", h: "#" },
                ].map((s) => (
                  <a
                    key={s.l}
                    href={s.h}
                    aria-label={s.l}
                    className="size-10 glass rounded-full flex items-center justify-center text-xs hover:bg-white/10 transition"
                  >
                    {s.l}
                  </a>
                ))}
              </div>
            </div>

            <form
              className="md:col-span-3 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Imię" name="name" placeholder="Jan Kowalski" />
                <Field label="E-mail" name="email" type="email" placeholder="jan@example.com" />
              </div>
              <Field label="Temat" name="subject" placeholder="Strona firmowa, landing page…" />
              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Wiadomość
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Napisz krótko o swoim projekcie…"
                  className="w-full rounded-2xl glass px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-medium hover:opacity-90 transition shadow-[var(--shadow-glow)]"
              >
                {sent ? "Dziękuję — odezwę się wkrótce ✓" : "Wyślij wiadomość"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-full glass px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40"
      />
    </div>
  );
}
