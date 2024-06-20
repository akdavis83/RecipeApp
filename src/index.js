import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GloblStyle from "./Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <GloblStyle />
    <App />
  </ThemeProvider>,
);
