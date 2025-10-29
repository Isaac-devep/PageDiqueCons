// src/main.tsx
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import App from "./App";
import CADPage from "./pages/CAD";
import RevitPage from "./pages/REVIT";
import BIMPage from "./pages/BIM";
import GISPage from "./pages/GIS"; // ⬅️ nuevo
import ContactPage from "./pages/CONTACT"; // ⬅️ nuevo

function Router() {
  const [hash, setHash] = useState<string>(window.location.hash || "#/");

  useEffect(() => {
    const onHash = () => {
      setHash(window.location.hash || "#/");
      // Asegura que al navegar a una ruta se vea el hero (scroll al tope)
      requestAnimationFrame(() =>
        window.scrollTo({ top: 0, behavior: "auto" })
      );
    };
    window.addEventListener("hashchange", onHash);
    if (!window.location.hash) window.location.hash = "#/";
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // Rutas por hash
  if (hash === "#/services/cad") return <CADPage />;
  if (hash === "#/services/revit") return <RevitPage />;
  if (hash === "#/services/bim") return <BIMPage />;
  if (hash === "#/services/gis") return <GISPage />; // ⬅️ nuevo
  if (hash === "#/contact") return <ContactPage />; // ⬅️ ruta de contacto

  // Home por defecto
  return <App />;
}

const container = document.getElementById("root");
if (!container) {
  throw new Error("No se encontró el elemento #root en index.html");
}
const root = createRoot(container);
root.render(<Router />);