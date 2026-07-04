import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  MessageCircle,
  Search,
  MapPin,
  ShoppingCart,
  Bot,
  Compass,
  Globe,
  Star,
  MessageSquare,
  Calendar,
  Clock,
  DollarSign,
  Ticket,
  Heart,
} from "lucide-react";
import salonAsset from "@/assets/salon-ucs.png.asset.json";
import logoAsset from "@/assets/logo-impulsa-new.jpg.asset.json";

const WA_URL =
  "https://wa.me/584242670624?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20taller%20Cuando%20Instagram%20No%20Alcanza";

const MAPS_EMBED =
  "https://www.google.com/maps?q=Universidad+Corporativa+SIGO+Margarita&output=embed";

const EVENT_DATE = new Date("2026-07-08T09:45:00-04:00").getTime();

export const Route = createFileRoute("/instagramnoalcanza")({
  head: () => ({
    meta: [
      { title: "Cuando Instagram No Alcanza — Taller de Ecosistema Digital | IMPULSA" },
      {
        name: "description",
        content:
          "Taller presencial en Margarita el 8 de julio. Aprende en 2 horas a que te encuentren en Google y a convertir visitas en clientes. Cupos limitados.",
      },
      { property: "og:title", content: "Cuando Instagram No Alcanza — Taller de Ecosistema Digital" },
      {
        property: "og:description",
        content:
          "Taller presencial en Margarita el 8 de julio. Aprende a que te encuentren en Google y convertir visitas en clientes.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://impulsa-ya.lovable.app/instagramnoalcanza" },
      { property: "og:image", content: salonAsset.url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Cuando Instagram No Alcanza — Taller IMPULSA" },
      { name: "twitter:description", content: "Taller presencial en Margarita — 8 de julio, 9:45 AM." },
      { name: "twitter:image", content: salonAsset.url },
    ],
    links: [{ rel: "canonical", href: "https://impulsa-ya.lovable.app/instagramnoalcanza" }],
  }),
  component: Landing,
});

function WaButton({
  children,
  className = "",
  size = "md",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "md" | "lg";
}) {
  const sizeCls =
    size === "lg" ? "px-7 py-4 text-base sm:text-lg" : "px-5 py-3 text-sm sm:text-base";
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-gold text-navy font-bold shadow-md hover:bg-gold-dark hover:text-white transition-colors ${sizeCls} ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      {children}
    </a>
  );
}

function useCountdown(target: number) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  if (now === null) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, ready: false };
  }
  const diff = Math.max(0, target - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    ready: true,
  };
}

