import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Newsletter from "@/components/Newsletter";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import ProductModal from "@/components/ProductModal";

const Products = () => {
  const { t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // Sample product data with descriptions and processes
  const products = [
    {
      id: 1,
      nameKey: "hardwoodCharcoal",
      image: "images/grayCharcoal.jpg",
      description: "hardwoodCharcoalDesc",
      process: [
        "hardwoodCharcoalStep1",
        "hardwoodCharcoalStep2",
        "hardwoodCharcoalStep3",
        "hardwoodCharcoalStep4",
        "hardwoodCharcoalStep5",
      ],
    },
    {
      id: 2,
      nameKey: "sawdust",
      image: "images/charkol.jpg",
      description: "sawdustDesc",
      process: [
        "sawdustStep1",
        "sawdustStep2",
        "sawdustStep3",
        "sawdustStep4",
        "sawdustStep5",
      ],
    },
    {
      id: 3,
      nameKey: "bricket",
      image: "images/charcoal.jpg",
      description: "bricketDesc",
      process: [
        "bricketStep1",
        "bricketStep2",
        "bricketStep3",
        "bricketStep4",
        "bricketStep5",
      ],
    },
    {
      id: 4,
      nameKey: "bricketBBQ",
      image: "images/bricketBBQ.jpg",
      description: "bricketBBQDesc",
      process: [
        "bricketBBQStep1",
        "bricketBBQStep2",
        "bricketBBQStep3",
        "bricketBBQStep4",
        "bricketBBQStep5",
      ],
    },
    {
      id: 5,
      nameKey: "woodPellet",
      image: "images/woodPellet.webp",
      description: "woodPelletDesc",
      process: [
        "woodPelletStep1",
        "woodPelletStep2",
        "woodPelletStep3",
        "woodPelletStep4",
        "woodPelletStep5",
      ],
    },
    {
      id: 6,
      nameKey: "woodChip",
      image: "images/woodChip.webp",
      description: "woodChipDesc",
      process: [
        "woodChipStep1",
        "woodChipStep2",
        "woodChipStep3",
        "woodChipStep4",
        "woodChipStep5",
      ],
    },
    {
      id: 7,
      nameKey: "fireWood",
      image: "images/firewood.jpg",
      description: "fireWoodDesc",
      process: [
        "fireWoodStep1",
        "fireWoodStep6",
        "fireWoodStep2",
        "fireWoodStep3",
        "fireWoodStep4",
        "fireWoodStep5",
      ],
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

      <section className="py-16 md:px-10 bg-gani-cream">
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
                    alt={t(product.nameKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-playfair text-lg mb-2">
                    {t(product.nameKey)}
                  </h3>
                  <Button
                    className="w-full bg-gani-green hover:bg-gani-green-dark text-white"
                    onClick={() => setSelectedProduct(product.id)}
                  >
                    {t("viewDetails")}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          product={{
            id: products.find((p) => p.id === selectedProduct)!.id,
            nameKey: products.find((p) => p.id === selectedProduct)!.nameKey,
            descKey: products.find((p) => p.id === selectedProduct)!
              .description,
            image: products.find((p) => p.id === selectedProduct)!.image,
            process: products.find((p) => p.id === selectedProduct)!.process,
          }}
        />
      )}

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Products;
