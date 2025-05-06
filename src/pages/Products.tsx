import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Newsletter from "@/components/Newsletter";
import PageHero from "@/components/PageHero";

const Products = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Handcrafted Ceramic Vase",
      category: "Home Decor",
      price: 89,
      image:
        "https://plus.unsplash.com/premium_photo-1676142785766-3ee6721ebc8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Natural Wood Side Table",
      category: "Furniture",
      price: 249,
      image:
        "https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Hand-woven Textile Wall Art",
      category: "Textiles",
      price: 175,
      image:
        "https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Artisanal Coffee Set",
      category: "Kitchen",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      name: "Minimalist Floor Lamp",
      category: "Lighting",
      price: 320,
      image:
        "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      name: "Organic Cotton Throw Pillows",
      category: "Textiles",
      price: 65,
      image:
        "https://plus.unsplash.com/premium_photo-1701163817917-f060aa439fe8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // Filter categories
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="Our Collection"
        description="Each piece in our collection has been carefully selected for its unique character, quality craftsmanship, and ability to transform everyday moments."
        imageUrl="https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1672&q=80"
      />

      <section className="py-16 px-6 md:px-10 bg-gani-cream">
        <div className="container mx-auto">
          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={
                  index === 0
                    ? "bg-gani-green text-white"
                    : "border-gani-green text-gani-green"
                }
              >
                {category}
              </Button>
            ))}
          </div>

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
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="w-full bg-gani-green hover:bg-gani-green-dark text-white">
                      View Details
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-sm text-gani-green font-medium">
                    {product.category}
                  </div>
                  <h3 className="font-playfair text-lg mt-1">{product.name}</h3>
                  <div className="mt-2 font-medium">${product.price}</div>
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

export default Products;
