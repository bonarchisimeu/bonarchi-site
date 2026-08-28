---
title: "I built the product. Nobody came."
description: "Building something good and getting it used are two different crafts. I am fluent in the first one and a beginner at the second, and pretending otherwise was costing me."
pubDate: 2026-09-25
tags: ["product", "distribution", "engineering-to-business"]
draft: true
lang: en
urlSlug: nobody-came
---

The build was the part I knew how to do.

The thing worked. It was deployed, it was monitored, it solved a problem I had
watched real people struggle with. By every measure I had been trained to care
about, it was a success. Tests green. Uptime good. Architecture I could defend
in front of anyone.

Then came the silence.

Not failure exactly. Nothing broke. It was quieter than that. The product simply
sat there, correct and unbothered, waiting for the people it was built for to
find out it existed.

## Everything I use to know I am right is internal

An engineer lives inside fast, honest feedback loops. The compiler tells you
immediately. The test suite tells you in seconds. Production tells you within
minutes, loudly, sometimes at three in the morning. You are never in doubt for
very long about whether the thing works.

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

The bug is treating "it solves a real problem" as a sufficient condition. It is
not even a necessary one, which is the uncomfortable part. Plenty of things get
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

Price is not a number you choose at the end. It is a signal that arrives before
anyone has used the thing, and it tells people what to expect, whether you meant
it to or not. I had been setting prices the way you set a configuration value.

Differentiation is not decoration. When several things do roughly the same job,
the reason someone picks one is not usually the technical delta I would put in a
comparison table. I find that annoying. It is still true.

And adoption is behavioural, not rational. People do not switch to the better
option, they switch when the cost of switching drops below the pain of staying.
Most of my design effort had gone into being better, and almost none into making
the switch cheap.

## Where that leaves me

I do not have this solved. That is the honest state of things, and I would
rather write it down now than perform expertise I have not earned.

What I can do is treat distribution the way I treat any domain I do not know
yet. Go find the ground truth instead of the story I like. Look for the one
thing that has to be true or nothing else matters. Be wrong early and on
purpose, in front of real people, rather than late and in private.

That is the method I claim to use. It says I learn a domain and then build what
it needs. It turns out the sentence holds even when the domain is not technical,
and even when it puts me back at the very beginning, which is a less flattering
place to stand than the one I am used to.
