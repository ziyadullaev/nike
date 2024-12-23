let currentIndex = 0;

// Slayderni yangilash funksiyasi
function updateSlider() {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Slaydni harakatlantirish funksiyasi
function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    currentIndex += direction;

    // Cheksiz aylanish uchun tekshiruv
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    updateSlider();
}

// Avtomatik aylanish funksiyasi
setInterval(() => {
    moveSlide(1);
}, 9000); // Har 5 soniyada slayder o‘zgaradi
