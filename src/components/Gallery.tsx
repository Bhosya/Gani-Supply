import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ImageModal from "./ImageModal";

// Sample gallery images
const galleryImages = [
  {
    id: 1,
    title: "Wood Collection",
    image:
      "https://images.unsplash.com/photo-1523575708161-ad0fc2a9b951?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    category: "Wood",
  },
  {
    id: 2,
    title: "Charcoal Products",
    image:
      "https://plus.unsplash.com/premium_photo-1676142785766-3ee6721ebc8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Charcoal",
  },
  {
    id: 3,
    title: "Industrial Solutions",
    image:
      "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    category: "Industrial",
  },
];

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[0] | null
  >(null);

  return (
    <section className="py-20 md:px-10 bg-gani-cream/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair mb-3">
              {t("gallery")}
            </h2>
            <p className="text-gani-dark/70 max-w-md">
              {t("galleryDescription")}
            </p>
          </div>
          <Link to="/gallery">
            <Button
              variant="link"
              className="text-gani-green flex items-center no-underline mt-4 md:mt-0"
            >
              {t("viewAllImages")} <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 w-full">
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
      </div>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        image={selectedImage || galleryImages[0]}
      />
    </section>
  );
};

export default Gallery;
