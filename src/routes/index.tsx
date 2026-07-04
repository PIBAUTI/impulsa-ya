import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, Award, Handshake, Smartphone, Target, Briefcase,
  CheckCircle2, XCircle, Search, ClipboardList, Rocket, BarChart3,
  Hotel, ShoppingCart, UtensilsCrossed, Quote, MapPin, Phone, Globe,
  Clock, Instagram, MessageCircle, Linkedin, Sparkles,
  BookOpen, Eye, Compass, Scale, GraduationCap, Palmtree,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { wa, WA_DEFAULT, INSTAGRAM_URL } from "@/lib/wa";
import heroTeam from "@/assets/hero-team.jpg";
import teamGroup from "@/assets/team-group.jpg";
import juanPino from "@/assets/juan-pino.jpg";
import lisveronica from "@/assets/lisveronica.png";
import lisbarbara from "@/assets/lisbarbara.png";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://impulsa-ya.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Talleres de formación comercial IMPULSA",
          provider: { "@type": "Organization", name: "IMPULSA" },
          areaServed: "Venezuela",
          serviceType: "Capacitación en ventas, atención al cliente y marketing digital",
          description: "Programas de formación especializada para equipos comerciales y de atención al cliente.",
        }),
      },
    ],
  }),
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
        <Catalogo />
        <Corporativo />
        <Equipo />
        <Filosofia />
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
            { k: "Programas", v: "de formación especializada" },
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
      rank: "#1",
      medal: "🥇",
      icon: Award,
      title: "El cliente que no vuelve",
      sub: "Atención al cliente y experiencia del huésped",
      desc: "Descubre por qué tus clientes se van y cómo hacer que regresen. Técnicas aplicables desde mañana en tu negocio.",
      duracion: "4 horas",
      precio: "$35 USD por persona",
      grupo: "15–25 participantes · Presencial",
      cta: "IMPULSA tu atención",
      msg: "Hola LIS, quiero inscribirme al taller El cliente que no vuelve. ¿Cómo procedo?",
      featured: false,
      dirigido:
        "Dueños de negocio, gerentes, supervisores y personal de atención al cliente de comercios, restaurantes, pymes y cualquier empresa que dependa de la experiencia del cliente para crecer.",
      aprendes: [
        "Por qué tus clientes no regresan — y qué hacer desde mañana para cambiar eso",
        "Cómo leer al cliente y darle exactamente lo que necesita",
        "Las frases que arruinan una venta de servicio sin que te des cuenta",
        "Cómo convertir una queja en una oportunidad de fidelización",
        "El protocolo de atención que hace que el cliente hable bien de ti — y te recomiende",
      ],
      llevas: [
        "Protocolo de atención al cliente listo para implementar",
        "Guía de manejo de quejas y clientes difíciles",
        "Lista de verificación de experiencia del cliente para tu negocio",
      ],
      cambio:
        "Al salir del taller, tu equipo sabe exactamente cómo hacer que un cliente que entra por primera vez quiera volver — y traer a otros.",
    },
    {
      rank: "#2",
      medal: "🥈",
      icon: Handshake,
      title: "Cierra más, esfuérzate menos",
      sub: "Técnicas de venta efectiva para el mercado venezolano",
      desc: "Aprende a vender sin presión y sin guiones robóticos. Técnicas reales que funcionan con el cliente venezolano.",
      duracion: "4 horas",
      precio: "$35 USD por persona",
      grupo: "15–25 participantes · Presencial",
      cta: "IMPULSA tus ventas",
      msg: "Hola LIS, quiero inscribirme al taller Cierra más esfuérzate menos. ¿Cómo procedo?",
      featured: true,
      dirigido:
        "Vendedores, asesores comerciales, dueños de negocio, emprendedores y cualquier persona que necesite vender — productos, servicios o ideas — en el mercado venezolano de hoy.",
      aprendes: [
        "Por qué el cliente dice «lo voy a pensar» y cómo evitar que se vaya sin comprar",
        "Técnicas de cierre que funcionan sin presionar ni parecer desesperado",
        "Cómo identificar lo que el cliente realmente quiere — no lo que dice que quiere",
        "El manejo de objeciones de precio en Venezuela: «está caro» ya no te paraliza",
        "Cómo construir una conversación de venta que fluye naturalmente hacia el sí",
      ],
      llevas: [
        "Guía de técnicas de cierre adaptadas al mercado local",
        "Script de manejo de las objeciones más comunes",
        "Método de detección de necesidades en 3 preguntas",
      ],
      cambio:
        "Al salir del taller, tienes un sistema de venta claro que puedes repetir, enseñar y mejorar — sin depender del talento natural ni del día.",
    },
    {
      rank: "#3",
      medal: "🥉",
      icon: Smartphone,
      title: "Tu negocio en digital",
      sub: "Marketing digital aplicado para el mercado venezolano",
      desc: "Instagram, WhatsApp y Google para atraer clientes locales. Sin agencia. Sin presupuesto enorme.",
      duracion: "4 horas",
      precio: "$45 USD por persona",
      grupo: "15–25 participantes · Presencial",
      cta: "IMPULSA tu Mercadeo Digital",
      msg: "Hola LIS, quiero inscribirme al taller Tu negocio en digital. ¿Cómo procedo?",
      featured: false,
      dirigido:
        "Dueños de negocio, emprendedores y profesionales independientes que quieren atraer más clientes usando Instagram, WhatsApp y Google — sin agencia, sin presupuesto enorme y sin ser expertos en tecnología.",
      aprendes: [
        "Cómo configurar Instagram y WhatsApp para que trabajen por ti mientras atiendes tu negocio",
        "Qué publicar, cuándo y cómo — sin gastar horas frente al teléfono",
        "Cómo aparecer en Google cuando alguien busca lo que tú vendes en tu ciudad",
        "El método para convertir seguidores en clientes reales — no solo en likes",
        "Cómo medir si tu marketing digital está funcionando o está desperdiciando tu tiempo",
        "Automatizaciones con IA para tu negocio",
      ],
      llevas: [
        "Plan de contenido de 30 días listo para publicar",
        "Guía de configuración de WhatsApp paso a paso y bonus",
        "Checklist de perfil digital (Instagram, WhatsApp, etc.) optimizado para vender",
      ],
      cambio:
        "Al salir del taller, tienes un sistema digital básico funcionando — y sabes exactamente qué hacer cada semana para atraer clientes sin depender del voz a voz.",
    },
  ];

  return (
    <section id="talleres" className="bg-soft py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-navy text-white px-3 py-1 text-xs font-semibold tracking-wide uppercase">
            Programas destacados · Comercialización de Alto Impacto
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">Nuestros 3 talleres protagonistas</h2>
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
              <div className="flex items-center justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-white">
                  <t.icon className="h-6 w-6" />
                </div>
                <span className="text-2xl" aria-hidden>{t.medal}</span>
              </div>
              <div className="mt-4 text-xs font-bold text-mid uppercase tracking-wider">{t.rank} · Programa destacado</div>
              <h3 className="mt-1 text-xl font-bold leading-tight">{t.title}</h3>
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
                <div className="flex justify-between">
                  <dt className="text-ink/60">Grupo</dt>
                  <dd className="font-semibold text-navy text-right">{t.grupo}</dd>
                </div>
              </dl>

              <details className="mt-5 group">
                <summary className="cursor-pointer list-none flex items-center justify-between rounded-lg bg-soft px-4 py-2.5 text-sm font-semibold text-navy hover:bg-soft/70 transition-colors">
                  Ver detalle completo
                  <ArrowRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                </summary>
                <div className="mt-4 space-y-4 text-sm">
                  <div>
                    <h4 className="font-bold text-navy">¿A quién va dirigido?</h4>
                    <p className="mt-1 text-ink/75 leading-relaxed">{t.dirigido}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">¿Qué vas a aprender?</h4>
                    <ul className="mt-2 space-y-1.5">
                      {t.aprendes.map((a) => (
                        <li key={a} className="flex gap-2 text-ink/80 leading-relaxed">
                          <span className="text-mid font-bold shrink-0">›</span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-navy">¿Qué te llevas?</h4>
                    <ul className="mt-2 space-y-1.5">
                      {t.llevas.map((l) => (
                        <li key={l} className="flex gap-2 text-ink/80 leading-relaxed">
                          <CheckCircle2 className="h-4 w-4 text-mid shrink-0 mt-0.5" />
                          <span>{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg bg-navy/5 border-l-4 border-navy p-3">
                    <p className="text-ink italic leading-relaxed">«{t.cambio}»</p>
                  </div>
                </div>
              </details>

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

        {/* Certificación */}
        <div className="mt-10 rounded-2xl bg-white border border-border p-6 flex items-start gap-4">
          <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-soft text-navy">
            <GraduationCap className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-navy">Certificación IMPULSA</h3>
            <p className="mt-1 text-ink/75">
              Todos los talleres otorgan un <span className="font-semibold text-navy">Certificado de participación IMPULSA</span> físico y digital.
            </p>
          </div>
        </div>

        {/* Puente hacia corporativo */}
        <div className="mt-8 rounded-2xl border-2 border-dashed border-navy/30 bg-white p-7 md:p-8 text-center">
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
        <div className="mt-8 rounded-2xl bg-navy text-white p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-mid">🎯 Pack 3 Talleres — Formación comercial de alto impacto</div>
              <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-white">
                $100 USD por persona · 12 horas
              </h3>
              <p className="mt-1 text-white/80">
                Ahorra <span className="font-bold text-white">$25</span> vs. precio individual. 3 sesiones de 4 horas — en días consecutivos o distribuidos.
              </p>
              <p className="mt-2 text-sm text-white/75 max-w-2xl">
                El pack completo de IMPULSA: atención al cliente, técnicas de venta y marketing digital. Todo lo que un negocio venezolano necesita para crecer de forma sostenida.
              </p>
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
          <ul className="mt-6 grid gap-2 md:grid-cols-3 text-sm text-white/85 border-t border-white/15 pt-5">
            <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-mid shrink-0 mt-0.5" /> Prioridad en inscripción a otros talleres</li>
            <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-mid shrink-0 mt-0.5" /> Grupo de seguimiento WhatsApp por 30 días</li>
            <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-mid shrink-0 mt-0.5" /> Sesión grupal de seguimiento a las 4 semanas (1h)</li>
          </ul>
        </div>

        {/* Modalidad empresarial intensiva */}
        <div className="mt-8 rounded-2xl border-2 border-mid bg-white p-7 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-mid">Modalidad empresarial intensiva</div>
            <h3 className="mt-1 text-xl md:text-2xl font-bold text-navy">
              Programa completo en dos días — para empresas de todo el país en Margarita
            </h3>
            <p className="mt-2 text-sm text-ink/75 max-w-2xl">
              Llevamos el pack completo a tu empresa en formato intensivo de dos días seguidos. Contáctanos para más información.
            </p>
          </div>
          <a
            href={wa("Hola LIS, quiero información sobre el programa completo de dos días para mi empresa")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center gap-2 rounded-lg bg-navy text-white px-5 py-3 text-sm font-semibold hover:bg-corp transition-colors"
          >
            Quiero más información <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Vivencias empresariales — franja destacada */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-navy via-corp to-navy text-white p-8 md:p-10 text-center">
          <Palmtree className="h-10 w-10 mx-auto text-mid" />
          <p className="mt-4 text-xl md:text-2xl font-extrabold uppercase tracking-wide leading-tight">
            Organizamos vivencias empresariales en Margarita para transformar tus equipos de atención y comerciales.
          </p>
          <a
            href={wa("Hola LIS, quiero información sobre vivencias empresariales en Margarita para mi equipo")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white text-navy px-6 py-3.5 text-base font-semibold hover:bg-soft transition-colors"
          >
            Quiero vivir la experiencia <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        {/* Próximo taller */}
        <div className="mt-8 rounded-2xl border border-border bg-white p-7 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
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

/* ---------------- CATÁLOGO COMPLETO ---------------- */
function Catalogo() {
  const programas = [
    { n: 1, name: "Atención al cliente y experiencia del huésped", status: "Disponible" },
    { n: 2, name: "Técnicas de venta para el comercio", status: "Disponible" },
    { n: 3, name: "Mercadeo digital para negocios", status: "Disponible" },
    { n: 4, name: "Liderazgo para supervisores y gerentes medios", status: "Próximamente" },
    { n: 5, name: "Gestión del tiempo y productividad personal", status: "Próximamente" },
    { n: 6, name: "Finanzas y flujo de caja para empresas y emprendedores", status: "Próximamente" },
    { n: 7, name: "Comunicación efectiva e inteligencia emocional", status: "Próximamente" },
    { n: 8, name: "IA y automatización para negocios", status: "Próximamente" },
    { n: 9, name: "Transformación digital para la empresa", status: "Próximamente" },
  ];
  return (
    <section id="catalogo" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-soft text-navy px-3 py-1 text-xs font-semibold tracking-wide uppercase">
            <BookOpen className="h-3.5 w-3.5" /> Catálogo completo
          </span>
          <h2 className="mt-4 text-2xl md:text-4xl font-extrabold">Todos nuestros programas</h2>
          <p className="mt-3 text-ink/70">
            La amplitud de la oferta IMPULSA. Los 3 primeros están disponibles ahora; los demás se incorporan progresivamente.
          </p>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {programas.map((p) => {
            const isActive = p.status === "Disponible";
            return (
              <li
                key={p.n}
                className={`rounded-xl border p-4 flex items-start gap-3 transition-colors ${
                  isActive
                    ? "border-navy/30 bg-soft"
                    : "border-border bg-white"
                }`}
              >
                <div
                  className={`shrink-0 h-9 w-9 rounded-lg flex items-center justify-center font-bold text-sm ${
                    isActive ? "bg-navy text-white" : "bg-soft text-ink/70"
                  }`}
                >
                  {p.n}
                </div>
                <div className="min-w-0">
                  <div className={`font-semibold leading-snug ${isActive ? "text-navy" : "text-ink/70"}`}>
                    {p.name}
                  </div>
                  <div
                    className={`mt-1 text-xs font-semibold uppercase tracking-wider ${
                      isActive ? "text-mid" : "text-ink/60"
                    }`}
                  >
                    {p.status}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
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
    { icon: Hotel, label: "Hoteles y resorts", note: "Programas de 1 a 3 días · ROI medible en 30 días" },
    { icon: ShoppingCart, label: "Cadenas y supermercados", note: "Por tienda o equipo completo · Seguimiento incluido" },
    { icon: UtensilsCrossed, label: "Restaurantes y franquicias", note: "Desde media jornada · Resultados desde el primer turno" },
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
              <div className="mt-2 text-sm text-mid font-semibold">{s.note}</div>
              <div className="mt-2 text-xs italic text-white/70">Programa diseñado exclusivamente para tu equipo</div>
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
      role: "Consultor Senior y Director de Programas",
      bio: "Ingeniero, MBA y Abogado. 25+ años liderando equipos comerciales en Venezuela y LATAM. Schlumberger, Movilnet, RCTV, Cirion Tech. y CEO de Transformación Digital US.",
      linkedin: "https://www.linkedin.com/",
    },
    {
      img: lisveronica,
      name: "Lisverónica Ramos",
      role: "Consultora Comercial y Facilitadora",
      bio: "TSU Mercadotecnia. Especialista en estrategias comerciales y desarrollo de equipos de venta. Experiencia en cadenas nacionales y marcas de lujo.",
    },
    {
      img: lisbarbara,
      name: "Lisbárbara Ramos",
      role: "Consultora de Servicio y Facilitadora",
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

/* ---------------- FILOSOFÍA (Misión, Visión, Valores) ---------------- */
function Filosofia() {
  const valores = [
    {
      title: "Resultados sobre diplomas",
      desc: "No medimos el éxito por horas de clase sino por lo que cambia en el negocio del cliente. Si no hay resultado, fallamos nosotros.",
    },
    {
      title: "Honestidad comercial",
      desc: "No vendemos lo que no podemos entregar. No prometemos transformaciones mágicas. Prometemos herramientas reales a aplicar con disciplina.",
    },
    {
      title: "Crecimiento continuo",
      desc: "Le exigimos a nuestros clientes que mejoren. Nos exigimos lo mismo. IMPULSA se actualiza, aprende y evoluciona con el mercado.",
    },
    {
      title: "Cercanía sin perder profesionalismo",
      desc: "Conectamos como personas. Entregamos con excelencia.",
    },
  ];
  return (
    <section id="filosofia" className="bg-navy text-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold tracking-wide uppercase">
            <Compass className="h-3.5 w-3.5" /> Nuestra filosofía
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white">Quiénes somos por dentro</h2>
          <p className="mt-4 text-lg text-white/80">
            Lo que nos mueve, hacia dónde vamos y los principios con los que trabajamos todos los días.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-7">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-mid text-navy">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-2xl font-extrabold text-white">Misión</h3>
            <p className="mt-3 text-white/85 leading-relaxed">
              Transformar equipos comerciales en generadores de crecimiento real, a través de capacitación y mentoría orientadas a resultados y aplicables desde el primer día.
            </p>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-7">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-mid text-navy">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-2xl font-extrabold text-white">Visión</h3>
            <p className="mt-3 text-white/85 leading-relaxed">
              Ser la consultora de formación comercial de referencia en Venezuela para 2028, reconocida por transformar el desempeño de empresas y equipos mediante metodologías de alto impacto, optimización de procesos y resultados medibles, formando una nueva generación de profesionales comerciales y de servicio altamente efectivos.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <div className="flex items-center gap-3">
            <Scale className="h-6 w-6 text-mid" />
            <h3 className="text-2xl font-extrabold text-white">Valores</h3>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {valores.map((v, i) => (
              <div key={v.title} className="rounded-2xl bg-white/10 border border-white/10 p-6 hover:bg-white/[0.13] transition-colors">
                <div className="text-xs font-bold text-mid uppercase tracking-wider">0{i + 1}</div>
                <h4 className="mt-2 text-lg font-bold text-white">{v.title}</h4>
                <p className="mt-2 text-white/80 leading-relaxed text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
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
              <XCircle className="h-5 w-5 text-white/80" /> Otros
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
                <XCircle className="h-5 w-5 text-ink/60 shrink-0 mt-0.5" />
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
      text: "Después del taller, mi equipo de ventas cerró un 23% más en el primer mes. No esperaba resultados tan rápidos.",
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
                <div className="text-sm text-white/80">{it.role}</div>
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
          ¡Contáctanos ahora y tu equipo lo hará así también!
        </p>
        <p className="mt-3 text-base text-ink/70 max-w-2xl mx-auto">
          LIS te atiende por WhatsApp — respondemos en menos de 2 minutos.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={WA_DEFAULT}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-navy text-white px-7 py-4 text-base font-semibold hover:bg-corp transition-colors"
          >
            <MessageCircle className="h-5 w-5" /> 💬 Respondo en 2 minutos
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
            <a
              href={WA_DEFAULT}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-sm text-navy font-semibold hover:text-mid transition-colors"
            >
              +58 424 267 0624
            </a>
            <Globe className="h-6 w-6 text-mid mt-4" />
            <h3 className="mt-3 font-bold text-navy">Web</h3>
            <a
              href="https://www.impulsa.com.ve"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-sm text-navy font-semibold hover:text-mid transition-colors"
            >
              www.impulsa.com.ve
            </a>
          </div>
          <div className="rounded-xl bg-soft p-6">
            <Clock className="h-6 w-6 text-mid" />
            <h3 className="mt-3 font-bold text-navy">Atención inmediata</h3>
            <p className="mt-1 text-sm text-ink/75">
              24 horas al día · 7 días a la semana
            </p>
            <p className="mt-2 text-xs italic text-ink/60">Atendemos en pocos minutos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
