import { useMemo } from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { OPH_PAPERS } from '../content/paperSurface';
import {
    BETA_COEFFICIENTS_MSSM_LIKE,
    ELECTROWEAK_BRIDGE_CAPACITY_DISPLAY,
    GRAVITATIONAL_CONSTANT_REFERENCE_SI,
    PIXEL_REFERENCE,
    SCREEN_CAPACITY_REFERENCE_DISPLAY,
    SCREEN_CAPACITY_REFERENCE_LOG10,
    deriveD11ForwardSeed,
    deriveTargetFreeElectroweakRepair,
    formatPixelConstant,
    hubbleFromLambda,
    lambdaFromScreen,
    newtonConstantFromScaleCertificate,
    solveGaugeClosure,
} from '../core/ophMath';

type CoreLockRow = {
    label: string;
    value: string;
    equation: string;
    note: string;
};

type SurfaceBoardRow = {
    label: string;
    family: string;
    familyClass: 'gr' | 'qft' | 'exact' | 'candidate';
    primaryLabel: string;
    primaryValue: string;
    secondaryLabel: string;
    secondaryValue: string;
};

const CANONICAL_GAUGE_OPTIONS = {
    betaCoefficients: BETA_COEFFICIENTS_MSSM_LIKE,
    su2MaxJ: 30,
    su3MaxIndex: 14,
    alphaRange: { min: 0.015, max: 0.09, step: 0.0005 },
} as const;

// Interval-certified unique fixed point of the declared source map (CL-6, closed 2026-07-14).
// The earlier printed tail 136.99483516462165 came from an unconverged run and is superseded beyond digit 9.
const ALPHA_ROOT_INV = 136.994835177413;
// Certified self-consistent gauge-width fixed point (CL-2, 2.5e-6 relative to measurement).
// The previously displayed 137.0359595008... was a mixed-provenance display packet, not a fixed point of any single declared map.
const ALPHA_GAUGE_WIDTH_FP_INV = 137.035660136946577;

function formatFixed(value: number, digits = 6): string {
    if (!Number.isFinite(value)) {
        return 'n/a';
    }
    return value.toFixed(digits);
}

function formatScientific(value: number, digits = 3): string {
    if (!Number.isFinite(value)) {
        return 'n/a';
    }
    return value.toExponential(digits);
}

