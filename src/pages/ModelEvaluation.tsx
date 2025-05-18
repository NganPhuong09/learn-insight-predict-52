
import React from "react";
import ModelEvaluationContent from "../components/ModelEvaluationContent";
import { SidebarProvider, Sidebar, SidebarContent, SidebarInset } from "@/components/ui/sidebar";

const ModelEvaluation = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar variant="inset">
          <SidebarContent>
            {/* Sidebar content is now empty since we removed the navigation elements */}
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <div className="container mx-auto px-4 py-8">
            <ModelEvaluationContent />
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default ModelEvaluation;
