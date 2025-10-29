// src/pages/GIS.tsx
import { useEffect, useMemo, useState } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Map,
  Layers,
  Globe2,
  Route,
  TreePine,
  Building2,
  Database,
  BarChart3,
  Compass,
  Landmark,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import logo from "@/assets/logoblanco.png";

/**
 * GIS Service Page
 * - Header transparente con auto-hide on scroll (como BIM)
 * - Hero con palabra rotativa y animación descendente
 * - Overview
 * - Grid de servicios (cards)
 * - Workflow / Timeline
 * - Tech Stack badges
 * - Case Studies light
 * - CTA + Footer reutilizado
 */
export default function GISPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [lastY, setLastY] = useState(0);

  // Forzar scroll al hero al montar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  // Auto-esconder header al hacer scroll down, mostrar al subir
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY + 10 && y > 100) setHideHeader(true);
      else if (y < lastY - 10) setHideHeader(false);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  // Palabras del hero
  const words = useMemo(() => ["MAP", "ANALYZE", "DECIDE"], []);
  const [idx, setIdx] = useState(0);
  const [animateKey, setAnimateKey] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setIdx((i) => (i + 1) % words.length);
      setAnimateKey((k) => k + 1);
    }, 3600);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* =================== HEADER (transparente + auto-hide) =================== */}
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
              href="#overview"
              className="text-white/90 hover:text-white text-sm font-semibold tracking-wide"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("overview")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Overview
            </a>
            <a
              href="#services-grid"
              className="text-white/90 hover:text-white text-sm font-semibold tracking-wide"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("services-grid")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Services
            </a>
            <Button
              asChild
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white backdrop-blur px-4"
            >
              {/* ✅ Ahora va a la página de contacto */}
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
              {[
                { id: "overview", label: "Overview" },
                { id: "services-grid", label: "Services" },
                { id: "workflow", label: "Workflow" },
              ].map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  className="text-white/90 hover:text-white text-sm font-semibold tracking-wide"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(l.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                    setMobileOpen(false);
                  }}
                >
                  {l.label}
                </a>
              ))}

              {/* ✅ Entrada directa a Contact en móvil */}
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
      <section
        id="gis-hero"
        className="relative min-h-screen flex items-center"
      >
        {/* Fondo con gradiente + trama sutil */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#001018] via-[#001F2A] to-[#022e3f]" />
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(1px 1px at 20px 20px, white 1px, transparent 0)",
              backgroundSize: "22px 22px",
            }}
          />
          <div className="absolute -top-32 -right-24 w-[40rem] h-[40rem] bg-[#00ACBD]/20 blur-3xl rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-[36rem] h-[36rem] bg-[#0077BE]/20 blur-3xl rounded-full" />
        </div>

        <div className="container mx-auto max-w-7xl px-4 py-32">
          <div className="min-h-[60vh] flex flex-col justify-center">
            <AnimatedDownText key={animateKey} text={words[idx]} />
            <div className="mt-6 h-[8px] w-40 md:w-48 bg-white/95 rounded-full origin-left animate-[grow_700ms_ease-out]" />
            <p className="mt-8 max-w-3xl text-white/80 text-lg md:text-xl leading-relaxed">
              Geographic Information System (GIS) services to{" "}
              <span className="text-white font-semibold">map</span>,
              <span className="text-white font-semibold"> analyze</span> and{" "}
              <span className="text-white font-semibold">decide</span> with
              clarity. We transform spatial data into actionable insights for
              planning, design and operations.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                className="bg-white text-black hover:bg-white/90 font-extrabold px-6"
              >
                <a
                  href="#services-grid"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("services-grid")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-white/40 !text-black hover:!text-white hover:bg-white/10 transition-colors duration-200 focus-visible:ring-white/40"
                asChild
              >
                <a
                  href="#workflow"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("workflow")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  See Workflow
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* keyframes usados por el hero */}
        <style>{`
          @keyframes slideDownFade {
            0% { opacity: 0; transform: translateY(-24px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes grow {
            0% { transform: scaleX(0); }
            100% { transform: scaleX(1); }
          }
        `}</style>
      </section>

      {/* =================== OVERVIEW =================== */}
      <section
        id="overview"
        className="relative z-10 bg-white text-neutral-900 py-20 px-4"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">
            Geographic Information System Services
          </h2>
          <p className="text-neutral-700 text-lg leading-relaxed">
            We design and operate GIS ecosystems that support{" "}
            <span className="font-semibold">
              urban development, environmental management, infrastructure
              planning and tourism
            </span>
            . Our approach combines standards-compliant data models, automated
            workflows and clear visual communication so stakeholders can make
            confident decisions.
          </p>
        </div>
      </section>

      {/* =================== SERVICES GRID (cards) =================== */}
      <section
        id="services-grid"
        className="relative z-10 py-20 px-4 bg-gradient-to-b from-slate-50 to-white"
      >
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl md:text-4xl font-black mb-10">
            What we deliver
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={Map}
              title="Basic Cartography"
              points={[
                "Base maps, thematic maps & map books",
                "Topology rules and data cleaning",
                "Scale-aware symbology & labeling",
              ]}
              color="#00ACBD"
            />
            <ServiceCard
              icon={Layers}
              title="Spatial Analysis"
              points={[
                "Suitability, buffers, network & proximity",
                "Raster/Vector processing pipelines",
                "ModelBuilder / PyQGIS automations",
              ]}
              color="#0077BE"
            />
            <ServiceCard
              icon={Building2}
              title="Urban & Territorial Planning"
              points={[
                "Land-use, zoning & mobility layers",
                "Scenario planning & impact analysis",
                "Regulatory maps & public display",
              ]}
              color="#008BBE"
            />
            <ServiceCard
              icon={TreePine}
              title="Environmental Management"
              points={[
                "Sensitive areas & conservation corridors",
                "Watershed, risk & exposure mapping",
                "Monitoring dashboards & alerts",
              ]}
              color="#2E8B57"
            />
            <ServiceCard
              icon={Landmark}
              title="Tourism & Culture"
              points={[
                "POIs, routes & service areas",
                "Story maps & interactive guides",
                "Visitor analytics & heatmaps",
              ]}
              color="#ED1844"
            />
            <ServiceCard
              icon={Database}
              title="Data & Interoperability"
              points={[
                "GeoDatabases, PostGIS, GeoPackages",
                "OGC services (WMS/WFS/WCS/WMTS)",
                "ETL & metadata governance",
              ]}
              color="#6B7280"
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

      {/* =================== WORKFLOW / TIMELINE =================== */}
      <section
        id="workflow"
        className="relative py-20 px-4 bg-white border-t border-slate-100"
      >
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl md:text-4xl font-black mb-10">
            Our workflow
          </h3>

          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6">
            <Step
              n={1}
              title="Discover"
              desc="Stakeholder goals, data audit and success metrics."
              icon={Compass}
            />
            <Step
              n={2}
              title="Model"
              desc="Schema design, geodatabase build, metadata & QA/QC."
              icon={Layers}
            />
            <Step
              n={3}
              title="Analyze"
              desc="Spatial analysis, scenarios and KPIs aligned to decisions."
              icon={Route}
            />
            <Step
              n={4}
              title="Publish"
              desc="OGC services, web maps, dashboards & story maps."
              icon={BarChart3}
            />
            <Step
              n={5}
              title="Operate"
              desc="Governance, training & continuous improvement."
              icon={Globe2}
            />
          </div>
        </div>
      </section>

      {/* =================== TECH STACK =================== */}
      <section className="relative py-16 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-2xl md:text-3xl font-black mb-6">
            Tech stack we use
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Esri ArcGIS Pro / Online",
              "QGIS",
              "PostgreSQL + PostGIS",
              "GeoServer",
              "Mapbox / Leaflet",
              "GDAL/OGR",
              "Python (ArcPy / PyQGIS)",
              "OGC Standards",
            ].map((t) => (
              <span
                key={t}
                className="px-3 py-2 rounded-xl text-sm font-semibold bg-white border border-slate-200"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =================== CASE STUDIES (light) =================== */}
      <section className="relative py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl md:text-4xl font-black mb-10">Recent work</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <CaseCard
              title="Green Corridors Prioritization"
              subtitle="Environmental planning"
              bullets={[
                "Habitat connectivity & sensitivity index",
                "Raster suitability + least-cost paths",
                "Interactive dashboard for actions",
              ]}
            />
            <CaseCard
              title="Tourism Routes & Story Maps"
              subtitle="Tourism & culture"
              bullets={[
                "POI curation, accessibility buffers",
                "Route segmentation & elevation profiles",
                "Mobile-friendly story map publication",
              ]}
            />
          </div>
        </div>
      </section>

      {/* =================== FOOTER (igual al usado antes) =================== */}
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
                  {/* Contact: ruta de contacto */}
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

/* =================== SMALL COMPONENTS =================== */

function AnimatedDownText({ text }: { text: string }) {
  return (
    <h1
      className="
        text-[clamp(2.5rem,9vw,6.5rem)]
        lg:text-[clamp(4rem,8vw,8rem)]
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
  color = "#00ACBD",
}: {
  icon: any;
  title: string;
  points: string[];
  color?: string;
}) {
  return (
    <Card className="p-6 bg-white border-2 border-transparent hover:border-[#00ACBD]/30 transition-all shadow-sm">
      <div className="flex items-start gap-3">
        <div
          className="p-2 rounded-xl"
          style={{
            background: `linear-gradient(135deg, ${color}20, ${color}10)`,
          }}
        >
          <Icon className="h-6 w-6" style={{ color }} />
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

function Step({
  n,
  title,
  desc,
  icon: Icon,
}: {
  n: number;
  title: string;
  desc: string;
  icon: any;
}) {
  return (
    <div className="relative">
      <Card className="h-full p-6 bg-white border-2 border-transparent hover:border-[#00ACBD]/30 transition-all shadow-sm">
        <div className="flex items-start gap-3">
          <div
            className="p-2 rounded-xl"
            style={{
              background: "linear-gradient(135deg,#00ACBD20,#0077BE10)",
            }}
          >
            <Icon className="h-6 w-6" style={{ color: "#00ACBD" }} />
          </div>
          <div className="text-xs font-extrabold text-[#00ACBD] mt-[2px]">
            STEP {n}
          </div>
        </div>
        <h4 className="font-extrabold text-lg mt-3">{title}</h4>
        <p className="text-sm text-neutral-700 mt-2">{desc}</p>
      </Card>
    </div>
  );
}

function CaseCard({
  title,
  subtitle,
  bullets,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
}) {
  return (
    <Card className="p-6 bg-white border-2 border-transparent hover:border-[#00ACBD]/30 transition-all shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-extrabold text-xl">{title}</h4>
          <p className="text-sm text-neutral-500">{subtitle}</p>
        </div>
        <Globe2 className="h-6 w-6 text-[#00ACBD]" />
      </div>
      <ul className="mt-4 space-y-2 text-sm text-neutral-700 list-disc pl-6">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </Card>
  );
}