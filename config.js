/* ============================================================
   لوحة التحكم في المحتوى — كل شيء يُعرض على الموقع من هنا
   عدّل هذا الملف يدوياً، أو استعمل admin.html (الداشبورد)
   المحتوى الأساسي = الإنجليزية. الترجمات في i18n (عربية + دارجة).
   ============================================================ */
window.SITE_CONFIG = {
  brand: "Amine Editing Team",

  /* رابط زر الحجز — Calendly / TidyCal / واتساب... */
  bookACallUrl: "#",
  bookACallText: "Apply Now",

  /* القسم العلوي (Hero) — الإنجليزية */
  hero: {
    line1: "Make Your Reels",
    line2: "Stop the Scroll &",
    line3: "Drive Results",
    subtitle: "Most editors make your videos look good. We make them perform. High-quality editing that builds your brand and gets people to act.",
    tagline: "We're not just freelancers who edit videos — we're a team that works as your content partner.",
    videoId: "Uxsu1WrvefQ"
  },

  workLabel: "Portfolio",
  workTitle: "My Best Work",

  /* الريلز — id = معرّف يوتيوب · views = المشاهدات (اتركها فارغة لإخفاء الشارة) */
  reels: [
    { id: "Tbnqnp31p4A", views: "1K"   },
    { id: "TL8oC1MHu-g", views: "740K" },
    { id: "WS3BLvUL5Rc", views: "685K" },
    { id: "ZH23EBshnRo", views: "936K" },
    { id: "iFBnWbXEbFU", views: "3.2M" },
    { id: "8wk6V4x_Aoo", views: "2M"   }
  ],

  closing: {
    titlePlain: "What are you",
    titleAccent: "waiting for?",
    line1: "You've seen the work. You know what's possible.",
    line2: "The only question is: are you ready to take action? 👇"
  },

  /* قسم طريقة العمل */
  process: {
    label: "Workflow",
    title: "Our Process",
    subtitle: "A simple workflow built to understand your project, create your unique editing style, and improve your content over time.",
    steps: [
      { title: "Project Details", desc: "We receive the key details about your business, offer, audience, references, and brand direction." },
      { title: "Unique Editing Style", desc: "We create a custom editing style built around your brand, expertise, and authority." },
      { title: "Delivery & Analysis", desc: "We deliver ready-to-publish videos and review what performs best to improve the next content." }
    ]
  },

  /* روابط القائمة (الإنجليزية) */
  nav: { home: "Home", reels: "Reels", contact: "Contact" },

  /* ===== الترجمات ===== */
  i18n: {
    ar: {
      bookACallText: "قدّم الآن",
      nav: { home: "الرئيسية", reels: "الأعمال", contact: "تواصل" },
      hero: {
        line1: "اجعل محتواك يبدو",
        line2: "",
        line3: "بمستوى خبرتك",
        subtitle: "أغلب المونتيرين يجعلون فيديوهاتك تبدو جيدة. نحن نجعلها تحقق نتائج. مونتاج احترافي يبني علامتك ويدفع الناس للتفاعل.",
        tagline: "لسنا مجرد فريلانسرز ينفذون فيديوهات، نحن فريق يعمل كشريك محتوى."
      },
      workLabel: "أعمالي",
      workTitle: "أفضل أعمالي",
      closing: {
        titlePlain: "ماذا تنتظر",
        titleAccent: "بعد؟",
        line1: "رأيت العمل. تعرف ما هو ممكن.",
        line2: "السؤال الوحيد: هل أنت مستعد للتحرّك؟ 👇"
      },
      process: {
        label: "المراحل",
        title: "طريقة العمل",
        subtitle: "نظام بسيط نفهم فيه مشروعك، نبني لك ستايل مونتاج خاص، ثم نحسّن المحتوى مع الوقت.",
        steps: [
          { title: "نستلم معلومات المشروع", desc: "نستلم منك أهم التفاصيل عن البيزنس، العرض، الجمهور، الريفرنس، واتجاه البراند." },
          { title: "Unique Editing Style", desc: "نبني لك ستايل مونتاج خاص يعكس البراند، الخبرة، وطريقة ظهورك أمام الجمهور." },
          { title: "التسليم والتحليل", desc: "نسلّم الفيديوهات جاهزة للنشر، ونراجع ما الذي يعمل بشكل أفضل لتحسين المحتوى القادم." }
        ]
      }
    },
    darija: {
      bookACallText: "Apply daba",
      nav: { home: "Lbdaya", reels: "Reels", contact: "Twasl" },
      hero: {
        line1: "Khli lreels dyalk",
        line2: "Twqf scroll",
        line3: "w tjib results",
        subtitle: "Bzaf dyal editors kaykheliw lvideos dyalk ybano mzyanin. 7na kankheliwha tjib results — editing professional kaybni lbrand dyalk w kaykheli nas ytharrko.",
        tagline: "Ma7na-ch ghir freelancers li kaymontiw videos — 7na team kaykhdem b7al content partner dyalek."
      },
      workLabel: "Lkhedma dyali",
      workTitle: "A7san lkhedma dyali",
      closing: {
        titlePlain: "3lach katsanna",
        titleAccent: "?",
        line1: "Chefti lkhedma. 3arf chno mumkin.",
        line2: "Bqa ghir so2al: wach rak msta3d ttharrek? 👇"
      },
      process: {
        label: "Workflow",
        title: "Process Dyal l Khedma",
        subtitle: "Workflow bsit kankhedmo bih bach nfehmo project dyalek, nbniw lik unique editing style, w ntawro content m3a lwe9t.",
        steps: [
          { title: "Kanstelmo Project Details", desc: "Kanstelmo mennek l infos l mohimma 3la business, offer, audience, references, w brand direction." },
          { title: "Unique Editing Style", desc: "Kanbniw lik style dyal editing khass bik, kaybin brand dyalek, expertise, w authority." },
          { title: "Delivery & Analysis", desc: "Kanselmo videos wajdin l nnachr, w kanchofo chno khdem mzyan bach ntawro content jay." }
        ]
      }
    }
  }
};
