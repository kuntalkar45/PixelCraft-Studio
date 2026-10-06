// Detailed Tier Data
const tierDetails = {
    '1k-3k': {
        tag: "Starter Tier",
        title: "Essential Landing Page",
        desc: "Designed for small local shops, single-person service providers, and salons who need an online presence instantly.",
        advance: "⚠️ Note: 50% advance payment is required to confirm the booking.",
        features: [
            "1-Page Clean Mobile-Friendly Layout",
            "Direct WhatsApp CTA & Call Button",
            "Google Map Location Integration",
            "Social Media Link Connectors",
            "Lightning-fast Hosting Setup"
        ],
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80"
    },
    '4k-7k': {
        tag: "Growth Tier",
        title: "Advanced Business Multi-Page & QR Support",
        desc: "Ideal for boutique stores, clothing garments, and sweet shops requiring product showcase sections and basic QR code support.",
        advance: "⚠️ Note: 50% advance payment is required to confirm the booking.",
        features: [
            "3 to 4 Page Multi-Page Website",
            "Product/Service Showcase Gallery",
            "Custom QR Code Generation for shop visiting cards",
            "Advanced Contact & Inquiry Form",
            "SEO Friendly Structure"
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
    },
    '8k-10k': {
        tag: "Enterprise Premium",
        title: "Dynamic Restaurant & Cafe Suite + Online Booking",
        desc: "High-end enterprise level solution built specifically for upscale cafes and restaurants with interactive features.",
        advance: "⚠️ Note: 50% advance payment is required to confirm the booking.",
        features: [
            "Scan-to-Get Digital Food Menu Card",
            "Interactive Online Table Booking / Reservation System",
            "Category Filterable Food/Drink Gallery",
            "Admin Dashboard Access to update prices easily",
            "Priority Support & Free Maintenance for 1 Month"
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
    },
    'custom': {
        tag: "Tailor-Made Solution",
        title: "Custom Requirement Website (As Client Says)",
        desc: "We will build exactly what you envision with complete custom logic, specific pages, and unique features tailored to your exact business needs.",
        advance: "⚠️ Note: 50% advance payment is required to confirm the booking.",
        features: [
            "Custom Design & Layout Built From Scratch",
            "Specific Features & Integrations Requested by Client",
            "Fully Scalable Architecture (CSE/Dev Backed)",
            "Dedicated Developer Consultation",
            "Post-Launch Maintenance & Support"
        ],
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80"
    }
};

// Modal Open Logic
function openDetails(tierKey) {
    const data = tierDetails[tierKey];
    if (!data) return;

    let modalHtml = `
        <div class="modal-header-tag">${data.tag}</div>
        <div class="modal-title">${data.title}</div>
        <p style="color: #9ca3af; font-size: 0.95rem; margin-bottom: 10px;">${data.desc}</p>
        <div class="advance-notice"><i class="fa-solid fa-triangle-exclamation"></i> ${data.advance}</div>
        
        <h4 style="color: white; margin-top: 15px; font-size: 1.05rem;">UI & Layout Preview:</h4>
        <img src="${data.image}" alt="Preview" class="modal-single-image">

        <h4 style="color: white; margin-top: 15px; font-size: 1.05rem;">Included Features & Options:</h4>
        <ul class="feature-list">
    `;

    data.features.forEach(feat => {
        modalHtml += `<li><i class="fa-solid fa-circle-check"></i> ${feat}</li>`;
    });

    modalHtml += `</ul><a href="#contact" class="modal-order-btn" onclick="closeDetails()">Book Package (50% Advance Required)</a>`;

    document.getElementById('modalBody').innerHTML = modalHtml;
    document.getElementById('detailModal').style.display = 'flex';
}

function closeDetails() {
    document.getElementById('detailModal').style.display = 'none';
}

// Interactive Cost Estimator (Fixed with ৳ symbol)
function calculateEstimate() {
    const pagesCost = parseInt(document.getElementById('estPages').value);
    const addonCost = parseInt(document.getElementById('estAddon').value);
    const total = pagesCost + addonCost;

    document.getElementById('estTotalPrice').textContent = "৳ " + total.toLocaleString();
}

// FAQ Toggle
function toggleFaq(element) {
    element.classList.toggle('active');
}

// Multilingual Dictionary (Fixed ৳ symbol for all languages)
const translations = {
    en: {
        logoText: "PixelCraft Studio",
        heroTitle: "Transform Your Local Business with a High-Converting Website",
        heroSubtitle: "Select your budget tier, explore advanced features, and scale your business. (Note: 50% advance payment required for booking).",
        heroBtn: "Explore Budget Tiers & Features",
        trust1Title: "Fast Delivery",
        trust1Sub: "3 to 5 Business Days",
        trust2Title: "Free Support",
        trust2Sub: "1 Month Maintenance",
        trust3Title: "Secure Booking",
        trust3Sub: "50% Advance Policy",
        pkgHeading: "Select Your Budget Tier & Unlock Features",
        pkgSubHeading: "Click any budget card below to view detailed features, 1 UI preview image, and advance payment terms.",
        tier1Badge: "Starter Tier",
        tier1Title: "Essential Landing Page",
        tier1Desc: "Perfect for micro-shops, salons, and quick local promotions with WhatsApp integration.",
        tier2Badge: "Growth Tier",
        tier2Title: "Advanced Business Multi-Page",
        tier2Desc: "Ideal for boutiques and garment stores with product showcase catalogs and QR code support.",
        tier3Badge: "Enterprise Premium",
        tier3Title: "Dynamic Restaurant & Cafe Suite",
        tier3Desc: "High-end solution featuring online table booking, Scan-to-Get digital menu card, and custom dashboard.",
        tier4Badge: "Tailor-Made Solution",
        tier4Title: "Custom Requirement Website",
        tier4Desc: "As client says, we will build exactly what you envision with complete custom features and logic.",
        customPrice: "Custom Budget",
        clickToView: "Click to view features & image",
        estHeading: "Instant Price Estimator",
        estSub: "Calculate your approximate website cost based on your requirements",
        estPages: "Number of Pages:",
        estAddon: "Special Feature / Add-on:",
        estTotalLabel: "Estimated Budget:",
        portfolioHeading: "Our Recent Client Masterpieces",
        portfolioSubHeading: "Explore 4 live web design projects delivered to our happy business owners",
        port1Desc: "Modern dark-themed cafe website with full digital menu experience.",
        port2Desc: "Professional booking landing page for high-end beauty salon.",
        port3Desc: "Multi-page garment store showcasing seasonal clothing collections.",
        port4Desc: "Traditional sweet shop website with online order hotlines & gift catalogs.",
        livePreview: "Live Preview",
        demoBtn: "Live Demo",
        testHeading: "What Our Clients Say",
        testSub: "Real feedback from local business owners who scaled with us",
        test1Text: "\"PixelCraft Studio built our cafe digital menu in just 3 days! Our customer engagement has doubled since then.\"",
        test1Shop: "Café Owner",
        test2Text: "\"Very professional service. The landing page for my salon looks premium and brings direct WhatsApp bookings daily.\"",
        test2Shop: "Salon Manager",
        faqHeading: "Frequently Asked Questions",
        faqSub: "Got questions? We have got answers",
        faq1Q: "Do I need to pay 50% advance before starting?",
        faq1A: "Yes, to confirm your booking and initiate development, a 50% advance payment is required. The remaining 50% is paid after successful delivery.",
        faq2Q: "How long does it take to build a website?",
        faq2A: "Basic landing pages take 1-2 days, while multi-page business websites and restaurant suites take 3 to 5 business days.",
        faq3Q: "Will my website work smoothly on mobile phones?",
        faq3A: "Absolutely! All our websites are 100% responsive and optimized for smartphones, tablets, and desktop computers.",
        aboutTag: "Meet The Creator",
        aboutName: "Er. Kuntal Kar",
        aboutDegree: "B.Tech in Computer Science & Engineering (CSE)",
        aboutBio: "Hi! I am Kuntal Kar, a passionate CSE engineer and web developer. I bridge the gap between complex coding and simple local business solutions, crafting high-performance and modern websites.",
        contactHeading: "Let's Build Something Exceptional Together",
        contactSubHeading: "Connect with us directly through email or join our exclusive WhatsApp channel for updates. (50% advance required).",
        emailTitle: "Drop an Email",
        waTitle: "WhatsApp Channel",
        waSub: "Join our active community",
        botName: "AI Assistant",
        botWelcome: "Hello! Welcome to PixelCraft Studio. Note that 50% advance payment is required for website booking. How can I help you?",
        botPlaceholder: "Ask anything...",
        footerText: "All rights reserved. Built with precision."
    },
    bn: {
        logoText: "পিক্সেলক্রাফট স্টুডিও",
        heroTitle: "আধুনিক ওয়েবসাইট দিয়ে আপনার লোকাল ব্যবসাকে এগিয়ে নিন",
        heroSubtitle: "আপনার বাজেট টায়ার বেছে নিন, ফিচারগুলো দেখুন এবং অর্ডার করুন। (বিঃদ্রঃ বুকিংয়ের জন্য ৫০% টাকা অ্যাডভান্স দিতে হবে)।",
        heroBtn: "বাজেট ও ফিচারগুলো দেখুন",
        trust1Title: "দ্রুত ডেলিভারি",
        trust1Sub: "৩ থেকে ৫ কার্যদিবসের মধ্যে",
        trust2Title: "ফ্রি সাপোর্ট",
        trust2Sub: "১ মাস মেইনটেনেন্স সাপোর্ট",
        trust3Title: "নিরাপদ বুকিং",
        trust3Sub: "৫০% অ্যাডভান্স পেমেন্ট পলিসি",
        pkgHeading: "আপনার বাজেট টায়ার বেছে নিন এবং ফিচার আনলক করুন",
        pkgSubHeading: "ডিটেইলড ফিচার, ১টি প্রিভিউ ইমেজ এবং অ্যাডভান্স পেমেন্ট শর্তাবলী দেখতে যেকোনো বাজেট কার্ডে ক্লিক করুন।",
        tier1Badge: "স্টার্টার টায়ার",
        tier1Title: "এসেনশিয়াল ল্যান্ডিং পেজ",
        tier1Desc: "ছোট দোকান, সেলুন এবং লোকাল প্রমোশনের জন্য পারফেক্ট। হোয়াটসঅ্যাপ কানেক্টিভিটিসহ দ্রুত সেটআপ।",
        tier2Badge: "গ্রোথ টায়ার",
        tier2Title: "এডভান্সড বিজনেস মাল্টি-পেজ",
        tier2Desc: "বুটিক এবং গার্মেন্টস শপের জন্য প্রোডাক্ট ক্যাটালগ ও QR কোড মেনু সাপোর্টযুক্ত ওয়েবসাইট।",
        tier3Badge: "এন্টারপ্রাইজ প্রিমিয়াম",
        tier3Title: "ডাইনামিক রেস্টুরেন্ট ও ক্যাফে স্যুট",
        tier3Desc: "অনলাইন টেবিল বুকিং, স্ক্যান-টু-গেট ডিজিটাল মেনু কার্ড এবং কাস্টম ড্যাশবোর্ডসহ প্রিমিয়াম সলিউশন।",
        tier4Badge: "কাস্টম সলিউশন",
        tier4Title: "কাস্টম রিকোয়ারমেন্ট ওয়েবসাইট",
        tier4Desc: "ক্লায়েন্ট যেভাবে চাইবে, ঠিক সেভাবে সম্পূর্ণ কাস্টম লজিক ও ফিচার দিয়ে ওয়েবসাইট বানিয়ে দেওয়া হবে।",
        customPrice: "কাস্টম বাজেট",
        clickToView: "ছবি ও ফিচার দেখতে ক্লিক করুন",
        estHeading: "ইনস্ট্যান্ট প্রাইস ক্যালকুলেটর",
        estSub: "আপনার রিকোয়ারমেন্ট অনুযায়ী ওয়েবসাইটের আনুমানিক খরচ হিসাব করুন",
        estPages: "পেজের সংখ্যা:",
        estAddon: "বিশেষ ফিচার / অ্যাড-অন:",
        estTotalLabel: "আনুমানিক বাজেট:",
        portfolioHeading: "আমাদের সাম্প্রতিক ক্লায়েন্ট প্রজেক্টসমূহ",
        portfolioSubHeading: "আমাদের সফলভাবে সম্পন্ন করা ৪টি প্রফেশনাল ওয়েবসাইটের লাইভ প্রিভিউ",
        port1Desc: "ডিজিটাল মেনুসহ মডার্ন ডার্ক-থিম ক্যাফে ওয়েবসাইট।",
        port2Desc: "বিউটি সেলুনের জন্য প্রফেশনাল বুকিং ল্যান্ডিং পেজ।",
        port3Desc: "গার্মেন্টস শপের জন্য মাল্টি-পেজ কালেকশন শোকেস ওয়েবসাইট।",
        port4Desc: "মিষ্টির দোকানের জন্য অনলাইন অর্ডার ও গিফট ক্যাটালগ সাইট।",
        livePreview: "লাইভ প্রিভিউ",
        demoBtn: "লাইভ ডেমো",
        testHeading: "ক্লায়েন্টদের মতামত",
        testSub: "লোকাল বিজনেস ওনারদের বাস্তব ফিডব্যাক যারা আমাদের সাথে কাজ করেছেন",
        test1Text: "\"মাত্র ৩ দিনে পিক্সেলক্রাফট স্টুডিও আমাদের ক্যাফের ডিজিটাল মেনু বানিয়ে দিয়েছে! কাস্টমার এনগেজমেন্ট দ্বিগুণ হয়ে গেছে।\"",
        test1Shop: "ক্যাফে ওনার",
        test2Text: "\"খুব প্রফেশনাল সার্ভিস। আমার সেলুনের ল্যান্ডিং পেজটি প্রিমিয়াম লুক দেয় এবং প্রতিদিন সরাসরি হোয়াটসঅ্যাপ বুকিং আসছে।\"",
        test2Shop: "সেলুন ম্যানেজার",
        faqHeading: "সচরাচর জিজ্ঞাসিত প্রশ্নাবলী",
        faqSub: "আপনার কোনো প্রশ্ন থাকলে উত্তরগুলো দেখে নিতে পারেন",
        faq1Q: "কাজ শুরুর আগে কি ৫০% অ্যাডভান্স দিতে হবে?",
        faq1A: "হ্যাঁ, আপনার বুকিং নিশ্চিত করতে এবং কাজ শুরু করার জন্য ৫০% অ্যাডভান্স পেমেন্ট বাধ্যতামূলক। বাকি ৫০% কাজ সম্পন্ন হওয়ার পর পরিশোধ করতে হবে।",
        faq2Q: "একটি ওয়েবসাইট তৈরি করতে কতদিন সময় লাগে?",
        faq2A: "সাধারণ ল্যান্ডিং পেজ তৈরি করতে ১-২ দিন এবং মাল্টি-পেজ বিজনেস সাইট বা রেস্টুরেন্ট স্যুটের জন্য ৩ থেকে ৫ দিন সময় লাগে।",
        faq3Q: "আমার ওয়েবসাইট কি মোবাইল ফোনে ভালোভাবে কাজ করবে?",
        faq3A: "অবশ্যই! আমাদের তৈরি প্রতিটি ওয়েবসাইট ১০০% রেসপন্সিভ এবং মোবাইল, ট্যাব ও কম্পিউটারের জন্য পুরোপুরি অপ্টিমাইজড।",
        aboutTag: "প্রণেতা সম্পর্কে",
        aboutName: "Er. Kuntal Kar",
        aboutDegree: "B.Tech in Computer Science & Engineering (CSE)",
        aboutBio: "নমস্কার! আমি কুন্তল কর, একজন প্যাশনেট CSE ইঞ্জিনিয়ার এবং ওয়েব ডেভেলপার। আমি জটিল কোডিং এবং সহজ লোকাল বিজনেসের মধ্যে সেতুবন্ধন তৈরি করি।",
        contactHeading: "আসুন একসাথে একটি চমৎকার প্রজেক্ট শুরু করি",
        contactSubHeading: "সরাসরি ইমেল করুন অথবা WhatsApp চ্যানেলে যুক্ত হন। (বুকিংয়ের জন্য ৫০% অ্যাডভান্স প্রযোজ্য)।",
        emailTitle: "ইমেল করুন",
        waTitle: "হোয়াটসঅ্যাপ চ্যানেল",
        waSub: "আমাদের কমিউনিটিতে জয়েন করুন",
        botName: "এআই অ্যাসিস্ট্যান্ট",
        botWelcome: "হ্যালো! পিক্সেলক্রাফট স্টুডিওতে স্বাগতম। ওয়েবসাইট বুকিংয়ের জন্য ৫০% অ্যাডভান্স দিতে হয়। কীভাবে সাহায্য করতে পারি?",
        botPlaceholder: "কিছু জিজ্ঞাসা করুন...",
        footerText: "সর্বস্বত্ব সংরক্ষিত।"
    },
    hi: {
        logoText: "पिक्सेलक्राफ्ट स्टूडियो",
        heroTitle: "एक बेहतरीन वेबसाइट के साथ अपने लोकल बिजनेस को आगे बढ़ाएं",
        heroSubtitle: "अपना बजट टियर चुनें, फीचर्स देखें और आर्डर करें। (नोट: बुकिंग के लिए 50% एडवांस भुगतान आवश्यक है)।",
        heroBtn: "बजट टियर और फीचर्स देखें",
        trust1Title: "तेज़ डिलीवरी",
        trust1Sub: "3 से 5 कार्यदिवसों में",
        trust2Title: "मुफ्त सहायता",
        trust2Sub: "1 महीने का रखरखाव",
        trust3Title: "सुरक्षित बुकिंग",
        trust3Sub: "50% एडवांस भुगतान नीति",
        pkgHeading: "अपना बजट टियर चुनें और फीचर्स अनलॉक करें",
        pkgSubHeading: "विस्तृत सुविधाओं, 1 पूर्वावलोकन छवि और एडवांस नियमों को देखने के लिए किसी भी बजट कार्ड पर क्लिक करें।",
        tier1Badge: "स्टार्टर टियर",
        tier1Title: "एसेंशियल लैंडिंग पेज",
        tier1Desc: "छोटी दुकानों, सैलून और त्वरित लोकल प्रमोशन के लिए परफेक्ट। डायरेक्ट व्हाट्सएप इंटीग्रेशन।",
        tier2Badge: "ग्रोथ टियर",
        tier2Title: "एडवांस्ड बिजनेस मल्टी-पेज",
        tier2Desc: "उत्पाद कैटलॉग और QR कोड मेनू समर्थन के साथ बुटीक और गारमेंट्स स्टोर के लिए आदर्श।",
        tier3Badge: "एंटरप्राइज प्रीमियम",
        tier3Title: "डायनेमिक रेस्तरां और कैफे सूट",
        tier3Desc: "ऑनलाइन टेबल बुकिंग, स्कैन-टू-गेट डिजिटल मेनू कार्ड और कस्टम डैशबोर्ड के साथ हाई-एंड समाधान।",
        tier4Badge: "कस्टम समाधान",
        tier4Title: "कस्टम रिक्वायरमेंट वेबसाइट",
        tier4Desc: "जैसा क्लाइंट कहेगा, हम बिल्कुल वैसी ही कस्टम वेबसाइट और फीचर्स तैयार करके देंगे।",
        customPrice: "कस्टम बजट",
        clickToView: "छवि और फीचर्स देखने के लिए क्लिक करें",
        estHeading: "इंस्टेंट प्राइस कैलकुलेटर",
        estSub: "अपनी आवश्यकताओं के आधार पर अनुमानित वेबसाइट लागत की गणना करें",
        estPages: "पेज की संख्या:",
        estAddon: "विशेष सुविधा / एड-ऑन:",
        estTotalLabel: "अनुमानित बजट:",
        portfolioHeading: "हमारे हालिया क्लाइंट प्रोजेक्ट्स",
        portfolioSubHeading: "हमारे खुश ग्राहकों को डिलीवर किए गए 4 लाइव वेब डिजाइन प्रोजेक्ट्स देखें",
        port1Desc: "फुल डिजिटल मेनू अनुभव के साथ मॉडर्न डार्क-थीम कैफे वेबसाइट।",
        port2Desc: "हाई-एंड ब्यूटी सैलून के लिए प्रोफेशनल बुकिंग लैंडिंग पेज।",
        port3Desc: "गारमेंट्स स्टोर के लिए मल्टी-पेज कलेक्शन शोकेस वेबसाइट।",
        port4Desc: "पारंपरिक स्वीट शॉप वेबसाइट ऑनलाइन ऑर्डर हॉटलाइन के साथ।",
        livePreview: "लाइव प्रीव्यू",
        demoBtn: "लाइव डेमो",
        testHeading: "हमारे क्लाइंट्स क्या कहते हैं",
        testSub: "लोकल बिजनेस ओनर्स का वास्तविक फीडबैक",
        test1Text: "\"पिक्सेलक्राफ्ट स्टूडियो ने सिर्फ 3 दिनों में हमारे कैफे का डिजिटल मेनू तैयार कर दिया!\"",
        test1Shop: "कैफे ओनर",
        test2Text: "\"बहुत ही पेशेवर सेवा। मेरे सैलून का लैंडिंग पेज प्रीमियम दिखता है और रोज व्हाट्सएप बुकिंग लाता है।\"",
        test2Shop: "सैलून मैनेजर",
        faqHeading: "अक्सर पूछे जाने वाले प्रश्न",
        faqSub: "आपके कोई प्रश्न हैं? हमारे पास उत्तर हैं",
        faq1Q: "क्या मुझे काम शुरू करने से पहले 50% एडवांस देना होगा?",
        faq1A: "हाँ, अपनी बुकिंग की पुष्टि करने और विकास शुरू करने के लिए 50% एडवांस भुगतान आवश्यक है।",
        faq2Q: "वेबसाइट बनाने में कितना समय लगता है?",
        faq2A: "बेसिक लैंडिंग पेज में 1-2 दिन लगते हैं, जबकि मल्टी-पेज वेबसाइट में 3 से 5 दिन लगते हैं।",
        faq3Q: "क्या मेरी वेबसाइट मोबाइल फोन पर सुचारू रूप से काम करेगी?",
        faq3A: "बिल्कुल! हमारी सभी वेबसाइटें 100% रिस्पॉन्सिव और मोबाइल के लिए अनुकूलित हैं।",
        aboutTag: "क्रिएटर्स के बारे में",
        aboutName: "Er. Kuntal Kar",
        aboutDegree: "B.Tech in Computer Science & Engineering (CSE)",
        aboutBio: "नमस्ते! मैं कुंतल कर, एक CSE इंजीनियर और वेब डेवलपर हूँ। मैं कोडिंग और सरल बिजनेस सॉल्यूशंस के बीच एक मजबूत कड़ी हूँ।",
        contactHeading: "आइए मिलकर कुछ बेहतरीन बनाएं",
        contactSubHeading: "हमें सीधे ईमेल करें या व्हाट्सएप चैनल से जुड़ें। (बुकिंग हेतु 50% एडवांस आवश्यक)।",
        emailTitle: "ईमेल भेजें",
        waTitle: "व्हाट्सएप चैनल",
        waSub: "हमारी कम्युनिटी से जुड़ें",
        botName: "एआई सहायक",
        botWelcome: "नमस्ते! पिक्सेलक्राफ्ट स्टूडियो में आपका स्वागत है। वेबसाइट बुकिंग के लिए 50% एडवांस जरूरी है।",
        botPlaceholder: "कुछ भी पूछें...",
        footerText: "सर्वाधिकार सुरक्षित।"
    }
};

// Change Language Function
function changeLanguage() {
    const lang = document.getElementById('languageSelect').value;
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    calculateEstimate();
}

// Chatbot Toggle and Logic
function toggleChat() {
    const chatBox = document.getElementById('chatBox');
    chatBox.style.display = chatBox.style.display === 'flex' ? 'none' : 'flex';
}

function handleKey(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const chatBody = document.getElementById('chatBody');
    const text = input.value.trim();

    if (text === '') return;

    const userDiv = document.createElement('div');
    userDiv.className = 'message user-message';
    userDiv.textContent = text;
    chatBody.appendChild(userDiv);

    input.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;

    setTimeout(() => {
        const botDiv = document.createElement('div');
        botDiv.className = 'message bot-message';
        botDiv.textContent = "Thank you! Please remember that website booking requires a 50% advance payment. You can calculate your budget above or contact Er. Kuntal Kar via WhatsApp/Telegram!";
        chatBody.appendChild(botDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
}