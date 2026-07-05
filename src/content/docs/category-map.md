---
title: Category Map
description: How Programmable Assurance relates to GRC, Policy-as-Code, Zero Trust, Platform Engineering, and adjacent disciplines.
sidebar:
  order: 1
---

The most common question about Programmable Assurance is: how is this different from X?

This page answers that question for each adjacent discipline.

---

## Programmable Assurance and Adjacent Disciplines

Programmable Assurance is not a replacement for 
the disciplines below. It is the behavioral model 
that connects them — making their controls 
executable, their decisions accountable, and their 
outcomes connected back to the intent that 
produced them.

![Programmable Assurance category map](/pa-category-map.svg)


---

## The Short Answer

Programmable Assurance is not a replacement for any of the disciplines below.

It is the **behavioral model** that connects them — making their controls executable, their decisions accountable, and their outcomes connected back to the intent that produced them.

```
GRC defines what governance should be.
Policy-as-Code makes some of it executable.
Zero Trust applies it to identity and network.
Platform Engineering embeds it in developer workflows.

Programmable Assurance asks:
  Is any of it continuous?
  Is any of it accountable?
  Does any of it close the feedback loop?
```

---

## Programmable Assurance vs GRC

**GRC (Governance, Risk, and Compliance)**

| | GRC | Programmable Assurance |
|--|-----|------------------------|
| Primary question | Are we compliant? | Is intent aligned with outcomes? |
| Enforcement timing | Retrospective audit | Pre-execution, continuous |
| Decision format | Pass/fail audit finding | Typed governance decision |
| Accountability | Control owner in a spreadsheet | Named person, named policy, named date |
| Feedback loop | Annual review cycle | Continuous observation |
| Audience | Compliance and audit teams | Developer, CISO, board, auditor simultaneously |

**Relationship:** GRC defines the policies and control frameworks. Programmable Assurance makes them continuously enforceable and closes the loop between policy intent and operational reality.

GRC tells you what the rules are. Programmable Assurance ensures the rules are operating.

---

## Programmable Assurance vs Policy-as-Code

**Policy-as-Code (OPA, Sentinel, Checkov, Kyverno)**

| | Policy-as-Code | Programmable Assurance |
|--|----------------|------------------------|
| Primary question | Did the rule pass? | Should this happen, and who is accountable? |
| Output | true / false | Typed governance decision with attribution |
| Business context | None | Intent and obligation carried into the decision |
| Audience | Engineers | Developers, CISOs, budget owners, boards, auditors |
| Evidence | CI/CD log | Immutable audit artifact |
| Feedback loop | None | Outcomes refine intent |

**Relationship:** Policy-as-Code solves enforcement. Programmable Assurance solves governance — which includes enforcement, accountability, evidence, and feedback.

Policy-as-Code is a component inside a Programmable Assurance implementation. It is not the same thing.

---

## Programmable Assurance vs Zero Trust

**Zero Trust**

| | Zero Trust | Programmable Assurance |
|--|------------|------------------------|
| Domain | Identity, network, access | Any governance domain |
| Core argument | Topology (never trust, always verify) | Behavioral (intent must align with outcomes) |
| Primary question | Should this request be trusted? | Should this decision happen, and does it align with intent? |
| Scope | Network and identity | Infrastructure, compliance, finance, HR, legal, AI |

**Relationship:** Zero Trust is a security architecture philosophy applied to network and identity. Programmable Assurance is a governance discipline applied to organizational decision-making.

Zero Trust asks: who should be trusted?  
Programmable Assurance asks: is what is happening what was intended?

Both are behavioral arguments, not topology arguments. They are complementary.

---

## Programmable Assurance vs Platform Engineering

**Platform Engineering**

| | Platform Engineering | Programmable Assurance |
|--|---------------------|------------------------|
| Primary goal | Developer experience and velocity | Governance intent aligned with outcomes |
| Focus | Reducing cognitive load for engineers | Making governance behavior correct |
| Governance role | Embedding controls into developer workflows | Ensuring those controls are accountable and closed-loop |
| Audience | Engineering teams | All organizational stakeholders |

**Relationship:** Platform Engineering is the delivery mechanism. Programmable Assurance is the governance model.

A platform engineering team that embeds Programmable Assurance into their internal developer platform is implementing both simultaneously. The platform delivers the experience. The governance model ensures the controls embedded in that platform are executable, continuous, accountable, and closed-loop.

---

## Programmable Assurance vs DevSecOps

**DevSecOps**

| | DevSecOps | Programmable Assurance |
|--|-----------|------------------------|
| Primary goal | Shift security left in the SDLC | Align governance intent with outcomes across all domains |
| Scope | Software development lifecycle | Any organizational governance domain |
| Accountability model | Security team reviews PR | Every decision attributed to named person and policy |
| Feedback | Shift left catches issues earlier | Outcomes feed back into intent continuously |

**Relationship:** DevSecOps is a practice for embedding security into software delivery. Programmable Assurance is the broader governance discipline that DevSecOps partially implements for the security domain.

---

## Programmable Assurance vs AI Governance

**AI Governance (NIST AI RMF, EU AI Act)**

| | AI Governance Frameworks | Programmable Assurance |
|--|--------------------------|------------------------|
| Scope | AI systems specifically | Any governed domain |
| Format | Framework and guideline | Behavioral discipline |
| Enforcement | Manual review processes | Continuous, executable |
| Accountability | Organizational roles | Named decision attribution |

**Relationship:** AI governance frameworks define what responsible AI requires. Programmable Assurance provides the behavioral model for making those requirements continuously enforceable — not just documented.

Programmable Assurance applied to AI governance means AI workload controls are executable before deployment, observable after deployment, and accountable when overridden.

---

## The Positioning Map

Where each discipline sits on two dimensions — when governance runs and how it is expressed:

```
                           Retrospective
                                ▲
                                │
                    GRC         ●
                                │
                                │
                                │
                                │         Policy-as-Code
                                │                ●
                                │
                                │
                                │                        Programmable
                                │                        Assurance ●
                                ▼
                           Continuous
          Document-driven ─────────────────────────────► Executable
```

GRC is document-driven and retrospective — it defines what governance should look like and measures compliance after the fact.

Policy-as-Code moved governance into the executable column — rules run automatically — but remained point-in-time. It checks once at deployment and goes silent.

Programmable Assurance sits in the continuous, executable quadrant. Executable because intent is expressed as code that runs. Continuous because it runs at every relevant decision point, not just once.

---

*[What Is Programmable Assurance?](/definition) · [The Manifesto](/manifesto) · [Vocabulary](/vocabulary)*
