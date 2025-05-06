import React from "react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  description: string;
  imageUrl: string;
  className?: string;
}

const PageHero = ({
  title,
  description,
  imageUrl,
  className,
}: PageHeroProps) => {
  return (
    <div className={cn("relative h-[60vh] flex items-center", className)}>
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gani-dark/80 to-gani-dark/40"></div>
      </div>

      <div className="container mx-auto px-6 md:px-10 relative z-20">
        <div className="max-w-2xl space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-playfair font-medium leading-tight text-white">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gani-cream/90">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHero;
