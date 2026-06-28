import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, X } from 'lucide-react'
import ScrollReveal from '../components/ui/ScrollReveal'

interface Project {
  id: number
  title: string
  category: string
  client: string
  duration: string
  software: string[]
  tags: string[]
  description: string
  challenge: string
  solution: string
  outcome: string
  color: string
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Automotive Suspension Bracket — FEA & Redesign',
    category: 'FEA Analysis',
    client: 'Tier-1 Auto Supplier, Pune',
    duration: '3 weeks',
    software: ['SOLIDWORKS Simulation', 'CATIA V5'],
    tags: ['FEA', 'Automotive', 'Structural'],
    description: 'Full finite element analysis and structural redesign of a suspension control arm bracket that was failing fatigue tests.',
    challenge: 'The existing bracket was experiencing stress concentrations at the weld zones, causing premature failure at 60,000 cycles — well below the 200,000-cycle target.',
    solution: 'Performed von Mises stress analysis under peak load conditions, identified critical stress risers, and redesigned the geometry with filleted transitions and redistributed wall thicknesses.',
    outcome: 'Redesigned bracket achieved 230,000 cycles in physical testing. Weight reduced by 12%. Approved for production without tooling changes.',
    color: 'from-blue-500/20 to-blue-600/5',
  },
  {
    id: 2,
    title: 'Medical Device Housing — Product Design & GD&T',
    category: 'Product Design',
    client: 'MedTech Startup, Bangalore',
    duration: '5 weeks',
    software: ['SOLIDWORKS', 'KeyShot'],
    tags: ['Medical', 'GD&T', 'Injection Moulding'],
    description: 'Complete enclosure design for a handheld diagnostic device, from concept sketches to injection-moulding-ready drawings with full GD&T annotations.',
    challenge: 'The device had tight IP67 sealing requirements, required a snap-fit assembly without screws, and had to pass 1.5 m drop tests while maintaining sub-0.1 mm seal groove tolerances.',
    solution: 'Designed a two-part ABS enclosure with integrated snap hooks, O-ring groove with precise ±0.05 mm tolerances, and internal ribbing to absorb impact loads. Full GD&T callouts per ASME Y14.5.',
    outcome: 'First article passed IP67 and drop tests. Component accepted by the mould vendor without design revisions. Device received CE marking approval.',
    color: 'from-emerald-500/20 to-emerald-600/5',
  },
  {
    id: 3,
    title: 'Industrial Gearbox Assembly — Tolerance Stack-Up',
    category: 'Assembly Design',
    client: 'Machine Builder, Coimbatore',
    duration: '2 weeks',
    software: ['SOLIDWORKS', 'Excel (Monte Carlo)'],
    tags: ['Gearbox', 'Tolerance', 'Assembly'],
    description: 'Worst-case and statistical tolerance stack-up analysis for a 6-stage helical gearbox assembly to ensure shaft bearing preload was within spec across the full manufacturing spread.',
    challenge: 'The gearbox was showing inconsistent bearing preload in production — some units were too tight, others too loose — causing early bearing failures in 8% of units.',
    solution: 'Conducted arithmetic worst-case and RSS statistical stack-up across 14 contributing dimensions. Identified three dimensions with excessive contribution. Recommended tighter tolerances on housing bores and revised shim selection procedure.',
    outcome: 'Production reject rate dropped from 8% to under 0.5%. Shim selection time reduced by 40%. Customer saved ₹12 lakhs/year in warranty returns.',
    color: 'from-amber-500/20 to-amber-600/5',
  },
  {
    id: 4,
    title: 'Hydraulic Manifold — Reverse Engineering & CAD',
    category: 'Reverse Engineering',
    client: 'OEM Equipment Manufacturer, Chennai',
    duration: '4 weeks',
    software: ['SOLIDWORKS', 'Faro Arm (CMM data)'],
    tags: ['Reverse Engineering', 'Hydraulic', 'CAD'],
    description: 'Reverse engineering of a legacy hydraulic manifold block from a discontinued European supplier, creating a fully parameterised SOLIDWORKS model for local manufacture.',
    challenge: 'The OEM had 12 machines running on the manifold with no drawings or 3D data. The original supplier had ceased operations. Replacement lead time from Europe was 16 weeks.',
    solution: 'Used CMM point cloud data and manual measurement to reconstruct all 47 internal passage geometries, port thread forms, and surface finish requirements. Produced full 2D drawings to ISO 2768.',
    outcome: 'Local vendor produced first articles within 3 weeks. Fit and function verified on all 12 machines. Customer now has full IP control over the component.',
    color: 'from-purple-500/20 to-purple-600/5',
  },
  {
    id: 5,
    title: 'Robotic End-Effector — Concept to Prototype',
    category: 'Product Design',
    client: 'Automation Integrator, Chennai',
    duration: '6 weeks',
    software: ['SOLIDWORKS', 'SOLIDWORKS Simulation', 'KeyShot'],
    tags: ['Robotics', 'Product Design', 'Aluminium'],
    description: 'Ground-up mechanical design of a custom pneumatic gripper end-effector for a palletising robot handling bags from 10 kg to 50 kg at 12 cycles per minute.',
    challenge: 'Standard off-the-shelf grippers couldn\'t handle the weight range or the variable bag dimensions (280 mm to 680 mm width). The design had to mount on a FANUC M-710iC robot without exceeding the 18 kg payload limit.',
    solution: 'Designed a parallel-jaw gripper with adjustable pneumatic fingers in 6061 aluminium. FEA confirmed stress margins at maximum grip force. Total assembly weight: 14.2 kg including mounting adaptor.',
    outcome: 'Prototype validated at 18 cycles/minute with zero drops across 4,000 test cycles. Production unit deployed and running at the customer\'s plant.',
    color: 'from-cyan-500/20 to-cyan-600/5',
  },
  {
    id: 6,
    title: 'Consumer Product — Plastic Part DFM Review',
    category: 'CAD Design',
    client: 'Consumer Electronics Brand, Mumbai',
    duration: '1 week',
    software: ['SOLIDWORKS', 'Moldflow (review)'],
    tags: ['DFM', 'Consumer', 'Plastics'],
    description: 'Design-for-manufacture review of 14 plastic injection-moulded parts for a new consumer product, identifying tooling and moulding issues before mould cutting.',
    challenge: 'The client\'s industrial design team had produced renderings and sketches, but the parts had no draft angles, inadequate wall thickness uniformity, and several sink risk areas that would cause cosmetic defects.',
    solution: 'Rebuilt all 14 parts in SOLIDWORKS with proper draft analysis, uniform wall transitions, rib-to-wall ratios, gate and ejector pin locations. Delivered DFM report with annotated screenshots for each change.',
    outcome: 'Mould vendor approved parts without revisions. Client avoided an estimated ₹8 lakh in mould modifications. Product launched on schedule.',
    color: 'from-rose-500/20 to-rose-600/5',
  },
  {
    id: 7,
    title: 'Pressure Vessel — ASME Code Calculation & Drawing',
    category: 'CAD Design',
    client: 'Process Equipment Fabricator, Gujarat',
    duration: '2 weeks',
    software: ['SOLIDWORKS', 'PV Elite (client)'],
    tags: ['Pressure Vessel', 'ASME', 'Drawing'],
    description: 'Complete fabrication drawing package for a horizontal pressure vessel (ASME Section VIII Div 1) — shell, heads, nozzles, saddle supports, and weld details.',
    challenge: 'The fabricator had only a hand-sketch and verbal specification. They needed a complete drawing set to pass third-party inspection and obtain the ASME U-stamp.',
    solution: 'Modelled the vessel in SOLIDWORKS and produced GA drawing, nozzle schedule, weld map, BOM, and material traceability notes. Coordinated with client\'s PV Elite calculations for consistency.',
    outcome: 'Drawing package approved by third-party inspector on first submission. Vessel fabricated and delivered to site within 6 weeks of project start.',
    color: 'from-indigo-500/20 to-indigo-600/5',
  },
  {
    id: 8,
    title: 'Sheet Metal Enclosure — Complete Drawing Package',
    category: 'CAD Design',
    client: 'Panel Builder, Hyderabad',
    duration: '1 week',
    software: ['SOLIDWORKS Sheet Metal'],
    tags: ['Sheet Metal', 'Enclosure', 'CREO'],
    description: 'Full 3D model and flat pattern drawings for a custom electrical panel enclosure in 2 mm CR4 steel with powder coating, including DIN rail mounting and cable management provisions.',
    challenge: 'The client had been using a stock enclosure that didn\'t fit their component layout. They needed a custom enclosure that could be quoted and manufactured locally within 2 weeks.',
    solution: 'Built the sheet metal model using SOLIDWORKS Sheet Metal, produced flat patterns with all bend allowances, punch hole patterns, and a fabrication drawing with weld callouts and finish specification.',
    outcome: 'Local sheet metal shop fabricated the enclosure in 5 days from drawings. Fit check confirmed. Client now uses the drawing as their standard for repeat orders.',
    color: 'from-teal-500/20 to-teal-600/5',
  },
  {
    id: 9,
    title: 'Aerospace Bracket — Lightweight Topology Optimisation',
    category: 'FEA Analysis',
    client: 'Aerospace Sub-Contractor, Bangalore',
    duration: '3 weeks',
    software: ['SOLIDWORKS Simulation', 'Inspire (Altair)'],
    tags: ['Aerospace', 'Topology', 'Titanium'],
    description: 'Topology optimisation and FEA validation of an avionics bay mounting bracket to achieve maximum weight reduction while meeting load cases specified in DO-160G.',
    challenge: 'The existing bracket weighed 480 g in aluminium. The customer\'s new platform had a 300 g limit for the same load case. Off-the-shelf brackets were not available in the required footprint.',
    solution: 'Ran topology optimisation for three load cases (vibration, shock, sustained g). Interpreted the optimised geometry into a manufacturable design and validated with FEA. Final design in Ti-6Al-4V for machining.',
    outcome: 'Final bracket weight: 268 g — 44% lighter than original. Passed all load cases with positive safety margins. Submitted for AS9100 documentation package.',
    color: 'from-sky-500/20 to-sky-600/5',
  },
  {
    id: 10,
    title: 'Pump Impeller — CFD-Guided Redesign',
    category: 'FEA Analysis',
    client: 'Pump Manufacturer, Coimbatore',
    duration: '4 weeks',
    software: ['SOLIDWORKS Flow Simulation', 'SOLIDWORKS'],
    tags: ['CFD', 'Pump', 'Fluid Dynamics'],
    description: 'Internal flow simulation and impeller geometry optimisation for a centrifugal pump to improve efficiency from 62% to over 72% at the design point.',
    challenge: 'The current impeller had a flat efficiency curve and cavitation issues at off-design flow rates. The customer was losing market share to a competitor with a higher-efficiency pump.',
    solution: 'Modelled internal flow through the volute and impeller passages. Identified flow separation at blade inlet. Redesigned blade profile with improved inlet angles and gradual diffusion. Validated with multiple flow points.',
    outcome: 'Prototype pump tested at 74.1% efficiency — exceeding the target. Cavitation margin improved by 40%. Design submitted for patent application.',
    color: 'from-violet-500/20 to-violet-600/5',
  },
  {
    id: 11,
    title: 'Agricultural Equipment — Assembly & BOM',
    category: 'Assembly Design',
    client: 'Farm Equipment OEM, Rajkot',
    duration: '5 weeks',
    software: ['SOLIDWORKS', 'SOLIDWORKS PDM'],
    tags: ['Agriculture', 'Assembly', 'BOM'],
    description: 'Full assembly model and structured BOM for a 4-row seed drill mechanism with 340+ components, prepared for ERP import and after-sales parts support.',
    challenge: 'The OEM had 2D drawings scattered across multiple folders with no controlled BOM. They were unable to generate accurate part lists for production planning or after-sales.',
    solution: 'Rebuilt the entire assembly in SOLIDWORKS from 2D drawings, created sub-assemblies for each functional module, structured BOM with part numbers, materials, and finish codes. Delivered SOLIDWORKS PDM vault setup.',
    outcome: 'Production planning team reduced BOM generation time from 3 days to 4 hours. After-sales parts enquiry response time cut by 60%. ERP integration completed within 2 weeks.',
    color: 'from-lime-500/20 to-lime-600/5',
  },
  {
    id: 12,
    title: 'Oil & Gas Skid — Piping & Equipment Layout',
    category: 'Assembly Design',
    client: 'EPC Contractor, Mumbai',
    duration: '6 weeks',
    software: ['SOLIDWORKS', 'AutoCAD P&ID'],
    tags: ['Oil & Gas', 'Piping', 'Layout'],
    description: '3D layout model and general arrangement drawings for a 12 m × 4 m process skid handling produced water, including equipment positioning, pipe routing, and maintenance access verification.',
    challenge: 'Previous layout attempts by the client\'s team had failed access checks — maintenance personnel could not reach the heat exchanger bundle without removing pipework. The skid had to fit within a fixed footprint.',
    solution: 'Built 3D layout model with actual equipment envelope models. Ran maintainability checks for each piece of equipment. Reroutred conflicting pipework. Produced GA, sectional, and isometric drawings.',
    outcome: 'Layout approved by client and end-customer on first review. Zero clashes in 3D coordination with structural and electrical disciplines. Skid fabricated and delivered on schedule.',
    color: 'from-orange-500/20 to-orange-600/5',
  },
]

