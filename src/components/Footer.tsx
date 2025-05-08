import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gani-dark text-white pt-16 pb-8 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div>
            <h3 className="font-playfair text-2xl mb-4">Gani Supply</h3>
            <p className="text-white/70 mb-6">{t("curatedDescription")}</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-medium mb-4 text-white/90">{t("shop")}</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/products"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t("allProducts")}
                </Link>
              </li>
              <li>
                <Link
                  to="/products/home-decor"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t("homeDecor")}
                </Link>
              </li>
              <li>
                <Link
                  to="/products/furniture"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t("furniture")}
                </Link>
              </li>
              <li>
                <Link
                  to="/products/textiles"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t("textiles")}
                </Link>
              </li>
              <li>
                <Link
                  to="/products/kitchenware"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t("kitchen")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-medium mb-4 text-white/90">{t("company")}</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  to="/journal"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t("journal")}
                </Link>
              </li>
              <li>
                <Link
                  to="/sustainability"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t("sustainability")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t("contact")}
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t("faq")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-medium mb-4 text-white/90">
              {t("joinNewsletter")}
            </h4>
            <p className="text-white/70 mb-4">{t("newsletterDescription")}</p>
            <div className="flex space-x-2">
              <Input
                placeholder={t("emailPlaceholder")}
                className="bg-white/10 border-white/20 placeholder:text-white/50 rounded-none"
              />
              <Button className="bg-gani-green hover:bg-gani-green-dark text-white rounded-none">
                {t("subscribe")}
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Gani Supply. {t("rightsReserved")}
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white/80">
              {t("privacyPolicy")}
            </Link>
            <Link to="/terms" className="hover:text-white/80">
              {t("termsOfService")}
            </Link>
            <Link to="/shipping" className="hover:text-white/80">
              {t("shippingPolicy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
