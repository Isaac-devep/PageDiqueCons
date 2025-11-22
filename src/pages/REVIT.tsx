// src/pages/REVIT.tsx
import { useRef, useState } from "react";
import {
  Building2,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Target,
  Award,
  Users,
  Zap,
  RotateCcw,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import logo from "@/assets/logo-engle.png";
import revitCover from "@/assets/revitservices.jpg";
import whatIsRevitImg from "@/assets/whatisrevit.jpg";
import revite from "@/assets/ourrevitmodellingservice.jpg";
import emailjs from "@emailjs/browser";

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

// Mapa centrado en Barranquilla (puedes cambiar el texto por la dirección exacta)
const MAP_QUERY = encodeURIComponent("Barranquilla, Atlántico, Colombia");

export default function RevitPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ----- Estado para el formulario del bloque de contacto -----
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  // Antispam simple
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
          String(fd.get("subject") || "") || "Revit modeling enquiry (website)",
        message:
          `Location: ${String(fd.get("location") || "N/A")}\n\n` +
          String(fd.get("message") || ""),
        time: new Date().toISOString(),
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, payload, {
        publicKey: PUBLIC_KEY,
      });
      setOk("Your message has been sent successfully.");
      formRef.current.reset();
    } catch (e: any) {
      console.error(e);
      setErr("We couldn't send your message. Please try again shortly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Header */}
      <header className="border-b border-[#00ACBD]/20 glass fixed w-full top-0 z-50 shadow-lg bg-white/90 backdrop-blur">
        <nav className="container mx-auto px-4 py-5 flex items-center justify-between">
          <a href="#/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="DIQUE CONSULTORÍA S.A.S Bic"
              className="h-10 md:h-12 lg:h-14 xl:h-16 w-auto select-none object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#/"
              className="text-neutral-700 hover:text-[#00ACBD] transition-all font-semibold relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00ACBD] to-[#008BBE] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#/services/revit"
              className="text-neutral-700 hover:text-[#00ACBD] transition-all font-semibold relative group"
            >
              Revit
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00ACBD] to-[#008BBE] group-hover:w-full transition-all duration-300"></span>
            </a>
            <Button asChild variant="red" className="shadow-xl">
              <a href="#/contact">Contact Us</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-[#00ACBD]/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-[#0077BE]" />
            ) : (
              <Menu className="h-6 w-6 text-[#0077BE]" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass border-t border-[#00ACBD]/20 px-4 py-6 space-y-4 bg-white">
            <a
              href="#/"
              className="block text-neutral-700 hover:text-[#00ACBD] transition-colors py-3 font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#/services/revit"
              className="block text-neutral-700 hover:text-[#00ACBD] transition-colors py-3 font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              Revit
            </a>
            <Button asChild variant="red" className="w-full">
              <a href="#/contact">Contact Us</a>
            </Button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="pt-40 pb-10 px-4 relative overflow-hidden bg-neutral-50">
        <div className="container mx-auto max-w-6xl">
          <p className="text-xs font-bold text-[#00ACBD] uppercase tracking-wider mb-2">
            Revit modeling for US AEC teams
          </p>
          <h1 className="text-4xl md:text-5xl font-black leading-tight">
            Revit modeling services for US AEC teams
          </h1>

          {/* Big image */}
          <div className="mt-8 rounded-2xl overflow-hidden border border-neutral-200">
            <div className="aspect-[16/7]">
              <img
                src={revitCover}
                alt="Revit modeling building model - DIQUE"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          <p className="mt-8 text-neutral-700 max-w-3xl">
            We build <strong>LOD-appropriate Revit models</strong> for US
            architects, engineers and contractors—covering architecture,
            structure and MEP. Our team works in your templates and BIM
            Execution Plans to deliver{" "}
            <strong>clean, clash-ready geometry</strong>, well-structured{" "}
            <strong>families, views, sheets and schedules</strong>, and reliable{" "}
            <strong>as-built/record models</strong> ready for BIM 360 / ACC,
            Navisworks and downstream uses.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[
              {
                value: "300+",
                label: "Revit projects delivered",
                icon: Target,
                color: "#00ACBD",
              },
              {
                value: "15+",
                label: "Years in BIM production",
                icon: Award,
                color: "#0077BE",
              },
              {
                value: "100+",
                label: "US & global AEC clients",
                icon: Users,
                color: "#008BBE",
              },
              {
                value: "LOD 100–400",
                label: "Typical modeling range",
                icon: Zap,
                color: "#ED1844",
              },
            ].map((m, i) => (
              <Card
                key={i}
                className="p-5 bg-white/90 border-2 border-transparent hover:border-[#00ACBD]/30 transition-all"
                style={{ boxShadow: `0 10px 30px -10px ${m.color}20` }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="p-2 rounded-xl"
                    style={{
                      background: `linear-gradient(135deg, ${m.color}20, ${m.color}10)`,
                    }}
                  >
                    <m.icon className="h-5 w-5" style={{ color: m.color }} />
                  </div>
                  <div className="text-2xl font-black">{m.value}</div>
                </div>
                <div className="text-neutral-600 text-sm mt-2 font-semibold">
                  {m.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What is Revit modeling */}
      <section className="py-16 px-4 bg-[#D9FF00]/60">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              What is Revit modeling?
            </h2>

            <p className="text-neutral-800">
              Revit modeling is the core of BIM delivery:{" "}
              <strong>data-rich 3D models</strong> that coordinate architecture,
              structure and MEP in a single source of truth. A well-structured
              model supports clear design intent, constructability, quantity
              takeoffs and facility management.
            </p>

            <h3 className="mt-6 font-extrabold">
              Key benefits for US AEC teams:
            </h3>
            <ul className="mt-3 space-y-2 text-neutral-800 list-disc pl-5">
              <li>
                Clear, coordinated models that reduce RFIs and field clashes.
              </li>
              <li>
                LOD-driven content (<strong>LOD 100–400/500</strong>) aligned
                with contracts and BIM Execution Plans.
              </li>
              <li>
                Reliable <strong>schedules and quantities</strong> for cost and
                phasing.
              </li>
              <li>
                <strong>As-built / record models</strong> ready for handover and
                FM platforms.
              </li>
            </ul>
          </div>

          {/* Imagen */}
          <div className="rounded-2xl overflow-hidden border border-neutral-200">
            <div className="aspect-[16/10]">
              <img
                src={whatIsRevitImg}
                alt="Exploded Revit model - What is Revit modeling"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Revit modeling service */}
      <section className="py-16 px-4 bg-neutral-950">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">
          {/* Imagen */}
          <div className="rounded-2xl overflow-hidden border border-neutral-800">
            <div className="aspect-[16/10]">
              <img
                src={revite}
                alt="Revit modeling service preview"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Texto */}
          <div>
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-white">
              Our Revit modeling service
            </h2>

            <p className="text-neutral-300">
              We plug into your BIM environment as a{" "}
              <strong>nearshore Revit production partner</strong>, delivering
              disciplined models that match your templates, naming conventions,
              worksets and shared coordinates. From schematic through as-built,
              we keep your Revit content lean, coordinated and clash-ready.
            </p>

            <h3 className="mt-6 font-extrabold text-white">What we deliver:</h3>
            <ul className="mt-3 space-y-2 text-neutral-300 list-disc pl-5">
              <li>
                <span className="font-semibold text-white">
                  LOD-based models:
                </span>{" "}
                Authoring and upgrading models to the required{" "}
                <strong>LOD 100–400/500</strong> for Arch / Struct / MEP.
              </li>
              <li>
                <span className="font-semibold text-white">
                  Revit families & content:
                </span>{" "}
                Custom families, types and parameters aligned with your
                libraries and standards.
              </li>
              <li>
                <span className="font-semibold text-white">
                  Sheets, views & schedules:
                </span>{" "}
                View templates, sheets, filters and schedules configured for
                CDs, coordination and quantities.
              </li>
              <li>
                <span className="font-semibold text-white">
                  As-built / record models:
                </span>{" "}
                Models updated from redlines, RFIs, field changes and point
                clouds for closeout and FM.
              </li>
              <li>
                <span className="font-semibold text-white">
                  BIM 360 / ACC workflows:
                </span>{" "}
                Collaboration with cloud worksharing, model publishing and issue
                tracking.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits & Solutions */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-extrabold mb-3">
              Designed for production, not just visuals
            </h3>
            <p className="text-neutral-700">
              Our focus is on{" "}
              <strong>constructible, maintainable models</strong>. We respect
              your office standards, coordinate closely with design teams and
              keep models lean so they perform well in BIM 360, Navisworks and
              on-site devices.
            </p>
          </div>

          <div className="border-t md:border-t-0 md:border-l border-neutral-200 md:pl-8 pt-6 md:pt-0">
            <h4 className="font-extrabold text-lg mb-2">
              Efficiency and accuracy
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>Repeatable modeling workflows aligned with your BEP.</li>
              <li>
                Solid <strong>quantity takeoffs</strong> and schedules for cost
                and phasing.
              </li>
              <li>
                Fewer surprises in the field thanks to clash-ready geometry and
                coordination.
              </li>
            </ul>

            <h4 className="font-extrabold text-lg mt-5 mb-2">
              Comprehensive Revit solutions
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>
                Support across <strong>Arch / Struct / MEP</strong> scopes.
              </li>
              <li>
                From concept massing to{" "}
                <strong>record / as-built models</strong>.
              </li>
              <li>
                Interoperability with CAD, Civil 3D, IFC and Navisworks for
                broader project teams.
              </li>
            </ul>

            <div className="mt-6 space-y-3">
              {[
                {
                  q: "How do you handle LOD and standards?",
                  a: "We start with your BIM Execution Plan, templates and sample sheets to define LOD, naming, worksets and model breakdown before production begins.",
                },
                {
                  q: "What is your typical Revit modeling process?",
                  a: "Standards & scope → LOD plan → Core model setup → Iterative modeling & reviews → QA/QC & clash review → Package delivery & publishing to BIM 360/ACC.",
                },
                {
                  q: "Which deliverables can we expect?",
                  a: "RVT models, linked models, NWC/NWD, IFC, PDFs for sheets, and Excel/CSV exports for schedules and quantities as required.",
                },
                {
                  q: "Do you work directly in BIM 360 / ACC?",
                  a: "Yes. We can join your CDE, follow your permissions structure, and work with issue tracking and review workflows already in place.",
                },
              ].map((item, i) => (
                <details
                  key={i}
                  className="rounded-xl border border-neutral-200 px-4 py-3"
                >
                  <summary className="cursor-pointer font-semibold">
                    {item.q}
                  </summary>
                  <p className="mt-2 text-neutral-700">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 bg-neutral-950 text-neutral-200">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="text-[#D9FF00] text-4xl leading-none mb-4">“</div>
          <p className="max-w-3xl mx-auto">
            “DIQUE is dedicated to providing Revit modeling services that make
            BIM practical for project delivery. Our team builds disciplined
            models, aligned with US standards and your office templates, so your
            coordinators, estimators and field teams can trust what they see.”
          </p>
          <div className="mt-6 text-sm text-neutral-400 font-semibold">
            Director, DIQUE Consultoría
          </div>
        </div>
      </section>

      {/* Contact block (mapa izquierda / formulario derecha) */}
      <section id="revit-contact" className="py-16 px-4 bg-[#D9FF00]">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-start">
          {/* Mapa a la izquierda */}
          <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white">
            <div className="aspect-[4/3]">
              <iframe
                title="DIQUE Consultoría - Barranquilla"
                src={`https://www.google.com/maps?q=${MAP_QUERY}&hl=en&z=14&output=embed`}
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* Formulario a la derecha */}
          <Card
            className="p-0 bg-transparent border-0 
  shadow-none hover:shadow-none focus:shadow-none focus-visible:shadow-none focus-within:shadow-none 
  ring-0 hover:ring-0 
  transition-none
  [box-shadow:none] hover:[box-shadow:none] focus:[box-shadow:none] focus-within:[box-shadow:none]
  group-hover:shadow-none"
          >
            <h3 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">
              See LOD examples & <br />
              enquire about our
              <br />
              Revit modeling service
            </h3>

            <p className="text-neutral-800/90 mt-4 max-w-xl">
              Share your scope, markets and typical LOD requirements. We’ll send
              you relevant LOD examples and schedule a short call to review how
              we can support your Revit production.
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-8 space-y-8"
            >
              {/* Name / Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <label className="text-sm font-medium tracking-wide">
                    Your Name*
                  </label>
                  <input
                    name="name"
                    required
                    className="mt-2 w-full bg-transparent rounded-none cursor-text border-0 border-b border-neutral-900 px-0 py-2 caret-neutral-900 selection:bg-neutral-900/10 focus:outline-none focus:ring-0 focus:shadow-none focus:border-0 focus:border-b-2 focus:border-black"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium tracking-wide">
                    Your Email*
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full bg-transparent rounded-none cursor-text border-0 border-b border-neutral-900 px-0 py-2 caret-neutral-900 selection:bg-neutral-900/10 focus:outline-none focus:ring-0 focus:shadow-none focus:border-0 focus:border-b-2 focus:border-black"
                  />
                </div>
              </div>

              {/* Project Location */}
              <div className="flex flex-col">
                <label className="text-sm font-medium tracking-wide">
                  Project Location*
                </label>
                <input
                  name="location"
                  required
                  className="mt-2 w-full bg-transparent rounded-none cursor-text border-0 border-b border-neutral-900 px-0 py-2 caret-neutral-900 selection:bg-neutral-900/10 focus:outline-none focus:ring-0 focus:shadow-none focus:border-0 focus:border-b-2 focus:border-black"
                />
              </div>

              {/* Subject (opcional visible) */}
              <div className="flex flex-col">
                <label className="text-sm font-medium tracking-wide">
                  Subject
                </label>
                <input
                  name="subject"
                  placeholder="Revit modeling enquiry"
                  className="mt-2 w-full bg-transparent rounded-none cursor-text border-0 border-b border-neutral-900 px-0 py-2 caret-neutral-900 selection:bg-neutral-900/10 focus:outline-none focus:ring-0 focus:shadow-none focus:border-0 focus:border-b-2 focus:border-black"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="text-sm font-medium tracking-wide">
                  How can we help?*
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="mt-2 w-full bg-transparent rounded-none cursor-text border-0 border-b border-neutral-900 px-0 py-2 resize-none caret-neutral-900 selection:bg-neutral-900/10 focus:outline-none focus:ring-0 focus:shadow-none focus:border-0 focus:border-b-2 focus:border-black"
                  placeholder="Tell us about your discipline (Arch/Struct/MEP), LOD targets, templates and deadlines."
                />
              </div>

              {/* Anti-spam */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-sm font-medium tracking-wide">
                  <span>
                    What is {a} + {b}?
                  </span>
                  <RotateCcw className="h-4 w-4" aria-hidden />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-neutral-700">
                    Type your answer
                  </label>
                  <input
                    name="antispam"
                    inputMode="numeric"
                    required
                    className="mt-2 w-full bg-transparent rounded-none cursor-text border-0 border-b border-neutral-900 px-0 py-2 caret-neutral-900 selection:bg-neutral-900/10 focus:outline-none focus:ring-0 focus:shadow-none focus:border-0 focus:border-b-2 focus:border-black"
                  />
                </div>
              </div>

              {/* Mensajes de estado */}
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

              {/* Botón */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-8">
                <label className="inline-flex items-center gap-3 bg-white/80 rounded-md px-4 py-3 border border-black/10">
                  <input type="checkbox" className="size-4" />
                  <span className="text-sm font-medium">I’m not a robot</span>
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 disabled:opacity-60 text-white font-extrabold tracking-wider uppercase px-8 py-4 rounded-none shadow-none hover:shadow-none focus:shadow-none"
                >
                  {loading ? "SENDING…" : "SEE LOD EXAMPLES & ENQUIRE"}
                </button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-950 text-neutral-400 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={logo}
                  alt="DIQUE CONSULTORÍA S.A.S Bic"
                  className="h-10 md:h-12 lg:h-14 xl:h-16 w-auto select-none object-contain"
                />
              </div>
              <p className="text-sm leading-relaxed">
                Specialized technical services combining precision, innovation,
                and international expertise for architecture, engineering, and
                construction projects.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Services</h3>
              <ul className="space-y-3 text-sm">
                {[
                  { label: "CAD Services", href: "#/services/cad" },
                  { label: "REVIT Modelling", href: "#/services/revit" },
                  { label: "BIM Services", href: "#/services/bim" },
                  { label: "GIS Services", href: "#/services/gis" },
                ].map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="hover:text-[#00ACBD] transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-bold mb-6 text-lg">Company</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#/"
                    className="hover:text-[#00ACBD] transition-colors flex items-center gap-2 group"
                    onClick={(e) => {
                      e.preventDefault();
                      const goScroll = () =>
                        document
                          .getElementById("about")
                          ?.scrollIntoView({ behavior: "smooth" });

                      if (window.location.hash !== "#/") {
                        window.location.hash = "#/";
                        setTimeout(goScroll, 60);
                      } else {
                        goScroll();
                      }
                    }}
                  >
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#/contact"
                    className="hover:text-[#00ACBD] transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 text-center text-sm">
            <p>
              &copy; 2025 DIQUE CONSULTORÍA S.A.S Bic. Powered by Isaac Florez.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}