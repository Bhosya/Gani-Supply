import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:px-10 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gani-cream/50 to-white"></div>
      <div className="absolute top-40 right-20 w-32 h-32 rounded-full border-2 border-dashed border-gani-green/20 animate-gentle-float"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair mb-4">
            {t("getInTouch")}
          </h2>
          <p className="text-gani-dark/70">{t("contactDescription")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="bg-white py-8 rounded-lg animate-fade-in">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t("firstName")}
                  </label>
                  <Input className="rounded-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    {t("lastName")}
                  </label>
                  <Input className="rounded-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t("email")}
                </label>
                <Input type="email" className="rounded-none" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t("message")}
                </label>
                <Textarea className="rounded-none min-h-[150px]" />
              </div>

              <Button className="w-full bg-gani-green hover:bg-gani-green-dark text-white rounded-none">
                {t("sendMessage")}
              </Button>
            </form>
          </div>

          {/* Store information */}
          <div
            className="bg-gani-cream p-8 rounded-lg shadow-sm animate-fade-in flex flex-col"
            style={{ animationDelay: "200ms" }}
          >
            <h3 className="font-playfair text-xl mb-6">{t("visitStore")}</h3>
            <div className="space-y-6 flex-grow">
              <div>
                <p className="font-medium">{t("storeName")}</p>
              </div>

              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gani-green mr-3" />
                <p>{t("storePhone")}</p>
              </div>

              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gani-green mr-3" />
                <p>{t("storeEmail")}</p>
              </div>
            </div>

            <div className="pt-6 border-t border-gani-earth/30 mt-6">
              <h4 className="font-medium mb-2">{t("storeHours")}</h4>
              <p className="text-gani-dark/70">{t("storeHoursDesc")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
