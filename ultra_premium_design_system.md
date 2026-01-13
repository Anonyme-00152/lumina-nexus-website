# Système de Design & Mouvement Ultra-Premium : Lumina Nexus

## 1. Philosophie de Mouvement (Motion Design)
L'objectif est de créer une sensation de fluidité organique, où chaque interaction semble naturelle et haut de gamme.

### Animations de Texte (Split Text & Reveal)
- **Hero Headline :** Utilisation d'un effet "Blur Reveal" combiné à un décalage (stagger) par mot. Les mots apparaissent avec un léger flou qui se dissipe, créant une entrée élégante.
- **Sous-titres :** Apparition en "Slide Up" avec une opacité progressive, utilisant un easing `[0.16, 1, 0.3, 1]` (style Apple).

### Interactions de Sections (Scroll-based)
- **Parallax de Profondeur :** Les éléments d'arrière-plan (gradients, formes géométriques) bougent à des vitesses différentes lors du scroll pour créer une sensation de 3D.
- **Reveal au Scroll :** Les sections ne se contentent pas d'apparaître ; elles s'étendent ou se dévoilent avec un effet de masque (clip-path) pour un look moderne.

### Micro-interactions (Hover & Click)
- **Boutons Magnétiques :** Les CTA principaux attirent légèrement le curseur de la souris (effet magnétique) et changent de couleur avec une transition fluide.
- **Cartes de Service :** Au survol, la carte s'élève légèrement, une bordure lumineuse (gradient border) s'active, et l'icône s'anime (ex: rotation légère ou changement de scale).

## 2. Structure & Layout Immersif
Le layout doit briser la monotonie des sections rectangulaires classiques.

- **Hero Section Immersive :** Utilisation d'un arrière-plan avec un gradient animé subtil (mesh gradient) qui réagit au mouvement de la souris.
- **Bento Grid pour les Solutions :** Une grille asymétrique et animée pour présenter les services, inspirée de Linear. Chaque bloc a sa propre animation d'entrée.
- **Section "Processus" Interactive :** Un scroll horizontal ou une timeline verticale animée où les étapes s'illuminent au fur et à mesure du défilement.

## 3. Identité Visuelle & Branding (Niveau Top 1%)
- **Palette de Couleurs :**
    - Fond : Blanc pur (`#FFFFFF`) avec des touches de gris ultra-léger (`#F9FAFB`).
    - Accent : Bleu Lumina (`#0066FF`) évoluant vers un Violet Électrique (`#7000FF`) pour les gradients.
    - Texte : Noir Profond (`#0F172A`) pour une lisibilité maximale.
- **Typographie :**
    - Titres : Une police Sans-Serif géométrique et audacieuse (ex: Inter ou Geist) avec un espacement serré (tight tracking).
    - Corps : Une police hautement lisible avec un interlignage généreux.

## 4. Plan d'Implémentation Technique
1.  **Installation de dépendances supplémentaires** (si nécessaire, ex: `framer-motion`, `lucide-react` déjà présents).
2.  **Création de composants réutilisables animés** (`AnimatedText`, `MagneticButton`, `RevealSection`).
3.  **Refonte complète de `Home.tsx`** avec le nouveau layout et les interactions.
4.  **Optimisation des performances** pour garantir 60 FPS même avec les animations.
