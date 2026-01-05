# T4C NMS Overview

Application de vue d'ensemble pour le serveur **T4C NMS** (The 4th Coming). Cette application centralise les informations provenant du Wiki T4C NMS et du site NMS Révolution pour offrir une interface moderne et fluide aux joueurs.

## 🌟 Fonctionnalités

L'application propose plusieurs modules pour aider les joueurs dans leur aventure :

*   **🛡️ Équipable (Simulateur)** : Un outil permettant de filtrer et visualiser les objets équipables en fonction des statistiques de votre personnage.
*   **🔨 Métiers (Artisanat)** : Encyclopédie complète des recettes d'artisanat, incluant les ingrédients nécessaires et leurs sources de farm.
*   **📦 Objets** : Catalogue complet des équipements, armes, orbes et matériaux disponibles en jeu.
*   **💀 Bestiaire** : Liste exhaustive des créatures classées par zone, avec le détail de leurs butins (drops).
*   **🔮 Visualisation 3D** : Interface enrichie avec des éléments 3D interactifs (via Three.js).

## 🛠️ Stack Technique

Ce projet est construit avec des technologies web modernes pour assurer performance et maintenabilité :

*   **Framework** : [React 19](https://react.dev/)
*   **Build Tool** : [Vite](https://vitejs.dev/)
*   **Langage** : [TypeScript](https://www.typescriptlang.org/)
*   **Styles** : [Tailwind CSS](https://tailwindcss.com/)
*   **Routing** : [React Router v7](https://reactrouter.com/)
*   **Icons** : [Lucide React](https://lucide.dev/)
*   **Animation** : [Framer Motion](https://www.framer.com/motion/)
*   **3D** : [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) / [Three.js](https://threejs.org/)

## 🚀 Installation et Démarrage

Pour lancer le projet localement, suivez ces étapes :

### Prérequis

*   Node.js (version récente recommandée)
*   npm ou yarn

### Étapes

1.  **Cloner le dépôt**
    ```bash
    git clone <votre-url-de-depot>
    cd t4c-nms-overview
    ```

2.  **Installer les dépendances**
    ```bash
    npm install
    ```

3.  **Lancer le serveur de développement**
    ```bash
    npm run dev
    ```
    L'application sera accessible à l'adresse indiquée dans le terminal (généralement `http://localhost:5173`).

## 📦 Construction (Build)

Pour générer la version de production (dossier `dist`) :

```bash
npm run build
```

Pour prévisualiser la version de production localement :

```bash
npm run preview
```

## ℹ️ Crédits et Informations

*   **Auteur** : Bignole
*   **Sources des données** : 
    *   Wiki T4C NMS
    *   Site NMS Révolution
*   **Version** : 1.0.0

---
*Ce projet est un outil tiers créé par la communauté et n'est pas officiellement affilié à Dialsoft ou aux opérateurs du serveur.*
