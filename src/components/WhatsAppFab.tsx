import { MessageCircle } from "lucide-react";
import { WA_DEFAULT } from "@/lib/wa";

export function WhatsAppFab() {
  return (
    <a
      href={WA_DEFAULT}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Habla con LIS por WhatsApp"
      className="fixed bottom-5 right-5 z-40 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition-transform flex items-center justify-center"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
