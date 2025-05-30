const productos = [
    {
        id: 1,
        nombre: "Playera de Compresión",
        descripcion: "tallas S-XL",
        precio: 199,
        imagen: "assets/imagenes/compresion.jpg",
        whatsapp: "529614550970"
    },
    {
        id: 2,
        nombre: "Playera Oversize",
        descripcion: "Tallas M-XXL",
        precio: 399,
        imagen: "assets/imagenes/oversize.jpg",
        whatsapp: "529614550970"
    }
];

// Variables globales
const productosContainer = document.getElementById('productos-container');
const whatsappBtn = document.getElementById('whatsapp-btn');
const yearSpan = document.getElementById('year');

// Cargar productos
function cargarProductos() {
    let html = '';
    
    productos.forEach(producto => {
        html += `
        <div class="product-card">
            <img src="${producto.imagen}" alt="${producto.nombre}" class="product-img">
            <div class="product-info">
                <h3 class="product-title">${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p class="product-price">$${producto.precio} MXN</p>
                <a href="https://wa.me/${producto.whatsapp}?text=Hola,%20quiero%20comprar%20${encodeURIComponent(producto.nombre)}" 
                    class="btn-whatsapp">
                    <i class="fab fa-whatsapp"></i> Pedir
                </a>
            </div>
        </div>
        `;
    });
    
    productosContainer.innerHTML = `<div class="product-grid">${html}</div>`;
}

// Configurar botón flotante de WhatsApp
function configurarWhatsApp() {
    whatsappBtn.href = `https://wa.me/529614550970?text=Hola,%20vi%20tu%20catálogo%20y%20quiero%20más%20información`;
}

// Actualizar año en el footer
function actualizarYear() {
    yearSpan.textContent = new Date().getFullYear();
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();
    configurarWhatsApp();
    actualizarYear();
});
