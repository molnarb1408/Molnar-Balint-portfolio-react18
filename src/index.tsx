import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import * as serviceWorker from "./serviceWorker.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
  

// offline mod change --> unregister() to register()
// https://bit.ly/CRA-PWA
serviceWorker.unregister();
