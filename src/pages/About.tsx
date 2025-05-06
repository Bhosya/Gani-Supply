import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";

const About = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <PageHero
        title="Our Story"
        description="Behind every product is a story of craftsmanship, sustainability, and passion for creating spaces that inspire."
        imageUrl="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-playfair mb-6">Our Philosophy</h2>
              <p className="text-gani-dark/80 mb-4">
                Gani Supply was born out of a desire to bridge the gap between
                functional living and artistic expression. We believe that the
                objects we surround ourselves with should not only serve a
                purpose but also bring joy and inspiration to our everyday
                lives.
              </p>
              <p className="text-gani-dark/80 mb-4">
                Founded in 2018 by a collective of designers and artisans, our
                mission has been to curate a collection of products that tell a
                story, support sustainable practices, and celebrate
                craftsmanship from around the world.
              </p>
              <p className="text-gani-dark/80">
                Each item in our collection is carefully selected, often created
                in collaboration with independent makers who share our vision
                for mindful, beautiful living.
              </p>
            </div>
            <div
              className="relative animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              <div className="absolute -top-4 -left-4 w-40 h-40 border-2 border-dashed border-gani-green rounded-full opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Gani Supply Team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-10 bg-gani-cream">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-playfair mb-4">Our Values</h2>
            <p className="max-w-2xl mx-auto text-gani-dark/80">
              The principles that guide our selections and partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm animate-fade-in">
              <div className="w-12 h-12 bg-gani-green/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gani-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-playfair mb-3">Craftsmanship</h3>
              <p className="text-gani-dark/80">
                We celebrate the human touch behind every object, honoring
                traditional techniques and innovative approaches that result in
                products of lasting quality.
              </p>
            </div>

            <div
              className="bg-white p-8 rounded-lg shadow-sm animate-fade-in"
              style={{ animationDelay: "150ms" }}
            >
              <div className="w-12 h-12 bg-gani-green/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gani-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-playfair mb-3">Sustainability</h3>
              <p className="text-gani-dark/80">
                We are committed to environmentally responsible practices, from
                selecting materials with minimal ecological impact to partnering
                with makers who prioritize sustainability.
              </p>
            </div>

            <div
              className="bg-white p-8 rounded-lg shadow-sm animate-fade-in"
              style={{ animationDelay: "300ms" }}
            >
              <div className="w-12 h-12 bg-gani-green/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gani-green"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-playfair mb-3">Authenticity</h3>
              <p className="text-gani-dark/80">
                We value products that tell genuine stories, whether through
                cultural heritage, innovative design, or the unique perspective
                of their creator.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-10 bg-white relative overflow-hidden">
        <div className="absolute top-20 right-0 w-80 h-80 bg-gani-green/5 rounded-full"></div>
        <div className="absolute bottom-20 left-0 w-60 h-60 bg-gani-earth/10 rounded-full"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Gani Supply Studio"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div
              className="animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              <h2 className="text-3xl font-playfair mb-6">
                Gani Supply Studio
              </h2>
              <p className="text-gani-dark/80 mb-4">
                Beyond our curated collection, Gani Supply Studio is our
                creative workspace where we collaborate with artisans and
                designers to create exclusive pieces that embody our ethos.
              </p>
              <p className="text-gani-dark/80 mb-6">
                Our studio serves as a laboratory for experimentation, allowing
                us to push boundaries, explore new materials, and develop
                products that reflect our commitment to both beauty and
                functionality.
              </p>
              <Button className="bg-gani-green hover:bg-gani-green-dark text-white">
                Explore Studio Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default About;
