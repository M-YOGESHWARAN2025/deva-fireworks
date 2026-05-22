// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// Modal Management
const modal = document.getElementById('enquiryModal');
const floatingBtn = document.getElementById('floatingEnquiry');
const closeBtn = document.getElementById('closeModal');
const enquiryLinks = document.querySelectorAll('a[href="#enquiry"]');

// Open modal
function openModal() {
    modal.classList.add('active');
}

// Close modal
function closeModal() {
    modal.classList.remove('active');
}

floatingBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
enquiryLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });
});

// Close modal on background click
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Close on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Form submission
document.getElementById('enquiry').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your enquiry! We will contact you soon.');
    closeModal();
    e.target.reset();
});

// Products Slider
const track = document.querySelector('.products-track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentScroll = 0;
const scrollAmount = 350;

nextBtn.addEventListener('click', () => {
    currentScroll += scrollAmount;
    track.style.transform = `translateX(-${currentScroll}px)`;
});

prevBtn.addEventListener('click', () => {
    currentScroll = Math.max(0, currentScroll - scrollAmount);
    track.style.transform = `translateX(-${currentScroll}px)`;
});

// Stat Counter Animation
function animateCounter() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        let current = 0;
        const increment = target / 50;
        
        const updateCount = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current);
                setTimeout(updateCount, 30);
            } else {
                counter.textContent = target + '+';
            }
        };
        
        updateCount();
    });
}

// Trigger animation on scroll
const aboutSection = document.querySelector('.about-preview');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter();
            observer.unobserve(entry.target);
        }
    });
});

observer.observe(aboutSection);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#enquiry') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Navbar scroll effect
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(221, 1, 37, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 15px rgba(221, 1, 37, 0.1)';
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Newsletter form
document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    e.target.reset();
});

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksRight = document.querySelector('.nav-links-right');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinksRight.style.display = navLinksRight.style.display === 'flex' ? 'none' : 'flex';
    });
}