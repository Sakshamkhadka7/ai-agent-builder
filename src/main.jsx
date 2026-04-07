import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./style/custom.css";
// in main.jsx or index.jsx
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";
// import { ValueProvider } from "./context/ValueProvider";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter>
      {/* <ValueProvider> */}
        <App />
      {/* </ValueProvider> */}
    </BrowserRouter>,
  );
}
