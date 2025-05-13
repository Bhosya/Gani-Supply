import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Newsletter from "@/components/Newsletter";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";

const Products = () => {
  const { t } = useLanguage();

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Hardwood Charcoal",
      image: "images/hardwoordCharcoal.jpeg",
    },
    {
      id: 2,
      name: "Sawdust",
      image: "images/sawdust.jpg",
    },
    {
      id: 3,
      name: "Bricket",
      image: "images/charcoal.jpg",
    },
    {
      id: 4,
      name: "Wood Pellet",
      image: "images/woodPellet.webp",
    },
    {
      id: 5,
      name: "Wood Chip",
      image: "images/woodChip.webp",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title={t("curatedCollection")}
        description={t("collectionDescription")}
        imageUrl="https://mieco.com.my/wp-content/uploads/2023/10/RUBBER-WOOD-3-scaled.jpg"
      />

      <section className="py-16 px-6 md:px-10 bg-gani-cream">
        <div className="container mx-auto">
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-playfair text-lg mt-1 mb-1">
                    {product.name}
                  </h3>
                  <Button className="w-full bg-gani-green hover:bg-gani-green-dark text-white">
                    {t("viewDetails")}
                  </Button>
                </div>
              </div>
            ))}
            {/* CTA Block */}
            <div className="flex items-center justify-center aspect-square bg-gani-green text-white text-center transition-colors duration-300">
              <div>
                <h3 className="text-7xl font-bold mb-1">
                  {t("viewAllProducts")}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Products;