const CATEGORIES = ['All', 'CAD Design', 'FEA Analysis', 'Product Design', 'Assembly Design', 'Reverse Engineering']

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    document.title = 'Portfolio | DesignX Engineering Services'
  }, [])

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selectedProject])

  const filtered = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory)

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden blueprint-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-primary-500/20">
              <span className="text-xs font-medium text-primary-300 tracking-wider uppercase">Portfolio</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl lg:text-6xl text-white mb-5 max-w-3xl">
              Engineering Work
              <br />
              <span className="gradient-text">That Speaks for Itself</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl mb-8">
              A selection of real engineering projects delivered by Sanjeevi — from structural analysis and product design to reverse engineering and tolerance studies.
            </p>
            <div className="flex flex-wrap gap-6 text-sm text-white/40">
              <span><span className="text-white font-semibold">150+</span> Projects Delivered</span>
              <span><span className="text-white font-semibold">8+</span> Years Experience</span>
              <span><span className="text-white font-semibold">40+</span> Satisfied Clients</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter */}
      <section className="py-10 sticky top-16 z-30 bg-navy-500/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                    : 'glass text-white/55 hover:text-white border border-white/8'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 50}>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full text-left group"
                >
                  <div className={`glass rounded-2xl border border-white/8 overflow-hidden card-hover h-full flex flex-col`}>
                    {/* Color bar */}
                    <div className={`h-1.5 w-full bg-gradient-to-r ${project.color}`} />
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <span className="text-xs font-medium text-primary-400 bg-primary-500/10 px-2 py-1 rounded-full">{project.category}</span>
                        <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-white/60 transition-colors flex-shrink-0 mt-0.5" />
                      </div>
                      <h3 className="font-display font-bold text-white text-base leading-snug mb-3 group-hover:text-primary-300 transition-colors">{project.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed flex-1 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs text-white/35 bg-white/4 px-2 py-0.5 rounded-full">{tag}</span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-xs text-white/30 pt-3 border-t border-white/5">
                        <span>{project.client}</span>
                        <span>{project.duration}</span>
                      </div>
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-white mb-4">
              Have a Similar Project in Mind?
            </h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto">
              Every project shown here started with a conversation. Tell Sanjeevi about your engineering challenge — get a free quote within 24 hours.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/#contact" className="btn-primary">
                Discuss Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="btn-secondary">
                View All Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="absolute inset-0 bg-navy-500/90 backdrop-blur-xl" />
          <div
            className="relative glass-strong rounded-2xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`h-1.5 w-full rounded-t-2xl bg-gradient-to-r ${selectedProject.color}`} />
            <div className="p-8">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="text-xs font-medium text-primary-400 bg-primary-500/10 px-2 py-1 rounded-full">{selectedProject.category}</span>
                  <h2 className="font-display font-bold text-white text-xl mt-3 leading-snug">{selectedProject.title}</h2>
                  <div className="flex gap-4 mt-2 text-sm text-white/40">
                    <span>{selectedProject.client}</span>
                    <span>·</span>
                    <span>{selectedProject.duration}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center text-white/50 hover:text-white flex-shrink-0 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-5">
                <div>
                  <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2">Overview</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{selectedProject.description}</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-amber-400/70 uppercase tracking-widest mb-2">Challenge</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{selectedProject.challenge}</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-primary-400/70 uppercase tracking-widest mb-2">Solution</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{selectedProject.solution}</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-emerald-400/70 uppercase tracking-widest mb-2">Outcome</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{selectedProject.outcome}</p>
                </div>

                <div className="pt-3 border-t border-white/8">
                  <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2">Software Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.software.map((sw) => (
                      <span key={sw} className="text-xs text-primary-300 bg-primary-500/10 px-3 py-1 rounded-full">{sw}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/8">
                <Link
                  to="/#contact"
                  className="btn-primary w-full justify-center"
                  onClick={() => setSelectedProject(null)}
                >
                  Start a Similar Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
