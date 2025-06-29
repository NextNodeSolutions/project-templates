# Template Astro Nextnode

Un template moderne et performant pour vos projets Astro, créé avec ❤️ par **Nextnode**.

## ✨ Fonctionnalités

- **⚡ Performance optimale** - Construit avec Astro pour des performances exceptionnelles
- **🎨 Design moderne** - Interface élégante avec Tailwind CSS 4
- **🔧 Outils de développement** - ESLint, Prettier, TypeScript, Vitest configurés
- **📱 Responsive** - Design adaptatif pour tous les appareils
- **🚀 Déploiement facile** - Compatible avec Vercel, Netlify, etc.
- **🔒 Sécurisé** - Meilleures pratiques de sécurité intégrées

## 🚀 Démarrage rapide

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Construire pour la production
npm run build

# Prévisualiser la build
npm run preview
```

## 🎨 Système de design

Ce template utilise Tailwind CSS 4 avec une configuration basée sur CSS. Les couleurs et utilitaires personnalisés sont définis dans `src/styles/global.css`.

### Couleurs personnalisées

- **nextnode-*** - Couleurs principales bleues
- **accent-*** - Couleurs d'accent roses/magentas

### Classes utilitaires

- `.btn-primary` - Bouton principal avec gradient
- `.btn-secondary` - Bouton secondaire
- `.gradient-text` - Texte avec gradient
- `.card` - Carte avec ombre et bordures
- `.container-padding` - Padding responsive pour les conteneurs
- `.section-padding` - Padding vertical pour les sections

## 📁 Structure des fichiers

```
src/
├── components/          # Composants réutilisables
│   ├── Header.astro     # Navigation principale
│   ├── Hero.astro       # Section héro
│   ├── Features.astro   # Section fonctionnalités
│   └── Footer.astro     # Pied de page
├── layouts/             # Layouts de page
│   └── BaseLayout.astro # Layout de base
├── pages/               # Pages du site
│   └── index.astro      # Page d'accueil
└── styles/              # Styles globaux
    └── global.css       # Configuration Tailwind et styles
```

## 🛠️ Personnalisation

### Couleurs

Modifiez les couleurs dans `src/styles/global.css` :

```css
@theme {
  --color-nextnode-500: #votre-couleur;
  --color-accent-500: #votre-couleur;
}
```

### Composants

Tous les composants sont modulaires et acceptent des props pour une personnalisation facile :

```astro
<Hero 
  title="Votre titre"
  subtitle="Votre sous-titre"
  description="Votre description"
  primaryCta={{ text: "Action", href: "/link" }}
/>
```

### Contenu

Modifiez le contenu directement dans les composants ou passez des props depuis les pages.

## 📚 Scripts disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run preview` - Prévisualisation locale
- `npm run lint` - Vérification ESLint
- `npm run format` - Formatage avec Biome
- `npm run test` - Tests avec Vitest
- `npm run type-check` - Vérification TypeScript

## 🤝 Contribution

Ce template est maintenu par **Nextnode**. Pour contribuer :

1. Fork le repository
2. Créer une branche feature
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

Ce template est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

Créé avec ❤️ par [Nextnode](https://github.com/nextnode) 