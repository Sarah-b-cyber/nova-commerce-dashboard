# Bilan du TP — Nova Commerce

1. La maquette a d'abord été analysée pour identifier les composants communs et les différences entre desktop, tablette et mobile.
2. L'interface a été structurée en HTML5, puis mise en forme avec CSS3 et des variables centralisées dans `:root`.
3. Le responsive repose sur trois formats : desktop à partir de 1024 px, tablette de 768 à 1023 px et mobile jusqu'à 767 px.
4. Le JavaScript natif ajoute le graphique, le menu mobile, la recherche, le filtrage des commandes, les notifications et le choix de période.
5. L'audit a montré qu'il fallait vérifier les sélecteurs JavaScript par rapport aux classes et identifiants réels du HTML, ainsi que tester les trois formats d'écran.
6. Les corrections ciblées sont préférables à la régénération complète d'un fichier : elles limitent les régressions et conservent le travail déjà réalisé.
7. Le fichier `CLAUDE.md` rassemble les consignes de contexte et de maintenance ; `design-tokens.md` documente les couleurs, la typographie, les espacements et les règles responsive.
8. Le projet utilise des données de démonstration : elles servent à illustrer le tableau de bord et ne représentent pas des données commerciales réelles.
