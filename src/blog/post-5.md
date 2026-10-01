---
title: "Mon alternance data chez CNP Assurances"
author: Moïse Stéphane KINYOK
description: "Les 3 briques du projet de supervision et mes 3 axes de suivi : la masse, le contrat et la qualité des données, avec SQL Oracle et la suite Elastic."
image:
  url: "../assets/images/cnp.png"
  alt: "Visuel CNP Assurances avec son logo, des plantes suspendues et le message Assurer un monde plus ouvert."
pubDate: 2026-09-21
tags: ["data", "business analyst", "elastic stack", "assurance vie"]
---

Depuis septembre 2025, je suis en alternance chez **CNP Assurances à Angers**, pour deux ans (2025-2027). Le projet consiste à rendre visible, pour les équipes support et métier, le bon déroulement des actes de gestion sur les contrats d'assurance vie. Mon rôle, en Data / Business Analyst : partir d'un besoin d'équipe, trouver la donnée, construire l'indicateur, le diffuser.

## Comprendre le métier avant les données

Tout commence par l'analyse des parcours de gestion avec les équipes métier : produits, codes programmes, codes contractuels et actes de gestion. Chaque équipe a ses propres questions. Je les traduis en données à exploiter et en indicateurs de suivi, en gardant une distinction essentielle : un produit, un segment commercial et une étape technique de traitement sont trois axes différents.

## L'architecture

Trois briques partagent un même socle de données.

<figure class="arch-figure">
  <div class="arch-figure__scroll">
    <svg class="arch" viewBox="0 50 760 450" role="img" aria-labelledby="arch-title">
      <title id="arch-title">Les trois briques lisent le même socle de données : des environnements d'exécution jusqu'à la restitution.</title>
      <defs>
        <marker id="arch-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0L10 5L0 10z" class="arch__arrow-head" />
        </marker>
      </defs>
      <g class="arch__layer">
        <text x="24" y="84">Exécution</text>
        <text x="24" y="164">Collecte</text>
        <text x="24" y="246"><tspan x="24">Préparation,</tspan><tspan x="24" dy="15">circulation, stockage</tspan></text>
        <text x="24" y="364">Supervision</text>
        <text x="24" y="464">Restitution</text>
      </g>
      <g class="arch__links">
        <path d="M300 100V140" marker-end="url(#arch-arrow)" />
        <path d="M560 100V140" marker-end="url(#arch-arrow)" />
        <path d="M490 100L390 140" marker-end="url(#arch-arrow)" />
        <path d="M250 180V224" marker-end="url(#arch-arrow)" />
        <path d="M600 180V224" marker-end="url(#arch-arrow)" />
        <path d="M290 250H330" marker-end="url(#arch-arrow)" />
        <path d="M470 250H530" marker-end="url(#arch-arrow)" />
        <path d="M370 276V305H240V334" marker-start="url(#arch-arrow)" marker-end="url(#arch-arrow)" />
        <path d="M560 276V305H436V334" marker-end="url(#arch-arrow)" />
        <path d="M650 276V334" marker-end="url(#arch-arrow)" />
        <path d="M270 386V434" marker-end="url(#arch-arrow)" />
        <path d="M365 386V434" marker-end="url(#arch-arrow)" />
        <path d="M470 386V434" marker-end="url(#arch-arrow)" />
        <path d="M650 386V434" marker-end="url(#arch-arrow)" />
      </g>
      <g class="arch__box"><rect x="200" y="60" width="200" height="40" rx="8" /><text x="300" y="84">Environnement Unix</text></g>
      <g class="arch__box"><rect x="460" y="60" width="200" height="40" rx="8" /><text x="560" y="84">Environnement mainframe</text></g>
      <g class="arch__box"><rect x="200" y="140" width="200" height="40" rx="8" /><text x="300" y="164">Ordonnanceur et API</text></g>
      <g class="arch__box"><rect x="460" y="140" width="200" height="40" rx="8" /><text x="560" y="164">Journaux applicatifs</text></g>
      <g class="arch__box"><rect x="150" y="224" width="140" height="52" rx="8" /><text x="220" y="246" class="arch__strong">Logstash</text><text x="220" y="264" class="arch__role">préparer</text></g>
      <g class="arch__box"><rect x="330" y="224" width="140" height="52" rx="8" /><text x="400" y="246" class="arch__strong">Kafka</text><text x="400" y="264" class="arch__role">faire circuler</text></g>
      <g class="arch__box"><rect x="530" y="224" width="160" height="52" rx="8" /><text x="610" y="246" class="arch__strong">Elasticsearch</text><text x="610" y="264" class="arch__role">stocker, rechercher</text></g>
      <g class="arch__box arch__box--main"><rect x="150" y="334" width="180" height="52" rx="8" /><text x="240" y="356" class="arch__strong">Moteur de contrôles</text><text x="240" y="372" class="arch__strong">événementiels</text></g>
      <g class="arch__box arch__box--main"><rect x="346" y="334" width="180" height="52" rx="8" /><text x="436" y="356" class="arch__strong">Plateforme de</text><text x="436" y="372" class="arch__strong">supervision centrale</text></g>
      <g class="arch__box arch__box--main"><rect x="542" y="334" width="180" height="52" rx="8" /><text x="632" y="356" class="arch__strong">Pilote de</text><text x="632" y="372" class="arch__strong">supervision positive</text></g>
      <g class="arch__box"><rect x="220" y="434" width="160" height="52" rx="8" /><text x="300" y="464">Écran de suivi</text></g>
      <g class="arch__box"><rect x="400" y="434" width="160" height="52" rx="8" /><text x="480" y="464">Alertes aux équipes</text></g>
      <g class="arch__box"><rect x="568" y="434" width="168" height="52" rx="8" /><text x="652" y="456">Tableau de bord</text><text x="652" y="472">Kibana</text></g>
    </svg>
  </div>
  <figcaption>Chaîne globale : 5 couches, 3 briques. Les trois briques lisent le même socle de données. <span class="arch-figure__hint">Faites glisser le schéma pour le voir en entier.</span></figcaption>
