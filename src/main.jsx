import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { CharactersByLocation } from "./pages/characters-by-location/CharactersByLocation.jsx";
import { Characters } from "./pages/characters/Characters.jsx";
import { CharacterDetails } from "./pages/details/CharacterDetails.jsx";
import { Locations } from "./pages/locations/Locations.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Navigate to="/all" />} />
            <Route path="/all" element={<Characters />} />
            <Route path="/character/:id" element={<CharacterDetails />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/locations/:id" element={<CharactersByLocation />} />
          </Route>
          <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
