import React, { ReactElement, Suspense } from "react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { render } from "@testing-library/react";

import * as History from "history";
import { QueryCache, ReactQueryCacheProvider } from "react-query";

interface TestRenderConfig {
  routes?: History.LocationDescriptor[];
}

const mockLoader = <div>Loading...</div>;
const queryCache = new QueryCache({
  defaultConfig: {
    queries: { cacheTime: Infinity },
    shared: { suspense: true },
  },
});

const renderTest = (ui: ReactElement, config?: TestRenderConfig) =>
  render(
    <Suspense fallback={mockLoader}>
      <MemoryRouter initialEntries={config?.routes}>
        <HelmetProvider>
          <ReactQueryCacheProvider queryCache={queryCache}>
            {ui}
          </ReactQueryCacheProvider>
        </HelmetProvider>
      </MemoryRouter>
    </Suspense>
  );

export default renderTest;
