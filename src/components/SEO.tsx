import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Gani Supply - Premium Biomass Fuel Exporter from Indonesia",
  description = "Leading Indonesian exporter of premium biomass fuels including hardwood charcoal, briquettes, wood pellets, and firewood. Sustainable, eco-friendly solutions for global markets.",
  image = "https://www.ganisupply.com/images/og-image.jpg",
  url = "https://www.ganisupply.com",
}) => {
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Gani Supply",
    url: "https://www.ganisupply.com",
    logo: "https://www.ganisupply.com/images/logo.png",
    description:
      "Premium biomass fuel exporter from Indonesia, specializing in sustainable and eco-friendly solid fuels for global markets.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Indonesia",
    },
    sameAs: [
      "https://www.linkedin.com/company/gani-supply",
      "https://www.facebook.com/ganisupply",
      "https://twitter.com/ganisupply",
    ],
  };

  const jsonLdProducts = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Hardwood Charcoal",
      description:
        "Premium hardwood charcoal made from sustainable Indonesian forests. Perfect for BBQ and industrial applications.",
      brand: {
        "@type": "Brand",
        name: "Gani Supply",
      },
      category: "Biomass Fuel",
      countryOfOrigin: "Indonesia",
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Wood Pellets",
      description:
        "High-quality wood pellets for heating and industrial use. Made from compressed sawdust and wood waste.",
      brand: {
        "@type": "Brand",
        name: "Gani Supply",
      },
      category: "Biomass Fuel",
      countryOfOrigin: "Indonesia",
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "BBQ Briquettes",
      description:
        "Premium BBQ briquettes for professional and home grilling. Long-lasting and consistent heat output.",
      brand: {
        "@type": "Brand",
        name: "Gani Supply",
      },
      category: "Biomass Fuel",
      countryOfOrigin: "Indonesia",
    },
  ];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLdOrganization)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(jsonLdProducts)}
      </script>
    </Helmet>
  );
};

export default SEO;

// SEO Keywords Suggestions:
/*
Short-tail keywords:
- biomass fuel
- hardwood charcoal
- wood pellets
- briquettes
- firewood
- wood chips
- sawdust briquette
- BBQ charcoal
- biomass exporter
- Indonesian charcoal

Long-tail keywords:
- premium hardwood charcoal Indonesia
- sustainable biomass fuel exporter
- wholesale wood pellets supplier
- eco-friendly BBQ briquettes
- industrial wood chips supplier
- sawdust briquette manufacturer
- bulk hardwood charcoal exporter
- sustainable firewood supplier
- biomass fuel for industrial use
- Indonesian wood pellet manufacturer
*/
