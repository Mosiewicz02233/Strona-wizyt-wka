export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="inline-block size-1.5 rounded-full bg-accent" />
          © {new Date().getFullYear()} Michał Moskal. Wszystkie prawa zastrzeżone.
        </div>
        <div className="flex items-center gap-6">
          <a href="#o-mnie" className="hover:text-foreground transition">O mnie</a>
          <a href="#uslugi" className="hover:text-foreground transition">Usługi</a>
          <a href="#kontakt" className="hover:text-foreground transition">Kontakt</a>
        </div>
      </div>
    </footer>
  );
}
