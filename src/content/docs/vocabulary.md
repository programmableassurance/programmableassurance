---
title: Programmable Assurance Vocabulary
description: The canonical language of the Programmable Assurance discipline — foundational beliefs, core ontology, and behavioral concepts.
---

This page defines the canonical vocabulary of the Programmable Assurance discipline.

The vocabulary is organized into three levels.

- **Level 1** establishes the foundational beliefs and problems.
- **Level 2** defines the core ontology of the discipline.
- **Level 3** defines the behavioral concepts that emerge from applying Programmable Assurance.

Implementation-specific terminology belongs to individual implementations, not the discipline.

---

# Level 1 — Foundational Concepts

The beliefs and problems that Programmable Assurance is built to address.

---

## The Alignment Principle

**Intent should align with outcomes.**

The foundational belief of Programmable Assurance. Organizations should be able to continuously verify that what they intend is reflected in what actually happens.

Analogous to:

- Zero Trust: *"Never trust, always verify."*
- Infrastructure as Code: *"Treat infrastructure like software."*
- Programmable Assurance: *"Intent should align with outcomes."*

---

## The Intent-Reality Gap

The gap between organizational intent and operational reality.

The core problem Programmable Assurance exists to close.

**Example**

An MFA policy is written and published to a policy portal. An identity platform enforces authentication.

Those two systems have no awareness of each other.

The policy existed.

The enforcement existed.

The gap between them—unverified, unrecorded, and unaccountable—is where the breach lives.

Every governance failure lives in the Intent-Reality Gap.

---

## Governance Fragmentation

The structural condition in which the systems that define, enforce, observe, and audit governance have no shared awareness, accountability, or evidence layer.

Governance Fragmentation is the cause of the Intent-Reality Gap.

The Intent-Reality Gap is the symptom.

Governance Fragmentation is the disease.

**Example**

Intent lives in SharePoint.

Policy lives in Azure Policy.

Enforcement lives in Entra ID.

Evidence lives in Azure Monitor.

None of those systems know what the others have decided.

---

## The Governability Boundary

The boundary between what governance can influence and what it cannot.

Programmable Assurance governs organizational decisions, systems, responses, evidence, and accountability structures—not human free will.

A harassment incident cannot be prevented by software.

The investigation workflow, evidence chain, accountability record, and organizational response absolutely can.

---

# Level 2 — Core Ontology

The canonical objects that exist inside every implementation of Programmable Assurance.

---

## Governance Intent

The organizational objective, obligation, policy, standard, or principle that expresses how decisions should be made.

Governance intent exists independently of implementation technology.

It may originate from:

- Regulations
- Corporate policy
- Security standards
- Legal obligations
- Business objectives

---

## Governance Decision

The atomic unit of governance.

A Governance Decision records whether a governed action is:

- Allowed
- Denied
- Approved
- Overridden
- Escalated
- Risk Accepted

together with the intent, evidence, accountability, and context that produced it.

Unlike a policy evaluation or audit log, a Governance Decision is a durable governance artifact.

---

## Governance Outcome

The observed operational result produced by a Governance Decision.

Examples include:

- Deployment completed
- Deployment denied
- Exception approved
- Risk accepted
- Policy violated
- Incident occurred

Governance Outcomes determine whether organizational reality remained aligned with governance intent.

---

## Governance Evidence

The evidence supporting or produced by a Governance Decision.

Evidence may include:

- Infrastructure state
- Deployment artifacts
- Policy evaluations
- Audit logs
- Approval records
- Cryptographic attestations

Governance Evidence allows governance decisions to be independently verified.

---

## Governance Artifact

Any durable object produced by governance execution.

Examples include:

- Governance Decisions
- Approval records
- Override records
- Evidence bundles
- Governance reports

Governance Artifacts become the historical memory of governance.

---

## Governance Runtime

The environment in which executable governance continuously evaluates organizational decisions.

Unlike a traditional policy engine, a Governance Runtime produces:

- Decisions
- Evidence
- Accountability
- Observations

---

## Governance Compiler

The process that transforms governance intent into executable governance behavior.