</figure>

| Brique | Ce qu'elle fait |
| --- | --- |
| Plateforme de supervision centrale | Liste les contrôles à suivre, affiche leur état, alerte en cas de non-conformité |
| Moteur de contrôles événementiels | Lit les événements Kafka et rend un verdict : conforme, non conforme, en attente, annulé |
| Pilote de supervision positive | Montre les actes réussis d'un périmètre pilote : volume, rythme, montants |

Sur ce socle, j'ai construit trois axes de suivi : la masse, le contrat, la qualité des données.

## Les process utilisés

| Process | Comment ça marche | Axe |
| --- | --- | --- |
| Script de collecte | Interroge l'API de l'ordonnanceur, filtre les statuts des traitements et les met en forme | Masse |
| Requête SQL Oracle | Extrait des bases relationnelles les données des contrats et des actes | Contrat, qualité |
| Pipeline Logstash | Lance la requête, normalise les champs et écrit le résultat dans un index | Contrat |
| Index Elasticsearch | Stocke les documents et permet de les rechercher rapidement | Tous |
| Data View | Indique à Kibana quels index lire et quels champs exploiter | Masse, contrat |
| Tableau de bord Kibana | Graphiques et filtres construits sur une Data View | Masse, contrat |
| Job de machine learning | Apprend le comportement habituel d'une série et signale les écarts : hausse, baisse, rupture | Masse |
| Transform | Regroupe les documents par clé (ici le contrat) et écrit le résultat dans un nouvel index | Qualité |
| Watcher | Exécute une requête planifiée et déclenche une action si une condition est vraie | Masse, contrat |
| Hyperviseur | Console centrale des alertes : rechercher, catégoriser, ouvrir un ticket problème | Contrat |

## Axe 1 : suivi de masse

**Le problème :** un traitement peut tourner sans erreur alors que le nombre de contrats traités chute ou que les montants dérapent. Personne ne peut surveiller ces courbes à l'œil en continu : l'anomalie doit se signaler d'elle-même.

<figure class="chain">
  <figcaption>Le machine learning signale seul les variations anormales</figcaption>
  <ol>
    <li><strong>Supervision technique</strong><span>Statuts des traitements déjà collectés par les contrôles</span><p>Les contrôles déjà en place collectent les statuts des traitements. Je réutilise ces données au lieu de créer une nouvelle collecte.</p></li>
    <li><strong>Elasticsearch</strong><span>Conserve l'historique des volumes et des montants</span><p>Les statuts sont stockés avec leur date. On obtient un historique : combien de contrats arrivés ou bloqués, et pour quels montants, période après période.</p></li>
    <li><strong>Data View</strong><span>Expose les champs utiles : contrats arrivés, bloqués, montants</span><p>Elle indique à Kibana quels index lire et quels champs utiliser (date, statut, montant). Sans elle, les données existent mais ne sont pas exploitables dans les graphiques.</p></li>
    <li><strong>Tableau de bord Kibana</strong><span>Suit les contrats à chaque étape de leur cycle de vie</span><p>Il compte les contrats par étape du cycle de vie et par période. On voit d'un coup d'œil où le flux grossit ou se vide.</p></li>
    <li><strong>Job de machine learning</strong><span>Détecte les hausses, baisses et ruptures anormales</span><p>Il apprend le rythme habituel de chaque série, par exemple un volume quotidien, et en déduit une zone normale. Quand une valeur en sort, il la marque comme anomalie : hausse, baisse ou rupture.</p></li>
    <li><strong>Watcher</strong><span>Envoie l'alerte dans un canal Teams</span><p>Il interroge régulièrement les résultats du job. Dès qu'une anomalie apparaît, il envoie un message dans un canal Teams.</p></li>
    <li class="chain__result"><strong>Résultat</strong><span>Toute variation anormale de volume ou de montant est signalée</span></li>
  </ol>
</figure>

