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
    gallery: "Gallery",
    contact: "Contact",

    // Hero Section
    exploreCollection: "Explore Collection",
    ourPhilosophy: "Our Philosophy",
    artisticEssentials: "Quality Wood for Everyday & Industrial Use",
    curatedDescription:
      "Our company specializes in sourcing and supplying any products you require from Indonesia, ensuring reliability and competitive pricing",

    // Product Section
    viewAllProducts: "View all products",
    buyNow: "Buy Now",
    curatedCollection: "Curated Collection",
    collectionDescription:
      "Each piece in our collection tells a story, carefully selected for its beauty, functionality, and craftsmanship.",
    viewDetails: "View Details",
    productDescription: "Product Description",
    manufacturingProcess: "Manufacturing Process",

    // About Section
    ourStory: "OUR STORY",
    storyTitle: "Rooted in Nature, Crafted for Industry",
    storyDescription1:
      "At Gani Supply, our story begins with the essence of nature — wood. Since our founding, we've focused on transforming responsibly sourced wood into essential products that power homes, businesses, and industries.",
    storyDescription2:
      "We believe in the balance between utility and sustainability. That's why our products are not only built to perform but also aligned with environmentally conscious practices. Whether you're a small business or a large-scale manufacturer, we deliver the quality and consistency you can rely on.",
    ourJourney: "Our Journey",
    year2010: "2010",
    year2015: "2015",
    year2018: "2018",
    year2023: "2023",
    milestone1: "Founded with vision to revolutionize wood industry.",
    milestone2: "Entered global market with premium wood products.",
    milestone3: "Launched advanced processing facility and technology.",
    milestone4: "Leading supplier in Southeast Asia's wood industry.",

    // Contact Section
    contactUs: "Contact Us",
    contactDescription:
      "We'd love to hear from you. Get in touch with any questions, inquiries, or to schedule a visit to our warehouse.",

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

    // Gallery Section
    galleryDescription:
      "Explore our collection of high-quality products and manufacturing processes",
    viewAllImages: "View All Images",
    galleryWoodCollection: "Wood Collection",
    galleryCharcoalProducts: "Charcoal Products",
    gallerySortingProcess: "Loading Process",
    galleryStuffingProcess: "Stuffing Process",
    galleryCategoryWood: "Wood",
    galleryCategoryCharcoal: "Charcoal",
    galleryCategoryIndustrial: "Industrial",

    // Contact Section
    getInTouch: "Get In Touch",
    name: "Name",
    email: "Email",
    message: "Message",
    sendMessage: "Send Message",
    sending: "Sending...",
    contactSuccessMessage:
      "Thank you for your message. We'll get back to you soon!",
    contactErrorMessage:
      "Sorry, there was an error sending your message. Please try again.",
    newsletterSuccessMessage: "Thank you for subscribing to our newsletter!",
    newsletterErrorMessage:
      "Sorry, there was an error subscribing to the newsletter. Please try again.",
    subscribing: "Subscribing...",
    visitStore: "Visit Our Store",
    storeName: "Gani Supply",
    storeHours: "Store Hours",
    storeHoursDesc:
      "Our store hours are flexible and can be arranged according to your schedule. Please contact us to schedule your visit.",
    storePhone: "+62 812 1758 8987",
    storeEmail: "hello@ganisupply.com",

    // Product Names and Descriptions
    hardwoodCharcoal: "Hardwood Charcoal",
    hardwoodCharcoalDesc:
      "Premium hardwood charcoal made from sustainably sourced timber. Our hardwood charcoal is known for its long burning time, high heat output, and minimal smoke production. Perfect for both commercial and residential use.",
    sawdust: "Sawdust",
    sawdustDesc:
      "High-quality sawdust produced from our wood processing operations. This byproduct is carefully collected and processed to ensure consistency and cleanliness. Ideal for various industrial applications.",
    bricket: "Bricket",
    bricketDesc:
      "Compressed charcoal briquettes made from a blend of premium charcoal and natural binders. Our briquettes offer consistent heat output and are perfect for grilling and industrial applications.",
    bricketBBQ: "Bricket BBQ",
    bricketBBQDesc:
      "Premium BBQ briquettes specially designed for grilling and smoking. Our BBQ briquettes provide long-lasting heat, consistent temperature, and minimal ash production, perfect for both professional and home grilling.",
    woodPellet: "Wood Pellet",
    woodPelletDesc:
      "Premium wood pellets made from compressed sawdust and wood waste. Our pellets are designed for high efficiency and low emissions, making them ideal for heating systems and industrial use.",
    woodChip: "Wood Chip",
    woodChipDesc:
      "High-quality wood chips produced from various wood species. Our wood chips are processed to ensure consistent size and quality, suitable for multiple industrial applications.",
    fireWood: "Fire Wood",
    fireWoodDesc:
      "Premium firewood sourced from sustainable forests. Our firewood is carefully selected, properly seasoned, and cut to optimal sizes for efficient burning. Perfect for fireplaces, outdoor fire pits, and industrial heating applications.",

    // Product Manufacturing Steps
    hardwoodCharcoalStep1: "Selection of premium hardwood timber",
    hardwoodCharcoalStep2: "Drying process to reduce moisture content",
    hardwoodCharcoalStep3: "Carbonization in controlled temperature kilns",
    hardwoodCharcoalStep4: "Quality control and grading",
    hardwoodCharcoalStep5: "Packaging and distribution",

    sawdustStep1: "Collection from wood processing operations",
    sawdustStep2: "Screening and filtering for consistency",
    sawdustStep3: "Drying to optimal moisture content",
    sawdustStep4: "Quality testing and grading",
    sawdustStep5: "Packaging in various sizes",

    bricketStep1: "Mixing charcoal powder with natural binders",
    bricketStep2: "Compression into uniform shapes",
    bricketStep3: "Drying process",
    bricketStep4: "Quality testing",
    bricketStep5: "Packaging and distribution",

    bricketBBQStep1: "Selection of premium charcoal and natural binders",
    bricketBBQStep2: "Specialized mixing process for BBQ formulation",
    bricketBBQStep3: "High-pressure compression into uniform shapes",
    bricketBBQStep4: "Quality testing for heat output and burn time",
    bricketBBQStep5: "Packaging in moisture-resistant containers",

    woodPelletStep1: "Collection and preparation of raw materials",
    woodPelletStep2: "Grinding and drying",
    woodPelletStep3: "Compression into pellet form",
    woodPelletStep4: "Cooling and screening",
    woodPelletStep5: "Quality control and packaging",

    woodChipStep1: "Selection of suitable wood materials",
    woodChipStep2: "Cutting to specified sizes",
    woodChipStep3: "Screening for consistency",
    woodChipStep4: "Drying to optimal moisture content",
    woodChipStep5: "Quality control and packaging",

    fireWoodStep1: "Selection of premium hardwood species",
    fireWoodStep2: "Proper seasoning and drying process",
    fireWoodStep3: "Cutting to standardized sizes",
    fireWoodStep4: "Quality inspection for moisture content",
    fireWoodStep5: "Packaging and distribution",
    fireWoodStep6: "Available for all types of wood",

    // About Page
    companyProfile: "Company Profile",
    trustedPartner: "Your Trusted Supply Chain Partner",
    visionMission: "Vision & Mission",
    vision: "Vision",
    visionDescription:
      "To become the most trusted supply chain partner connecting producers and consumers efficiently",
    mission: "Mission",
    missionDescription:
      "To provide the best logistics solutions through modern technology and quality service",
    ganiSupplyOperations: "Gani Supply Operations",
    whatWeDo: "What We Do",
    ourServices: "Our Services",
    servicesDescription:
      "Comprehensive supply chain solutions tailored to your needs",
    supplyChainManagement: "Supply Chain Management",
    supplyChainDescription:
      "End-to-end supply chain solutions for optimal efficiency",
    warehouseManagement: "Warehouse Management",
    warehouseDescription: "State-of-the-art warehousing solutions",
    logisticsDistribution: "Logistics & Distribution",
    logisticsDescription: "Efficient and reliable distribution network",
    globalStandards: "Global Standards",
    exportQualityProducts: "Export Quality Products",
    exportQualityDescription:
      "Meeting international standards for global markets",
    internationalStandards: "International Standards",
    internationalStandardsDescription:
      "Our products meet and exceed international quality standards, ensuring global market acceptance and customer satisfaction.",
    qualityControl: "Quality Control",
    qualityControlDescription:
      "Rigorous quality control processes ensure that every product meets export standards and maintains consistent excellence.",
    globalReach: "Global Reach",
    globalReachDescription:
      "Our products are trusted by international markets, demonstrating our commitment to global quality standards and customer satisfaction.",
    certifiedQuality: "Certified Quality",
    certifiedQualityDescription:
      "Meeting international standards for global markets",
    ourPrinciples: "Our Principles",
    companyValues: "Company Values",
    companyValuesDescription: "The principles that guide our business",
    integrity: "Integrity",
    integrityDescription: "Honest and ethical business practices",
    innovation: "Innovation",
    innovationDescription:
      "Continuous improvement and technological advancement",
    excellence: "Excellence",
    excellenceDescription: "Commitment to quality in everything we do",
    sustainabilityDescription:
      "Responsible business practices for a better future",
    readyToPartner: "Ready to Partner With Us?",
    partnerDescription:
      "Let's discuss how we can optimize your supply chain and logistics operations",
    whatsappChatBubble: "How can we help you? 💬",
    chatOnWhatsApp: "Chat on WhatsApp",
  },
  id: {
    // Navigation
    home: "Beranda",
    products: "Produk",
    about: "Tentang Kami",
    gallery: "Galeri",
    contact: "Kontak",

    // Hero Section
    exploreCollection: "Jelajahi Koleksi",
    ourPhilosophy: "Filosofi Kami",
    artisticEssentials:
      "Produk Kayu Berkualitas untuk Kebutuhan Sehari-hari & Industri",
    curatedDescription:
      "Perusahaan kami mengkhususkan diri dalam mencari dan memasok produk apa pun yang Anda butuhkan dari Indonesia, menjamin keandalan dan harga yang kompetitif",

    // Product Section
    viewAllProducts: "Lihat semua produk",
    buyNow: "Beli Sekarang",
    curatedCollection: "Koleksi Terpilih",
    collectionDescription:
      "Setiap produk dalam koleksi kami menceritakan sebuah kisah, dipilih dengan cermat untuk keindahan, fungsionalitas, dan keahliannya.",
    viewDetails: "Lihat Detail",
    productDescription: "Deskripsi Produk",
    manufacturingProcess: "Proses Pembuatan",

    // About Section
    ourStory: "CERITA KAMI",
    storyTitle: "Berakar dari Alam, Dibentuk untuk Industri",
    storyDescription1:
      "Di Gani Supply, cerita kami dimulai dengan esensi alam — kayu. Sejak pendirian kami, kami fokus pada transformasi kayu yang bersumber secara bertanggung jawab menjadi produk-produk penting yang mendukung rumah tangga, bisnis, dan industri.",
    storyDescription2:
      "Kami percaya pada keseimbangan antara utilitas dan keberlanjutan. Itulah mengapa produk kami tidak hanya dibangun untuk berkinerja baik tetapi juga selaras dengan praktik yang sadar lingkungan. Baik Anda adalah bisnis kecil atau produsen skala besar, kami memberikan kualitas dan konsistensi yang dapat Anda andalkan.",
    ourJourney: "Perjalanan Kami",
    year2010: "2010",
    year2015: "2015",
    year2018: "2018",
    year2023: "2023",
    milestone1: "Didirikan dengan visi merevolusi industri kayu.",
    milestone2: "Masuk pasar global dengan produk kayu premium.",
    milestone3: "Meluncurkan fasilitas dan teknologi pengolahan canggih.",
    milestone4: "Pemasok terkemuka industri kayu di Asia Tenggara.",

    // Contact Section
    contactUs: "Hubungi Kami",
    contactDescription:
      "Kami ingin mendengar dari Anda. Hubungi kami untuk pertanyaan, permintaan, atau untuk menjadwalkan kunjungan ke gudang kami.",

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

    // Gallery Section
    galleryDescription:
      "Jelajahi koleksi produk berkualitas tinggi dan proses manufaktur kami",
    viewAllImages: "Lihat Semua Gambar",
    galleryWoodCollection: "Koleksi Kayu",
    galleryCharcoalProducts: "Produk Arang",
    gallerySortingProcess: "Proses Pemuatan",
    galleryStuffingProcess: "Proses Pengisian",
    galleryCategoryWood: "Kayu",
    galleryCategoryCharcoal: "Arang",
    galleryCategoryIndustrial: "Industri",

    // Contact Section
    getInTouch: "Hubungi Kami",
    name: "Nama",
    email: "Email",
    message: "Pesan",
    sendMessage: "Kirim Pesan",
    sending: "Mengirim...",
    contactSuccessMessage:
      "Terima kasih atas pesan Anda. Kami akan segera menghubungi Anda!",
    contactErrorMessage:
      "Maaf, terjadi kesalahan saat mengirim pesan Anda. Silakan coba lagi.",
    newsletterSuccessMessage:
      "Terima kasih telah berlangganan newsletter kami!",
    newsletterErrorMessage:
      "Maaf, terjadi kesalahan saat berlangganan newsletter. Silakan coba lagi.",
    subscribing: "Berlangganan...",
    visitStore: "Kunjungi Toko Kami",
    storeName: "Gani Supply",
    storeHours: "Jam Operasional",
    storeHoursDesc:
      "Jam operasional toko kami fleksibel dan dapat diatur sesuai dengan jadwal Anda. Silakan hubungi kami untuk menjadwalkan kunjungan Anda.",
    storePhone: "+62 812 1758 8987",
    storeEmail: "hello@ganisupply.com",

    // Product Names and Descriptions
    hardwoodCharcoal: "Arang Kayu Keras",
    hardwoodCharcoalDesc:
      "Arang kayu keras premium yang terbuat dari kayu yang bersumber secara berkelanjutan. Arang kayu keras kami dikenal dengan waktu pembakaran yang lama, output panas yang tinggi, dan produksi asap minimal. Sempurna untuk penggunaan komersial dan residensial.",
    sawdust: "Serbuk Kayu",
    sawdustDesc:
      "Serbuk kayu berkualitas tinggi yang dihasilkan dari operasi pengolahan kayu kami. Produk sampingan ini dikumpulkan dan diproses dengan hati-hati untuk memastikan konsistensi dan kebersihan. Ideal untuk berbagai aplikasi industri.",
    bricket: "Briket",
    bricketDesc:
      "Briket arang terkompresi yang terbuat dari campuran arang premium dan pengikat alami. Briket kami menawarkan output panas yang konsisten dan sempurna untuk pemanggangan dan aplikasi industri.",
    bricketBBQ: "Briket BBQ",
    bricketBBQDesc:
      "Briket BBQ premium yang dirancang khusus untuk pemanggangan dan pengasapan. Briket BBQ kami memberikan panas yang tahan lama, suhu yang konsisten, dan produksi abu minimal, sempurna untuk pemanggangan profesional dan rumahan.",
    woodPellet: "Pelet Kayu",
    woodPelletDesc:
      "Pelet kayu premium yang terbuat dari serbuk kayu dan limbah kayu terkompresi. Pelet kami dirancang untuk efisiensi tinggi dan emisi rendah, menjadikannya ideal untuk sistem pemanas dan penggunaan industri.",
    woodChip: "Serpihan Kayu",
    woodChipDesc:
      "Serpihan kayu berkualitas tinggi yang diproduksi dari berbagai spesies kayu. Serpihan kayu kami diproses untuk memastikan ukuran dan kualitas yang konsisten, cocok untuk berbagai aplikasi industri.",
    fireWood: "Kayu Bakar",
    fireWoodDesc:
      "Kayu bakar premium yang bersumber dari hutan berkelanjutan. Kayu bakar kami dipilih dengan cermat, dikeringkan dengan baik, dan dipotong ke ukuran optimal untuk pembakaran yang efisien. Perfect for fireplaces, outdoor fire pits, and industrial heating applications.",

    // Product Manufacturing Steps
    hardwoodCharcoalStep1: "Pemilihan kayu keras berkualitas premium",
    hardwoodCharcoalStep2: "Proses pengeringan untuk mengurangi kadar air",
    hardwoodCharcoalStep3: "Karbonisasi dalam tungku suhu terkontrol",
    hardwoodCharcoalStep4: "Kontrol kualitas dan penggolongan",
    hardwoodCharcoalStep5: "Pengemasan dan distribusi",

    sawdustStep1: "Pengumpulan dari operasi pengolahan kayu",
    sawdustStep2: "Penyaringan dan pemfilteran untuk konsistensi",
    sawdustStep3: "Pengeringan ke kadar air optimal",
    sawdustStep4: "Pengujian kualitas dan penggolongan",
    sawdustStep5: "Pengemasan dalam berbagai ukuran",

    bricketStep1: "Pencampuran bubuk arang dengan pengikat alami",
    bricketStep2: "Pemampatan menjadi bentuk yang seragam",
    bricketStep3: "Drying process",
    bricketStep4: "Quality testing",
    bricketStep5: "Pengemasan dan distribusi",

    bricketBBQStep1: "Pemilihan arang premium dan pengikat alami",
    bricketBBQStep2: "Proses pencampuran khusus untuk formula BBQ",
    bricketBBQStep3: "Pemampatan tekanan tinggi menjadi bentuk seragam",
    bricketBBQStep4: "Pengujian kualitas untuk panas dan lama bakar",
    bricketBBQStep5: "Pengemasan dalam wadah tahan lembap",

    woodPelletStep1: "Pengumpulan dan persiapan bahan baku",
    woodPelletStep2: "Penggilingan dan pengeringan",
    woodPelletStep3: "Pemampatan menjadi bentuk pelet",
    woodPelletStep4: "Pendinginan dan penyaringan",
    woodPelletStep5: "Kontrol kualitas dan pengemasan",

    woodChipStep1: "Pemilihan bahan kayu yang sesuai",
    woodChipStep2: "Pemotongan sesuai ukuran yang ditentukan",
    woodChipStep3: "Penyaringan untuk konsistensi",
    woodChipStep4: "Pengeringan hingga kadar air optimal",
    woodChipStep5: "Kontrol kualitas dan pengemasan",

    fireWoodStep1: "Pemilihan jenis kayu keras premium",
    fireWoodStep2: "Proses pengeringan dan pematangan yang tepat",
    fireWoodStep3: "Pemotongan ke ukuran standar",
    fireWoodStep4: "Inspeksi kualitas untuk kadar kelembapan",
    fireWoodStep5: "Pengemasan dan distribusi",
    fireWoodStep6: "Tersedia untuk semua jenis kayu",

    // About Page
    companyProfile: "Profil Perusahaan",
    trustedPartner: "Mitra Rantai Pasok Terpercaya Anda",
    visionMission: "Visi & Misi",
    vision: "Visi",
    visionDescription:
      "Menjadi mitra rantai pasok paling terpercaya yang menghubungkan produsen dan konsumen secara efisien",
    mission: "Misi",
    missionDescription:
      "Memberikan solusi logistik terbaik melalui teknologi modern dan layanan berkualitas",
    ganiSupplyOperations: "Operasi Gani Supply",
    whatWeDo: "Apa yang Kami Lakukan",
    ourServices: "Layanan Kami",
    servicesDescription:
      "Solusi rantai pasok komprehensif yang disesuaikan dengan kebutuhan Anda",
    supplyChainManagement: "Manajemen Rantai Pasok",
    supplyChainDescription:
      "Solusi rantai pasok end-to-end untuk efisiensi optimal",
    warehouseManagement: "Manajemen Gudang",
    warehouseDescription: "Solusi pergudangan berteknologi canggih",
    logisticsDistribution: "Logistik & Distribusi",
    logisticsDescription: "Jaringan distribusi yang efisien dan andal",
    globalStandards: "Standar Global",
    exportQualityProducts: "Produk Berkualitas Ekspor",
    exportQualityDescription:
      "Memenuhi standar internasional untuk pasar global",
    internationalStandards: "Standar Internasional",
    internationalStandardsDescription:
      "Produk kami memenuhi dan melampaui standar kualitas internasional, memastikan penerimaan pasar global dan kepuasan pelanggan.",
    qualityControl: "Kontrol Kualitas",
    qualityControlDescription:
      "Proses kontrol kualitas yang ketat memastikan setiap produk memenuhi standar ekspor dan mempertahankan keunggulan yang konsisten.",
    globalReach: "Jangkauan Global",
    globalReachDescription:
      "Produk kami dipercaya oleh pasar internasional, menunjukkan komitmen kami terhadap standar kualitas global dan kepuasan pelanggan.",
    certifiedQuality: "Kualitas Bersertifikat",
    certifiedQualityDescription:
      "Memenuhi standar internasional untuk pasar global",
    ourPrinciples: "Prinsip Kami",
    companyValues: "Nilai Perusahaan",
    companyValuesDescription: "Prinsip-prinsip yang memandu bisnis kami",
    integrity: "Integritas",
    integrityDescription: "Praktik bisnis yang jujur dan etis",
    innovation: "Inovasi",
    innovationDescription: "Peningkatan berkelanjutan dan kemajuan teknologi",
    excellence: "Keunggulan",
    excellenceDescription:
      "Komitmen terhadap kualitas dalam segala hal yang kami lakukan",
    sustainabilityDescription:
      "Praktik bisnis yang bertanggung jawab untuk masa depan yang lebih baik",
    readyToPartner: "Siap Bermitra dengan Kami?",
    partnerDescription:
      "Mari diskusikan bagaimana kami dapat mengoptimalkan rantai pasok dan operasi logistik Anda",
    whatsappChatBubble: "Ada yang bisa kami bantu? 💬",
    chatOnWhatsApp: "Chat di WhatsApp",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    products: "المنتجات",
    about: "من نحن",
    gallery: "معرض الصور",
    contact: "اتصل بنا",

    // Hero Section
    exploreCollection: "استكشف المجموعة",
    ourPhilosophy: "فلسفتنا",
    artisticEssentials: "خشب عالي الجودة للاستخدام اليومي والصناعي",
    curatedDescription:
      "تتخصص شركتنا في توريد وتوفير أي منتجات تحتاجها من إندونيسيا، مع ضمان الموثوقية والأسعار التنافسية",

    // Product Section
    viewAllProducts: "عرض جميع المنتجات",
    buyNow: "اشتر الآن",
    curatedCollection: "مجموعة مختارة",
    collectionDescription:
      "كل قطعة في مجموعتنا تحكي قصة، تم اختيارها بعناية لجمالها ووظيفيتها وحرفيتها.",
    viewDetails: "عرض التفاصيل",
    productDescription: "وصف المنتج",
    manufacturingProcess: "عملية التصنيع",

    // About Section
    ourStory: "قصتنا",
    storyTitle: "متجذرة في الطبيعة، مصممة للصناعة",
    storyDescription1:
      "في Gani Supply، تبدأ قصتنا مع جوهر الطبيعة — الخشب. منذ تأسيسنا، ركزنا على تحويل الخشب المصدر بشكل مسؤول إلى منتجات أساسية تدعم المنازل والشركات والصناعات.",
    storyDescription2:
      "نؤمن بالتوازن بين المنفعة والاستدامة. لهذا السبب، لا يتم بناء منتجاتنا للأداء فحسب، بل تتماشى أيضًا مع الممارسات الواعية بالبيئة. سواء كنت شركة صغيرة أو مصنعًا كبيرًا، نقدم الجودة والاتساق الذي يمكنك الاعتماد عليه.",
    ourJourney: "رحلةنا",
    year2010: "٢٠١٠",
    year2015: "٢٠١٥",
    year2018: "٢٠١٨",
    year2023: "٢٠٢٣",
    milestone1: "تأسست برؤية إحداث ثورة في صناعة الأخشاب.",
    milestone2: "دخول السوق العالمي بمنتجات خشبية فاخرة.",
    milestone3: "إطلاق منشأة معالجة وتكنولوجيا متطورة.",
    milestone4: "مورد رائد في صناعة الأخشاب بجنوب شرق آسيا.",

    // Contact Section
    contactUs: "اتصل بنا",
    contactDescription:
      "نود أن نسمع منك. تواصل معنا لأي أسئلة أو استفسارات أو لجدولة زيارة لمستودعنا.",

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

    // Gallery Section
    galleryDescription:
      "استكشف مجموعتنا من المنتجات عالية الجودة وعمليات التصنيع",
    viewAllImages: "عرض جميع الصور",
    galleryWoodCollection: "مجموعة الأخشاب",
    galleryCharcoalProducts: "منتجات الفحم",
    gallerySortingProcess: "عملية التحميل",
    galleryStuffingProcess: "عملية التعبئة",
    galleryCategoryWood: "الخشب",
    galleryCategoryCharcoal: "الفحم",
    galleryCategoryIndustrial: "صناعي",

    // Contact Section
    getInTouch: "تواصل معنا",
    name: "الاسم",
    email: "البريد الإلكتروني",
    message: "الرسالة",
    sendMessage: "إرسال الرسالة",
    sending: "جاري الإرسال...",
    contactSuccessMessage: "شكراً على رسالتك. سنتواصل معك قريباً!",
    contactErrorMessage:
      "عذراً، حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.",
    newsletterSuccessMessage: "شكراً لاشتراكك في نشرتنا الإخبارية!",
    newsletterErrorMessage:
      "عذراً، حدث خطأ أثناء الاشتراك في النشرة الإخبارية. يرجى المحاولة مرة أخرى.",
    subscribing: "جاري الاشتراك...",
    visitStore: "زيارة متجرنا",
    storeName: "Gani Supply",
    storeHours: "ساعات العمل",
    storeHoursDesc:
      "ساعات عمل متجرنا مرنة ويمكن ترتيبها وفقًا لجدولك. يرجى الاتصال بنا لجدولة زيارتك.",
    storePhone: "+62 812 1758 8987",
    storeEmail: "hello@ganisupply.com",

    // Product Names and Descriptions
    hardwoodCharcoal: "فحم الخشب الصلب",
    hardwoodCharcoalDesc:
      "فحم خشب صلب فاخر مصنوع من الأخشاب المستدامة. يتميز فحم الخشب الصلب لدينا بوقت احتراق طويل، وإنتاج حرارة عالي، وتدخين minimal. مثالي للاستخدام التجاري والسكني.",
    sawdust: "نشارة الخشب",
    sawdustDesc:
      "نشارة خشب عالية الجودة تنتج من عمليات معالجة الخشب لدينا. يتم جمع هذا المنتج الثانوي ومعالجته بعناية لضمان الاتساق والنظافة. مثالي لمختلف التطبيقات الصناعية.",
    bricket: "الفحم المضغوط",
    bricketDesc:
      "فحم مضغوط مصنوع من مزيج من الفحم الفاخر والمواد الرابطة الطبيعية. يوفر الفحم المضغوط لدينا حرارة ثابتة ومثالي للشواء والتطبيقات الصناعية.",
    bricketBBQ: "فحم الشواء المضغوط",
    bricketBBQDesc:
      "فحم شواء مضغوط فاخر مصمم خصيصًا للشواء والتدخين. يوفر فحم الشواء المضغوط لدينا حرارة طويلة الأمد، ودرجة حرارة ثابتة، وإنتاج رماد minimal، مثالي للشواء الاحترافي والمنزلي.",
    woodPellet: "حبيبات الخشب",
    woodPelletDesc:
      "حبيبات خشب فاخرة مصنوعة من نشارة الخشب وفضلات الخشب المضغوطة. تم تصميم حبيباتنا للكفاءة العالية والانبعاثات المنخفضة، مما يجعلها مثالية لأنظمة التدفئة والاستخدام الصناعي.",
    woodChip: "رقائق الخشب",
    woodChipDesc:
      "رقائق خشب عالية الجودة تنتج من أنواع مختلفة من الأخشاب. تتم معالجة رقائق الخشب لدينا لضمان حجم وجودة ثابتة، مناسبة لتطبيقات صناعية متعددة.",
    fireWood: "حطب",
    fireWoodDesc:
      "حطب فاخر مصدر من الغابات المستدامة. يتم اختيار حطبنا بعناية، وتجفيفه بشكل صحيح، وتقطيعه إلى أحجام مثالية للحرق الفعال. مثالي للمدافئ، وحفر النار الخارجية، وتطبيقات التدفئة الصناعية.",

    // Product Manufacturing Steps
    hardwoodCharcoalStep1: "اختيار الأخشاب الصلبة عالية الجودة",
    hardwoodCharcoalStep2: "عملية التجفيف لتقليل محتوى الرطوبة",
    hardwoodCharcoalStep3: "الكربنة في أفران درجة حرارة محكومة",
    hardwoodCharcoalStep4: "مراقبة الجودة والتصنيف",
    hardwoodCharcoalStep5: "التعبئة والتوزيع",

    sawdustStep1: "جمع من عمليات معالجة الخشب",
    sawdustStep2: "الغربلة والتصفية للاتساق",
    sawdustStep3: "التجفيف إلى محتوى رطوبة مثالي",
    sawdustStep4: "اختبار الجودة والتصنيف",
    sawdustStep5: "التعبئة بأحجام مختلفة",

    bricketStep1: "خلط مسحوق الفحم مع المواد الرابطة الطبيعية",
    bricketStep2: "الضغط إلى أشكال موحدة",
    bricketStep3: "عملية التجفيف",
    bricketStep4: "اختبار الجودة",
    bricketStep5: "التعبئة والتوزيع",

    bricketBBQStep1: "اختيار الفحم الفاخر والمواد الرابطة الطبيعية",
    bricketBBQStep2: "عملية خلط متخصصة لتركيبة الشواء",
    bricketBBQStep3: "ضغط عالي الضغط إلى أشكال موحدة",
    bricketBBQStep4: "اختبار الجودة لإنتاج الحرارة ووقت الاحتراق",
    bricketBBQStep5: "التعبئة في حاويات مقاومة للرطوبة",

    woodPelletStep1: "جمع وتحضير المواد الخام",
    woodPelletStep2: "الطحن والتجفيف",
    woodPelletStep3: "الضغط إلى شكل حبيبات",
    woodPelletStep4: "التبريد والغربلة",
    woodPelletStep5: "مراقبة الجودة والتعبئة",

    woodChipStep1: "اختيار مواد الخشب المناسبة",
    woodChipStep2: "التقطيع إلى أحجام محددة",
    woodChipStep3: "الغربلة للاتساق",
    woodChipStep4: "التجفيف إلى محتوى رطوبة مثالي",
    woodChipStep5: "مراقبة الجودة والتعبئة",

    fireWoodStep1: "اختيار أنواع الأخشاب الصلبة عالية الجودة",
    fireWoodStep2: "عملية التجفيف والتقادم المناسبة",
    fireWoodStep3: "التقطيع إلى أحجام قياسية",
    fireWoodStep4: "فحص الجودة لمحتوى الرطوبة",
    fireWoodStep5: "التعبئة والتوزيع",
    fireWoodStep6: "متوفر لجميع أنواع الأخشاب",

    // About Page
    companyProfile: "الملف التعريفي للشركة",
    trustedPartner: "شريك سلسلة التوريد الموثوق به",
    visionMission: "الرؤية والرسالة",
    vision: "الرؤية",
    visionDescription:
      "أن نصبح شريك سلسلة التوريد الأكثر موثوقية الذي يربط المنتجين والمستهلكين بكفاءة",
    mission: "الرسالة",
    missionDescription:
      "توفير أفضل حلول الخدمات اللوجستية من خلال التكنولوجيا الحديثة والخدمة عالية الجودة",
    ganiSupplyOperations: "عمليات Gani Supply",
    whatWeDo: "ما نقوم به",
    ourServices: "خدماتنا",
    servicesDescription: "حلول سلسلة التوريد الشاملة المصممة حسب احتياجاتك",
    supplyChainManagement: "إدارة سلسلة التوريد",
    supplyChainDescription: "حلول سلسلة التوريد المتكاملة للكفاءة المثلى",
    warehouseManagement: "إدارة المستودعات",
    warehouseDescription: "حلول مستودعات متطورة",
    logisticsDistribution: "الخدمات اللوجستية والتوزيع",
    logisticsDescription: "شبكة توزيع فعالة وموثوقة",
    globalStandards: "المعايير العالمية",
    exportQualityProducts: "منتجات بجودة التصدير",
    exportQualityDescription: "تلبية المعايير الدولية للأسواق العالمية",
    internationalStandards: "المعايير الدولية",
    internationalStandardsDescription:
      "منتجاتنا تلبي وتتجاوز معايير الجودة الدولية، مما يضمن قبول السوق العالمي ورضا العملاء.",
    qualityControl: "مراقبة الجودة",
    qualityControlDescription:
      "عمليات مراقبة الجودة الصارمة تضمن أن كل منتج يلبي معايير التصدير ويحافظ على التميز المستمر.",
    globalReach: "الوصول العالمي",
    globalReachDescription:
      "منتجاتنا موثوقة من قبل الأسواق الدولية، مما يدل على التزامنا بمعايير الجودة العالمية ورضا العملاء.",
    certifiedQuality: "جودة معتمدة",
    certifiedQualityDescription: "تلبية المعايير الدولية للأسواق العالمية",
    ourPrinciples: "مبادئنا",
    companyValues: "قيم الشركة",
    companyValuesDescription: "المبادئ التي توجه أعمالنا",
    integrity: "النزاهة",
    integrityDescription: "ممارسات أعمال صادقة وأخلاقية",
    innovation: "الابتكار",
    innovationDescription: "تحسين مستمر وتقدم تكنولوجي",
    excellence: "التميز",
    excellenceDescription: "الالتزام بالجودة في كل ما نقوم به",
    sustainabilityDescription: "ممارسات أعمال مسؤولة لمستقبل أفضل",
    readyToPartner: "هل أنت مستعد للشراكة معنا؟",
    partnerDescription:
      "دعنا نناقش كيف يمكننا تحسين سلسلة التوريد وعمليات الخدمات اللوجستية الخاصة بك",
    whatsappChatBubble: "كيف يمكننا مساعدتك؟ 💬",
    chatOnWhatsApp: "دردشة على واتساب",
  },
  zh: {
    // Navigation
    home: "首页",
    products: "产品",
    about: "关于我们",
    gallery: "图片库",
    contact: "联系我们",

    // Hero Section
    exploreCollection: "探索系列",
    ourPhilosophy: "我们的理念",
    artisticEssentials: "高品质木材，满足日常和工业需求",
    curatedDescription:
      "我们公司专门从印度尼西亚采购和供应您所需的任何产品，确保可靠性和具有竞争力的价格",

    // Product Section
    viewAllProducts: "查看所有产品",
    buyNow: "立即购买",
    curatedCollection: "精选系列",
    collectionDescription:
      "我们系列中的每一件产品都讲述着一个故事，因其美观、功能和工艺而被精心挑选。",
    viewDetails: "查看详情",
    productDescription: "产品描述",
    manufacturingProcess: "制造工艺",

    // About Section
    ourStory: "我们的故事",
    storyTitle: "源于自然，为工业而设计",
    storyDescription1:
      "在Gani Supply，我们的故事始于自然的本质 — 木材。自成立以来，我们一直专注于将负责任采购的木材转化为支持家庭、企业和工业的基本产品。",
    storyDescription2:
      "我们相信实用性和可持续性之间的平衡。这就是为什么我们的产品不仅是为了性能而建造，而且还要符合环保意识的做法。无论您是小型企业还是大型制造商，我们都提供您可以信赖的质量和一致性。",
    ourJourney: "我们的历程",
    year2010: "二零一零年",
    year2015: "二零一五年",
    year2018: "二零一八年",
    year2023: "二零二三年",
    milestone1: "以革新木材行业的愿景创立。",
    milestone2: "以优质木材产品进入全球市场。",
    milestone3: "推出先进加工设施和技术。",
    milestone4: "成为东南亚木材行业领先供应商。",

    // Contact Section
    contactUs: "联系我们",
    contactDescription:
      "我们期待听到您的声音。如有任何问题、咨询或预约参观我们的仓库，请随时联系我们。",

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
    sustainability: "可持续性",
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

    // Gallery Section
    galleryDescription: "探索我们的高质量产品和制造工艺",
    viewAllImages: "查看所有图片",
    galleryWoodCollection: "木材系列",
    galleryCharcoalProducts: "木炭产品",
    gallerySortingProcess: "装载工艺",
    galleryStuffingProcess: "填充工艺",
    galleryCategoryWood: "木材",
    galleryCategoryCharcoal: "木炭",
    galleryCategoryIndustrial: "工业",

    // Contact Section
    getInTouch: "联系我们",
    name: "姓名",
    email: "电子邮件",
    message: "留言",
    sendMessage: "发送消息",
    sending: "发送中...",
    contactSuccessMessage: "感谢您的留言。我们会尽快回复您！",
    contactErrorMessage: "抱歉，发送消息时出现错误。请重试。",
    newsletterSuccessMessage: "感谢订阅我们的通讯！",
    newsletterErrorMessage: "抱歉，订阅通讯时出现错误。请重试。",
    subscribing: "订阅中...",
    visitStore: "访问我们的商店",
    storeName: "Gani Supply",
    storeHours: "营业时间",
    storeHoursDesc:
      "我们的营业时间很灵活，可以根据您的日程安排。请联系我们安排您的访问。",
    storePhone: "+62 812 1758 8987",
    storeEmail: "hello@ganisupply.com",

    // Product Names and Descriptions
    hardwoodCharcoal: "硬木炭",
    hardwoodCharcoalDesc:
      "由可持续来源的木材制成的优质硬木炭。我们的硬木炭以其燃烧时间长、热量输出高和烟雾产生少而闻名。非常适合商业和住宅使用。",
    sawdust: "木屑",
    sawdustDesc:
      "从我们的木材加工业务中生产的高质量木屑。这种副产品经过精心收集和处理，以确保一致性和清洁度。适合各种工业应用。",
    bricket: "木炭块",
    bricketDesc:
      "由优质木炭和天然粘合剂制成的压缩木炭块。我们的木炭块提供稳定的热量输出，非常适合烧烤和工业应用。",
    bricketBBQ: "烧烤木炭块",
    bricketBBQDesc:
      "烧烤木炭块专门为烧烤和烟熏而设计。我们的烧烤木炭块提供持久的热量、一致的温度和最小的灰分生产，非常适合专业和家庭烧烤。",
    woodPellet: "木颗粒",
    woodPelletDesc:
      "由压缩木屑和木材废料制成的优质木颗粒。我们的颗粒设计用于高效率低排放，非常适合供暖系统和工业用途。",
    woodChip: "木片",
    woodChipDesc:
      "由各种木材生产的高质量木片。我们的木片经过处理以确保尺寸和质量的一致性，适合多种工业应用。",
    fireWood: "柴火",
    fireWoodDesc:
      "来自可持续森林的优质柴火。我们的柴火经过精心挑选，适当干燥，并切割成最佳尺寸以实现高效燃烧。非常适合壁炉、户外火坑和工业加热应用。",

    // Product Manufacturing Steps
    hardwoodCharcoalStep1: "选择优质硬木",
    hardwoodCharcoalStep2: "干燥过程以减少水分含量",
    hardwoodCharcoalStep3: "在控温窑中进行碳化",
    hardwoodCharcoalStep4: "质量控制和分级",
    hardwoodCharcoalStep5: "包装和分销",

    sawdustStep1: "从木材加工操作中收集",
    sawdustStep2: "筛选和过滤以确保一致性",
    sawdustStep3: "干燥至最佳水分含量",
    sawdustStep4: "质量测试和分级",
    sawdustStep5: "各种尺寸包装",

    bricketStep1: "将木炭粉与天然粘合剂混合",
    bricketStep2: "压缩成统一形状",
    bricketStep3: "干燥过程",
    bricketStep4: "质量测试",
    bricketStep5: "包装和分销",

    bricketBBQStep1: "选择优质木炭和天然粘合剂",
    bricketBBQStep2: "专门的烧烤配方混合工艺",
    bricketBBQStep3: "高压压缩成统一形状",
    bricketBBQStep4: "热量输出和燃烧时间质量测试",
    bricketBBQStep5: "防潮容器包装",

    woodPelletStep1: "收集和准备原材料",
    woodPelletStep2: "研磨和干燥",
    woodPelletStep3: "压缩成颗粒状",
    woodPelletStep4: "冷却和筛选",
    woodPelletStep5: "质量控制和包装",

    woodChipStep1: "选择适合的木材材料",
    woodChipStep2: "切割至指定尺寸",
    woodChipStep3: "筛选以确保一致性",
    woodChipStep4: "干燥至最佳水分含量",
    woodChipStep5: "质量控制和包装",

    fireWoodStep1: "选择优质硬木品种",
    fireWoodStep2: "适当的干燥和陈化过程",
    fireWoodStep3: "切割至标准尺寸",
    fireWoodStep4: "水分含量质量检查",
    fireWoodStep5: "包装和分销",
    fireWoodStep6: "适用于所有类型的木材",

    // About Page
    companyProfile: "公司简介",
    trustedPartner: "您值得信赖的供应链合作伙伴",
    visionMission: "愿景与使命",
    vision: "愿景",
    visionDescription: "成为最值得信赖的供应链合作伙伴，高效连接生产者和消费者",
    mission: "使命",
    missionDescription: "通过现代技术和优质服务提供最佳物流解决方案",
    ganiSupplyOperations: "Gani Supply运营",
    whatWeDo: "我们的业务",
    ourServices: "我们的服务",
    servicesDescription: "根据您的需求定制的综合供应链解决方案",
    supplyChainManagement: "供应链管理",
    supplyChainDescription: "端到端供应链解决方案，实现最佳效率",
    warehouseManagement: "仓储管理",
    warehouseDescription: "先进的仓储解决方案",
    logisticsDistribution: "物流与配送",
    logisticsDescription: "高效可靠的配送网络",
    globalStandards: "全球标准",
    exportQualityProducts: "出口品质产品",
    exportQualityDescription: "满足全球市场的国际标准",
    internationalStandards: "国际标准",
    internationalStandardsDescription:
      "我们的产品达到并超越国际质量标准，确保全球市场认可和客户满意度。",
    qualityControl: "质量控制",
    qualityControlDescription:
      "严格的质量控制流程确保每个产品都符合出口标准并保持一致的卓越品质。",
    globalReach: "全球覆盖",
    globalReachDescription:
      "我们的产品受到国际市场的信任，展示了我们对全球质量标准和客户满意度的承诺。",
    certifiedQuality: "认证品质",
    certifiedQualityDescription: "满足全球市场的国际标准",
    ourPrinciples: "我们的原则",
    companyValues: "公司价值观",
    companyValuesDescription: "指导我们业务的原则",
    integrity: "诚信",
    integrityDescription: "诚实和道德的商业实践",
    innovation: "创新",
    innovationDescription: "持续改进和技术进步",
    excellence: "卓越",
    excellenceDescription: "对所做的一切都保持质量承诺",
    sustainabilityDescription: "为更美好的未来负责的商业实践",
    readyToPartner: "准备好与我们合作了吗？",
    partnerDescription: "让我们讨论如何优化您的供应链和物流运营",
    whatsappChatBubble: "我们能帮您什么？💬",
    chatOnWhatsApp: "在WhatsApp上聊天",
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
