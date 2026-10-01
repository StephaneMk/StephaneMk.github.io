# DESIGN.md — Portfolio Moïse Stéphane KINYOK

Source de vérité visuelle du site. Les tokens vivent dans `src/styles/global.css` (`:root` et `html.dark`).

## Direction

Éditorial et sobre : grands titres serif, beaucoup d’espace, un seul accent. Le ton est professionnel (vouvoiement du visiteur, « je » pour l’auteur), sans points d’exclamation.

## Typographie

- Titres : **Fraunces** (`--serif`), poids 400, italique pour l’emphase (`<em>`), interlettrage négatif.
- Texte et interface : **Geist** (`--sans`), 400 à 800.
- Sur-titres : `.eyebrow` (accent) pour qualifier un contenu, `.section-kicker` (gris) pour numéroter une section (`01 / Profil`).

## Couleurs

| Rôle | Token | Valeur |
|---|---|---|
| Fond de page | `--cream` | `#f5f0e7` (sombre : `#07172d`) |
| Cartes | `--surface` | `#fffdf9` (sombre : `#0b2142`) |
| Texte | `--ink` / `--muted` | `#0a1830` / `#5c6574` |
| Zones sombres | `--navy` / `--navy-deep` | `#071c39` / `#041328` |
| Accent unique | `--pink` | `#c81d63` sur clair, `#ff6aa8` sur sombre |
| Pastilles | `--chip` | encre à 6 % |

Règles :
- **Un seul accent** : le rose. Pas de bleu, cyan ou autre couleur décorative.
- Les fonds remplis d’accent (boutons) utilisent `--accent-deep` avec du texte blanc (contraste AA).
- Dans une zone toujours sombre (hero, en-tête de page, `.panel--accent`, `.on-dark`), `--pink` bascule automatiquement sur la version claire.

## Rythme des fonds

Hero ou en-tête de page **sombre** → contenu **crème** (sections séparées par un filet `--line`) → pied de page **sombre**. Pas de section colorée isolée au milieu d’une page. Une seule carte marine (`--accent`) par groupe de cartes au maximum.

## Composants

- Rayons : `--radius-lg` (1,5 rem) pour les cartes, `--radius-md` (1 rem) pour les pastilles multilignes, `999px` pour les boutons et tags.
- Tags et compétences : un seul style (`--chip`, texte `--ink`), survol en accent si c’est un lien.
- Cartes cliquables (articles) : soulèvement + rayon asymétrique au survol. Les cartes non cliquables (projets, panneaux, expertises) n’ont **pas** d’effet de survol.
- Cartes projets : même visuel marine pour toutes ; la différence vient du sigle (`mark`), pas de la couleur. Dépôts privés : pas de lien vers GitHub.
- Schémas dans les articles : SVG en ligne avec les classes `.arch` (architecture) ou `.chain` (étapes numérotées + résultat), jamais de couleurs codées en dur.
- Images : toujours via `astro:assets` (`<Image>`), fichiers dans `src/assets/images/`.

## Contact

Un seul bloc de contact : le pied de page (bouton « Me contacter », CV, réseaux). Ne pas ajouter de bandeau de contact dans les pages.
