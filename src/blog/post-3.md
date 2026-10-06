---
title: Mon projet d'architecture des systèmes d'information
author: Moïse Stéphane KINYOK
description: "De la modélisation Merise (12 entités) à un schéma MySQL de 15 tables et 10 indicateurs de reporting en PHP."
image:
    url: "../assets/images/eseo-developpement-4k.jpeg"
    alt: "Photographie d'un environnement de développement logiciel affichant du code sur plusieurs écrans."
logo:
    url: "../assets/images/eseo.svg.png"
    alt: "Logo de l'ESEO."
pubDate: 2026-08-26
tags: ["systèmes d'information", "merise", "mysql", "php"]
---
Ce projet avait pour objectif de concevoir un système d'information complet, depuis l'analyse des besoins jusqu'à l'affichage des données dans une application web.

## Analyse et modélisation

J'ai recueilli les besoins métier, puis modélisé les données sur les trois niveaux de la méthode Merise (MCD → MLD → MPD) : **12 entités** et une **vingtaine de règles de gestion** formalisées. Cette étape a structuré une base de données fiable, prête pour l'analyse.

## Conception de la base MySQL

J'ai conçu et optimisé un schéma MySQL de **15 tables** : clés primaires et étrangères, index ciblés et partitionnement, pour garantir l'intégrité des données et la rapidité des requêtes. J'ai ensuite écrit une **trentaine de requêtes avancées** (`JOIN` multicritères, `GROUP BY`, fonctions de fenêtrage `ROW_NUMBER()` et `SUM() OVER`) pour calculer **10 indicateurs clés** du reporting.

## Développement de l'application web

J'ai développé **4 modules de reporting web** en PHP. **6 procédures stockées** et **8 déclencheurs** `BEFORE`/`AFTER` automatisent les traitements métier et historisent les données pour suivre leur évolution dans le temps.

Enfin, j'ai sécurisé les accès sur **3 rôles utilisateurs**, avec des requêtes paramétrées contre les injections SQL et une validation côté serveur. Ce projet m'a permis de relier modélisation, performance, développement et sécurité dans un même système d'information.
