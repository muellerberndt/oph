import { Explainer } from '../components/Explainer';

export function ClassicalPhysicsPage() {
    return (
        <div>
            <div className="section-header">
                <span className="section-tag gr">Chain 1: GR</span>
                <h1 style={{ fontSize: '1.5rem', margin: 0 }}>Classical Physics Emerges</h1>
            </div>

            <p style={{ marginBottom: '16px' }}>
                The <strong>Chain 1 synthesis page</strong> treats the gravity route as a conditional branch on the
                declared paper surface. Lorentz kinematics sits on the explicit BW branch, and the Einstein step sits
                on a Jacobson-type entanglement-equilibrium branch with the null bridge, the separate bounded-interval
                projective branch, and fixed-cap stationarity kept explicit. Classical physics is the effective
                limiting behavior of that branch.
            </p>
            <p style={{ marginBottom: '24px' }}>
                The derivation chain is:
            </p>

            <div className="math-block" style={{ fontSize: '1em', lineHeight: '2.2' }}>
                Core screen axioms &rarr; Recoverability + Generalized Entropy &rarr; Conditional Lorentz Branch &rarr;
                Geometric Modular Flow (BW branch) &rarr; Null Bridge + Bounded-Interval Projective Branch +
                Fixed-cap Stationarity &rarr;
                Conditional Einstein Branch &rarr; Classical Limits
            </div>

            <h3 style={{ fontSize: '1em', marginTop: '32px' }}>From GR to Newton</h3>
            <p style={{ marginBottom: '16px' }}>
                On the stated gravity branch, Newton&apos;s law of gravitation is the weak-field, slow-motion limit of
                the Einstein relation. Starting from G<sub>ab</sub> = 8&pi;G T<sub>ab</sub>, the Newtonian limit gives:
            </p>
            <div className="math-block">
                &nabla;&sup2;&Phi; = 4&pi;G&rho;
            </div>
            <p style={{ marginBottom: '16px' }}>
                where &Phi; is the Newtonian potential and &rho; is mass density. The gravitational force
                F = &minus;m&nabla;&Phi; = &minus;GMm/r&sup2; follows immediately on that branch. The lab presents this
                as a classical readout of the declared conditional gravity surface.
            </p>

            <h3 style={{ fontSize: '1em', marginTop: '32px' }}>Geodesic Motion</h3>
            <p style={{ marginBottom: '16px' }}>
                In GR, free particles follow geodesics: the straightest possible paths in curved spacetime.
                The geodesic equation:
            </p>
            <div className="math-block">
                d&sup2;x<sup>&mu;</sup>/d&tau;&sup2; + &Gamma;<sup>&mu;</sup><sub>&alpha;&beta;</sub> (dx<sup>&alpha;</sup>/d&tau;)(dx<sup>&beta;</sup>/d&tau;) = 0
            </div>
            <p style={{ marginBottom: '16px' }}>
                In the Newtonian limit, this reduces to Newton's second law: F = ma, where the "force" is the
                gradient of the gravitational potential. In the OPH gravity route, this is the effective classical
                consequence of the branch-conditional geometry.
            </p>

            <h3 style={{ fontSize: '1em', marginTop: '32px' }}>Newton's Three Laws</h3>
            <div className="card" style={{ marginBottom: '12px', borderLeft: '3px solid var(--accent-rose)' }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '0.9em' }}>First Law (Inertia)</h4>
                <p style={{ margin: 0, fontSize: '0.85em' }}>
                    A body continues in uniform motion unless acted upon by a force. In OPH: a geodesic in flat
                    spacetime is a straight line. The "natural state" is geodesic motion (maximum entropy trajectory).
                    Inertia is the tendency of a system to follow the path of maximum ignorance.
                </p>
            </div>
            <div className="card" style={{ marginBottom: '12px', borderLeft: '3px solid var(--accent-rose)' }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '0.9em' }}>Second Law (F = ma)</h4>
                <p style={{ margin: 0, fontSize: '0.85em' }}>
                    Force equals mass times acceleration. In OPH: non-geodesic motion requires a stress-energy
                    source that curves spacetime. The geodesic deviation from "straight" is proportional to the
                    curvature, which is proportional to the stress-energy through the gravity branch. F = ma is the
                    Newtonian limit.
                </p>
            </div>
            <div className="card" style={{ marginBottom: '12px', borderLeft: '3px solid var(--accent-rose)' }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '0.9em' }}>Third Law (Action-Reaction)</h4>
                <p style={{ margin: 0, fontSize: '0.85em' }}>
                    Every action has an equal and opposite reaction. In OPH: this follows from the conservation
                    of stress-energy &nabla;<sub>a</sub>T<sup>ab</sup> = 0, which is a consequence of the Bianchi
                    identity &nabla;<sub>a</sub>G<sup>ab</sup> = 0 on the gravity branch. Momentum conservation
                    is encoded geometrically in that effective description.
                </p>
            </div>

            <h3 style={{ fontSize: '1em', marginTop: '32px' }}>Thermodynamics</h3>
            <p style={{ marginBottom: '16px' }}>
                The laws of thermodynamics appear here as consequences of the OPH framework:
            </p>
            <div className="card" style={{ marginBottom: '12px', borderLeft: '3px solid var(--accent-gold)' }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '0.9em' }}>Zeroth Law (Thermal Equilibrium)</h4>
                <p style={{ margin: 0, fontSize: '0.85em' }}>
                    If A is in equilibrium with B, and B with C, then A with C. In OPH: this is overlap consistency
                    (Axiom A2). If patches A-B and B-C agree on B, then A and C have a consistent description on
                    any shared data.
                </p>
            </div>
            <div className="card" style={{ marginBottom: '12px', borderLeft: '3px solid var(--accent-gold)' }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '0.9em' }}>First Law (Energy Conservation)</h4>
                <p style={{ margin: 0, fontSize: '0.85em' }}>
                    Energy is conserved: dU = &delta;Q &minus; &delta;W. In OPH: follows from the stress-energy
                    conservation &nabla;<sub>a</sub>T<sup>ab</sup> = 0, which is built into Einstein's equations
                    via the Bianchi identity.
                </p>
            </div>
            <div className="card" style={{ marginBottom: '12px', borderLeft: '3px solid var(--accent-gold)' }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '0.9em' }}>Second Law (Entropy Increase)</h4>
                <p style={{ margin: 0, fontSize: '0.85em' }}>
                    Entropy never decreases: dS &ge; 0. In the OPH gravity lane, the generalized second law and
                    quantum focusing are separate physical interfaces. They are not consequences of A3. On the
                    branch where those interfaces hold, S<sub>gen</sub> = A/(4G) + S<sub>bulk</sub> is monotonic.
                </p>
            </div>
            <div className="card" style={{ marginBottom: '12px', borderLeft: '3px solid var(--accent-gold)' }}>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '0.9em' }}>Third Law (Absolute Zero)</h4>
                <p style={{ margin: 0, fontSize: '0.85em' }}>
                    Entropy approaches zero as temperature approaches zero. In OPH: at T = 0, the modular
                    Hamiltonian has a unique ground state, and the entanglement entropy is minimized. Perfect
                    purity is the limit of maximum information.
                </p>
            </div>

            <h3 style={{ fontSize: '1em', marginTop: '32px' }}>The Complete Picture</h3>
            <p style={{ marginBottom: '16px' }}>
                Chain 1 collects the classical readout of the gravity branch. The ingredients are:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                <div style={{ padding: '12px', background: 'rgba(201, 112, 112, 0.1)', border: '1px solid rgba(201, 112, 112, 0.3)', fontSize: '0.85em' }}>
                    <div style={{ color: 'var(--accent-rose)', fontWeight: 600, marginBottom: '4px' }}>Declared branch outputs</div>
                    <ul style={{ paddingLeft: '16px', margin: 0, lineHeight: '1.8' }}>
                        <li>3+1 spacetime dimensions</li>
                        <li>Lorentz invariance</li>
                        <li>Conditional Einstein branch</li>
                        <li>Cosmological constant &Lambda;</li>
                        <li>Newton's laws of motion</li>
                        <li>Newtonian gravity</li>
                        <li>Laws of thermodynamics</li>
                        <li>Exact or conditional collar recovery on its declared premises</li>
                        <li>De Sitter cosmology</li>
                    </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(201, 169, 110, 0.1)', border: '1px solid rgba(201, 169, 110, 0.3)', fontSize: '0.85em' }}>
                    <div style={{ color: 'var(--accent-gold)', fontWeight: 600, marginBottom: '4px' }}>Input Ledger</div>
                    <ul style={{ paddingLeft: '16px', margin: 0, lineHeight: '1.8' }}>
                        <li>Oriented twelve-port observer screen</li>
                        <li>Observer agreement</li>
                        <li>Conditional maximum randomness</li>
                        <li>Recovery and generalized-entropy interfaces (declared premises, not axioms)</li>
                        <li>Central-interface structure, or finite-range Gibbs plus strong conditional matrix mixing</li>
                        <li>Scaling, stationarity, and null-bridge premises where invoked</li>
                    </ul>
                </div>
            </div>

            <Explainer title="What about electromagnetism?">
                <p>
                    Electromagnetism and the other gauge forces belong to <strong>Chain 2</strong> via the
                    gauge-as-gluing mechanism. Chain 1 gives gravity; Chain 2 gives the gauge forces. Both chains
                    share the three core axioms. Chain 2 also uses the declared sector completions with regulator,
                    transport, compact-reconstruction, and branch-specific assumptions.
                </p>
            </Explainer>

            <Explainer title="The arrow of time">
                <p>
                    The second law of thermodynamics implies an arrow of time: entropy increases along the thermodynamic time direction.
                    But the microscopic laws are time-reversal invariant. Where does the arrow come from?
                </p>
                <p>
                    In OPH, the answer is straightforward: the universe started with a small screen area
                    (low entropy = few active pixels) and is evolving toward the MaxEnt state (de Sitter, maximum
                    area). The arrow of time is the direction of increasing screen area. There is no mystery:
                    the initial state was atypical (low area), and typical evolution increases area.
                </p>
            </Explainer>

            <Explainer title="What the collar result does and does not derive">
                <p>
                    A derivation earns its keep by producing quantitative consequences that distinguish it from
                    standard physics. The decisive test is whether the axioms produce target values before the
                    relevant measurements are used as inputs.
                </p>
                <p>
                    The present collar packet has a narrower output ledger:
                </p>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                    <li>Zero collar CMI on the declared central-interface branch</li>
                    <li>A boundary-prefactored exponential CMI bound under uniform strong conditional matrix mixing</li>
                    <li>A sharp double-scaling margin that includes the growing UV boundary count</li>
                    <li>A recovery-error receipt derived from that scalar CMI envelope</li>
                </ul>
                <p>
                    This does not derive a precise a<sub>0</sub>, a galaxy force law, or an effective dark source.
                    Those steps remain a continuation until separate source-tensor, conservation, normalization,
                    coupling, and observational receipts are supplied. Other Chain 1 claims stand or fall on their
                    own declared branch receipts.
                </p>
            </Explainer>
        </div>
    );
}
