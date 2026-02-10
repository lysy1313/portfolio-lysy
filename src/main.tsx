import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { GlobalStyled } from "./styles/Global.Styled.tsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/index.ts";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <I18nextProvider i18n={i18n}>
      <App />
      <GlobalStyled />
    </I18nextProvider>
  </HashRouter>,
);
