const form = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
    const phoneRegex = /^0[1-9](?:[ .-]?\\d{2}){4}$/;

    if (!nameRegex.test(form.nom.value)) {
        feedback.textContent = "Erreur : le nom contient des caractères invalides.";
        form.nom.focus();
        return;
    }

    if (!phoneRegex.test(form.telephone.value)) {
        feedback.textContent = "Erreur : le numéro de téléphone n’est pas au bon format.";
        form.telephone.focus();
        return;
    }

    feedback.textContent = "Merci ! Votre message a bien été envoyé.";
    form.reset();
});