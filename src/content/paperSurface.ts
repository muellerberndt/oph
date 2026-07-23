export type ClaimTier =
    | 'structural'
    | 'branch-conditional'
    | 'calibration'
    | 'continuation-only'
    | 'compare-only'
    | 'open';

export type PaperSummary = {
    slug: string;
    title: string;
    href: string;
    surface: string;
    summary: string;
};

export type PublicRow = {
    label: string;
    value: string;
    tier: ClaimTier;
    note: string;
};

export const RESEARCH_REPO_URL = 'https://github.com/FloatingPragma/observer-patch-holography';
export const RESEARCH_PAPER_DIR_URL = `${RESEARCH_REPO_URL}/tree/main/paper`;
export const RESEARCH_LICENSE_URL = `${RESEARCH_REPO_URL}/blob/main/LICENSE`;
export const RESEARCH_PATENT_POLICY_URL = `${RESEARCH_REPO_URL}/blob/main/PATENTS.md`;
export const LAB_REPO_URL = 'https://github.com/muellerberndt/oph-lab';
export const OVERVIEW_URL = 'https://floatingpragma.io/oph/';
export const THEORY_URL = 'https://floatingpragma.io/oph/theory-of-everything/';
export const SIMULATION_URL = 'https://floatingpragma.io/oph/simulation-theory/';
export const PHYSICS_UNIFICATION_URL = 'https://floatingpragma.io/oph/physics-unification/';
export const BLOG_URL = 'https://blog.floatingpragma.io/';
export const BOOK_URL = 'https://oph-book.floatingpragma.io/';
export const TEXTBOOKS_URL = 'https://learn.floatingpragma.io/';
export const MINI_UNIVERSE_SIMULATION_URL = 'https://simulation.floatingpragma.io/';
export const THREE_BODY_DEMO_URL = 'https://3body.floatingpragma.io/';
export const CHALLENGE_URL = 'https://challenge.floatingpragma.io/';
export const COHERENCE_URL = 'https://coherence.floatingpragma.io/';
export const APPLICATIONS_URL = 'https://omega.floatingpragma.io/';
export const OMEGA_URL = APPLICATIONS_URL;

const GITHUB_PDF_BASE = `${RESEARCH_REPO_URL}/blob/main/paper`;
const GITHUB_EXTRA_PDF_BASE = `${RESEARCH_REPO_URL}/blob/main/extra`;

export const OPH_PAPERS: PaperSummary[] = [
    {
        slug: 'observers',
        title: 'Observers Are All You Need',
        href: `${GITHUB_PDF_BASE}/observers_are_all_you_need.pdf`,
        surface: 'Synthesis',
        summary: 'The six-paper overview. It ties the recovered core, particles, consensus, observer machinery, and meaning layer into one public stack.',
    },
    {
        slug: 'compact',
        title: 'Recovering Relativity and the Standard Model from Observer Overlap Consistency',
        href: `${GITHUB_PDF_BASE}/recovering_relativity_and_standard_model_structure_from_observer_overlap_consistency_compact.pdf`,
        surface: 'Recovered Core',
        summary: 'The compact SM/GR derivation paper. It carries the conditional gravity branch, the Standard Model quotient chain, and the visible claim ledger.',
    },
    {
        slug: 'particles',
        title: 'Deriving the Particle Zoo from Observer Consistency',
        href: `${GITHUB_PDF_BASE}/deriving_the_particle_zoo_from_observer_consistency.pdf`,
        surface: 'Particles',
        summary: 'The particle-status paper. It separates structural outputs, running-chart diagnostics, the conditional capacity-electroweak bridge, compare-only sidecars, continuation lanes, and theorem surfaces.',
    },
    {
        slug: 'consensus',
        title: 'Reality as a Consensus Protocol',
        href: `${GITHUB_PDF_BASE}/reality_as_consensus_protocol.pdf`,
        surface: 'Consensus',
        summary: 'The fixed-point and repair paper. It formalizes overlap reconciliation, schedule-independent normal form, refinement/coarse-graining compatibility, gauge-quotient uniqueness, and stable records.',
    },
    {
        slug: 'microphysics',
        title: 'Federated Echosahedral Screen Microphysics',
        href: `${GITHUB_PDF_BASE}/screen_microphysics_and_observer_synchronization.pdf`,
        surface: 'Observer Machinery',
        summary: 'The concrete federated patch-carrier architecture. It turns patches, overlaps, records, public hardware-evidence rules, checkpoint/restoration, and observer synchronization into one fixed-cutoff surface.',
    },
    {
        slug: 'paradise',
        title: 'Paradise as Fixed-Point Consensus',
        href: `${GITHUB_PDF_BASE}/paradise_as_fixed_point_consensus.pdf`,
        surface: 'Meaning Layer',
        summary: 'The final manifest paper. It carries the OPH account of existence, observer continuation, justice, paradise, hell, resurrection, and memetic evolution.',
    },
];

