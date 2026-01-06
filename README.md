# T4C NMS Overview

Une application compagnon ultra-performante et moderne conçue spécifiquement pour les joueurs du serveur **T4C NMS Revolution** (The 4th Coming). Cet outil centralise, organise et sublime les données essentielles du jeu pour offrir une expérience de navigation fluide et des outils d'optimisation avancés.

## 🚀 Fonctionnalités Majeures

### 🔨 Métiers & Artisanat (Crafting)
L'outil de craft le plus avancé pour T4C NMS :
*   **Arbre de Dépendances Interactif** : Visualisez l'intégralité de la chaîne de fabrication pour les objets complexes.
*   **Calculateur de Ressources Brutes** : Identifiez instantanément le total cumulé des composants de base nécessaires pour fabriquer un item, en tenant compte des sous-crafts.
*   **Localisation d'Apprentissage** : Nom des PNJ, coordonnées exactes et descriptions précises des lieux pour chaque recette.
*   **Système de Favoris** : Enregistrez vos recettes prioritaires pour un accès rapide.

### 📦 Base de Données d'Objets
Un catalogue exhaustif de tous les items du serveur :
*   **Filtres Intelligents** : Filtrez par type (Anneau, Cape, Arme, etc.) et par niveau.
*   **Statistiques Détaillées** : Pré-requis complets (FOR, END, DEX, INT, SAG) et bonus détaillés (CA, Puissances, Résistances).
*   **Icônes Spécifiques** : Identification visuelle rapide grâce à un set d'icônes RPG dédié.

### 💀 Bestiaire Interactif
Explorez la faune d'Althéa, Raven's Dust, Stoneheim et au-delà :
*   **Tables de Butins (Drops)** : Liens directs entre les monstres et les objets qu'ils lâchent.
*   **Données de Combat** : Points d'expérience, or, faiblesses élémentaires et résistances.
*   **Géolocalisation** : Coordonnées précises pour chaque créature.

### 🛡️ Simulateur d'Équipement (Planner)
Un outil pour planifier votre progression :
*   **Filtrage par Statistiques** : Entrez vos statistiques actuelles pour voir instantanément quels objets vous pouvez équiper.
*   **Gestion des Emplacements** : Organisation par slots (Tête, Torse, Bijoux, etc.).

## 🛠️ Excellence Technique

*   **Performance Optimisée** : Utilisation de maps d'indexation pré-calculées pour des recherches instantanées sans latence.
*   **Recherche Linguistique** : Algorithme de recherche intelligent ignorant la casse, les accents et les articles (ex: "d'arnica" match avec "Arnica").
*   **UI Avancée** :
    *   **React Portals** : Infobulles garanties sans clipping, s'affichant toujours au-dessus des zones de défilement.
    *   **WebGL Background** : Immersion visuelle avec un fond étoilé 3D interactif (Three.js).
*   **Stack Moderne** : React 19, TypeScript, Vite, Tailwind CSS, Lucide-React, Framer Motion.

## 🚀 Installation

1.  **Clonage et Installation**
    ```bash
    git clone [repository-url]
    npm install
    ```

2.  **Développement**
    ```bash
    npm run dev
    ```

3.  **Build Production**
    ```bash
    npm run build
    ```

## ℹ️ Informations Légales & Crédits

*   **Auteur** : Bignole
*   **Sources des données** : NMSRévolution, Wiki communautaire.
*   **Propriété Intellectuelle** : T4C est une marque déposée de Dialsoft LLC. Les données du jeu appartiennent à leurs auteurs respectifs.

---
*Projet indépendant créé par la communauté pour la communauté. Non affilié à Dialsoft LLC.*