import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Process } from "@/components/portfolio/Process";
import { Why } from "@/components/portfolio/Why";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Michał Moskal — Web Designer & Web Developer" },
      {
        name: "description",
        content:
          "Tworzę nowoczesne, szybkie i estetyczne strony internetowe — landing page, strony firmowe, portfolio. Premium design, indywidualne podejście, pełna responsywność.",
      },
      { property: "og:title", content: "Michał Moskal — Web Designer & Web Developer" },
      {
        property: "og:description",
        content:
          "Freelancer specjalizujący się w nowoczesnych stronach internetowych. Sprawdź portfolio i porozmawiaj o swoim projekcie.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Why />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
