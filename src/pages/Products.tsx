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
      name: "Hardwood Charcoal",
      image: "images/hardwoordCharcoal.jpeg",
      description:
        "Premium hardwood charcoal made from sustainably sourced timber. Our hardwood charcoal is known for its long burning time, high heat output, and minimal smoke production. Perfect for both commercial and residential use.",
      process: [
        "Selection of premium hardwood timber",
        "Drying process to reduce moisture content",
        "Carbonization in controlled temperature kilns",
        "Quality control and grading",
        "Packaging and distribution",
      ],
    },
    {
      id: 2,
      name: "Sawdust",
      image: "images/sawdust.jpg",
      description:
        "High-quality sawdust produced from our wood processing operations. This byproduct is carefully collected and processed to ensure consistency and cleanliness. Ideal for various industrial applications.",
      process: [
        "Collection from wood processing operations",
        "Screening and filtering for consistency",
        "Drying to optimal moisture content",
        "Quality testing and grading",
        "Packaging in various sizes",
      ],
    },
    {
      id: 3,
      name: "Bricket",
      image: "images/charcoal.jpg",
      description:
        "Compressed charcoal briquettes made from a blend of premium charcoal and natural binders. Our briquettes offer consistent heat output and are perfect for grilling and industrial applications.",
      process: [
        "Mixing of charcoal powder with natural binders",
        "Compression into uniform shapes",
        "Drying process",
        "Quality control testing",
        "Packaging and distribution",
      ],
    },
    {
      id: 4,
      name: "Wood Pellet",
      image: "images/woodPellet.webp",
      description:
        "Premium wood pellets made from compressed sawdust and wood waste. Our pellets are designed for high efficiency and low emissions, making them ideal for heating systems and industrial use.",
      process: [
        "Collection and preparation of raw materials",
        "Grinding and drying",
        "Compression into pellet form",
        "Cooling and screening",
        "Quality control and packaging",
      ],
    },
    {
      id: 5,
      name: "Wood Chip",
      image: "images/woodChip.webp",
      description:
        "High-quality wood chips produced from various wood species. Our wood chips are processed to ensure consistent size and quality, suitable for multiple industrial applications.",
      process: [
        "Selection of suitable wood materials",
        "Chipping to specified sizes",
        "Screening for consistency",
        "Drying to optimal moisture content",
        "Quality control and packaging",
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
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-playfair text-lg mt-1 mb-1">
                    {product.name}
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
            {/* CTA Block */}
            <div className="flex items-center justify-center aspect-square bg-gani-green text-white text-center transition-colors duration-300">
              <div className="px-4">
                <h3 className="text-5xl md:text-7xl font-bold mb-1">
                  {t("buyNow")}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          product={products.find((p) => p.id === selectedProduct)!}
        />
      )}

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Products;