function renderCoreLocks(rows: CoreLockRow[]) {
    return (
        <div className="landing-controls-grid">
            {rows.map((row) => (
                <article key={row.label} className="input-control-card">
                    <div className="input-control-header">
                        <div>
                            <div className="input-control-label">{row.label}</div>
                            <div className="input-control-value">{row.value}</div>
                        </div>
                    </div>
                    <div className="input-control-caption">{row.equation}</div>
                    <p style={{ margin: '12px 0 0', fontSize: '0.82em', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                        {row.note}
                    </p>
                </article>
            ))}
        </div>
    );
}

function renderCompactSurfaceBoard(rows: SurfaceBoardRow[]) {
    return (
        <section className="card compact-live-board">
            <div className="metric-section-header">
                <div>
                    <h3 style={{ margin: 0, fontSize: '0.95em' }}>Fixed-point readouts</h3>
                    <p className="compact-live-board-copy">
                        Each tile shows a public paper-surface readout tied to the locked OPH closure values.
                        Target-anchored quark diagnostics are excluded.
                    </p>
                </div>
                <span style={{ fontSize: '0.72em', color: 'var(--accent-gold)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {rows.length} rows
                </span>
            </div>
            <div className="compact-live-grid">
                {rows.map((row) => (
                    <article key={`${row.family}-${row.label}`} className="compact-live-card">
                        <div className="compact-live-card-header">
                            <strong className="compact-live-label">{row.label}</strong>
                            <span className={`compact-live-family compact-live-family-${row.familyClass}`}>{row.family}</span>
                        </div>
                        <div>
                            <span className="metric-card-caption">{row.primaryLabel}</span>
                            <div className="compact-live-value">{row.primaryValue}</div>
                        </div>
                        <div className="compact-live-baseline">
                            <span className="metric-card-caption">{row.secondaryLabel}</span>
                            <div className="compact-live-baseline-value">{row.secondaryValue}</div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export function Home() {
    const canonicalSurface = useMemo(() => {
        const closure = solveGaugeClosure(PIXEL_REFERENCE, CANONICAL_GAUGE_OPTIONS);
        const electroweakRepair = deriveTargetFreeElectroweakRepair(closure);
        const higgsTop = deriveD11ForwardSeed(electroweakRepair);
        const newtonConstant = newtonConstantFromScaleCertificate();
        const lambda = lambdaFromScreen(PIXEL_REFERENCE, SCREEN_CAPACITY_REFERENCE_LOG10);
        const hubble = hubbleFromLambda(lambda);

        return {
            closure,
            electroweakRepair,
            higgsTop,
            newtonConstant,
            lambda,
            hubble,
        };
    }, []);

    const coreLocks = useMemo<CoreLockRow[]>(() => [
        {
            label: 'Local pixel fixed point P',
            value: formatPixelConstant(PIXEL_REFERENCE),
            equation: 'P* = phi + sqrt(pi) / A_T(P*)',
            note: 'P links the simulator-side pixel area to electromagnetic observation in the simulated universe.',
        },
        {
            label: 'Cosmic record capacity N_CRC',
            value: SCREEN_CAPACITY_REFERENCE_DISPLAY,
            equation: 'N_CRC = F(N_CRC)',
            note: 'N_CRC is the unique capacity where the horizon capacity and observer-readable public record agree.',
        },
        {
            label: 'Electroweak bridge capacity',
            value: ELECTROWEAK_BRIDGE_CAPACITY_DISPLAY,
            equation: 'N_EW(P*) from the exact bridge condition',
            note: 'This closes the global N-side tick factor for the local/global resonance continuation.',
        },
        {
            label: 'Repair tick lock',
            value: '24',
            equation: 'm_rep = 2(8 + 3 + 1)',
            note: 'The representation-to-spectrum count gives the synchronization depth used by the hierarchy bridge.',
        },
        {
            label: 'Newton scale certificate',
            value: formatScientific(GRAVITATIONAL_CONSTANT_REFERENCE_SI, 10),
            equation: 'G_SI = c^3 ell_*^2 / hbar',
            note: 'G is read from the selected no-G scale certificate. The local P factor cancels in the Newton row.',
        },
    ], []);

    const surfaceBoardRows = useMemo<SurfaceBoardRow[]>(() => [
            {
                label: "Newton's gravitational constant",
                family: 'GRAVITY',
                familyClass: 'gr' as const,
                primaryLabel: 'OPH',
                primaryValue: `${formatScientific(canonicalSurface.newtonConstant, 6)} m^3 kg^-1 s^-2`,
                secondaryLabel: 'source',
                secondaryValue: 'no-G scale certificate',
            },
            {
                label: 'Cosmological constant',
                family: 'GRAVITY',
                familyClass: 'gr' as const,
                primaryLabel: 'OPH',
                primaryValue: `${formatScientific(canonicalSurface.lambda, 3)} m^-2`,
                secondaryLabel: 'source',
                secondaryValue: 'N_CRC fixed point',
            },
            {
                label: 'Hubble rate',
                family: 'GRAVITY',
                familyClass: 'gr' as const,
                primaryLabel: 'OPH',
                primaryValue: `${formatScientific(canonicalSurface.hubble, 3)} s^-1`,
                secondaryLabel: 'source',
                secondaryValue: 'Lambda_CRC',
            },
            {
                label: 'Hierarchy naturality',
                family: 'EXACT',
                familyClass: 'exact' as const,
                primaryLabel: 'selected branch',
                primaryValue: '0',
                secondaryLabel: 'bridge',
                secondaryValue: '24 ticks',
            },
            {
                label: 'Fine-structure endpoint',
                family: 'COUPLINGS',
                familyClass: 'qft' as const,
                primaryLabel: 'gauge-width fixed point (CL-2)',
                primaryValue: formatFixed(ALPHA_GAUGE_WIDTH_FP_INV, 9),
                secondaryLabel: 'source root (CL-1); QCD payload required',
                secondaryValue: formatFixed(ALPHA_ROOT_INV, 9),
            },
            {
                label: 'W boson mass',
                family: 'BOSONS',
                familyClass: 'qft' as const,
                primaryLabel: 'OPH',
                primaryValue: `${formatFixed(canonicalSurface.electroweakRepair.mWGeV, 9)} GeV`,
                secondaryLabel: 'surface',
                secondaryValue: 'EW repair',
            },
            {
                label: 'Z boson mass',
                family: 'BOSONS',
                familyClass: 'qft' as const,
                primaryLabel: 'OPH',
                primaryValue: `${formatFixed(canonicalSurface.electroweakRepair.mZGeV, 9)} GeV`,
                secondaryLabel: 'surface',
                secondaryValue: 'EW repair',
            },
            {
                label: 'Higgs boson mass',
                family: 'BOSONS',
                familyClass: 'qft' as const,
                primaryLabel: 'OPH',
                primaryValue: `${formatFixed(canonicalSurface.higgsTop.mHGeV, 9)} GeV`,
                secondaryLabel: 'surface',
                secondaryValue: 'Higgs/top split',
            },
            {
                label: 'Top mass',
                family: 'BOSONS',
                familyClass: 'qft' as const,
                primaryLabel: 'OPH',
                primaryValue: `${formatFixed(canonicalSurface.higgsTop.mtPoleGeV, 9)} GeV`,
                secondaryLabel: 'surface',
                secondaryValue: 'Higgs/top split',
            },
        ], [canonicalSurface]);

    return (
        <div className="landing-surface-page">
            <div className="demo-container landing-controls-shell" style={{ marginTop: 0 }}>
                <div className="landing-controls-header">
                    <h1 className="landing-controls-title">OPH Fixed-Point Lab</h1>
                    <div className="landing-actions landing-actions-top">
                        <Link className="btn btn-ghost" to="/de-sitter">
                            Capacity sensitivity
                        </Link>
                        <Link className="btn btn-ghost" to="/masses">
                            Particle surface
                        </Link>
                    </div>
                </div>
                <p className="landing-controls-intro">
                    The OPH public surface is input-free. Its quantitative content is locked by two unique fixed points,
                    P and N<sub>CRC</sub>, plus the selected no-G scale certificate used for SI units. Off-point controls
                    in later demos are sensitivity probes; they are not alternate valid universes.
                </p>

                {renderCoreLocks(coreLocks)}
            </div>

            {renderCompactSurfaceBoard(surfaceBoardRows)}
            <p className="landing-surface-note">
                The first screen is a readout of the certified branch. P fixes the local observation scale and the
                electromagnetic lane. N<sub>CRC</sub> fixes the cosmic record capacity and the cosmological constant.
                The Newton row comes from the scale certificate, and the hierarchy row uses the exact N-side bridge
                with the 24-tick repair lock. Numeric quark rows are absent because the current source equations leave
                a free (R<sub>&gt;0</sub>)<sup>2</sup> spread fiber. The retained target audit also mixes mass schemes,
                and its GeV-valued matrices are not physical dimensionless Yukawas.
            </p>

            <section className="card landing-links-card">
                <div className="landing-links-header">
                    <h3 style={{ margin: 0, fontSize: '0.95em' }}>Inspect The Proof Surfaces</h3>
                    <p className="landing-links-copy">
                        The lab summarizes the paper stack. The PDFs and code remain the source surface for theorem details.
                    </p>
                </div>
                <div className="landing-links-grid">
                    <a
                        className="landing-link-tile"
                        href="https://github.com/FloatingPragma/observer-patch-holography/blob/main/paper/deriving_the_particle_zoo_from_observer_consistency.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="landing-link-kicker">Paper</span>
                        <strong className="landing-link-title">Deriving the Particle Zoo</strong>
                        <span className="landing-link-body">Particle derivations, hierarchy branch, and quantitative rows.</span>
                        <span className="landing-link-cta">
                            <ExternalLink size={14} />
                            Open paper
                        </span>
                    </a>
                    <a
                        className="landing-link-tile"
                        href="https://github.com/FloatingPragma/observer-patch-holography/tree/main/code/particles"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="landing-link-kicker">Code</span>
                        <strong className="landing-link-title">Particles Code</strong>
                        <span className="landing-link-body">Browse the derivation artifacts and particle-status code in GitHub.</span>
                        <span className="landing-link-cta">
                            <ExternalLink size={14} />
                            Open code
                        </span>
                    </a>
                </div>
            </section>

            <div className="card" style={{ marginBottom: '24px' }}>
                <h3 style={{ marginTop: 0, fontSize: '0.95em' }}>OPH Paper Stack</h3>
                <div style={{ display: 'grid', gap: '12px' }}>
                    {OPH_PAPERS.map((paper) => (
                        <a
                            key={paper.slug}
                            href={paper.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'block',
                                padding: '14px',
                                background: 'rgba(0,0,0,0.18)',
                                border: '1px solid var(--border-color)',
                                textDecoration: 'none',
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginBottom: '6px' }}>
                                <strong style={{ color: 'var(--text-primary)' }}>{paper.title}</strong>
                                <span style={{ color: 'var(--accent-gold)', fontSize: '0.78em' }}>{paper.surface}</span>
                            </div>
                            <div style={{ fontSize: '0.82em', color: 'var(--text-secondary)' }}>{paper.summary}</div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
