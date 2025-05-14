import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import ProductModal from "@/components/ProductModal";

// Sample product data
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

const ProductCard = ({
  product,
  index,
  onViewDetails,
}: {
  product: any;
  index: number;
  onViewDetails: () => void;
}) => {
  const { t } = useLanguage();

  return (
    <div
      key={index}
      className="group relative aspect-square overflow-hidden hover-lift"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <span className="text-white/90 text-sm">{product.category}</span>
          <div className="flex items-center justify-between mt-2">
            <h3 className="text-white font-playfair text-lg md:text-xl">
              {product.name}
            </h3>
            <Button
              size="sm"
              variant="outline"
              className="bg-white/20 backdrop-blur-sm text-white border-white/50 hover:bg-white hover:text-gani-dark rounded-full p-2 h-auto w-auto"
              onClick={onViewDetails}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductShowcase = () => {
  const { t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  return (
    <section className="py-20 md:px-10 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair mb-3">
              {t("curatedCollection")}
            </h2>
            <p className="text-gani-dark/70 max-w-md">
              {t("collectionDescription")}
            </p>
          </div>
          <Button
            variant="link"
            className="text-gani-green flex items-center no-underline mt-4 md:mt-0"
          >
            {t("viewAllProducts")} <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        {/* Asymmetrical product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onViewDetails={() => setSelectedProduct(product.id)}
            />
          ))}

          {/* CTA Block */}
          <Link to="/products">
            <div className="flex items-center justify-center aspect-square bg-gani-dark text-white text-center hover:bg-black transition-colors duration-300 cursor-pointer">
              <div>
                <h3 className="text-xl font-semibold mb-1">
                  See Our Full Catalogue
                </h3>
                <p className="text-sm opacity-80">
                  Browse all our wood-based products
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          product={products.find((p) => p.id === selectedProduct)!}
        />
      )}
    </section>
  );
};

export default ProductShowcase;
