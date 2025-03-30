var typed = new Typed('.multiple-text', {
    strings: ['Ahmed Yahya ', 'Certified Personal Training' ],
    typeSpeed: 50,
    backSpeed: 50,
    typeDelay: 50,
    loop:true
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

var swiper = new Swiper(".mySwipercomments", {
    spaceBetween: 50,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    // slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 2
        }
    }
});

