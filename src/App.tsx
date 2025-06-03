import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import DataOverview from "./pages/DataOverview";
import DataQuality from "./pages/DataQuality";
import BSIOverview from "./pages/BSIOverview";
import ModelOverview from "./pages/ModelOverview";
import NotFound from "./pages/NotFound";
import ModelEvaluation from "./pages/ModelEvaluation";
import React from "react"; // Add explicit React import

// Create a new QueryClient instance inside the component
const App = () => {
  // Create QueryClient inside component to ensure React is in scope
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/data-overview" element={<DataOverview />} />
            <Route path="/data-quality" element={<DataQuality />} />
            <Route path="/data-cleaning" element={<DataQuality />} />
            <Route path="/bsi-overview" element={<BSIOverview />} />
            <Route path="/model-overview" element={<ModelOverview />} />
            <Route path="/model-evaluation" element={<ModelEvaluation />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
