// Modern Portfolio JavaScript

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Navbar Shadow on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
    }
});

// Intersection Observer for Fade-in Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(card);
});

// Active Navigation Link
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Login Modal Functions
const loginBtn = document.getElementById('loginBtn');
const closeLogin = document.getElementById('closeLogin');
const loginModal = document.getElementById('loginModal');
const forgotPasswordModal = document.getElementById('forgotPasswordModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const forgotPasswordLink = document.getElementById('forgotPasswordLink');
const backToLogin = document.getElementById('backToLogin');
const closeForgot = document.getElementById('closeForgot');
const loginForm = document.getElementById('loginForm');
const forgotForm = document.getElementById('forgotForm');

function openLoginModal() {
    loginModal.classList.add('active');
    modalBackdrop.classList.add('active');
}

function closeLoginModal() {
    loginModal.classList.remove('active');
}

function openForgotPasswordModal() {
    loginModal.classList.remove('active');
    forgotPasswordModal.classList.add('active');
}

function closeForgotPasswordModal() {
    forgotPasswordModal.classList.remove('active');
}

function closeAllModals() {
    loginModal.classList.remove('active');
    forgotPasswordModal.classList.remove('active');
    modalBackdrop.classList.remove('active');
}

// Event Listeners for Login Modal
if (loginBtn) {
    loginBtn.addEventListener('click', openLoginModal);
}

if (closeLogin) {
    closeLogin.addEventListener('click', closeLoginModal);
}

if (closeForgot) {
    closeForgot.addEventListener('click', closeForgotPasswordModal);
}

if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closeAllModals);
}

if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        openForgotPasswordModal();
    });
}

if (backToLogin) {
    backToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        closeForgotPasswordModal();
        loginModal.classList.add('active');
        modalBackdrop.classList.add('active');
    });
}

// Login Form Submission
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        console.log('Login attempt:', { email, password });
        alert('Login successful! (Demo)');
        closeAllModals();
        loginForm.reset();
    });
}

// Forgot Password Form Submission
if (forgotForm) {
    forgotForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const resetEmail = document.getElementById('resetEmail').value;
        console.log('Password reset requested for:', resetEmail);
        alert('Password reset link sent to ' + resetEmail + ' (Demo)');
        closeAllModals();
        forgotForm.reset();
    });
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeAllModals();
    }
});

// Log for development
console.log('Modern Portfolio Loaded ✨');