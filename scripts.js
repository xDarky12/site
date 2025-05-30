// Ejemplo: Cambiar color de header al hacer scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.background = window.scrollY > 50 ? '#fff' : 'transparent';
});

// Formulario (usando Formspree para envíos gratis)
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Pedido enviado! Te contactaremos pronto por WhatsApp.');
    form.reset();
});