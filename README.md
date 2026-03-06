# Starter Vitrine - Astro 5 + Sanity v3

Un starter template de site vitrine 5 pages, administrable via Sanity Studio, optimise pour etre clone et reconfigure rapidement.

## Stack technique

- **Astro 5** - Framework web statique ultra-rapide
- **Sanity CMS v3** - CMS headless avec Studio integre
- **Tailwind CSS v4** - Utilitaires CSS
- **TypeScript** - Typage strict
- **Vercel / Cloudflare Pages** - Deploiement statique

## Pages incluses

1. **Accueil** (`/`) - Hero, Features, Testimonials, CTA
2. **A propos** (`/about`) - Hero, Rich Text, Team
3. **Services** (`/services`) - Hero, Grille services, FAQ, CTA
4. **Blog** (`/blog`) - Liste articles + page detail
5. **Contact** (`/contact`) - Formulaire + coordonnees

## Installation

### 1. Cloner le projet

```bash
git clone <repo-url> mon-site
cd mon-site
npm install
```

### 2. Creer un projet Sanity

```bash
npx sanity init
```

Notez le **Project ID** genere.

### 3. Configurer les variables d'environnement

```bash
cp .env.example .env
```

Editez `.env` avec vos valeurs :

```env
PUBLIC_SANITY_PROJECT_ID=votre_project_id
PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=votre_token_lecture
CONTACT_FORM_ACTION=https://formspree.io/f/VOTRE_ID
```

### 4. Configurer le token Sanity

1. Allez sur [manage.sanity.io](https://manage.sanity.io)
2. Selectionnez votre projet
3. Settings > API > Tokens
4. Creez un token avec les droits **Viewer**
5. Copiez-le dans `SANITY_API_TOKEN`

### 5. Deployer les schemas

Les schemas Sanity sont automatiquement charges via le Studio integre.

### 6. Lancer le developpement

```bash
npm run dev
```

Le site est accessible sur `http://localhost:4321` et le Studio Sanity sur `http://localhost:4321/studio`.

### 7. Ajouter du contenu

1. Ouvrez `/studio`
2. Commencez par remplir **Site Settings** (nom, email, etc.)
3. Creez vos pages, articles, services et membres d'equipe

## Deploiement

### Vercel

```bash
npm run build
```

Deployez sur Vercel en connectant votre repository. Variables d'environnement a configurer dans le dashboard Vercel.

### Cloudflare Pages

Meme processus, avec `npm run build` comme commande de build et `dist` comme repertoire de sortie.

## Personnalisation

### Couleur primaire

Modifiez la variable `--hue-primary` dans `tailwind.config.mjs` pour changer la teinte globale.

### Police

Changez la police Google Fonts dans `BaseLayout.astro` et la famille dans `tailwind.config.mjs`.

### Navigation

Editez les liens dans `src/components/Header.astro` et `src/components/Footer.astro`.

## Structure du projet

```
src/
  components/
    blocks/     # Blocs de contenu (Hero, Features, etc.)
    ui/         # Composants atomiques (Button, Card, etc.)
  layouts/      # Layout principal
  lib/          # Client Sanity, queries GROQ, types TS
  pages/        # Pages Astro
sanity/
  schemas/      # Schemas Sanity (documents + objets)
```

## Commandes

| Commande          | Description                    |
| ----------------- | ------------------------------ |
| `npm run dev`     | Serveur de dev local           |
| `npm run build`   | Build statique de production   |
| `npm run preview` | Preview du build               |

## Licence

MIT
