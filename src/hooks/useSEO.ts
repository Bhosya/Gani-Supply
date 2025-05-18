import { seoConfig, PageType } from "../config/seoConfig";

interface UseSEOProps {
  page: PageType;
  customTitle?: string;
  customDescription?: string;
  customUrl?: string;
  customImage?: string;
}

export const useSEO = ({
  page,
  customTitle,
  customDescription,
  customUrl,
  customImage,
}: UseSEOProps) => {
  const defaultSEO = seoConfig[page];

  return {
    title: customTitle || defaultSEO.title,
    description: customDescription || defaultSEO.description,
    url: customUrl || defaultSEO.url,
    image: customImage || "https://www.ganisupply.com/images/og-image.jpg",
  };
};
