import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="images/woodChip.webp"
          alt="Gani Supply Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gani-dark/70 to-gani-dark/10"></div>
      </div>

      <div className="container px-6 md:px-10 z-10">
        <div className="max-w-2xl space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-playfair font-medium leading-tight text-white">
            {t("artisticEssentials")}
          </h1>
          <p className="text-lg md:text-xl text-gani-cream/90">
            {t("curatedDescription")}
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Link to="/products">
              <Button
                size="lg"
                className="bg-gani-green hover:bg-gani-green-dark text-white rounded-none px-8"
              >
                {t("exploreCollection")} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-gani-cream text-black hover:bg-gani-cream/10 hover:text-white rounded-none px-8"
              >
                {t("ourPhilosophy")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
