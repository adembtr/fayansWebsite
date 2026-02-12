// =========================================
// GGÜNARA SERAMİK - Main JavaScript
// Professional Tile Craftsman Website
// =========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // =========================================
    // PRELOADER
    // Handles the loading animation and hides it when page is ready
    // =========================================
    const preloader = document.getElementById('preloader');
    
    // Hide preloader after a short delay (gives time for page to render)
    setTimeout(function() {
        if (preloader) {
            preloader.classList.add('hidden');
        }
    }, 800);

    // =========================================
    // NAVBAR SCROLL EFFECT
    // Adds a "scrolled" class to navbar when user scrolls down
    // This triggers the white background and shadow
    // =========================================
    const navbar = document.getElementById('navbar');
    
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Run on page load to check initial position
    handleNavbarScroll();
    
    // Run on scroll
    window.addEventListener('scroll', handleNavbarScroll);

    // =========================================
    // MOBILE MENU
    // Toggle mobile navigation menu on hamburger click
    // =========================================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        // Prevent body scroll when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // =========================================
    // SMOOTH SCROLL
    // Enables smooth scrolling for all anchor links
    // =========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                // Calculate offset (accounting for fixed navbar)
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                // Smooth scroll to target
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // =========================================
    // COUNTER ANIMATION
    // Animates numbers from 0 to their target value
    // =========================================
    const counters = document.querySelectorAll('.stat-number');
    let countersAnimated = false;

    function animateCounters() {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            if (!target) return;
            
            const duration = 2000; // Animation duration in ms
            const step = target / (duration / 16); // 60fps
            let current = 0;

            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
        });
    }

    // Trigger counter animation when about section comes into view
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersAnimated) {
                    countersAnimated = true;
                    setTimeout(animateCounters, 500);
                }
            });
        }, { threshold: 0.3 });

        counterObserver.observe(aboutSection);
    }

    // =========================================
    // GALLERY FILTER
    // Filters gallery items based on category
    // =========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Get filter value
            const filter = this.getAttribute('data-filter');

            // Filter gallery items
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hidden');
                    item.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    // =========================================
    // SCROLL REVEAL ANIMATION
    // Animates elements as they come into view
    // =========================================
    const revealElements = document.querySelectorAll(
        '.service-card, .why-card, .gallery-item, .feature, .contact-item, .area-card'
    );
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                entry.target.style.opacity = '1';
                revealObserver.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px' 
    });

    // Set initial state and observe elements
    revealElements.forEach(el => {
        el.style.opacity = '0';
        revealObserver.observe(el);
    });

    // =========================================
    // CONTACT FORM HANDLING
    // Handles form submission via WhatsApp
    // =========================================
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const service = document.getElementById('service');
            const serviceText = service.options[service.selectedIndex].text;
            const location = document.getElementById('location').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validate required fields
            if (!name || !phone || !service.value) {
                showToast('Lütfen gerekli alanları doldurun.');
                return;
            }

            // Build WhatsApp message
            let whatsappMessage = `Merhaba, web sitenizden keşif talebi gönderiyorum.%0A%0A`;
            whatsappMessage += `*Ad Soyad:* ${name}%0A`;
            whatsappMessage += `*Telefon:* ${phone}%0A`;
            whatsappMessage += `*Hizmet:* ${serviceText}%0A`;
            if (location) whatsappMessage += `*Konum:* ${location}%0A`;
            if (message) whatsappMessage += `*Detay:* ${message}%0A`;

            // Open WhatsApp with the message
            // Note: Replace the phone number with actual business number
            const whatsappURL = `https://wa.me/05449645082?text=${whatsappMessage}`;
            window.open(whatsappURL, '_blank');

            // Show success message
            showToast('WhatsApp yönlendiriliyor...');
            
            // Reset form after a short delay
            setTimeout(() => {
                contactForm.reset();
            }, 1000);
        });
    }

    // =========================================
    // TOAST NOTIFICATION
    // Shows temporary notification messages
    // =========================================
    function showToast(message) {
        const toast = document.getElementById('toast');
        if (!toast) return;
        
        const toastMessage = toast.querySelector('.toast-message');
        if (toastMessage) {
            toastMessage.textContent = message;
        }
        
        toast.classList.add('show');

        // Hide after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // Make showToast globally available
    window.showToast = showToast;

    // =========================================
    // LAZY LOADING IMAGES
    // Uses native lazy loading with fallback
    // =========================================
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }

    // =========================================
    // ACTIVE NAV LINK HIGHLIGHTING
    // Highlights current section in navigation
    // =========================================
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (navLink) {
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    navLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavLink);

    // =========================================
    // PHONE NUMBER CLICK TRACKING
    // Optional: Track phone number clicks for analytics
    // =========================================
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            // You can add analytics tracking here
            // For example: gtag('event', 'click', { 'event_category': 'phone', 'event_label': this.href });
            console.log('Phone click:', this.href);
        });
    });

    // =========================================
    // WHATSAPP LINK TRACKING
    // Optional: Track WhatsApp clicks for analytics
    // =========================================
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function() {
            // You can add analytics tracking here
            console.log('WhatsApp click:', this.href);
        });
    });

    // =========================================
    // PERFORMANCE: DEBOUNCE SCROLL EVENTS
    // Improves performance by limiting scroll handler calls
    // =========================================
    let scrollTimeout;
    const originalScroll = window.onscroll;
    
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        
        scrollTimeout = window.requestAnimationFrame(function() {
            handleNavbarScroll();
            highlightNavLink();
        });
    });

    // =========================================
    // ACCESSIBILITY: FOCUS MANAGEMENT
    // Improves keyboard navigation
    // =========================================
    
    // Add focus visible class for keyboard users
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-user');
        }
    });

    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-user');
    });

    // =========================================
    // ERROR HANDLING: IMAGE FALLBACK
    // Shows fallback for broken images
    // =========================================
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%23f0f0f0" width="400" height="300"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="16" fill="%23999">Görsel Yüklenemedi</text></svg>';
            this.alt = 'Görsel yüklenemedi';
        });
    });

    // =========================================
    // CONSOLE LOG FOR DEBUGGING
    // =========================================
    console.log('GGÜNARA SERAMİK website loaded successfully!');
    console.log('Developer: Professional Tile Craftsman Website');
    
});

// =========================================
// SERVICE WORKER REGISTRATION (Optional)
// For PWA functionality - can be enabled later
// =========================================
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}
*/