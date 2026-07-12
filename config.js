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
    videoId: "KI0m9SnMAEE"
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

  /* روابط القائمة (الإنجليزية) */
  nav: { home: "Home", reels: "Reels", contact: "Contact" },

  /* ===== الترجمات ===== */
  i18n: {
    ar: {
      bookACallText: "قدّم الآن",
      nav: { home: "الرئيسية", reels: "الأعمال", contact: "تواصل" },
      hero: {
        line1: "اجعل ريلزك",
        line2: "توقف التمرير",
        line3: "وتحقّق النتائج",
        subtitle: "أغلب المونتيرين يجعلون فيديوهاتك تبدو جيدة. نحن نجعلها تحقق نتائج — مونتاج احترافي يبني علامتك ويدفع الناس للتفاعل."
      },
      workLabel: "أعمالي",
      workTitle: "أفضل أعمالي",
      closing: {
        titlePlain: "ماذا تنتظر",
        titleAccent: "بعد؟",
        line1: "رأيت العمل. تعرف ما هو ممكن.",
        line2: "السؤال الوحيد: هل أنت مستعد للتحرّك؟ 👇"
      }
    },
    darija: {
      bookACallText: "Apply daba",
      nav: { home: "Lbdaya", reels: "Reels", contact: "Twasl" },
      hero: {
        line1: "Khli lreels dyalk",
        line2: "Twqf scroll",
        line3: "w tjib results",
        subtitle: "Bzaf dyal editors kaykheliw lvideos dyalk ybano mzyanin. 7na kankheliwha tjib results — editing professional kaybni lbrand dyalk w kaykheli nas ytharrko."
      },
      workLabel: "Lkhedma dyali",
      workTitle: "A7san lkhedma dyali",
      closing: {
        titlePlain: "3lach katsanna",
        titleAccent: "?",
        line1: "Chefti lkhedma. 3arf chno mumkin.",
        line2: "Bqa ghir so2al: wach rak msta3d ttharrek? 👇"
      }
    }
  }
};
