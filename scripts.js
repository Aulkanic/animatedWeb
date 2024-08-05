document.addEventListener('DOMContentLoaded', function() {
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


document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('welcome-modal');
    var closeBtn = document.getElementById('close-modal-btn');
    var yesBtn = document.getElementById('yes-btn');
    var noBtn = document.getElementById('no-btn');
    var audio = document.getElementById('background-music');
    var contentWrapper = document.getElementById('content-wrapper');

    // Show the modal when the page is loaded
    modal.style.display = 'block';
    contentWrapper.classList.add('blur-background');

    // Close the modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        contentWrapper.classList.remove('blur-background');
    });

    // Handle Yes button click
    yesBtn.addEventListener('click', function() {
        // Play the background music
        audio.play().catch(function(error) {
            console.log('Playback failed:', error);
        });
        modal.style.display = 'none';
        contentWrapper.classList.remove('blur-background');
    });

    // Handle No button click
    noBtn.addEventListener('click', function() {
        alert('Maybe next time!');
        modal.style.display = 'none';
        contentWrapper.classList.remove('blur-background');
    });

    // Close the modal if the user clicks outside of the modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            contentWrapper.classList.remove('blur-background');
        }
    });
});

