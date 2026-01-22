document.querySelector('.menu-toggle')?.addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.header-bottom').classList.toggle('active');
});


document.addEventListener('click', function (event) {
    const headerBottom = document.querySelector('.header-bottom');
    const menuToggle = document.querySelector('.menu-toggle');
    if (!event.target.closest('.header') &&
        !event.target.closest('.header-bottom') &&
        headerBottom?.classList.contains('active')) {
        headerBottom.classList.remove('active');
        menuToggle?.classList.remove('active');
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });

                if (window.innerWidth <= 768) {
                    document.querySelector('.header-bottom')?.classList.remove('active');
                    document.querySelector('.menu-toggle')?.classList.remove('active');
                }
            }
        }
    });
});