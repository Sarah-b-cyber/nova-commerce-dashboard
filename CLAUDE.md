# CLAUDE.md — Nova Commerce

## Présentation du projet
Nova Commerce est une interface de tableau de bord e-commerce réalisée en HTML, CSS et JavaScript natifs. Elle présente des indicateurs d'activité, un graphique de chiffre d'affaires et un tableau des commandes récentes.

## Technologies
- HTML5 pour la structure et l'accessibilité.
- CSS3 pour la mise en page, les composants et le responsive design.
- JavaScript natif (vanilla JS) pour les interactions.
- Police : Inter.
- Aucun framework JavaScript n'est nécessaire.

## Organisation des fichiers
Conserver les fichiers principaux dans le même dossier :
- `index.html` : structure de la page.
- `style.css` : variables visuelles, composants, layout et règles responsive.
- `script.js` : graphique et interactions de l'interface.

Le fichier HTML doit charger la feuille de style et le script. Le script peut être chargé avec `defer`.

## Règles à respecter lors des modifications
1. Lire les fichiers concernés avant toute modification.
2. Préserver la structure HTML, les classes CSS et les identifiants déjà utilisés par JavaScript.
3. Réutiliser en priorité les variables CSS définies dans `:root` ; éviter de multiplier les couleurs, espacements ou rayons codés en dur.
4. Garder une interface cohérente avec la maquette : fond clair, cartes blanches, bleu principal et bleu nuit.
5. Ne pas ajouter de framework ou de dépendance sans nécessité et sans validation.
6. Ne pas remplacer tout un fichier pour corriger un détail : effectuer des changements ciblés.
7. Préserver les comportements existants lorsque l'on ajoute une fonctionnalité.
8. Garder les contrôles utilisables au clavier et conserver les libellés accessibles.

## Responsive design
Les trois formats à maintenir sont :
- Desktop : à partir de 1024 px, sidebar complète et quatre cartes statistiques sur une ligne.
- Tablette : de 768 à 1023 px, sidebar réduite et cartes statistiques sur deux colonnes.
- Mobile : jusqu'à 767 px, sidebar en tiroir, cartes sur une colonne et tableau simplifié.

Vérifier les changements aux trois largeurs. Éviter les débordements horizontaux et les éléments coupés.

## JavaScript
Le code doit rester en JavaScript natif. Les interactions principales sont :
- affichage du graphique dans `#revenue-chart` ;
- ouverture et fermeture du menu latéral mobile ;
- ouverture de la recherche et raccourci `Ctrl + K` / `Cmd + K` ;
- filtrage des lignes du tableau ;
- ouverture/fermeture du menu de notifications ;
- sélection d'une période ;
- fermeture des menus avec `Échap`.

Avant de modifier un sélecteur JavaScript, vérifier qu'il correspond bien à une classe ou un identifiant présent dans `index.html`.

## Vérifications avant livraison
- Ouvrir `index.html` dans un navigateur.
- Vérifier la console du navigateur et corriger les erreurs JavaScript.
- Tester les menus, la recherche, le filtre de période et le tableau.
- Tester desktop, tablette et mobile.
- Vérifier qu'aucun élément important n'est masqué ou tronqué.
- Ne pas présenter les données de démonstration comme des données réelles.
