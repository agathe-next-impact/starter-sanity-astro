# CLAUDE.md

## Stack
- Astro 5, TypeScript strict
- Sanity v3, Studio sur /studio
- Tailwind CSS v4
- Deploiement : Vercel / Cloudflare Pages

## Conventions
- Blocs dans /src/components/blocks/
- UI atomique dans /src/components/ui/
- Toutes les GROQ queries dans /src/lib/queries.ts
- Types TypeScript dans /src/lib/types.ts
- Schemas Sanity dans /sanity/schemas/
- Pas de client-side fetching (tout en frontmatter Astro)
- Images via <SanityImage /> uniquement
- CSS : Tailwind uniquement, jamais de style inline

## Ajouter un nouveau bloc
1. Creer le schema objet dans /sanity/schemas/objects/
2. L'ajouter dans /sanity/schemas/index.ts
3. Creer le composant .astro dans /src/components/blocks/
4. Ajouter la query GROQ dans /src/lib/queries.ts
5. Ajouter le type dans /src/lib/types.ts

## Ajouter une nouvelle page
1. Creer le fichier dans /src/pages/
2. Fetcher les donnees dans le frontmatter via sanityClient
3. Utiliser BaseLayout avec les props SEO
4. Ajouter le lien dans Header.astro

## Commandes
- npm run dev       - dev local (Astro + Studio sur /studio)
- npm run build     - build statique
- npm run preview   - preview build