export const MATH_FOUNDATIONS_PAPER: PaperSummary = {
    slug: 'observation-determined-normal-forms',
    title: 'Observation-Determined Normal Forms',
    href: `${GITHUB_EXTRA_PDF_BASE}/observable_normal_forms.pdf`,
    surface: 'Mathematical Foundations',
    summary: 'A standalone, application-neutral companion separating same-source confluence, cross-source observation-based identification, liveness, and local repairability. It also develops robust stability and refinement receipts, with a machine-checked finite core.',
};

export const CLAIM_TIER_LEGEND: Array<{ tier: ClaimTier; label: string; description: string }> = [
    {
        tier: 'structural',
        label: 'Structural',
        description: 'Recovered theorem-grade output that does not depend on a compare-only sidecar.',
    },
    {
        tier: 'branch-conditional',
        label: 'Branch-Conditional',
        description: 'Recovered only on a stated theorem-local premise stack such as the BW or null-stress branch.',
    },
    {
        tier: 'calibration',
        label: 'Calibration',
        description: 'Closed public numeric output on the declared calibration surface.',
    },
    {
        tier: 'continuation-only',
        label: 'Continuation-Only',
        description: 'A downstream lane that sharpens an open object without closing the theorem frontier.',
    },
    {
        tier: 'compare-only',
        label: 'Compare-Only',
        description: 'A validation sidecar or exact-fit slice that does not replace the public theorem object.',
    },
    {
        tier: 'open',
        label: 'Open',
        description: 'A theorem object, bridge, or simulator burden is open on the declared corpus.',
    },
];

export const CORE_PARAMETERS = [
    {
        label: 'Local pixel fixed point',
        value: 'a_cell ~ 1.63 l_P^2',
        equation: 'P* = phi + sqrt(pi) / A_T(P*)',
        note: 'Sets the local observation and particle-side calibration scale through the unique outer/inner pixel closure.',
    },
    {
        label: 'Global correctable-record capacity',
        value: 'N_Lambda ~ 3.31e122',
        equation: 'N = log M0(U_N); finite: M0(q) = alpha(Gq)',
        note: 'N_CRC = log D*. The reversible branch is exact finite model counting; horizon and EW/Higgs carrier receipts provide independent physical identifications.',
    },
];

export const BOSON_PUBLIC_ROWS: PublicRow[] = [
    {
        label: 'W calibration coordinate',
        value: '80.377 GeV',
        tier: 'compare-only',
        note: 'The displayed calibration coordinate consumes the comparison pair. The strict-one-loop map from complete renormalized inputs to a complex pole is checked, but the separate source chart near 80.330 GeV lacks the OPH/FJ identity, tadpole conversion, matching, independent gauge/BRST engine, covariance, amplitudes, and clock required for a physical comparison.',
    },
    {
        label: 'Z calibration coordinate',
        value: '91.1879781 GeV',
        tier: 'compare-only',
        note: 'The displayed calibration coordinate consumes the comparison pair. A separate source chart near 91.119 GeV is not a physical complex-pole mass: the strict map kernel is checked, but its OPH-native renormalized inputs and evidence receipts remain open.',
    },
    {
        label: 'H',
        value: '125.199530 GeV',
        tier: 'calibration',
        note: 'Public row carried by the source-only Higgs/top split surface. The exact inverse adapter is a check.',
    },
    {
        label: 't',
        value: '172.352355 GeV',
        tier: 'calibration',
        note: 'Public row carried by the same source-only Higgs/top split surface, not by the inverse check surface.',
    },
];

