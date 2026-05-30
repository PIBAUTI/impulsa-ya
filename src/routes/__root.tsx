import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "IMPULSA — Formación Comercial de Alto Impacto | Venezuela" },
      {
        name: "description",
        content:
          "Talleres de ventas, atención al cliente y marketing digital para empresas venezolanas. Resultados desde el primer día. Escríbenos por WhatsApp.",
      },
      { name: "author", content: "IMPULSA" },
      { property: "og:site_name", content: "IMPULSA" },
      { property: "og:title", content: "IMPULSA — Formación Comercial de Alto Impacto | Venezuela" },
      {
        property: "og:description",
        content:
          "Capacitación comercial de alto impacto para equipos venezolanos que quieren resultados reales desde el primer día.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://impulsa-ya.lovable.app" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6781b821-6a68-4358-9286-dc1cb9878833/id-preview-35e821ae--445a4d21-1145-4c05-a8b5-730642586e5f.lovable.app-1778886517832.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "IMPULSA — Formación Comercial de Alto Impacto | Venezuela" },
      { name: "twitter:description", content: "Capacitación comercial de alto impacto para equipos venezolanos que quieren resultados reales desde el primer día." },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/6781b821-6a68-4358-9286-dc1cb9878833/id-preview-35e821ae--445a4d21-1145-4c05-a8b5-730642586e5f.lovable.app-1778886517832.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "IMPULSA",
          url: "https://impulsa-ya.lovable.app",
          logo: "https://impulsa-ya.lovable.app/favicon.ico",
          description: "Consultora venezolana de formación en ventas, atención al cliente y marketing digital.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Calle Edison, Torre del C.C. Los Chaguaramos, Piso 19, Ofic. 19-5",
            addressLocality: "Caracas",
            postalCode: "1040",
            addressCountry: "VE",
          },
          sameAs: ["https://instagram.com/IMPULSAcrecimiento"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "IMPULSA",
          url: "https://impulsa-ya.lovable.app",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
