import { useState } from 'react'
import { X, ExternalLink } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'

const projects = [
  {
    title: 'Automotive Gearbox Assembly',
    category: 'Assembly Design',
    industry: 'Automotive',
    tags: ['SolidWorks', 'FEA', 'GD&T'],
    overview: 'Complete gearbox assembly design for a 6-speed manual transmission system for a mid-size sedan manufacturer.',
    challenges: 'Achieving optimal gear ratio distribution while maintaining compact envelope dimensions and minimizing weight.',
    solution: 'Advanced topology optimization combined with FEA-driven material selection reduced weight by 18% while exceeding strength targets.',
    tech: ['SolidWorks', 'ANSYS', 'CATIA V5'],
    gradient: 'from-blue-500/20 to-blue-900/5',
    accentColor: '#3B82F6',
    size: 'large',
  },
  {
    title: 'Medical Pump Housing',
    category: 'Product Design',
    industry: 'Medical Devices',
    tags: ['NX', 'Reverse Engineering'],
    overview: 'Precision housing for an infusion pump system requiring FDA-compliant design and tight tolerances.',
    challenges: 'Maintaining sterility-critical surface finishes while achieving sub-0.01mm tolerances for sealing surfaces.',
    solution: 'Design-for-manufacturing approach with integrated tolerance stackup analysis ensured first-time assembly success.',
    tech: ['Siemens NX', 'ANSYS Mechanical'],
    gradient: 'from-emerald-500/20 to-emerald-900/5',
    accentColor: '#10B981',
    size: 'small',
  },
  {
    title: 'Industrial Robot Arm',
    category: 'Mechanical Design',
    industry: 'Robotics',
    tags: ['CATIA', 'Motion Analysis'],
    overview: 'Six-axis robotic arm design for an automated welding cell in an automotive factory.',
    challenges: 'Minimizing deflection at full reach while achieving a 15kg payload capacity within a 1.8m envelope.',
    solution: 'Optimized hollow-section aluminum linkages with integrated cable routing eliminated external harnesses entirely.',
    tech: ['CATIA V5', 'ANSYS Workbench'],
    gradient: 'from-violet-500/20 to-violet-900/5',
    accentColor: '#8B5CF6',
    size: 'small',
  },
  {
    title: 'Aerospace Bracket Suite',
    category: 'FEA Analysis',
    industry: 'Aerospace',
    tags: ['CATIA', 'FEA', 'Aerospace'],
    overview: 'Family of 24 structural brackets for an aircraft interior modification kit with DO-160 certification support.',
    challenges: 'Meeting aeronautical fatigue life requirements across extreme temperature cycles and vibration environments.',
    solution: 'Iterative FEA-driven design reduced material usage by 22% while achieving 200% of required fatigue life margin.',
    tech: ['CATIA V5', 'Nastran', 'HyperMesh'],
    gradient: 'from-orange-500/20 to-orange-900/5',
    accentColor: '#F97316',
    size: 'large',
  },
  {
    title: 'Pressure Vessel Design',
    category: 'Product Design',
    industry: 'Oil & Gas',
    tags: ['AutoCAD', 'ASME', 'FEA'],
    overview: 'High-pressure vessel for subsea oil separation rated to 5000 PSI per ASME Section VIII Div. 2.',
    challenges: 'Corrosion-resistant design for H₂S environments with full ASME U-stamp documentation package.',
    solution: 'Duplex stainless steel material selection with advanced FEA validation cut certification timeline by 30%.',
    tech: ['AutoCAD', 'PV Elite', 'ANSYS'],
    gradient: 'from-red-500/20 to-red-900/5',
    accentColor: '#EF4444',
    size: 'small',
  },
  {
    title: 'Consumer Product Redesign',
    category: 'Reverse Engineering',
    industry: 'Consumer Products',
    tags: ['SolidWorks', 'DFM'],
    overview: 'Complete DFM-driven redesign of a power tool housing to reduce injection mold cycle time by 35%.',
    challenges: 'Maintaining industrial design intent while eliminating undercuts and reducing wall thickness variation.',
    solution: 'Parametric redesign with integrated DFM analysis delivered a production-ready design on the first review cycle.',
    tech: ['SolidWorks', 'Moldflow'],
    gradient: 'from-cyan-500/20 to-cyan-900/5',
    accentColor: '#06B6D4',
    size: 'small',
  },
]

