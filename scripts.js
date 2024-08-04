// document.addEventListener("DOMContentLoaded", function () {
//     const spider = document.querySelector(".spider");

//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             console.log(entry.isIntersecting)
//             if (entry.isIntersecting) {
//                 spider.classList.add("walking");
//                 observer.unobserve(entry.target); // Stop observing after the animation starts
//             }
//         });
//     }, {
//         threshold: 0.5 // Trigger when 50% of the section is visible
//     });

//     observer.observe(document.getElementById("section2"));
// });
