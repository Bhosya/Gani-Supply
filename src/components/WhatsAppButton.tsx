import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "+6281217588987";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Chat Bubble */}
      <div className="absolute bottom-16 right-0 bg-white p-3 rounded-lg shadow-lg w-[150px] mb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <div className="text-sm text-gray-800">
          Ada yang bisa kami bantu? 💬
        </div>
        {/* Triangle pointer */}
        <div className="absolute -bottom-2 right-4 w-4 h-4 bg-white transform rotate-45"></div>
      </div>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
