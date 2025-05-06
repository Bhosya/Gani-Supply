import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
            Home
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
            Products
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
            About Us
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
            Journal
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
            Contact
          </Link>
          <div className="flex items-center space-x-4 ml-4">
            <Button
              size="icon"
              variant="ghost"
              className={cn(
                "transition-colors duration-300",
                scrolled
                  ? "text-gani-green hover:text-gani-green-dark hover:bg-gani-green/10"
                  : "text-white hover:text-gani-cream hover:bg-white/10"
              )}
            >
              <User className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className={cn(
                "transition-colors duration-300 relative",
                scrolled
                  ? "text-gani-green hover:text-gani-green-dark hover:bg-gani-green/10"
                  : "text-white hover:text-gani-cream hover:bg-white/10"
              )}
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-gani-green text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center">
          <Button
            size="icon"
            variant="ghost"
            className={cn(
              "transition-colors duration-300",
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
            Home
          </Link>
          <Link
            to="/products"
            className="text-white hover:text-gani-cream"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gani-cream"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/journal"
            className="text-white hover:text-gani-cream"
            onClick={() => setIsOpen(false)}
          >
            Journal
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gani-cream"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <div className="flex items-center space-x-8 mt-6">
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:text-gani-cream hover:bg-white/10"
            >
              <User className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:text-gani-cream hover:bg-white/10 relative"
            >
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-gani-green text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
