// ========================================
// INICIALIZACIÓN AOS (Animate On Scroll)
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100
    });
});

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========================================
// SMOOTH SCROLL PARA ENLACES DE NAVEGACIÓN
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Cerrar el menú móvil si está abierto
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        }
    });
});

// ========================================
// FORMULARIO DE CONTACTO
// ========================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const sport = document.getElementById('sport').value;
        const message = document.getElementById('message').value;
        
        // Validación básica
        if (!name || !email || !sport || !message) {
            showNotification('Por favor, completa todos los campos', 'error');
            return;
        }
        
        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Por favor, ingresa un email válido', 'error');
            return;
        }
        
        // Simular envío (aquí deberías integrar con tu backend)
        showNotification('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.', 'success');
        
        // Limpiar formulario
        contactForm.reset();
    });
}

// ========================================
// SISTEMA DE NOTIFICACIONES
// ========================================
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Agregar estilos inline
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #00E7FF, #00FFC5)' : 'linear-gradient(135deg, #FF3E3E, #FF8A23)'};
        color: #000;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 30px rgba(0, 231, 255, 0.4);
        z-index: 9999;
        animation: slideInRight 0.5s ease-out;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        max-width: 400px;
    `;
    
    // Agregar al body
    document.body.appendChild(notification);
    
    // Remover después de 5 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 5000);
}

// Agregar animaciones de notificación
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    
    .notification-content i {
        font-size: 1.5rem;
    }
`;
document.head.appendChild(style);

// ========================================
// EFECTO PARALLAX EN HERO
// ========================================
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ========================================
// CONTADOR ANIMADO (si se necesita en el futuro)
// ========================================
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// ========================================
// INTERSECTION OBSERVER PARA ANIMACIONES
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos que queremos animar
document.querySelectorAll('.pillar-card, .benefit-item, .process-card, .diff-card').forEach(el => {
    observer.observe(el);
});

// ========================================
// PRELOADER (opcional)
// ========================================
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// ========================================
// EFECTO DE PARTÍCULAS EN HERO (opcional)
// ========================================
function createParticles() {
    const hero = document.querySelector('.hero-section');
    if (!hero) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(0, 231, 255, 0.5);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${5 + Math.random() * 10}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
        `;
        hero.appendChild(particle);
    }
}

// Agregar animación de partículas
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        50% {
            transform: translateY(-100px) translateX(${Math.random() * 100 - 50}px);
        }
    }
`;
document.head.appendChild(particleStyle);

// Inicializar partículas
createParticles();

// ========================================
// EFECTO HOVER EN IMÁGENES
// ========================================
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ========================================
// LAZY LOADING PARA IMÁGENES
// ========================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// DETECCIÓN DE DISPOSITIVO MÓVIL
// ========================================
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Ajustar efectos según dispositivo
if (isMobile()) {
    // Desactivar parallax en móviles para mejor rendimiento
    window.removeEventListener('scroll', function() {
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.style.transform = 'none';
        }
    });
}

// ========================================
// CONSOLA DE BIENVENIDA
// ========================================
console.log('%c🔥 MÉTODO ACTIVA 🔥', 'color: #00E7FF; font-size: 24px; font-weight: bold;');
console.log('%cActivación Completa y Transformación Interna para la Vitalidad Atlética', 'color: #00FFC5; font-size: 14px;');
console.log('%c© 2025 - Todos los derechos reservados', 'color: #FFF; font-size: 12px;');
