// src/pages/BIM.tsx
import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Menu,
  X,
  Boxes,
  GitMerge,
  Ruler,
  CalendarClock,
  Receipt,
  Building2,
  Scan as ScanIcon,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import logo from "@/assets/logo-engle-blanco.png";
import logoColor from "@/assets/logo-engle.png";
import bim1 from "@/assets/bim1.png";
import bim2 from "@/assets/bim2.png";
import bim3 from "@/assets/bim3.png";

export default function BIMPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // === AUTOCACHEO DEL HEADER EN SCROLL ===
  const [hideHeader, setHideHeader] = useState(false);
  const [lastY, setLastY] = useState(0);

  // ✅ Al montar la página de BIM, fuerza scroll al HERO (top = 0)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // si baja > 10px y pasó del hero, oculto; si sube, muestro
      if (y > lastY + 10 && y > 100) setHideHeader(true);
      else if (y < lastY - 10) setHideHeader(false);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  const slides = useMemo(
    () => [
      { image: bim1, word: "PLAN" },
      { image: bim2, word: "COORDINATE" },
      { image: bim3, word: "BUILD" },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
      setAnimateKey((k) => k + 1);
    }, 4200);
    return () => clearInterval(id);
  }, [slides.length]);

  const prevIndex = (index - 1 + slides.length) % slides.length;

  return (
    // 👇 Importante: SIN overflow-hidden (solo oculto el overflow horizontal)
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* =================== HEADER (transparent + auto-hide) =================== */}
      <header
        className={`fixed inset-x-0 top-0 z-[60] bg-transparent transition-transform duration-300 ${
          hideHeader ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <nav className="container mx-auto max-w-7xl px-4 py-5 flex items-center justify-between">
          <a href="#/" className="inline-flex items-center gap-3">
            <img
              src={logo}
              alt="DIQUE CONSULTORÍA S.A.S Bic"
              className="h-20 md:h-24 w-auto object-contain select-none"
            />
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#/our-promise"
              className="text-white/90 hover:text-white text-sm font-semibold tracking-wide"
            >
              Our Promise
            </a>

            <Button
              asChild
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur px-4"
            >
              {/* ✅ Corregido para ir a la página de contacto */}
              <a href="#/contact">Contact Us</a>
            </Button>
          </div>

          {/* Mobile */}
          <button
            className="md:hidden inline-flex p-2 rounded-md text-white/90 hover:text-white hover:bg-white/10"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="md:hidden bg-black/70 backdrop-blur border-t border-white/10">
            <div className="container mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
              <a
                href="#/"
                className="text-white/90 hover:text-white text-sm font-semibold tracking-wide"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </a>
              <a
                href="#/our-promise"
                className="text-white/90 hover:text-white text-sm font-semibold tracking-wide"
                onClick={() => setMobileOpen(false)}
              >
                Our Promise
              </a>
              <a
                href="#/contact"
                className="text-white/90 hover:text-white text-sm font-semibold tracking-wide"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      {/* =================== HERO =================== */}
      {/* Fondo ahora SIEMPRE por detrás y sin capturar eventos */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <img
          key={`bg-prev-${prevIndex}`}
          src={slides[prevIndex].image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700"
          style={{ opacity: 0 }}
        />
        <img
          key={`bg-${index}`}
          src={slides[index].image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-700"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Foreground hero */}
      <div className="relative z-10" id="bim-hero">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="min-h-screen flex flex-col justify-center">
            <AnimatedDownText key={animateKey} text={slides[index].word} />
            <div className="mt-6 h-[8px] w-40 md:w-48 bg-white/95 rounded-full origin-left animate-[grow_700ms_ease-out]" />
            <div className="mt-10">
              <Button
                asChild
                className="bg-white text-black hover:bg-white/90 font-extrabold px-6"
              >
                <a href="#/contact" aria-label="Get in touch">
                  Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* =================== OVERVIEW =================== */}
      <section className="relative z-10 bg-white text-neutral-900 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
            We are DIQUE
          </h2>
          <div className="space-y-5 text-neutral-700 leading-relaxed">
            <p>
              <span className="font-bold">DIQUE</span> is a Virtual Design and
              Construction partner specializing in{" "}
              <span className="font-bold">BIM Technology</span> for the AEC
              industry. We help owners, designers and contractors virtually
              plan, coordinate and document before they build—reducing risk,
              time and cost while improving certainty.
            </p>
            <p>
              We collaborate across markets delivering consistent models and
              documentation. From residential and commercial to industrial and
              infrastructure, we deploy robust BIM workflows aligned with best
              practices.
            </p>
            <p>
              Our <span className="font-bold">mission</span> is to make BIM an
              integral part of every project lifecycle. Our{" "}
              <span className="font-bold">vision</span> is to elevate quality
              and productivity through precise modelling, reliable coordination
              and data-driven delivery.
            </p>
          </div>
          <div className="mt-8">
            <Button asChild className="px-6">
              <a href="#services-cards">Explore more</a>
            </Button>
          </div>
        </div>
      </section>

      {/* =================== SERVICES (CARDS) =================== */}
      <section
        id="services-cards"
        className="relative z-10 py-20 px-4 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl md:text-4xl font-black mb-10">
            Our BIM Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={GitMerge}
              title="BIM Coordination & Clash Detection"
              points={[
                "Multidisciplinary coordination (Arch/Str/MEP)",
                "Clash detection & resolution tracking",
                "Navisworks/IFC collaboration",
              ]}
            />
            <ServiceCard
              icon={Boxes}
              title="Revit Modelling (LOD 100–500)"
              points={[
                "Accurate, data-rich authoring",
                "Sheets, views & schedules aligned to standards",
                "As-built deliverables and handover models",
              ]}
            />
            <ServiceCard
              icon={CalendarClock}
              title="4D/5D BIM (Time & Cost)"
              points={[
                "4D sequencing from the model",
                "5D quantities for cost control",
                "What-if scenarios & simulations",
              ]}
            />
            <ServiceCard
              icon={ScanIcon}
              title="Scan to BIM"
              points={[
                "Point cloud ingestion & alignment",
                "As-built modelling with tolerances",
                "QA/QC deviation checks",
              ]}
            />
            <ServiceCard
              icon={Ruler}
              title="Construction Documentation"
              points={[
                "Shop drawings & installation details",
                "Fabrication-ready outputs",
                "Submittals & RFIs support",
              ]}
            />
            <ServiceCard
              icon={Receipt}
              title="Quantities & Takeoffs"
              points={[
                "Reliable BoQ from model parameters",
                "Custom schedules & exports",
                "Live updates with design changes",
              ]}
            />
            <ServiceCard
              icon={Layers}
              title="Model Health & Standards"
              points={[
                "Templates, naming & classification",
                "Model audits & performance tuning",
                "BEP and LOD execution planning",
              ]}
            />
            <ServiceCard
              icon={Building2}
              title="Digital Twins & Asset Data"
              points={[
                "Structured data for FM/CMMS",
                "COBie/IFC handover packages",
                "Lifecycle-ready from day one",
              ]}
            />
          </div>

          <div className="mt-12">
            <Button
              asChild
              className="bg-neutral-900 hover:bg-neutral-800 text-white px-6"
            >
              <a href="#/contact">Request a proposal</a>
            </Button>
          </div>
        </div>
      </section>

      {/* =================== FOOTER =================== */}
      <footer className="bg-neutral-950 text-neutral-400 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={logoColor}
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
                  {/* About Us: ir al Home y luego scroll a #about */}
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
                        // esperar a que cargue el home y luego hacer scroll
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
                  {/* Contact: apunta a la ruta de contacto (ajústala si tu router usa otra) */}
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

      {/* keyframes */}
      <style>{`
        @keyframes slideDownFade { 0% {opacity:0; transform:translateY(-24px)} 100% {opacity:1; transform:translateY(0)} }
        @keyframes grow { 0% { transform:scaleX(0) } 100% { transform:scaleX(1) } }
      `}</style>
    </div>
  );
}

function AnimatedDownText({ text }: { text: string }) {
  return (
    <h1
      className="
        text-[clamp(2.5rem,8vw,6rem)]
        lg:text-[clamp(4rem,7vw,7.5rem)]
        leading-[0.95] font-black text-white select-none
        animate-[slideDownFade_700ms_ease-out]
      "
      style={{ letterSpacing: "-0.02em" }}
    >
      {text}
    </h1>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  points,
}: {
  icon: any;
  title: string;
  points: string[];
}) {
  return (
    <Card className="p-6 bg-white border-2 border-transparent hover:border-[#00ACBD]/30 transition-all shadow-sm">
      <div className="flex items-start gap-3">
        <div
          className="p-2 rounded-xl"
          style={{ background: "linear-gradient(135deg,#00ACBD20,#0077BE10)" }}
        >
          <Icon className="h-6 w-6" style={{ color: "#00ACBD" }} />
        </div>
        <h4 className="font-extrabold text-lg">{title}</h4>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-neutral-700 list-disc pl-6">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </Card>
  );
}
