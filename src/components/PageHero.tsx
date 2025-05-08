import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface PageHeroProps {
  title: string;
  description: string;
  imageUrl: string;
}

const PageHero = ({ title, description, imageUrl }: PageHeroProps) => {
  const { t } = useLanguage();

  return (
    <section className="relative h-[60vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      </div>

      <div className="container px-6 md:px-10 z-10">
        <div className="max-w-2xl space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-playfair font-medium leading-tight text-white">
            {t(title)}
          </h1>
          <p className="text-lg text-gani-cream/90">{t(description)}</p>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
