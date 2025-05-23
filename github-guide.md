# دليل رفع المشروع إلى GitHub

هذا الدليل يشرح كيفية رفع مشروع "ماركة جلابية" إلى GitHub خطوة بخطوة.

## الخطوات الأساسية

### 1. إنشاء حساب GitHub

1. قم بزيارة [موقع GitHub](https://github.com/)
2. انقر على "Sign up" لإنشاء حساب جديد
3. اتبع التعليمات لإكمال عملية التسجيل

### 2. إنشاء مستودع (Repository) جديد

1. بعد تسجيل الدخول، انقر على زر "+" في أعلى الصفحة ثم اختر "New repository"
2. أدخل اسم المستودع (مثلاً: `jalabiya-website`)
3. أضف وصفاً اختيارياً للمشروع (مثلاً: "موقع ماركة جلابية للملابس التقليدية")
4. اختر ما إذا كنت تريد أن يكون المستودع عاماً (Public) أو خاصاً (Private)
5. قم بتحديد خيار "Initialize this repository with a README" إذا أردت
6. انقر على "Create repository"

### 3. رفع الملفات باستخدام واجهة الويب (الطريقة الأسهل)

1. في صفحة المستودع الجديد، انقر على "uploading an existing file"
2. اسحب وأفلت ملفات المشروع أو انقر لاختيار الملفات من جهازك
3. أضف رسالة وصفية للتغييرات (مثلاً: "رفع ملفات الموقع الأولية")
4. انقر على "Commit changes"

### 4. رفع الملفات باستخدام Git (للمستخدمين المتقدمين)

إذا كنت تفضل استخدام Git من سطر الأوامر، اتبع هذه الخطوات:

1. قم بتثبيت Git على جهازك من [موقع Git الرسمي](https://git-scm.com/)
2. افتح موجه الأوامر (Command Prompt) أو Terminal
3. انتقل إلى مجلد المشروع:
   ```
   cd المسار/إلى/مجلد/jalabiya-website
   ```
4. قم بتهيئة مستودع Git محلي:
   ```
   git init
   ```
5. أضف جميع الملفات إلى منطقة التحضير:
   ```
   git add .
   ```
6. قم بعمل commit للتغييرات:
   ```
   git commit -m "رفع ملفات الموقع الأولية"
   ```
7. قم بربط المستودع المحلي بمستودع GitHub الذي أنشأته (استبدل USERNAME باسم المستخدم الخاص بك):
   ```
   git remote add origin https://github.com/USERNAME/jalabiya-website.git
   ```
8. ادفع التغييرات إلى GitHub:
   ```
   git push -u origin master
   ```
   أو إذا كان الفرع الرئيسي هو "main":
   ```
   git push -u origin main
   ```

## تحديث الموقع بعد الرفع الأولي

### باستخدام واجهة الويب:
1. انتقل إلى صفحة المستودع على GitHub
2. انقر على الملف الذي تريد تعديله
3. انقر على رمز القلم (Edit) لتعديل الملف
4. قم بإجراء التغييرات
5. أضف رسالة وصفية للتغييرات
6. انقر على "Commit changes"

### باستخدام Git:
1. قم بإجراء التغييرات المطلوبة على الملفات المحلية
2. أضف الملفات المعدلة:
   ```
   git add .
   ```
3. قم بعمل commit للتغييرات:
   ```
   git commit -m "وصف التغييرات"
   ```
4. ادفع التغييرات إلى GitHub:
   ```
   git push
   ```

## نشر الموقع باستخدام GitHub Pages

يمكنك استخدام خدمة GitHub Pages المجانية لنشر موقعك على الإنترنت:

1. انتقل إلى صفحة المستودع على GitHub
2. انقر على "Settings"
3. انتقل إلى قسم "Pages" من القائمة الجانبية
4. في قسم "Source"، اختر الفرع الذي تريد النشر منه (عادةً "main" أو "master")
5. انقر على "Save"
6. انتظر بضع دقائق وستظهر رسالة تحتوي على رابط موقعك المنشور

عنوان موقعك سيكون بالصيغة التالية:
```
https://USERNAME.github.io/jalabiya-website/
```

## نصائح إضافية

- تأكد من تحديث ملف README.md بانتظام لتوثيق أي تغييرات مهمة
- استخدم الفروع (branches) لتجربة ميزات جديدة دون التأثير على الإصدار الرئيسي
- استفد من ميزة "Issues" في GitHub لتتبع المشكلات والتحسينات المستقبلية
- قم بإضافة ملف .gitignore لتجنب رفع الملفات غير الضرورية

## المراجع

- [دليل GitHub الرسمي](https://docs.github.com/)
- [دليل Git للمبتدئين](https://git-scm.com/book/ar/v2)
