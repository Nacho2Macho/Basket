if (document.querySelector(".viewed")) {
    new Swiper(".viewed__slider", {
        observer: true,
        observeParents: true,
        slidesPerView: 4,
        slidesPerGroup: 1,
        loop: true,
        loopedSlides: 4,
        spaceBetween: 30,
        speed: 800,
        parallax: true,
        mousewheel: true,
        navigation: {
            nextEl: ".viewed__navigation-next",
            prevEl: ".viewed__navigation-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.6,

            },
            360: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            820: {
                slidesPerView: 2.5
            },
            1100: {
                slidesPerView: 3
            },
            1321: {
                slidesPerView: 4
            }
        }
    })
}
if (document.querySelector(".special")) {
    new Swiper(".special__slider", {
        observer: true,
        observeParents: true,
        slidesPerView: 4,
        slidesPerGroup: 1,
        loop: true,
        loopedSlides: 4,
        spaceBetween: 30,
        speed: 800,
        parallax: true,
        mousewheel: true,
        navigation: {
            nextEl: ".special__head-next",
            prevEl: ".special__head-prev",
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1.6,
                spaceBetween: 20,
            },
            668: {
                slidesPerView: 2.3
            },
            820: {
                slidesPerView: 2.5
            },
            1100: {
                slidesPerView: 3
            },
            1321: {
                slidesPerView: 4
            }
        }
    })
}