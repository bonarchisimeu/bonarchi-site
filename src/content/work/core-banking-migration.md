---
title: "Migrating a legacy core banking module without downtime"
summary: "Moving a critical ledger component off an aging system while it kept processing live transactions — staged cutover, dual-write, and a rollback plan that actually worked."
role: "Software engineer"
stack: ["Java", "SQL", "CI/CD"]
year: 2024
impact: "TODO: add a concrete result (e.g. zero downtime, X transactions migrated)"
order: 2
draft: true
---

> Starter template. Keep it anonymized. Fill in your voice, set `draft: false`,
> then delete this note.

## Context

A core banking module had to move off a legacy system that was becoming a
liability. The catch: it could not stop. A bank's ledger does not get a
maintenance window measured in hours.

## What I built

<!-- TODO: the staged approach. Dual-write? Shadow reads? How did you validate
     parity before the cutover? What was the rollback trigger? -->

## Impact

<!-- TODO: outcome. Downtime avoided, records migrated, defects caught pre-cutover. -->

## What I took from it

<!-- TODO: the reflection. Risk management under constraints — the leadership angle. -->
