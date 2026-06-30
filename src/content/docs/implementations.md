---
title: Implementations
description: Platforms and tools implementing Programmable Assurance. Programmable Assurance is an open discipline — ObsidianWall is the first known implementation, not the definition of the discipline itself.
---

:::note[Discipline vs. implementation]
**Programmable Assurance is a discipline. ObsidianWall is an implementation of it. These are not the same thing.**

The discipline exists independently of any single platform. Any tool, framework, or platform can implement Programmable Assurance. ObsidianWall is the first known commercial implementation.
:::

Programmable Assurance is an open discipline. Any platform, tool, or framework can implement it — but listing here is reviewed, not automatic. See [Submitting an Implementation](#submitting-an-implementation) below.

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

*None listed yet.*

---

## Research Implementations

*None listed yet.*

---

## What Qualifies as an Implementation

Listing on this page is not self-service. A tool is not "implementing Programmable Assurance" simply because it claims to — it must demonstrate the principles with public, inspectable evidence.

Two tiers:

**Compatible with Programmable Assurance** — Demonstrably implements at least one of the four principles, with public documentation or code showing the actual mechanism (not just a marketing claim).

**Implements Programmable Assurance** — Demonstrably implements all four principles, each with verifiable evidence:

1. **Intent must be executable** — show the executable policy format
2. **Enforcement must be continuous** — show it runs at decision-time, not only in periodic audits
3. **Every decision must be accountable** — show the audit artifact or attribution record structure
4. **Outcomes must feed back into intent** — show the feedback mechanism connecting observed outcomes back to policy

Most existing Policy-as-Code and GRC tools will qualify for the first tier but not the second — that is expected. The second tier is intentionally a higher bar.

---

## Submitting an Implementation

Every submission is reviewed before listing. There is no automatic process.

To submit:

1. Email <a href="mailto:hello&#64;programmableassurance&#46;org">the team</a> with your tool name, public documentation link, and — for each principle you believe your tool satisfies — a specific link to the documentation or code showing the mechanism, not just a description.
2. The submission is reviewed against the criteria above.
3. If approved, you'll be listed at the appropriate tier with a short summary, in the style of the ObsidianWall entry above.
4. Listings may be revisited or removed if the evidence becomes stale or no longer accurate — this is not a permanent badge.

You can also open an issue at the [programmableassurance GitHub organization](https://github.com/programmableassurance/programmableassurance) if you prefer.