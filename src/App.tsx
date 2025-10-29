// src/pages/App.tsx
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
import logo from "@/assets/logo.png";
import icono from "@/assets/icono.png";

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
            <div className="inline-block">
              <span className="text-sm font-bold text-[#00ACBD] uppercase tracking-widest px-4 py-2 bg-[#00ACBD]/10 rounded-full border border-[#00ACBD]/30">
                Services in the United States
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-neutral-900 leading-tight">
              Specialized Technical Services
              <br />
              <span className="bg-gradient-to-r from-[#00ACBD] via-[#008BBE] to-[#0077BE] bg-clip-text text-transparent">
                Combining Precision & Innovation
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Our portfolio is designed to support architecture, engineering,
              construction, and territorial planning projects with high-quality
              deliverables and collaborative workflows
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
              <Button
                size="lg"
                className="shadow-2xl text-base"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base"
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">
            {[
              {
                value: "500+",
                label: "Projects Delivered",
                icon: Target,
                color: "#00ACBD",
              },
              {
                value: "15+",
                label: "Years Experience",
                icon: Award,
                color: "#0077BE",
              },
              {
                value: "100+",
                label: "Happy Clients",
                icon: Users,
                color: "#008BBE",
              },
              {
                value: "4",
                label: "Core Services",
                icon: Zap,
                color: "#ED1844",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-transparent hover:border-[#00ACBD]/30 transition-all duration-300 card-hover group"
                style={{ boxShadow: `0 10px 30px -10px ${stat.color}20` }}
              >
                <div className="flex justify-center mb-3">
                  <div
                    className="p-3 rounded-xl"
                    style={{
                      background: `linear-gradient(135deg, ${stat.color}15, ${stat.color}05)`,
                    }}
                  >
                    <stat.icon
                      className="h-6 w-6"
                      style={{ color: stat.color }}
                    />
                  </div>
                </div>
                <div
                  className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-br bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${stat.color}, ${stat.color}dd)`,
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-neutral-600 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ACBD]/5 to-transparent"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-[#00ACBD] to-[#0077BE] bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-medium">
              Comprehensive solutions for architecture, engineering, and
              construction projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* CAD Services */}
            <Card className="group hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-start gap-5 p-8">
                <div className="p-4 bg-gradient-to-br from-[#00ACBD]/20 to-[#00ACBD]/5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Ruler className="h-10 w-10 text-[#00ACBD]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-neutral-900 mb-4 group-hover:text-[#00ACBD] transition-colors">
                    1. CAD Services
                  </h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    We deliver comprehensive CAD solutions tailored to meet the
                    demands of modern infrastructure and building projects. Our
                    expertise spans MEP CAD Drafting, CAD to Revit conversions,
                    3D CAD Modeling, Civil 3D applications, Design Development,
                    and Construction Documentation.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "MEP CAD Drafting",
                      "CAD to Revit Conversions",
                      "3D CAD Modeling",
                      "Civil 3D Applications",
                      "Construction Documentation",
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

                  {/* Botón Ver servicio */}
                  <div className="mt-6">
                    <Button asChild className="mt-6">
                      <a href="#/services/cad" aria-label="Ver servicio CAD">
                        Ver servicio
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* REVIT Modelling Services */}
            <Card className="group hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-start gap-5 p-8">
                <div className="p-4 bg-gradient-to-br from-[#0077BE]/20 to-[#0077BE]/5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Box className="h-10 w-10 text-[#0077BE]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-neutral-900 mb-4 group-hover:text-[#0077BE] transition-colors">
                    2. REVIT Modelling Services
                  </h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    Our Revit Modelling Services empower clients to visualize
                    and manage their projects with precision and efficiency. We
                    develop intelligent 3D models that integrate architectural,
                    structural, and MEP components, fostering collaboration and
                    informed decision-making.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Intelligent 3D Models",
                      "Architectural Integration",
                      "Structural Components",
                      "MEP Coordination",
                      "Lifecycle Management",
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

                  {/* Botón Ver servicio */}
                  <div className="mt-6">
                    <Button asChild variant="outline">
                      <a
                        href="#/services/revit"
                        className="inline-flex items-center"
                      >
                        Ver servicio <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* BIM Services */}
            <Card className="group hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-start gap-5 p-8">
                <div className="p-4 bg-gradient-to-br from-[#008BBE]/20 to-[#008BBE]/5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="h-10 w-10 text-[#008BBE]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-neutral-900 mb-4 group-hover:text-[#008BBE] transition-colors">
                    3. BIM Services
                  </h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    We lead the way in Building Information Modeling (BIM),
                    offering cutting-edge solutions that transform how projects
                    are planned, executed, and maintained. Our BIM services
                    provide dynamic, data-rich models that enhance coordination,
                    reduce risks, and improve project outcomes.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "BIM Strategy Development",
                      "Data-Rich Models",
                      "Coordination Enhancement",
                      "Risk Reduction",
                      "Sustainability Standards",
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

                  {/* Botón Ver servicio */}
                  <div className="mt-6">
                    <Button asChild>
                      <a
                        href="#/services/bim"
                        className="inline-flex items-center"
                        aria-label="View BIM service"
                      >
                        Ver servicio
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* GIS Services */}
            <Card className="group hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-start gap-5 p-8">
                <div className="p-4 bg-gradient-to-br from-[#ED1844]/20 to-[#ED1844]/5 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Map className="h-10 w-10 text-[#ED1844]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-neutral-900 mb-4 group-hover:text-[#ED1844] transition-colors">
                    4. Geographic Information System Services
                  </h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    Our Geographic Information System (GIS) Services offer
                    powerful tools for spatial analysis, planning, and
                    decision-making. We specialize in Basic Cartography,
                    Landscape Analysis, and comprehensive GIS solutions that
                    support urban development, environmental management, and
                    tourism planning.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Basic Cartography",
                      "Landscape Analysis",
                      "Urban Development",
                      "Environmental Management",
                      "Tourism Planning",
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

                  {/* Botón Ver servicio */}
                  <div className="mt-6">
                    <Button asChild variant="outline">
                      <a
                        href="#/services/gis"
                        className="inline-flex items-center"
                      >
                        Ver servicio <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
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
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
                About{" "}
                <span className="bg-gradient-to-r from-[#00ACBD] to-[#0077BE] bg-clip-text text-transparent">
                  DIQUE CONSULTORÍA
                </span>{" "}
                S.A.S Bic
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