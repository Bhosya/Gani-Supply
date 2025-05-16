import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/contexts/LanguageContext";
import { submitNewsletterSubscription } from "@/lib/sheetbest";

const Newsletter = () => {
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
    <section className="py-16 bg-gani-green text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAzMGM2LjYyNyAwIDEyLTUuMzczIDEyLTEycy01LjM3My0xMi0xMi0xMi0xMiA1LjM3My0xMiAxMiA1LjM3MyAxMiAxMiAxMnptLTE4LTEyYzMuMzE0IDAgNi0yLjY4NiA2LTZzLTIuNjg2LTYtNi02LTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2eiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-10"></div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-playfair mb-4">
            {t("joinCommunity")}
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            {t("communityDescription")}
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2 max-w-md mx-auto"
          >
            <Input
              type="email"
              placeholder={t("emailPlaceholder")}
              className="flex-1 border-white/30 bg-white/10 placeholder:text-white/50 focus:border-white rounded-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              type="submit"
              className="bg-white text-gani-green hover:bg-white/90 hover:text-gani-green-dark rounded-none"
              disabled={isSubmitting}
            >
              {isSubmitting ? t("subscribing") : t("subscribe")}
            </Button>
          </form>

          {submitStatus.type && (
            <div
              className={`mt-4 p-4 rounded ${
                submitStatus.type === "success"
                  ? "bg-white/20 text-white"
                  : "bg-red-500/20 text-red-200"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <p className="text-xs text-white/60 mt-4">{t("privacyConsent")}</p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
