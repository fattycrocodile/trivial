import React, { FC } from "react";

import { Stack } from "components";

const Content: FC = ({ children }) => (
  <main className="flex flex-col">
    <Stack variant="md">{children}</Stack>
  </main>
);

export default Content;