A Governance Compiler translates policies, standards, regulations, or business obligations into executable governance logic.

It separates governance authorship from governance execution.

---

## Governance Telemetry

Continuous observations describing how governance behaves over time.

Unlike security telemetry, Governance Telemetry measures the health of governance itself.

Examples include:

- Decision latency
- Override frequency
- Policy evaluation frequency
- Governance drift
- Exception trends
- Control effectiveness

Governance Telemetry feeds the Assurance Feedback Loop.

---

## Governance Observation

The continuous collection of governance outcomes after decisions occur.

Observation differs from enforcement.

Enforcement determines what should happen.

Observation determines what actually happened.

Observation provides the data required for continuous alignment.

---

## Governance Feedback

Information derived from Governance Observations that modifies future Governance Intent.

Feedback closes the Assurance Feedback Loop.

Without feedback, governance eventually drifts from organizational reality.

---

# Level 3 — Behavioral Concepts

The behaviors that emerge when governance becomes programmable.

---

## The Four Principles

Every implementation of Programmable Assurance satisfies four behavioral requirements:

1. **Intent must be executable**
2. **Enforcement must be continuous**
3. **Every decision must be accountable**
4. **Outcomes must feed back into intent**

See [Four Principles](/principles) for the complete treatment.

---

## Executable Governance

Governance capable of influencing, constraining, verifying, or recording behavior at the moment a relevant decision occurs.

Governance becomes executable when intent is translated into a form that can run—not months later during an audit.

---

## Continuous Enforcement

Governance operating continuously rather than periodically.

When enforcement is continuous, audits confirm what the system already knows.

When enforcement is periodic, audits discover what the system missed.

---

## The Assurance Feedback Loop

The mechanism through which observed outcomes continuously refine governance intent.

```text
Intent
    ↓
Governance Decision
    ↓
Governance Outcome
    ↓
Governance Observation
    ↓
Governance Feedback
    ↓
Refined Intent
    ↓
[loop continues]
````

---

## Governance Drift

The condition in which organizational reality diverges from governance intent without detection.

Governance Drift is caused by missing or ineffective feedback.

Controls may be functioning perfectly while governance itself drifts away from organizational reality.

---

## Governance Translation

The rendering of one governance event in the language of every affected stakeholder simultaneously.

The same Governance Decision may become:

* Exit code for a developer
* Financial exposure for a budget owner
* Audit artifact for a CISO
* Liability record for legal counsel
* Governance summary for a board

Governance Translation ensures every stakeholder receives the information they need—in the language they understand.

---

## Governance Economics

The financial translation of governance gaps and governance decisions into measurable organizational exposure.

Examples include:

```text
Control violation   →  $3.4M HIPAA exposure

Missing coverage    →  $850K regulatory exposure

Risk acceptance     →  Documented financial liability
```

Governance Economics makes governance visible to executive leadership.

---

## Technical Risk

Risk produced by infrastructure findings.

Technical Risk measures infrastructure posture.

It does **not** measure governance posture.

---

## Governance Risk

Risk produced by governance intent and organizational obligations.

A deployment may have Technical Risk of **0** while Governance Risk remains **Critical**.

These are independent dimensions.

---

## The Intent-Reality Gap Cycle

The recurring pattern by which traditional governance reproduces misalignment.

```text
Policy written
      ↓
Control implemented separately
      ↓
Audit completed periodically
      ↓
Gap discovered
      ↓
Incident
      ↓
[cycle repeats]
```

Programmable Assurance exists to break this cycle.

---

## Governance Communication Artifact

A Governance Decision carrying not only the outcome, but also:

* Governing intent
* Policy rationale
* Accountability
* Evidence
* Financial consequence
* Authorized path forward

A Governance Communication Artifact does not merely allow or deny.

It communicates governance across technical, operational, financial, legal, and executive audiences simultaneously.

---

*Implementation-specific vocabulary—including Verdict, Sentinel, Compass, Forge, and other ObsidianWall concepts—lives on [ObsidianWall documentation](https://obsidianwall.dev/concepts/vocabulary).*
