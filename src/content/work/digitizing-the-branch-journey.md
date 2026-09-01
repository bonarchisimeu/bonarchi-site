---
title: "Digitizing the branch customer journey"
summary: "A central queue system for a branch network, with the customer journey digitised around it. Wait time and processing time dropped sharply. The hard part was not the nominal path, it was coming back after a network outage."
role: "Software Engineer"
stack: ["Java", "Spring Boot", "WebSocket", "PostgreSQL", "Docker", "Kubernetes", "Secure APIs"]
year: 2024
impact: "−45% client wait time · −40% processing time per transaction"
order: 2
draft: false
lang: en
urlSlug: digitizing-the-branch-journey
---

## Context

A Central African bank with branches spread across the country. The customer
journey was still mostly analog. You walked in, took a ticket, waited, and only
then started explaining what you came to do. The teller keyed everything from
scratch while you stood there.

The system is physical and real time: kiosks that print tickets, screens in the
hall, a voice announcement that calls the number and points to the counter.

Keeping all of that alive is the real cost. Every kiosk, every screen, every teller
station holds an open WebSocket connection to the central system, multiplied by the
number of branches. That is a lot of links to watch, restore and resynchronise. A device that
reconnects must not replay history, it has to catch up to current state
immediately. Inside one hall, the screen, the voice and the teller's view have to
say the same thing at the same moment: a screen showing a stale number is worse
than no screen at all. And the teller watches the queue fill in live, a ticket
taken at the kiosk appearing on the station without anyone refreshing anything.

Two constraints shape everything else. The order customers are served in is a
guarantee: nobody accepts being skipped. And a network spread across a whole
country will always end up with a link failing somewhere. Those two facts together
define the real problem, and it is not the one you expect at the start.

## What I built

I worked on connecting the remote channel to the branch floor. A customer can
now initiate a transaction from their phone. By the time they reach the branch,
the request is already in the right queue, pre-filled, and linked to the bank's
core systems for real-time account verification. The teller validates instead of
re-typing.

The hard parts were the usual banking ones. Secure API integration with the core
platform. Real-time account verification. Making sure a request created remotely
and the customer's physical arrival reconcile into a single operation, never two. It shipped
through Docker, Kubernetes and CI/CD pipelines, so releases stayed controlled and
auditable, which is non-negotiable in a regulated environment.

## When the network drops

A central system, branches spread across the country, and one guarantee to hold:
the order customers are served in. While the link holds, this is simple. The day it
breaks somewhere, the branch does not close.

The kiosk stops printing, the screen freezes, the voice goes quiet. Staff fall back
to paper tickets and call people themselves, replacing the automated voice with
their own. That is the right call, and no software should try to prevent it. You do not send customers home because a
server stopped answering.

The problem arrives when the network comes back.

How do you resume without breaking the order already served on site? How do you fold
in tickets that exist only on paper, so the system becomes the source of truth again
instead of being worked around? What do you do with a customer counted twice, once
by hand and once on recovery?

That was the part that took the most thought, and it appeared in no specification.

The answer ended up fitting in one function. On recovery, someone enters the last
number handed out on paper. The system creates the missing tickets up to that
number, then moves the queue head to the next one to call.

No complicated merge, no arbitration between two competing truths. The system
catches up with reality instead of asking reality to conform to it. The sequence
stays continuous, the order already served on site is preserved, and the branch
picks up where it left off without re-keying its morning.

The nominal path takes a few days to design. The degraded path, and above all the
return, decide whether the system is still in use six months later or whether
everyone kept the paper.

## Impact

Client wait time dropped about 45 percent. Processing time per transaction
dropped about 40 percent. The customer waits less. The teller does less
mechanical entry and more of the judgment work only a person can do.

## What I took from it

It also taught me something I had not expected. A system is judged on its nominal
path and adopted or abandoned on its degraded one. Designing the outage and the
return is not defensive work, it is what decides whether people still use the thing
six months later.

This is the project that convinced me the highest-leverage software in a bank is
not the flashy app. It is the quiet plumbing that meets people where they already
are, on the phone in their hand, and respects the branch staff's time. A lot of
my current thinking started here.
