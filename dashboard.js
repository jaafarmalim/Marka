// ملف JavaScript للوحة التحكم

// دالة تسجيل الدخول
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  
  // التحقق من بيانات الدخول (للعرض فقط)
  if(user === "admin" && pass === "123456") {
    document.getElementById("loginContainer").style.display = "none";
    document.getElementById("dashboard").style.display = "flex";
  } else {
    alert("بيانات الدخول غير صحيحة");
  }
}

// تهيئة لوحة التحكم عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
  console.log('تم تحميل لوحة التحكم بنجاح');
  
  // إضافة مستمعي الأحداث للأزرار
  const dashboardItems = document.querySelectorAll('aside ul li');
  if (dashboardItems) {
    dashboardItems.forEach(item => {
      item.addEventListener('click', function() {
        // يمكن إضافة منطق التنقل بين أقسام لوحة التحكم هنا
        console.log('تم النقر على: ' + this.textContent);
      });
    });
  }
});
