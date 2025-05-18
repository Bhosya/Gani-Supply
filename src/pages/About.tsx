import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "../components/SEO";
import { useSEO } from "../hooks/useSEO";

const About = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const seo = useSEO({
    page: "about",
    // You can override any SEO properties if needed
    customImage: "https://www.ganisupply.com/images/about-og.jpg",
  });

  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <>
      <SEO {...seo} />
      <div className="min-h-screen bg-gradient-to-b from-white via-gani-cream/40 to-gani-green/5">
        <Navbar />
        <PageHero
          title={t("companyProfile")}
          description={t("trustedPartner")}
          imageUrl="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
        />

        {/* Vision & Mission Section */}
        <section className="py-20 md:px-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gani-green/10 via-gani-cream/20 to-gani-green/5"></div>
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in space-y-8">
                <div className="inline-block">
                  <span className="text-gani-green font-semibold tracking-wider uppercase text-sm bg-gani-green/10 px-4 py-2 rounded-full">
                    {t("aboutUs")}
                  </span>
                  <h2 className="text-4xl font-playfair mt-4 mb-6 text-gani-dark">
                    {t("visionMission")}
                  </h2>
                </div>
                <div className="space-y-8">
                  <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 border border-gani-green/10 hover:border-gani-green/20">
                    <h3 className="text-2xl font-semibold mb-4 text-gani-green">
                      {t("vision")}
                    </h3>
                    <p className="text-gani-dark/80 leading-relaxed">
                      {t("visionDescription")}
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 border border-gani-green/10 hover:border-gani-green/20">
                    <h3 className="text-2xl font-semibold mb-4 text-gani-green">
                      {t("mission")}
                    </h3>
                    <p className="text-gani-dark/80 leading-relaxed">
                      {t("missionDescription")}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="relative animate-fade-in"
                style={{ animationDelay: "200ms" }}
              >
                <div className="absolute -top-6 -left-6 w-48 h-48 border-2 border-dashed border-gani-green rounded-full opacity-30"></div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-dashed border-gani-green rounded-full opacity-30"></div>
                <img
                  src="https://th.bing.com/th/id/OIP.RXrBLAdkFnmkaupQQFz7WQHaEK?rs=1&pid=ImgDetMain"
                  alt={t("ganiSupplyOperations")}
                  className="rounded-2xl shadow-2xl w-full aspect-3/2 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 md:px-10 bg-gradient-to-br from-gani-green/5 via-white to-gani-cream/30 relative">
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="text-gani-green font-semibold tracking-wider uppercase text-sm bg-gani-green/10 px-4 py-2 rounded-full">
                {t("whatWeDo")}
              </span>
              <h2 className="text-4xl font-playfair mt-4 mb-6 text-gani-dark">
                {t("ourServices")}
              </h2>
              <p className="text-gani-dark/80 max-w-2xl mx-auto text-lg">
                {t("servicesDescription")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in group border border-gani-green/10 hover:border-gani-green/20">
                <div className="w-16 h-16 bg-gradient-to-br from-gani-green/20 to-gani-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:from-gani-green/30 group-hover:to-gani-green/20 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-gani-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-playfair mb-4 text-gani-dark">
                  {t("supplyChainManagement")}
                </h3>
                <p className="text-gani-dark/80 leading-relaxed">
                  {t("supplyChainDescription")}
                </p>
              </div>

              <div
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in group border border-gani-green/10 hover:border-gani-green/20"
                style={{ animationDelay: "150ms" }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gani-green/20 to-gani-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:from-gani-green/30 group-hover:to-gani-green/20 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-gani-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-playfair mb-4 text-gani-dark">
                  {t("warehouseManagement")}
                </h3>
                <p className="text-gani-dark/80 leading-relaxed">
                  {t("warehouseDescription")}
                </p>
              </div>

              <div
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in group border border-gani-green/10 hover:border-gani-green/20"
                style={{ animationDelay: "300ms" }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gani-green/20 to-gani-green/10 rounded-2xl flex items-center justify-center mb-6 group-hover:from-gani-green/30 group-hover:to-gani-green/20 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-gani-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-playfair mb-4 text-gani-dark">
                  {t("logisticsDistribution")}
                </h3>
                <p className="text-gani-dark/80 leading-relaxed">
                  {t("logisticsDescription")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Export Quality Section */}
        <section className="py-20 md:px-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gani-green/10 via-gani-cream/20 to-gani-green/5"></div>
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="text-gani-green font-semibold tracking-wider uppercase text-sm bg-gani-green/10 px-4 py-2 rounded-full">
                {t("globalStandards")}
              </span>
              <h2 className="text-4xl font-playfair mt-4 mb-6 text-gani-dark">
                {t("exportQualityProducts")}
              </h2>
              <p className="text-gani-dark/80 max-w-2xl mx-auto text-lg">
                {t("exportQualityDescription")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gani-green/10 hover:border-gani-green/20 transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-gani-green/20 to-gani-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
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
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-semibold mb-3 text-gani-dark">
                        {t("internationalStandards")}
                      </h3>
                      <p className="text-gani-dark/80 leading-relaxed">
                        {t("internationalStandardsDescription")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gani-green/10 hover:border-gani-green/20 transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-gani-green/20 to-gani-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
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
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-semibold mb-3 text-gani-dark">
                        {t("qualityControl")}
                      </h3>
                      <p className="text-gani-dark/80 leading-relaxed">
                        {t("qualityControlDescription")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gani-green/10 hover:border-gani-green/20 transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-gani-green/20 to-gani-green/10 rounded-xl flex items-center justify-center flex-shrink-0">
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
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-semibold mb-3 text-gani-dark">
                        {t("globalReach")}
                      </h3>
                      <p className="text-gani-dark/80 leading-relaxed">
                        {t("globalReachDescription")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-6 -left-6 w-48 h-48 border-2 border-dashed border-gani-green rounded-full opacity-30"></div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-dashed border-gani-green rounded-full opacity-30"></div>
                <img
                  src="images/truckToContainer.jpg"
                  alt={t("exportQualityProducts")}
                  className="rounded-2xl shadow-2xl w-full max-h-[575px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8 rounded-b-2xl">
                  <h3 className="text-white text-2xl font-semibold mb-2">
                    {t("certifiedQuality")}
                  </h3>
                  <p className="text-white/90">
                    {t("certifiedQualityDescription")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values Section */}
        <section className="py-20 md:px-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gani-green/10 via-gani-cream/20 to-gani-green/5"></div>
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="text-gani-green font-semibold tracking-wider uppercase text-sm bg-gani-green/10 px-4 py-2 rounded-full">
                {t("ourPrinciples")}
              </span>
              <h2 className="text-4xl font-playfair mt-4 mb-6 text-gani-dark">
                {t("companyValues")}
              </h2>
              <p className="text-gani-dark/80 max-w-2xl mx-auto text-lg">
                {t("companyValuesDescription")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group border border-gani-green/10 hover:border-gani-green/20">
                <div className="w-16 h-16 bg-gradient-to-br from-gani-green/20 to-gani-green/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-gani-green/30 group-hover:to-gani-green/20 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-gani-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gani-green">
                  {t("integrity")}
                </h3>
                <p className="text-gani-dark/80 leading-relaxed">
                  {t("integrityDescription")}
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group border border-gani-green/10 hover:border-gani-green/20">
                <div className="w-16 h-16 bg-gradient-to-br from-gani-green/20 to-gani-green/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-gani-green/30 group-hover:to-gani-green/20 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-gani-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gani-green">
                  {t("innovation")}
                </h3>
                <p className="text-gani-dark/80 leading-relaxed">
                  {t("innovationDescription")}
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group border border-gani-green/10 hover:border-gani-green/20">
                <div className="w-16 h-16 bg-gradient-to-br from-gani-green/20 to-gani-green/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-gani-green/30 group-hover:to-gani-green/20 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-gani-green"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gani-green">
                  {t("excellence")}
                </h3>
                <p className="text-gani-dark/80 leading-relaxed">
                  {t("excellenceDescription")}
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group border border-gani-green/10 hover:border-gani-green/20">
                <div className="w-16 h-16 bg-gradient-to-br from-gani-green/20 to-gani-green/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-gani-green/30 group-hover:to-gani-green/20 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-gani-green"
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
                <h3 className="text-2xl font-semibold mb-4 text-gani-green">
                  {t("sustainability")}
                </h3>
                <p className="text-gani-dark/80 leading-relaxed">
                  {t("sustainabilityDescription")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 md:px-10 bg-gradient-to-br from-gani-green/20 via-gani-green/10 to-gani-cream/30">
          <div className="container mx-auto text-center max-w-4xl">
            <h2 className="text-4xl font-playfair mb-6 text-gani-dark">
              {t("readyToPartner")}
            </h2>
            <p className="text-gani-dark/80 mb-8 text-lg">
              {t("partnerDescription")}
            </p>
            <Button
              onClick={handleContactClick}
              className="bg-gani-green hover:bg-gani-green-dark text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {t("contactUs")}
            </Button>
          </div>
        </section>

        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default About;
