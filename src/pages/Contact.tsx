import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";

const Contact = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="Contact Us"
        description="We'd love to hear from you. Get in touch with any questions, inquiries, or to schedule a visit to our store."
        imageUrl="https://plus.unsplash.com/premium_photo-1677456381939-8cbdf4ed2073?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;
