import { Explainer } from '../components/Explainer';
import { useLabSetting, useLabState } from '../state/labState';

type DetailLevel = 'plain' | 'physics' | 'formal';

interface Axiom {
    id: string;
    name: string;
    plain: string;
    physics: string;
    formal: string;
}

const AXIOMS: Axiom[] = [
    {
        id: 'A1',
        name: 'Oriented Twelve-Port Observer Screen',
        plain: 'Observers live on a spherical screen built from finite patches. Each local carrier exposes twelve ports on a boundary shaped like an icosahedron surface, and carriers join along typed seams, refine to a finer sphere, and keep records, readback, and repair moves.',
        physics: 'For every regulator there is a typed observer-screen object: finite local carriers, each with twelve primitive central port projections and an oriented boundary complex with 12 vertices, 30 edges, and 20 faces; seam algebras with coherent triple overlaps forming a nerve; and an oriented spherical support with a degree-one bridge from the nerve, all commuting with refinement.',
        formal: 'N_r = (P_r, A_r, R_r, I_r, U_r, C_r, N_r, S_r, b_r): a finite patch/overlap category with an isotone algebra net and central records; carriers with port projections e_p summing to 1 and boundary packet K = (P, E, F, o), |P| = 12, |E| = 30, |F| = 20, degree-five ports, five-cycle links, coherently oriented two-face edges; seam restriction cocycles; support S_r realized in S\u00b2 with mesh \u2192 0; bridge b_r with (b_r)_*[z_r] = [S_r].',
    },
    {
        id: 'A2',
        name: 'Observer Agreement',
        plain: 'Observers agree on what shared data means. Where patches overlap, their interpretations of accepted public data coincide. A global "view from nowhere" is absent; reality is the mutual consistency of perspectives.',
        physics: 'The interpretation map from observer-accessible data to operational meanings (probabilities, update effects, public record values) is natural with respect to every visible overlap restriction, recharting, seam translation, higher-overlap map, and refinement map, on accepted public data.',
        formal: 'J_r: Data_r \u2192 Meaning_r natural under all visible maps; J_O(res_{P\u2192O} d_P) = J_O(\u03c4_{Q\u2192P} res_{Q\u2192O} d_Q) on accepted data; J_r \u2218 c_{s\u2192r} = C_{s\u2192r} \u2218 J_s across resolutions. Raw mismatch and repair precede acceptance; no global state is assumed.',
    },
    {
        id: 'A3',
        name: 'Conditional Maximum Randomness',
        plain: 'Everything that observer agreement leaves unconstrained is maximally random. The realized state is the least informative one compatible with what agreement fixes.',
        physics: 'A state is a compatible family of local states on the accessible algebra net. Relative to an exact reference family, a state-determining observer cover, and positive exact weights supplied by the screen architecture, the realized family is the information projection onto the convex set fixed by the finite observer-visible constraints.',
        formal: '\u03c1_r = argmin over K_r of \u03a3_P w_{r,P} D(\u03c1_{r,P} \u2016 \u03c4_{r,P}), where the A1-generated cover has an injective restriction map on K_r, every w_{r,P} is strictly positive and exact, and every A2-visible constraint factors through the A1 constraint grammar. This is weighted local entropy maximization when each reference density is identity-proportional. Optimizer compatibility across refinement is a separate theorem.',
    },
];

