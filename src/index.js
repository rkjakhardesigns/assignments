/* React Dependencies */
import { createRoot } from "react-dom/client";

/* Local Components */
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <App />
);