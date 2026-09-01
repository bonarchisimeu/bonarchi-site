# Séquence LinkedIn — 7 posts, 1 par semaine

Ordre choisi pour la **portée d'abord** (263 abonnés : la plupart des gens verront
un seul post, pas la séquence), puis la profondeur. Le site est l'œuvre, LinkedIn
est la porte. Jamais l'article recopié.

Rédigés à partir des versions **corrigées** des articles. Ne pas réintroduire
« le cluster est reconstructible » ni « la plateforme reste un dépôt » : les
machines se provisionnent encore à la main.

## Plan de langue et liens

5 posts FR, 2 EN. Le réseau est francophone (post FR : 1039 impressions ; post EN :
227). L'anglais est réservé aux deux sujets les plus internationaux et les moins
dépendants du réseau local, qui servent de test.

| Semaine | Langue | Lien à utiliser |
|---|---|---|
| 1 Mobile money | FR | `/fr/writing/why-mobile-money-leapfrogged-banks/` |
| 2 Apprendre un domaine | FR | `/fr/writing/how-i-learn-a-domain/` |
| 3 Parcours client | FR | `/fr/work/digitizing-the-branch-journey/` |
| 4 Audit IA | FR | `/fr/writing/what-the-ai-audit-missed/` |
| 5 Personne n'est venu | FR | `/fr/writing/nobody-came/` |
| 6 Platform is a product | EN | `/writing/platform-is-a-product/` |
| 7 Platform as code | EN | `/work/platform-as-code/` |

Règle : **un post = une langue**, jamais les deux dans le même post. Et le lien
pointe toujours vers la version de l'article dans la langue du post, sinon le
lecteur atterrit dans une langue qu'il n'a pas choisie et repart.

---

## Semaine 1 — Mobile money
`bonarchisimeu.me/fr/writing/why-mobile-money-leapfrogged-banks/`

Dans une grande partie de l'Afrique centrale, l'agence bancaire n'est jamais venue.

Le téléphone, lui, est arrivé.

On raconte souvent le mobile money comme une réussite technologique. Vu de là où
je travaille, ça ressemble plutôt à de l'infrastructure qui a trouvé le chemin de
moindre résistance.

La banque demandait une agence, un justificatif de domicile, un solde minimum.
Une vie formelle que beaucoup n'ont jamais eue.

Les opérateurs, eux, n'ont pas construit de réseau. Ils ont utilisé celui qui
existait déjà : la boutique du coin. Un agent a besoin d'un téléphone, d'un fonds
de caisse et d'un endroit où les gens passent. Pas d'un smartphone non plus :
l'USSD tourne sur le combiné le moins cher, sur un réseau faible.

Et surtout, la confiance était déjà là. Les gens achetaient du crédit depuis des
années. L'argent n'a fait que s'y greffer.

Je travaille sur la couche en dessous : quand un compte bancaire et un portefeuille
doivent s'échanger des fonds, le logiciel qui met les deux systèmes d'accord.
C'est là que le romantisme s'arrête. La transaction qui expire après le débit mais
avant le crédit. La requête envoyée deux fois par un client qui réessaie. La
réconciliation du soir qui doit prouver qu'aucun franc n'a été créé ni perdu.

Ce que j'en retire dépasse la fintech : l'infrastructure suit les contraintes, pas
les plans.

→ [lien]

#MobileMoney #Fintech #CEMAC #Afrique #SoftwareEngineering

---

## Semaine 2 — Comment j'apprends un domaine
`bonarchisimeu.me/fr/writing/how-i-learn-a-domain/`

> Révisé après le post 1 (594 impressions, 69 % hors réseau, 1 clic, 0 commentaire) :
> une raison de cliquer, une question à la fin, et la triade pouvoir/savoir/vouloir
> en montée finale. La méthode n'est plus annoncée comme « trois choses » pour ne pas
> concurrencer cette triade.

On me pose toujours une variante de la même question.

Comment construire du logiciel pour la banque si on n'est pas banquier ?

Voici la réponse honnête. Je ne suis pas celui qui connaît déjà le domaine. Je suis
celui qui l'apprend assez vite pour construire ce dont il a besoin.

Quand j'entre quelque part, je cherche la vérité du terrain, pas la documentation.
Chaque domaine a une histoire officielle et une vraie. La vraie est dans ce que les
gens font à 16h un vendredi, quand le système rame et que la file s'allonge.

Puis l'invariant. La seule ligne qui ne doit jamais casser, sous peine que rien
d'autre ne compte. En banque : aucun franc créé, aucun perdu.

Et enfin le moment où j'ai tort, que je cherche à provoquer le plus tôt possible.
Une fonctionnalité qui casse sur un vrai cas limite m'apprend plus qu'un mois de
lecture.

Tout ça reste de la théorie tant qu'on ne l'a pas vécu. Dans mon cas, c'est un
gestionnaire de file d'attente en agence qui me l'a appris. Le jour où le réseau a
coupé, le personnel a repris des tickets papier et appelé les clients à la voix.
C'était la bonne décision. Le problème est arrivé quand le réseau est revenu.