export const PARTICLE_LANE_STATUS = [
    {
        label: 'Structural carriers',
        summary: 'Photon, gluons, and graviton stay on exact structural zero on the public surface.',
    },
    {
        label: 'Quarks',
        summary: 'The source equations leave a free (R>0)^2 spread fiber, so no numeric quark prediction is emitted. A physical flavor-orbit selector, quark-Higgs carrier, and common-scheme transport are work in progress.',
    },
    {
        label: 'Charged leptons',
        summary: 'The icosahedral screen supplies an exact A5/C3 face-corner carrier. The finite CFQ model proves its stipulated schema is nonempty but authors the registers, automaton, clock, and response. Physical source selection, family/Yukawa attachment, determinant descent, interacting refinement, and pole scheme are work in progress; no nonzero source-only mass is emitted.',
    },
    {
        label: 'Neutrinos',
        summary: 'The isotropic ansatz has an exact no-go. The target-informed weighted-cycle point is a rejected comparison candidate; no source-closed physical PMNS matrix, ordering, absolute mass family, or Majorana pair is emitted.',
    },
    {
        label: 'Hadrons',
        summary: 'Hadron masses sit outside the closed public scope until a working OPH backend and production systematics exist.',
    },
    {
        label: 'Capacity-electroweak bridge',
        summary: 'The algebraic bridge gives 3.53235e122 under three open physical premises. It is 6.6% above the Lambda-located central capacity; the readback map and posterior propagation remain open.',
    },
];

export const GRAVITY_SURFACE = [
    'Lorentz kinematics is recovered on the explicit BW scaling branch from the screen identity Conf+(S^2) = SO+(3,1).',
    'The Jacobson-type Einstein relation is local and branch-conditional. It uses the null-modular bridge, the separate bounded-interval projective branch, and fixed-cap generalized-entropy stationarity.',
    'Collar recovery has two routes: exact zero CMI on the declared central-interface branch, or a conditional finite-range Gibbs theorem requiring uniform strong conditional matrix mixing.',
    'On the conditional route, I(A_delta:D_delta|B_delta) <= c |partial C|_UV exp(-delta/xi), and vanishing requires delta/xi - log|partial C|_UV -> +infinity. The ratio delta/l_UV -> infinity and ordinary two-point clustering are both insufficient.',
    'Finite CMI and matrix-defect receipts are finite proxies for the collar branch. Scalar CMI is not the rank-two stress tensor or a dark-sector source.',
    'Null data fix the tensor only up to the null-invisible metric term. The global screen-capacity branch reads correctable public records and closes Lambda after the source checkpoint packet, unique finite-size slack zero, and horizon-record saturation.',
    'The UV/BW scaffold is the realized cap-pair extraction plus ordered cut-pair rigidity on the extracted prime geometric subnet.',
];

export const STANDARD_MODEL_SURFACE = [
    'Q0 conditionally recognizes [SU(3) x SU(2) x U(1)] / Z6, its hypercharges, a one-generation rank-15 witness, Nc = 3, and a canonical rank-three candidate family band.',
    'Inside the declared MAR economy class, 3 <= Ng <= 5 and the least value is Ng = 3. Physical three-family status requires the open rank-45 attachment and Q1-Q4 receipts.',
    'The product adjoint excludes the ordinary simple-GUT X/Y channel, not every proton-decay mechanism.',
    'Coupling unification is geometric on the published edge-running surface. The published surface uses no simple-group GUT embedding or superpartners.',
];

