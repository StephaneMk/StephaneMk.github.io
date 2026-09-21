---
title: Mon projet d'architecture des systèmes d'information
author: Moïse Stéphane KINYOK
description: "De la modélisation Merise à une application PHP connectée à une base MySQL optimisée."
image:
    url: "/images/eseo-developpement-4k.jpeg"
    alt: "Photographie d'un environnement de développement logiciel affichant du code sur plusieurs écrans."
logo:
    url: "/images/eseo.svg.png"
    alt: "Logo de l'ESEO."
pubDate: 2026-08-26
tags: ["systèmes d'information", "merise", "mysql", "php"]
---
Ce projet avait pour objectif de concevoir un système d'information complet, depuis l'analyse des besoins jusqu'à l'affichage des données dans une application web.

## Analyse et modélisation

J'ai analysé les besoins métier, puis modélisé les données aux niveaux conceptuel, logique et physique avec la méthode Merise (MCD → MLD → MPD). Cette étape a structuré la base avant son implémentation.

## Conception de la base MySQL

J'ai conçu une base MySQL avec clés primaires et étrangères, index ciblés, partitionnement et contraintes d'intégrité. Pour produire des indicateurs, j'ai écrit des requêtes avancées : `JOIN` multicritères, `GROUP BY` et fonctions de fenêtrage telles que `ROW_NUMBER()` et `SUM() OVER`.

## Développement de l'application web

J'ai développé un front-end web en PHP pour les modules de reporting. Des procédures stockées et des déclencheurs `BEFORE`/`AFTER` ont automatisé les traitements métier et permis d'historiser les données.

Enfin, j'ai sécurisé les accès grâce aux requêtes paramétrées, à la validation côté serveur et à la gestion des rôles. Ce projet m'a permis de relier modélisation, performance, développement et sécurité dans un même système d'information.
