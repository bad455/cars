const form = document.querySelector('#myForm form');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // منع الإرسال الافتراضي للنموذج
    successMsg.style.display = 'block'; // إظهار رسالة النجاح
    form.reset(); // تفريغ الحقول بعد الإرسال
});

form.addEventListener('submit', function(e) {
    e.preventDefault(); // منع الإرسال الافتراضي
    successMsg.style.display = 'block'; // إظهار رسالة النجاح
    form.reset(); // تفريغ الحقول فورًا

    // إعادة تحميل الصفحة بعد 2 ثانية
    setTimeout(() => {
        location.reload();
    }, 2000); // 2000 ملي ثانية = ثانيتان
});


















<!-- الاسم -->
<label for="name">الاسم:</label>
<input type="text" id="name" name="name" required>

<!-- البريد الإلكتروني -->
<label for="email">البريد الإلكتروني:</label>
<input type="email" id="email" name="email" required>

<!-- رقم الهاتف -->
<label for="phone">رقم الهاتف:</label>
<input type="tel" id="phone" name="phone" required>

<!-- تاريخ الرحلة -->
<label for="date">تاريخ الرحلة:</label>
<input type="date" id="date" name="date" required>

<!-- وقت الرحلة -->
<label for="time">وقت الرحلة:</label>
<input type="time" id="time" name="time" required>

<!-- عدد المقاعد -->
<label for="seats">عدد المقاعد:</label>
<input type="number" id="seats" name="seats" min="1" max="10" required>

<!-- الدولة -->
