document.addEventListener('DOMContentLoaded', function(){
        var swiper = new swiper(".swiper-container",{
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            pagination:{
                el: ".swiper-pagination",
            },
            navigation:{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints:{
                768:{
                    slidesPerView: 2,
                },
                992:{
                    slidesPerView: 3,
                },
                1025:{
                    slidesPerView: 4,
                }
            },
            autoplay:{
                delay: 900,
            },
        })
       })