export type ExactBundleRow = {
    label: string;
    value: string;
    note: string;
};

export type ExactBundleSection = {
    id: string;
    title: string;
    scope: string;
    note: string;
    rows: ExactBundleRow[];
};

export const LANDING_AUDIT_NOTES = [
    'The landing page exposes a certified root of the declared incomplete P map, the Lambda-located capacity comparison coordinate, and the selected no-G scale certificate.',
    'The measured-endpoint hierarchy coordinate and source-forward common-load coordinate are distinct. The source-forward value is 6.6166% above the Planck base-LambdaCDM comparison. A conditional finite-presence factor moves it to 0.6287% below that comparison; a separate Poisson branch lands 0.3880% below it.',
    'The target was exposed and the tested formula menu was dense. Neither reserve comparison is a prediction or a source-selected cosmic capacity.',
    'The particle surface includes a two-modulus quark source-spread obstruction, an exact same-family charged witness, the source-only Higgs/top split theorem, and a neutrino audit that rejects the target-informed weighted-cycle candidate.',
    'The gravity-side bundle uses the scale-certificate Newton readout with Lambda, de Sitter, and a0 displays evaluated at the Lambda-located capacity coordinate.',
];

export const LANDING_SCOPE_NOTES = [
    'The first screen is a status dashboard. Its incomplete-map and comparison coordinates carry no physical prediction status.',
    'Off-point controls on later pages are formula-sensitivity diagnostics and stay separate from certified branch claims.',
];

export const EXACT_BUNDLE_SECTIONS: ExactBundleSection[] = [
    {
        id: 'structural-bosonic',
        title: 'Structural Zeros And Bosonic Diagnostics',
        scope: 'Structural exactness + calibration / compare-only charts',
        note: 'The massless rows are structural. The W/Z pair is compare-only. The strict-one-loop pole-map algebra is now checked, but its complete OPH/FJ input packet and physical evidence receipts have not been supplied.',
        rows: [
            { label: 'Photon', value: '0 GeV', note: 'Structural zero.' },
            { label: 'Gluon', value: '0 GeV', note: 'Structural zero.' },
            { label: 'Graviton', value: '0 GeV', note: 'Structural zero.' },
            { label: 'W boson comparison coordinate', value: '80.377 GeV', note: 'The measured pair is consumed as input. The separate 80.330 GeV source chart has no pole-prediction status without the missing scheme map.' },
            { label: 'Z boson comparison coordinate', value: '91.18797809193725 GeV', note: 'The measured pair is consumed as input. The separate 91.119 GeV source chart has no pole-prediction status without the missing scheme map.' },
            { label: 'Higgs boson', value: '125.1995304097179 GeV', note: 'Exact source-only split theorem. The pair consumed its measured targets; audit witness, not an output row.' },
            { label: 'Top quark', value: '172.35235532883115 GeV', note: 'Exact split companion on the declared electroweak surface; consumed its measured target, and not a separate source-only quark-mass row.' },
        ],
    },
    {
        id: 'charged',
        title: 'Charged Same-Family Exact Witness',
        scope: 'Exact witness on current_family_only',
        note: 'The charged theorem lane is open from P, and the exact same-family witness is public and explicit.',
        rows: [
            { label: 'Electron', value: '0.00051099895 GeV', note: 'Exact same-family witness.' },
            { label: 'Muon', value: '0.1056583755 GeV', note: 'Exact same-family witness.' },
            { label: 'Tau', value: '1.7769324651340912 GeV', note: 'Exact same-family witness.' },
        ],
    },
    {
        id: 'quarks',
        title: 'Quark Source-Spread Obstruction',
        scope: 'Theorem-grade non-identifiability on the current source corpus',
        note: 'The source equations fix two ordered profile rays but leave their positive endpoint spans independent. Target audits mix renormalization conventions, and their GeV-valued matrices are mass textures rather than physical dimensionless Yukawa matrices.',
        rows: [
            { label: 'Up quark', value: 'withheld', note: 'Source spread is not identified; target audit uses MSbar at 2 GeV.' },
            { label: 'Charm quark', value: 'withheld', note: 'Source spread is not identified; target audit uses MSbar at self-scale.' },
            { label: 'Top quark', value: 'withheld', note: 'Separate pole extraction coordinate, not one common running-mass sextet.' },
            { label: 'Down quark', value: 'withheld', note: 'Source spread is not identified; target audit uses MSbar at 2 GeV.' },
            { label: 'Strange quark', value: 'withheld', note: 'Source spread is not identified; target audit uses MSbar at 2 GeV.' },
            { label: 'Bottom quark', value: 'withheld', note: 'Source spread is not identified; target audit uses MSbar at self-scale.' },
        ],
    },
    {
        id: 'neutrinos',
        title: 'Neutrino Rejection And Source-Closure Audit',
        scope: 'Exact isotropic no-go plus rejected target-informed weighted-cycle comparison candidate',
        note: 'No physical PMNS matrix, mass ordering, absolute family, or Majorana pair is emitted. A new candidate must close the source, charged-basis, Takagi, ordering, and no-target-leak gates.',
        rows: [
            { label: 'Isotropic ansatz', value: 'exact no-go', note: 'The spectral cap cannot reach the atmospheric splitting scale.' },
            { label: 'Weighted-cycle point', value: 'rejected', note: 'NuFIT 6.1 correlated-profile failure; target-informed template status.' },
            { label: 'Physical PMNS / ordering', value: 'not derived', note: 'Source operator and charged-basis placement remain open.' },
            { label: 'Absolute masses / Majorana phases', value: 'not emitted', note: 'Historical coordinates are diagnostics on the rejected base.' },
        ],
    },
];
