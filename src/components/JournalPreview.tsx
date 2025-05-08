import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Sample journal entries
const journalEntries = [
  {
    id: 1,
    title: "The Art of Slow Living",
    excerpt:
      "Exploring how thoughtfully designed objects can enhance our daily rituals and help us find moments of peace in our busy lives.",
    image:
      "https://images.unsplash.com/photo-1523575708161-ad0fc2a9b951?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    date: "May 3, 2025",
    category: "Lifestyle",
  },
  {
    id: 2,
    title: "Behind the Scenes: Crafting Our New Ceramic Collection",
    excerpt:
      "A journey into the workshop of master ceramicist Hana Wijaya as she creates exclusive pieces for Gani Supply.",
    image:
      "https://plus.unsplash.com/premium_photo-1676142785766-3ee6721ebc8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "April 22, 2025",
    category: "Artisans",
  },
  {
    id: 3,
    title: "Sustainable Design: More Than Just a Trend",
    excerpt:
      "How we're working with our partners to create beautiful products that are kind to the planet.",
    image:
      "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    date: "April 15, 2025",
    category: "Sustainability",
  },
];

const JournalPreview = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 md:px-10 bg-gani-cream/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair mb-3">
              {t("journal")}
            </h2>
            <p className="text-gani-dark/70 max-w-md">
              {t("journalDescription")}
            </p>
          </div>
          <Link to="/journal">
            <Button
              variant="link"
              className="text-gani-green flex items-center no-underline mt-4 md:mt-0"
            >
              {t("viewAllArticles")} <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journalEntries.map((entry, index) => (
            <div
              key={entry.id}
              className="bg-white overflow-hidden rounded-lg shadow-sm hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={entry.image}
                  alt={entry.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-gani-dark rounded-full">
                  {entry.category}
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-gani-dark/60 mb-2">{entry.date}</p>
                <h3 className="font-playfair text-xl mb-3">{entry.title}</h3>
                <p className="text-gani-dark/80 text-sm mb-4 line-clamp-2">
                  {entry.excerpt}
                </p>
                <Link
                  to={`/journal/${entry.id}`}
                  className="text-gani-green font-medium inline-flex items-center hover:underline"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalPreview;
