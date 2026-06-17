---
title: "Mobile money integration for a core banking platform"
summary: "Connecting a bank's core ledger to the mobile money rails of a major Central African operator — reconciliation, idempotency, and failure handling under real network conditions."
role: "Backend engineer"
stack: ["Java", "PostgreSQL", "REST", "Message queues"]
year: 2025
impact: "TODO: add a concrete result (e.g. settlement time, error rate, volume)"
order: 1
draft: true
---

> Starter template. Anonymize anything confidential — "a Central African bank"
> and "a major operator" is enough. Fill the four sections below in your own
> voice, then set `draft: false`. Delete this note.

## Context

A bank needed its core ledger to talk to a mobile money operator so customers
could move funds between their bank account and their wallet. The hard part was
never the happy path — it was everything that happens when the network drops
mid-transaction.

## What I built

<!-- TODO: the actual design decisions. Idempotency keys? Reconciliation job?
     How did you guarantee no double-credit? What did you choose and why? -->

## Impact

<!-- TODO: a number or an outcome, even approximate. "Cut reconciliation breaks
     from X to Y", "handled Z transactions/day", etc. -->

## What I took from it

<!-- TODO: the reflection — this is the bridge to your leadership writing. -->
