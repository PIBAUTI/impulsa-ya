import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, Award, Handshake, Smartphone, Target, Briefcase,
  CheckCircle2, XCircle, Search, ClipboardList, Rocket, BarChart3,
  Hotel, ShoppingCart, UtensilsCrossed, Quote, MapPin, Phone, Globe,
  Clock, Instagram, MessageCircle, Linkedin, Sparkles,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { wa, WA_DEFAULT, INSTAGRAM_URL } from "@/lib/wa";
import heroTeam from "@/assets/hero-team.jpg";
import teamGroup from "@/assets/team-group.jpg";
import juanPino from "@/assets/juan-pino.jpg";
import lisveronica from "@/assets/lisveronica.jpg";
import lisbarbara from "@/assets/lisbarbara.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Mark({ children }: { children: React.ReactNode }) {
  return <span className="impulsa-mark">{children}</span>;
}

function Index() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Header />
      <main className="pt-16">
        <Hero />
        <Problem />
        <Talleres />
        <Corporativo />
        <Equipo />
        <PorQue />
        <Testimonios />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0">
        <img
          src={heroTeam}
          alt="Equipo empresarial en reunión"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold tracking-wide uppercase">
            <Sparkles className="h-3.5 w-3.5" /> Formación Comercial · Venezuela
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-white">
            Acciones que <Mark>IMPULSA</Mark>n empresas
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-2xl">
            Capacitación comercial de alto impacto para equipos que quieren
            resultados reales — desde el primer día.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={wa("Hola LIS, quiero información sobre los programas de IMPULSA")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-navy px-6 py-3.5 text-base font-semibold hover:bg-soft transition-colors"
            >
              ¡IMPULSA tu equipo! <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#talleres"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white/80 text-white px-6 py-3.5 text-base font-semibold hover:bg-white/10 transition-colors"
            >
              Ver nuestros talleres
            </a>
          </div>
        </div>

        <div className="relative mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl">
          {[
            { k: "25+ años", v: "de experiencia comercial en Venezuela" },
            { k: "3 programas", v: "de formación especializados" },
            { k: "Resultados", v: "desde el primer día" },
          ].map((m) => (
            <div
              key={m.k}
              className="rounded-xl bg-white/5 backdrop-blur border border-white/10 p-5"
            >
              <div className="impulsa-mark text-2xl md:text-3xl text-white">{m.k}</div>
              <div className="mt-1 text-sm text-white/75">{m.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROBLEMA ---------------- */
function Problem() {
  const items = [
    {
      icon: Target,
      title: "Clientes que no regresan",
      desc: "Tu servicio es bueno, pero algo falla en la experiencia. El cliente paga una vez y no vuelve.",
    },
    {
      icon: Briefcase,
      title: "Ventas que no cierran",
      desc: "Tu equipo habla con los clientes pero no convierte. Las oportunidades se escapan cada día.",
    },
    {
      icon: Smartphone,
      title: "Marketing digital sin resultados",
      desc: "Publicas en redes pero nadie escribe. Tienes presencia pero no clientes.",
    },
  ];
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-extrabold">¿Te suena familiar?</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((i) => (
            <div
              key={i.title}
              className="rounded-2xl border border-border bg-white p-7 hover:border-mid hover:shadow-[0_8px_30px_rgba(13,27,75,0.08)] transition-all"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-soft text-navy">
                <i.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{i.title}</h3>
              <p className="mt-2 text-ink/75 leading-relaxed">{i.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-xl md:text-2xl font-bold text-navy">
          Eso tiene solución. Y es más rápida de lo que crees.
        </p>
      </div>
    </section>
  );
}

/* ---------------- TALLERES ---------------- */
function Talleres() {
  const talleres = [
    {
      icon: Award,
      title: "El cliente que no vuelve",
      sub: "Atención al cliente de alto impacto",
      desc: "Descubre por qué tus clientes se van y cómo hacer que regresen. Técnicas aplicables desde mañana en tu negocio.",
      duracion: "3 horas",
      precio: "$35 – $50 USD por persona",
      cta: "IMPULSA tu atención",
      msg: "Hola LIS, quiero inscribirme al taller El cliente que no vuelve. ¿Cómo procedo?",
      featured: false,
    },
    {
      icon: Handshake,
      title: "Cierra más, esfuérzate menos",
      sub: "Técnicas de venta efectiva",
      desc: "Aprende a vender sin presión y sin guiones robóticos. Técnicas reales que funcionan con el cliente venezolano.",
      duracion: "3 horas",
      precio: "$35 – $50 USD por persona",
      cta: "IMPULSA tus ventas",
      msg: "Hola LIS, quiero inscribirme al taller Cierra más esfuérzate menos. ¿Cómo procedo?",
      featured: true,
    },
    {
      icon: Smartphone,
      title: "Tu negocio en digital",
      sub: "Marketing digital aplicado",
      desc: "Instagram, WhatsApp y Google para atraer clientes locales. Sin agencia. Sin presupuesto enorme.",
      duracion: "4 horas",
      precio: "$45 – $60 USD por persona",
      cta: "IMPULSA tu Mercadeo Digital",
      msg: "Hola LIS, quiero inscribirme al taller Tu negocio en digital. ¿Cómo procedo?",
      featured: false,
    },
  ];

  return (
    <section id="talleres" className="bg-soft py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-extrabold">Nuestros talleres</h2>
          <p className="mt-4 text-lg text-ink/75">
            Formación práctica para comercios, pymes y emprendedores. Grupos pequeños. Resultados inmediatos.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {talleres.map((t) => (
            <div
              key={t.title}
              className={`relative rounded-2xl bg-white p-7 flex flex-col transition-all ${
                t.featured
                  ? "border-2 border-navy shadow-[0_12px_40px_rgba(13,27,75,0.15)]"
                  : "border border-border hover:shadow-[0_8px_30px_rgba(13,27,75,0.08)]"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-7 inline-flex rounded-full bg-navy text-white px-3 py-1 text-xs font-semibold">
                  Más popular
                </span>
              )}
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-white">
                <t.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold leading-tight">{t.title}</h3>
              <p className="mt-1 text-sm font-semibold text-mid">{t.sub}</p>
              <p className="mt-3 text-ink/75 leading-relaxed">{t.desc}</p>

              <dl className="mt-5 space-y-1.5 text-sm">
                <div className="flex justify-between border-t border-border pt-3">
                  <dt className="text-ink/60">Duración</dt>
                  <dd className="font-semibold text-navy">{t.duracion}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-ink/60">Precio</dt>
                  <dd className="font-semibold text-navy text-right">{t.precio}</dd>
                </div>
              </dl>

              <a
                href={wa(t.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-navy text-white px-4 py-3 text-sm font-semibold hover:bg-corp transition-colors"
              >
                {t.cta} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Puente hacia corporativo */}
        <div className="mt-12 rounded-2xl border-2 border-dashed border-navy/30 bg-white p-7 md:p-8 text-center">
          <p className="text-lg md:text-xl font-bold text-navy max-w-3xl mx-auto">
            ¿Tienes más de 10 personas en tu equipo? Diseñamos el taller exclusivamente para tu organización.
          </p>
          <a
            href={wa("Hola LIS, tengo un equipo de más de 10 personas y quiero un programa a medida")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-lg border-2 border-navy text-navy px-6 py-3 text-sm font-semibold hover:bg-navy hover:text-white transition-colors"
          >
            Quiero un programa a medida <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Pack */}
        <div className="mt-8 rounded-2xl bg-navy text-white p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-mid">🎯 Pack 3 talleres</div>
            <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-white">
              $100 a $120 USD · Ahorra hasta $30
            </h3>
            <p className="mt-1 text-white/80">Inscríbete en los tres talleres y forma a tu equipo completo.</p>
          </div>
          <a
            href={wa("Hola LIS, quiero el Pack completo de los 3 talleres. ¿Cómo procedo?")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center gap-2 rounded-lg bg-white text-navy px-6 py-3.5 text-base font-semibold hover:bg-soft transition-colors"
          >
            Quiero el Pack completo <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        {/* Próximo taller */}
        <div className="mt-8 rounded-2xl border-2 border-mid bg-white p-7 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-mid">Próximo taller</div>
            <h3 className="mt-1 text-xl md:text-2xl font-bold text-navy">
              Próximamente — sé el primero en saber la fecha
            </h3>
          </div>
          <a
            href={wa("Hola LIS, quiero que me avises cuando abra el próximo taller")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center gap-2 rounded-lg border-2 border-navy text-navy px-5 py-3 text-sm font-semibold hover:bg-navy hover:text-white transition-colors"
          >
            Avísame cuando abra
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CORPORATIVO ---------------- */
function Corporativo() {
  const steps = [
    { icon: Search, title: "Diagnóstico gratuito", desc: "30 minutos para entender tu situación real" },
    { icon: ClipboardList, title: "Programa a medida", desc: "Diseñado para tu equipo, tu marca y tu mercado" },
    { icon: Rocket, title: "Ejecución", desc: "Con tu equipo, en tu espacio o donde prefieras" },
    { icon: BarChart3, title: "Seguimiento 30 días", desc: "Nos aseguramos de que los cambios se sostengan" },
  ];
  const segs = [
    { icon: Hotel, label: "Hoteles y resorts", price: "desde $1.200 USD" },
    { icon: ShoppingCart, label: "Cadenas y supermercados", price: "desde $800 USD" },
    { icon: UtensilsCrossed, label: "Restaurantes y franquicias", price: "desde $500 USD" },
  ];
  return (
    <section id="corporativo" className="bg-navy text-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            ¿Tienes un equipo comercial o de atención al cliente?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Adaptamos cada programa a la realidad, cultura y necesidades específicas de tu organización. Sin soluciones genéricas. Sin copy-paste.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <div key={s.title} className="relative rounded-xl bg-white/5 border border-white/10 p-6">
              <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-mid text-white text-sm font-bold flex items-center justify-center">
                {idx + 1}
              </div>
              <s.icon className="h-7 w-7 text-mid" />
              <h3 className="mt-4 text-lg font-bold text-white">{s.title}</h3>
              <p className="mt-1 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-14 text-center text-lg md:text-xl text-white/85 max-w-3xl mx-auto">
          Trabajamos con hoteles, cadenas de supermercados, restaurantes y franquicias en Venezuela.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {segs.map((s) => (
            <div key={s.label} className="rounded-xl bg-white/10 border border-white/10 p-6 text-center">
              <s.icon className="h-8 w-8 mx-auto text-white" />
              <div className="mt-3 font-bold text-white">{s.label}</div>
              <div className="mt-1 text-sm text-mid font-semibold">{s.price}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={wa("Hola LIS, soy gerente de [empresa] y quisiera solicitar un diagnóstico gratuito para mi equipo")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white text-navy px-7 py-4 text-base font-semibold hover:bg-soft transition-colors"
          >
            Solicita tu diagnóstico gratuito <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- EQUIPO ---------------- */
function Equipo() {
  const people = [
    {
      img: juanPino,
      name: "Juan Pino",
      role: "Director y Arquitecto de Programas",
      bio: "Ingeniero, MBA y Abogado. 25+ años liderando equipos comerciales en Venezuela y LATAM. Schlumberger, Movilnet, CEO de Transformación Digital US.",
      linkedin: "https://www.linkedin.com/",
    },
    {
      img: lisveronica,
      name: "Lisverónica Ramos",
      role: "Ejecutiva Comercial y Co-facilitadora",
      bio: "TSU Mercadotecnia. Especialista en estrategias comerciales y desarrollo de equipos de venta. Experiencia en cadenas nacionales y marcas de lujo.",
    },
    {
      img: lisbarbara,
      name: "Lisbárbara Ramos",
      role: "Coordinadora Local y Co-facilitadora",
      bio: "TSU Mercadotecnia. 15+ años gestionando equipos de atención al cliente y operaciones comerciales en Margarita.",
    },
  ];
  return (
    <section id="equipo" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-extrabold">Quiénes somos</h2>
          <p className="mt-4 text-lg text-ink/75">
            No somos académicos que enseñan ventas. Somos profesionales que hemos vendido,
            gerenciado y transformado operaciones comerciales en Venezuela.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl">
          <img
            src={teamGroup}
            alt="Equipo IMPULSA"
            loading="lazy"
            width={1600}
            height={1000}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {people.map((p) => (
            <article key={p.name} className="rounded-2xl border border-border bg-white p-6 hover:shadow-[0_8px_30px_rgba(13,27,75,0.08)] transition-all">
              <div className="aspect-square overflow-hidden rounded-xl bg-soft">
                <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{p.name}</h3>
              <p className="text-sm font-semibold text-mid">{p.role}</p>
              <p className="mt-3 text-sm text-ink/75 leading-relaxed">{p.bio}</p>
              {p.linkedin && (
                <a
                  href={p.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-soft text-navy hover:bg-navy hover:text-white transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink/60">
          IMPULSA es una iniciativa de Transformación Digital US
        </p>
      </div>
    </section>
  );
}

/* ---------------- POR QUÉ ---------------- */
function PorQue() {
  const rows = [
    ["Experiencia real en el mercado venezolano", "Teoría importada de otros contextos"],
    ["Resultados medibles desde el primer día", "Certificados sin seguimiento"],
    ["Diagnóstico gratuito antes de proponer", "Propuesta estándar para todos"],
    ["Seguimiento 30 días post-programa", "El taller termina y quedas solo"],
    ["Equipo de tres especialistas", "Un facilitador solo"],
    ["Precio accesible, calidad de alto nivel", "Caro o barato — rara vez los dos"],
  ];
  return (
    <section className="bg-soft py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center">¿Por qué IMPULSA?</h2>

        <div className="mt-12 rounded-2xl overflow-hidden border border-border bg-white">
          <div className="grid grid-cols-2 bg-navy text-white">
            <div className="px-5 py-4 font-bold flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-mid" /> IMPULSA
            </div>
            <div className="px-5 py-4 font-bold flex items-center gap-2 border-l border-white/10">
              <XCircle className="h-5 w-5 text-white/60" /> Otros
            </div>
          </div>
          {rows.map(([a, b], i) => (
            <div
              key={a}
              className={`grid grid-cols-2 ${i % 2 ? "bg-soft" : "bg-white"}`}
            >
              <div className="px-5 py-4 text-sm md:text-base text-ink flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-mid shrink-0 mt-0.5" />
                <span className="font-semibold text-navy">{a}</span>
              </div>
              <div className="px-5 py-4 text-sm md:text-base text-ink/70 border-l border-border flex items-start gap-2">
                <XCircle className="h-5 w-5 text-ink/40 shrink-0 mt-0.5" />
                <span>{b}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-2xl md:text-3xl font-extrabold text-navy">
          No enseñamos teoría. Compartimos lo que funciona.
        </p>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIOS ---------------- */
function Testimonios() {
  const t = [
    {
      text: "Después del taller, mi equipo de ventas cerró un 40% más en el primer mes. No esperaba resultados tan rápidos.",
      name: "Carlos M.",
      role: "Gerente Comercial",
    },
    {
      text: "Finalmente una capacitación que entiende cómo funciona el mercado venezolano. Muy recomendado.",
      name: "María A.",
      role: "Dueña de restaurante, Margarita",
    },
    {
      text: "LIS nos atendió perfecto desde el primer mensaje. Profesional y rápido.",
      name: "Roberto V.",
      role: "Supervisor de tienda",
    },
  ];
  return (
    <section className="bg-navy text-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center">
          Lo que dicen nuestros clientes
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.map((it) => (
            <figure
              key={it.name}
              className="rounded-2xl bg-white/5 border border-white/10 p-7 flex flex-col"
            >
              <Quote className="h-9 w-9 text-mid" />
              <blockquote className="mt-4 text-white/90 leading-relaxed flex-1">
                {it.text}
              </blockquote>
              <figcaption className="mt-5 pt-5 border-t border-white/10">
                <div className="font-bold text-white">{it.name}</div>
                <div className="text-sm text-white/60">{it.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={wa("Hola LIS, quiero ser el próximo caso de éxito de IMPULSA")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-white text-navy px-7 py-4 text-base font-semibold hover:bg-soft transition-colors"
          >
            Sé el próximo caso de éxito <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACTO ---------------- */
function Contacto() {
  return (
    <section id="contacto" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold">
          ¿Listo para impulsar tu empresa?
        </h2>
        <p className="mt-4 text-lg text-ink/75 max-w-2xl mx-auto">
          LIS te atiende por WhatsApp — respondemos en menos de 2 horas en horario hábil.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-navy text-white px-7 py-4 text-base font-semibold hover:bg-corp transition-colors"
          >
            <MessageCircle className="h-5 w-5" /> Escríbele a LIS
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-navy text-navy px-7 py-4 text-base font-semibold hover:bg-navy hover:text-white transition-colors"
          >
            <Instagram className="h-5 w-5" /> Síguenos en Instagram
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-soft p-6">
            <MapPin className="h-6 w-6 text-mid" />
            <h3 className="mt-3 font-bold text-navy">Dirección</h3>
            <p className="mt-1 text-sm text-ink/75">
              Calle Edison, Torre del C.C. Los Chaguaramos, Piso 19, Ofic. 19-5,
              Los Chaguaramos, Caracas 1040, DC, Venezuela
            </p>
          </div>
          <div className="rounded-xl bg-soft p-6">
            <Phone className="h-6 w-6 text-mid" />
            <h3 className="mt-3 font-bold text-navy">Teléfono</h3>
            <p className="mt-1 text-sm text-ink/75">+58 424 267 0624</p>
            <Globe className="h-6 w-6 text-mid mt-4" />
            <h3 className="mt-3 font-bold text-navy">Web</h3>
            <p className="mt-1 text-sm text-ink/75">impulsa.transformaciondigital.us</p>
          </div>
          <div className="rounded-xl bg-soft p-6">
            <Clock className="h-6 w-6 text-mid" />
            <h3 className="mt-3 font-bold text-navy">Horario de LIS</h3>
            <p className="mt-1 text-sm text-ink/75">
              Lunes a viernes 8:00 am – 6:00 pm<br />
              Sábados 9:00 am – 1:00 pm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
