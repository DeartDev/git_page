document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const toTopBtn = document.getElementById('toTop');
    const refreshBtn = document.getElementById('refreshBtn');
    const navLinks = document.querySelectorAll('.nav-link');
    const methodologyTabs = document.querySelectorAll('.methodology-tab');
    const methodologyPanels = document.querySelectorAll('.methodology-panel');

    // ===== MENÚ HAMBURGUESA =====
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // ===== SCROLL EFFECTS =====
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Navbar background on scroll
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Mostrar/ocultar botones flotantes
        if (scrollTop > 300) {
            toTopBtn.classList.add('visible');
            refreshBtn.classList.add('visible');
        } else {
            toTopBtn.classList.remove('visible');
            refreshBtn.classList.remove('visible');
        }

        lastScrollTop = scrollTop;
    });

    // ===== BOTÓN TO TOP =====
    toTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ===== BOTÓN REFRESH (LIMPIAR CACHE + RECARGAR) =====
    refreshBtn.addEventListener('click', function() {
        // Limpiar localStorage
        localStorage.clear();
        
        // Limpiar sessionStorage
        sessionStorage.clear();
        
        // Limpiar cookies (excepto las esenciales)
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i];
            const eqPos = cookie.indexOf('=');
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
        }
        
        // Forzar recarga sin cache
        window.location.reload(true);
    });

    // ===== METODOLOGY TABS =====
    methodologyTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remover clase active de todos
            methodologyTabs.forEach(t => t.classList.remove('active'));
            methodologyPanels.forEach(p => p.classList.remove('active'));
            
            // Agregar clase active al actual
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // ===== ACTIVE LINK EN NAVEGACIÓN =====
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNav() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // ===== SMOOTH SCROLL PARA ANCLAS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const targetPosition = target.offsetTop - 70;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== EFECTO DE TYPING EN TERMINAL =====
    const terminalBody = document.querySelector('.terminal-body code');
    if (terminalBody) {
        const lines = terminalBody.innerHTML.split('<br>');
        terminalBody.innerHTML = '';
        
        let delay = 0;
        lines.forEach((line, index) => {
            setTimeout(() => {
                const lineDiv = document.createElement('div');
                lineDiv.innerHTML = line;
                terminalBody.appendChild(lineDiv);
            }, delay);
            delay += 300;
        });
    }

    // ===== ANIMACIONES DE ENTRADA =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.content-card, .feature-item, .github-feature, .tip-card, .auth-method, .integration-card, .advanced-item, .oss-step, .error-card, .glossary-item, .faq-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Agregar clase animate-in
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // ===== MANEJO DE ERRORES DE IMÁGENES =====
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
        });
    });

    // ===== PREVENCIÓN DE SCROLL HORIZONTAL =====
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    // ===== DROPDOWN TOGGLE EN MÓVIL =====
    const dropdownToggles = document.querySelectorAll('.nav-dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = this.parentElement;
                dropdown.classList.toggle('active');
            }
        });
    });

    // ===== FAQ ACORDEÓN =====
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', function() {
            // Cerrar otros items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            // Toggle actual
            item.classList.toggle('active');
        });
    });
});