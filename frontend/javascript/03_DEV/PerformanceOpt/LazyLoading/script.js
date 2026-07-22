// let imgs = document.querySelector("img");

// const observer = new IntersectionObserver(function(entries, observer) {
//     entries.forEach(function(entry) {
//         if(entry.isIntersecting) {
//             const img = entry.target;
//             img.src = img.dataset.src;
//             img.classList.add("loaded");
//             observer.unobserve(entry);
//         }
//     })
// },
// {
//     root: null,
//     threshold: 0.1,
// }
// )

// imgs.forEach(function (img) {
//     observer.observe(img);
// })


document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll("img.lazy");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove("lazy");
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => observer.observe(img));
});