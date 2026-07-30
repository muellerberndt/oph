import { Explainer } from '../components/Explainer';
import { CORE_PARAMETERS, OPH_PAPERS } from '../content/paperSurface';
import { ELECTROWEAK_BRIDGE_CAPACITY_DISPLAY } from '../core/ophMath';

export function SynthesisPage() {
    return (
        <div>
            <div className="section-header">
                <span className="section-tag foundation">Synthesis</span>
                <h1 style={{ fontSize: '1.5rem', margin: 0 }}>The Unified Picture</h1>
            </div>

            <p style={{ marginBottom: '16px' }}>
                Both chains converge, but they do so at different claim tiers. Chain 1 yields a conditional Lorentz
                branch on the BW scaling surface, a conditional Jacobson-type Einstein branch under the null bridge,
                the separate bounded-interval projective branch, and fixed-cap stationarity, and separate
                cosmological-capacity consequences. Given the explicit compact-gauge refinement receipt, Chain 2
                yields the receipt-conditional structural Standard Model branch together with several downstream
                continuation lanes. The same paper surface includes a dedicated consensus
                spine and a concrete screen-microphysics architecture. Both start from the same three-axiom basis on a
                holographic screen S&sup2;, while specific pages add the theorem-local technical premises needed for
                Lorentz, gauge, particle, or observer-level statements.
            </p>

            <h3 style={{ fontSize: '1em', marginTop: '32px' }}>Local Closure And Global Readback</h3>
            <p style={{ marginBottom: '16px' }}>
                OPH is formulated as a zero-dial closure theory: zero quantitative inputs at the theory layer,
                with working borrows counted in the scorecard. The local constant is a certified root of a declared
                incomplete map; global capacity is the exact correctable code of reachable public records, scalarized
                across the entire terminal fiber:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                {CORE_PARAMETERS.map((item, index) => (
                    <div
                        key={item.label}
                        className="card"
                        style={{ borderLeft: `3px solid ${index === 0 ? 'var(--accent-cyan)' : 'var(--accent-gold)'}` }}
                    >
                        <h4 style={{ margin: '0 0 8px 0', fontSize: '0.9em', color: index === 0 ? 'var(--accent-cyan)' : 'var(--accent-gold)' }}>
                            {index + 1}. {item.label}
                        </h4>
                        <div className="math-block" style={{ fontSize: '1em', margin: '0 0 12px' }}>
                            {item.value}
                        </div>
                        <p style={{ margin: 0, fontSize: '0.85em' }}>
                            {item.note}
                        </p>
                        <div className="math-block" style={{ fontSize: '0.78em', margin: '12px 0 0' }}>
                            {item.equation}
                        </div>
                    </div>
                ))}
            </div>

            <p style={{ marginBottom: '16px' }}>
                The conditional global relation is Lambda = 3pi / (G* N<sub>CRC</sub>), where G* is supplied by
                the selected no-G scale certificate. The hierarchy equation gives an independent electroweak/Higgs bridge
                once COMMON-EW-LOAD-CARRIER identifies the same load on both lanes. The OPH paper set separates recovered structural theorems, explicit
                branch-conditional results, closed calibration sectors, and open continuation lanes.
            </p>
            <p style={{ marginBottom: '16px' }}>
                The compact hierarchy readout is v/E<sub>cell</sub> = (N<sub>EW</sub>/pi)<sup>-P*/12</sup>,
                with N<sub>EW</sub> = {ELECTROWEAK_BRIDGE_CAPACITY_DISPLAY} on that conditional branch. This is about
                6.6% above the Lambda-located central capacity. The checkpoint packet, unique slack-zero theorem,
                common carrier, and posterior propagation are the remaining registered tests.
            </p>

            <h3 style={{ fontSize: '1em', marginTop: '32px' }}>Six Surfaces, One Program</h3>
            <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
                {OPH_PAPERS.map((paper) => (
                    <div key={paper.slug} className="card" style={{ borderLeft: '3px solid var(--accent-purple)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', marginBottom: '6px' }}>
                            <strong>{paper.title}</strong>
                            <span style={{ color: 'var(--accent-purple)', fontSize: '0.78em' }}>{paper.surface}</span>
                        </div>
                        <div style={{ fontSize: '0.82em', color: 'var(--text-secondary)' }}>{paper.summary}</div>
                    </div>
                ))}
            </div>

            <h3 style={{ fontSize: '1em', marginTop: '32px' }}>The Two Chains Unified</h3>

            <div className="demo-container" style={{ background: 'rgba(0,0,0,0.3)' }}>
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '12px 24px',
                        background: 'rgba(201, 169, 110, 0.15)',
                        border: '1px solid var(--accent-gold)',
                        color: 'var(--accent-gold)',
                        fontWeight: 700,
                        fontSize: '1em',
                    }}>
                        CORE SCREEN AXIOMS
                    </div>
                    <div style={{ color: 'var(--text-muted)', margin: '8px 0', fontSize: '1.2em' }}>&darr;</div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    {/* Chain 1 */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                        <div style={{ padding: '8px 16px', background: 'rgba(201,112,112,0.15)', border: '1px solid var(--accent-rose)', color: 'var(--accent-rose)', fontSize: '0.8em', fontWeight: 600, textAlign: 'center', width: '100%' }}>
                            CHAIN 1: GR
                        </div>
                        {['Entropy + Recoverability', 'Conditional Lorentz Branch', 'Geometric Modular Flow (BW branch)', 'Null Bridge + Projective Branch + Fixed-cap Stationarity', 'Conditional Einstein Branch', 'Classical Limits'].map((step, i) => (
                            <div key={i} style={{ width: '100%' }}>
                                <div style={{ padding: '6px 12px', background: 'rgba(201,112,112,0.05)', border: '1px solid rgba(201,112,112,0.2)', fontSize: '0.75em', color: 'var(--text-secondary)', textAlign: 'center' }}>
                                    {step}
                                </div>
                                {i < 5 && <div style={{ textAlign: 'center', color: 'rgba(201,112,112,0.4)', fontSize: '0.8em' }}>&darr;</div>}
                            </div>
                        ))}
                    </div>

                    {/* Chain 2 */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                        <div style={{ padding: '8px 16px', background: 'rgba(122,184,212,0.15)', border: '1px solid var(--accent-blue)', color: 'var(--accent-blue)', fontSize: '0.8em', fontWeight: 600, textAlign: 'center', width: '100%' }}>
                            CHAIN 2: QFT
                        </div>
                        {['Complete compact port response', 'Endogenous carrier transport', 'Forced u(1)+su(2)+su(3) Lie type', 'Declared matter fixture and Z6 kernel', 'Open source and global-form selection', 'Conditional particle continuations'].map((step, i) => (
                            <div key={i} style={{ width: '100%' }}>
                                <div style={{ padding: '6px 12px', background: 'rgba(122,184,212,0.05)', border: '1px solid rgba(122,184,212,0.2)', fontSize: '0.75em', color: 'var(--text-secondary)', textAlign: 'center' }}>
                                    {step}
                                </div>
                                {i < 5 && <div style={{ textAlign: 'center', color: 'rgba(122,184,212,0.4)', fontSize: '0.8em' }}>&darr;</div>}
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <div style={{ color: 'var(--text-muted)', margin: '8px 0', fontSize: '1.2em' }}>&darr;</div>
                    <div style={{
                        display: 'inline-block',
                        padding: '12px 24px',
                        background: 'rgba(0, 255, 65, 0.1)',
                        border: '1px solid var(--accent-green)',
                        color: 'var(--accent-green)',
                        fontWeight: 700,
                        fontSize: '0.9em',
                    }}>
                        UNIFIED OPH PROGRAM
                    </div>
                </div>
            </div>

            <h3 style={{ fontSize: '1em', marginTop: '32px' }}>What OPH Unifies</h3>
            <p style={{ marginBottom: '16px' }}>
                OPH supplies a shared quantum-algebraic observer-patch architecture for gravity, gauge structure,
                and the effective quantum description. The standard picture treats these as separate theories with
                incompatible foundations:
            </p>

            <div className="card" style={{ marginBottom: '24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', fontSize: '0.85em' }}>
                    <div style={{ padding: '12px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)' }}>
                        <div style={{ color: 'var(--accent-rose)', fontWeight: 600, marginBottom: '4px' }}>Standard Picture</div>
                        <ul style={{ paddingLeft: '16px', margin: 0, lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                            <li>GR = smooth geometry</li>
                            <li>QM = Hilbert-space formalism</li>
                            <li>Incompatible at Planck scale</li>
                            <li>25+ free parameters</li>
                        </ul>
                    </div>
                    <div style={{ padding: '12px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)' }}>
                        <div style={{ color: 'var(--accent-blue)', fontWeight: 600, marginBottom: '4px' }}>String Theory</div>
                        <ul style={{ paddingLeft: '16px', margin: 0, lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                            <li>10/11 dimensions</li>
                            <li>Compactification landscape</li>
                            <li>10<sup>500</sup> vacua</li>
                            <li>No unique predictions</li>
                        </ul>
                    </div>
                    <div style={{ padding: '12px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border-color)' }}>
                        <div style={{ color: 'var(--accent-green)', fontWeight: 600, marginBottom: '4px' }}>OPH</div>
                        <ul style={{ paddingLeft: '16px', margin: 0, lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                            <li>2D screen &rarr; 3+1D spacetime</li>
                            <li>Shared observer-patch basis for gravity and gauge structure</li>
                            <li>Explicit branch and continuation ledger</li>
                            <li>2 closure-defined quantitative constants</li>
                        </ul>
                    </div>
                </div>
            </div>

            <h3 style={{ fontSize: '1em', marginTop: '32px' }}>The Philosophical Shift</h3>
            <p style={{ marginBottom: '16px' }}>
                OPH represents a profound shift in the foundations of physics:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto 1fr', gap: '8px 16px', fontSize: '0.85em', marginBottom: '24px' }}>
                <span style={{ color: 'var(--accent-rose)', fontWeight: 600 }}>Standard:</span>
                <span style={{ color: 'var(--text-secondary)' }}>Spacetime is fundamental</span>
                <span style={{ color: 'var(--accent-green)', fontWeight: 600 }}>OPH:</span>
                <span style={{ color: 'var(--text-secondary)' }}>Spacetime is emergent from information</span>

                <span style={{ color: 'var(--accent-rose)', fontWeight: 600 }}>Standard:</span>
                <span style={{ color: 'var(--text-secondary)' }}>Objective reality exists independently</span>
                <span style={{ color: 'var(--accent-green)', fontWeight: 600 }}>OPH:</span>
                <span style={{ color: 'var(--text-secondary)' }}>Reality = intersubjective consistency</span>

                <span style={{ color: 'var(--accent-rose)', fontWeight: 600 }}>Standard:</span>
                <span style={{ color: 'var(--text-secondary)' }}>Laws of physics are inputs</span>
                <span style={{ color: 'var(--accent-green)', fontWeight: 600 }}>OPH:</span>
                <span style={{ color: 'var(--text-secondary)' }}>Some laws are recovered structurally; others remain branch-conditional or continuation-level</span>

                <span style={{ color: 'var(--accent-rose)', fontWeight: 600 }}>Standard:</span>
                <span style={{ color: 'var(--text-secondary)' }}>Parameters are tuned</span>
                <span style={{ color: 'var(--accent-green)', fontWeight: 600 }}>OPH:</span>
                <span style={{ color: 'var(--text-secondary)' }}>The two quantitative constants are estimated from measured alpha and Lambda (inputs); exact loop closure on them is the open test, and the remaining program is finite: four named computations and one selector</span>

                <span style={{ color: 'var(--accent-rose)', fontWeight: 600 }}>Standard:</span>
                <span style={{ color: 'var(--text-secondary)' }}>Gravity and QM are separate</span>
                <span style={{ color: 'var(--accent-green)', fontWeight: 600 }}>OPH:</span>
                <span style={{ color: 'var(--text-secondary)' }}>Both share the three core axioms; compact-gauge reconstruction uses the refinement receipt, and the realized sector enters through the declared completions</span>
            </div>

            <Explainer title="Is this too good to be true?">
                <p>
                    A healthy skepticism is warranted. Key questions to ask:
                </p>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                    <li><strong>Are the assumptions really as minimal as claimed?</strong> The three axioms are supplemented by theorem-local technical premises, the declared completions, and branch-specific conditions. A full assessment must count all logical inputs.</li>
                    <li><strong>Are the derivations rigorous?</strong> The recovered structural core is stronger than the downstream continuation lanes. BW internalization, some particle continuations, and several phenomenology surfaces remain conditional or open.</li>
                    <li><strong>Can it be falsified?</strong> Yes (see Predictions page). This is the most important test of any theory.</li>
                </ul>
                <p>
                    OPH should be evaluated by the same standards as any physical theory: internal consistency,
                    agreement with existing data, and testable predictions. The paper stack carries a
                    mixed ledger of structural theorems, branch conditions, closed calibration sectors, and open
                    scaffold items. The open set is finite and enumerated: four generator computations and one
                    flavor-orbit selector stand between the current standing and full closure.
                </p>
            </Explainer>

            <Explainer title="Relationship to other programs">
                <p>
                    OPH draws on and synthesizes ideas from multiple research programs:
                </p>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                    <li><strong>AdS/CFT:</strong> The holographic principle and bulk reconstruction, but extended beyond AdS to cosmological spacetimes</li>
                    <li><strong>Jacobson&apos;s thermodynamic gravity:</strong> Einstein-equilibrium logic used in the conditional gravity branch</li>
                    <li><strong>It from bit (Wheeler):</strong> Information as the foundation of physics, made precise through von Neumann algebras</li>
                    <li><strong>QBism:</strong> Observer-relative quantum states, grounded in patch structure</li>
                    <li><strong>Tensor networks:</strong> MERA and HaPPY codes, as models of the screen-to-bulk map</li>
                    <li><strong>Consensus and distributed systems:</strong> fixed points, repair schedules, holonomy obstructions, and stable records as physics-facing objects</li>
                </ul>
                <p>
                    OPH unifies these insights into a single coherent framework with a common axiomatic foundation.
                </p>
            </Explainer>
        </div>
    );
}
