import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from "styled-components";
import GlobalReset from "./styles/reset";
import { theme } from "./styles";
import App from "./App";
import Loader from "@/views/layouts/Loader";

ReactDOM.render(
  <StrictMode>
    <RecoilRoot>
      <React.Suspense fallback={<Loader />}>
        <ThemeProvider theme={theme}>
          <GlobalReset />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </React.Suspense>
    </RecoilRoot>
  </StrictMode>,
  document.getElementById("root")
);
