---
title: Implementations
description: Platforms and tools implementing Programmable Assurance. Programmable Assurance is an open discipline — ObsidianWall is the first known implementation, not the definition of the discipline itself.
---

:::note[Discipline vs. implementation]
**Programmable Assurance is a discipline. ObsidianWall is an implementation of it. These are not the same thing.**

The discipline exists independently of any single platform. Any tool, framework, or platform can implement Programmable Assurance. ObsidianWall is the first known commercial implementation.
:::

Programmable Assurance is an open discipline. Any platform, tool, or framework can implement it.

This page lists known implementations.

---

## Commercial Implementations

### ObsidianWall

**The first platform implementing Programmable Assurance.**

ObsidianWall starts in the infrastructure domain — pre-deployment governance for Terraform and CloudFormation — with a roadmap extending governance intelligence, economics, and authoring across the full platform.

| Component | Status | Description |
|-----------|--------|-------------|
| Verdict | Live — v0.5.0 | Pre-deployment governance decision engine |
| Sentinel | Live — v0.5.0 | Post-deployment reality observation |
| Compass | Q4 2026 | Governance intelligence and economics |
| Forge | 2027 | Governance authoring with human-gated AI |

**How ObsidianWall implements the four principles:**

- **Intent must be executable** — Verdict evaluates governance policies as executable conditions before infrastructure deploys
- **Enforcement must be continuous** — Sentinel verifies post-deployment state stays aligned with what was authorized
- **Every decision must be accountable** — Every evaluation produces an immutable audit artifact attributed to a named policy and role
- **Outcomes must feed back into intent** — Compass (Q4 2026) closes the feedback loop with governance intelligence and economics

[obsidianwall.com →](https://obsidianwall.com) · [obsidianwall.dev →](https://obsidianwall.dev)

---

## Open Source Implementations

*None listed yet. [Submit a pull request](https://github.com/programmableassurance/org) to add yours.*

---

## Research Implementations

*None listed yet. [Submit a pull request](https://github.com/programmableassurance/org) to add yours.*

---

## Add an Implementation

If you are building a platform, tool, or framework that implements Programmable Assurance, open a pull request to add it here.

Requirements for listing:
- Implements at least two of the four principles
- Has public documentation
- Is available for others to use or evaluate

[GitHub →](https://github.com/programmableassurance/org)