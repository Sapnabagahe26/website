// Header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})


// Typing Effect

let typed = new Typed('.auto-input', {
    strings: ['Front-End Developer!', 'Data Scientist!', 'Business Analyst!', 'Creative Writer!'],
    typespeed: 100,
    backspeed: 100,
    backDelay: 2000,
    loop: true,
})

// Active Link State on Scroll

// Get All Links 
let navLinks = document.querySelectorAll('nav ul li a')
// Get All Sections
let sections = document.querySelectorAll('section')

window.addEventListener('scroll', function () {
    const scrollPos = window.scrollY + 20
    sections.forEach(section => {
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active')
                }
            });
        }
    })
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

// Select all read-more buttons
const readMoreBtns = document.querySelectorAll('.read-more-btn');

readMoreBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Find the related read-more-text for the current button
        const text = btn.previousElementSibling.querySelector('.read-more-text');

        // Toggle visibility of the specific text
        if (text.style.display === 'none' || text.style.display === '') {
            text.style.display = 'inline';
            btn.textContent = 'Read Less';
        } else {
            text.style.display = 'none';
            btn.textContent = 'Read More...';
        }
    });
});

//for portfolio carousel
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

arrowRight.addEventListener('click', () => {
     if (index < 4) {
         index++;
         arrowLeft.classList.remove('disabled');
     }
     else {
         index = 5;
         arrowRight.classList.add('disabled');
     }

    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled');
    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }

   activePortfolio();
});

// Select the back-to-top button
const backToTopBtn = document.querySelector('.back-to-top');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show'); // Show button
    } else {
        backToTopBtn.classList.remove('show'); // Hide button
    }
});
