import { WuToast } from "@npm-questionpro/wick-ui-lib";
import "@npm-questionpro/wick-ui-lib/dist/style.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WuToast></WuToast>
    <App />
  </StrictMode>
);
