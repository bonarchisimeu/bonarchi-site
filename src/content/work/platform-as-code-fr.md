---
title: "Ma plateforme de production, décrite en Git"
summary: "Plusieurs produits, un seul cluster, une seule personne pour l'opérer. La configuration qui décrit la plateforme vit désormais dans Git et se réconcilie toute seule. Puis je l'ai auditée contre moi-même, et j'y ai trouvé ce que je n'avais pas envie de trouver."
role: "Ingénieur logiciel, opérateur unique"
stack: ["Kubernetes", "GitOps", "ArgoCD", "Helm", "PostgreSQL", "Prometheus", "Loki", "Vault"]
year: 2026
impact: "39 applications déclaratives · 640 mises en production sans une seule commande manuelle · la configuration reconstructible depuis Git"
order: 1
draft: false
lang: fr
urlSlug: platform-as-code
---

## Contexte

Je fais tourner plusieurs produits dans ma propre société. Ils ont tous
besoin des mêmes choses, peu spectaculaires : un endroit où tourner, une base de
données qui survit à un redémarrage, des secrets qui ne traînent pas dans le
code, et des logs quand quelque chose casse.

Pendant un temps, j'ai fait comme la plupart des petites équipes. À la main, une
commande après l'autre. Ça marche, jusqu'au jour où ça ne marche plus. Je suis
seul. Si l'état de la production n'existe que dans ma tête et dans des commandes
tapées il y a des mois, alors je suis le point de défaillance, et chaque
correction manuelle creuse un peu plus l'écart entre ce que je crois faire
tourner et ce qui tourne vraiment.

J'ai donc tout basculé dans Git.

## Ce que j'ai construit

La configuration qui décrit la plateforme vit maintenant dans un dépôt unique.
Un contrôleur la surveille et ramène le cluster vers ce qu'elle décrit.
Modifier la production, c'est proposer un changement et le fusionner. Comprendre
pourquoi une chose est ainsi, c'est relire le commit qui l'a décidée.

Quatre mois plus tard, ce dépôt décrit 39 applications, et la chaîne
d'intégration a livré 640 mises en production sans que personne tape une
commande. Plus rien n'arrive en production à la main en fonctionnement normal,
et les exceptions passent par un accès de secours documenté plutôt que par
l'improvisation. Les
secrets sont chiffrés dans le dépôt lui-même : la description de la plateforme
est donc complète sans être dangereuse. Les tableaux de bord et les alertes sont
aussi des fichiers, ce qui veut dire que ma supervision passe par la même
relecture que mon code.

Une partie de tout ça existe pour rendre la plateforme utilisable, pas seulement
correcte. Chaque outil est derrière une seule authentification, via une couche
d'identité unique : on ouvre un accès une fois, on le coupe une fois, au lieu de
courir après une douzaine de consoles séparées. Un portail se tient devant
l'ensemble, pour que chacun atteigne ce dont il a besoin sans avoir à savoir
comment c'est câblé. Et des alertes qui me préviennent avant l'utilisateur, ce
qui est tout l'intérêt de la supervision et, j'allais l'apprendre, la chose la
plus facile à croire acquise.

Le vrai résultat n'est pas le compteur. Si les machines disparaissaient demain,
ce qu'il faut pour reconstruire cette plateforme ne serait plus dans ma tête, il
serait dans Git. Les machines elles-mêmes se provisionnent encore à la main :
c'est la limite honnête de cette affirmation, et la prochaine chose sur ma
liste.

## Les décisions, et ce qu'elles coûtent

L'intéressant n'a jamais été l'outillage. C'étaient les débats que j'ai eus avec
moi-même, et la discipline de les écrire. Il y en a quinze pour l'instant.

Les logs en sont un bon exemple. La solution riche et évidente était gourmande
en mémoire, et sur un petit cluster la mémoire est le budget que tout le reste
se dispute. Je suis passé à une pile plus légère, j'ai renoncé à une partie de
la puissance de recherche, et j'ai récupéré de la marge. C'est écrit noir sur
blanc, avec le compromis assumé, pour ne pas refaire le débat dans six mois
quand j'aurai oublié pourquoi.

Autre exemple : j'ai standardisé la façon dont chaque service gère ses
migrations de base et son pool de connexions, au lieu de laisser chacun
improviser. Décision ennuyeuse. Elle a supprimé toute une catégorie de mauvaises
surprises nocturnes.

## L'audit qui a trouvé ce que je ne voulais pas trouver

Construire, c'est la moitié facile. C'est en exploitant que l'honnêteté devient
coûteuse.

J'ai donc audité la plateforme contre moi-même, comme l'aurait fait un
auditeur externe : rigueur du GitOps, secrets, exposition réseau, sauvegardes,
résilience, observabilité. Se noter soi-même est inconfortable, et c'est fait
pour.

Je ne l'ai pas fait entièrement seul. J'ai utilisé un assistant comme
adversaire : lui demander où ça casserait, ce qu'un tableau de bord vert peut
masquer, quelles questions poser à un système qui a l'air sain. Il produit des
hypothèses vite, et c'est précisément ce qu'on veut au début d'un audit. Mais
une hypothèse n'est pas une preuve. C'est en allant vérifier dans le système que
l'archivage cassé est apparu. L'outil m'a donné la question, pas la réponse.

L'audit a mis au jour un incident en cours. L'archivage qui protège ma base
principale s'était arrêté en silence la nuit précédente. Rien n'était tombé.
Aucune alerte n'avait sonné. Tous les voyants étaient au vert, et la sauvegarde
que je croyais avoir ne s'écrivait plus.

J'ai corrigé le jour même et branché de vraies alertes, pour que le silence ne
puisse plus passer pour de la bonne santé. La leçon est ce qu'il faut retenir :
une sauvegarde jamais testée n'est pas une sauvegarde, c'est une hypothèse. Les
systèmes tombent rarement avec fracas. Ils lâchent discrètement, en restant au
vert.

## Ce que j'en retiens

Au départ, j'étais celui qui écrit le logiciel. L'exploiter m'a appris l'autre
moitié du métier. N'importe qui peut faire marcher un système le jour où
il le construit. Le garder honnête des mois plus tard, quand on est seul à le
regarder, c'est un autre savoir-faire, et il tient surtout à écrire les choses
et à vérifier ses propres affirmations.

Cette habitude d'auditer mon propre travail, plutôt que de supposer qu'il fait
encore ce que je crois, c'est ce que je ramène dans tout ce que je construis
par ailleurs.
