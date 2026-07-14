import { WALKTHROUGH_STEPS } from './routes/walkthrough';

export type SeoMeta = {
  title: string;
  description: string;
};

const DEFAULT_DESCRIPTION =
  'Interactive guide to OPH as zero-dial observer-based fixed-point consensus (zero quantitative inputs at the theory layer; working borrows counted in the scorecard), mapping the declared theorem surfaces across quantum gravity, Standard Model unified with gravity routes, the cosmological constant derivation, particles, records, and screen microphysics.';

const DEFAULT_TITLE = 'OPH Lab | Declared OPH Paper Surface';
const SITE_SUFFIX = ' | OPH Lab';

const ROUTE_DESCRIPTIONS: Record<string, string> = {
  '/': 'Explore the OPH zero-dial fixed-point surface (zero quantitative inputs at the theory layer; working borrows counted in the scorecard): inspect the pixel fixed point P, the screen-capacity fixed point N_CRC, the no-G scale certificate, gravity, de Sitter, the hierarchy bridge, Higgs/top, and tiered particle surfaces.',
  '/hints': 'Review the experimental and conceptual clues that motivate Observer Patch Holography as a deeper account of physical reality.',
  '/no-objective-reality': 'Explore the argument that physics should be built from observer-local descriptions instead of a single objective frame.',
  '/the-screen': 'Learn how OPH models reality on a holographic screen, uses local patches to recover spacetime structure, and reads the S0 to S3 sphere ladder as a role map.',
  '/axioms': 'See the five OPH axioms, including Minimal Admissible Realization as the selection axiom, together with the technical-premise ledger used by the declared papers.',
  '/entropy': 'Follow the entropy and area-bound intuition that connects finite information capacity to holographic physics.',
  '/entanglement-geometry': 'Understand how entanglement structure gives rise to geometry in the OPH reconstruction program.',
  '/lorentz': 'Study the OPH route from screen-local consistency to Lorentz symmetry and relativistic structure.',
  '/modular-flow': 'See how modular flow enters the explicit BW branch of the declared OPH gravity route.',
  '/gravity': 'Trace the conditional OPH gravity branch from generalized entropy and null-modular data to the Jacobson-type Einstein relation.',
  '/de-sitter': 'Explore the OPH treatment of de Sitter space, cosmological horizons, and the cosmological constant derivation as a screen-capacity branch with an input-free self-closure target.',
  '/dark-matter': 'Review the OPH discussion of dark-matter-style phenomena, galaxy rotation curves, and MOND-like behavior.',
  '/classical-physics': 'Follow how classical physics emerges as an effective description of deeper observer-patch dynamics.',
  '/quantum-mechanics': 'Inspect the OPH quantum-algebraic basis: quantum mechanics is the algebraic information language used by the reconstruction program.',
  '/entanglement': 'Use the entanglement lesson to connect Bell-style correlations and the OPH observer-consistency story.',
  '/error-correction': 'Learn how quantum error correction ideas fit into the OPH account of spacetime and holography.',
  '/gauge-symmetry': 'See how gauge symmetry is framed as a gluing phenomenon in the OPH reconstruction.',
  '/standard-model': 'Review the OPH route toward Standard Model structure as emergent effective physics and its connection to the Standard Model unified with gravity search route.',
  '/masses': 'Review the OPH matter-sector surface, including the capacity-electroweak hierarchy bridge, Higgs/top split, and downstream continuation lanes.',
  '/neutrinos': 'Audit the rejected target-informed OPH weighted-cycle neutrino candidate, its NuFIT 6.1 correlated-profile failure, basis and Takagi defects, and the source-closure gates required before any physical neutrino prediction.',
  '/unification': 'Inspect the coupling-unification lesson and the OPH account of apparent grand-unification patterns, Standard Model plus gravity, and broader physics unification.',
  '/qft-emerges': 'Follow the argument that quantum field theory is an effective layer emerging from deeper screen dynamics.',
  '/consensus-protocol': 'Explore OPH as observer-based fixed-point consensus: overlap repair, Lyapunov descent, schedule-independent normal form, controlled coarse-graining, holonomy obstructions, and record stability.',
  '/screen-microphysics': 'Inspect the federated patch-carrier architecture used by OPH to model records, measurement, checkpoint/restoration, public hardware evidence, and observer synchronization.',
  '/predictions': 'Review the OPH pressure-test surface, separating public quantitative rows from continuation-level signatures and open phenomenology.',
  '/synthesis': 'See how OPH ties the derivation chain together as a zero-dial closure program (zero quantitative inputs at the theory layer; working borrows counted in the scorecard) with two fixed-point constants, the hierarchy bridge, and downstream structural, particle, consensus, and observer surfaces.',
  '/glossary': 'Use the OPH Lab glossary for concise definitions of the core holography, gravity, and quantum-information terms.',
  '/resources': 'Find the six-paper OPH stack, HTML paper summaries, book, blog, search-entry pages for Standard Model unified with gravity and cosmological constant derivation, coherence map, applications page, extra demos, challenge, and supporting reading for deeper study of Observer Patch Holography.',
};

function normalizePathname(pathname: string): string {
  if (!pathname || pathname === '/') {
    return '/';
  }

  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

export function getSeoMeta(pathname: string): SeoMeta {
  const normalized = normalizePathname(pathname);
  const step = WALKTHROUGH_STEPS.find((item) => normalizePathname(item.to) === normalized);

  return {
    title: step ? `${step.seoTitle}${SITE_SUFFIX}` : DEFAULT_TITLE,
    description: ROUTE_DESCRIPTIONS[normalized] ?? DEFAULT_DESCRIPTION,
  };
}

export function getCanonicalUrl(pathname: string): string {
  const normalized = normalizePathname(pathname);

  if (normalized === '/') {
    return 'https://oph-lab.floatingpragma.io/';
  }

  return `https://oph-lab.floatingpragma.io${normalized}/`;
}
