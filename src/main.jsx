import { jsx as _jsx } from "react/jsx-runtime";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { AppContextProvider } from "./context/AppContext";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(_jsx(BrowserRouter, { children: _jsx(AppContextProvider, { children: _jsx(App, {}) }) }));