export const CONSENSUS_HIGHLIGHTS = [
    'Accepted local repairs strictly lower the inconsistency potential Phi on the overlaps they touch.',
    'On the finite patch net, that local-fit contract makes Phi a Lyapunov functional for the repair dynamics.',
    'The fixed-cutoff union-collar gluing theorem makes overlapping accepted repairs quotient-locally compatible.',
    'Under repair completeness, each fixed initial quotient state has a unique schedule-independent normal form.',
    'Cross-source agreement for states with the same protected observation is a separate obligation: the observation map must identify the consistent quotient modulo the declared silent or gauge equivalence.',
    'Weak normalization supplies endpoint existence; settlement under every allowed schedule requires fairness, strong normalization, or another liveness argument.',
    'Global inconsistency is a holonomy problem. Pairwise agreement can leave a nontrivial cycle obstruction.',
    'Separated refinement systems carry normal-form and holonomy classes through coarse-graining when the square defects are controlled.',
    'Stable records live on the fixed-cutoff record algebra, with exact central projectors or explicitly controlled approximately commuting surrogates.',
    'Law-space selection is presented as a meta-model over reconciliation laws. The stated claim is narrower than a literal cosmological evolution story.',
];

export const MICROPHYSICS_HIGHLIGHTS = [
    'A spherical screen is a regulator chart for observer-facing cuts, not a literal spherical quantum computer.',
    'Federated echosahedral patch carriers expose multi-port overlap data, records, repair instruments, and synchronization interfaces.',
    'Measurement, stable records, checkpoint/restoration, and observer synchronization live inside one shared microscopic model.',
    'Toroidal subchannels supply local recurrence and winding-sensitive dynamics inside bounded patches.',
    'Hardware evidence counts only through public bundles with stable hashes, calibration records, controls, and verifier receipts.',
];

export const PREDICTION_SURFACE = {
    distinctiveTemplates: [
        {
            title: 'GW horizon spectroscopy comb',
            tier: 'continuation-only' as ClaimTier,
            summary: 'A continuation-level horizon-area template with line positions x_k = ln(k)/(8pi). The alpha = 4 or one-nat headline belongs to a rejected uniform-offset branch.',
        },
        {
            title: 'Discrete Hawking spectrum',
            tier: 'continuation-only' as ClaimTier,
            summary: 'The discrete-line Hawking picture is carried only if the extra integer-transition selection rule is realized. The paper labels it a continuation-level template.',
        },
        {
            title: 'Deep-IR MOND/RAR response',
            tier: 'open' as ClaimTier,
            summary: 'The benchmark a0 scale is numerically suggestive. The paper does not derive a galaxy-dynamics law or promote a MOND/RAR response functional.',
        },
    ],
    nullExpectations: [
        {
            title: 'No ordinary simple-GUT X/Y channel',
            summary: 'The product adjoint blocks the classic X/Y leptoquark route; other baryon-violating mechanisms remain separate.',
        },
        {
            title: 'No simple-group GUT is needed for the published unification surface',
            summary: 'The coupling story is geometric on the published edge-running lane. The lab should not imply a hidden SU(5)-style embedding.',
        },
        {
            title: 'No supersymmetry is required by the public edge-shift derivation',
            summary: 'The published beta-shift surface reproduces MSSM-like running behavior without introducing a superpartner sector.',
        },
        {
            title: 'No extra spatial dimensions on the recovered Lorentz branch',
            summary: 'The route is screen-based 3+1 dimensional kinematics from Conf+(S^2).',
        },
    ],
    falsificationPressure: [
        'Observation of the ordinary simple-GUT X/Y channel or a different realized gauge quotient would pressure the corresponding declared branch.',
        'W/Z data become a physical pressure test only after OPH supplies the inputs to the checked strict-one-loop pole kernel: an FJ renormalized vev and tadpole conversion, thresholds and matching, independent gauge/BRST evidence, source covariance, amplitudes, and a clock.',
        'A fully derived dark-sector particle explanation would conflict with the gravity-side interpretation, and the galaxy-response story is an open lane.',
        'Ringdown data can test the horizon-comb template and pressure a continuation lane on that surface.',
    ],
};