function Countdown() {
  const { days, hours, minutes, seconds, ready } = useCountdown(EVENT_DATE);
  const cells = [
    { v: days, l: "Días" },
    { v: hours, l: "Horas" },
    { v: minutes, l: "Min" },
    { v: seconds, l: "Seg" },
  ];
  return (
    <section className="bg-navy py-14 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-white text-2xl sm:text-3xl font-bold">El taller comienza en:</h2>
        <div className="mt-8 grid grid-cols-4 gap-2 sm:gap-4">
          {cells.map((c) => (
            <div key={c.l} className="rounded-xl bg-white/5 border border-white/10 py-5 sm:py-7">
              <div className="text-gold text-3xl sm:text-5xl font-extrabold tabular-nums">
                {ready ? String(c.v).padStart(2, "0") : "--"}
              </div>
              <div className="mt-1 text-white/80 text-xs sm:text-sm uppercase tracking-wider">
                {c.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const transformations = [
  {
    icon: Search,
    from: "Hoy publicas y el cliente que te busca en Google no te encuentra.",
    to: "Vas a salir sabiendo cómo aparecer cuando te buscan.",
  },
  {
    icon: MapPin,
    from: "Hoy el turista que llega a Margarita nunca te ve.",
    to: "Vas a aparecer en Google Maps justo cuando te necesita.",
  },
  {
    icon: ShoppingCart,
    from: "Hoy tu Instagram es una vitrina que no cierra ventas.",
    to: "Vas a entender qué convierte una visita en un cliente que paga.",
  },
  {
    icon: Bot,
    from: "Hoy respondes mensajes a cualquier hora, agotado.",
    to: "Vas a ver cómo un asistente de WhatsApp atiende por ti mientras duermes.",
  },
  {
    icon: Compass,
    from: "Hoy no sabes por dónde empezar.",
    to: "Vas a salir con una hoja de ruta clara para tus próximos 7 días.",
  },
];

const pillars = [
  {
    icon: Globe,
    title: "Web propia",
    body: "Tu sede digital permanente. No depende de ningún algoritmo. Trabaja por ti 24/7.",
  },
  {
    icon: Star,
    title: "Google Business Profile",
    body: "Apareces en Google Maps justo cuando te buscan, con fotos, horario y reseñas.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp estructurado",
    body: "Un asistente que responde y capta clientes mientras duermes.",
  },
];

function Landing() {
  return (
    <div className="bg-white text-ink font-sans">
      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between gap-3">
          <a href="#top" className="flex items-center gap-2 shrink-0">
            <img
              src={logoAsset.url}
              alt="Logo IMPULSA"
              className="h-10 w-10 rounded-md object-contain bg-white"
            />
            <span className="hidden sm:inline text-navy font-extrabold tracking-tight">
              IMPULSA
            </span>
          </a>
          <WaButton>
            <span className="hidden sm:inline">Inscríbete por WhatsApp</span>
            <span className="inline sm:hidden">Inscríbete</span>
          </WaButton>
        </div>
      </header>

      <main id="top">
        <section className="relative isolate overflow-hidden">
          <img
            src={salonAsset.url}
            alt="Salón lleno de participantes en un taller de IMPULSA"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/85" aria-hidden />
          <div className="relative mx-auto max-w-4xl px-4 py-20 sm:py-28 text-center">
            <h1 className="text-white text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
              Cuando Instagram No Alcanza
            </h1>
            <p className="mt-4 text-gold text-xl sm:text-2xl font-bold">
              Taller de Ecosistema Digital
            </p>
            <p className="mt-5 text-white/90 text-base sm:text-lg max-w-2xl mx-auto">
              Aprende en 2 horas a que te encuentren — y a convertir visitas en clientes.
            </p>

            <div className="mt-7 inline-flex flex-wrap justify-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-white text-sm sm:text-base">
              <span>📅 Miércoles 8 de julio</span>
              <span className="text-white/50">·</span>
              <span>⏰ 9:45 AM</span>
              <span className="text-white/50">·</span>
              <span>📍 UCS, Margarita</span>
            </div>

            <div className="mt-8">
              <WaButton size="lg">Quiero información por WhatsApp</WaButton>
              <p className="mt-3 text-white/75 text-sm">
                Te responde LIS en minutos. Inscripción en menos de 5 minutos.
              </p>
            </div>
          </div>
        </section>

        <Countdown />

        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-navy text-3xl sm:text-4xl font-extrabold text-center">
              ¿Tu negocio solo existe en Instagram?
            </h2>
            <p className="mt-6 text-ink/80 text-lg leading-relaxed">
              La mayoría de los negocios en Margarita publican todos los días, consiguen
              seguidores, y aun así las ventas no llegan como deberían. La razón es simple:
              Instagram conecta con quien ya te conoce. Google conecta con quien te busca
              ahora mismo, listo para comprar, y todavía no sabe que existes. Mientras
              publicas, ese cliente le compra a tu competencia.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-soft">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-navy text-3xl sm:text-4xl font-extrabold text-center">
              De dónde estás hoy, a dónde vas a salir
            </h2>
            <div className="mt-10 grid gap-5">
              {transformations.map((t, i) => {
                const Icon = t.icon;
                return (
                  <div
                    key={i}
                    className="rounded-2xl bg-white border border-border p-5 sm:p-6 shadow-sm grid gap-4 sm:grid-cols-[auto_1fr_1fr] items-start"
                  >
                    <div className="h-12 w-12 shrink-0 rounded-xl bg-navy text-gold grid place-items-center">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-ink/60">
                        Hoy
                      </div>
                      <p className="mt-1 text-ink/80">{t.from}</p>
                    </div>
                    <div className="sm:border-l sm:border-border sm:pl-5">
                      <div className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                        Saldrás sabiendo
                      </div>
                      <p className="mt-1 text-navy font-semibold">{t.to}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-navy py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-white text-3xl sm:text-4xl font-extrabold">Haz la cuenta</h2>
            <p className="mt-6 text-white/90 text-lg leading-relaxed">
              Si el mes pasado tus publicaciones te hubiesen generado{" "}
              <span className="text-gold font-bold">5 ventas</span> en vez de{" "}
              <span className="text-gold font-bold">10 seguidores</span>, ¿de cuánto
              estaríamos hablando? Ese número — con tu ticket — es exactamente lo que estás
              dejando de ganar cada mes.
            </p>
            <p className="mt-6 text-white text-xl sm:text-2xl font-bold">
              El taller cuesta <span className="text-gold">$15</span>.
            </p>
            <p className="mt-2 text-white/80">
              Se paga solo con el primer cliente nuevo que llegue por Google.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-5xl px-4">
            <h2 className="text-navy text-3xl sm:text-4xl font-extrabold text-center">
              Tu ecosistema digital en 3 pilares
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="rounded-2xl border border-border bg-white p-6 shadow-sm"
                  >
                    <div className="h-14 w-14 rounded-xl bg-navy grid place-items-center">
                      <Icon className="h-7 w-7 text-gold" />
                    </div>
                    <h3 className="mt-5 text-navy text-xl font-extrabold">{p.title}</h3>
                    <p className="mt-2 text-ink/80">{p.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-soft">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-navy text-3xl sm:text-4xl font-extrabold text-center">
              Detalles del taller
            </h2>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <DetailCard icon={Calendar} label="Fecha" value="Miércoles 8 de julio de 2026" />
              <DetailCard icon={Clock} label="Hora" value="9:45 AM a 12:00 PM" />
              <DetailCard
                icon={MapPin}
                label="Lugar"
                value="Universidad Corporativa SIGO, Margarita"
              />
              <DetailCard
                icon={Ticket}
                label="Cupos"
                value="Limitados · No te quedes por fuera"
              />
            </div>

            <div className="mt-6 rounded-2xl border border-border bg-white p-6 sm:p-8 text-center shadow-sm">
              <div className="flex items-center justify-center gap-3">
                <DollarSign className="h-6 w-6 text-navy" />
                <span className="text-navy font-bold uppercase tracking-wider text-sm">
                  Inversión
                </span>
              </div>
              <div className="mt-4 flex items-baseline justify-center gap-3">
                <span className="text-ink/60 text-2xl line-through">$20</span>
                <span className="text-gold text-5xl sm:text-6xl font-extrabold">$15</span>
              </div>
              <p className="mt-4 text-ink/75 max-w-md mx-auto">
                Precio solidario por la situación que vivimos.{" "}
                <span className="font-semibold text-navy">$3 de cada entrada</span> van a
                Cáritas Venezuela.
              </p>
              <div className="mt-6">
                <WaButton size="lg">Quiero mi cupo por WhatsApp</WaButton>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-navy text-3xl sm:text-4xl font-extrabold text-center">
              Cómo llegar
            </h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="Ubicación Universidad Corporativa SIGO, Margarita"
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-72 sm:h-96 border-0"
              />
            </div>
            <p className="mt-4 text-center text-ink/80 font-medium">
              Universidad Corporativa SIGO, Margarita
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20 bg-soft">
          <div className="mx-auto max-w-3xl px-4">
            <div className="rounded-2xl bg-white border border-border p-8 sm:p-10 text-center shadow-sm">
              <div className="mx-auto h-14 w-14 rounded-full bg-gold/20 grid place-items-center">
                <Heart className="h-7 w-7 text-gold-dark" />
              </div>
              <h2 className="mt-5 text-navy text-3xl sm:text-4xl font-extrabold">
                Aprendes y ayudas a Venezuela
              </h2>
              <p className="mt-5 text-ink/80 text-lg leading-relaxed">
                <span className="font-bold text-navy">$3 de cada inscripción</span> van a
                Cáritas Venezuela, en apoyo a las familias afectadas por la emergencia
                nacional. Al inscribirte, no solo inviertes en tu negocio: contribuyes a la
                recuperación de quienes más lo necesitan.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-navy py-20 sm:py-24">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-white text-4xl sm:text-5xl font-extrabold leading-tight">
              ¿Listo para que te encuentren?
            </h2>
            <div className="mt-8">
              <WaButton size="lg">Quiero información por WhatsApp</WaButton>
            </div>
            <p className="mt-4 text-white/80 text-sm">
              Te responde LIS, nuestra asistente, en minutos. Cupos limitados.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-border py-10">
        <div className="mx-auto max-w-6xl px-4 flex flex-col items-center text-center gap-3">
          <img
            src={logoAsset.url}
            alt="Logo IMPULSA"
            className="h-14 w-14 rounded-md object-contain bg-white"
          />
          <p className="text-navy font-bold">IMPULSA · Formación Comercial de Alto Impacto</p>
          <a
            href="https://www.impulsa.com.ve"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink/70 hover:text-navy text-sm"
          >
            impulsa.com.ve
          </a>
        </div>
      </footer>
    </div>
  );
}

function DetailCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Calendar;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 flex items-start gap-4 shadow-sm">
      <div className="h-11 w-11 shrink-0 rounded-lg bg-navy grid place-items-center">
        <Icon className="h-5 w-5 text-gold" />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-bold uppercase tracking-wider text-ink/60">
          {label}
        </div>
        <div className="mt-1 text-navy font-semibold">{value}</div>
      </div>
    </div>
  );
}
