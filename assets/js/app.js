const modal = document.getElementById("contactModal");
const modalTitle = modal.querySelector(".modal__title");
const modalContent = modal.querySelector(".modal__list");
const modalBody = modal.querySelector(".modal__content");
const closeBtn = document.getElementById("modalClose");

// --- FUNCIÓN PARA REINICIAR EL MODAL A MODO CONTACTO ---
const resetModalToContact = () => {
    modalTitle.innerText = "✨ Karduy – Sabor natural que se siente ✨";
    modalContent.innerHTML = `
        <li>☕ Café en grano y molido</li>
        <li>🥜 Maní 100% orgánico</li>
        <li>🍯 Maní dulce con panela</li>
        <li>🍫 Cacao en grano y en polvo</li>
    `;
    modalBody.style.backgroundImage = "none";
};

// --- BOTÓN "VER OPCIONES DE CONTACTO" Y LOGO ---
const contactTriggers = document.querySelectorAll(".contact-trigger, .logo-badge");
contactTriggers.forEach(el => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        resetModalToContact();
        modal.classList.add("active");
    });
});

// --- BOTONES "CONOCER MÁS" (CON FONDO DINÁMICO) ---
document.querySelectorAll(".btn-consultar").forEach(btn => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".card");
        const image = card.querySelector("img");
        
        // Obtenemos la ruta de la imagen
        const imageSrc = image.getAttribute("src");
        
        const nombre = btn.getAttribute("data-producto");
        const origen = btn.getAttribute("data-origen");
        const beneficios = btn.getAttribute("data-beneficios");

        modalTitle.innerText = nombre;
        modalContent.innerHTML = `
            <li><strong>📍 Origen:</strong> ${origen}</li>
            <li><strong>🌿 Beneficios:</strong> ${beneficios}</li>
            <li style="margin-top:15px; list-style:none;">✨ <em>Sanando desde la raíz</em></li>
        `;

        // Aplicamos el fondo traslúcido
        modalBody.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${imageSrc})`;
        modalBody.style.backgroundSize = "cover";
        modalBody.style.backgroundPosition = "center";

        modal.classList.add("active");
    });
});

// --- CERRAR MODAL ---
closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});

// --- LÓGICA VER MÁS PRODUCTOS ---
const btnVerMas = document.getElementById("btnVerMas");
const productosExtra = document.querySelectorAll(".extra-product");

if (btnVerMas) {
    btnVerMas.addEventListener("click", () => {
        productosExtra.forEach(prod => {
            prod.classList.add("show");
        });
        btnVerMas.style.display = "none";
    });
}