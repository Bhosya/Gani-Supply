import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "../components/SEO";
import { useSEO } from "../hooks/useSEO";

const Contact = () => {
  const { t } = useLanguage();
  const seo = useSEO({
    page: "contact",
    customImage: "https://www.ganisupply.com/images/contact-og.jpg",
  });

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO {...seo} />
      <div className="min-h-screen">
        <Navbar />
        <PageHero
          title={t("contactUs")}
          description={t("contactDescription")}
          imageUrl="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Contact;
