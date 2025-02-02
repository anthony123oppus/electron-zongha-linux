import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App.tsx";
import store from "./_redux/store.ts";
import { queryClient } from "./_services/index.ts";
import Loader from "./_components/Loader/Loader.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Suspense fallback={<Loader />}>
          <HashRouter>
            <App />
          </HashRouter>
        </Suspense>
      </Provider>
    </QueryClientProvider>
  </StrictMode>
);
