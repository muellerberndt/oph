import { Explainer } from '../components/Explainer';
import { BOSON_PUBLIC_ROWS, PARTICLE_LANE_STATUS, STANDARD_MODEL_SURFACE } from '../content/paperSurface';
import { SCREEN_CAPACITY_REFERENCE_DISPLAY } from '../core/ophMath';

export function QftEmergesPage() {
    return (
        <div>
            <div className="section-header">
                <span className="section-tag qft">Chain 2: QFT</span>
                <h1 style={{ fontSize: '1.5rem', margin: 0 }}>QFT Emerges</h1>
            </div>

            <p style={{ marginBottom: '16px' }}>
                The <strong>Chain 2 synthesis page</strong> traces the reconstruction from the quantum-algebraic OPH
                ledger plus theorem-local technical premises to the structural Standard Model branch and several
                downstream matter-sector continuations. Quantum field theory appears here as an
                <strong>emergent effective description</strong> that arises from the screen algebra in the appropriate limits.
            </p>

            <div className="math-block" style={{ fontSize: '0.95em', lineHeight: '2.2' }}>
                quantum-algebraic screen plus the compact-gauge refinement receipt and the declared sector completions &rarr; Gauge-as-Gluing &rarr;
                conditional [SU(3)&times;SU(2)&times;U(1)]/Z6, N_c=3, declared N_g=3 &rarr; Q0 Recognition + Open Physical Receipts
            </div>

            <div className="card" style={{ marginTop: '24px', marginBottom: '24px', borderLeft: '3px solid var(--accent-cyan)' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '0.95em' }}>Paper-surface summary</h3>
                <div style={{ display: 'grid', gap: '8px', marginBottom: '12px' }}>
                    {STANDARD_MODEL_SURFACE.map((item) => (
                        <div key={item} style={{ fontSize: '0.82em', color: 'var(--text-secondary)' }}>
                            {item}
                        </div>
                    ))}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '8px' }}>
                    {BOSON_PUBLIC_ROWS.map((row) => (
                        <div key={row.label} style={{ padding: '10px', background: 'rgba(0,0,0,0.18)', border: '1px solid var(--border-color)' }}>
                            <div style={{ fontSize: '0.78em', color: 'var(--text-muted)' }}>{row.label}</div>
                            <div style={{ color: 'var(--accent-cyan)', fontWeight: 700 }}>{row.value}</div>
                        </div>
                    ))}
                </div>
            </div>

            <h3 style={{ fontSize: '1em', marginTop: '32px' }}>The Complete Chain 2 Derivation</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                {[
                    {
                        step: '1',
                        title: 'Quantum mechanics as effective algebraic description',
                        detail: 'Patch algebras, states, trace/Born event probabilities, and record updating belong to the OPH working basis.',
                        color: 'var(--accent-blue)',
                    },
                    {
                        step: '2',
                        title: 'Entanglement structure',
                        detail: 'Bell inequality violation, Tsirelson bound 2\u221a2, and monogamy of entanglement hold within the supplied complex Hilbert-space setting.',
                        color: 'var(--accent-blue)',
                    },
                    {
                        step: '3',
                        title: 'Quantum error correction',
                        detail: 'Bulk-boundary map = quantum error-correcting code. The recovery interface, a declared premise rather than an axiom, supplies the recoverability side of that structure. Spacetime is a code.',
                        color: 'var(--accent-blue)',
                    },
                    {
                        step: '4',
                        title: 'Gauge symmetry from patch gluing',
                        detail: 'Gauge-as-gluing fixes one common strict transport representative per stage and retains the seed sectors trivial under it. On a cofinal tail carrying the explicit refinement receipt, Tannaka-Krein reconstructs compact G from the tensor category and forgetful fiber.',
                        color: 'var(--accent-cyan)',
                    },
                    {
                        step: '5',
                        title: 'Standard Model gauge group',
                        detail: 'The finite A5 packet conditionally recognizes u(1)+su(3)+su(2), the quotient, and three colors. It supplies a rank-three candidate family band; N_g=3 enters as a declared completion inside the 3-to-5 window, while the rank-45 physical attachment remains open.',
                        color: 'var(--accent-cyan)',
                    },
                    {
                        step: '6',
                        title: 'Matter-sector continuations',
                        detail: 'The icosahedral screen supplies an exact A5/C3 local three-corner carrier. Its physical charged-family attachment and mass-value laws remain downstream continuations outside the recovered-core theorem stack.',
                        color: 'var(--accent-gold)',
                    },
                    {
                        step: '7',
                        title: 'Coupling unification',
                        detail: 'Peter-Weyl second-index mechanism \u2192 MSSM-like beta shifts \u0394b \u2248 (2.49, 4.38, 3.97) without superpartners.',
                        color: 'var(--accent-gold)',
                    },
                    {
                        step: '8',
                        title: 'Quantum field theory as effective description',
                        detail: 'In the continuum limit (many pixels, low curvature), the screen algebra reduces to a local QFT on the emergent spacetime.',
                        color: 'var(--accent-green)',
                    },
                ].map((item) => (
                    <div key={item.step} className="card" style={{ borderLeft: `3px solid ${item.color}` }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <span style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '28px',
                                height: '28px',
                                background: `${item.color}22`,
                                border: `1px solid ${item.color}`,
                                fontSize: '0.75em',
                                fontWeight: 700,
                                color: item.color,
                                flexShrink: 0,
                            }}>
                                {item.step}
                            </span>
                            <div>
                                <h4 style={{ margin: 0, fontSize: '0.9em' }}>{item.title}</h4>
                                <p style={{ margin: '4px 0 0', fontSize: '0.8em', color: 'var(--text-muted)' }}>
                                    {item.detail}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h3 style={{ fontSize: '1em', marginTop: '32px' }}>What Chain 2 Uses and Derives</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                <div style={{ padding: '12px', background: 'rgba(122, 184, 212, 0.1)', border: '1px solid rgba(122, 184, 212, 0.3)', fontSize: '0.85em' }}>
                    <div style={{ color: 'var(--accent-blue)', fontWeight: 600, marginBottom: '4px' }}>Structural outputs</div>
                    <ul style={{ paddingLeft: '16px', margin: 0, lineHeight: '1.8' }}>
                        <li>Patch operator algebras and states as the starting language</li>
                        <li>Born/trace event probabilities on declared record algebras</li>
                        <li>Measurement as local record updating</li>
                        <li>Bell inequality violation</li>
                        <li>Tsirelson bound (2&radic;2)</li>
                        <li>Compact gauge groups</li>
                        <li>SU(3) &times; SU(2) &times; U(1)</li>
                        <li>Rank-three candidate family band; declared completion N<sub>g</sub> = 3</li>
                        <li>Three colors (N<sub>c</sub> = 3)</li>
                        <li>Hypercharge quantization</li>
                        <li>Gauge-calibration and unification surfaces</li>
                        <li>No proton decay</li>
                        <li>Massless photon and graviton</li>
                    </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(201, 169, 110, 0.1)', border: '1px solid rgba(201, 169, 110, 0.3)', fontSize: '0.85em' }}>
                    <div style={{ color: 'var(--accent-gold)', fontWeight: 600, marginBottom: '4px' }}>Input Ledger</div>
                    <ul style={{ paddingLeft: '16px', margin: 0, lineHeight: '1.8' }}>
                        <li>Oriented twelve-port observer screen</li>
                        <li>Observer agreement</li>
                        <li>Conditional maximum randomness</li>
                        <li>Recovery and generalized-entropy interfaces (declared premises, not axioms)</li>
                        <li>Finite-dimensional regulator premise</li>
                        <li>Boundary gauge fixed-point premise</li>
                        <li>Central or higher-associator strictification plus at least one allowed strict representative with trivial represented loop holonomy where global transportability is invoked</li>
                        <li>Declared sector completions (three generations, one Higgs, no extra light sectors) with open physical status</li>
                        <li>Symmetric braiding in the 3+1D EFT branch</li>
                        <li>Compact-gauge refinement receipt: finite extendability, explicit center-compatible block-multiplicity embeddings, common stagewise strict representatives, and coherent surjective boundary-group maps that intertwine them</li>
                        <li>Finite tensor realizations and compatible objectwise finite-dimensional forgetful fibers, or an explicit super-Tannakian fork</li>
                    </ul>
                    <div style={{ marginTop: '12px', padding: '8px', background: 'rgba(0,0,0,0.2)', fontSize: '0.9em' }}>
                        <strong>Quantitative closure coordinates</strong>
                        <div style={{ color: 'var(--text-muted)', marginTop: '4px' }}>
                            P is a certified root of a declared incomplete local map. The official global equation is
                            N = log M<sub>0</sub>(𝔘<sub>N</sub>). Its finite robust form is
                            𝔉<sub>r,0</sub>(D<sub>*</sub>) = {'{'}D<sub>*</sub>{'}'}.
                            The reversible branch reduces its evaluation to exact model counting.
                        </div>
                    </div>
                </div>
            </div>

            <h3 style={{ fontSize: '1em', marginTop: '32px' }}>QFT as Continuum Limit</h3>
            <p style={{ marginBottom: '16px' }}>
                Quantum field theory is an <strong>effective continuum limit</strong> of the screen algebra when:
            </p>
            <ul style={{ paddingLeft: '20px', lineHeight: '1.8', marginBottom: '16px' }}>
                <li>The Lambda-located horizon count is large (N<sub>&Lambda;</sub> &asymp; {SCREEN_CAPACITY_REFERENCE_DISPLAY})</li>
                <li>The curvature scale is much larger than the Planck length (L &gt;&gt; l<sub>P</sub>)</li>
                <li>The observables are "coarse-grained" over many pixels</li>
            </ul>
            <p style={{ marginBottom: '16px' }}>
                In this limit, the screen algebra is intended to be modeled by a local quantum field theory on
                the emergent 3+1D spacetime. A nonperturbative OS/Wightman completion, including locality,
                Poincar&eacute; covariance, positivity, and the spectral condition, remains an open Q4 receipt.
            </p>

            <Explainer title="Why QFT breaks down at the Planck scale">
                <p>
                    QFT is an effective description valid at energies E &lt;&lt; M<sub>P</sub> (distances L &gt;&gt; l<sub>P</sub>).
                    At the Planck scale, the continuum approximation breaks down because:
                </p>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                    <li>Individual pixels become resolved (the "lattice spacing" of the screen)</li>
                    <li>The finite carrier capacity of the screen (Axiom A1) limits the number of degrees of freedom</li>
                    <li>The emergent spacetime geometry fluctuates on this scale</li>
                </ul>
                <p>
                    This explains why quantizing gravity as a QFT fails: GR + QFT is non-renormalizable because
                    QFT assumes a smooth background, but at the Planck scale the background IS the dynamical
                    variable (the screen). OPH uses the screen algebra at the fundamental level.
                </p>
            </Explainer>

            <Explainer title="Chain 1 and Chain 2: same axioms, different paths">
                <p>
                    Both chains share the same three core axioms; the realized matter sector enters through the
                    declared completions:
                </p>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                    <li><strong>Chain 1 (GR):</strong> Emphasizes recoverability, generalized entropy, the explicit BW scaling branch, the null bridge, the separate bounded-interval projective branch, and fixed-cap stationarity. Result: a conditional Lorentz branch and a conditional Jacobson-type Einstein branch.</li>
                    <li><strong>Chain 2 (QFT):</strong> Emphasizes observer agreement on overlaps, gauge-as-gluing, transportability, the explicit compact-gauge refinement receipt, and the declared sector completions. Result: receipt-conditional compact gauge reconstruction, the structural Standard Model branch, and downstream continuation lanes.</li>
                </ul>
                <p>
                    The two chains share the same screen and foundational structure. In Chain 2 the admissibility
                    filters cut the candidate class, and the realized sector enters through the declared completions.
                </p>
                <p>
                    Synthesis page shows how they combine into a unified picture.
                </p>
            </Explainer>

            <Explainer title="Matter-Lane Boundaries In Chain 2">
                <p>
                    Chain 2 separates a strong structural core from several matter-sector boundaries:
                </p>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                    <li>Quark source equations leave a free (R<sub>&gt;0</sub>)<sup>2</sup> spread fiber, so numeric rows remain withheld; the mixed-scheme target packet and GeV mass textures do not define physical dimensionless Yukawas.</li>
                    <li>Charged leptons have an exact A<sub>5</sub>/C<sub>3</sub> face-corner carrier and a conditional fixed-point theorem for one declared map. An engineered digital CFQ model closes schema nonemptiness and gives a central record dilation, but its registers, automaton, grading, clock, and response are authored inputs, and historical no-target ancestry fails audit. A conditional nature/pole theorem gives the correct transport implications after the physical Yukawa response and CFQ-to-Dyson singularity readout are assumed; its zero-self-energy kernel is only a free witness. Its 0.000300 ppm headline uses rounded fields; the tau residual is -1.387289 ppm against the packet's higher-precision central value. Physical source selection, attachment, determinant, coherent branch, cofinal refinement, interacting kernel, and infrared completion remain open.</li>
                    <li>Neutrino isotropic no-go retained; the target-informed weighted-cycle point is a rejected comparison candidate with open source, basis, Takagi, and ordering gates</li>
                    <li>Higgs/top proof structure and scope discipline around the closed source-only split theorem</li>
                    <li>Hadron backend / compute-bound closure</li>
                </ul>
                <p>
                    The foundation (axioms &rarr; gauge branch &rarr; particle-structure ledger) is stronger than the
                    detailed matter continuations. The QFT landing is a typed dependency graph: QFT-Q2 and QFT-Q3
                    are parallel descendants of QFT-Q1, strict finite-order W/Z algebra belongs to QFT-Q3, and
                    QFT-Q4 separately requires a nonperturbative observable tower and resonance continuation.
                    These conditional implications are checked. W/Z carry no physical pole prediction status because
                    the OPH-native action, quantum construction, matching and identity transcripts, physical-current
                    amplitudes, numerical freeze, observable tower, analytic sheet, and clock remain open. The
                    weighted-cycle neutrino candidate is rejected, while the charged lane and the quark source-spread,
                    scheme-coordinate, and physical-Yukawa boundaries remain explicit.
                </p>
                <div style={{ display: 'grid', gap: '8px', marginTop: '12px' }}>
                    {PARTICLE_LANE_STATUS.map((lane) => (
                        <div key={lane.label} style={{ fontSize: '0.82em', color: 'var(--text-secondary)' }}>
                            <strong>{lane.label}:</strong> {lane.summary}
                        </div>
                    ))}
                </div>
            </Explainer>
        </div>
    );
}
