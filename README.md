# Amine Editing Team — Website

موقع بورتفوليو ثابت (HTML/CSS/JS) — كل المحتوى يُتحكَّم فيه من ملف واحد.

## الملفات
| الملف | الوظيفة |
| --- | --- |
| `index.html` | الموقع نفسه (يقرأ المحتوى من `config.js`) |
| `config.js` | **كل المحتوى**: العناوين، رابط Book A Call، الريلز، المشاهدات |
| `admin.html` | لوحة التحكم — عدّل بصرياً وصدّر `config.js` جديد |
| `fonts/` | خطوط Satoshi + Instrument Serif (محلية) |

## كيف تعدّل المحتوى
**الطريقة السهلة:** افتح `admin.html` → عدّل → **معاينة** لترى النتيجة → **تصدير config.js** → استبدل به الملف القديم (أو ارفعه على GitHub).
**الطريقة اليدوية:** افتح `config.js` وعدّل القيم مباشرة.

## المعاينة محلياً
شغّل خادماً بسيطاً داخل المجلد (لأن الخطوط لا تُحمّل من `file://`):
```
python -m http.server 8080
```
ثم افتح: `http://localhost:8080/`

## الرفع على GitHub Pages
1. أنشئ ريبو جديداً على github.com (مثلاً `amine-editing-site`).
2. من داخل مجلد الموقع نفّذ:
```
git remote add origin https://github.com/USERNAME/amine-editing-site.git
git branch -M main
git push -u origin main
```
3. في الريبو: **Settings → Pages → Branch: `main` / root → Save**.
4. بعد دقيقة يكون الموقع على: `https://USERNAME.github.io/amine-editing-site/`

> بديل أسهل للتحديث المستمر: اربط الريبو بـ **Netlify** أو **Cloudflare Pages** — كل `git push` ينشر تلقائياً.

## نطاق مخصّص
في GitHub Pages → Custom domain، أو من إعدادات Netlify/Cloudflare.
