# PROMPTS.md - Modeles de prompts par secteur

Utilisez ces prompts avec Claude Code pour adapter rapidement le starter a differents secteurs d'activite.

---

## 1. Restaurant / Brasserie

```
Adapte ce starter vitrine pour un restaurant haut de gamme. Voici les modifications :

- Page d'accueil : Hero avec photo plein ecran du restaurant, section "Notre carte" (3 categories : entrees, plats, desserts), temoignages clients, CTA reservation
- Page A propos : histoire du restaurant et du chef, equipe en cuisine
- Page Services : remplace par "Notre carte" avec les categories de plats, prix affiches, mention allergenes
- Blog : devient "Actualites" avec evenements, soirees speciales, menus saisonniers
- Contact : ajouter un champ "Nombre de convives" et "Date souhaitee" au formulaire, afficher les horaires d'ouverture depuis siteSettings

Schema Sanity supplementaire :
- menuItem : nom, description, prix, categorie (entree/plat/dessert), allergenes, photo, disponible (boolean)
- Ajouter a siteSettings : openingHours (array of { day: string, hours: string })

Couleur primaire : teinte chaude (doree/bordeaux, hue ~30)
Police : Playfair Display pour les titres, Inter pour le corps
```

---

## 2. Cabinet medical / Praticien

```
Adapte ce starter vitrine pour un cabinet medical (medecin generaliste ou specialiste). Modifications :

- Page d'accueil : Hero rassurant et professionnel, 3 features (expertise, prise en charge, accessibilite), temoignages patients, CTA prise de rendez-vous
- Page A propos : parcours du praticien, diplomes et specialisations, equipe medicale
- Page Services : liste des consultations et actes proposes, tarifs conventionnes, informations sur le remboursement
- Blog : articles de prevention sante, conseils medicaux, actualites du cabinet
- Contact : formulaire avec champ "Motif de consultation", horaires de consultation, plan d'acces, lien Doctolib

Schema Sanity supplementaire :
- consultation : nom, description, duree, tarif, conventionné (boolean), order
- Ajouter a siteSettings : doctolib (url), openingHours, conventionSecteur (string)

Couleur primaire : bleu medical apaisant (hue ~210)
Ajouter une mention legale RGPD sous le formulaire de contact.
```

---

## 3. Agence digitale / Studio creatif

```
Adapte ce starter vitrine pour une agence digitale / studio creatif. Modifications :

- Page d'accueil : Hero audacieux avec animation subtile, showcases de 3 projets phares, temoignages clients, metriques (projets realises, clients satisfaits, annees d'experience), CTA devis
- Page A propos : manifeste de l'agence, valeurs, equipe avec roles creatifs
- Page Services : offres packagées (site vitrine, e-commerce, application, branding), avec tarifs "a partir de"
- Blog : etudes de cas, articles techniques, tendances design
- Contact : formulaire avec champs "Type de projet" (select), "Budget estime" (select), "Delai souhaite"

Schema Sanity supplementaire :
- project : titre, slug, client, description, coverImage, gallery (array images), technologies (tags), url, featured, order
- Creer une page /projets avec grille filtrable

Couleur primaire : violet creatif (hue ~280)
Police : Space Grotesk pour les titres
```

---

## 4. Artisan / Metier manuel

```
Adapte ce starter vitrine pour un artisan (plombier, electricien, menuisier, etc.). Modifications :

- Page d'accueil : Hero avec photo de l'artisan au travail, 3 features (expertise, rapidite, devis gratuit), temoignages clients, zone d'intervention (liste villes/departements), CTA appel ou devis
- Page A propos : parcours professionnel, certifications (RGE, Qualibat, etc.), annees d'experience
- Page Services : liste des prestations avec descriptions claires, indication tarifaire, mention assurance decennale
- Blog : conseils pratiques, tutoriels, actualites reglementaires du secteur
- Contact : formulaire avec champs "Type d'intervention" (select), "Urgence" (oui/non), "Adresse d'intervention", numero de telephone bien visible

Schema Sanity supplementaire :
- certification : nom, organisme, numero, logo, dateExpiration
- interventionZone : array of string (villes/codes postaux)
- Ajouter a siteSettings : siret, assuranceDecennale, zoneIntervention

Couleur primaire : orange/bleu metier (hue ~30 ou ~220)
Mettre en avant le numero de telephone dans le header (sticky, bien visible sur mobile).
```

---

## 5. Association / ONG

```
Adapte ce starter vitrine pour une association ou ONG. Modifications :

- Page d'accueil : Hero engageant avec mission de l'association, chiffres cles (beneficiaires aides, benevoles, projets), temoignages beneficiaires, CTA adhesion ou don
- Page A propos : histoire de l'association, mission et valeurs, bureau/conseil d'administration (au lieu d'equipe), statuts
- Page Services : remplace par "Nos actions" avec les differents programmes et projets en cours
- Blog : actualites de l'association, comptes rendus d'evenements, rapports d'activite
- Contact : formulaire avec champs "Objet" (adhesion/benevole/don/partenariat/autre), informations bancaires pour dons, lien HelloAsso

Schema Sanity supplementaire :
- action : titre, slug, description, objectif, progression (number 0-100), coverImage, active (boolean)
- event : titre, date, lieu, description, coverImage
- Ajouter a siteSettings : helloAssoUrl, siren, rnaNumber

Couleur primaire : vert engagement (hue ~150)
Ajouter un bandeau d'appel aux dons en haut de page (dismissable).
Mention obligatoire : numero RNA, siege social.
```

---

## Utilisation

1. Copiez le prompt correspondant a votre secteur
2. Collez-le dans Claude Code depuis la racine du projet
3. Claude adaptera les schemas, composants et pages automatiquement
4. Verifiez les modifications et ajustez selon les besoins specifiques du client
