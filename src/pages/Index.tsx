
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ResearchOverview from '@/components/ResearchOverview';
import DataPipeline from '@/components/DataPipeline';
import Footer from '@/components/Footer';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ResearchOverview />
        <DataPipeline />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
