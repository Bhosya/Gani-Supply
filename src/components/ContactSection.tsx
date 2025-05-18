import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { submitContactForm } from "@/lib/sheetbest";

const ContactSection = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Create a hidden form for FormSubmit.co
  const hiddenFormRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // 1. Send to SheetBest
      await submitContactForm(formData);

      // 2. Send to FormSubmit.co using hidden form
      if (hiddenFormRef.current) {
        // Update hidden form values
        const hiddenForm = hiddenFormRef.current;
        const nameInput = hiddenForm.querySelector(
          'input[name="name"]'
        ) as HTMLInputElement;
        const emailInput = hiddenForm.querySelector(
          'input[name="email"]'
        ) as HTMLInputElement;
        const messageInput = hiddenForm.querySelector(
          'textarea[name="message"]'
        ) as HTMLTextAreaElement;

        if (nameInput && emailInput && messageInput) {
          nameInput.value = formData.name;
          emailInput.value = formData.email;
          messageInput.value = formData.message;

          // Submit the hidden form
          hiddenForm.submit();
        }
      }

      // If we reach here, it means the data was sent successfully
      setSubmitStatus({
        type: "success",
        message: t("contactSuccessMessage"),
      });

      // Reset form data
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: t("contactErrorMessage"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:px-10 bg-white relative overflow-hidden">
      {/* Hidden form for FormSubmit.co */}
      <form
        ref={hiddenFormRef}
        action="https://formsubmit.co/hello@ganisupply.com"
        method="POST"
        className="hidden"
      >
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
        {/* Optional: Add honeypot to prevent spam */}
        <input type="text" name="_honey" style={{ display: "none" }} />
        {/* Optional: Disable captcha */}
        <input type="hidden" name="_captcha" value="false" />
        {/* Optional: Custom success page */}
        <input type="hidden" name="_next" value={window.location.href} />
      </form>

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
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t("name")}
                </label>
                <Input
                  className="rounded-none"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t("email")}
                </label>
                <Input
                  type="email"
                  className="rounded-none"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t("message")}
                </label>
                <Textarea
                  className="rounded-none min-h-[150px]"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {submitStatus.type && (
                <div
                  className={`p-4 rounded ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-gani-green hover:bg-gani-green-dark text-white rounded-none"
                disabled={isSubmitting}
              >
                {isSubmitting ? t("sending") : t("sendMessage")}
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
