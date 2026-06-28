---
title: Programmable Assurance Vocabulary
description: The canonical language of the Programmable Assurance discipline — Level 1 foundational concepts and Level 2 category concepts.
---

This page defines the canonical vocabulary of the Programmable Assurance discipline.

Terms are organized into two levels. Level 1 covers foundational beliefs and problems. Level 2 covers how the discipline operates. Implementation-specific terminology belongs to individual implementations, not the discipline.

---

## Level 1 — Foundational Concepts

The beliefs and problems that Programmable Assurance is built to address.

---

### The Alignment Principle

**Intent should align with outcomes.**

The foundational belief of Programmable Assurance. Organizations should be able to continuously verify that what they intend is reflected in what actually happens.

Analogous to:
- Zero Trust: *"Never trust, always verify."*
- Infrastructure as Code: *"Treat infrastructure like software."*
- Programmable Assurance: *"Intent should align with outcomes."*

---

### The Intent-Reality Gap

The gap between organizational intent and operational reality. The core problem Programmable Assurance exists to close.

**Example:** An MFA policy is written and published to a policy portal. An identity platform enforces authentication. Those two systems have no awareness of each other. The policy existed. The enforcement existed. The gap between them — unverified, unrecorded, unaccountable — is where the breach lives.

Every governance failure lives in the Intent-Reality Gap.

---

### Governance Fragmentation

The structural condition in which the systems that define, enforce, and audit governance have no shared awareness, accountability, or evidence layer.

Governance Fragmentation is the cause of the Intent-Reality Gap. The Intent-Reality Gap is the symptom. Governance Fragmentation is the disease.

**Distinction:** The Intent-Reality Gap describes *what happens* when governance fails. Governance Fragmentation describes *why* it happens.

**Example:** Intent lives in SharePoint. Policy lives in Azure Policy. Enforcement lives in Entra ID. Evidence lives in Azure Monitor. None of those systems know what the others have decided.

---

### The Governability Boundary

The boundary between what governance can influence and what it cannot.

Programmable Assurance governs organizational decisions, systems, responses, evidence, and accountability structures — not human free will.

A harassment incident cannot be prevented by software. But the investigation workflow, the evidence chain, the accountability record, and the organizational response absolutely can be governed.

---

## Level 2 — Category Concepts

How Programmable Assurance operates as a discipline.

---

### The Four Principles

The behavioral requirements for any system implementing Programmable Assurance:

1. **Intent must be executable** — Governance that exists only as a document is aspiration, not governance.
2. **Enforcement must be continuous** — Annual audits measure the past. Governance must run at the speed of change.
3. **Every decision must be accountable** — Named person, named policy, named date. Always.
4. **Outcomes must feed back into intent** — Governance that does not learn eventually becomes wrong.

See [Four Principles](/principles) for the full treatment.

---

### Executable Governance

Governance that can actively influence, constrain, verify, or record the behavior it governs. The opposite of governance that exists only as documentation.

Governance becomes executable when intent is translated into a form that can run at the moment a relevant decision occurs — not months later during an audit.

---

### Continuous Enforcement

Governance that operates at every relevant decision point rather than periodically. Transforms audits from discovery events into confirmation events.

When enforcement is continuous, an auditor confirms what the system already knows. When enforcement is periodic, an auditor discovers what the system missed.

---

### Accountable Decision

A governance decision attributed to a named person, a named policy, and a named date. Cannot be anonymous. Cannot be reconstructed from memory later.

The accountability record connects intent to decision to outcome. Without it, governance becomes theater. With it, governance becomes defensible.

---

### The Assurance Feedback Loop

The mechanism through which observed outcomes continuously inform and refine governance intent. Prevents governance drift.

```
Intent
  ↓
Governance Decision
  ↓
Operational Outcome
  ↓
Observation
  ↓
Feedback
  ↓
Refined Intent
  ↓
[loop continues]
```

---

### Governance Drift

The condition in which organizational reality has diverged from governance intent without detection. Caused by the absence of the Assurance Feedback Loop.

Governance drift is not a failure of enforcement. It is a failure of feedback. Controls can be enforced correctly while governance intent drifts away from organizational reality.

---

### Governance Translation

The rendering of a single governance event in the language of every affected stakeholder simultaneously.

The same governance decision carries different meaning for different audiences:

- Exit code for a developer
- Financial exposure for a budget owner
- Audit artifact for a CISO
- Risk acceptance record for a board

Governance Translation ensures each audience receives the information they need to act — in the form they can act on.

---

### Governance Economics

The financial translation of governance gaps and decisions into quantifiable organizational exposure.

```
Control violation    →  $3.4M HIPAA exposure
Missing coverage     →  $850K–$7.25M aggregate risk
Override decision    →  Documented liability acceptance
```

Governance Economics makes the cost of governance visible — and the cost of governance failure undeniable.

---

### Technical Risk

Risk produced by infrastructure findings, measured 0–100. Aggregated from open ingress rules, unencrypted databases, public storage, cost overruns, and similar findings.

**Critical distinction:** A deployment can have Technical Risk of 0 and Governance Risk of Critical simultaneously. These are separate dimensions.

---

### Governance Risk

Risk produced by policy intent and organizational obligations — independent of technical findings.

A governance denial at Technical Risk 0 means a governance condition failed, not that infrastructure is misconfigured. The infrastructure may be technically sound while still violating an organizational governance obligation.

---

### The Intent-Reality Gap Cycle

The recurring pattern by which governance systems reproduce the Intent-Reality Gap when they lack the Assurance Feedback Loop:

```
Policy written
  ↓
Control implemented separately
  ↓
Audit completed periodically
  ↓
Gap discovered after the fact
  ↓
Incident or breach
  ↓
[cycle repeats]
```

Programmable Assurance breaks this cycle.

---

### Governance Communication Artifact

A governance decision that carries with it not just the rule and the result, but the full context: the reason the policy exists, the obligation it satisfies, the financial consequence of the decision, the owner accountable for it, and the authorized path forward.

A governance communication artifact does not just block or allow. It communicates — carrying intent from the policy author to the engineer to the auditor to the board, in each stakeholder's language.

---

*Implementation-specific vocabulary — Verdict, Sentinel, Compass, Forge, the Two-Plane Doctrine, and other ObsidianWall concepts — lives at [obsidianwall.dev/concepts/vocabulary](https://obsidianwall.dev/concepts/vocabulary).*