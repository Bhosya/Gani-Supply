import React from "react";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: {
    titleKey: string;
    image: string;
    categoryKey: string;
  };
}

const ImageModal = ({ isOpen, onClose, image }: ImageModalProps) => {
  const { t } = useLanguage();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="absolute top-4 right-4 z-10">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-black/50 text-white hover:bg-black/70 hover:text-white"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="relative">
          <img
            src={image.image}
            alt={t(image.titleKey)}
            className="w-full h-auto object-contain"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <div className="bg-white/80 backdrop-blur-sm px-3 py-1 text-xs font-medium text-gani-dark rounded-full inline-block mb-3">
              {t(image.categoryKey)}
            </div>
            <h3 className="font-playfair text-2xl text-white">
              {t(image.titleKey)}
            </h3>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
