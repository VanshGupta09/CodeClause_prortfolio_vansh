"use strict";

function showSearchBar() {
    let nav_bar = document.getElementById("nav_bar");
    nav_bar.classList.toggle('showSearch');
}

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1,
            nav: true,
        },
        600: {
            items: 2,
            nav: true,
        },
        1000: {
            items: 3,
            nav: true,
        }
    }
})

// $('.owl-carousel').owlCarousel({
//     loop: true,
//     autoplay: true,
//     autoplayTimeout: 1000,
//     margin: 10,
//     nav: true,
//     responsive: {

//         0: {

//             items: 1
//         },
//         600: {

//             items: 3
//         },
//         1000: {
//             items: 5
//         }
//     }
// })