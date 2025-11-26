import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
import "./index.css";
// import AppRoutes from "./app/Routes.tsx";
import App from "./app/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    {/*<BrowserRouter>*/}
    {/*  <AppRoutes />*/}
    {/*</BrowserRouter>*/}
  </StrictMode>,
);