Il y a trois choses qu'on confond souvent : pouvoir apprendre, savoir apprendre, et
vouloir apprendre. La première, j'ai eu la chance de l'avoir. La deuxième, je
l'aiguise depuis des années. La troisième est la seule que je contrôle vraiment, et
c'est celle qui voyage.

→ [lien]

Et vous, quel domaine avez-vous dû apprendre en marchant ? Qu'est-ce qui vous a fait
comprendre que vous aviez tort la première fois ?

#SoftwareEngineering #Apprentissage #Ingénierie

---

## Semaine 3 — Parcours client en agence
`bonarchisimeu.me/fr/work/digitizing-the-branch-journey/`

Le client entrait. Il prenait un ticket. Il attendait.

Et c'est seulement arrivé au guichet qu'il commençait à expliquer ce qu'il venait
faire, pendant que le guichetier saisissait tout depuis zéro.

Le problème n'était pas le ticket. C'était tout ce qui se passait autour.

Un réseau de plus de 85 agences, et cette scène qui se rejouait chaque jour dans
chacune.

J'ai travaillé à connecter le canal à distance au guichet. Le client lance sa
transaction depuis son téléphone. Quand il arrive, la demande est déjà dans la
bonne file, pré-remplie, reliée aux systèmes centraux pour la vérification de
compte en temps réel.

Le guichetier valide au lieu de ressaisir.

Résultat : environ 45 % de temps d'attente en moins, environ 40 % de temps de
traitement en moins par transaction.

Le point délicat n'était pas l'interface. C'était de garantir qu'une demande créée
à distance et l'arrivée physique du client se réconcilient en une seule opération,
jamais deux. En environnement régulé, ce genre de détail n'est pas un détail.

Ce projet m'a convaincu d'une chose : le logiciel à plus fort levier dans une
banque, ce n'est pas l'application clinquante. C'est la tuyauterie discrète qui
fait disparaître dix minutes d'attente.

→ [lien]

#SoftwareEngineering #Banking #Fintech #Cameroun

---

## Semaine 4 — Audit IA
`bonarchisimeu.me/fr/writing/what-the-ai-audit-missed/`

J'ai demandé à une IA d'auditer ma plateforme de production.

Elle a trouvé des choses importantes. Elle en a raté d'autres qu'elle aurait dû
voir. Et c'est le motif derrière ses erreurs qui m'intéresse.

Côté trouvailles, elle a été précieuse. Elle a vu que l'archivage protégeant ma
base principale s'était arrêté en silence, tous les voyants au vert. Et que ma
supervision elle-même redémarrait sous pression mémoire, vingt-trois fois. Le
système chargé de me prévenir quand ça casse faisait partie des choses cassées.

Côté angles morts, c'est plus instructif. Elle a bien noté ma gestion des secrets
après avoir vérifié deux douzaines de fichiers chiffrés. Une clé d'administration
se trouvait en clair dans le dépôt pendant ce temps-là. Elle avait examiné le bon
dossier et validé la bonne procédure, sans se demander si une chose pouvait se
trouver là où elle n'avait rien à faire.

Le motif est net. Elle est forte quand le problème a une forme connue. Elle est
aveugle sur mon code sur mesure, sur ce qui n'apparaît qu'à l'exécution, et sur
les pannes silencieuses.

Elle relit la description de mon système, pas mon système.

Je continue à m'en servir comme contradicteur. Plus comme verdict.

→ [lien]

#IA #SoftwareEngineering #Sécurité #PlatformEngineering

---

## Semaine 5 — Personne n'est venu
`bonarchisimeu.me/fr/writing/nobody-came/`

J'ai construit le produit. Il fonctionnait. Tests au vert, production stable, une
architecture que je pouvais défendre devant n'importe qui.

Puis il y a eu le silence.

Un ingénieur vit dans des boucles de retour rapides. Le compilateur répond tout de
suite. Les tests en quelques secondes. La production en quelques minutes, parfois à
trois heures du matin. On ne reste jamais longtemps dans le doute.

La distribution, elle, n'a pas de compilateur.

Il n'existe pas de message d'erreur pour un produit dont personne n'a entendu
parler. Il n'y a que l'absence, et l'absence se lit mal. On y voit de l'avance sur
le marché, une fonctionnalité qui manque, un public pas prêt. Tout, sauf la vraie
raison.

J'avais confondu deux victoires différentes : résoudre un problème, et amener
quelqu'un à changer ses habitudes.

Et j'avais une hiérarchie que je n'avais jamais interrogée. Construire me semblait
le vrai travail, le reste une activité secondaire. C'est une croyance très
confortable quand on est bon à construire.

Je n'ai pas résolu la question. J'apprends la distribution comme j'ai appris la
banque : aller au terrain, chercher ce qui doit être vrai, avoir tort tôt.

Sauf que cette fois, le débutant, c'est moi.

→ [lien]

#Produit #Distribution #Entrepreneuriat #SoftwareEngineering

---

