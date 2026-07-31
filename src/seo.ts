import { WALKTHROUGH_STEPS } from './routes/walkthrough';

export type SeoMeta = {
  title: string;
  description: string;
};

const DEFAULT_DESCRIPTION =
  'Interactive guide to OPH across quantum gravity, Standard Model structure, observation, the audited cosmic-capacity closure boundary, the Higgs hierarchy, and screen microphysics.';

const DEFAULT_TITLE = 'OPH Lab | Declared OPH Paper Surface';
const SITE_SUFFIX = ' | OPH Lab';

const ROUTE_DESCRIPTIONS: Record<string, string> = {
  '/': 'Explore the OPH reconstruction: observer patches, relativity, gravity, Standard Model structure, the non-identifying direct N family, conditional reserve candidates, and the Higgs hierarchy bridge.',
  '/hints': 'Review the experimental and conceptual clues that motivate Observer Patch Holography as a deeper account of physical reality.',
  '/no-objective-reality': 'Explore the argument that physics should be built from observer-local descriptions instead of a single objective frame.',
  '/the-screen': 'Learn how OPH models reality on a holographic screen, uses local patches to recover spacetime structure, and reads the S0 to S3 sphere ladder as a role map.',
  '/axioms': 'See the three OPH axioms, the declared sector completions with open physical status, and the technical-premise ledger used by the declared papers.',
  '/entropy': 'Follow the entropy and area-bound intuition that connects finite information capacity to holographic physics.',
  '/entanglement-geometry': 'Understand how entanglement structure gives rise to geometry in the OPH reconstruction program.',
  '/lorentz': 'Study the OPH route from screen-local consistency to Lorentz symmetry and relativistic structure.',
  '/modular-flow': 'See how modular flow enters the explicit BW branch of the declared OPH gravity route.',
  '/gravity': 'Trace the conditional OPH gravity branch from generalized entropy and null-modular data to the Jacobson-type Einstein relation.',
  '/de-sitter': 'Explore the OPH cosmic-capacity closure boundary, the non-identifying direct source family, two conditional reserve candidates, and their retrospective Planck comparison.',
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
  '/predictions': 'Review the cumulative zero-parameter OPH reconstruction, quantitative rows, distinctive signal templates, sharp null expectations, and the prospective falsification boundary.',
  '/synthesis': 'See how OPH ties local closure to a separately stated self-reference principle, a non-identifying direct N family, conditional cosmological bridges, and the structural, particle, consensus, and observer surfaces.',
  '/glossary': 'Use the OPH Lab glossary for concise definitions of the core holography, gravity, and quantum-information terms.',
  '/resources': 'Find the OPH paper stack, HTML summaries, book, blog, Standard Model and conditional cosmological-capacity pages, coherence map, applications, demos, challenge, and supporting reading.',
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
