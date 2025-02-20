import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { ScrollTop } from "./ScrollTop.js";
import { GlobalStyle, theme } from "./styles";
import "antd/dist/antd.min.css";

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <ScrollTop>
        <App />
      </ScrollTop>
    </BrowserRouter>
  </ThemeProvider>
);
