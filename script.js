/* ===== Contact ===== */
const form = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

const errors = {
    prenom: document.getElementById("error-prenom"),
    nom: document.getElementById("error-nom"),
    naissance: document.getElementById("error-naissance"),
    email: document.getElementById("error-email"),
    telephone: document.getElementById("error-telephone"),
    plage: document.getElementById("error-plage"),
    message: document.getElementById("error-message")
};

let lastFocusedElement = null;

if (form && feedback && modal && closeModal) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
        const phoneRegex = /^0[1-9](?:[ .-]?\d{2}){4}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        for (let key in errors) errors[key].textContent = "";

        // Validation du prénom
        if (!form.prenom.value.trim()) {
            feedback.textContent = "Erreur : le prénom est obligatoire.";
            form.prenom.focus();
            return;
        }
        if (!nameRegex.test(form.prenom.value.trim())) {
            errors.prenom.textContent = "Le prénom contient des caractères invalides.";
            form.prenom.focus();
            return;
        }

        // Validation du nom
        if (!form.nom.value.trim()) {
            feedback.textContent = "Erreur : le nom est obligatoire.";
            form.nom.focus();
            return;
        }
        if (!nameRegex.test(form.nom.value.trim())) {
            errors.nom.textContent = "Le nom contient des caractères invalides.";
            form.nom.focus();
            return;
        }

        // Validation de la date de naissance
        if (!form.naissance.value) {
            errors.naissance.textContent = "La date de naissance est obligatoire.";
            form.naissance.focus();
            return;
        }

        // Validation de l'email
        if (!form.email.value.trim()) {
            feedback.textContent = "Erreur : l'adresse email est obligatoire.";
            form.email.focus();
            return;
        }
        if (!emailRegex.test(form.email.value.trim())) {
            errors.email.textContent = "L'email n’est pas valide.";
            form.email.focus();
            return;
        }

        // Validation du téléphone
        if (!form.telephone.value.trim()) {
            feedback.textContent = "Erreur : le numéro de téléphone est obligatoire.";
            form.telephone.focus();
            return;
        }
        if (!phoneRegex.test(form.telephone.value.trim())) {
            errors.telephone.textContent = "Le numéro n’est pas au bon format.";
            form.telephone.focus();
            return;
        }

        // Validation de la plage horaire
        if (![...form.plage].some(r => r.checked)) {
            errors.plage.textContent = "Veuillez sélectionner une plage horaire.";
            form.plage[0].focus();
            return;
        }

        // Validation du message
        if (!form.message.value.trim()) {
            errors.message.textContent = "Le message est obligatoire.";
            form.message.focus();
            return;
        }

        // Tout est correct, on envoie le formulaire
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
