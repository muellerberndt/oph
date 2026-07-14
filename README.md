# OPH Lab

Interactive explainer app for Observer Patch Holography.

Production URL: `https://oph-lab.floatingpragma.io/`

The lab is a reader-facing guide to the OPH paper stack. Its job is to explain the derivation routes, show where the recovered core stops, and keep public copy aligned with the paper surface. It is not a substitute for the papers, and it should not silently upgrade conditional or continuation results into unconditional theorem claims.

## Source Of Truth

Research status is controlled from the sibling `reverse-engineering-reality/` repo, especially:

- `paper/recovering_relativity_and_standard_model_structure_from_observer_overlap_consistency_compact.tex`
- `paper/deriving_the_particle_zoo_from_observer_consistency.tex`
- `paper/reality_as_consensus_protocol.tex`
- `paper/screen_microphysics_and_observer_synchronization.tex`
- `paper/tex_fragments/PAPER.tex`
- `paper/tex_fragments/TECHNICAL_SUPPLEMENT.tex`
- `code/particles/RESULTS_STATUS.md`
- `README.md`

When the paper status changes, update those sources first, then sync the OPH Lab copy.

## Paper Surface Summary

This section is the lab-maintainer summary of the public paper surface.

### Fixed-point and scale surface

- The landing page is a fixed-point dashboard, not a universe configurator.
- The two quantitative OPH constants are the local pixel fixed point
  `P = 1.630968209403959` and the cosmic record-capacity fixed point
  `N_CRC = 3.31e122`.
- The electroweak hierarchy bridge uses the exact bridge capacity
  `N_EW(P*) = 3.5323546226929907e122` and the representation-to-spectrum
  repair count `2(8 + 3 + 1) = 24`.
- `G_SI` comes from the selected no-G scale certificate. The Newton row must
  stay separate from variable P-slider diagnostics.
- Off-point controls in the app are formula-sensitivity diagnostics. They are
  separate from certified branch claims.

### Gravity / Lorentz branch

- Lorentz kinematics is recovered on the explicit BW geometric branch.
- The BW theorem surface is sharpened and stable at the automorphism level.
- The broader UV/BW internalization lane remains open.
- The remaining UV/BW scaffold is:
  - `canonical_scaling_cap_pair_realization_from_transported_cap_marginals`
  - `independent_bw_rigidity_on_realized_limit`
- The smallest lower blocker beneath the first object is:
  - `eventual_fixed_local_collar_common_floor_on_modular_transport_marginals`
- The OPH half-line generator is identified with the effective local null-stress charge on that same half-line family.
- What remains open downstream on the null/stress side is:
  - bounded-interval transport / projective branch
  - tensor reconstruction beyond the null-invisible metric ambiguity

### Gauge / Standard Model structural branch

- The compact gauge route to the realized Standard Model quotient
  `SU(3) x SU(2) x U(1) / Z_6` is part of the recovered structural core.
- The exact hypercharge lattice, realized color triplet `N_c = 3`, and
  generation count `N_g = 3` are on the paper-facing structural surface.
- The sharp exclusion on this surface is `no gauge-mediated proton decay`.

### Particle branch

- Structural exact zeros:
  - photon
  - gluons
  - graviton
- Electroweak:
  - `W/Z` are closed public rows on the electroweak repair surface.
- Higgs/top:
  - public rows are carried by the source-only Higgs/top split surface
  - the exact inverse pair is a check sidecar
  - the selected exact branch solves the electroweak hierarchy/naturality
    problem with `epsilon_H = 0`, using the finite readback certificate,
    the 24-count repair lock, and the exact global-capacity bridge
- Charged leptons:
  - exact same-family readback is explicit
  - the icosahedral screen supplies an exact `A5/C3` face-corner carrier
  - a target-informed continuation on that carrier gives
    `(0.510998950843, 105.658375501, 1776.930000014) MeV` with maximum
    residual `0.000300 ppm` against rounded fields on one hybrid branch; the
    tau residual is `-1.387289 ppm` against the packet's higher-precision
    central value
  - the declared affine repair map is conditionally contractive with one fixed
    point, while source-multiplier witnesses leave that map unselected
  - an engineered digital CFQ model proves the stipulated packet is nonempty
    and supplies a fixed-cutoff central accepted/rejected record dilation
  - that model hard-codes its registers, automaton, signs, clock, and response;
    its historical no-target claim fails audit
  - a conditional nature/pole theorem transports the face response only after
    assuming the physical Yukawa identity and CFQ-to-Dyson singularity readout;
    its zero-self-energy kernel is a free witness, not the interacting kernel
  - physical source selection, attachment, phase and determinant laws,
    coherent source branch, cofinal refinement, and pole-mass scheme remain open
  - the face-incidence result is a completion conjecture, not a prediction
  - the theorem-grade source landing to physical charged masses remains open
- Quarks:
  - the source equations leave an exact free `(R_{>0})^2` spread fiber, so
    selected-frame descent does not emit either physical spread modulus
  - numeric quark rows remain withheld from the public surface
  - the target audit mixes light, heavy, and top mass conventions; its
    GeV-valued matrices are mass textures, not physical dimensionless Yukawas
