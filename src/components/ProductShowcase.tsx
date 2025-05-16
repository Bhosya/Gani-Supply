import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import ProductModal from "@/components/ProductModal";

interface Product {
  id: number;
  nameKey: string;
  descKey: string;
  image: string;
  process: string[];
}

// Sample product data
const products: Product[] = [
  {
    id: 1,
    nameKey: "hardwoodCharcoal",
    descKey: "hardwoodCharcoalDesc",
    image: "images/grayCharcoal.jpg",
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
    descKey: "sawdustDesc",
    image: "images/charkol.jpg",
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
    descKey: "bricketDesc",
    image: "images/charcoal.jpg",
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
    descKey: "bricketBBQDesc",
    image: "images/bricketBBQ.jpg",
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
    descKey: "woodPelletDesc",
    image: "images/woodChipReal.jpg",
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
    descKey: "woodChipDesc",
    image: "images/woodChip.webp",
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
    descKey: "fireWoodDesc",
    image: "images/firewood.jpg",
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
      className="group relative aspect-square overflow-hidden hover-lift cursor-pointer"
      style={{ animationDelay: `${index * 150}ms` }}
      onClick={onViewDetails}
    >
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={product.image}
          alt={t(product.nameKey)}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <span className="text-white/90 text-sm">{product.category}</span>
          <div className="flex items-center justify-between mt-2">
            <h3 className="text-white font-playfair text-lg md:text-xl">
              {t(product.nameKey)}
            </h3>
            <Button
              size="sm"
              variant="outline"
              className="bg-white/20 backdrop-blur-sm text-white border-white/50 hover:bg-white hover:text-gani-dark rounded-full p-2 h-auto w-auto"
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails();
              }}
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
