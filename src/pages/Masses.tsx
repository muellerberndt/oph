import { useMemo } from 'react';
import { Explainer } from '../components/Explainer';
import { CLAIM_TIER_LEGEND, PARTICLE_LANE_STATUS } from '../content/paperSurface';
import {
    BETA_COEFFICIENTS_MSSM_LIKE,
    ELECTROWEAK_BRIDGE_CAPACITY_DISPLAY,
    PIXEL_REFERENCE,
    PIXEL_UI_MAX,
    PIXEL_UI_MIN,
    SCREEN_CAPACITY_REFERENCE_DISPLAY,
    deriveD11ForwardSeed,
    deriveTargetFreeElectroweakRepair,
    formatPixelConstant,
    solveGaugeClosure,
} from '../core/ophMath';
import { useLabSetting, useLabState } from '../state/labState';

const MASS_SURFACE_OPTIONS = {
    betaCoefficients: BETA_COEFFICIENTS_MSSM_LIKE,
    su2MaxJ: 30,
    su3MaxIndex: 14,
    alphaRange: { min: 0.015, max: 0.09, step: 0.0005 },
} as const;

type DynamicMassRow = {
    label: string;
    valueGeV: number;
    deltaGeV: number;
    tier: 'structural' | 'calibration' | 'compare-only';
    note: string;
};

function formatMass(value: number) {
    if (!Number.isFinite(value)) {
        return 'n/a';
    }
    if (value === 0) {
        return '0 GeV';
    }
    return `${value.toFixed(6)} GeV`;
}

function formatSignedMass(value: number) {
    if (!Number.isFinite(value)) {
        return 'n/a';
    }
    const prefix = value > 0 ? '+' : '';
    return `${prefix}${value.toFixed(6)} GeV`;
}

function formatScalar(value: number, digits = 6) {
    if (!Number.isFinite(value)) {
        return 'n/a';
    }
    return value.toFixed(digits);
}

function tierBorderColor(tier: DynamicMassRow['tier']) {
    if (tier === 'structural') return 'var(--accent-gold)';
    if (tier === 'compare-only') return 'var(--accent-cyan)';
    return 'var(--accent-green)';
}

