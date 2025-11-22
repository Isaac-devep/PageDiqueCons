// src/pages/CONTACT.tsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  MapPin,
  Send,
  CheckCircle2,
  AlertTriangle,
  CalendarClock,
} from "lucide-react";
import logo from "@/assets/logo-engle.png";

/* =======================================================================
   EmailJS envs SIN import.meta (compatible con bundles IIFE)
   - Puedes definirlas en index.html como:
     <script>
       window.__VITE_ENV__ = {
         VITE_EMAILJS_SERVICE_ID:  "service_d9mrm4a",
         VITE_EMAILJS_TEMPLATE_ID: "template_fs1fzaf",
         VITE_EMAILJS_PUBLIC_KEY:  "O8S04cpTw17vV5IoD",
       };
     </script>
   ======================================================================= */

type EmailJsEnv = {
  VITE_EMAILJS_SERVICE_ID?: string;
  VITE_EMAILJS_TEMPLATE_ID?: string;
  VITE_EMAILJS_PUBLIC_KEY?: string;
};

declare global {
  interface Window {
    __VITE_ENV__?: EmailJsEnv;
    VITE_EMAILJS_SERVICE_ID?: string;
    VITE_EMAILJS_TEMPLATE_ID?: string;
    VITE_EMAILJS_PUBLIC_KEY?: string;
  }
}

const env: EmailJsEnv = window.__VITE_ENV__ || {
  VITE_EMAILJS_SERVICE_ID: window.VITE_EMAILJS_SERVICE_ID,
  VITE_EMAILJS_TEMPLATE_ID: window.VITE_EMAILJS_TEMPLATE_ID,
  VITE_EMAILJS_PUBLIC_KEY: window.VITE_EMAILJS_PUBLIC_KEY,
};

