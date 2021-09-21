document.addEventListener('DOMContentLoaded', function () {
    const main = new Main();
});

class Main {
    constructor() {
        new MobileMenu();
        new HeroSlider('.swiper-container');
    }
}

