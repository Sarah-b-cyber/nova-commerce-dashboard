# Design tokens — Nova Commerce

Les valeurs ci-dessous reprennent les variables définies dans `style.css`. Pour faire évoluer l'identité visuelle, modifier les variables centralisées dans `:root` avant d'ajouter de nouvelles valeurs isolées.

## Couleurs

| Token CSS | Valeur | Usage |
|---|---:|---|
| `--color-primary` | `#2563eb` | Actions, éléments actifs et accents |
| `--color-primary-hover` | `#1d4ed8` | Survol des actions principales |
| `--color-primary-soft` | `#e8effd` | Fonds bleus légers et sélections |
| `--color-navy` | `#0f2347` | Sidebar et titres principaux |
| `--color-navy-soft` | `#1a2f58` | Variante du bleu nuit |
| `--color-bg` | `#f3f5fa` | Fond général de la page |
| `--color-surface` | `#ffffff` | Cartes et surfaces |
| `--color-surface-muted` | `#f8fafd` | Fonds secondaires, notamment en-tête de tableau |
| `--color-text` | `#0f2347` | Texte principal |
| `--color-text-muted` | `#64748b` | Texte secondaire |
| `--color-text-light` | `#94a3b8` | Texte discret, axes et placeholders |
| `--color-border` | `#e4e9f2` | Bordures standard |
| `--color-border-strong` | `#d5dbe8` | Bordures plus visibles |
| `--color-success` | `#16a34a` | Statut positif |
| `--color-success-bg` | `#e6f7ed` | Fond du statut positif |
| `--color-warning` | `#d97706` | Statut d'avertissement |
| `--color-warning-bg` | `#fff3dc` | Fond du statut d'avertissement |
| `--color-danger` | `#dc2626` | Statut négatif |
| `--color-danger-bg` | `#fde8e8` | Fond du statut négatif |

### Couleurs de fond des avatars

| Token | Valeur |
|---|---:|
| `--avatar-blue-bg` / `--avatar-blue-text` | `#dbe6fd` / `#2563eb` |
| `--avatar-green-bg` / `--avatar-green-text` | `#d9f3e6` / `#15803d` |
| `--avatar-pink-bg` / `--avatar-pink-text` | `#fbe3ee` / `#be185d` |
| `--avatar-orange-bg` / `--avatar-orange-text` | `#ffe9d1` / `#c2410c` |
| `--avatar-purple-bg` / `--avatar-purple-text` | `#e6e1fb` / `#6d28d9` |
| `--avatar-teal-bg` / `--avatar-teal-text` | `#d6f1ee` / `#0f766e` |
| `--avatar-sand-bg` / `--avatar-sand-text` | `#f3e6d3` / `#92400e` |

## Typographie

- Famille : `Inter`, avec les polices système en secours.
- `--fs-xs` : 11 px
- `--fs-sm` : 12 px
- `--fs-base` : 13 px
- `--fs-md` : 14 px
- `--fs-lg` : 16 px
- `--fs-xl` : 18 px
- `--fs-2xl` : 26 px
- `--fs-stat` : 26 px pour les valeurs des cartes statistiques

## Espacements

| Token | Valeur |
|---|---:|
| `--space-1` | 4 px |
| `--space-2` | 8 px |
| `--space-3` | 12 px |
| `--space-4` | 16 px |
| `--space-5` | 20 px |
| `--space-6` | 24 px |
| `--space-8` | 32 px |
| `--space-10` | 40 px |

## Rayons et ombres

| Token | Valeur |
|---|---|
| `--radius-sm` | 6 px |
| `--radius-md` | 8 px |
| `--radius-lg` | 12 px |
| `--radius-full` | 999 px |
| `--shadow-card` | `0 1px 2px rgba(15, 35, 71, 0.04), 0 1px 3px rgba(15, 35, 71, 0.06)` |
| `--shadow-dropdown` | `0 8px 24px rgba(15, 35, 71, 0.12), 0 2px 6px rgba(15, 35, 71, 0.06)` |

## Dimensions et transitions

- `--sidebar-width` : 240 px sur desktop ; 72 px sur tablette.
- `--topbar-height` : 64 px.
- `--content-gap` : 20 px.
- `--transition` : `0.15s ease`.

## Responsive

| Format | Largeur | Comportement prévu |
|---|---:|---|
| Desktop | ≥ 1024 px | Sidebar complète ; 4 cartes statistiques sur une ligne |
| Tablette | 768 à 1023 px | Sidebar réduite aux icônes ; cartes sur 2 colonnes |
| Mobile | ≤ 767 px | Sidebar en tiroir ; cartes sur 1 colonne ; tableau simplifié |

## Règle d'utilisation
Réutiliser ces tokens dans les composants. Si une nouvelle valeur devient nécessaire, vérifier d'abord qu'un token existant ne répond pas déjà au besoin, puis ajouter la nouvelle variable dans `:root` avec un nom explicite.
