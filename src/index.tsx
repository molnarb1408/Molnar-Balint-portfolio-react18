import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import montserratFontUrl from "./assets/fonts/Montserrat-Regular.ttf?url";
import agustinaFontUrl from "./assets/fonts/Agustina.woff?url";

function preloadFont(href: string, type: string) {
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "font";
  link.type = type;
  link.crossOrigin = "anonymous";
  link.href = href;
  document.head.appendChild(link);
}

preloadFont(montserratFontUrl, "font/ttf");
preloadFont(agustinaFontUrl, "font/woff");

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);