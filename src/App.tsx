
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Manifeste from "./pages/Manifeste";
import Bloc from "./pages/Bloc";
import NotFound from "./pages/NotFound";
import Revalorisations from "./pages/Revalorisations";
import TaxBrackets from "./pages/TaxBrackets";
import FAQ from "./pages/FAQ";

const queryClient = new QueryClient();

function App() {
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/manifeste" element={<Manifeste />} />
              <Route path="/revalorisations" element={<Revalorisations />} />
              <Route path="/fiscalite" element={<TaxBrackets />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bloc/:id" element={<Bloc />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;
