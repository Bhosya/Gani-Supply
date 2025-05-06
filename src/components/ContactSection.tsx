
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 px-6 md:px-10 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gani-cream/50 to-white"></div>
      <div className="absolute top-40 right-20 w-32 h-32 rounded-full border-2 border-dashed border-gani-green/20 animate-gentle-float"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair mb-4">Get In Touch</h2>
          <p className="text-gani-dark/70">
            Have questions about our products or interested in collaborating? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Contact Form */}
          <div className="bg-gani-cream p-8 rounded-lg shadow-sm h-full animate-fade-in">
            <form className="space-y-6 h-full flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="bg-white/50 border-gani-earth focus:border-gani-green rounded-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email address" 
                    className="bg-white/50 border-gani-earth focus:border-gani-green rounded-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="How can we help?" 
                  className="bg-white/50 border-gani-earth focus:border-gani-green rounded-none"
                />
              </div>
              <div className="space-y-2 flex-grow">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  className="min-h-[120px] h-full bg-white/50 border-gani-earth focus:border-gani-green rounded-none"
                />
              </div>
              <Button className="w-full bg-gani-green hover:bg-gani-green-dark text-white rounded-none">
                Send Message
              </Button>
            </form>
          </div>

          {/* Store information */}
          <div className="bg-gani-cream p-8 rounded-lg shadow-sm animate-fade-in flex flex-col" style={{ animationDelay: '200ms' }}>
            <h3 className="font-playfair text-xl mb-6">Visit Our Store</h3>
            <div className="space-y-6 flex-grow">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-gani-green mr-3 mt-1" />
                <div>
                  <p className="font-medium">Gani Supply Flagship Store</p>
                  <p className="text-gani-dark/70">Jl. Kemang Raya No.123, Jakarta Selatan</p>
                  <p className="text-gani-dark/70">Indonesia 12730</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gani-green mr-3" />
                <p>+62 21 1234 5678</p>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gani-green mr-3" />
                <p>hello@ganisupply.com</p>
              </div>
            </div>
            
            <div className="pt-6 border-t border-gani-earth/30 mt-6">
              <h4 className="font-medium mb-2">Store Hours</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <p className="text-gani-dark/70">Monday - Friday</p>
                <p>10:00 - 19:00</p>
                <p className="text-gani-dark/70">Saturday</p>
                <p>11:00 - 18:00</p>
                <p className="text-gani-dark/70">Sunday</p>
                <p>Closed</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Full-width Map */}
        <div className="mt-12 w-full">
          <div className="relative overflow-hidden rounded-lg border-2 border-gani-earth/30 shadow-sm h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4439769976866!2d106.82626591476836!3d-6.203998395508279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f43f1bfb1c8d%3A0xa5edd57779ef3f0b!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1614952511584!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Gani Supply Store Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
