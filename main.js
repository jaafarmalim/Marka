// ملف JavaScript الرئيسي لموقع ماركة جلابية

// دالة للتحقق من جاهزية المستند
document.addEventListener('DOMContentLoaded', function() {
  console.log('تم تحميل الصفحة بنجاح');
  
  // إضافة تأثيرات حركية للبطاقات
  const cards = document.querySelectorAll('.card');
  if (cards) {
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
      });
      
      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });
    });
  }
  
  // تفعيل التصفية في صفحة المنتجات
  const categorySelect = document.getElementById('category');
  if (categorySelect) {
    categorySelect.addEventListener('change', function() {
      filterProducts(this.value);
    });
  }
});

// دالة تصفية المنتجات
function filterProducts(category) {
  console.log('تصفية المنتجات حسب: ' + category);
  // هنا يمكن إضافة منطق التصفية الفعلي
  // مثال: إخفاء/إظهار المنتجات بناءً على التصنيف المحدد
  
  if (category === 'الكل') {
    // إظهار جميع المنتجات
    document.querySelectorAll('.product').forEach(product => {
      product.style.display = 'block';
    });
  } else {
    // إظهار المنتجات المطابقة فقط
    document.querySelectorAll('.product').forEach(product => {
      if (product.querySelector('h4').textContent.includes(category)) {
        product.style.display = 'block';
      } else {
        product.style.display = 'none';
      }
    });
  }
}

// دالة إظهار قسم التفصيل المناسب
function showSection() {
  const value = document.getElementById("type").value;
  document.getElementById("jalabiya")?.classList.add("hidden");
  document.getElementById("sudairi")?.classList.add("hidden");
  document.getElementById("alaallah")?.classList.add("hidden");
  
  if (value) {
    document.getElementById(value)?.classList.remove("hidden");
  }
}
