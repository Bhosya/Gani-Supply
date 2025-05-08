import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 py-4",
        scrolled
          ? "bg-gani-cream/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link
            to="/"
            className={cn(
              "text-2xl md:text-3xl font-playfair font-semibold tracking-wider transition-colors duration-300",
              scrolled ? "text-gani-green" : "text-white"
            )}
          >
            Gani Supply
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={cn(
              "font-medium transition-colors duration-300",
              scrolled
                ? "text-gani-green hover:text-gani-green-dark"
                : location.pathname === "/"
                ? "text-white"
                : "text-gani-cream hover:text-white"
            )}
          >
            {t("home")}
          </Link>
          <Link
            to="/products"
            className={cn(
              "font-medium transition-colors duration-300",
              scrolled
                ? "text-gani-green hover:text-gani-green-dark"
                : location.pathname === "/products"
                ? "text-white"
                : "text-gani-cream hover:text-white"
            )}
          >
            {t("products")}
          </Link>
          <Link
            to="/about"
            className={cn(
              "font-medium transition-colors duration-300",
              scrolled
                ? "text-gani-green hover:text-gani-green-dark"
                : location.pathname === "/about"
                ? "text-white"
                : "text-gani-cream hover:text-white"
            )}
          >
            {t("about")}
          </Link>
          <Link
            to="/journal"
            className={cn(
              "font-medium transition-colors duration-300",
              scrolled
                ? "text-gani-green hover:text-gani-green-dark"
                : location.pathname === "/journal"
                ? "text-white"
                : "text-gani-cream hover:text-white"
            )}
          >
            {t("journal")}
          </Link>
          <Link
            to="/contact"
            className={cn(
              "font-medium transition-colors duration-300",
              scrolled
                ? "text-gani-green hover:text-gani-green-dark"
                : location.pathname === "/contact"
                ? "text-white"
                : "text-gani-cream hover:text-white"
            )}
          >
            {t("contact")}
          </Link>
          <div className="flex items-center space-x-4 ml-4">
            <LanguageSelector />
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <LanguageSelector />
          <Button
            size="icon"
            variant="ghost"
            className={cn(
              "transition-colors duration-300 z-50",
              scrolled
                ? "text-gani-green hover:text-gani-green-dark"
                : "text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-gani-dark/95 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden transition-all duration-300",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center space-y-8 text-xl">
          <Link
            to="/"
            className="text-white hover:text-gani-cream"
            onClick={() => setIsOpen(false)}
          >
            {t("home")}
          </Link>
          <Link
            to="/products"
            className="text-white hover:text-gani-cream"
            onClick={() => setIsOpen(false)}
          >
            {t("products")}
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gani-cream"
            onClick={() => setIsOpen(false)}
          >
            {t("about")}
          </Link>
          <Link
            to="/journal"
            className="text-white hover:text-gani-cream"
            onClick={() => setIsOpen(false)}
          >
            {t("journal")}
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gani-cream"
            onClick={() => setIsOpen(false)}
          >
            {t("contact")}
          </Link>
          <div className="flex items-center space-x-8 mt-6">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
