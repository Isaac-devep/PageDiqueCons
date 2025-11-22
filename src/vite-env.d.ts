// src/vite-env.d.ts
/// <reference types="vite/client" />

/**
 * Declara las variables públicas disponibles en import.meta.env
 * TODAS deben empezar por VITE_ para que Vite las exponga al cliente.
 */
interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string;
  readonly VITE_EMAILJS_TEMPLATE_ID: string;
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
