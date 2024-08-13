import React from "react";
import Navbar from "@/components/ui/navbar";
import Content from "@/components/ui/contents";
import Footer from "@/components/ui/Footer";

export function HomePage() {
  return (
    <div className="font-sans flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Content Component */}
      <main className="flex-grow">
        <Content />
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}