import { MantineProvider } from "@mantine/core";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById('root')!).render(
 < MantineProvider>
    <App />
  </MantineProvider>
)
