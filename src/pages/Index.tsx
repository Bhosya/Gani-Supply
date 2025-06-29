import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import AboutUs from "@/components/AboutUs";
import ContactSection from "@/components/ContactSection";
import Gallery from "@/components/Gallery";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductShowcase />
      <AboutUs />
      <Gallery />
      <ContactSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
