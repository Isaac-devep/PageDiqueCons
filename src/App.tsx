// src/App.tsx
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
  Zap,
  Users,
  Award,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import logo from "@/assets/logo-engle.png";
import icono from "@/assets/icono.png";
import cadImg from "@/assets/services-cad.jpg";
import revitImg from "@/assets/services-revit.jpg";
import bimImg from "@/assets/services-bim.jpg";
import gisImg from "@/assets/services-gis.jpg";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="border-b border-[#00ACBD]/20 glass fixed w-full top-0 z-50 shadow-lg">
        <nav className="container mx-auto px-4 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="DIQUE CONSULTORÍA S.A.S Bic"
              className="h-10 md:h-12 lg:h-14 xl:h-16 w-auto select-none object-contain"
            />
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-neutral-700 hover:text-[#00ACBD] transition-all font-semibold relative group"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00ACBD] to-[#008BBE] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#about"
              className="text-neutral-700 hover:text-[#00ACBD] transition-all font-semibold relative group"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00ACBD] to-[#008BBE] group-hover:w-full transition-all duration-300"></span>
            </a>
            {/* Contact Us -> navega a #/contact */}
            <Button variant="red" className="shadow-xl" asChild>
              <a href="#/contact" aria-label="Go to Contact page">
                Contact Us
              </a>
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
          <div className="md:hidden glass border-t border-[#00ACBD]/20 px-4 py-6 space-y-4">
            <a
              href="#services"
              className="block text-neutral-700 hover:text-[#00ACBD] transition-colors py-3 font-semibold"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" });
                setMobileMenuOpen(false);
              }}
            >
              Services
            </a>
            <a
              href="#about"
              className="block text-neutral-700 hover:text-[#00ACBD] transition-colors py-3 font-semibold"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
                setMobileMenuOpen(false);
              }}
            >
              About
            </a>
            {/* Contact Us móvil -> navega a #/contact y cierra menú */}
            <Button variant="red" className="w-full" asChild>
              <a
                href="#/contact"
                aria-label="Go to Contact page"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </a>
            </Button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-4 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#00ACBD]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0077BE]/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-8 animate-fade-in">
            {/* Headline corta en el pill */}
            <div className="inline-block">
              <span className="text-sm font-bold text-[#00ACBD] uppercase tracking-widest px-4 py-2 bg-[#00ACBD]/10 rounded-full border border-[#00ACBD]/30">
                Engineering-grade CAD, Revit &amp; BIM—delivered fast, done
                right.
              </span>
            </div>

            {/* Primary H1 SEO */}
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-neutral-900 leading-tight">
              CAD, Revit &amp; BIM services for US AEC teams
            </h1>

            {/* Subhead / value prop */}
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-medium">
              We help US architects, engineers and contractors cut drafting time
              and costs with precise CAD, Revit modeling, BIM coordination and
              GIS support—on your schedule, to your standards.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
              {/* Primary CTA: va a la página de contacto */}
              <Button size="lg" className="shadow-2xl text-base" asChild>
                <a href="#/contact" aria-label="Get a 30-minute project review">
                  Get a 30-minute project review
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              {/* Secondary CTA: por ahora baja a la sección de servicios */}
              <Button size="lg" variant="outline" className="text-base" asChild>
                <a href="#services" aria-label="Download sample drawings">
                  Download sample drawings
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ACBD]/5 to-transparent"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-4">
              CAD, Revit, BIM &amp; GIS services
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-medium">
              Near-shore CAD drafting, Revit modeling, BIM coordination and GIS
              support for US architects, engineers and contractors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* CAD Drafting */}
            <Card className="group hover:scale-[1.02] transition-transform duration-300 overflow-hidden">
              <div className="aspect-[16/9] w-full">
                <img
                  src={cadImg}
                  alt="CAD drafting services - DIQUE"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="flex items-start gap-5 p-8">
                <div className="p-4 bg-gradient-to-br from-[#00ACBD]/20 to-[#00ACBD]/5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Ruler className="h-10 w-10 text-[#00ACBD]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-neutral-900 mb-4 group-hover:text-[#00ACBD] transition-colors">
                    CAD Drafting
                  </h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    Construction docs, shop drawings and redlines/as-builts
                    produced to your AutoCAD standards—layers, pen tables and
                    title blocks exactly as you specify.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Construction documents and addenda",
                      "Shop drawings ready for fabrication and install",
                      "Redlines and as-builts from markups or PDFs",
                      "Client-specific layers, linetypes and plot styles",
                      "Title blocks, page setups and viewports to spec",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-neutral-700"
                      >
                        <div className="p-1 bg-[#00ACBD]/10 rounded-full">
                          <CheckCircle2 className="h-4 w-4 text-[#00ACBD]" />
                        </div>
                        <span className="text-sm font-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <Button asChild className="mt-2">
                      <a
                        href="#/services/cad"
                        aria-label="View CAD drafting details"
                      >
                        See CAD details
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Revit Modeling */}
            <Card className="group hover:scale-[1.02] transition-transform duration-300 overflow-hidden">
              <div className="aspect-[16/9] w-full">
                <img
                  src={revitImg}
                  alt="Revit modeling services - DIQUE"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="flex items-start gap-5 p-8">
                <div className="p-4 bg-gradient-to-br from-[#0077BE]/20 to-[#0077BE]/5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Box className="h-10 w-10 text-[#0077BE]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-neutral-900 mb-4 group-hover:text-[#0077BE] transition-colors">
                    Revit Modeling
                  </h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    LOD-appropriate Revit models for Arch/Struct/MEP, including
                    families, sheets and schedules. Clean, clash-ready geometry
                    that drops straight into your BIM 360 or ACC workflows.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "LOD-appropriate models for Arch / Struct / MEP",
                      "Custom and standard Revit families",
                      "Sheets, views and schedules ready to publish",
                      "Shared coordinates and view templates aligned to your setup",
                      "Clean, clash-ready geometry for coordination",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-neutral-700"
                      >
                        <div className="p-1 bg-[#0077BE]/10 rounded-full">
                          <CheckCircle2 className="h-4 w-4 text-[#0077BE]" />
                        </div>
                        <span className="text-sm font-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <Button asChild variant="outline">
                      <a
                        href="#/services/revit"
                        className="inline-flex items-center"
                      >
                        See Revit examples{" "}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* BIM Coordination */}
            <Card className="group hover:scale-[1.02] transition-transform duration-300 overflow-hidden">
              <div className="aspect-[16/9] w-full">
                <img
                  src={bimImg}
                  alt="BIM coordination services - DIQUE"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="flex items-start gap-5 p-8">
                <div className="p-4 bg-gradient-to-br from-[#008BBE]/20 to-[#008BBE]/5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-10 w-10 text-[#008BBE]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-neutral-900 mb-4 group-hover:text-[#008BBE] transition-colors">
                    BIM Coordination
                  </h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    Clash detection, issue tracking and model federation for
                    busy project teams. Navisworks and BIM 360 workflows with
                    clear weekly coordination reports.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Model federation across disciplines",
                      "Clash detection runs and filtered viewpoints",
                      "Issue logs with assignees and due dates",
                      "Weekly coordination and clash status reports",
                      "Owner/GC-friendly exports for meetings",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-neutral-700"
                      >
                        <div className="p-1 bg-[#008BBE]/10 rounded-full">
                          <CheckCircle2 className="h-4 w-4 text-[#008BBE]" />
                        </div>
                        <span className="text-sm font-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <Button asChild>
                      <a
                        href="#/services/bim"
                        className="inline-flex items-center"
                        aria-label="View BIM coordination details"
                      >
                        See coordination details{" "}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* GIS Support */}
            <Card className="group hover:scale-[1.02] transition-transform duration-300 overflow-hidden">
              <div className="aspect-[16/9] w-full">
                <img
                  src={gisImg}
                  alt="GIS support services - DIQUE"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="flex items-start gap-5 p-8">
                <div className="p-4 bg-gradient-to-br from-[#ED1844]/20 to-[#ED1844]/5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Map className="h-10 w-10 text-[#ED1844]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-neutral-900 mb-4 group-hover:text-[#ED1844] transition-colors">
                    GIS Support
                  </h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    Base mapping, spatial analysis and site planning layers that
                    help civil, utilities and environmental teams decide with
                    confidence.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Base maps and thematic layers for projects",
                      "Suitability and spatial analysis for sites and corridors",
                      "Site planning overlays for civil and utilities",
                      "Environmental and risk overlays for decision-makers",
                      "Deliverables ready for web maps and dashboards",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-neutral-700"
                      >
                        <div className="p-1 bg-[#ED1844]/10 rounded-full">
                          <CheckCircle2 className="h-4 w-4 text-[#ED1844]" />
                        </div>
                        <span className="text-sm font-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <Button asChild variant="outline">
                      <a
                        href="#/services/gis"
                        className="inline-flex items-center"
                      >
                        See GIS examples <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA inline: example sets */}
          <div className="mt-12 text-center">
            <Button variant="outline" asChild>
              <a href="#/contact">See example sets</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why teams choose DIQUE */}
      <section
        id="why-dique"
        className="py-20 px-4 bg-neutral-950 text-neutral-100"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Why teams choose DIQUE
              </h2>
              <p className="text-neutral-300 text-sm md:text-base">
                Built for US AEC teams that need reliable, near-shore production
                support—without sacrificing standards or control.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-[#D9FF00] text-xs font-bold uppercase tracking-wide">
                  <CheckCircle2 className="h-4 w-4" />
                  US standards, zero rework
                </div>
                <p className="text-sm text-neutral-300">
                  CSI divisioning, sheet naming, view templates and detail
                  levels aligned to your CAD/BIM manuals—so drawings come back
                  ready to issue.
                </p>
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-[#D9FF00] text-xs font-bold uppercase tracking-wide">
                  <Zap className="h-4 w-4" />
                  Near-shore speed
                </div>
                <p className="text-sm text-neutral-300">
                  Bilingual team in US-friendly time zones, with same-day
                  communication and quick turnaround on RFIs, addenda and
                  redlines.
                </p>
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-[#D9FF00] text-xs font-bold uppercase tracking-wide">
                  <Target className="h-4 w-4" />
                  Right-sized pricing
                </div>
                <p className="text-sm text-neutral-300">
                  Flexible hourly blocks or monthly capacity so you can ramp up
                  or down without long-term commitments.
                </p>
              </div>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-[#D9FF00] text-xs font-bold uppercase tracking-wide">
                  <Award className="h-4 w-4" />
                  Secure &amp; compliant
                </div>
                <p className="text-sm text-neutral-300">
                  NDA by default, controlled access to models and an auditable
                  trail when collaborating through BIM 360 or ACC.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Button
              asChild
              className="bg-white text-black hover:bg-white/90 font-extrabold px-6"
            >
              <a href="#/contact">Book a call</a>
            </Button>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section
        id="how-we-work"
        className="py-20 px-4 bg-gradient-to-b from-white to-slate-50"
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black mb-6">How we work</h2>
          <p className="text-neutral-600 max-w-2xl mb-10">
            A simple 4-step process to plug our team into your CAD, Revit and
            BIM workflows.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Scope & standards",
                desc: "Review samples, CAD/Revit templates, LOD requirements, deadlines and communication channels.",
              },
              {
                step: 2,
                title: "Pilot",
                desc: "8–40 hours on a real package so we can match your look & feel before committing to volume.",
              },
              {
                step: 3,
                title: "Production",
                desc: "Daily progress updates, weekly coordination/clash reports and predictable delivery windows.",
              },
              {
                step: 4,
                title: "Deliver & iterate",
                desc: "QC checklist applied on every set and punch-list turnarounds in 24–48 hours.",
              },
            ].map((item) => (
              <div key={item.step} className="h-full">
                <Card className="h-full p-6 bg-white border-2 border-transparent hover:border-[#00ACBD]/30 transition-all shadow-sm">
                  <div className="text-xs font-bold text-[#00ACBD] tracking-[0.12em] uppercase mb-2">
                    Step {item.step}
                  </div>
                  <h3 className="font-extrabold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 px-4 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0077BE]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="leading-tight tracking-tight">
                <span className="text-neutral-900 text-4xl md:text-5xl font-black">
                  About{" "}
                </span>

                <span className="inline md:block text-5xl md:text-6xl font-black uppercase leading-tight">
                  {/* DI */}
                  <span className="bg-gradient-to-r from-[#00ACBD] to-[#0077BE] bg-clip-text text-transparent">
                    DI
                  </span>
                  {/* Q (fucsia -> rojo) */}
                  <span className="inline-block px-0.5 bg-gradient-to-r from-[#FF2D55] to-[#C3002F] bg-clip-text text-transparent align-baseline">
                    Q
                  </span>
                  {/* UE */}
                  <span className="bg-gradient-to-r from-[#00ACBD] to-[#0077BE] bg-clip-text text-transparent">
                    UE
                  </span>{" "}
                  {/* resto */}
                  <span className="bg-gradient-to-r from-[#00ACBD] to-[#0077BE] bg-clip-text text-transparent">
                    CONSULTING AND ENGINEERING
                  </span>
                </span>
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6 text-lg">
                We are a leading provider of specialized technical services,
                combining precision, innovation, and international expertise to
                deliver exceptional results for our clients.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-8 text-lg">
                Our commitment to quality and excellence has made us a trusted
                partner for architecture, engineering, construction, and
                territorial planning projects across the United States.
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "International Expertise",
                    desc: "Drawing from global best practices and standards",
                    color: "#00ACBD",
                  },
                  {
                    title: "Collaborative Workflows",
                    desc: "Seamless integration with your existing teams",
                    color: "#0077BE",
                  },
                  {
                    title: "High-Quality Deliverables",
                    desc: "Precision and accuracy in every project phase",
                    color: "#008BBE",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div
                      className="p-2 rounded-xl mt-1"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}20, ${item.color}10)`,
                      }}
                    >
                      <CheckCircle2
                        className="h-6 w-6"
                        style={{ color: item.color }}
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-neutral-900 text-lg mb-1">
                        {item.title}
                      </h4>
                      <p className="text-neutral-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SOLO imagen (sin fondo azul) */}
            <div className="relative flex items-center justify-center">
              <img
                src={icono}
                alt="DIQUE CONSULTORÍA S.A.S Bic icon"
                className="h-40 w-40 object-contain"
              />
            </div>
          </div>
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
                  {/* Contact: apunta a la ruta de contacto */}
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
