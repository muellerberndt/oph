import { cp, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '..', 'dist');
const indexHtml = path.join(distDir, 'index.html');

const routes = [
  'hints',
  'no-objective-reality',
  'the-screen',
  'axioms',
  'entropy',
  'entanglement-geometry',
  'lorentz',
  'modular-flow',
  'gravity',
  'de-sitter',
  'dark-matter',
  'classical-physics',
  'quantum-mechanics',
  'entanglement',
  'error-correction',
  'gauge-symmetry',
  'standard-model',
  'masses',
  'neutrinos',
  'unification',
  'qft-emerges',
  'consensus-protocol',
  'screen-microphysics',
  'predictions',
  'synthesis',
  'glossary',
  'resources',
];

const routeMeta = {
  hints: {
    title: 'Five Experimental Hints That Reality Is Not What It Seems | OPH Lab',
    description:
      'Review the experimental and conceptual clues that motivate Observer Patch Holography as a deeper account of physical reality.',
  },
  'no-objective-reality': {
    title: 'Observer-Local Reality | An Operational OPH Starting Point | OPH Lab',
    description:
      'Explore the operational OPH starting point: physical descriptions are observer-local records, without treating that modeling choice as a proof of a final ontology.',
  },
  'the-screen': {
    title: 'The Holographic Screen | OPH Carrier and Spacetime Boundary | OPH Lab',
    description:
      'Learn how OPH models bounded self-reading patches on a holographic carrier and separates exact finite structure from the open spacetime attachment.',
  },
  axioms: {
    title: 'The Three Axioms of Observer Patch Holography | OPH Lab',
    description:
      'See the three core OPH axioms and the named interfaces that support the conditional derivation program.',
  },
  entropy: {
    title: 'Entropy & the Holographic Principle - From Bits to Black Holes | OPH Lab',
    description:
      'Follow the entropy and area-bound intuition that connects finite information capacity to holographic physics.',
  },
  'entanglement-geometry': {
    title: 'Entanglement and the Geometry Reconstruction Branch | OPH Lab',
    description:
      'Understand how entanglement structure enters the conditional OPH geometry-reconstruction branch and where physical attachment remains open.',
  },
  lorentz: {
    title: 'Lorentz Kinematics on the OPH Screen and BW Branch | OPH Lab',
    description:
      'Study the OPH route from screen-local consistency to Lorentz symmetry and relativistic structure.',
  },
  'modular-flow': {
    title: 'Modular Flow on the OPH BW Branch | OPH Lab',
    description:
      'See how modular flow enters the explicit Bisognano-Wichmann branch without promoting the branch assumptions into unconditional results.',
  },
  gravity: {
    title: 'Conditional Gravity Branch from Entanglement and Null-Modular Data | OPH Lab',
    description:
      'Trace the conditional OPH gravity branch from generalized entropy and null-modular data to the Jacobson-type Einstein relation.',
  },
  'de-sitter': {
    title: 'Cosmic Capacity Closure Boundary - de Sitter Space in OPH | OPH Lab',
    description:
      'Explore the OPH cosmic-capacity closure boundary, the bounded generation-register counterfamily, the non-evaluable direct N closure, and two conditional reserve candidates.',
  },
  'dark-matter': {
    title: 'Dark-Sector Continuation | MOND and Rotation-Curve Benchmark | OPH Lab',
    description:
      'Review the OPH discussion of dark-matter-style phenomena, galaxy rotation curves, and MOND-like behavior.',
  },
  'classical-physics': {
    title: 'Classical Limits of the Conditional OPH Gravity Branch | OPH Lab',
    description:
      'Follow the classical limits of the conditional OPH gravity branch and the open thermodynamic, dimension, clock, and cosmological attachments.',
  },
  'quantum-mechanics': {
    title: 'Quantum Mechanics in OPH | Algebraic Boundary and Record Probabilities | OPH Lab',
    description:
      'Inspect the OPH quantum-algebraic basis: quantum mechanics is the algebraic information language used by the reconstruction program.',
  },
  entanglement: {
    title: 'Bell\'s Theorem and Quantum Entanglement | Interactive Lesson | OPH Lab',
    description:
      'Use the entanglement lesson to connect Bell-style correlations and the OPH observer-consistency story.',
  },
  'error-correction': {
    title: 'Quantum Error Correction on the OPH Recovery Branch | OPH Lab',
    description:
      'Learn how quantum error correction ideas fit into the OPH account of spacetime and holography.',
  },
  'gauge-symmetry': {
    title: 'Gauge Reconstruction from Patch Gluing | OPH Lab',
    description:
      'See how gauge symmetry is framed as a gluing phenomenon in the OPH reconstruction.',
  },
  'standard-model': {
    title: 'Standard Model Structure | Exact Results and Open Physical Attachments | OPH Lab',
    description:
      'Review the OPH route toward Standard Model structure as emergent effective physics and its connection to the Standard Model unified with gravity search route.',
  },
  masses: {
    title: 'Matter-Sector Continuations | OPH Lab',
    description:
      'Review the OPH discussion of downstream matter-sector continuations and coupling structure.',
  },
  neutrinos: {
    title: 'Neutrino Audit - Rejected Weighted-Cycle Candidate | OPH Lab',
    description:
      'Audit the rejected target-informed OPH weighted-cycle neutrino candidate, its NuFIT 6.1 correlated-profile failure, and the source, basis, Takagi, and ordering gates required before any physical prediction.',
  },
  unification: {
    title: 'Coupling-Unification Continuation | OPH | OPH Lab',
    description:
      'Inspect the coupling-unification lesson and the OPH account of apparent grand-unification patterns, Standard Model plus gravity, and broader physics unification.',
  },
  'qft-emerges': {
    title: 'QFT Reconstruction Boundary | OPH Lab',
    description:
      'Inspect the structural QFT precursors and the open nonperturbative observable, locality, positivity, continuum, and physical-field receipts.',
  },
  'consensus-protocol': {
    title: 'Reality as a Consensus Protocol - Overlap Repair, Normal Form, and Records | OPH Lab',
    description:
      'Explore OPH as observer-based fixed-point consensus: overlap repair, Lyapunov descent, schedule-independent normal form, controlled coarse-graining, holonomy obstructions, and record stability.',
  },
  'screen-microphysics': {
    title: 'Federated Echosahedral Screen Microphysics in OPH | OPH Lab',
    description:
      'Inspect the federated patch-carrier architecture used by OPH to model records, measurement, checkpoint/restoration, public hardware evidence, and observer synchronization.',
  },
  predictions: {
    title: 'Predictions and Pressure Tests - OPH Empirical Surface | OPH Lab',
    description:
      'Review the OPH pressure-test surface, separating public quantitative rows from continuation-level signatures and open phenomenology.',
  },
  synthesis: {
    title: 'OPH Synthesis | Closure Targets, Branches, and Continuation Lanes | OPH Lab',
    description:
      'See how OPH connects exact finite results, declared branch conditions, exploratory receipts, and open physical attachments without collapsing their status.',
  },
  glossary: {
    title: 'Quantum Gravity & Holography Glossary - Key Terms Explained | OPH Lab',
    description:
      'Use the OPH Lab glossary for concise definitions of the core holography, gravity, and quantum-information terms.',
  },
  resources: {
    title: 'Further Reading | OPH Papers, Book, Challenge, and Study Resources | OPH Lab',
    description:
      'Find the current OPH paper stack, guided Learn chapters, book, simulator receipts, challenge, and supporting technical resources.',
  },
};

function applyRouteMeta(html, canonicalUrl, meta) {
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`)
    .replace(/<meta name="title" content="[^"]*" \/>/, `<meta name="title" content="${meta.title}" />`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${meta.description}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonicalUrl}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonicalUrl}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${meta.title}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${meta.description}" />`)
    .replace(/<meta name="twitter:url" content="[^"]*" \/>/, `<meta name="twitter:url" content="${canonicalUrl}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${meta.title}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${meta.description}" />`)
    .replace('"url": "https://oph-lab.floatingpragma.io/"', `"url": "${canonicalUrl}"`);
}

const rootHtml = await readFile(indexHtml, 'utf8');

for (const route of routes) {
  const routeDir = path.join(distDir, route);
  const routeIndexHtml = path.join(routeDir, 'index.html');
  const canonicalUrl = `https://oph-lab.floatingpragma.io/${route}/`;
  const meta = routeMeta[route];

  await mkdir(routeDir, { recursive: true });
  await cp(indexHtml, routeIndexHtml);
  await writeFile(routeIndexHtml, applyRouteMeta(rootHtml, canonicalUrl, meta));
}
