---
title: History of Programmable Assurance
description: Programmable Assurance did not appear out of nowhere. It is the natural continuation of decades of progress in governance, risk, and control theory.
sidebar:
  order: 5
---

Programmable Assurance did not appear out of nowhere.

It is the next step in a progression that has been underway for sixty years — each era solving the governance problems created by the previous era's technological advances.

Understanding that progression is the fastest way to understand why Programmable Assurance exists and why it arrives now.

---

## 1960s — Control Theory

**The problem being solved:** How do complex systems maintain stable, predictable behavior?

**The insight:** Norbert Wiener's cybernetics established that self-regulating systems require feedback loops. A thermostat is not just an enforcer — it observes outcomes and adjusts. Without feedback, any system drifts from its intended state.

**What this gave us:** The conceptual foundation. Governance is a control system. Intent is the setpoint. Outcomes are the measurement. The feedback loop is what keeps them aligned.

**What was missing:** No one had applied this thinking to organizational governance. The feedback loop existed in engineering. It did not yet exist in how organizations governed their own decisions.

---

## 1970s–1980s — IT Governance Frameworks

**The problem being solved:** Organizations were adopting computers rapidly. How do you govern technology investments and risk at an institutional level?

**The insight:** COBIT (1996), ITIL (1989), and ISO standards emerged to provide structured frameworks for IT governance. Organizations needed repeatable processes for managing technology decisions.

**What this gave us:** The vocabulary of governance — controls, policies, risk assessment, audit trails. The idea that technology decisions require formal governance structures.

**What was missing:** Governance remained document-driven and retrospective. Frameworks defined what should happen. They had no mechanism for ensuring it did. The audit happened months after the deployment.

---

## 1990s — GRC (Governance, Risk, and Compliance)

**The problem being solved:** Regulatory pressure (Sarbanes-Oxley, HIPAA, Basel II) required organizations to demonstrate compliance formally. Governance needed to produce evidence.

**The insight:** GRC platforms emerged to track policies, controls, and compliance evidence in one place. Organizations could finally see their governance posture holistically.

**What this gave us:** Centralized governance records. The ability to demonstrate compliance to auditors. Risk registers. Control libraries.

**What was missing:** GRC systems observed the past. They documented what had happened. They did not prevent what was about to happen. The gap between intent and outcome remained — GRC just made it more visible after the fact.

---

## 2000s — Identity Governance

**The problem being solved:** Identity had become the new perimeter. Who has access to what, and why, became a primary governance concern.

**The insight:** Identity governance platforms (IGA) emerged to manage access rights, certifications, and entitlements at scale. Access decisions needed to be governed, not just granted.

**What this gave us:** Governance of identity decisions specifically. Entitlement reviews. Access certification. Separation of duties.

**What was missing:** Identity governance still operated in silos. The access decision lived in one system. The policy that justified it lived in another. The business intent behind it lived nowhere.

---

## 2010s — Infrastructure as Code and Policy-as-Code

**The problem being solved:** Infrastructure was becoming software. If infrastructure could be defined as code, could the policies governing it also be code?

**The insight:** Tools like Terraform, OPA, Checkov, and HashiCorp Sentinel enabled infrastructure and policy to be expressed as executable logic. Governance could now run in pipelines.

**What this gave us:** Executable controls. Pre-deployment policy evaluation. Infrastructure governance at the speed of CI/CD.

**What was missing:** Policy-as-Code solved enforcement. It did not solve accountability. It did not close the feedback loop. It did not translate decisions across audiences. It did not connect enforcement to business intent. A DENY was a DENY — with no explanation of why the policy existed, what business obligation it satisfied, or what the financial consequence of bypassing it was.

The engineer still saw friction, not alignment.

---

## 2020s — Platform Engineering and AI Governance

**The problem being solved:** Two simultaneous pressures. First: engineering organizations needed internal platforms that made governance invisible to developers. Second: AI systems introduced new governance obligations with no established tooling.

**The insight:** Platform engineering embedded governance into developer workflows. AI governance frameworks (NIST AI RMF, EU AI Act) established that AI systems require continuous oversight, not just pre-deployment checks.

**What this gave us:** Developer-native governance surfaces. The recognition that governance must travel with the systems it governs — not live separately in compliance portals.

**What was missing:** Still no closed loop. Organizations could enforce and observe. They could not continuously align. Intent lived in one place, enforcement in another, evidence in a third, and accountability in no one's hands.

The fundamental problem from 1960s control theory remained unsolved in organizational governance: **the feedback loop was missing**.

---

## 2026 — Programmable Assurance

**The problem being solved:** Organizations define intent in one place, execute it somewhere else, measure it somewhere else, and explain it nowhere. The gap between governance intent and governance outcomes is where every breach, every compliance failure, and every accountability crisis lives.

**The insight:** Governance must be executable, continuous, accountable, and closed-loop — regardless of topology, regardless of domain, regardless of whether the governed thing is a Terraform plan, a procurement approval, or a board-level risk acceptance.

**What this gives us:**

```
Intent              carried into the control
Enforcement         before execution, not after
Accountability      named, dated, attributed
Evidence            immutable, portable
Feedback            outcomes refine intent
Economics           financial translation for every audience
```

**The continuity:** Programmable Assurance inherits everything that came before — control theory's feedback loop, GRC's vocabulary, Policy-as-Code's executability, platform engineering's developer-native approach — and assembles them into a complete governance operating model.

It is not a revolution. It is a completion.

---

## The Through-Line

Every era solved the governance problem created by the previous era's advances:

- IT created governance requirements → IT Governance emerged
- Regulation created compliance requirements → GRC emerged
- Identity scale created access chaos → Identity Governance emerged
- Infrastructure as code created policy gaps → Policy-as-Code emerged
- AI and platform scale created alignment gaps → Programmable Assurance emerges

Each step was inevitable given what preceded it.

**The common failure across every era:** systems that governed what had already happened without continuously aligning what was about to happen with what was intended.

Programmable Assurance closes that loop.

---

*Further reading: [What Is Programmable Assurance?](/definition) · [Four Principles](/principles) · [Vocabulary](/vocabulary)*
