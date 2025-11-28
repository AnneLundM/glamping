import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./Routes";
import "./App.css";

/* Browserrouter skal være 'container' for App (altså hele projektet) 
Den fungerer som en såkaldt 'provider' der sørger for at renderer 
forskelligt indhold (komponenter) baseret på url'en.
*/

// Her hentes html-elementet med id'et 'root' fra dommen. Dommen 'kobles' på.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
