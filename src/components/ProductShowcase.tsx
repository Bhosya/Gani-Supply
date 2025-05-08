import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Sample product data
const products = [
  {
    id: 1,
    name: "Handcrafted Ceramic Vase",
    price: "$89",
    image:
      "https://images.unsplash.com/photo-1723107624989-7890909df138?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Home Decor",
  },
  {
    id: 2,
    name: "Minimalist Wooden Chair",
    price: "$245",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1365&q=80",
    category: "Furniture",
  },
  {
    id: 3,
    name: "Linen Table Runner",
    price: "$65",
    image:
      "https://images.unsplash.com/photo-1462927114214-6956d2fddd4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    category: "Textiles",
  },
];

const ProductCard = ({ product, index }: { product: any; index: number }) => {
  const { t } = useLanguage();

  return (
    <div
      className={`group relative overflow-hidden hover-lift ${
        index % 3 === 0 ? "col-span-2 row-span-2" : ""
      }`}
      style={{
        animationDelay: `${index * 150}ms`,
      }}
    >
      <div className="relative aspect-square w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <span className="text-white/90 text-sm">{product.category}</span>
          <h3 className="text-white font-playfair text-lg md:text-xl">
            {product.name}
          </h3>
          <div className="flex items-center justify-between mt-2">
            <span className="text-white font-medium">{product.price}</span>
            <Button
              size="sm"
              variant="outline"
              className="bg-white/20 backdrop-blur-sm text-white border-white/50 hover:bg-white hover:text-gani-dark rounded-full p-2 h-auto w-auto"
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

  return (
    <section className="py-20 px-6 md:px-10 bg-white">
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
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
