document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animation for the circle mask
    gsap.fromTo(".circle-mask", 
        {
            clipPath: "circle(5% at 77% 40%)",
        }, 
        {
            clipPath: "circle(75% at 50% 50%)",
            ease: "none",
            scrollTrigger: {
                trigger: ".circle-mask",
                scrub: 1,
                start: "top center",
                end: "top center-=200",
                onEnter: () => revealPopupImage(), // Call the reveal function when the animation starts
            }
        }
    );

    function revealPopupImage() {
        gsap.fromTo(".popup-image", 
            {
                opacity: 0,
                scale: 0.5,
            }, 
            {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power2.out"
            }
        );
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP plugins if needed (not required for this simple animation)
    // gsap.registerPlugin(ScrollTrigger);

    // Animate the .character element on page load
    gsap.to('.character', {
        duration: 1,
        scale: 1,
        opacity: 1,
        ease: 'elastic.out(1, 0.3)', // Elastic easing for a pop-in effect
        onComplete: () => {
            console.log('Character animation complete');
        }
    });
});



let lastScrollTop = 0;
const yeti = document.querySelector('.yetiCharacter');

window.addEventListener('scroll', function () {
  const st = window.scrollY || document.documentElement.scrollTop;

  if (st > lastScrollTop) {
    // Downscroll code
    yeti.classList.remove('moveUp');
    yeti.classList.add('moveDown');
  } else {
    // Upscroll code
    yeti.classList.remove('moveDown');
    yeti.classList.add('moveUp');
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
});



// Ensure GSAP is included and available
document.addEventListener('DOMContentLoaded', () => {
    const section6 = document.getElementById('section6');
    const grassLeft = document.querySelector('.grass-left');
    const grassRight = document.querySelector('.grass-right');
  
    // ScrollTrigger animation
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.fromTo(grassLeft, {
      x: "-100vw", // Start off-screen left
      opacity: 1
    }, {
      x: "0",
      opacity: 1,
      scrollTrigger: {
        trigger: section6,
        start: "top center",
        end: "bottom top",
        scrub: 1
      }
    });
  
    gsap.fromTo(grassRight, {
      x: "100vw", // Start off-screen right
      opacity: 1
    }, {
      x: "0",
      opacity: 1,
      scrollTrigger: {
        trigger: section6,
        start: "top center",
        end: "bottom top",
        scrub: 1
      }
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const section1 = document.getElementById('section1');
    const fenceLeft = document.querySelector('.fence-left');
    const fenceRight = document.querySelector('.fence-right');
  
    // Register GSAP ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.fromTo(fenceLeft, {
      x: "0", // Start at its original position
      opacity: 1
    }, {
      x: "-100vw", // Move off-screen to the left
      opacity: 1, // Fade out
      scrollTrigger: {
        trigger: section1,
        start: "top center",
        end: "bottom top",
        scrub: 1
      }
    });
  
    gsap.fromTo(fenceRight, {
      x: "0", // Start at its original position
      opacity: 1
    }, {
      x: "100vw", // Move off-screen to the right
      opacity: 1, // Fade out
      scrollTrigger: {
        trigger: section1,
        start: "top center",
        end: "bottom top",
        scrub: 1
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Function to animate sections
    const animateSection = (section) => {
        gsap.fromTo(section, {
            y: 100, // Start from below
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "top 30%",
                scrub: true,
                markers: false
            }
        });
    };

    // Target each section with the class 'animate-section'
    const sections = document.querySelectorAll('.animate-section');
    
    sections.forEach(section => {
        animateSection(section);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const bird = document.querySelector('.bird');
  
    gsap.fromTo(bird, {
      x: "-100px", // Start off-screen to the left
    }, {
      x: "100vw", // Move across the screen
      duration: 10, // Duration of the animation
      repeat: -1, // Repeat indefinitely
      ease: "linear", // Linear motion
    });
  });
  
  