export function MassesPage() {
    const [pixelConstant, setPixelConstant] = useLabSetting('masses.pixelConstant');
    const { resetKeys } = useLabState();

    const gaugeCore = useMemo(
        () => solveGaugeClosure(pixelConstant, MASS_SURFACE_OPTIONS),
        [pixelConstant]
    );
    const canonicalGaugeCore = useMemo(
        () => solveGaugeClosure(PIXEL_REFERENCE, MASS_SURFACE_OPTIONS),
        []
    );

    const electroweakRepair = useMemo(
        () => deriveTargetFreeElectroweakRepair(gaugeCore),
        [gaugeCore]
    );
    const canonicalElectroweakRepair = useMemo(
        () => deriveTargetFreeElectroweakRepair(canonicalGaugeCore),
        [canonicalGaugeCore]
    );

    const higgsTop = useMemo(
        () => deriveD11ForwardSeed(electroweakRepair),
        [electroweakRepair]
    );
    const canonicalHiggsTop = useMemo(
        () => deriveD11ForwardSeed(canonicalElectroweakRepair),
        [canonicalElectroweakRepair]
    );

    const dynamicRows = useMemo<DynamicMassRow[]>(
        () => [
            {
                label: 'photon',
                valueGeV: 0,
                deltaGeV: 0,
                tier: 'structural',
                note: 'Structural massless carrier on the realized electromagnetic branch. This row is symmetry-protected and does not move with P.',
            },
            {
                label: 'gluons',
                valueGeV: 0,
                deltaGeV: 0,
                tier: 'structural',
                note: 'Structural massless color carriers. Confinement changes free-particle observability, not the structural zero on this lane.',
            },
            {
                label: 'graviton',
                valueGeV: 0,
                deltaGeV: 0,
                tier: 'structural',
                note: 'Structural spin-2 zero on the OPH dynamical-metric branch. The P slider does not alter that exact structural statement.',
            },
            {
                label: 'W running chart',
                valueGeV: electroweakRepair.mWGeV,
                deltaGeV: electroweakRepair.mWGeV - canonicalElectroweakRepair.mWGeV,
                tier: 'compare-only',
                note: 'Running-chart coordinate. A physical W comparison requires a renormalized vev and tadpole convention, thresholds, matching, and complex-pole conversion.',
            },
            {
                label: 'Z running chart',
                valueGeV: electroweakRepair.mZGeV,
                deltaGeV: electroweakRepair.mZGeV - canonicalElectroweakRepair.mZGeV,
                tier: 'compare-only',
                note: 'Companion running-chart coordinate. Experimental Breit-Wigner and complex-pole masses are different observables, so no pull is defined on this surface.',
            },
            {
                label: 'H',
                valueGeV: higgsTop.mHGeV,
                deltaGeV: higgsTop.mHGeV - canonicalHiggsTop.mHGeV,
                tier: 'calibration',
                note: 'Public Higgs row from the source-only Higgs/top split surface fed by the same electroweak source basis.',
            },
            {
                label: 't',
                valueGeV: higgsTop.mtPoleGeV,
                deltaGeV: higgsTop.mtPoleGeV - canonicalHiggsTop.mtPoleGeV,
                tier: 'calibration',
                note: 'Companion top row from the same source-only Higgs/top split surface.',
            },
        ],
        [canonicalElectroweakRepair.mWGeV, canonicalElectroweakRepair.mZGeV, canonicalHiggsTop.mHGeV, canonicalHiggsTop.mtPoleGeV, electroweakRepair.mWGeV, electroweakRepair.mZGeV, higgsTop.mHGeV, higgsTop.mtPoleGeV]
    );

    return (
        <div>
            <div className="section-header">
                <span className="section-tag qft">Chain 2: QFT</span>
                <h1 style={{ fontSize: '1.5rem', margin: 0 }}>Matter Continuations</h1>
            </div>

            <p style={{ marginBottom: '16px' }}>
                This page separates structural outputs, calibration rows, diagnostic charts, and work-in-progress
                physical source laws.
            </p>

            <div className="card" style={{ marginBottom: '16px', borderLeft: '3px solid var(--accent-gold)' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '0.95em' }}>Structural, calibration, and chart surfaces</h3>
                <p style={{ margin: '0 0 10px 0' }}>
                    The compact-gauge/MAR branch yields the Standard Model gauge quotient, exact hypercharges,
                    N<sub>c</sub> = 3, and N<sub>g</sub> = 3. Its finite A<sub>5</sub> coefficient theorem is exact
                    under the unit-split and selector premises; physical current and global-form descent carry separate receipts.
                </p>
                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                    W/Z carry running-chart status and no physical pole-mass status. Their strict-one-loop pole-map
                    kernel is checked, while the OPH/FJ renormalized input, tadpole conversion, thresholds, matching,
                    independent gauge/BRST evidence, covariance, amplitudes, and clock are missing. Higgs/top sit
                    on the source-only Higgs/top split surface, and the inverse pair is a check surface.
                    The canonical published bosonic surface uses P = {formatPixelConstant(PIXEL_REFERENCE)}. The
                    sensitivity panel below moves the source coordinate away from that certified fixed point and reports
                    the formula response as a diagnostic.
                </p>
            </div>

            <div className="card" style={{ marginBottom: '16px' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '0.95em' }}>Open matter-sector lanes</h3>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.8', margin: 0, color: 'var(--text-secondary)' }}>
                    <li><strong>Quarks:</strong> the source equations leave a free (R<sub>&gt;0</sub>)<sup>2</sup> spread fiber, so no numeric quark prediction is emitted. The flavor-orbit selector, quark-Higgs carrier, and common-scheme transport are work in progress.</li>
                    <li><strong>Charged leptons:</strong> the icosahedral screen gives an exact A<sub>5</sub>/C<sub>3</sub> face-corner carrier. The finite CFQ model proves its stipulated schema is nonempty but authors the registers, automaton, clock, and response. Physical source selection, family/Yukawa attachment, determinant descent, interacting refinement, and pole scheme are work in progress; no nonzero source-only mass is emitted.</li>
                    <li><strong>Neutrinos:</strong> the isotropic ansatz has an exact no-go. The target-informed weighted-cycle point is rejected by the NuFIT 6.1 correlated profile and has no physical PMNS, ordering, absolute-mass, or Majorana prediction status.</li>
                    <li><strong>Hadrons:</strong> production masses sit outside the closed public scope until a working OPH hadron backend and systematics exist.</li>
                </ul>
            </div>

            <div className="card" style={{ marginBottom: '16px', borderLeft: '3px solid var(--accent-purple)' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '0.95em' }}>Capacity-electroweak bridge</h3>
                <p style={{ margin: '0 0 10px 0' }}>
                    The hierarchy bridge reads the weak scale as
                    v/E<sub>cell</sub> = (N<sub>EW</sub>/pi)<sup>-P*/12</sup>. On the conditional bridge branch,
                    N<sub>EW</sub> = {ELECTROWEAK_BRIDGE_CAPACITY_DISPLAY}.
                </p>
                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                    The Lambda-located capacity is {SCREEN_CAPACITY_REFERENCE_DISPLAY}. The bridge value is about
                    6.6% higher at central value. The common electroweak load carrier, source checkpoint packet,
                    unique slack zero, and propagation of the joint cosmological posterior determine whether this is
                    one common capacity; until then it is a conditional comparison rather than a contradiction.
                </p>
            </div>

            <div className="demo-container">
                <div className="demo-label">Diagnostic Bosonic Surface Around P*</div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '14px' }}>
                    <button
                        className="btn btn-ghost"
                        style={{ fontSize: '0.72em', padding: '4px 10px' }}
                        onClick={() => resetKeys(['masses.pixelConstant'])}
                    >
                        Reset P
                    </button>
                </div>

                <p style={{ marginTop: 0, marginBottom: '14px' }}>
                    P* = <strong>{formatPixelConstant(PIXEL_REFERENCE)}</strong> is the published fixed point. Moving
                    the slider evaluates the same bosonic formulas off that point. Treat the result as sensitivity data,
                    not as a generated branch of OPH.
                </p>

                <div style={{ marginBottom: '18px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82em' }}>
                        <span style={{ color: 'var(--accent-gold)' }}>diagnostic P coordinate</span>
                        <span style={{ color: 'var(--accent-cyan)' }}>
                            {formatPixelConstant(pixelConstant)} ({pixelConstant >= PIXEL_REFERENCE ? '+' : ''}
                            {formatPixelConstant(pixelConstant - PIXEL_REFERENCE)} vs canonical)
                        </span>
                    </div>
                    <input
                        type="range"
                        min={PIXEL_UI_MIN}
                        max={PIXEL_UI_MAX}
                        step="0.005"
                        value={pixelConstant}
                        onChange={event => setPixelConstant(Number(event.target.value))}
                    />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '12px', marginBottom: '18px' }}>
                    <div className="card" style={{ padding: '14px', background: 'rgba(0,0,0,0.18)' }}>
                        <div style={{ fontSize: '0.72em', color: 'var(--text-muted)', marginBottom: '6px' }}>alpha_U(P)</div>
                        <div style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>{formatScalar(gaugeCore.alphaU)}</div>
                    </div>
                    <div className="card" style={{ padding: '14px', background: 'rgba(0,0,0,0.18)' }}>
                        <div style={{ fontSize: '0.72em', color: 'var(--text-muted)', marginBottom: '6px' }}>v(P)</div>
                        <div style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>{formatScalar(electroweakRepair.vGeV, 3)} GeV</div>
                    </div>
                    <div className="card" style={{ padding: '14px', background: 'rgba(0,0,0,0.18)' }}>
                        <div style={{ fontSize: '0.72em', color: 'var(--text-muted)', marginBottom: '6px' }}>eta_source(P)</div>
                        <div style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>{formatScalar(electroweakRepair.etaSource)}</div>
                    </div>
                    <div className="card" style={{ padding: '14px', background: 'rgba(0,0,0,0.18)' }}>
                        <div style={{ fontSize: '0.72em', color: 'var(--text-muted)', marginBottom: '6px' }}>rho_HT(P)</div>
                        <div style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>{formatScalar(higgsTop.rhoHT)}</div>
                    </div>
                    <div className="card" style={{ padding: '14px', background: 'rgba(0,0,0,0.18)' }}>
                        <div style={{ fontSize: '0.72em', color: 'var(--text-muted)', marginBottom: '6px' }}>pi_y(P), pi_lambda(P)</div>
                        <div style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>
                            {formatScalar(higgsTop.piY, 5)}, {formatScalar(higgsTop.piLambda, 5)}
                        </div>
                    </div>
                </div>

                <div className="math-block" style={{ fontSize: '0.84em' }}>
                    P -&gt; alpha_U(P), eta_source(P), v(P) -&gt; electroweak running chart -&gt; (W, Z)
                    <br />
                    rho_HT(P) = log(1 + tau2_tree_exact(P)) -&gt; (pi_y(P), pi_lambda(P)) -&gt; Higgs/top split -&gt; (H, t)
                </div>

                <div style={{ display: 'grid', gap: '10px' }}>
                    {dynamicRows.map((row) => (
                        <div
                            key={row.label}
                            className="card"
                            style={{ padding: '14px', background: 'rgba(0,0,0,0.18)', borderLeft: `3px solid ${tierBorderColor(row.tier)}` }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginBottom: '6px' }}>
                                <strong>{row.label}</strong>
                                <span style={{ color: 'var(--accent-cyan)' }}>{formatMass(row.valueGeV)}</span>
                            </div>
                            <div style={{ fontSize: '0.76em', color: 'var(--text-muted)', marginBottom: '6px' }}>
                                {row.tier === 'structural'
                                    ? 'Invariant under P on the structural lane.'
                                    : `Delta from fixed P* = ${formatPixelConstant(PIXEL_REFERENCE)}: ${formatSignedMass(row.deltaGeV)} (${row.tier})`}
                            </div>
                            <div style={{ fontSize: '0.8em', color: 'var(--text-secondary)' }}>{row.note}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="card" style={{ marginBottom: '16px', borderLeft: '3px solid var(--accent-blue)' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '0.95em' }}>Status language used here</h3>
                <p style={{ margin: '0 0 10px 0' }}>
                    This lab distinguishes:
                </p>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.8', margin: 0, color: 'var(--text-secondary)' }}>
                    <li><strong>Closed:</strong> theorem-grade or calibration-grade public result.</li>
                    <li><strong>Continuation-only:</strong> an internal or same-family sidecar that sharpens the open object without replacing the public theorem frontier.</li>
                    <li><strong>Compare-only:</strong> a fit or diagnostic adapter that is numerically useful but not promoted as the theorem object.</li>
                    <li><strong>Open:</strong> an exact theorem object is open on the declared corpus.</li>
                </ul>
            </div>

            <div className="card" style={{ marginBottom: '16px', borderLeft: '3px solid var(--accent-cyan)' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '0.95em' }}>Lane audit</h3>
                <div style={{ display: 'grid', gap: '10px' }}>
                    {PARTICLE_LANE_STATUS.map((lane) => (
                        <div key={lane.label} style={{ fontSize: '0.82em' }}>
                            <strong style={{ color: 'var(--accent-cyan)' }}>{lane.label}:</strong>{' '}
                            <span style={{ color: 'var(--text-secondary)' }}>{lane.summary}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="card" style={{ marginBottom: '16px' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '0.95em' }}>Claim-tier legend</h3>
                <div style={{ display: 'grid', gap: '8px' }}>
                    {CLAIM_TIER_LEGEND.map((item) => (
                        <div key={item.tier} style={{ fontSize: '0.82em' }}>
                            <strong>{item.label}:</strong>{' '}
                            <span style={{ color: 'var(--text-secondary)' }}>{item.description}</span>
                        </div>
                    ))}
                </div>
            </div>

            <Explainer title="Why the diagnostic moves some rows">
                <p>
                    The particle paper makes a sharp split. Photon, gluons, and graviton are structural zeros on the
                    realized gauge/gravity branch, so their masses stay exactly zero. W and Z sit on an incomplete
                    running chart with no physical pole comparison, while Higgs/top sit on the downstream source-only
                    split surface fed by the same gauge core.
                </p>
                <p>
                    The diagnostic changes the source coordinate used by those formulas, so the bosonic rows move while
                    the massless structural rows stay fixed. The certified branch remains the fixed-point value P*.
                    Charged leptons remain on a separate source-landing surface. The quark runtime is a target-anchored
                    diagnostic behind the two-modulus spread obstruction and the common-scale physical-Yukawa blocker;
                    hadrons require an OPH hadron backend.
                </p>
            </Explainer>
        </div>
    );
}
