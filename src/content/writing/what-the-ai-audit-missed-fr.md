---
title: "J'ai fait auditer ma plateforme par une IA. Voici ce qu'elle a raté."
description: "Elle a trouvé la panne que j'avais le plus besoin de trouver. Elle a aussi bien noté mes secrets pendant qu'une clé d'administration dormait en clair dans mon dépôt. L'écart entre ces deux faits est la partie utile."
pubDate: 2026-09-18
tags: ["ia", "audit", "sécurité", "exploitation"]
draft: true
lang: fr
urlSlug: what-the-ai-audit-missed
---

J'exploite ma plateforme seul, ce qui veut dire que personne ne me contredit.

C'est le vrai danger du travail solitaire. Pas la charge. L'absence de quelqu'un
qui regarde ta conception et te dit ce que tu n'avais pas envie d'entendre. Je
me suis donc fabriqué un substitut : un audit adverse mené avec une IA, à qui
j'ai donné ma configuration en lui demandant d'attaquer l'endroit plutôt que de
l'admirer.

Ça valait le coup. C'était aussi moins fiable qu'il n'y paraissait, et de façon
assez régulière pour qu'on puisse la décrire.

## Ce qu'elle a trouvé

Rendons-lui ce qui lui revient, parce que la meilleure trouvaille était bien
réelle.

L'archivage qui protégeait ma base principale s'était arrêté en silence, tous
les voyants au vert. Elle l'a vu. J'en ai parlé
ailleurs. Ce qui compte ici, c'est que je ne serais pas allé regarder de
moi-même. Rien ne me le demandait.

Autre trouvaille, plus discrète et sans doute plus grave.
Ma supervision elle-même était sous-dimensionnée et redémarrait sous pression
mémoire, vingt-trois fois. Le système chargé de me prévenir quand ça casse
faisait partie des choses cassées. C'est le genre de trouvaille qui justifie
tout l'exercice.

## Ce qu'elle a raté

C'est la partie que je n'attendais pas, et elle dessine un motif.

Ma gestion des secrets a reçu une bonne note. Deux douzaines de fichiers
chiffrés vérifiés, procédure confirmée, dossier suivant. Quelque temps plus tard, j'ai trouvé une clé d'administration en clair
dans le dépôt. Elle s'y trouvait déjà pendant l'audit. La revue avait examiné le
bon dossier et validé la bonne procédure, sans jamais se demander si une chose
pouvait se trouver là où elle n'avait rien à faire.

Elle n'a pas davantage vu une faille dans mon propre outillage de déploiement.
Pas dans une dépendance, pas dans un composant connu, mais dans un script que
j'avais écrit pour relier mes propres morceaux. Il n'existe aucun modèle de
référence pour mon code de colle, donc il n'y avait rien à quoi le comparer.

Et elle était aveugle à tout ce qui n'apparaît qu'une fois le système en marche.
Un composant privé de temps processeur sous charge réelle. Un pool de connexions
où deux connexions retenues en permanence n'en laissaient aucune aux autres. Une
commande d'amorçage à qui il manquait un paramètre, donc qui ne faisait
strictement rien et ne signalait aucune erreur, soit exactement le type de panne
silencieuse que l'audit venait de m'apprendre à craindre.

Il y a eu du bruit, aussi. Un seuil d'alerte qu'elle a signalé était en
réalité correct tel quel, et lui courir après m'a coûté un après-midi.

## Le motif

L'IA a été forte partout où le problème avait une forme connue. Une politique de
sécurité, une configuration de sauvegarde, un dimensionnement. Ces choses ont une
forme canonique, et comparer ce que j'ai à cette forme est précisément le travail
qu'elle fait bien et vite.

Ses angles morts sont au nombre de trois, et ils ne doivent rien au hasard. Mon
code sur mesure, parce qu'il n'y a rien à quoi le comparer. Le comportement à
l'exécution, parce qu'elle lisait une description de mon système au lieu de
regarder mon système. Et la panne silencieuse, parce qu'une chose qui n'émet
rien n'offre rien à remarquer.

Ces trois-là sont justement ceux où celui qui exploite garde l'avantage. Pas
parce qu'il serait plus malin, mais parce qu'il voit la plateforme se comporter,
jour après jour, et qu'il a écrit les petits scripts bizarres que personne
d'autre ne reconnaîtrait.

## Ce que j'en fais maintenant

Je continue à lancer la passe adverse, et je la conseillerais à quiconque
travaille seul. Elle produit plus de bonnes questions en une heure que je n'en
formulerais en une semaine à rester poli avec moi-même.

Mais j'ai cessé de prendre sa sortie pour un verdict. Elle relit la description
de ma plateforme, pas la plateforme. Chaque trouvaille est confirmée dans le
système en fonctionnement avant que j'y croie, et surtout, un rapport propre ne
me dit plus rien du tout. L'audit qui a bien noté mes secrets se trompait, et il
se trompait avec assurance.