**Le résultat :** une variation anormale de volume ou de montant arrive directement aux équipes, sans que personne ait à surveiller les courbes. Les équipes études consultent aussi le tableau de bord via un compte dédié.

**Mon rôle :** mise en place de la détection par machine learning, création des Data Views et des indicateurs, diffusion par Watcher vers Teams et compte de consultation pour les équipes études.

## Axe 2 : suivi par contrat

**Le problème :** une demande client sur un contrat (un acte de gestion) traverse plusieurs applications et plusieurs bases. Quand elle bloque, le support ne sait ni à quelle étape ni pourquoi, et doit chercher dans chaque système.

<figure class="chain">
  <figcaption>Chaque contrat bloqué remonte avec son étape et son erreur</figcaption>
  <ol>
    <li><strong>Bases Oracle</strong><span>Données des contrats à chaque étape de l'acte de gestion</span><p>Chaque application enregistre l'avancement de la demande dans sa propre base relationnelle. L'information existe, mais elle est éclatée.</p></li>
    <li><strong>Requêtes SQL</strong><span>Extraient l'état du contrat et les codes erreur, base par base</span><p>Pour chaque base, une requête récupère les contrats en cours, l'étape atteinte et l'éventuel code erreur. C'est là que la connaissance métier compte : savoir quelle table et quel champ disent qu'un acte est bloqué.</p></li>
    <li><strong>Pipeline Logstash</strong><span>Lance les requêtes et écrit le résultat dans un index</span><p>Il exécute ces requêtes, harmonise les champs pour qu'ils portent le même nom quelle que soit la base, puis écrit chaque ligne dans un index Elasticsearch. Toutes les sources parlent alors la même langue.</p></li>
    <li><strong>Elasticsearch et Kibana</strong><span>État du contrat à chaque étape du parcours</span><p>Les données réunies permettent de suivre un contrat d'une étape à l'autre et de compter les contrats bloqués par étape et par code erreur.</p></li>
    <li><strong>Watcher</strong><span>Remonte les contrats en anomalie et leurs codes erreur</span><p>Il recherche les contrats en anomalie selon les critères définis avec le support, et envoie chaque cas, avec son code erreur, vers l'hyperviseur.</p></li>
    <li><strong>Hyperviseur</strong><span>Le support recherche, catégorise et ouvre un ticket problème</span><p>Le support y retrouve les contrats concernés, catégorise l'anomalie et ouvre un ticket problème pour la faire corriger.</p></li>
    <li class="chain__result"><strong>Résultat</strong><span>Chaque contrat bloqué est identifié et part en résolution</span></li>
  </ol>
</figure>

**Le résultat :** chaque contrat bloqué est connu, avec son étape et son erreur, et part en résolution par un ticket problème.

**Mon rôle :** participation aux requêtes SQL et aux pipelines Logstash, indicateurs par étape du cycle de vie, participation au Watcher selon le besoin du support, vues métier dans l'hyperviseur et formation des utilisateurs.

## Axe 3 : qualité des données

**Le problème :** certaines erreurs viennent d'une donnée manquante, pas d'un traitement en panne. Sur un acte de gestion précis, l'absence de coordonnées bancaires bloque l'opération. La supervision technique ne le voit pas, car rien n'a planté.

<figure class="chain">
  <figcaption>Un Transform isole les contrats à corriger</figcaption>
  <ol>
    <li><strong>Besoin métier</strong><span>Des coordonnées bancaires absentes bloquent un acte de gestion précis</span><p>Les équipes identifient l'erreur et le type d'acte concerné. On part de leur question, pas de l'outil.</p></li>
    <li><strong>Requête</strong><span>Isole les actes de ce type et le champ des coordonnées bancaires</span><p>Elle filtre les données sur ce type d'acte et repère celles où le champ des coordonnées bancaires est vide.</p></li>
    <li><strong>Transform</strong><span>Regroupe par contrat et écrit un index des contrats concernés</span><p>Il regroupe ces résultats par contrat et écrit, dans un nouvel index, une ligne par contrat concerné. On passe d'une masse d'événements bruts à une liste nette de contrats à corriger.</p></li>
    <li class="chain__result"><strong>Résultat</strong><span>On va directement à la résolution, contrat par contrat</span></li>
  </ol>
</figure>

**Le résultat :** les équipes disposent de la liste exacte des contrats à corriger et vont directement à la résolution, sans enquête préalable.

**Mon rôle :** participation active à la conception de la requête, puis du Transform.

## Livrer proprement avec les équipes techniques

Les objets ont été développés en environnement de développement, puis migrés et testés en recette. J'ai versionné l'ensemble des objets et artefacts dans **GitLab** et préparé les livrables avec l'équipe DevOps pour leur déploiement avec **Ansible**, selon les normes internes.

Cette alternance confirme mon orientation : ce qui me motive, c'est le lien entre le métier de l'assurance, les données et leur usage par les équipes. Je recherche un premier emploi de **Data / Business Analyst** à partir de septembre 2027.
