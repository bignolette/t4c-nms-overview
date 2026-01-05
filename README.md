# T4C NMS Overview

Application de vue d'ensemble moderne et immersive pour le serveur **T4C NMS** (The 4th Coming). Cette "Fan-App" centralise et stylise les données issues de la communauté pour offrir une expérience utilisateur fluide et visuellement riche.

## 🌟 Fonctionnalités

L'application est divisée en plusieurs modules spécialisés :

*   **🛡️ Équipable (Simulateur)** : Un constructeur avancé pour filtrer les objets que vous pouvez porter selon vos statistiques (FOR, END, DEX, INT, SAG). Chaque objet affiche son icône pixelisée fidèle au jeu.
*   **🔨 Métiers (Artisanat)** : Une encyclopédie interactive des recettes. Visualisez les arbres de dépendances complets pour chaque objet craftable, incluant les monstres qui lâchent les ingrédients de base.
*   **📦 Catalogue d'Objets** : Un wiki exhaustif des équipements, armes et matériaux, enrichi par une reconnaissance intelligente des types pour l'affichage des visuels originaux.
*   **💀 Bestiaire** : Liste des créatures par zone avec leurs statistiques (XP, Or) et le détail visuel de leurs butins (drops).
*   **⚖️ Mentions Légales** : Page conforme à la législation française (LCEN) pour les éditeurs non-professionnels.

## 🎨 Design & Immersion

*   **Background Dynamique** : Un champ d'étoiles interactif en 3D (WebGL) qui réagit aux mouvements de la souris.
*   **Ambiance Spectrale** : Affichage aléatoire et cyclique de créatures mythiques en arrière-plan avec des effets de transition (flou, opacité, saturation vive).
*   **Rendu Pixel-Art** : Utilisation de la propriété `image-rendering: pixelated` pour conserver l'aspect nostalgique et net des icônes T4C originales.

## 🛠️ Stack Technique

*   **Frontend** : React 19 + Vite
*   **Langage** : TypeScript
*   **Styles & UI** : Tailwind CSS + Lucide Icons
*   **Animations** : Framer Motion
*   **Moteur 3D** : Three.js + React Three Fiber
*   **Navigation** : React Router v7

## 🚀 Installation et Développement

1.  **Installation**
    ```bash
    npm install
    ```

2.  **Lancement (Dev)**
    ```bash
    npm run dev
    ```

3.  **Build (Prod)**
    ```bash
    npm run build
    ```

## 📦 Structure des Médias

L'application exploite une structure organisée pour les ressources visuelles :
*   `/public/img/items/` : Armes, Armures et Bijoux classés par catégories.
*   `/public/img/monstres/` : Illustrations haute résolution pour l'ambiance du background.

## ℹ️ Crédits

*   **Auteur** : Bignole
*   **Sources des données** : Wiki T4C NMS, NMS Révolution.
*   **Propriété** : T4C est une marque déposée de Dialsoft Inc.

---
*Ce projet est un outil tiers créé par la communauté et n'est pas officiellement affilié à Dialsoft ou aux opérateurs du serveur.*