## Semaine 6 — Une plateforme est un produit
`bonarchisimeu.me/fr/writing/platform-is-a-product/`

Pendant un temps, ma plateforme était correcte et inutilisable en même temps.

Tout tournait. Les bases saines, les déploiements au vert. Et pourtant y faire quoi
que ce soit était une corvée : une douzaine d'outils, une douzaine
d'authentifications, chacun avec sa console et sa propre idée de ce qu'est un
utilisateur.

Ouvrir un accès, c'était refaire le même travail à plusieurs endroits. Le retirer,
c'était espérer ne pas en avoir oublié un.

Je posais la seule question que pose l'infrastructure : est-ce que ça tourne ? Je
n'avais jamais posé celle que pose un produit : est-ce que quelqu'un choisirait de
s'en servir ?

Une fois ça admis, les corrections ont cessé d'être des correctifs d'infrastructure
pour devenir des décisions de produit. Une authentification unique. Un portail
devant l'ensemble, parce qu'un outil que personne ne trouve est un outil qui
n'existe pas.

Avec un vrai compromis, que je préfère nommer : centraliser l'identité, c'est
construire volontairement un point de défaillance unique. J'ai échangé une douzaine
de petits risques diffus contre un seul, gros et concentré.

Et ce travail ne produit aucune fonctionnalité. Personne ne vous remercie pour une
page de connexion qui savait déjà qui vous étiez. La récompense, c'est une absence.

→ [lien]

#PlatformEngineering #DeveloperExperience #Kubernetes

---

## Semaine 7 — La plateforme en Git
`bonarchisimeu.me/fr/work/platform-as-code/`

J'exploite seul la plateforme qui fait tourner mes produits. Ça oblige à être
honnête sur un point : si l'état de la production n'existe que dans ma tête, je
suis moi-même le point de défaillance.

J'ai donc tout basculé dans Git.

La configuration qui décrit la plateforme vit dans un dépôt unique. Un contrôleur
la surveille et ramène le cluster vers ce qu'elle décrit. Modifier la production,
c'est proposer un changement et le fusionner.

Quatre mois plus tard : 39 applications, 640 mises en production sans que personne
tape une commande. Les secrets chiffrés dans le dépôt lui-même. Les tableaux de
bord et les alertes sont des fichiers, donc ma supervision passe par la même
relecture que mon code.

Mais le chiffre n'est pas le résultat intéressant.

Le résultat, c'est que ce qu'il faut pour reconstruire cette plateforme n'est plus
dans ma tête. Les machines, elles, se provisionnent encore à la main. C'est la
limite honnête de l'affirmation, et la prochaine chose sur ma liste.

Ensuite j'ai audité tout ça contre moi-même. L'audit a trouvé un incident en cours
que rien ne signalait.

Une sauvegarde jamais testée n'est pas une sauvegarde. C'est une hypothèse.

→ [lien]

#GitOps #Kubernetes #DevOps #SRE #PlatformEngineering

---

## Versions anglaises (semaines 6 et 7)

### EN — Semaine 6
`bonarchisimeu.me/writing/platform-is-a-product/`

For a while my platform was correct and unusable at the same time.

Everything ran. Databases healthy, deployments green, nothing on fire. And yet
doing anything on it was a chore. A dozen tools, a dozen separate logins, each with
its own admin console and its own idea of what a user is.

Granting access meant repeating the same work in several places. Removing it meant
hoping I remembered all of them.

I had been asking the only question infrastructure asks: does it run? I had never
asked the one a product asks: would anyone choose to use this?

Once I accepted that, the fixes stopped being infrastructure fixes and became
product decisions. One login across every tool. A portal in front of it all,
because a tool nobody can find is a tool that does not exist.

With a real tradeoff I would rather name than hide: centralising identity means
building a single point of failure on purpose. I traded a dozen small diffuse risks
for one large concentrated one.

And this work ships no feature. Nobody thanks you for a login page that already
knew who they were. The reward for platform work is an absence.

→ [link]

#PlatformEngineering #DeveloperExperience #Kubernetes

---

### EN — Semaine 7
`bonarchisimeu.me/work/platform-as-code/`

I operate the platform that runs my products alone. That forces a certain honesty:
if the state of production lives only in my head, then I am the single point of
failure.

So I moved all of it into Git.

The configuration that describes the platform lives in one repository. A controller
watches it and reconciles the cluster toward what it says. Changing production means
opening a change and merging it.

Four months in: 39 applications, 640 releases rolled out without anyone typing a
command. Secrets encrypted in the repository itself. Dashboards and alert rules are
files too, so my monitoring gets reviewed the same way my code does.

But the count is not the interesting result.

The result is that what it takes to rebuild this platform is no longer in my head.
The machines themselves are still provisioned by hand, which is the honest limit of
that claim and the next thing on my list.

Then I audited the whole thing against myself. It surfaced an incident in progress
that nothing was reporting.

A backup you have never tested is not a backup. It is an assumption.

→ [link]

#GitOps #Kubernetes #DevOps #SRE #PlatformEngineering
