import React, { FC, Suspense } from "react";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { ErrorBoundary } from "components";
import { Loader } from "components";
import Routes from "./Routes";

const queryCache = new QueryCache({
  defaultConfig: { queries: { cacheTime: 0 }, shared: { suspense: true } },
});

const App: FC = () => (
  <Suspense fallback={<Loader />}>
    <BrowserRouter>
      <HelmetProvider>
        <ReactQueryCacheProvider queryCache={queryCache}>
          <ErrorBoundary>
            <Routes />
          </ErrorBoundary>
        </ReactQueryCacheProvider>
      </HelmetProvider>
    </BrowserRouter>
  </Suspense>
);

export default App;
