import { createFileRoute } from "@tanstack/react-router";
import {
  Wrench,
  ShieldCheck,
  CalendarClock,
  Phone,
  Mail,
  MapPin,
  Clock,
  Gauge,
  Disc3,
  ClipboardCheck,
  CircleDot,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-workshop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kfz-Meisterbetrieb Müller – Auto-Werkstatt in Dormagen" },
      {
        name: "description",
        content:
          "Ihre Meisterwerkstatt in Dormagen: Inspektion, TÜV/AU, Reifenwechsel und Bremsenservice. Schnell, fair und transparent. Jetzt Termin anfragen.",
      },
      { property: "og:title", content: "Kfz-Meisterbetrieb Müller – Dormagen" },
      {
        property: "og:description",
        content:
          "Schnell, fair und transparent. Wir bringen Sie sicher zurück auf die Straße.",
      },
    ],
  }),
  component: Index,
});

const PHONE = "+4921331234567";
const PHONE_DISPLAY = "02133 123 45 67";

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand text-brand-foreground">
              <Wrench className="h-5 w-5" />
            </span>
            <span className="font-bold tracking-tight text-brand">
              Kfz-Meister Müller
            </span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#leistungen" className="text-sm font-medium hover:text-brand">Leistungen</a>
            <a href="#ueber-uns" className="text-sm font-medium hover:text-brand">Über uns</a>
            <a href="#kontakt" className="text-sm font-medium hover:text-brand">Kontakt</a>
            <a
              href="#kontakt"
              className="inline-flex items-center rounded-md bg-accent-cta px-4 py-2 text-sm font-semibold text-accent-cta-foreground shadow-sm transition hover:opacity-90"
            >
              Termin anfragen
            </a>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menü"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
              <a onClick={() => setOpen(false)} href="#leistungen" className="rounded px-2 py-2 text-sm hover:bg-surface-muted">Leistungen</a>
              <a onClick={() => setOpen(false)} href="#ueber-uns" className="rounded px-2 py-2 text-sm hover:bg-surface-muted">Über uns</a>
              <a onClick={() => setOpen(false)} href="#kontakt" className="rounded px-2 py-2 text-sm hover:bg-surface-muted">Kontakt</a>
              <a
                onClick={() => setOpen(false)}
                href="#kontakt"
                className="mt-1 inline-flex items-center justify-center rounded-md bg-accent-cta px-4 py-2 text-sm font-semibold text-accent-cta-foreground"
              >
                Termin anfragen
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Kfz-Meisterbetrieb Müller Werkstatt in Dormagen"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand/95 via-brand/85 to-brand/40" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-32">
          <div className="max-w-2xl animate-fade-up text-brand-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5" /> Meisterbetrieb · Dormagen
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Ihr zuverlässiger Kfz-Meisterbetrieb in Dormagen
            </h1>
            <p className="mt-5 text-lg text-white/85 md:text-xl">
              Schnell, fair und transparent. Wir bringen Sie sicher zurück auf die Straße.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-cta px-6 py-3 text-base font-semibold text-accent-cta-foreground shadow-lg transition hover:opacity-90"
              >
                <Phone className="h-5 w-5" /> Jetzt anrufen
              </a>
              <a
                href="#leistungen"
                className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Unsere Leistungen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="border-b border-border bg-surface-muted">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Meisterwerkstatt", desc: "Geprüfte Qualität von erfahrenen Kfz-Meistern – für jede Marke." },
            { icon: ClipboardCheck, title: "Transparente Preise", desc: "Klarer Kostenvoranschlag vorab. Keine versteckten Kosten." },
            { icon: CalendarClock, title: "Schnelle Terminvergabe", desc: "Kurze Wartezeiten und flexible Termine – auch kurzfristig." },
          ].map((f) => (
            <div key={f.title} className="flex flex-col items-start gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="text-lg font-semibold text-brand">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="leistungen" className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-brand md:text-4xl">
              Unsere Leistungen
            </h2>
            <p className="mt-3 text-muted-foreground">
              Vom kleinen Service bis zur großen Reparatur – wir kümmern uns um Ihr Fahrzeug.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Gauge, title: "Inspektion", desc: "Herstellergerechte Inspektion nach Wartungsplan – inkl. Stempel im Serviceheft." },
              { icon: Disc3, title: "Reifenwechsel & -service", desc: "Wechsel, Auswuchten und Einlagerung Ihrer Reifen zu fairen Konditionen." },
              { icon: ClipboardCheck, title: "TÜV/AU-Vorabcheck", desc: "Wir prüfen Ihr Fahrzeug vor der Hauptuntersuchung – damit alles glatt läuft." },
              { icon: CircleDot, title: "Bremsenservice", desc: "Bremsbeläge, Scheiben und Flüssigkeit – sicher unterwegs auf jedem Meter." },
            ].map((s) => (
              <div
                key={s.title}
                className="group rounded-xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-brand/30 hover:shadow-[var(--shadow-elegant)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand text-brand-foreground transition group-hover:bg-accent-cta">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-brand">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Location */}
      <section id="ueber-uns" className="bg-surface-muted py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-brand md:text-4xl">
              Über uns
            </h2>
            <p className="mt-4 text-muted-foreground">
              Seit über 25 Jahren steht der Kfz-Meisterbetrieb Müller in Dormagen
              für ehrliche Handwerksarbeit. Unser eingespieltes Team aus
              erfahrenen Meistern und Gesellen arbeitet mit modernster Technik –
              und nimmt sich gleichzeitig die Zeit, Ihnen alles verständlich zu
              erklären.
            </p>

            <div className="mt-8 space-y-4">
              <div id="kontakt" className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-accent-cta" />
                <div>
                  <p className="font-semibold text-brand">Adresse</p>
                  <p className="text-sm text-muted-foreground">
                    Musterstraße 12, 41539 Dormagen
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 text-accent-cta" />
                <div>
                  <p className="font-semibold text-brand">Öffnungszeiten</p>
                  <p className="text-sm text-muted-foreground">
                    Mo – Fr: 07:30 – 18:00 Uhr<br />
                    Sa: 09:00 – 13:00 Uhr
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-accent-cta" />
                <div>
                  <p className="font-semibold text-brand">Telefon</p>
                  <a href={`tel:${PHONE}`} className="text-sm text-muted-foreground hover:text-brand">
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>

            <a
              href={`tel:${PHONE}`}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent-cta px-6 py-3 text-sm font-semibold text-accent-cta-foreground shadow-sm transition hover:opacity-90"
            >
              <Phone className="h-4 w-4" /> Termin telefonisch vereinbaren
            </a>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-brand shadow-[var(--shadow-elegant)]">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(var(--brand-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--brand-foreground) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-brand-foreground">
              <MapPin className="h-12 w-12 text-accent-cta" />
              <p className="mt-3 font-semibold">Kfz-Meisterbetrieb Müller</p>
              <p className="text-sm opacity-80">Musterstraße 12 · 41539 Dormagen</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Musterstra%C3%9Fe+12+41539+Dormagen"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 rounded-md border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur hover:bg-white/20"
              >
                Route planen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand text-brand-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent-cta">
                <Wrench className="h-5 w-5" />
              </span>
              <span className="font-bold">Kfz-Meister Müller</span>
            </div>
            <p className="mt-3 text-sm text-white/70">
              Ihre Meisterwerkstatt in Dormagen.
            </p>
          </div>
          <div className="text-sm">
            <h4 className="font-semibold">Kontakt</h4>
            <ul className="mt-3 space-y-2 text-white/80">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href={`tel:${PHONE}`} className="hover:text-white">{PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@kfz-mueller-dormagen.de" className="hover:text-white">
                  info@kfz-mueller-dormagen.de
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Musterstraße 12, 41539 Dormagen
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <h4 className="font-semibold">Rechtliches</h4>
            <ul className="mt-3 space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white">Impressum</a></li>
              <li><a href="#" className="hover:text-white">Datenschutzerklärung</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-white/60">
            © {new Date().getFullYear()} Kfz-Meisterbetrieb Müller · Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  );
}