const SERVICE_ID = env.VITE_EMAILJS_SERVICE_ID || "";
const TEMPLATE_ID = env.VITE_EMAILJS_TEMPLATE_ID || "";
const PUBLIC_KEY = env.VITE_EMAILJS_PUBLIC_KEY || "";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  // antispam simple
  const [a] = useState(() => Math.floor(Math.random() * 6) + 2);
  const [b] = useState(() => Math.floor(Math.random() * 6) + 2);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setOk(null);
    setErr(null);

    if (!formRef.current) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setErr("Contact service not configured (missing EmailJS envs).");
      console.error("Missing EmailJS envs", {
        SERVICE_ID,
        TEMPLATE_ID,
        PUBLIC_KEY,
      });
      return;
    }

    const fd = new FormData(formRef.current);
    const sum = Number(fd.get("antispam"));
    if (sum !== a + b) {
      setErr("Please solve the anti-spam question correctly.");
      return;
    }

    setLoading(true);
    try {
      const payload = {
        from_name: String(fd.get("name") || ""),
        from_email: String(fd.get("email") || ""),
        subject:
          String(fd.get("subject") || "") ||
          "30-minute project review (CAD / Revit / BIM / GIS)",
        message: String(fd.get("message") || ""),
        time: new Date().toISOString(),
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, {
        publicKey: PUBLIC_KEY,
      });
      setOk("Your request has been sent successfully.");
      formRef.current.reset();
    } catch (e: any) {
      console.error(e);
      setErr("We couldn't send your message. Please try again shortly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header mínimo */}
      <header className="border-b border-[#00ACBD]/20 glass fixed w-full top-0 z-50 bg-white/90 backdrop-blur">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#/" className="inline-flex items-center gap-3">
            <img
              src={logo}
              alt="DIQUE CONSULTORÍA S.A.S Bic"
              className="h-10 md:h-12 w-auto object-contain select-none"
            />
          </a>
          <a
            href="#/"
            className="text-sm font-semibold text-neutral-700 hover:text-[#00ACBD]"
          >
            Back to Home
          </a>
        </nav>
      </header>

      {/* Contenido */}
      <main className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <p className="text-xs font-bold text-[#00ACBD] uppercase tracking-wider mb-2">
            Project review
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-neutral-900 mb-3">
            Book a 30-minute
            <br />
            project review
          </h1>
          <p className="text-neutral-600 mb-10 max-w-3xl">
            A focused call to review your{" "}
            <span className="font-semibold">CAD drafting</span>,{" "}
            <span className="font-semibold">Revit modelling</span>,{" "}
            <span className="font-semibold">BIM coordination</span>, or{" "}
            <span className="font-semibold">GIS analysis</span> needs. We align
            on scope, deliverables and next steps before you commit.
          </p>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* Datos + qué pasa en la review */}
            <Card className="p-6 md:col-span-1 bg-white/90 backdrop-blur border-2 border-transparent hover:border-[#00ACBD]/30 transition-all space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#00ACBD]" />
                  <div className="text-sm text-neutral-700">
                    Barranquilla – Colombia • US AEC teams (nearshore)
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Send className="h-5 w-5 text-[#008BBE]" />
                  <a
                    className="text-sm font-semibold hover:text-[#00ACBD]"
                    href="mailto:info@diqueconsultoria.com"
                  >
                    info@diqueconsultoria.com
                  </a>
                </div>
                <div className="text-xs text-neutral-500">
                  Business hours: Mon–Fri 9:00–18:00 (GMT-5)
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-3">
                <div className="flex items-center gap-2">
                  <CalendarClock className="h-4 w-4 text-[#00ACBD]" />
                  <h2 className="text-xs font-bold uppercase tracking-wide text-neutral-800">
                    What happens in the 30-minute review?
                  </h2>
                </div>
                <ul className="text-xs text-neutral-700 space-y-1 list-disc pl-4">
                  <li>Quick context on your project and team.</li>
                  <li>Clarify scope, timelines and constraints.</li>
                  <li>
                    Identify where CAD / Revit / BIM / GIS adds the most value.
                  </li>
                  <li>Agree next steps and potential engagement model.</li>
                </ul>
              </div>
            </Card>

            {/* Formulario */}
            <Card className="p-6 md:col-span-2 bg-white/95 backdrop-blur border-2 border-transparent hover:border-[#00ACBD]/30 transition-all">
              <h2 className="text-2xl md:text-3xl font-black mb-2">
                Tell us about your project
              </h2>
              <p className="text-sm text-neutral-600 mb-6">
                Complete this form and we will reply with proposed time slots
                for a 30-minute review.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Full name*
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#00ACBD]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Work email*
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#00ACBD]"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#00ACBD]"
                    placeholder="30-minute project review (CAD / Revit / BIM / GIS)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1">
                    Message*
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#00ACBD] resize-y text-sm"
                    placeholder="Briefly describe your project: location, discipline (Arch/Str/MEP/GIS), stage (design / construction / as-built), and expected timelines."
                  />
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-sm text-neutral-600">
                    Anti-spam: {a} + {b} = ?
                  </span>
                  <input
                    name="antispam"
                    type="number"
                    required
                    className="w-24 rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-[#00ACBD]"
                  />
                </div>

                {ok && (
                  <div className="flex items-center gap-2 text-green-700 text-sm">
                    <CheckCircle2 className="h-4 w-4" /> {ok}
                  </div>
                )}
                {err && (
                  <div className="flex items-center gap-2 text-red-600 text-sm">
                    <AlertTriangle className="h-4 w-4" /> {err}
                  </div>
                )}

                <div className="pt-2">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="px-6 bg-[#00ACBD] hover:bg-[#009ab0] w-full md:w-auto font-extrabold tracking-wide"
                  >
                    {loading
                      ? "Sending request…"
                      : "Book 30-minute project review"}
                  </Button>
                  <p className="mt-2 text-[11px] text-neutral-500">
                    We aim to reply within 1–2 business days. No obligation to
                    proceed after the call.
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}