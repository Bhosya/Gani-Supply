import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";

const Journal = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // Sample journal entries
  const journalEntries = [
    {
      id: 1,
      title: "The Art of Slow Living",
      excerpt:
        "Exploring how thoughtful design choices can help create spaces that encourage mindfulness and presence in daily life.",
      image:
        "https://plus.unsplash.com/premium_photo-1688598498264-51323f3c9a35?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Lifestyle",
      date: "May 4, 2025",
    },
    {
      id: 2,
      title: "Behind the Craft: Traditional Indonesian Textiles",
      excerpt:
        "A look into the centuries-old techniques that inspire our textile collection, and the artisans keeping these traditions alive.",
      image:
        "https://images.unsplash.com/photo-1509059852496-f3822ae057bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      category: "Craftsmanship",
      date: "April 22, 2025",
    },
    {
      id: 3,
      title: "Seasonal Styling: Embracing Natural Elements",
      excerpt:
        "How to incorporate organic materials and seasonal changes into your home for a dynamic, evolving space.",
      image:
        "https://images.unsplash.com/photo-1493606278519-11aa9f86e40a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      category: "Design",
      date: "April 15, 2025",
    },
    {
      id: 4,
      title: "Sustainable Materials in Modern Design",
      excerpt:
        "Exploring innovative eco-friendly materials that are shaping the future of home goods without compromising on style.",
      image:
        "https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      category: "Sustainability",
      date: "April 3, 2025",
    },
    {
      id: 5,
      title: "The Creative Process: Studio Visit with Ceramic Artist Mei Lin",
      excerpt:
        "A conversation with the artist behind our most popular ceramic collection, discussing inspiration and technique.",
      image:
        "https://plus.unsplash.com/premium_photo-1677456381939-8cbdf4ed2073?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Artist Spotlight",
      date: "March 28, 2025",
    },
    {
      id: 6,
      title: "Color Theory: Creating Harmony in Your Home",
      excerpt:
        "Understanding the principles of color and how to use them to create spaces that feel balanced and inspired.",
      image:
        "https://images.unsplash.com/photo-1507646227500-4d389b0012be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      category: "Design",
      date: "March 15, 2025",
    },
  ];

  // Categories for filter
  const categories = [
    "All",
    ...new Set(journalEntries.map((entry) => entry.category)),
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="Journal"
        description="Stories, insights, and inspiration from the world of Gani Supply and beyond."
        imageUrl="https://images.unsplash.com/photo-1526280760714-f9e8b26f318f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <section className="py-16 px-6 md:px-10 bg-gani-cream">
        <div className="container mx-auto">
          {/* Featured Article */}
          <div className="bg-white rounded-lg overflow-hidden mb-16 shadow-sm animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-96 lg:h-auto">
                <img
                  src="https://plus.unsplash.com/premium_photo-1686090448517-2f692cc45187?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Featured Article"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="text-gani-green text-sm font-medium mb-2">
                  Featured • Design Philosophy
                </div>
                <h2 className="font-playfair text-2xl md:text-3xl mb-4">
                  The Intersection of Art and Function in Modern Home Design
                </h2>
                <p className="text-gani-dark/80 mb-6">
                  How thoughtful curation and artistic expression can transform
                  everyday objects into sources of inspiration and joy in your
                  living spaces.
                </p>
                <div className="mt-auto">
                  <Button className="bg-gani-green hover:bg-gani-green-dark text-white">
                    Read Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

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

          {/* Journal Entries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {journalEntries.map((entry) => (
              <div
                key={entry.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-gani-green text-sm font-medium">
                      {entry.category}
                    </span>
                    <span className="text-gani-dark/60 text-sm">
                      {entry.date}
                    </span>
                  </div>
                  <h3 className="font-playfair text-xl mb-3">{entry.title}</h3>
                  <p className="text-gani-dark/80 text-sm mb-4">
                    {entry.excerpt}
                  </p>
                  <Button
                    variant="ghost"
                    className="text-gani-green hover:text-gani-green-dark p-0"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                className="border-gani-green text-gani-green h-10 w-10 p-0"
              >
                1
              </Button>
              <Button
                variant="outline"
                className="border-gani-earth text-gani-dark h-10 w-10 p-0"
              >
                2
              </Button>
              <Button
                variant="outline"
                className="border-gani-earth text-gani-dark h-10 w-10 p-0"
              >
                3
              </Button>
              <span className="text-gani-dark/60">...</span>
              <Button
                variant="outline"
                className="border-gani-earth text-gani-dark h-10 w-10 p-0"
              >
                8
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Journal;
