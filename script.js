/* ===== Contact ===== */
const form = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

let lastFocusedElement = null;

if (form && feedback && modal && closeModal) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
        const phoneRegex = /^0[1-9](?:[ .-]?\d{2}){4}$/;

        if (!nameRegex.test(form.nom.value.trim())) {
            feedback.textContent = "Erreur : le nom contient des caractères invalides.";
            form.nom.focus();
            return;
        }

        if (!nameRegex.test(form.prenom.value.trim())) {
            feedback.textContent = "Erreur : le prénom contient des caractères invalides.";
            form.prenom.focus();
            return;
        }

        if (!phoneRegex.test(form.telephone.value.trim())) {
            feedback.textContent = "Erreur : le numéro de téléphone n’est pas au bon format.";
            form.telephone.focus();
            return;
        }

        feedback.textContent = "";
        lastFocusedElement = document.activeElement;
        openModal();
        form.reset();
    });

    function openModal() {
        modal.removeAttribute("hidden");
        modal.setAttribute("aria-hidden", "false");
        closeModal.focus();
        document.addEventListener("keydown", handleKeydown);
    }

    function closeModalFn() {
        modal.setAttribute("hidden", "");
        modal.setAttribute("aria-hidden", "true");
        lastFocusedElement?.focus();
        document.removeEventListener("keydown", handleKeydown);
    }

    closeModal.addEventListener("click", closeModalFn);

    function handleKeydown(e) {
        if (e.key === "Escape") closeModalFn();
    }
}

/* ===== Carrousel ===== */
const items = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

if (items.length && prevBtn && nextBtn) {
    let currentIndex = 1;

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.toggle("active", index === currentIndex);
        });
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    });

    updateCarousel();
}
