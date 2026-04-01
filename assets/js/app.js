const modal = document.getElementById("contactModal");
const modalTitle = modal.querySelector(".modal__title");
const modalContent = modal.querySelector(".modal__list");
const modalBody = modal.querySelector(".modal__content");
const modalActions = modal.querySelector(".modal__actions");
const closeBtn = document.getElementById("modalClose");
// Seleccionamos los párrafos informativos del modal de contacto para poder ocultarlos
const modalExtraTexts = modal.querySelectorAll(".modal__content > p");

const openModal = () => {
    modal.classList.add("active");
    document.body.classList.add("modal-open");
};

const closeModal = () => {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
};

// --- MODAL MODO CONTACTO (Muestra todo) ---
const resetModalToContact = () => {
    modalTitle.innerText = "✨ Karduy – Sabor natural que se siente ✨";
    modalContent.innerHTML = `
        <li>☕ Café en grano y molido</li>
        <li>🥜 Maní 100% orgánico</li>
        <li>🍯 Maní dulce con panela</li>
        <li>🍫 Cacao en grano y en polvo</li>
    `;
    modalBody.style.backgroundImage = "none";
    
    // MOSTRAR botones de redes sociales y textos extra
    modalActions.style.display = "flex";
    modalExtraTexts.forEach(p => p.style.display = "block");
};

// --- BOTONES "CONTACTO" Y LOGO ---
document.querySelectorAll(".contact-trigger, .logo-badge").forEach(el => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        resetModalToContact();
        openModal();
    });
});

// --- BOTONES "CONOCER MÁS" (MODAL MODO PRODUCTO) ---
document.querySelectorAll(".btn-consultar").forEach(btn => {
    btn.addEventListener("click", () => {
        const card = btn.closest(".card");
        const imageSrc = card.querySelector("img").getAttribute("src");
        const nombre = btn.getAttribute("data-producto");
        const origen = btn.getAttribute("data-origen");
        const beneficios = btn.getAttribute("data-beneficios");

        modalTitle.innerText = nombre;
        modalContent.innerHTML = `
            <li><strong>📍 Origen:</strong> ${origen}</li>
            <li><strong>🌿 Beneficios:</strong> ${beneficios}</li>
            <li style="margin-top:25px; list-style:none;">
                <a href="https://wa.me/573222188846?text=Hola! Quiero más info del producto: ${nombre}" 
                   target="_blank" 
                   class="btn" 
                   style="background:#25D366; display:block; text-align:center; color:white; font-weight:bold; text-decoration:none; padding:15px; border-radius:10px;">
                   Pedir este producto por WhatsApp
                </a>
            </li>
        `;

        // OCULTAR botones generales (IG, Correo) y textos de contacto
        modalActions.style.display = "none";
        modalExtraTexts.forEach(p => p.style.display = "none");

        // Fondo dinámico
        modalBody.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${imageSrc})`;
        modalBody.style.backgroundSize = "cover";
        modalBody.style.backgroundPosition = "center";

        openModal();
    });
});

// --- CERRAR MODAL ---
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
window.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

// --- LÓGICA VER MÁS PRODUCTOS ---
const btnVerMas = document.getElementById("btnVerMas");
if (btnVerMas) {
    btnVerMas.addEventListener("click", () => {
        document.querySelectorAll(".extra-product").forEach(prod => prod.classList.add("show"));
        btnVerMas.style.display = "none";
    });
}