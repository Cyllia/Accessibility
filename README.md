# Projet Mini-Site : Sword Art Online – Mother's Rosario

## Description du projet
Ce projet consiste à créer un mini-site web complet et accessible présentant des produits dérivés de l’arc **Mother's Rosario** de l’anime **Sword Art Online**.  
Le site est conçu pour être **performant, accessible et conforme aux normes WCAG**, en utilisant uniquement **HTML, CSS et JavaScript Vanilla**.

Le site comporte quatre pages principales :
1. **Accueil** : Bannière (Hero banner) et bouton vers la page produit.
2. **Produit** : Carrousel accessible, vidéo sous-titrée, lexique de définitions, images de produits.
3. **Contact** : Formulaire accessible avec validation, modale de confirmation.
4. **À propos** : Présentation de la boutique / marque avec image.

Le **footer** est identique sur toutes les pages et contient des liens vers toutes les pages et le lexique.

---

## Fonctionnalités principales

### Accessibilité
- Navigation complète au clavier
- Modale avec focus trap et fermeture Échap
- Boutons accessibles et visibles au focus
- Images avec attribut `alt` pertinentes
- Vidéo avec sous-titres externes `.vtt`
- Formulaire avec labels, fieldset et aide à la saisie

### Carrousel produit
- Image centrale agrandie
- Images latérales plus petites
- Boutons précédent / suivant
- Navigation clavier

### Formulaire de contact
- Champs obligatoires : Nom, Prénom, Date de naissance, Email, Téléphone, Plage horaire, Message
- Validation JS stricte mais inclusive
- Modale de confirmation après envoi
- Feedback clair en cas d’erreur

---

## Technologies utilisées
- **HTML5**
- **CSS3**
- **JavaScript Vanilla**
- Images et vidéo locales pour les médias
- Sous-titres vidéo au format `.vtt`

---

## Accessibilité et qualité web
- **Lighthouse** : Score > 90 en Accessibilité et Bonnes pratiques
- **WAVE** : Aucun problème critique détecté
- Respect des normes WCAG 2.1

---

## Installation / utilisation
1. Télécharger ou cloner le repository.
2. Ouvrir **index.html** dans un navigateur récent (Chrome, Firefox).
3. Navigation possible via souris et clavier.
4. Pour tester le carrousel et le formulaire, interagir avec les boutons et champs.

---

## Structure du projet
/projet
│
├─ index.html
├─ produit.html
├─ contact.html
├─ propos.html
├─ styles/
│ ├─ styleindex.css
│ ├─ styleproduit.css
│ ├─ stylecontact.css
│ └─ stylepropos.css
├─ script.js
├─ ressources/
│ ├─ asuna_vs_yuuki.jpg/
│ ├─ épée_asuna.jpg/
│ ├─ figurine.webp/
│ ├─ épée_yuuki.jpg/
│ ├─ Sword Art Online - Asuna vs Yuuki [English Dub].mp4/
│ └─ sao_asuna_yuuki_fr.vtt
