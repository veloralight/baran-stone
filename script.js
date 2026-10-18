// پیام تأیید هنگام کلیک روی دکمه‌های سفارش
document.querySelectorAll('.product .button').forEach(function(button) {
  button.addEventListener('click', function() {
    console.log('سفارش محصول از طریق روبیکا');
  });
});

// حرکت نرم به بخش‌های مختلف سایت
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener('click', function(event) {
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
