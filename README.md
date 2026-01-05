# T4C Wiki App

Une application moderne (SPA) dédiée à l'univers de The 4th Coming, créée avec React, TypeScript et Tailwind CSS.

## Fonctionnalités

*   **Encyclopédie** : Données complètes sur Arakas, Drake Island et l'Académie.
*   **Guides** : Solution complète pour l'Accès Cerberus (22 Clés).
*   **Outils** :
    *   Simulateur de statistiques.
    *   Arbres de recettes pour l'artisanat.
    *   Cartes interactives avec zoom.

## Comment lancer le projet

1.  Installer les dépendances :
    ```bash
    npm install
    ```
2.  Lancer en développement :
    ```bash
    npm run dev
    ```

## Comment déployer en ligne (Gratuitement)

### Via Vercel (Recommandé)
1.  Créez un compte sur [Vercel.com](https://vercel.com).
2.  Installez Vercel CLI : `npm i -g vercel`
3.  Dans ce dossier, tapez simplement : `vercel`

### Via Netlify
1.  Glissez-déposez le dossier `dist` (créé après `npm run build`) sur [Netlify Drop](https://app.netlify.com/drop).

## Build Production

Pour créer la version optimisée :
```bash
npm run build
npm run preview
```