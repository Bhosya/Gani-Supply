import React, { createContext, useContext, useState } from "react";

type Language = "en" | "id" | "ar" | "zh";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    home: "Home",
    products: "Products",
    about: "About Us",
    journal: "Journal",
    contact: "Contact",

    // Hero Section
    exploreCollection: "Explore Collection",
    ourPhilosophy: "Our Philosophy",
    artisticEssentials: "Quality Wood for Everyday & Industrial Use",
    curatedDescription:
      "Discover our curated range of wood-based products — from premium charcoal to sustainable wood pallets — crafted for performance, durability, and sustainability.",

    // Product Section
    viewAllProducts: "View all products",
    curatedCollection: "Curated Collection",
    collectionDescription:
      "Each piece in our collection tells a story, carefully selected for its beauty, functionality, and craftsmanship.",
    viewDetails: "View Details",

    // About Section
    ourStory: "OUR STORY",
    storyTitle: "Rooted in Nature, Crafted for Industry",
    storyDescription1:
      "At Gani Supply, our story begins with the essence of nature — wood. Since our founding, we’ve focused on transforming responsibly sourced wood into essential products that power homes, businesses, and industries.",
    storyDescription2:
      "We believe in the balance between utility and sustainability. That’s why our products are not only built to perform but also aligned with environmentally conscious practices. Whether you’re a small business or a large-scale manufacturer, we deliver the quality and consistency you can rely on.",
    ourJourney: "Our Journey",
    milestone1:
      "Founded in Jakarta with a small collection of handcrafted items.",
    milestone2:
      "Expanded to include international artisans and opened our flagship store.",
    milestone3:
      "Launched our sustainability initiative and exclusive artisan collaborations.",
    milestone4:
      "Looking ahead: Creating a global community of design enthusiasts.",

    // Contact Section
    contactUs: "Contact Us",
    contactDescription:
      "We'd love to hear from you. Get in touch with any questions, inquiries, or to schedule a visit to our store.",

    // Newsletter
    joinNewsletter: "Join Our Newsletter",
    newsletterDescription:
      "Subscribe to receive updates, access to exclusive deals, and more.",
    subscribe: "Subscribe",
    emailPlaceholder: "Your email address",

    // Footer
    shop: "Shop",
    allProducts: "All Products",
    homeDecor: "Home Decor",
    furniture: "Furniture",
    textiles: "Textiles",
    kitchen: "Kitchen",
    company: "Company",
    sustainability: "Sustainability",
    faq: "FAQ",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    shippingPolicy: "Shipping Policy",
    rightsReserved: "All rights reserved.",

    // Newsletter Section
    joinCommunity: "Join Our Community",
    communityDescription:
      "Be the first to know about new arrivals, special collections, and exclusive offers.",
    privacyConsent:
      "By subscribing, you agree to our Privacy Policy and consent to receive updates from Gani Supply.",

    // Journal Section
    journalDescription:
      "Stories, inspirations, and behind-the-scenes glimpses from the world of Gani Supply.",
    viewAllArticles: "View all articles",
    readMore: "Read More",
    journalEntry1Title: "The Art of Slow Living",
    journalEntry1Category: "Lifestyle",
    journalEntry1Excerpt:
      "Exploring how thoughtful design choices can help create spaces that encourage mindfulness and presence in daily life.",
    journalEntry2Title: "Behind the Craft: Traditional Indonesian Textiles",
    journalEntry2Category: "Craftsmanship",
    journalEntry2Excerpt:
      "A look into the centuries-old techniques that inspire our textile collection, and the artisans keeping these traditions alive.",
    journalEntry3Title: "Seasonal Styling: Embracing Natural Elements",
    journalEntry3Category: "Design",
    journalEntry3Excerpt:
      "How to incorporate organic materials and seasonal changes into your home for a dynamic, evolving space.",

    // Contact Section
    getInTouch: "Get In Touch",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    message: "Message",
    sendMessage: "Send Message",
    visitStore: "Visit Our Store",
    storeName: "Gani Supply Flagship Store",
    storeAddress: "Jl. Kemang Raya No.123, Jakarta Selatan",
    storeCity: "Indonesia 12730",
    storePhone: "+62 21 1234 5678",
    storeEmail: "hello@ganisupply.com",
    storeHours: "Store Hours",
    weekdays: "Monday - Friday",
    weekdayHours: "10:00 - 19:00",
    saturday: "Saturday",
    saturdayHours: "11:00 - 18:00",
    sunday: "Sunday",
    sundayHours: "Closed",
  },
  id: {
    // Navigation
    home: "Beranda",
    products: "Produk",
    about: "Tentang Kami",
    journal: "Jurnal",
    contact: "Kontak",

    // Hero Section
    exploreCollection: "Jelajahi Koleksi",
    ourPhilosophy: "Filosofi Kami",
    artisticEssentials:
      "Produk Kayu Berkualitas untuk Kebutuhan Sehari-hari & Industri",
    curatedDescription:
      "Temukan berbagai produk berbahan dasar kayu pilihan kami — mulai dari arang premium hingga palet kayu ramah lingkungan — dibuat untuk performa, daya tahan, dan keberlanjutan.",

    // Product Section
    viewAllProducts: "Lihat semua produk",
    curatedCollection: "Koleksi Terpilih",
    collectionDescription:
      "Setiap produk dalam koleksi kami menceritakan sebuah kisah, dipilih dengan cermat untuk keindahan, fungsionalitas, dan keahliannya.",
    viewDetails: "Lihat Detail",

    // About Section
    ourStory: "CERITA KAMI",
    storyTitle: "Berakar dari Alam, Dibentuk untuk Industri",
    storyDescription1:
      "Gani Supply lahir dari filosofi sederhana: memaksimalkan potensi alami kayu menjadi solusi industri yang andal dan berkelanjutan. Kami menyediakan berbagai produk berbasis kayu seperti arang hardwood premium, serbuk gergaji, briket, wood chip, hingga palet kayu yang presisi — semua melalui proses seleksi dan produksi yang teliti.",
    storyDescription2:
      "Kami percaya bahwa fungsi dan kelestarian bisa berjalan seimbang. Setiap produk kami dibuat untuk memenuhi standar performa tinggi sekaligus menjaga komitmen terhadap lingkungan. Baik Anda pelaku UMKM maupun perusahaan besar, kami hadir sebagai mitra penyedia bahan yang berkualitas, stabil, dan terpercaya.",
    ourJourney: "Perjalanan Kami",
    milestone1:
      "Didirikan di Jakarta dengan koleksi kecil barang-barang buatan tangan.",
    milestone2:
      "Berkembang untuk mencakup pengrajin internasional dan membuka toko utama kami.",
    milestone3:
      "Meluncurkan inisiatif keberlanjutan dan kolaborasi eksklusif dengan pengrajin.",
    milestone4:
      "Melihat ke depan: Menciptakan komunitas global para penggemar desain.",

    // Contact Section
    contactUs: "Hubungi Kami",
    contactDescription:
      "Kami ingin mendengar dari Anda. Hubungi kami untuk pertanyaan, permintaan, atau untuk menjadwalkan kunjungan ke toko kami.",

    // Newsletter
    joinNewsletter: "Bergabung dengan Newsletter Kami",
    newsletterDescription:
      "Berlangganan untuk menerima pembaruan, akses ke penawaran eksklusif, dan banyak lagi.",
    subscribe: "Berlangganan",
    emailPlaceholder: "Alamat email Anda",

    // Footer
    shop: "Toko",
    allProducts: "Semua Produk",
    homeDecor: "Dekorasi Rumah",
    furniture: "Furnitur",
    textiles: "Tekstil",
    kitchen: "Dapur",
    company: "Perusahaan",
    sustainability: "Keberlanjutan",
    faq: "FAQ",
    privacyPolicy: "Kebijakan Privasi",
    termsOfService: "Syarat Layanan",
    shippingPolicy: "Kebijakan Pengiriman",
    rightsReserved: "Hak Cipta Dilindungi.",

    // Newsletter Section
    joinCommunity: "Bergabung dengan Komunitas Kami",
    communityDescription:
      "Jadilah yang pertama mengetahui tentang kedatangan produk baru, koleksi khusus, dan penawaran eksklusif.",
    privacyConsent:
      "Dengan berlangganan, Anda menyetujui Kebijakan Privasi kami dan menyetujui untuk menerima pembaruan dari Gani Supply.",

    // Journal Section
    journalDescription:
      "Cerita, inspirasi, dan sekilas di balik layar dari dunia Gani Supply.",
    viewAllArticles: "Lihat semua artikel",
    readMore: "Baca Selengkapnya",
    journalEntry1Title: "Seni Hidup Perlahan",
    journalEntry1Category: "Gaya Hidup",
    journalEntry1Excerpt:
      "Menjelajahi bagaimana pilihan desain yang bijaksana dapat membantu menciptakan ruang yang mendorong kesadaran dan kehadiran dalam kehidupan sehari-hari.",
    journalEntry2Title: "Di Balik Kerajinan: Tekstil Tradisional Indonesia",
    journalEntry2Category: "Kerajinan",
    journalEntry2Excerpt:
      "Melihat teknik berabad-abad yang menginspirasi koleksi tekstil kami, dan para pengrajin yang menjaga tradisi ini tetap hidup.",
    journalEntry3Title: "Penataan Musiman: Merangkul Elemen Alami",
    journalEntry3Category: "Desain",
    journalEntry3Excerpt:
      "Cara menggabungkan bahan organik dan perubahan musiman ke dalam rumah Anda untuk ruang yang dinamis dan terus berkembang.",

    // Contact Section
    getInTouch: "Hubungi Kami",
    firstName: "Nama Depan",
    lastName: "Nama Belakang",
    email: "Email",
    message: "Pesan",
    sendMessage: "Kirim Pesan",
    visitStore: "Kunjungi Toko Kami",
    storeName: "Toko Utama Gani Supply",
    storeAddress: "Jl. Kemang Raya No.123, Jakarta Selatan",
    storeCity: "Indonesia 12730",
    storePhone: "+62 21 1234 5678",
    storeEmail: "hello@ganisupply.com",
    storeHours: "Jam Operasional",
    weekdays: "Senin - Jumat",
    weekdayHours: "10:00 - 19:00",
    saturday: "Sabtu",
    saturdayHours: "11:00 - 18:00",
    sunday: "Minggu",
    sundayHours: "Tutup",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    products: "المنتجات",
    about: "من نحن",
    journal: "المجلة",
    contact: "اتصل بنا",

    // Hero Section
    exploreCollection: "استكشف المجموعة",
    ourPhilosophy: "فلسفتنا",
    artisticEssentials:
      "الأساسيات الفنية للحياة منتجات خشبية عالية الجودة للاستخدام اليومي والصناعي",
    curatedDescription:
      "اكتشف مجموعتنا المختارة من المنتجات الخشبية — من الفحم الممتاز إلى المنصات الخشبية المستدامة — المصممة للأداء والمتانة والاستدامة.",

    // Product Section
    viewAllProducts: "عرض جميع المنتجات",
    curatedCollection: "مجموعة مختارة",
    collectionDescription:
      "كل قطعة في مجموعتنا تحكي قصة، مختارة بعناية لجمالها ووظائفها وحرفيتها.",
    viewDetails: "عرض التفاصيل",

    // About Section
    ourStory: "قصتنا",
    storyTitle: "متجذرة في الطبيعة، مصممة للصناعة",
    storyDescription1:
      "تأسست Gani Supply على مبدأ تحويل موارد الطبيعة إلى منتجات صناعية عالية الكفاءة. نقدم مجموعة من المنتجات الخشبية التي تشمل فحم الخشب الصلب، نشارة الخشب، البريكيت، شرائح الخشب، ومنصات التحميل — جميعها مصنوعة بعناية لضمان الجودة والاستدامة.",
    storyDescription2:
      "نؤمن بأن الأداء البيئي والتجاري يمكن أن يتعايشا. لذلك، تلتزم منتجاتنا بالمعايير البيئية دون التضحية بالكفاءة. سواء كنت مؤسسة صغيرة أو شركة صناعية كبرى، نحن نضمن لك مواد يمكن الاعتماد عليها باستمرار.",
    ourJourney: "رحلتنا",
    milestone1: "تأسست في جاكرتا مع مجموعة صغيرة من القطع المصنوعة يدويًا.",
    milestone2: "توسعت لتشمل الحرفيين الدوليين وافتتحت متجرنا الرئيسي.",
    milestone3: "أطلقت مبادرة الاستدامة والتعاون الحصري مع الحرفيين.",
    milestone4: "ننظر إلى المستقبل: إنشاء مجتمع عالمي من عشاق التصميم.",

    // Contact Section
    contactUs: "اتصل بنا",
    contactDescription:
      "نود أن نسمع منك. تواصل معنا لأي أسئلة أو استفسارات أو لجدولة زيارة لمتجرنا.",

    // Newsletter
    joinNewsletter: "انضم إلى نشرتنا الإخبارية",
    newsletterDescription:
      "اشترك لتلقي التحديثات والوصول إلى العروض الحصرية والمزيد.",
    subscribe: "اشترك",
    emailPlaceholder: "عنوان بريدك الإلكتروني",

    // Footer
    shop: "المتجر",
    allProducts: "جميع المنتجات",
    homeDecor: "ديكور المنزل",
    furniture: "الأثاث",
    textiles: "المنسوجات",
    kitchen: "المطبخ",
    company: "الشركة",
    sustainability: "الاستدامة",
    faq: "الأسئلة الشائعة",
    privacyPolicy: "سياسة الخصوصية",
    termsOfService: "شروط الخدمة",
    shippingPolicy: "سياسة الشحن",
    rightsReserved: "جميع الحقوق محفوظة.",

    // Newsletter Section
    joinCommunity: "انضم إلى مجتمعنا",
    communityDescription:
      "كن أول من يعرف عن الوافدين الجدد والمجموعات الخاصة والعروض الحصرية.",
    privacyConsent:
      "بالاشتراك، فإنك توافق على سياسة الخصوصية لدينا وتوافق على تلقي التحديثات من Gani Supply.",

    // Journal Section
    journalDescription: "قصص وإلهام ونظرات خلف الكواليس من عالم Gani Supply.",
    viewAllArticles: "عرض جميع المقالات",
    readMore: "اقرأ المزيد",
    journalEntry1Title: "فن العيش البطيء",
    journalEntry1Category: "نمط الحياة",
    journalEntry1Excerpt:
      "استكشاف كيف يمكن لخيارات التصميم المدروسة أن تساعد في خلق مساحات تشجع على اليقظة والحضور في الحياة اليومية.",
    journalEntry2Title: "وراء الحرفة: المنسوجات الإندونيسية التقليدية",
    journalEntry2Category: "الحرفية",
    journalEntry2Excerpt:
      "نظرة على التقنيات القديمة التي تلهم مجموعتنا من المنسوجات، والحرفيين الذين يحافظون على هذه التقاليد.",
    journalEntry3Title: "التنسيق الموسمي: احتضان العناصر الطبيعية",
    journalEntry3Category: "التصميم",
    journalEntry3Excerpt:
      "كيفية دمج المواد العضوية والتغييرات الموسمية في منزلك لخلق مساحة ديناميكية ومتطورة.",

    // Contact Section
    getInTouch: "تواصل معنا",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    email: "البريد الإلكتروني",
    message: "الرسالة",
    sendMessage: "إرسال الرسالة",
    visitStore: "زيارة متجرنا",
    storeName: "المتجر الرئيسي Gani Supply",
    storeAddress: "Jl. Kemang Raya No.123, Jakarta Selatan",
    storeCity: "Indonesia 12730",
    storePhone: "+62 21 1234 5678",
    storeEmail: "hello@ganisupply.com",
    storeHours: "ساعات العمل",
    weekdays: "الاثنين - الجمعة",
    weekdayHours: "10:00 - 19:00",
    saturday: "السبت",
    saturdayHours: "11:00 - 18:00",
    sunday: "الأحد",
    sundayHours: "مغلق",
  },
  zh: {
    // Navigation
    home: "首页",
    products: "产品",
    about: "关于我们",
    journal: "期刊",
    contact: "联系我们",

    // Hero Section
    exploreCollection: "探索系列",
    ourPhilosophy: "我们的理念",
    artisticEssentials: "优质木制产品，适用于日常和工业用途",
    curatedDescription:
      "探索我们精心挑选的木质产品系列——从优质木炭到可持续木托盘——专为高性能、耐用性和可持续性而打造。",

    // Product Section
    viewAllProducts: "查看所有产品",
    curatedCollection: "精选系列",
    collectionDescription:
      "我们系列中的每一件作品都讲述着一个故事，精心挑选其美感、功能性和工艺。",
    viewDetails: "查看详情",

    // About Section
    ourStory: "我们的故事",
    storyTitle: "扎根自然，服务工业",
    storyDescription1:
      "Gani Supply 的故事源于自然对木材的馈赠。我们致力于将天然木材转化为高效、可持续的产品，涵盖硬木炭、锯末、压块、木托盘及木屑等核心品类，广泛应用于家庭、商业及工业领域。",
    storyDescription2:
      "我们坚信品质与环保可以共存。每一件产品都体现了我们对工艺的执着和对环境的责任。不论您是中小企业还是大型制造商，我们始终如一地提供您值得信赖的木制品解决方案。",
    ourJourney: "我们的历程",
    milestone1: "在雅加达成立，拥有小型手工制品系列。",
    milestone2: "扩展至国际工匠并开设旗舰店。",
    milestone3: "启动可持续发展计划和独家工匠合作。",
    milestone4: "展望未来：创建全球设计爱好者社区。",

    // Contact Section
    contactUs: "联系我们",
    contactDescription:
      "我们期待听到您的声音。如有任何问题、咨询或预约参观我们的商店，请随时联系我们。",

    // Newsletter
    joinNewsletter: "加入我们的通讯",
    newsletterDescription: "订阅以接收更新、独家优惠等。",
    subscribe: "订阅",
    emailPlaceholder: "您的电子邮件地址",

    // Footer
    shop: "商店",
    allProducts: "所有产品",
    homeDecor: "家居装饰",
    furniture: "家具",
    textiles: "纺织品",
    kitchen: "厨房",
    company: "公司",
    sustainability: "可持续发展",
    faq: "常见问题",
    privacyPolicy: "隐私政策",
    termsOfService: "服务条款",
    shippingPolicy: "运输政策",
    rightsReserved: "版权所有。",

    // Newsletter Section
    joinCommunity: "加入我们的社区",
    communityDescription: "成为第一个了解新品、特别系列和独家优惠的人。",
    privacyConsent:
      "订阅即表示您同意我们的隐私政策并同意接收来自Gani Supply的更新。",

    // Journal Section
    journalDescription: "来自Gani Supply世界的故事、灵感和幕后花絮。",
    viewAllArticles: "查看所有文章",
    readMore: "阅读更多",
    journalEntry1Title: "慢生活的艺术",
    journalEntry1Category: "生活方式",
    journalEntry1Excerpt:
      "探索深思熟虑的设计选择如何帮助创造鼓励正念和日常存在感的空间。",
    journalEntry2Title: "工艺背后：传统印尼纺织品",
    journalEntry2Category: "工艺",
    journalEntry2Excerpt:
      "深入了解启发我们纺织品收藏的百年技艺，以及保持这些传统活力的工匠们。",
    journalEntry3Title: "季节性装饰：拥抱自然元素",
    journalEntry3Category: "设计",
    journalEntry3Excerpt:
      "如何将有机材料和季节性变化融入您的家中，打造充满活力的动态空间。",

    // Contact Section
    getInTouch: "联系我们",
    firstName: "名字",
    lastName: "姓氏",
    email: "电子邮件",
    message: "留言",
    sendMessage: "发送消息",
    visitStore: "访问我们的商店",
    storeName: "Gani Supply旗舰店",
    storeAddress: "Jl. Kemang Raya No.123, Jakarta Selatan",
    storeCity: "Indonesia 12730",
    storePhone: "+62 21 1234 5678",
    storeEmail: "hello@ganisupply.com",
    storeHours: "营业时间",
    weekdays: "周一至周五",
    weekdayHours: "10:00 - 19:00",
    saturday: "周六",
    saturdayHours: "11:00 - 18:00",
    sunday: "周日",
    sundayHours: "休息",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
