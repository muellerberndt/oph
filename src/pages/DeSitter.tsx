import { Explainer } from '../components/Explainer';
import {
    ELECTROWEAK_BRIDGE_CAPACITY_DISPLAY,
    PIXEL_REFERENCE,
    SCREEN_CAPACITY_REFERENCE_DISPLAY,
    SCREEN_CAPACITY_REFERENCE_LOG10,
    SCREEN_CAPACITY_UI_MAX,
    SCREEN_CAPACITY_UI_MIN,
    deSitterRadiusFromLambda,
    formatPixelConstant,
    formatScreenCapacityLog,
    gibbonsHawkingTemperatureFromHubble,
    hubbleFromLambda,
    lambdaFromScreen,
} from '../core/ophMath';
import { useLabSetting, useLabState } from '../state/labState';

export function DeSitterPage() {
    const [logDimH, setLogDimH] = useLabSetting('deSitter.logDimH');
    const { resetKeys } = useLabState();

    const lambda = lambdaFromScreen(PIXEL_REFERENCE, logDimH);
    const H = hubbleFromLambda(lambda);
    const TdS = gibbonsHawkingTemperatureFromHubble(H);
    const rH = deSitterRadiusFromLambda(lambda);
    const SBH = Math.pow(10, logDimH);
    const isReferencePoint = Math.abs(logDimH - SCREEN_CAPACITY_REFERENCE_LOG10) < 0.005;

    return (
        <div>
            <div className="section-header">
                <span className="section-tag gr">Chain 1: GR</span>
                <h1 style={{ fontSize: '1.5rem', margin: 0 }}>De Sitter Space</h1>
            </div>

            <p style={{ marginBottom: '16px' }}>
                Our universe is accelerating in its expansion, approaching a de Sitter phase. In de Sitter space,
                every observer is surrounded by a <strong>cosmological horizon</strong>, a sphere beyond which
                events can never reach them. This horizon has thermodynamic properties, just like a black hole horizon.
            </p>
            <p style={{ marginBottom: '16px' }}>
                In OPH, the de Sitter horizon IS the holographic screen. The cosmological constant &Lambda; measures
                the screen's <strong>finite information capacity</strong>.
            </p>

            <h3 style={{ fontSize: '1em', marginTop: '32px' }}>The Gibbons-Hawking Temperature</h3>
            <p style={{ marginBottom: '8px' }}>
                Gibbons and Hawking showed that de Sitter space has a thermal character. An observer at rest in
                de Sitter space detects thermal radiation at a temperature set by the Hubble parameter H:
            </p>
            <div className="math-block" style={{ fontSize: '1.1em' }}>
                T<sub>dS</sub> = ℏH / (2&pi;k<sub>B</sub>)
            </div>
            <p style={{ marginBottom: '16px' }}>
                This is the de Sitter analog of the Unruh temperature: the cosmological horizon acts like a Rindler
                horizon with acceleration a = Hc. Every static observer in de Sitter space is bathed in a thermal
                bath at temperature T<sub>dS</sub>.
            </p>

            <h3 style={{ fontSize: '1em', marginTop: '32px' }}>Conditional &Lambda;-Capacity Relation</h3>
            <p style={{ marginBottom: '8px' }}>
                The local gravity branch leaves a separate metric ambiguity. OPH determines it through global
                correctable-record capacity. The lab holds the reference pixel normalization at
                P = {formatPixelConstant(PIXEL_REFERENCE)} and displays the Lambda-located comparison coordinate:
            </p>
            <div className="math-block" style={{ fontSize: '1.1em' }}>
                N = log M<sub>0</sub>(𝔘<sub>N</sub>),
                &nbsp;M<sub>0</sub>(q) = &alpha;(G<sub>q</sub>),
                &nbsp;𝔉<sub>r,0</sub>(D<sub>*</sub>) = {'{'}D<sub>*</sub>{'}'},
                &nbsp;N<sub>CRC</sub> = log D<sub>*</sub>
            </div>
            <p style={{ marginBottom: '16px' }}>
                On the exact reversible branch every authorized checkpoint is injective and
                M<sub>0</sub>(q) = |X<sub>reach</sub>(q)|, turning the readback into exact CSP/model counting.
                Horizon-record saturation then gives &Lambda;&ell;<sub>*</sub><sup>2</sup> = 3&pi;/N<sub>CRC</sub>.
                The measured &Lambda; comparison locates N<sub>&Lambda;</sub> near {SCREEN_CAPACITY_REFERENCE_DISPLAY}.
            </p>
            <p style={{ marginBottom: '16px' }}>
                The conditional electroweak hierarchy bridge gives {ELECTROWEAK_BRIDGE_CAPACITY_DISPLAY}, about 6.6%
                above the Lambda-located central value. COMMON-EW-LOAD-CARRIER asks whether the same capacity load
                controls the Higgs hierarchy; the joint cosmological posterior is a separate registered comparison.
            </p>

            <h3 style={{ fontSize: '1em', marginTop: '32px' }}>The Proposed Cosmological-Constant Route</h3>
            <p style={{ marginBottom: '16px' }}>
                The standard cosmological constant problem: QFT predicts a vacuum energy density &rho;<sub>vac</sub> &sim;
                M<sub>P</sub><sup>4</sup> &sim; 10<sup>76</sup> GeV<sup>4</sup>, but the observed value is
                &rho;<sub>&Lambda;</sub> &sim; 10<sup>&minus;47</sup> GeV<sup>4</sup>. A discrepancy of 10<sup>123</sup>.
            </p>
            <p style={{ marginBottom: '16px' }}>
                In OPH, this comparison is meaningless. Vacuum energy is "null-blind": the vacuum stress-energy
                tensor satisfies T<sub>kk</sub> = T<sub>ab</sub>k<sup>a</sup>k<sup>b</sup> = 0 for null vectors k.
                Since gravity is derived from null surface thermodynamics (&delta;Q = TdS on null horizons), vacuum
                energy does not contribute to the null-projected local equation. OPH proposes that &Lambda; belongs to
                a separate global screen-capacity branch, closed by the public checkpoint packet and one physical zero
                of s(D) = log D - log M<sub>0</sub>(D).
            </p>

            <div className="demo-container">
                <div className="demo-label">Diagnostic: De Sitter Parameters Around The Lambda Reference</div>
                <p style={{ fontSize: '0.85em', color: 'var(--text-muted)', marginBottom: '16px' }}>
                    Move the diagnostic capacity coordinate to see formula sensitivity. The marked value is the
                    Lambda-located reference N<sub>&Lambda;</sub> = {SCREEN_CAPACITY_REFERENCE_DISPLAY}.
                </p>

                <div style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
                        <button
                            className="btn btn-ghost"
                            style={{ fontSize: '0.72em', padding: '4px 10px' }}
                            onClick={() => resetKeys(['deSitter.logDimH'])}
                        >
                            Reset to Lambda Reference
                        </button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85em', marginBottom: '4px' }}>
                        <span style={{ color: 'var(--accent-gold)' }}>diagnostic log<sub>10</sub>(N)</span>
                        <span style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>{formatScreenCapacityLog(logDimH)}</span>
                    </div>
                    <input
                        type="range"
                        min={SCREEN_CAPACITY_UI_MIN}
                        max={SCREEN_CAPACITY_UI_MAX}
                        step="0.01"
                        value={logDimH}
                        onChange={e => setLogDimH(parseFloat(e.target.value))}
                        style={{ width: '100%' }}
                    />
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7em', color: 'var(--text-muted)' }}>
                        <span>{formatScreenCapacityLog(SCREEN_CAPACITY_UI_MIN)}</span>
                        <span>{SCREEN_CAPACITY_REFERENCE_DISPLAY} Lambda reference</span>
                        <span>{formatScreenCapacityLog(SCREEN_CAPACITY_UI_MAX)}</span>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div style={{ padding: '12px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)' }}>
                        <div style={{ fontSize: '0.7em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '4px' }}>
                            Cosmological Constant &Lambda;
                        </div>
                        <div style={{ fontSize: '1em', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                            {lambda.toExponential(2)} m<sup>&minus;2</sup>
                        </div>
                    </div>
                    <div style={{ padding: '12px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)' }}>
                        <div style={{ fontSize: '0.7em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '4px' }}>
                            Hubble Parameter H
                        </div>
                        <div style={{ fontSize: '1em', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                            {H.toExponential(2)} s<sup>&minus;1</sup>
                        </div>
                    </div>
                    <div style={{ padding: '12px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)' }}>
                        <div style={{ fontSize: '0.7em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '4px' }}>
                            de Sitter Temperature
                        </div>
                        <div style={{ fontSize: '1em', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                            {TdS.toExponential(2)} K
                        </div>
                    </div>
                    <div style={{ padding: '12px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)' }}>
                        <div style={{ fontSize: '0.7em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '4px' }}>
                            Horizon Radius
                        </div>
                        <div style={{ fontSize: '1em', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                            {rH.toExponential(2)} m
                        </div>
                    </div>
                    <div style={{ padding: '12px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)' }}>
                        <div style={{ fontSize: '0.7em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '4px' }}>
                            Horizon Entropy S<sub>BH</sub>
                        </div>
                        <div style={{ fontSize: '1em', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                            {SBH.toExponential(2)}
                        </div>
                    </div>
                    <div style={{ padding: '12px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)' }}>
                        <div style={{ fontSize: '0.7em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '4px' }}>
                            Closure Status
                        </div>
                        <div style={{ fontSize: '1em', color: isReferencePoint ? 'var(--accent-gold)' : 'var(--accent-rose)', fontWeight: 700 }}>
                            {isReferencePoint ? 'Lambda-located reference' : 'sensitivity coordinate'}
                        </div>
                    </div>
                </div>
            </div>

            <Explainer title="De Sitter entropy and the total bit count">
                <p>
                    The de Sitter horizon entropy S<sub>dS</sub> = A<sub>H</sub>/(4l<sub>P</sub>&sup2;) is
                    {SCREEN_CAPACITY_REFERENCE_DISPLAY} on the observed branch. Measured Lambda supplies this entropy
                    estimate. OPH's official equation is N = log M<sub>0</sub>(𝔘<sub>N</sub>).
                    It identifies finite self-reading capacity directly through
                    M<sub>0</sub>(q) = &alpha;(G<sub>q</sub>) and robust whole-fiber saturation
                    𝔉<sub>r,0</sub>(D<sub>*</sub>) = {'{'}D<sub>*</sub>{'}'}.
                </p>
                <p>
                    This gives an entirely different perspective on the "largeness" of the universe. The universe
                    is large because the screen has &sim;{SCREEN_CAPACITY_REFERENCE_DISPLAY} Planck-area pixels. This is one large
                    number that sets the scale.
                </p>
                <p>
                    The conditional electroweak bridge capacity is {ELECTROWEAK_BRIDGE_CAPACITY_DISPLAY}. Its 6.6%
                    central gap from the Lambda-located estimate cannot be adjudicated until the bridge premises close
                    and the cosmological posterior is propagated.
                </p>
            </Explainer>

            <Explainer title="Static patch and observer complementarity">
                <p>
                    In de Sitter space, each observer has access to only one <strong>static patch</strong>: the
                    causal diamond bounded by their past and future cosmological horizons. Different observers
                    have different static patches that may or may not overlap.
                </p>
                <p>
                    This is exactly the OPH picture: each observer has a patch of the screen (Axiom A1), and
                    overlap consistency (Axiom A2) constrains the shared descriptions. De Sitter observer
                    complementarity is a concrete realization of the OPH axioms.
                </p>
            </Explainer>

            <Explainer title="Late-time de Sitter and the heat death">
                <p>
                    If &Lambda; &gt; 0, the universe approaches de Sitter space at late times. The thermal state
                    at temperature T<sub>dS</sub> &asymp; 10<sup>&minus;30</sup> K is the maximum-entropy state
                    consistent with the horizon area, the "heat death" of the universe.
                </p>
                <p>
                    In OPH, this is the MaxEnt state on the A3 branch of the screen theory. The universe evolves
                    toward the most typical state. The arrow of time is framed as evolution from a low-entropy
                    initial state toward that MaxEnt branch.
                </p>
            </Explainer>
        </div>
    );
}
