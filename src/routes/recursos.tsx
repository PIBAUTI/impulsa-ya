import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/recursos")({
  head: () => ({
    meta: [
      { title: "Recursos para equipos comerciales — IMPULSA" },
      { name: "description", content: "Tips, casos y herramientas prácticas para que tu equipo venda más y atienda mejor a los clientes." },
      { property: "og:title", content: "Recursos para equipos comerciales — IMPULSA" },
      { property: "og:description", content: "Tips, casos y herramientas prácticas para que tu equipo venda más y atienda mejor a los clientes." },
      { property: "og:url", content: "https://impulsa-ya.lovable.app/recursos" },
      { name: "twitter:title", content: "Recursos para equipos comerciales — IMPULSA" },
      { name: "twitter:description", content: "Tips, casos y herramientas prácticas para que tu equipo venda más y atienda mejor a los clientes." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "https://impulsa-ya.lovable.app/recursos" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Recursos para equipos comerciales",
          url: "https://impulsa-ya.lovable.app/recursos",
          description: "Tips, casos y herramientas para vender más y atender mejor.",
        }),
      },
    ],
  }),
  component: Recursos,
});

const posts = [
  {
    cat: "Ventas",
    title: "5 frases que están matando tus cierres (y cómo reemplazarlas)",
    excerpt: "Pequeños ajustes en el lenguaje que tu equipo usa pueden cambiar el resultado de la conversación.",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=70&auto=format&fit=crop",
  },
  {
    cat: "Atención",
    title: "Por qué tus clientes no regresan (y casi nunca te lo dicen)",
    excerpt: "Los silencios del cliente son la señal más clara. Aprende a leerlos antes de perderlos.",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=70&auto=format&fit=crop",
  },
  {
    cat: "Digital",
    title: "Instagram para negocios locales en Venezuela: lo esencial",
    excerpt: "Sin agencia, sin presupuesto enorme. Lo que sí funciona hoy con el cliente venezolano.",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=70&auto=format&fit=crop",
  },
];

function Recursos() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <Header />
      <main className="pt-16">
        <section className="bg-navy text-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
              Recursos para equipos comerciales
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl">
              Tips, casos y herramientas para vender más y atender mejor.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              {posts.map((p) => (
                <article key={p.title} className="rounded-2xl border border-border bg-white overflow-hidden hover:shadow-[0_8px_30px_rgba(13,27,75,0.08)] transition-all flex flex-col">
                  <div className="aspect-[16/10] overflow-hidden bg-soft">
                    <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-mid">{p.cat}</span>
                    <h2 className="mt-2 text-lg font-bold text-navy leading-snug">{p.title}</h2>
                    <p className="mt-3 text-sm text-ink/75 flex-1">{p.excerpt}</p>
                    <button className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-mid">
                      Leer más <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
