---
title: Four Principles of Programmable Assurance
description: The behavioral requirements for any governance system implementing Programmable Assurance.
---

These four principles define how governance must behave in any system implementing Programmable Assurance. They are topology-agnostic — they apply regardless of whether governance is centralized, distributed, or federated.

---

## Principle 1 — Intent Must Be Executable

Governance that exists only as a document is aspiration, not governance.

Intent becomes governance when it can **influence, constrain, verify, or record** the behavior it governs — before consequences occur, not after.

**What this means in practice:**

For a security policy: a condition that evaluates before a deployment executes.

For a procurement policy: an approval gate at the point of the expense decision.

For a board-level risk decision: a signed ledger entry recording who accepted the risk, when, and what the quantified exposure was.

The form changes. The requirement does not.

**What fails this principle:**

- Policies stored in SharePoint that no enforcement system reads
- Controls that exist in documentation but have no execution point
- Governance that only activates during annual audits

---

## Principle 2 — Enforcement Must Be Continuous

Annual audits measure the past. They do not prevent what happens next.

By the time an auditor reviews a control, the violation has already occurred. The breach has already happened. The bill has already arrived.

Continuous enforcement means governance runs **at every relevant decision point** — not periodically at audit time.

**What this means in practice:**

Snapshot audits should confirm what the system already knows — not discover what it missed.

**What fails this principle:**

- Quarterly compliance reviews as the primary enforcement mechanism
- Controls that are checked once at deployment and never verified again
- Governance that only runs when someone manually initiates a review

---

## Principle 3 — Every Decision Must Be Accountable

Anonymous governance is not governance.

Every governance decision must be **attributed to a named person, a named policy, and a named date**. Accountability cannot be reconstructed from memory years later. It must be recorded at the moment the decision is made.

**What this means in practice:**

- Every allow requires a record of what policy authorized it
- Every deny requires a record of what condition failed
- Every override requires a named person with named authority
- Every risk acceptance requires a named executive with the financial exposure quantified

**What fails this principle:**

- Risk acceptance communicated by email that disappears into inboxes
- Override approvals with no attribution record
- Governance decisions that exist only as institutional memory

---

## Principle 4 — Outcomes Must Feed Back Into Intent

Governance that does not learn eventually becomes wrong.

Organizations change. Risk profiles shift. Regulations update. Business priorities evolve. A governance system that cannot observe its own outcomes has no mechanism for knowing when its assumptions no longer match reality.

The feedback loop is what separates governance that compounds from governance that stagnates.

**What this means in practice:**

- When policies generate consistent overrides, that is a signal to refine intent
- When coverage gaps emerge, that is a signal to strengthen controls
- When financial exposure patterns shift, that is a signal to update governance economics

**What fails this principle:**

- Policies written once and never reviewed
- Controls that drift from the intent that created them
- Governance programs with no mechanism to observe their own effectiveness

---

## The Complete Loop

```
Intent expressed (Principle 1)
       ↓
Continuously enforced (Principle 2)
       ↓
Decision recorded and attributed (Principle 3)
       ↓
Outcome observed and fed back (Principle 4)
       ↓
Intent refined
       ↓
[loop continues]
```

A system that implements all four is implementing Programmable Assurance.

A system that implements only some is implementing enforcement — not assurance.

---

*[Read the definition →](/definition) · [Explore the vocabulary →](/vocabulary)*