import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: number;
    name: string;
    image: string;
    description?: string;
    process?: string[];
  };
}

const ProductModal = ({ isOpen, onClose, product }: ProductModalProps) => {
  const { t } = useLanguage();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-gani-dark">
            {product.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gani-dark mb-3">
                {t("productDescription")}
              </h3>
              <p className="text-gani-dark/80 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gani-dark mb-3">
                {t("manufacturingProcess")}
              </h3>
              <ul className="space-y-3">
                {product.process?.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gani-green/10 text-gani-green flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <span className="text-gani-dark/80">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
