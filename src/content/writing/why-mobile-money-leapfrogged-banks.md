---
title: "Why mobile money leapfrogged banks in Central Africa"
description: "The bank branch never reached most of the CEMAC region. A SIM card did. Here is how that happened, and what it taught me about building software people actually use."
pubDate: 2026-06-17
tags: ["fintech", "mobile-money", "cemac"]
draft: false
---

In much of Central Africa, the bank branch never showed up. The mobile phone did. That one fact explains more about how money moves here than any chart of GDP per capita ever will.

I have spent years building the software behind this. Not the apps people tap on, the layer underneath: the ledgers, the integrations, the reconciliation jobs that run at night and decide whether a balance is right or wrong by morning. From that seat, the rise of mobile money does not look like a marketing story. It looks like infrastructure finding the path of least resistance.

## The problem the bank did not solve

Open a traditional bank account in a CEMAC country and you meet a wall of conditions. A physical branch, often hours away. Proof of address in places where addresses are informal. Minimum balances that price out most people. Paperwork that assumes a kind of formal life many never had.

The bank was not built for the person selling tomatoes at the market in Douala. So that person was simply outside the financial system. Not unbanked by choice. Unbanked by design.

Then the mobile operators arrived with something almost accidental. Prepaid airtime turned out to be a store of value. If I can send you credit, I can send you something close to money. The operators noticed, formalized it, and built a network of human agents to turn cash into digital balance and back again. MTN Mobile Money and Orange Money did not wait for a branch network. They used the one that already existed: the corner shop on every street.

## Why the leap worked

People talk about leapfrogging as if it were magic. It is not. It is what happens when a new technology fits the ground better than the old one ever did.

Three things made it work here.

The first is the agent. A mobile money agent needs a phone, a float of cash, and a spot people walk past. That is a branch you can open in a day, in a village a bank would never visit. The distribution problem that defeated banks for decades got solved by people who were already there.

The second is the phone itself. You do not need a smartphone for mobile money. USSD, those `*126#` codes, runs on the cheapest handset on a weak network. No app store, no data plan, no fight with connectivity. The technology met people where their hardware already was.

The third is trust, and this is the one outsiders miss. People trusted the operator's brand before they trusted the bank's. They had been buying airtime for years. The relationship existed. Money just rode on top of it.

## What this looks like from the engineering side

This is where my work begins, and where the romance ends.

A mobile money balance is a liability on someone's ledger. When a customer moves money from their bank account to their wallet, two systems that were never designed to talk have to agree on a single truth, in real time, over a network that drops. The hard part is never the happy path. It is the transaction that times out after the debit but before the credit. It is the duplicate request from a retrying client. It is the reconciliation at the end of the day that has to prove not one franc was created or lost.

Idempotency stops being a textbook word and becomes the thing that keeps you from double-crediting a customer when their phone loses signal mid-payment. Reconciliation stops being a chore and becomes the audit that protects both the bank and the operator from each other. You learn fast that in financial software, correct beats clever every single time.

Building under these constraints taught me something I now believe generally. Infrastructure follows constraints, not plans. The most resilient design is the one that fits the ground it runs on, not the one that looked best on a whiteboard in a city with fiber and reliable power.

## Where this goes

The next layer is already forming. The AfCFTA and regional integration push toward payments that cross borders, not just streets. That is a much harder problem. Different operators, different regulators under the BEAC, different currencies at the edges of the zone. The reconciliation question I described for one bank and one operator multiplies.

I think the teams that solve it will be the ones who understood the first leap. Mobile money did not win because it was sophisticated. It won because it fit. Whatever comes next has to clear the same bar.

That is the lens I bring to all of it. Build for the ground you actually stand on.