- Neutrinos:
  - the isotropic neutrino-only ansatz has an exact no-go
  - the target-informed weighted-cycle point is rejected by the NuFIT 6.1
    correlated profile and remains a comparison record only
  - physical PMNS, ordering, absolute masses, and Majorana phases remain open
    behind source, basis, Takagi, ordering, and no-target-leak gates
- Hadrons:
  - production masses require a working OPH hadron backend and systematics

### Consensus branch

- Accepted local repairs lower the touched-overlap inconsistency potential `Phi`.
- On the finite patch net, that local-fit contract makes `Phi` a Lyapunov functional for accepted repair moves.
- Under repair completeness and quotient-compatible union-collar gluing, each fixed initial quotient state has a unique schedule-independent normal form.
- Same-source confluence does not by itself identify endpoints from different sources with the same boundary. That stronger statement requires the protected observation to identify the consistent quotient modulo the declared silent or gauge equivalence.
- Weak normalization supplies an endpoint; fairness, strong normalization, or another liveness argument is still needed to show that every allowed schedule settles.
- A unique extension need not be constructible by the declared local write support. Local repairability is a separate proof obligation.
- Global consistency is still obstructed by cycle / holonomy defects. Pairwise overlap agreement alone is not enough.
- Gauge-invariant uniqueness belongs on the quotient, not on raw microscopic representatives.
- The standalone mathematical companion
  [Observation-Determined Normal Forms](https://github.com/FloatingPragma/observer-patch-holography/blob/main/extra/observable_normal_forms.pdf)
  develops these distinctions without importing OPH-specific assumptions into the paper.

### Screen microphysics branch

- The lab should treat the federated patch-carrier architecture as a first-class public surface, not a side note.
- The microphysics paper carries:
  - echosahedral multi-port patch carriers
  - toroidal local recurrence channels
  - \(A_5\)-icosahedral and \(E_8\)-type symmetry framing
  - explicit patch and overlap observables
  - record registers
  - public hardware-evidence rules
  - checkpoint / restoration machinery
  - observer synchronization as an operational protocol
- This is a fixed-cutoff reference architecture and simulator target. It does not claim unique final UV completion.
- The simulator must never be presented as an actual sphere. Sphere language names regulator geometry; the public carrier is a federated patch system.

## Lab Copy Rules

Use these rules whenever editing explainer text.

- Do not present Lorentz kinematics or Einstein recovery as unconditional outputs of the local axioms alone.
- Do not collapse the BW branch condition into generic statements like “modular flow is Lorentz boost” without the branch qualifier.
- Distinguish these public claim tiers explicitly:
  - recovered core
  - conditional branch
  - continuation lane
  - compare-only
  - open scaffold
- Do not describe compare-only exact-hit sidecars as public theorem rows.
- Do not describe continuation-level phenomenology templates as recovered-core predictions.
- Do not use release-note phrasing in public research summaries.
- Prefer “paper surface”, “explicit BW branch”, “continuation-only sidecar”, and “compare-only” where applicable.

## Highest-Priority Drift Points

These are the common places where public copy tends to overstate the paper claims.

- Home / landing summary:
  - keep the first screen as a fixed-point dashboard
  - avoid free-constant language
  - keep `G_SI` tied to the no-G scale certificate
  - mark any off-point slider as a sensitivity diagnostic
- Modular-flow / Lorentz pages:
  - keep the BW branch qualifier explicit
  - avoid unconditional `K_C = 2 pi B_C`
- Gravity / Einstein pages:
  - avoid “Einstein closure” wording
  - keep the null/stress remaining boundary explicit
- Axioms / synthesis pages:
  - separate local axioms from bridge assumptions and open scaffold objects
- Particle / masses / predictions pages:
  - keep `W/Z` on the public electroweak repair surface
  - keep Higgs/top on the source-only split surface plus the inverse check sidecar
  - keep the hierarchy/naturality claim scoped to the selected exact branch with
    the 24-tick repair lock and exact capacity bridge
  - keep charged, quark, and neutrino lanes labeled by their declared claim tiers
  - keep the quark `(R_{>0})^2` source-spread obstruction separate from the
    mixed-scheme target audit and physical-Yukawa normalization blocker
  - do not publish the six target-anchored quark coordinates as OPH mass rows
  - keep hadrons tied to the missing OPH hadron backend
  - keep GW comb / discrete Hawking / deep-IR galaxy-response language separated by claim tier
- Consensus / microphysics pages:
  - do not demote them to flavor text beneath the gravity and QFT chains
  - keep the fixed-point, holonomy, record, and synchronization language explicit

## Development

Install:

```bash
npm ci
```

Local dev server:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

Deploy:

```bash
npm run deploy
```

The app uses `gh-pages -d dist` for deployment.

## License And Patent Policy

OPH Lab is a public OPH surface and links back to the canonical OPH repository
license and anti-patent covenant:

- https://github.com/FloatingPragma/observer-patch-holography/blob/main/LICENSE
- https://github.com/FloatingPragma/observer-patch-holography/blob/main/PATENTS.md
