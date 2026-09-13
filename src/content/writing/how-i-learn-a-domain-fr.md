---
title: "Comment j'apprends un domaine"
description: "Je ne suis pas celui qui connaît déjà ton domaine. Je suis celui qui l'apprend assez vite pour construire ce dont il a besoin. Voici comment."
pubDate: 2026-06-18
updated: 2026-09-13
tags: ["apprentissage", "ingénierie", "méthode"]
draft: false
lang: fr
urlSlug: how-i-learn-a-domain
---

À l'école, j'ai appris que le travail du poids ne dépend pas du chemin parcouru, seulement du point de départ et du point d'arrivée. En ingénierie logicielle, c'est presque l'inverse. Une solution qui paraît évidente aujourd'hui est le produit de tout ce qui l'a précédée : les contraintes du métier, les décisions prises, les erreurs, les cas particuliers rencontrés en chemin.

C'est pour ça qu'on me pose toujours une variante de la même question. Comment peux-tu construire du logiciel pour la banque si tu n'es pas banquier ? Demain, ce sera la même question sur l'agriculture, l'énergie ou la santé.

Voici la réponse honnête. Je ne suis pas celui qui connaît déjà ton domaine. Je suis celui qui l'apprend assez vite pour construire ce dont il a besoin. C'est ça, la vraie compétence. Pas une pile de frameworks. La capacité d'entrer dans un domaine que je ne connais pas et d'en ressortir, quelques semaines plus tard, avec un logiciel qui lui va.

## La méthode, si on peut appeler ça comme ça

C'est moins malin que ça en a l'air.

D'abord, je vais chercher la vérité du terrain, pas le slide. Chaque domaine a une histoire officielle et une vraie. L'officielle est dans la documentation. La vraie est dans ce que les gens font réellement à 16h un vendredi, quand le système rame et que la file s'allonge. C'est la deuxième que je veux. Alors j'observe la personne qui fait le travail, pas celle qui le décrit.

Il y a toujours un happy flow, le parcours prévu quand tout fonctionne. Mais un domaine ne se résume jamais à son happy flow. Ce qui m'intéresse, c'est ce qui se passe quand il disparaît. Que fait l'agent quand le réseau tombe ? Quand un client arrive avec un cas que personne n'avait prévu ? Quand le système ralentit et que la file s'allonge ? Les réponses ne sont écrites nulle part, et c'est là que le domaine se montre.

Ensuite, je cherche la seule chose qui ne doit pas casser. Chaque domaine a un invariant, une ligne qu'on ne franchit pas sous peine que rien d'autre ne compte. En banque, elle est simple à dire et brutale à tenir : aucun franc créé, aucun perdu. Trouve cette ligne tôt. Construis tout autour de sa protection.

Ensuite, je livre quelque chose de petit et je laisse la réalité me corriger. Le moyen le plus rapide d'apprendre un domaine, c'est d'avoir tort devant lui. Une fonctionnalité qui casse sur un vrai cas limite m'apprend plus qu'un mois de lecture. Alors je cherche à provoquer ce moment, le plus tôt possible.

## Ce que la banque m'a appris à chercher

Je ne suis pas arrivé dans la banque en connaissant la banque. Je suis arrivé en sachant construire des systèmes, et j'ai appris le domaine en construisant dedans.

Le projet qui m'a le plus appris était un gestionnaire de file d'attente. Rien de spectaculaire : tenir l'ordre de passage des clients en agence, et digitaliser le parcours autour.

Sur le papier, c'est trivial. En pratique, le système est physique et temps réel : des kiosques pour prendre un ticket, des écrans dans la salle, un appel vocal qui annonce le numéro et indique le guichet. Tout ça doit rester synchronisé à la seconde, sur un réseau d'agences réparties, avec une volumétrie qui ralentit tout et une liaison qui finit toujours par couper quelque part.

C'est là que le vrai problème est apparu, et il n'était pas technique au départ. Quand le système tombe, l'agence ne ferme pas. Le personnel reprend des tickets papier et appelle les clients à la voix. C'est la bonne décision : on ne renvoie pas les gens chez eux parce qu'un serveur ne répond plus.

Puis le réseau revient.

Et là arrivent les questions que je n'avais pas vues venir. Comment reprendre sans casser l'ordre déjà servi sur place ? Comment réintégrer des tickets qui n'existent que sur papier, pour que le système redevienne la source de vérité au lieu d'être contourné ? Que fait-on des clients comptés deux fois, une fois à la main et une fois au retour ?

J'avais conçu le chemin nominal. Le domaine, lui, m'a appris que ce qui compte est le chemin dégradé, et surtout le retour. Un système qu'on ne peut pas rattraper après une coupure n'est pas repris par ses utilisateurs : il est abandonné, et on garde le papier.

Connaître un domaine, ce n'est pas seulement connaître ses règles. C'est comprendre ce qui se passe quand les règles rencontrent la réalité.

Le même apprentissage s'est répété ailleurs. Sur le pont entre un compte bancaire et un portefeuille mobile money, ce sont d'autres règles du domaine qui me sont tombées dessus : ce que veut vraiment dire la réconciliation à la clôture d'une journée, pourquoi l'idempotence n'est pas un mot de manuel mais ce qui empêche un client d'être débité deux fois quand son téléphone perd le réseau en plein paiement, et ce que le régulateur accepte ou refuse.

Rien de tout ça n'était dans une spécification. Je l'ai appris parce que ces systèmes seraient morts sans.

## Donc, la réponse

Il y a trois choses qu'on confond souvent : pouvoir apprendre, savoir apprendre, et vouloir apprendre. La première, j'ai eu la chance de l'avoir. La deuxième, je l'aiguise depuis des années. La troisième est la seule que je contrôle vraiment, et c'est celle qui voyage.

Le domaine changera. La banque aujourd'hui. Autre chose ensuite. Ce que je transporte entre les deux, ce n'est pas un stock de connaissances. C'est une façon d'entrer dans un domaine, de trouver la ligne qui ne doit pas casser, et de construire jusqu'à ce que la chose marche sur le terrain où elle se tient vraiment.

C'est tout le truc. Apprendre le domaine. Puis construire le logiciel qui le fait tourner.
