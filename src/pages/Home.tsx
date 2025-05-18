import React from "react";
import SEO from "../components/SEO";
import { useSEO } from "../hooks/useSEO";

const Home: React.FC = () => {
  const seo = useSEO({ page: "home" });

  return (
    <>
      <SEO {...seo} />
      {/* Rest of your home page content */}
    </>
  );
};

export default Home;
