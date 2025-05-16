import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import ImageModal from "@/components/ImageModal";
import { ArrowRight } from "lucide-react";

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryImages)[0] | null
  >(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sample gallery images with translation keys
  const galleryImages = [
    {
      id: 1,
      titleKey: "galleryWoodCollection",
      image: "images/firewood.jpg",
      categoryKey: "galleryCategoryWood",
    },
    {
      id: 2,
      titleKey: "galleryCharcoalProducts",
      image: "images/charkol.jpg",
      categoryKey: "galleryCategoryCharcoal",
    },
    {
      id: 3,
      titleKey: "gallerySortingProcess",
      image: "images/truckToContainer.jpg",
      categoryKey: "galleryCategoryIndustrial",
    },
    {
      id: 4,
      titleKey: "galleryWoodCollection",
      image: "images/woodChipReal.jpg",
      categoryKey: "galleryCategoryWood",
    },
    {
      id: 5,
      titleKey: "galleryCharcoalProducts",
      image: "https://live.staticflickr.com/65535/51141807548_d297d9c142_b.jpg",
      categoryKey: "galleryCategoryCharcoal",
    },
    {
      id: 6,
      titleKey: "gallerySortingProcess",
      image: "images/itemInContainer.jpg",
      categoryKey: "galleryCategoryIndustrial",
    },
  ];

  // Categories for filter with translation keys
  const categories = [
    { key: "all", label: "All" },
    { key: "galleryCategoryWood", label: t("galleryCategoryWood") },
    { key: "galleryCategoryCharcoal", label: t("galleryCategoryCharcoal") },
    { key: "galleryCategoryIndustrial", label: t("galleryCategoryIndustrial") },
  ];

  // Filter images based on selected category
  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (item) => t(item.categoryKey) === selectedCategory
        );

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title={t("gallery")}
        description={t("galleryDescription")}
        imageUrl="https://img1.wsimg.com/isteam/ip/6d3cbdaf-fa63-422b-a9f3-4c94912a6ab0/cfdc237a-ddff-4c8a-973f-f4cc9680d4b0.jpg/:/"
      />

      <section className="py-7 md:py-16 md:px-10 bg-gani-cream">
        <div className="container mx-auto">
          {/* Category Filter */}
          <div className="overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex gap-4 mb-4 md:mb-12 min-w-max">
              {categories.map((category) => (
                <Button
                  key={category.key}
                  variant={
                    selectedCategory === category.label ? "default" : "outline"
                  }
                  className={`shadow-md ${
                    selectedCategory === category.label
                      ? "bg-gani-green text-white"
                      : "text-gani-dark hover:bg-gani-green/10"
                  }`}
                  onClick={() => setSelectedCategory(category.label)}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((item) => (
              <div
                key={item.id}
                className="relative h-80 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.image}
                  alt={t(item.titleKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div className="bg-white/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-gani-dark rounded-full inline-block mb-3">
                    {t(item.categoryKey)}
                  </div>
                  <h3 className="font-playfair text-xl text-white">
                    {t(item.titleKey)}
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
      </section>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        image={selectedImage || galleryImages[0]}
      />

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Gallery;
