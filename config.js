/* ============================================================
   لوحة التحكم في المحتوى — كل شيء يُعرض على الموقع من هنا
   عدّل هذا الملف يدوياً، أو استعمل admin.html (الداشبورد)
   ============================================================ */
window.SITE_CONFIG = {
  brand: "Amine Editing Team",

  /* رابط زر "Book A Call" — ضع رابط Calendly / TidyCal / أي رابط حجز */
  bookACallUrl: "#",
  bookACallText: "Apply Now",

  /* القسم العلوي (Hero) */
  hero: {
    line1: "Make Your Reels",          /* عادي */
    line2: "Stop the Scroll &",        /* عريض أسود */
    line3: "Drive Results",            /* Instrument Serif مائل أزرق */
    subtitle: "Most editors make your videos look good. I make them perform. High-quality editing that builds your brand and gets people to act.",
    videoId: "KI0m9SnMAEE"             /* الفيديو الكبير أعلى الصفحة (أفقي) */
  },

  /* عناوين قسم الأعمال */
  workLabel: "Portfolio",
  workTitle: "My Best Work",

  /* شبكة الريلز — أضف/احذف/عدّل بحرية (id = معرّف يوتيوب · views = المشاهدات) */
  reels: [
    { id: "Tbnqnp31p4A", views: "1K"   },
    { id: "TL8oC1MHu-g", views: "740K" },
    { id: "WS3BLvUL5Rc", views: "685K" },
    { id: "ZH23EBshnRo", views: "936K" },
    { id: "iFBnWbXEbFU", views: "3.2M" },
    { id: "8wk6V4x_Aoo", views: "2M"   }
  ],

  /* القسم الختامي */
  closing: {
    titlePlain: "What are you",         /* أسود */
    titleAccent: "waiting for?",        /* Instrument Serif مائل */
    line1: "You've seen the work. You know what's possible.",
    line2: "The only question is: are you ready to take action? 👇"
  }
};
