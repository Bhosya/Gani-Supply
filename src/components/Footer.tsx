import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { submitNewsletterSubscription } from "@/lib/sheetbest";

const Footer = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      await submitNewsletterSubscription(email);
      setSubmitStatus({
        type: "success",
        message: t("newsletterSuccessMessage"),
      });
      setEmail("");
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: t("newsletterErrorMessage"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gani-dark text-white pt-16 pb-8 md:px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
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
                  to="/gallery"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t("gallery")}
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  className="bg-white/10 border-white/20 placeholder:text-white/50 rounded-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  className="bg-gani-green hover:bg-gani-green-dark text-white rounded-none"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t("subscribing") : t("subscribe")}
                </Button>
              </div>
              {submitStatus.type && (
                <div
                  className={`p-2 text-sm rounded ${
                    submitStatus.type === "success"
                      ? "bg-green-500/20 text-green-200"
                      : "bg-red-500/20 text-red-200"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </form>
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