export function AxiomsPage() {
    const [levelRaw, setLevel] = useLabSetting('axioms.level');
    const { resetKeys } = useLabState();
    const level = levelRaw as DetailLevel;

    return (
        <div>
            <div className="section-header">
                <span className="section-tag foundation">Foundation</span>
                <h1 style={{ fontSize: '1.5rem', margin: 0 }}>The Three Axioms</h1>
            </div>

            <p style={{ marginBottom: '24px' }}>
                OPH rests on three core axioms: the oriented twelve-port observer screen, observer
                agreement, and conditional maximum randomness. Everything else is a theorem, an exact
                result inside a named finite realization, a declared open interface, an independence
                result with countermodels, a physical identification, or a withdrawn claim. The paper
                surface names theorem-local premises where specific Lorentz, Einstein, or gauge
                statements are invoked; none of those premises is an axiom.
            </p>

            <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                <button
                    className="btn btn-ghost"
                    onClick={() => resetKeys(['axioms.level'])}
                    style={{ fontSize: '0.8em', padding: '6px 14px' }}
                >
                    Reset
                </button>
                {(['plain', 'physics', 'formal'] as const).map(l => (
                    <button
                        key={l}
                        className={`btn ${level === l ? 'btn-primary' : 'btn-ghost'}`}
                        onClick={() => setLevel(l)}
                        style={{ fontSize: '0.8em', padding: '6px 14px' }}
                    >
                        {l === 'plain' ? 'Plain English' : l === 'physics' ? 'Physics' : 'Formal Math'}
                    </button>
                ))}
            </div>

            {AXIOMS.map((ax) => (
                <div key={ax.id} className="card" style={{ marginBottom: '16px', borderLeft: '3px solid var(--accent-gold)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '36px',
                            height: '36px',
                            background: 'rgba(201, 169, 110, 0.15)',
                            border: '1px solid var(--accent-gold)',
                            fontSize: '0.8em',
                            fontWeight: 700,
                            color: 'var(--accent-gold)',
                        }}>
                            {ax.id}
                        </span>
                        <h3 style={{ margin: 0, fontSize: '1em' }}>{ax.name}</h3>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.9em' }}>
                        {level === 'plain' ? ax.plain : level === 'physics' ? ax.physics : ax.formal}
                    </p>
                </div>
            ))}

            <div className="card" style={{ marginBottom: '16px', borderLeft: '3px solid var(--accent-blue)' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '0.95em' }}>Declared Completions (not axioms)</h3>
                <div style={{ fontSize: '0.84em', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                    Sector statements the finite results do not derive: each enters as an explicit declaration with open physical status
                </div>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.8', margin: 0, fontSize: '0.84em' }}>
                    <li><strong>Generation count:</strong> the CP-capability and weak-sector clauses give the window 3 to 5; the count inside it is open, with three entering only as a declared completion.</li>
                    <li><strong>One Higgs:</strong> the finite scan fixes compatible scalar charges and channels, not scalar existence or multiplicity.</li>
                    <li><strong>No extra light sectors:</strong> a source-completeness theorem is open; arbitrary sterile extensions remain countermodels.</li>
                </ul>
                <p style={{ margin: '10px 0 0 0', fontSize: '0.82em', color: 'var(--text-muted)' }}>
                    The finite gauge chain (current algebra, hypercharge, color count, common kernel) uses
                    the incidence, response, and matter premises alone and consumes none of these declarations.
                </p>
            </div>

            <Explainer title="Extended Inputs Beyond Core Axioms">
                <p>The papers distinguish the three axioms from theorem-local technical premises and branch conditions:</p>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                    <li><strong>Declared completions:</strong> the generation, scalar, and sector declarations above, each with open physical status</li>
                    <li><strong>Transport premise:</strong> central or higher-associator strictification plus at least one allowed strict representative with trivial represented loop holonomy when global transportability is invoked</li>
                    <li><strong>Scaling premise:</strong> Lorentz/null-modular/Einstein statements are scaling-limit claims. Literal fixed-cutoff matrix identities appear only in special representations.</li>
                    <li><strong>Stationarity premise:</strong> fixed-cap generalized-entropy stationarity for the admissible first-variation class used in the Jacobson branch</li>
                    <li><strong>Collar-recovery branch:</strong> either the exact central-interface Markov route, or a faithful finite-range Gibbs family with uniform strong conditional matrix mixing and the full boundary-aware rate margin. Ordinary clustering and a bare delta/l<sub>UV</sub> &rarr; infinity ratio do not discharge this premise.</li>
                    <li><strong>Finite collar receipts:</strong> interaction bounds, boundary counts, regional CMI, matrix-defect norms, predeclared mixing constants, held-out cuts, recovery error, and rate margins are finite proxies; they do not prove a cofinal limit.</li>
                    <li><strong>Compact-gauge refinement receipt:</strong> finite-state extendability, center-compatible block-multiplicity embeddings, common stagewise strict representatives with coherent surjective boundary-group maps that intertwine them, finite tensor realizations, compatible forgetful fibers, and symmetric braiding (or an explicit super-Tannakian fork)</li>
                    <li><strong>Regulator and fixed-point premises:</strong> local factor regulation and boundary fixed-point structure used in gauge reconstruction</li>
                </ul>
            </Explainer>

            <Explainer title="What these axioms give you">
                <p>The paper surface separates structural outputs from branch-conditional ones:</p>
                <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                    <li>From the screen identity and the explicit BW scaling branch, OPH recovers Lorentz kinematics on the extracted prime geometric subnet.</li>
                    <li>From the null bridge, the separate bounded-interval projective branch, and fixed-cap stationarity, OPH states a conditional Jacobson-type Einstein branch with those added ingredients kept explicit.</li>
                    <li>Collar CMI controls recovery error on its exact or conditional branch. As a scalar, it is not a stress tensor or dark-sector source.</li>
                    <li>The half-line generator/null-stress charge identification is internal to the null bridge; UV/BW cap-pair extraction and ordered cut-pair rigidity remain explicit scaffold items.</li>
                    <li>On the unit-split, source-selected twelve-port branch, the explicit A<sub>5</sub>-equivariant coefficient bracket has Lie type u(1)&oplus;su(3)&oplus;su(2); central records commute.</li>
                    <li>Massless photon and graviton remain symmetry-protected structural outputs.</li>
                </ul>
                <p>
                    Adding the full-rank compact skew-adjoint inner-current, regulator, transport, compact-reconstruction, and tensor-kernel inputs yields the conditional Standard Model gauge and one-generation matter-image branch
                    ([SU(3)&times;SU(2)&times;U(1)]/Z<sub>6</sub>, N<sub>c</sub>=3). N<sub>g</sub>=3 is a declared model completion inside the conditional 3-to-5 window; its physical family attachment is open.
                    Particle claims retain their own structural, calibration, comparison, and work-in-progress status.
                </p>
            </Explainer>
        </div>
    );
}
