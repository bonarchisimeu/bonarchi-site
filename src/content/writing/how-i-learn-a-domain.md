---
title: "How I learn a domain"
description: "I'm not the person who already knows your field. I'm the person who learns it fast enough to build the thing it needs. Here is how."
pubDate: 2026-06-18
updated: 2026-08-28
tags: ["learning", "engineering", "method"]
draft: false
lang: en
urlSlug: how-i-learn-a-domain
---

People keep asking me a version of the same question. How can you build software for banking if you are not a banker? Tomorrow it will be the same question about agriculture, or energy, or health.

Here is the honest answer. I am not the person who already knows your field. I am the person who learns it fast enough to build the thing it needs. That is the real skill. Not a stack of frameworks. The ability to walk into a domain I do not know and come out, a few weeks later, with software that fits it.

## The method, such as it is

It is less clever than it sounds.

First, I go for the ground truth, not the slide deck. Every domain has an official story and a real one. The official story lives in the documentation. The real one lives in what people actually do at 4pm on a Friday, when the system is slow and the queue is long. I want the second story. So I watch the person doing the work, not the person describing it.

Then I look for the one thing that cannot break. Every field has an invariant, a line you do not cross or nothing else matters. In banking it is easy to say and brutal to honour: no franc is created, none is lost. Find that line early. Build everything around protecting it.

Then I ship something small and let reality correct me. The fastest way to learn a domain is to be wrong in front of it. A feature that breaks on a real edge case teaches me more than a month of reading. So I get to that moment on purpose, quickly.

## What banking taught me to look for

I did not arrive in banking knowing banking. I arrived knowing how to build systems, and I learned the domain by building inside it.

The project that taught me the most was a bridge. A customer has money in a bank account and money in a mobile money wallet, and wants to move it between the two. Two systems that were never meant to talk to each other, over a network that drops, with real money on the line. To build that correctly I had to learn the domain's rules, not just its vocabulary. What reconciliation really means at the close of a day. Why idempotency is not a textbook word but the thing that stops a customer being charged twice when their phone loses signal mid-payment. What the regulator will and will not accept.

None of that was in a tutorial. I learned it because the bridge would have failed without it.

## Why I am deliberately learning a new domain right now

I am studying business, on purpose, while I keep shipping. Economics, accounting, the models of how organisations actually run. Not because I plan to leave engineering. Because leadership is the next domain I want to be able to build in, and I am running the same method on it. Go for the ground truth. Find the invariant. Be wrong early.

Three things get confused with each other: being able to learn, knowing how to learn, and wanting to. The first I was lucky to get. The second I have been sharpening for years. The third is the only one I actually control, and it is the part that travels.

## So, the answer

The domain will change. Banking today. Something else after. What I carry between them is not a body of facts. It is a way of entering a field, finding the line that cannot break, and building until the thing works on the ground it actually stands on.

That is the whole trick. Learn the domain. Then build the software it runs on.
