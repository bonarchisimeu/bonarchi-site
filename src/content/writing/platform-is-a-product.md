---
title: "A platform is a product, and its users are developers"
description: "My cluster ran fine. Using it was miserable. That gap taught me the difference between infrastructure that works and a platform someone would choose."
pubDate: 2026-10-02
tags: ["platform", "developer-experience", "identity"]
draft: true
lang: en
urlSlug: platform-is-a-product
---

For a while my platform was correct and unusable at the same time.

Everything ran. Databases were healthy, deployments were green, nothing was on
fire. And yet doing anything on it was a chore. A dozen tools, a dozen separate
logins, each with its own admin console and its own idea of what a user is.
Giving someone access meant repeating the same work in several places. Taking it
away meant hoping I remembered all of them.

I had been asking the only question infrastructure asks, which is: does it run?
I had never asked the question a product asks, which is: would anyone choose to
use this?

## The users are developers, including future me

Calling internal tooling a product sounds like a stretch until you notice it has
all the properties of one. It has users. Those users have a first experience,
and it is usually bad. They form opinions and route around it when it annoys
them. They ask for support, which means me.

Once I accepted that, the fixes stopped being infrastructure fixes and started
being product decisions.

It started with identity. Every tool now sits behind the same login, brokered
through one identity layer instead of each tool holding its own little kingdom
of accounts. That sounds like convenience, and it is, but the real gain is
elsewhere. Access is granted once and revoked once. The number of places where a
forgotten account can quietly survive drops to one. Convenience and security
usually pull against each other. This is one of the rare cases where they point
the same way.

Then came the door. I built a portal that sits in front of everything, so
someone can find what they need without knowing how the platform is wired
underneath. Discovery is friction too. A tool nobody can find is a tool that
does not exist, and I had several of those.

## What it costs

Centralising identity means building a single point of failure on purpose.

If that layer goes down, it does not degrade one tool. It locks every door at
once. I traded a dozen small, diffuse risks for one large, concentrated one,
which is a real trade and not a free win. The honest version of this decision is
that the concentrated risk is easier to see, easier to monitor, and easier to
take seriously, and that scattered risk mostly gets ignored until it bites. But
it has to actually be taken seriously, which means that layer gets more care
than anything else on the platform.

I also had to accept that this work produces no feature. Nobody thanks you for a
login page that already knew who they were. The reward for platform work is an
absence: the problem that stops happening.

## What I took from it

Does it run is the infrastructure question. Would someone choose this is the
product question. I had been answering the first one very carefully and ignoring
the second one entirely, on the assumption that internal tools do not need to be
good, only correct.

They do. The people using them have limited attention, they compare everything
to the smoothest thing they used that week, and they are not obligated to be
patient just because the tool is yours. That turns out to be true whether the
user is a paying customer or the same engineer who built it, six months later,
tired, trying to remember where the logs live.
