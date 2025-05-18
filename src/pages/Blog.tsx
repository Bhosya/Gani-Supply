import React from "react";
import SEO from "../components/SEO";
import { useSEO } from "../hooks/useSEO";

const Blog: React.FC = () => {
  const seo = useSEO({
    page: "blog",
    customImage: "https://www.ganisupply.com/images/blog-og.jpg",
  });

  return (
    <>
      <SEO {...seo} />
      {/* Rest of your blog page content */}
    </>
  );
};

export default Blog;
