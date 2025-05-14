import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";

const Gallery = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    {
      id: 4,
      title: "Premium Wood",
      image:
        "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      category: "Wood",
    },
    {
      id: 5,
      title: "Charcoal Production",
      image:
        "https://plus.unsplash.com/premium_photo-1677456381939-8cbdf4ed2073?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Charcoal",
    },
    {
      id: 6,
      title: "Industrial Equipment",
      image:
        "https://images.unsplash.com/photo-1507646227500-4d389b0012be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      category: "Industrial",
    },
  ];

  // Categories for filter
  const categories = [
    "All",
    ...new Set(galleryImages.map((item) => item.category)),
  ];

  // Filter images based on selected category
  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title={t("gallery")}
        description={t("galleryDescription")}
        imageUrl="https://plus.unsplash.com/premium_photo-1683417272601-dbbfed0ed718?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <section className="py-7 md:py-16 md:px-10 bg-gani-cream">
        <div className="container mx-auto">
          {/* Category Filter */}
          <div className="overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex gap-4 mb-4 md:mb-12 min-w-max">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  className={`shadow-md ${
                    selectedCategory === category
                      ? "bg-gani-green text-white"
                      : "text-gani-dark hover:bg-gani-green/10"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((item) => (
              <div
                key={item.id}
                className="relative h-80 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div className="bg-white/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-gani-dark rounded-full inline-block mb-3">
                    {item.category}
                  </div>
                  <h3 className="font-playfair text-xl text-white mb-3">
                    {item.title}
                  </h3>
                  <Button
                    variant="ghost"
                    className="text-white hover:text-white hover:underline hover:bg-transparent p-0"
                  >
                    {t("viewDetails")} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Gallery;
