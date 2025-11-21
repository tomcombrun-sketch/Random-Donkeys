
# Site statique — Photos aléatoires d'ânes

Ce paquet contient un **site statique** (HTML/CSS/JS) prêt à être déployé. Le site :
- affiche **une image aléatoire d'âne** à chaque chargement (ou en cliquant sur "Nouvelle image"),
- contient une **galerie** de 100 images (miniatures) pour parcourir manuellement.

## Comment ça marche
Les images proviennent de *Unsplash Source* (source.unsplash.com) via des URLs du type :
`https://source.unsplash.com/1200x800/?donkey&sig=1` à `...&sig=100`.
Ceci permet d'obtenir des images sans clé API. Les images sont fournies par des contributeurs Unsplash — vérifie la licence si tu veux un usage commercial.

## Déploiement (rapide)
Tu peux déployer en 2 minutes sans configuration :
- **Netlify** : glisse le dossier décompressé dans Netlify Drop (https://app.netlify.com/drop) — pas besoin de compte pour un test rapide.
- **Vercel** : `vercel --prod` (si tu as le CLI et un compte).
- **GitHub Pages** : pousse le dossier sur un repo et active GitHub Pages sur la branche `main` (ou utilise `gh-pages`).

## Personnalisation
- Modifier le nombre d'images : edite `script.js` et change `COUNT`.
- Taille des images : édite `WIDTH`/`HEIGHT` dans `script.js`.
- Remplacer Unsplash par une collection locale : mets des fichiers dans `images/` et change la logique JS.

## Limitations & notes importantes
- Les images sont **récupérées à la volée** depuis Unsplash lors du chargement. Si tu veux un site complètement autonome et offline, télécharge localement les 100 images et place-les dans un dossier `images/` (je peux fournir un script pour ça si tu veux).
- Je **ne peux pas** héberger le site pour toi depuis ma part — je fournis le package prêt à déployer.
