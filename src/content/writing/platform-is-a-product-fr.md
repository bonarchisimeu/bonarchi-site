---
title: "Une plateforme est un produit, et ses utilisateurs sont des développeurs"
description: "Mon cluster tournait très bien. S'en servir était pénible. Cet écart m'a appris la différence entre une infrastructure qui marche et une plateforme qu'on choisit d'utiliser."
pubDate: 2026-10-02
tags: ["plateforme", "expérience-développeur", "identité"]
draft: true
lang: fr
urlSlug: platform-is-a-product
---

Pendant un temps, ma plateforme était correcte et inutilisable en même temps.

Tout tournait. Les bases étaient saines, les déploiements au vert, rien ne
brûlait. Et pourtant, y faire quoi que ce soit était une corvée. Une douzaine
d'outils, une douzaine d'authentifications séparées, chacun avec sa console
d'administration et sa propre idée de ce qu'est un utilisateur. Ouvrir un accès,
c'était refaire le même travail à plusieurs endroits. Le retirer, c'était
espérer ne pas en avoir oublié un.

Je posais la seule question que pose l'infrastructure : est-ce que ça tourne ?
Je n'avais jamais posé celle que pose un produit : est-ce que quelqu'un
choisirait de s'en servir ?

## Les utilisateurs sont des développeurs, moi compris

Appeler « produit » de l'outillage interne semble exagéré, jusqu'au moment où on
remarque qu'il en a toutes les propriétés. Il a des utilisateurs. Ces
utilisateurs vivent une première expérience, en général mauvaise. Ils se font un
avis et contournent l'outil dès qu'il les agace. Ils demandent de l'aide, et
cette aide, c'est moi.

Une fois ça admis, les corrections ont cessé d'être des correctifs
d'infrastructure pour devenir des décisions de produit.

Tout a commencé par l'identité. Chaque outil se trouve maintenant derrière la
même authentification, via une couche d'identité unique, au lieu que chacun
règne sur son petit royaume de comptes. Ça ressemble à du confort, et ça en est,
mais le vrai gain est ailleurs. Un accès s'ouvre une fois et se coupe une fois.
Le nombre d'endroits où un compte oublié peut survivre en silence tombe à un.
D'habitude, le confort et la sécurité tirent dans des directions opposées. C'est
un des rares cas où ils vont dans le même sens.

Ensuite il a fallu une porte. J'ai construit un portail qui se tient devant tout
le reste, pour qu'on trouve ce dont on a besoin sans savoir comment la
plateforme est câblée en dessous. La découverte aussi, c'est de la friction. Un
outil que personne ne trouve est un outil qui n'existe pas, et j'en avais
plusieurs dans ce cas.

## Ce que ça coûte

Centraliser l'identité, c'est construire volontairement un point de défaillance
unique.

Si cette couche tombe, elle ne dégrade pas un outil. Elle ferme toutes les
portes d'un coup. J'ai échangé une douzaine de petits risques diffus contre un
seul, gros et concentré, et c'est un vrai échange, pas une victoire gratuite. La
version honnête de cette décision, c'est qu'un risque concentré se voit mieux,
se surveille mieux et se prend plus au sérieux, alors qu'un risque éparpillé
finit par être ignoré jusqu'à ce qu'il morde. Encore faut-il le prendre
réellement au sérieux, ce qui veut dire que cette couche reçoit plus d'attention
que tout le reste.

J'ai aussi dû accepter que ce travail ne produit aucune fonctionnalité. Personne
ne vous remercie pour une page de connexion qui savait déjà qui vous étiez. La
récompense du travail de plateforme est une absence : le problème qui cesse de
se produire.

## Ce que j'en retiens

« Est-ce que ça tourne » est la question de l'infrastructure. « Est-ce que
quelqu'un choisirait ça » est celle du produit. Je répondais très
soigneusement à la première en ignorant complètement la seconde, en supposant
qu'un outil interne n'a pas besoin d'être bon, seulement correct.

Si, il en a besoin. Les gens qui s'en servent ont une attention limitée, ils
comparent tout à la chose la plus fluide qu'ils ont utilisée cette semaine, et
ils ne sont pas tenus d'être patients sous prétexte que l'outil est le vôtre. Ça
reste vrai que l'utilisateur soit un client qui paie ou l'ingénieur qui l'a
construit, six mois plus tard, fatigué, en train de chercher où sont passés les
logs.
