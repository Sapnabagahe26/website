// Header toggle
let MenuBtn = document.getElementById('MenuBtn');

MenuBtn.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');
});

// Typing Effect
let typed = new Typed('.auto-input', {
    strings: ['Front-End Developer!', 'Data Scientist!', 'Business Analyst!', 'Creative Writer!'],
    typespeed: 100,
    backspeed: 100,
    backDelay: 2000,
    loop: true,
});

// Active Link State on Scroll
let navLinks = document.querySelectorAll('nav ul li a');
let sections = document.querySelectorAll('section');

window.addEventListener('scroll', function () {
    const scrollPos = window.scrollY + 20;
    sections.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Close mobile navigation when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        document.querySelector('body').classList.remove('mobile-nav-active'); // Remove class
        MenuBtn.classList.remove('fa-xmark'); // Reset MenuBtn icon
    });
});


//for resume buttons
const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');
        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

// eduBtn.forEach((btn, idx) => {
//     btn.addEventListener('click', () => {
//         const resumeDetails = document.querySelectorAll('.resume-list .resume-btn');
        
//         btn.classList.add('active');

//         resumeDetails.forEach(detail => {
//             detail.classList.remove('active');
//         });
//         resumeDetails[idx].classList.add('active');
//     });
// });

// Select all read-more buttons
const readMoreBtns = document.querySelectorAll('.read-more-btn');

readMoreBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Find the parent .resume-item of the clicked button
        const currentResumeItem = btn.closest('.resume-item');
        const currentText = btn.previousElementSibling.querySelector('.read-more-text');

        // Collapse all other .resume-item elements
        document.querySelectorAll('.resume-item').forEach((resumeItem) => {
            const readMoreText = resumeItem.querySelector('.read-more-text');
            const readMoreButton = resumeItem.querySelector('.read-more-btn');

            if (resumeItem !== currentResumeItem) {
                // Collapse any other expanded items
                resumeItem.classList.remove('expanded');
                if (readMoreText) readMoreText.style.display = 'none';
                if (readMoreButton) readMoreButton.textContent = 'Read More...';
            }
        });

        // Toggle the current .resume-item
        if (!currentResumeItem.classList.contains('expanded')) {
            // Expand the clicked item
            currentResumeItem.classList.add('expanded');
            currentText.style.display = 'inline';
            btn.textContent = 'Read Less';
        } else {
            // Collapse the clicked item
            currentResumeItem.classList.remove('expanded');
            currentText.style.display = 'none';
            btn.textContent = 'Read More...';
        }
    });
});



// Portfolio Carousel Logic
const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}

// Right Arrow Event Listener
arrowRight.addEventListener('click', () => {
    if (index < 4) {  // Only increment index if it's less than 4
        index++;  // Increment index
        arrowLeft.classList.remove('disabled');  // Enable the left arrow if not on the first item
    }
    if (index === 4) {  // Disable right arrow when the index reaches the last item (index 4)
        arrowRight.classList.add('disabled');
    }

    activePortfolio();  // Update the carousel after changing the index
});

// Left Arrow Event Listener
arrowLeft.addEventListener('click', () => {
    if (index > 0) {  // Only decrement index if it's greater than 0
        index--;  // Decrement index
        arrowRight.classList.remove('disabled');  // Enable the right arrow if not on the last item
    }
    if (index === 0) {  // Disable left arrow when the index is at 0 (the first item)
        arrowLeft.classList.add('disabled');
    }

    activePortfolio();  // Update the carousel after changing the index
});


// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.querySelector('.back-to-top');

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Scroll to the top when the button is clicked
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling
        });
    });
});

