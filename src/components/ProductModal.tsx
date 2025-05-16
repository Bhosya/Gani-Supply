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
    nameKey: string;
    descKey: string;
    image: string;
    process: string[];
  };
}

const ProductModal = ({ isOpen, onClose, product }: ProductModalProps) => {
  const { t } = useLanguage();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 max-h-[100vh] overflow-y-auto">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4 z-50 h-8 w-8 rounded-full bg-black/50 text-white hover:bg-black/70 hover:text-white"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-80 md:h-full">
            <img
              src={product.image}
              alt={t(product.nameKey)}
              className="w-full h-full max-h-[500px] object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-playfair mb-4">
              {t(product.nameKey)}
            </h2>
            <p className="text-gani-dark/70 mb-6">{t(product.descKey)}</p>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">
                {t("manufacturingProcess")}
              </h3>
              <ol className="list-decimal list-inside space-y-2">
                {product.process.map((step, index) => (
                  <li key={index} className="text-gani-dark/70">
                    {t(step)}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
