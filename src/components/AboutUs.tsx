import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:px-10 bg-gani-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full border-2 border-dashed border-gani-green/30"></div>
      <div className="absolute left-10 top-10 w-16 h-16 border-2 border-gani-green/30"></div>
      <svg
        className="absolute bottom-0 left-0 h-40 w-40 text-gani-green/10"
        viewBox="0 0 200 200"
      >
        <path
          fill="currentColor"
          d="M48.8,-76.4C63.9,-69.2,77.4,-57.3,83.9,-42.3C90.3,-27.3,89.8,-9.3,85.8,7.2C81.7,23.8,74.1,39,63.1,50.4C52.1,61.8,37.5,69.5,22.4,73.1C7.2,76.7,-8.5,76.3,-23.9,73.3C-39.2,70.3,-54.3,64.8,-65.4,54.4C-76.5,43.9,-83.5,28.5,-85.7,12.3C-88,-3.9,-85.4,-21,-77.9,-35.7C-70.4,-50.5,-58,-63,-44.2,-70C-30.4,-77,-15.2,-78.4,0.8,-79.8C16.9,-81.1,33.8,-83.6,48.8,-76.4Z"
          transform="translate(100 100)"
        />
      </svg>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className="order-2 lg:order-1 animate-fade-in"
            style={{ animationDelay: "300ms" }}
          >
            <span className="inline-block text-gani-green font-medium mb-3">
              {t("ourStory")}
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair leading-tight mb-6">
              {t("storyTitle")}
            </h2>
            <p className="text-lg text-gani-dark/80 mb-6">
              {t("storyDescription1")}
            </p>
            <p className="text-lg text-gani-dark/80 mb-8">
              {t("storyDescription2")}
            </p>
            <Button className="bg-gani-green hover:bg-gani-green-dark text-white rounded-none px-8">
              {t("ourPhilosophy")} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div
            className="order-1 lg:order-2 animate-fade-in"
            style={{ animationDelay: "500ms" }}
          >
            <div className="relative">
              <div className="absolute inset-0 border-2 border-gani-green border-dashed rounded-lg transform translate-x-4 translate-y-4"></div>
              <img
                src="https://media.gettyimages.com/id/1740856436/video/large-lumber-factory-it-is-a-factory-that-produces-shaped-wood-and-is-a-warehouse-store-for.jpg?s=640x640&k=20&c=Gqz6or6v2c__C1goHOs23t7ftJuw02P9iOC7W-z4MHY="
                alt="Gani Supply studio"
                className="relative z-10 w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Brand timeline/milestones */}
        <div className="mt-20 pt-20 border-t border-gani-green/20">
          <h3 className="text-center text-2xl font-playfair mb-16">
            {t("ourJourney")}
          </h3>
          <div className="flex flex-col md:flex-row justify-between relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-0 left-0 right-0 h-0.5 bg-gani-green/20 transform translate-y-10"></div>

            {/* Milestones */}
            {["2018", "2020", "2022", "2025"].map((year, index) => (
              <div
                key={year}
                className="flex flex-col items-center mb-10 md:mb-0 relative animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-gani-green h-5 w-5 rounded-full z-10 mb-4"></div>
                <h4 className="font-playfair text-xl mb-2">{year}</h4>
                <p className="text-center text-sm text-gani-dark/70 max-w-[200px]">
                  {t(`milestone${index + 1}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
