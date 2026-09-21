---
title: "I built the product. Nobody came."
description: "Building something good and getting it used are two different crafts. I am fluent in the first one and a beginner at the second, and pretending otherwise was costing me."
pubDate: 2026-09-21
tags: ["product", "distribution", "engineering-to-business"]
draft: false
lang: en
urlSlug: nobody-came
---

The build was the part I knew how to do.

The product worked. It was deployed, it was monitored, it solved a problem I had
watched real people struggle with. By every measure I had been trained to care
about, it was a success. Tests green. Uptime good. Architecture I could defend
in front of anyone.

Then came the silence.

Not failure exactly. Nothing broke. It was quieter than that. The product simply
sat there, correct and unbothered, waiting for the people it was built for to
find out it existed.

## Everything I use to know I am right is internal

An engineer lives inside fast, honest feedback loops. The compiler tells you
immediately when the code cannot run. The test suite shows you within seconds
when a behaviour does not match what you expected. And once the thing is in
production, logs, metrics and users eventually surface the problems you missed,
sometimes at three in the morning. You are never in doubt for very long about
whether the thing works.

## Distribution has no compiler

Nothing tells you that you are wrong. There is no error message for a product
nobody heard about. There is only absence, and absence is easy to misread. You
can interpret it as being early, or as needing one more feature, or as the
market not being ready, and all of those explanations feel more comfortable than
the real one, which is that solving a problem and getting someone to change
their behaviour are two different achievements and I had only done the first.

## The actual bug was in my head

I want to name this precisely, because "engineers are bad at sales" is a lazy
way to say it and it lets me off the hook.

The bug is treating "it solves a real problem" as a sufficient condition. And
solving it better than the alternatives is not even necessary, which is the
uncomfortable part. Plenty of things get
adopted while solving the problem worse than something else that nobody uses. I
knew that as an observable fact about the world and had somehow filed it as
other people's problem.

The other half of the bug is a hierarchy I never examined. Building felt like
the real work, and everything downstream of building felt like a lesser
activity, something you delegate to people who did not want to do the hard
engineering. That is a comfortable belief for someone who is good at building.
It is also the reason my good product sat there.

## What I am starting to see

I am early in this, so what follows is closer to a set of first observations
than to lessons.

They come from [EasyBlue](https://easyblue.app), where I finally did what I had been putting off:
rewriting how the product presents itself, stating its value in one sentence,
running and analysing Facebook ad campaigns. Not to become a marketer. To get a
signal at last, where the silence gave me none. Looking for that signal, I
started to see what I never looked at when I thought only as an engineer.

Price is not a number you choose at the end. It is a signal that arrives before
anyone has used the thing, and it tells people what to expect, whether you meant
it to or not. I had been setting prices the way you set a configuration value.

Differentiation is not decoration. When several things do roughly the same job,
the reason someone picks one is not usually the technical delta I would put in a
comparison table. I find that annoying. It is still true.

And adoption is not decided on quality alone. I compared solutions the way an
engineer does: features, architecture, performance, price. But the person on
the other side first has to decide to change what they already use, and that
change has a cost: learning something new, trusting it, taking a risk, dropping
a habit. I had put almost all my effort into making the product better, and
almost none into making that change easy.

## Where that leaves me

I do not have this solved. That is the honest state of things, and I would
rather write it down now than perform expertise I have not earned.

What I can do is treat distribution the way I treat any domain I do not know
yet. Go find the ground truth instead of the story I like. Look for the one
thing that has to be true or nothing else matters. Be wrong early and on
purpose, in front of real people, rather than late and in private.

That is the method I have used from the start. Only the ground has changed: it
is no longer a bank branch or a system in production, it is the people who
should be using the product and are not yet.

And this time, the beginner is me.
