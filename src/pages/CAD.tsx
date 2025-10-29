// src/pages/CAD.tsx
import { useState } from "react";
import {
  Building2,
  Ruler,
  Box,
  Map,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Users,
  Award,
  Target,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import logo from "@/assets/logo.png";

export default function CADPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              href="#/services/cad"
              className="text-neutral-700 hover:text-[#00ACBD] transition-all font-semibold relative group"
            >
              CAD
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
              href="#/services/cad"
              className="block text-neutral-700 hover:text-[#00ACBD] transition-colors py-3 font-semibold"
              onClick={() => setMobileMenuOpen(false)}
            >
              CAD
            </a>
            <Button variant="red" className="w-full">
              Contact Us
            </Button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="pt-40 pb-16 px-4 relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold text-[#ED1844] uppercase tracking-wider mb-2">
                17+ years of experience
              </p>
              <h1 className="text-4xl md:text-5xl font-black leading-tight">
                <span className="text-[#00ACBD]">CAD</span> Services – 2D/3D
                technical drafting with precision and integration for AEC
                projects
              </h1>
              <p className="mt-4 text-neutral-600 text-lg">
                End-to-end drafting and technical documentation for residential,
                commercial, and infrastructure projects—ready to interoperate
                with your BIM workflows.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg">
                  Request a quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#/">Back to home</a>
                </Button>
              </div>
            </div>

            {/* Metrics 4-up cards */}
            <div className="grid grid-cols-2 gap-5">
              {[
                {
                  value: "25+",
                  label: "Countries served",
                  icon: Target,
                  color: "#00ACBD",
                },
                {
                  value: "5000+",
                  label: "Projects delivered",
                  icon: Award,
                  color: "#0077BE",
                },
                {
                  value: "17+",
                  label: "Years of experience",
                  icon: Users,
                  color: "#008BBE",
                },
                {
                  value: "300+",
                  label: "Happy clients",
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
        </div>
      </section>

      {/* Intro / Main copy */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black mb-6">CAD Services</h2>
          <p className="text-neutral-700 leading-relaxed">
            We provide comprehensive CAD drafting services for the architecture,
            engineering, and construction sectors. We produce precise 2D plans
            and 3D models, convert paper/legacy drawings to CAD, and prepare
            documentation for construction, as-built packages, and scan-to-CAD—
            meeting industry standards and best practices.
          </p>
        </div>
      </section>

      {/* Our drafting services include */}
      <section className="py-12 px-4 bg-neutral-950">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-white text-2xl md:text-3xl font-black text-center mb-10">
            Our CAD drafting services include
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* 1 */}
            <Card className="bg-neutral-900 border-neutral-800 p-6">
              <p className="text-[#ED1844] text-xs font-bold mb-2">01.</p>
              <h4 className="text-white font-black text-lg mb-3">
                Architectural CAD Drafting
              </h4>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Architectural and construction plans, elevations, sections,
                details, and layouts—ready for coordination with BIM/Revit and
                compliant with applicable standards.
              </p>
            </Card>

            {/* 2 */}
            <Card className="bg-neutral-900 border-neutral-800 p-6">
              <p className="text-[#ED1844] text-xs font-bold mb-2">02.</p>
              <h4 className="text-white font-black text-lg mb-3">
                Structural CAD Drafting
              </h4>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Structural general arrangements, rebar detailing, fabrication
                and erection drawings—precision output with change control.
              </p>
            </Card>

            {/* 3 */}
            <Card className="bg-neutral-900 border-neutral-800 p-6">
              <p className="text-[#ED1844] text-xs font-bold mb-2">03.</p>
              <h4 className="text-white font-black text-lg mb-3">
                MEP CAD Drafting
              </h4>
              <p className="text-neutral-300 text-sm leading-relaxed">
                HVAC, electrical, plumbing, and fire protection drawings with
                standardized layers/symbols, coordination deliverables, and shop
                drawings.
              </p>
            </Card>

            {/* 4 */}
            <Card className="bg-neutral-900 border-neutral-800 p-6">
              <p className="text-[#ED1844] text-xs font-bold mb-2">04.</p>
              <h4 className="text-white font-black text-lg mb-3">
                Mechanical CAD Drafting
              </h4>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Part and assembly drawings—fabrication and assembly packages
                with tolerances and industrial conventions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* What is CAD? + Static form */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl md:text-3xl font-black mb-4">
              What are CAD services?
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              CAD (Computer-Aided Design) enables the design and documentation
              of products and buildings using standardized symbols, lines, and
              drawings. In AEC, it supports 2D/3D development, speeds up
              reviews, and serves as a bridge to BIM by standardizing geometry
              and metadata.
            </p>
          </div>

          <Card className="p-6">
            <h4 className="font-bold text-lg mb-4">Contact us</h4>
            <form className="grid grid-cols-1 gap-3">
              <input
                className="border rounded-lg px-3 py-2"
                placeholder="Your name"
              />
              <input
                className="border rounded-lg px-3 py-2"
                placeholder="Email address"
              />
              <input
                className="border rounded-lg px-3 py-2"
                placeholder="Phone number"
              />
              <textarea
                className="border rounded-lg px-3 py-2"
                placeholder="Message"
                rows={4}
              />
              <Button className="justify-center">Send message</Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}
