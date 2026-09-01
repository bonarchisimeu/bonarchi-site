---
title: "Digitaliser le parcours client en agence"
summary: "Le client démarre une transaction depuis son téléphone. Elle arrive pré-remplie dans la bonne file d'agence, déjà reliée aux systèmes centraux. Le temps d'attente et le temps de traitement ont fortement baissé."
role: "Ingénieur logiciel"
stack: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes", "API sécurisées"]
year: 2024
impact: "−45% de temps d'attente client · −40% de temps de traitement par transaction"
order: 2
draft: false
lang: fr
urlSlug: digitizing-the-branch-journey
---

## Contexte

Une banque d'Afrique centrale, réseau de 95 agences. Le parcours client était
encore largement analogique. On entrait, on prenait un ticket, on attendait, et
ce n'est qu'ensuite qu'on commençait à expliquer ce qu'on venait faire. Le
guichetier saisissait tout depuis zéro pendant qu'on patientait. La file
absorbait tout ça, chaque jour, dans chaque agence.

## Ce que j'ai construit

J'ai travaillé à connecter le canal à distance au comptoir de l'agence. Un client
peut désormais lancer une transaction depuis son téléphone. Quand il arrive en
agence, la demande est déjà dans la bonne file, pré-remplie, et reliée aux
systèmes centraux de la banque pour la vérification de compte en temps réel. Le
guichetier valide au lieu de ressaisir.

Les parties difficiles étaient les classiques de la banque. Intégration d'API
sécurisée avec la plateforme centrale. Vérification de compte en temps réel.
S'assurer qu'une demande créée à distance et l'arrivée
physique du client se réconcilient en une seule opération, jamais deux. Le tout déployé
via Docker, Kubernetes et des pipelines CI/CD, pour que les mises en production
restent contrôlées et auditables, ce qui n'est pas négociable en environnement
régulé.

## Quand le réseau coupe

Un système central, des agences réparties, et une garantie à tenir : l'ordre de
passage. Tant que la liaison tient, c'est simple. Le jour où elle casse quelque
part, l'agence ne ferme pas pour autant.

Le personnel reprend des tickets papier et appelle les clients à la voix. C'est la
bonne décision, et aucun logiciel ne devrait chercher à l'empêcher. On ne renvoie
pas des gens chez eux parce qu'un serveur ne répond plus.

Le problème arrive au retour du réseau.

Comment reprendre sans casser l'ordre déjà servi sur place ? Comment réintégrer des
tickets qui n'existent que sur papier, pour que le système redevienne la source de
vérité au lieu d'être contourné ? Que fait-on d'un client compté deux fois, une fois
à la main et une fois à la reprise ?

C'est la partie qui a demandé le plus de réflexion, et elle ne figurait dans aucune
spécification.

La réponse a fini par tenir en une fonction. À la reprise, on saisit le dernier
numéro distribué à la main. Le système crée les tickets manquants jusqu'à ce numéro,
puis déplace la tête de file sur le prochain à appeler.

Pas de fusion compliquée, pas d'arbitrage entre deux vérités concurrentes. Le
système rattrape la réalité, au lieu de demander à la réalité de se conformer à lui.
La séquence reste continue, l'ordre servi sur place est préservé, et l'agence
repart là où elle en était sans ressaisir sa matinée.

Le chemin nominal se conçoit en quelques jours. Le chemin dégradé, et surtout le
retour, décident si le système est encore utilisé six mois plus tard ou si tout le
monde a gardé le papier.

## Impact

Le temps d'attente client a baissé d'environ 45 %. Le temps de traitement par
transaction d'environ 40 %. Le client attend moins. Le guichetier fait moins de
saisie mécanique et davantage le travail de jugement que seule une personne peut
faire.

## Ce que j'en retiens

C'est le projet qui m'a convaincu que le logiciel à plus fort levier dans une
banque, ce n'est pas l'application clinquante. C'est la tuyauterie discrète qui
rejoint les gens là où ils sont déjà, sur le téléphone qu'ils ont en main, et qui
respecte le temps du personnel d'agence. Une bonne partie de ma réflexion
actuelle a commencé ici.