interface Project {
  title: string
  category: string
  industry: string
  tags: string[]
  overview: string
  challenges: string
  solution: string
  tech: string[]
  gradient: string
  accentColor: string
  size: string
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative glass-strong rounded-2xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`h-2 rounded-t-2xl bg-gradient-to-r ${project.gradient}`} style={{ background: project.accentColor }} />
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex gap-2 mb-3">
                {project.tags.map((t) => (
                  <span key={t} className="text-[10px] px-2.5 py-1 rounded-full glass border border-white/10 text-white/60">{t}</span>
                ))}
              </div>
              <h3 className="font-display font-bold text-2xl text-white">{project.title}</h3>
              <p className="text-white/40 text-sm mt-1">{project.category} · {project.industry}</p>
            </div>
            <button onClick={onClose} className="p-2 rounded-xl glass hover:bg-white/10 transition-colors">
              <X className="w-5 h-5 text-white/70" />
            </button>
          </div>

          <div className="space-y-5">
            {[
              { label: 'Project Overview', content: project.overview },
              { label: 'Engineering Challenges', content: project.challenges },
              { label: 'Our Solution', content: project.solution },
            ].map(({ label, content }) => (
              <div key={label} className="glass rounded-xl p-5 border border-white/5">
                <h4 className="text-xs font-bold text-primary-400 tracking-widest uppercase mb-2">{label}</h4>
                <p className="text-white/65 text-sm leading-relaxed">{content}</p>
              </div>
            ))}

            <div className="glass rounded-xl p-5 border border-white/5">
              <h4 className="text-xs font-bold text-primary-400 tracking-widest uppercase mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-3 py-1.5 rounded-lg bg-primary-500/10 border border-primary-500/20 text-primary-300">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <a href="#contact" className="btn-primary flex-1 justify-center" onClick={onClose}>
              Start Similar Project
            </a>
            <button onClick={onClose} className="btn-secondary px-5">
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null)
  const [filter, setFilter] = useState('All')

  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="portfolio" className="py-28 relative">
      <div className="absolute inset-0 engineering-grid-bg opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-primary-500/20">
            <span className="text-xs font-medium text-primary-300 tracking-wider uppercase">Our Work</span>
          </div>
          <h2 className="section-heading text-4xl lg:text-5xl xl:text-6xl text-white mb-5">
            Engineering Projects
            <br />
            <span className="gradient-text">That Delivered</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto mb-8">
            A selection of engineering projects that demonstrate our capabilities across industries and disciplines.
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  filter === cat
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                    : 'glass text-white/50 hover:text-white border border-white/5 hover:border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 60} className={project.size === 'large' ? 'md:col-span-1' : ''}>
              <div
                className={`glass rounded-2xl border border-white/5 overflow-hidden cursor-pointer group transition-all duration-500 hover:border-white/12 card-hover`}
                onClick={() => setSelected(project)}
              >
                {/* Visual placeholder */}
                <div className={`h-44 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
                  <div className="absolute inset-0 engineering-grid-bg opacity-40" />
                  <div
                    className="text-6xl opacity-20 select-none"
                    style={{ filter: `drop-shadow(0 0 20px ${project.accentColor})` }}
                  >
                    ⚙
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-16 h-16 rounded-full border-2 flex items-center justify-center text-2xl font-bold opacity-30 animate-spin-slow"
                      style={{ borderColor: project.accentColor }}
                    >
                      {project.industry[0]}
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-4 flex gap-2">
                    {project.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-black/40 text-white/70">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-[11px] text-primary-400 font-semibold uppercase tracking-widest mb-1.5">{project.industry}</p>
                  <h3 className="font-display font-bold text-white text-sm mb-2 group-hover:text-primary-300 transition-colors">{project.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed line-clamp-2">{project.overview}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[11px] text-white/30">{project.category}</span>
                    <span className="text-[11px] text-primary-400 font-medium group-hover:underline">View Details →</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
