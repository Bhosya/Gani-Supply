import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ImageModal from "./ImageModal";

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<{
    id: number;
    title: string;
    image: string;
    category: string;
  } | null>(null);

  // Sample gallery images
  const galleryImages = [
    {
      id: 1,
      title: t("galleryWoodCollection"),
      image: "images/firewood.jpg",
      category: t("galleryCategoryWood"),
    },
    {
      id: 2,
      title: t("galleryCharcoalProducts"),
      image: "images/charkol.jpg",
      category: t("galleryCategoryCharcoal"),
    },
    {
      id: 3,
      title: t("gallerySortingProcess"),
      image: "images/truckToContainer.jpg",
      category: t("galleryCategoryIndustrial"),
    },
  ];

  return (
    <section className="py-20 md:px-10 bg-gani-cream/50">
      <div className="container mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair mb-3">
            {t("gallery")}
          </h2>
          <p className="text-gani-dark/70 max-w-md">
            {t("galleryDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((item, index) => (
            <div
              key={item.id}
              className="relative h-80 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in group cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 px-6 w-full">
                <div className="bg-white/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-gani-dark rounded-full inline-block mb-3">
                  {item.category}
                </div>
                <h3 className="font-playfair text-xl text-white mb-3">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 text-center">
          <a
            href="https://drive.google.com/drive/folders/1-DyiWdN4wHOFTibWfquznQhzko7kIm2K"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-gani-green hover:bg-gani-green-dark text-white rounded-none px-8"
            >
              {t("viewAllImages")} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        image={{
          titleKey: selectedImage?.title || galleryImages[0].title,
          image: selectedImage?.image || galleryImages[0].image,
          categoryKey: selectedImage?.category || galleryImages[0].category,
        }}
      />
    </section>
  );
};

export default Gallery;
