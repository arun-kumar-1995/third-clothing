 import { createRoot } from "react-dom/client";
import "./styles/reset.css";
import "./index.css";

import App from "./App.jsx";
import { ToastProvider } from "./contexts/ToastContext";

createRoot(document.getElementById("root")).render(
  <ToastProvider>
    <App />
  </ToastProvider>
);
