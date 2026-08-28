---
title: "I had an AI audit my platform. Here is what it missed."
description: "It found the failure I most needed to find. It also gave my secrets a good grade while an admin key sat in cleartext in my repository. The gap between those two facts is the useful part."
pubDate: 2026-09-18
tags: ["ai", "audit", "security", "operations"]
draft: true
lang: en
urlSlug: what-the-ai-audit-missed
---

I operate my platform alone, which means nobody disagrees with me.

That is the actual danger of solo work. Not the workload. The absence of someone
who looks at your design and says the thing you did not want to hear. So I built
a substitute: I ran an adversarial audit with an AI, feeding it my configuration
and asking it to attack the place rather than admire it.

The exercise was worth it. It also proved less reliable than it looked, in ways
that turned out to be consistent enough to describe.

## What it caught

Credit where it is due, because the best find was a real one.

It surfaced that the archiving protecting my main database had stopped in
silence, with every dashboard still green. I have written about that elsewhere.
It matters here because I would not have gone looking on my own. Nothing was
asking me to.

It also caught something quieter and arguably worse. My monitoring itself was
underpowered and had been restarting under memory pressure, twenty-three times.
The system responsible for telling me when things break was one of the broken
things. That is the kind of finding that justifies the whole exercise.

## What it missed

This is the part I did not expect, and it forms a pattern.

It gave my secrets handling a good grade. It verified two dozen encrypted files,
confirmed the procedure was sound, and moved on. Some time later I found an
administration key sitting in the repository in cleartext. It had been there
during the audit. The review had checked the right folder and validated the
right procedure, and never asked whether something might be somewhere it did not
belong.

It did not see a vulnerability in my own deployment tooling either. Not in a
dependency, not in a well-known component, but in a script I had written to glue
my own pieces together. There is no reference model for my glue code, so there
was nothing to compare it against.

And it was blind to everything that only appears once the system is running. A
component starved of processor time under real load. A connection pool where two
permanently held connections left nothing for anybody else. A bootstrap command
missing an argument, so it did nothing at all and reported no error, which is a
silent failure of exactly the kind the audit had just taught me to fear.

It produced some noise too. One alert threshold it flagged was simply correct as
it stood, and chasing it cost me an afternoon.

## The pattern

The AI was strong wherever the problem had a familiar shape. A security policy,
a backup configuration, a sizing decision. These have canonical forms, and
comparing what I had against the canonical form is exactly the sort of work it
does well and quickly.

Its blind spots were three, and they owe nothing to chance. My bespoke code, because
there is nothing to compare it to. Runtime behaviour, because it was reading a
description of my system rather than watching my system. And silent failure,
because a thing that emits nothing offers nothing to notice.

Those three happen to be where an operator has the advantage. Not because I am
cleverer, but because I am the one who sees the platform behave, day after day,
and who wrote the odd little scripts nobody else would recognise.

## What I do with it now

I still run the adversarial pass, and I would recommend it to anyone working
alone. It generates more good questions in an hour than I would produce in a
week of being polite to myself.

But I have stopped treating the output as a verdict. It reviews the description
of my platform, not the platform. Every finding gets confirmed against the
running system before I believe it, and more importantly, a clean report now
tells me nothing at all. The audit that gave my secrets a good grade was wrong,
and it was wrong confidently.
