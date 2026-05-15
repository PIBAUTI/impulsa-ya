import logo from "@/assets/logo-impulsa.jpg";
import { WA_DEFAULT, INSTAGRAM_URL } from "@/lib/wa";
import { Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-lg bg-white p-1.5 flex items-center justify-center">
                <img src={logo} alt="IMPULSA" className="h-full w-full object-contain" />
              </div>
              <span className="impulsa-mark text-2xl">IMPULSA</span>
            </div>
            <p className="mt-4 text-white/80 max-w-md">
              <span className="impulsa-mark text-white">Acciones que IMPULSAn</span>{" "}
              <span className="font-normal">empresas</span>
            </p>
            <p className="mt-4 text-sm text-white/60 max-w-md">
              Calle Edison, Torre del C.C. Los Chaguaramos, Piso 19, Ofic. 19-5,
              Los Chaguaramos, Caracas 1040, DC, Venezuela
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#talleres" className="hover:text-white">Talleres</a></li>
              <li><a href="#corporativo" className="hover:text-white">Corporativo</a></li>
              <li><a href="#equipo" className="hover:text-white">Equipo</a></li>
              <li><a href="#contacto" className="hover:text-white">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-3">
              <a
                href={WA_DEFAULT}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="h-10 w-10 rounded-lg bg-white/10 hover:bg-mid flex items-center justify-center transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 rounded-lg bg-white/10 hover:bg-mid flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 text-sm text-white/60">+58 424 267 0624</p>
            <p className="text-sm text-white/60">impulsa.transformaciondigital.us</p>
            <p className="mt-2 text-sm text-white/80 font-medium">LIS disponible 24/7 — Respuesta en menos de 5 minutos</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-white/50 text-center">
          © 2026 IMPULSA · Una iniciativa de Transformación Digital US · Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
}
