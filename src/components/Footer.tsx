
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-gani-dark text-white pt-16 pb-8 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div>
            <h3 className="font-playfair text-2xl mb-4">Gani Supply</h3>
            <p className="text-white/70 mb-6">Artistic essentials for modern living, carefully curated to enhance everyday experiences.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h4 className="font-medium mb-4 text-white/90">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/products" className="text-white/70 hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/products/home-decor" className="text-white/70 hover:text-white transition-colors">Home Decor</Link></li>
              <li><Link to="/products/furniture" className="text-white/70 hover:text-white transition-colors">Furniture</Link></li>
              <li><Link to="/products/textiles" className="text-white/70 hover:text-white transition-colors">Textiles</Link></li>
              <li><Link to="/products/kitchenware" className="text-white/70 hover:text-white transition-colors">Kitchen</Link></li>
            </ul>
          </div>
          
          {/* Information */}
          <div>
            <h4 className="font-medium mb-4 text-white/90">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/journal" className="text-white/70 hover:text-white transition-colors">Journal</Link></li>
              <li><Link to="/sustainability" className="text-white/70 hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-white/70 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-medium mb-4 text-white/90">Join Our Newsletter</h4>
            <p className="text-white/70 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <div className="flex space-x-2">
              <Input placeholder="Your email address" className="bg-white/10 border-white/20 placeholder:text-white/50 rounded-none" />
              <Button className="bg-gani-green hover:bg-gani-green-dark text-white rounded-none">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Gani Supply. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white/80">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white/80">Terms of Service</Link>
            <Link to="/shipping" className="hover:text-white/80">Shipping Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
