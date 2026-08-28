---
title: "Running a production platform as code"
summary: "Several products, one cluster, one person to operate it. The configuration that describes the platform now lives in Git and reconciles itself. Then I audited it against myself and found the thing I did not want to find."
role: "Software engineer, solo operator"
stack: ["Kubernetes", "GitOps", "ArgoCD", "Helm", "PostgreSQL", "Prometheus", "Loki", "Vault"]
year: 2026
impact: "39 apps running declaratively · 640 releases rolled out without a manual command · the platform's configuration rebuildable from Git"
order: 1
draft: false
lang: en
urlSlug: platform-as-code
---

## Context

I run a handful of products under my own company. They all need the same
unglamorous things: somewhere to run, a database that survives a restart,
secrets that are not sitting in the code, and logs when something breaks.

For a while I did that the way most small teams do it. By hand, one command at a
time. That works until it doesn't. I am one person. If the state of production
lives only in my head and in commands I typed months ago, then I am the single
point of failure, and every manual fix quietly widens the gap between what I
think is running and what is actually running.

So I moved all of it into Git.

## What I built

The configuration that describes the platform now lives in one repository. A
controller watches it and reconciles the cluster toward what it says. Changing
production means opening a change and merging it. Asking why something is the
way it is means reading the commit that made it so.

Four months in, that repository describes 39 applications, and the pipeline has
rolled out 640 releases without anyone typing a command. Nothing reaches
production by hand in normal operation, and the exceptions go through a
documented emergency access rather than through improvisation. Secrets are encrypted
in the repository itself, so the description of the platform is complete without
being dangerous. Dashboards and alert rules are files too, which means my monitoring
is reviewed the same way my code is.

Some of it exists to make the platform usable rather than merely correct. Every
tool sits behind one login, brokered through a single identity layer, so an
access is granted once and revoked once instead of chased across a dozen
separate consoles. A portal sits in front of all of it, so someone reaches what
they need without having to know how any of it is wired. And alerting that
reaches me before a user does, which is the entire point of monitoring and, as I
was about to learn, the easiest thing to believe you already have.

The real result is not the count. If the machines disappeared tomorrow, what it
takes to rebuild this platform would not be in my head. It would be in Git. The
machines themselves are still provisioned by hand, which is the honest limit of
that claim and the next thing on my list.

## The decisions, and what they cost

The interesting part was never the tools. It was the arguments I had with
myself, and the discipline of writing them down. There are fifteen of those
records so far.

Logs are a good example. The rich, obvious choice was heavy on memory, and on a
small cluster memory is the budget everything else competes for. I moved to a
lighter log stack, gave up some query power, and got the headroom back. It is
written down with the tradeoff attached, so I do not relitigate it in six months
when I have forgotten why.

Another one: I standardized how every service handles database migrations and
connection pooling instead of letting each service invent its own. Boring
decision. It removed an entire category of late night surprises.

## The audit that found what I did not want to find

Building it is the easy half. Operating it is where honesty gets expensive.

So I audited the platform against myself, the way an outsider would: GitOps
hygiene, secrets, network exposure, backups, resilience, observability. Scoring
your own work is uncomfortable by design.

I did not do this entirely alone. I used an assistant as an adversary: asking
where this would break, what a green dashboard can hide, which questions to put
to a system that looks healthy. It produces hypotheses quickly, which is exactly
what you want at the start of an audit. But a hypothesis is not proof. The
broken archiving turned up because I went and checked the system itself. The
tool gave me the question, not the answer.

It found an active incident. The archiving that protects my main database had
silently stopped the night before. Nothing was down. No alert had fired. Every
dashboard was green, and the backup I believed I had was not being written.

I fixed it that day and wired real alerting so silence could no longer be
mistaken for health. The lesson is the part worth keeping: a backup you have
never tested is not a backup, it is an assumption. Systems do not usually fail
loudly. They fail quietly, and stay green while they do it.

## What I took from it

I came into this as the person who writes the software. Running it taught me the
other half of the job. Anyone can make a system work on the day they build it.
Keeping it honest months later, when you are the only one watching, is a
different skill, and it is mostly about writing things down and checking your
own claims.

That habit of auditing my own work, rather than trusting that it still does what
I think it does, is the thing I carry back into everything else I build.
