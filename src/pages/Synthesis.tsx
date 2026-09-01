import { Explainer } from '../components/Explainer';
import { CORE_PARAMETERS, OPH_PAPERS, SPACETIME_PUBLIC_ROWS } from '../content/paperSurface';
import {
    ALPHA_U_COMPARISON_REFERENCE_DISPLAY,
    ALPHA_U_FORWARD_REFERENCE_DISPLAY,
    COMMON_LOAD_CAPACITY_DISPLAY,
    ELECTROWEAK_BRIDGE_CAPACITY_DISPLAY,
    FINITE_PRESENCE_CAPACITY_DISPLAY,
    PIXEL_COMPARISON_REFERENCE_DISPLAY,
    PIXEL_FORWARD_REFERENCE_DISPLAY,
    POISSON_CAPACITY_DISPLAY,
    SCREEN_CAPACITY_REFERENCE_EXACT_DISPLAY,
} from '../core/ophMath';

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
                conditional extensions. The same paper surface includes a dedicated consensus
                spine and a concrete screen-microphysics architecture. Both start from the same three-axiom basis on a
                holographic screen S&sup2;, while specific pages add the theorem-local technical premises needed for
                Lorentz, gauge, particle, or observer-level statements. The consensus spine produces an authenticated
                finite informational poset and its canonical longest-parent-chain height. Independently of event height,
                the exact rank-three source Gram quotient defines W<sub>src</sub> = R &oplus; V<sub>src</sub>, a
                four-dimensional ambient target carrier with one positive and three negative directions; the
                quotient&apos;s unit directions become future-null directions. This target-carrier dimension is not an
                intrinsic dimension estimate for the finite poset, and the 1+3 precursor supplies no smooth Lorentzian
                manifold. Event placement uses height only as F(e) = (&tau;h(e), x(e)) and therefore still needs a
                source-selected spatial readback. Given an explicit edge-speed bound and converse-support
                certificate, the generated order embeds faithfully into the constructed Lorentz cone and every
                source interval is exactly the corresponding cone interval on the placed event image.
                A physical continuum additionally requires agreement with signal causality, count-to-volume
                calibration, source-selected refinement convergence, manifoldlikeness, dimension and topology, and
                curvature convergence. On the same finite event type, a separate minimal theorem in a supplied 3+1
                tensor interface turns nine supplied source-direction balances, Ward/Bianchi conservation, and
                connectedness into all-null balance and an Einstein-form identity. The order and tensor fields share
                events, but the order does not generate the fields, step, or balance laws or identify
                tensor-coordinate differences with the constructed source carrier; physical curvature, stress,
                coupling, vacuum, and scale remain continuum attachments. Imposed compatibility controls do not
                establish source-selected refinement or
                manifoldlikeness.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginBottom: '16px' }}>
                {SPACETIME_PUBLIC_ROWS.map((row) => (
                    <div key={row.label} className="card" style={{ borderLeft: `3px solid ${row.tier === 'structural' ? 'var(--accent-cyan)' : 'var(--accent-rose)'}` }}>
                        <div style={{ fontSize: '0.75em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>{row.tier}</div>
                        <h4 style={{ margin: '4px 0', fontSize: '0.9em' }}>{row.label}</h4>
                        <div style={{ color: 'var(--accent-green)', fontWeight: 700, fontSize: '0.82em' }}>{row.value}</div>
                        <p style={{ margin: '8px 0 0', fontSize: '0.78em', color: 'var(--text-secondary)' }}>{row.note}</p>
                    </div>
                ))}
            </div>

            <div className="card" style={{ marginBottom: '24px', borderLeft: '3px solid var(--accent-purple)' }}>
                <h4 style={{ margin: '0 0 8px', fontSize: '0.9em', color: 'var(--accent-purple)' }}>Causal-set connection and present evidence</h4>
                <p style={{ margin: 0, fontSize: '0.82em', color: 'var(--text-secondary)' }}>
                    The exact finite source order is causal-set-like in the minimal mathematical sense of being a
                    locally finite order. Causal set theory&apos;s physical reading also needs faithful embedding,
                    manifoldlikeness, topology, dimension, and count-to-volume calibration; Lorentz-invariant
                    reference constructions use Poisson sprinkling. OPH&apos;s deterministic log is not a sprinkling.
                    The current 2,304-event diagnostic finds all 736 qualifying intervals outside its frozen
                    exploratory 3+1 band, so the honest receipt is current-cutoff dissimilarity for the captured
                    informational event semantics. It supplies neither manifoldlikeness nor a #I/&rho; &rarr; Vol(I)
                    law, and it is not a physical no-go.
                </p>
            </div>

            <h3 style={{ fontSize: '1em', marginTop: '32px' }}>Local Closure And Global Readback</h3>
            <p style={{ marginBottom: '16px' }}>
                OPH is formulated as a closure program that aims to minimize unexplained quantitative inputs, while
                counting working borrows and theorem-local premises explicitly. The local constant is a certified root of a declared
                incomplete map. The global closure principle stands beside the three axioms. It forces equality
                after the construction-side and readback-side quantities have been proved to denote the same typed
                invariant. It does not build those quantities, their physical bridge, a return map, or the required
                existence, uniqueness, and stability theorems:
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
                the selected no-G scale certificate. It becomes physical only after a source-selected capacity is
                identified with the invariant counted by global readback and attached to the horizon. The hierarchy
                equation gives a conditional common-load coordinate. The OPH paper set separates recovered structural theorems, explicit
                branch-conditional results, calibration results, and constructions that require further premises.
            </p>
            <p style={{ marginBottom: '16px' }}>
                The measured-endpoint pair P<sub>C</sub> = {PIXEL_COMPARISON_REFERENCE_DISPLAY} and
                alpha<sub>U</sub>(P<sub>C</sub>) = {ALPHA_U_COMPARISON_REFERENCE_DISPLAY} gives
                N<sub>EW</sub>(P<sub>C</sub>) = {ELECTROWEAK_BRIDGE_CAPACITY_DISPLAY}. The source-forward pair
                P<sub>fwd</sub> = {PIXEL_FORWARD_REFERENCE_DISPLAY} and alpha<sub>U</sub>(P<sub>fwd</sub>) =
                {ALPHA_U_FORWARD_REFERENCE_DISPLAY} gives N<sub>0</sub>(P<sub>fwd</sub>) =
                {COMMON_LOAD_CAPACITY_DISPLAY}. These coordinates belong to distinct branches.
            </p>
            <p style={{ marginBottom: '16px' }}>
                On the finite branch, total reserve expectation P<sub>fwd</sub>/4 and six-class equidistribution
                give one-class presence P<sub>fwd</sub>/24. Physical selection of one blocked class, its
                scalar-weighted presence receipt, and a reserve-to-global-capacity survival theorem would give
                N<sub>presence</sub> = N<sub>0</sub>(1-P<sub>fwd</sub>/24) =
                {FINITE_PRESENCE_CAPACITY_DISPLAY}. A mean-count or projective-limit carrier would instead give
                N<sub>Poisson</sub> = N<sub>0</sub>exp(-P<sub>fwd</sub>/24) = {POISSON_CAPACITY_DISPLAY}. Cosmic
                use would further require the inherited electroweak premises, common-load identity, physical
                Z<sub>6</sub> seam action, and horizon-record identity. Exact neutral, one-class, and six-class
                compositional completions share the declared local survival datum and disagree globally. The declared
                finite-cut attachment class therefore selects no reserve action, and its horizon lane has no
                source-selected positive capacity carrier. The Planck base-LambdaCDM comparison coordinate is {SCREEN_CAPACITY_REFERENCE_EXACT_DISPLAY};
                the residuals are -0.6287% and -0.3880%. Both comparisons are target-exposed and non-predictive.
            </p>

            <h3 style={{ fontSize: '1em', marginTop: '32px' }}>Seven Paper Surfaces, One Program</h3>
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
                        SHARED OPH BASIS + NAMED THEOREM-LOCAL INTERFACES
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ padding: '8px 16px', background: 'rgba(201,112,112,0.15)', border: '1px solid var(--accent-rose)', color: 'var(--accent-rose)', fontSize: '0.8em', fontWeight: 600, textAlign: 'center', width: '100%' }}>
                            GR: PARALLEL FINITE / ANALYTIC BRANCHES
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px' }}>
                            {[
                                ['Source-causal', 'Exact finite poset + source height; independently R ⊕ rank-3 quotient → ambient 1+3 carrier; F(e) = (tau h(e), x(e)) uses height only at placement.'],
                                ['Modular / entropy', 'BW, collar, null-stress, projective, and stationarity inputs supply the conditional geometric/stress route.'],
                                ['Finite tensor', 'Supplied 3+1 tensors + nine balances + Ward/Bianchi → exact finite Einstein-form shape.'],
                            ].map(([title, detail]) => (
                                <div key={title} style={{ padding: '9px', background: 'rgba(201,112,112,0.05)', border: '1px solid rgba(201,112,112,0.2)', fontSize: '0.72em', color: 'var(--text-secondary)' }}>
                                    <strong style={{ display: 'block', color: 'var(--accent-rose)', marginBottom: '4px' }}>{title}</strong>
                                    {detail}
                                </div>
                            ))}
                        </div>
                        <div style={{ textAlign: 'center', color: 'rgba(201,112,112,0.5)', fontSize: '0.9em' }}>&darr;</div>
                        <div style={{ padding: '9px', background: 'rgba(201,112,112,0.08)', border: '1px solid rgba(201,112,112,0.3)', fontSize: '0.75em', color: 'var(--text-secondary)', textAlign: 'center' }}>
                            Recombine only on one source-selected family with physical causal, spatial, count-volume,
                            manifoldlikeness, topology, tensor/stress, coupling, and curvature certificates
                            <div style={{ marginTop: '5px', color: 'var(--accent-rose)', fontWeight: 700 }}>
                                Conditional smooth Einstein branch &rarr; classical limits
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                        <div style={{ padding: '8px 16px', background: 'rgba(122,184,212,0.15)', border: '1px solid var(--accent-blue)', color: 'var(--accent-blue)', fontSize: '0.8em', fontWeight: 600, textAlign: 'center', width: '100%' }}>
                            CHAIN 2: QFT
                        </div>
                        {['Complete compact port response', 'Endogenous carrier transport', 'Forced u(1)+su(2)+su(3) Lie type', 'Declared matter fixture and Z6 kernel', 'Required source and global-form attachment', 'Conditional particle extensions'].map((step, i) => (
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
                    <div style={{
                        display: 'inline-block',
                        padding: '12px 24px',
                        background: 'rgba(0, 255, 65, 0.1)',
                        border: '1px solid var(--accent-green)',
                        color: 'var(--accent-green)',
                        fontWeight: 700,
                        fontSize: '0.9em',
                    }}>
                        SHARED EFFECTIVE OPH PROGRAM — WITH CLAIM TIERS PRESERVED
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
                            <li>Source-derived ambient 1+3 causal precursor; smooth 3+1 spacetime is an effective-limit target</li>
                            <li>Shared observer-patch basis for gravity and gauge structure</li>
                            <li>Explicit branch assumptions and continuation conditions</li>
                            <li>Certified local map roots; direct global N closure remains non-evaluable</li>
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
                <span style={{ color: 'var(--text-secondary)' }}>Spacetime is a conditional reconstruction from information plus physical continuum receipts</span>

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
                <span style={{ color: 'var(--text-secondary)' }}>P has a certified declared-map root; direct N is not evaluable and emits no cosmic value, while the reserve comparisons have no predictive status</span>

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
                    <li><strong>Are the derivations rigorous?</strong> The recovered structural core is stronger than the downstream conditional constructions. BW internalization, some particle continuations, and several phenomenology surfaces require explicitly stated additional premises.</li>
                    <li><strong>Can it be falsified?</strong> Named branches have explicit pressure tests; a comparison counts as falsifying only when its eligible physical contract is fixed before the data are examined.</li>
                </ul>
                <p>
                    OPH should be evaluated by the same standards as any physical theory: internal consistency,
                    agreement with existing data, and testable predictions. The paper stack separates structural
                    theorems, branch conditions, calibration results, and additional-premise constructions.
                    Physical identification, continuum, instrument, source-action, clock, and comparison remain
                    distinct scientific requirements; the Lab does not compress them into one generic claim.
                </p>
            </Explainer>

            <Explainer title="Relationship to other programs">
                <p>
                    OPH draws on and synthesizes ideas from multiple research programs:
                </p>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                    <li>
                        <strong>Causal set theory:</strong> The source-derived finite order realizes the minimal locally
                        finite order structure, while faithful embedding, Poisson-sprinkling comparison,
                        manifoldlikeness, topology, dimension, and count-volume calibration remain explicit physical
                        tests. See <a href="https://doi.org/10.1103/PhysRevLett.59.521" target="_blank" rel="noreferrer">Bombelli et al.</a>
                        {' '}and <a href="https://doi.org/10.1007/s41114-019-0023-1" target="_blank" rel="noreferrer">Surya&apos;s review</a>.
                    </li>
                    <li><strong>AdS/CFT:</strong> The holographic principle and bulk reconstruction, with OPH asking for a separately tested analogue in cosmological settings</li>
                    <li><strong>Jacobson&apos;s thermodynamic gravity:</strong> Einstein-equilibrium logic used in the conditional gravity branch</li>
                    <li><strong>It from bit (Wheeler):</strong> Information as the foundation of physics, made precise through von Neumann algebras</li>
                    <li><strong>QBism:</strong> Observer-relative quantum states, grounded in patch structure</li>
                    <li><strong>Tensor networks:</strong> MERA and HaPPY codes, as models of the screen-to-bulk map</li>
                    <li><strong>Consensus and distributed systems:</strong> fixed points, repair schedules, holonomy obstructions, and stable records as physics-facing objects</li>
                </ul>
                <p>
                    OPH organizes these insights in a single observer-patch framework with a common axiomatic
                    foundation and an explicit boundary between structural results and physical attachments.
                </p>
            </Explainer>
        </div>
    );
}
