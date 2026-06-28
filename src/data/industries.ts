export interface IndustryData {
  slug: string
  name: string
  icon: string
  overview: string
  challenges: string[]
  solutions: string[]
  services: string[]
  serviceslugs: string[]
  benefits: string[]
  caseStudy: { title: string; challenge: string; solution: string; result: string }
}

const INDUSTRIES: IndustryData[] = [
  {
    slug: 'automotive',
    name: 'Automotive',
    icon: '🚗',
    overview:
      'The automotive industry demands engineering precision at scale — parts must perform reliably across extreme temperature ranges, vibration environments, and long service lives, all while meeting aggressive weight and cost targets. DesignX supports automotive OEMs, Tier 1 and Tier 2 suppliers with design, simulation, and documentation services that meet IATF 16949 and ASME drawing standards.',
    challenges: [
      'Tight dimensional tolerances on high-volume machined components under thermal cycling',
      'Weight reduction targets conflicting with structural performance requirements',
      'Complex assembly fits across multi-supplier supply chains with varied manufacturing capability',
      'NVH (Noise, Vibration, Harshness) requirements driving complex geometric constraints',
    ],
    solutions: [
      'DFM-optimised CAD designs that reduce machining time and material usage without sacrificing performance',
      'FEA-driven topology optimisation identifying safe material removal zones',
      'Tolerance stack-up analysis ensuring assemblies function across worst-case supplier variation',
      'Assembly-level motion studies and interference checks for mechanism design validation',
    ],
    services: ['CAD Design & Drafting', 'FEA Analysis', 'Assembly Design', 'GD&T'],
    serviceslugs: ['cad-design', 'fea-analysis', 'assembly-design', 'gdt'],
    benefits: [
      'IATF 16949-aware documentation practices',
      'Experience with powertrain, body, chassis, and interior systems',
      'NDA-protected handling of pre-production design data',
      'Fast turnaround to keep pace with aggressive automotive development timelines',
    ],
    caseStudy: {
      title: 'Gearbox Bracket Weight Reduction — Automotive Tier 1',
      challenge: 'A Tier 1 supplier needed to reduce the weight of a cast aluminium gearbox mounting bracket by 18% while maintaining stiffness and fatigue life to meet OEM requirements. The existing design had evolved iteratively over several generations without structural optimisation.',
      solution: 'FEA was used to map stress distribution across all load cases defined in the OEM specification. Regions of low stress were identified as candidates for material removal. A new rib structure was designed that redirected load paths efficiently, removing material from low-stress zones while adding reinforcement along the primary load path. The optimised design was validated against the full load case matrix.',
      result: '21% weight reduction achieved while improving the safety factor from 2.1 to 2.8. Manufacturing cost reduced by 14% due to lower material consumption. Design passed OEM fatigue validation without requiring a second prototype iteration.',
    },
  },
  {
    slug: 'aerospace',
    name: 'Aerospace',
    icon: '✈️',
    overview:
      'Aerospace engineering demands the highest levels of design rigour, documentation quality, and regulatory compliance. Structural components must be safe across extreme environments with zero tolerance for in-service failure. DesignX provides precision CAD modeling, FEA simulation, and AS9100-aware documentation for brackets, structural members, interior components, and ground support equipment for commercial and defence aerospace applications.',
    challenges: [
      'Tight fatigue life requirements under complex multi-axis dynamic loading',
      'Material selection balancing strength-to-weight ratio with corrosion resistance in aggressive environments',
      'DO-160 and MIL-SPEC qualification documentation requirements',
      'Precision fit requirements for complex assembly interfaces with minimal clearance',
    ],
    solutions: [
      'FEA fatigue analysis with load spectra derived from certification requirements',
      'Material selection analysis across aluminium alloys, titanium, and composites based on operating environment',
      'Structured drawing packages meeting DO-160 and AS9100 documentation standards',
      'Assembly tolerance analysis ensuring conformance across multiple sources of supply',
    ],
    services: ['FEA Analysis', 'CAD Design & Drafting', 'GD&T', 'Tolerance Stack-Up Analysis'],
    serviceslugs: ['fea-analysis', 'cad-design', 'gdt', 'tolerance-analysis'],
    benefits: [
      'Experience with AS9100-aware design documentation practices',
      'Proficient in aerospace material specifications (7075-T6, 6061-T6, Ti-6Al-4V)',
      'Understanding of DER approval and technical data package requirements',
      'NDA agreements standard on all aerospace projects',
    ],
    caseStudy: {
      title: 'Structural Bracket Family — Aircraft Interior Modification',
      challenge: 'A MRO (Maintenance, Repair & Overhaul) company needed a family of 18 structural brackets for an aircraft interior reconfiguration STC (Supplemental Type Certificate). Each bracket required FEA validation and a complete drawing package per FAA requirements, within a 10-week window.',
      solution: 'Brackets were grouped by structural function and a parametric modelling approach used to efficiently generate all 18 variants from common master models. FEA was performed using the FAA-specified load cases. Drawing packages were structured to meet AC 21-26 requirements with traceability to the load analysis.',
      result: 'All 18 brackets delivered within the 10-week window. FEA results demonstrated safety factors exceeding the 1.5 ultimate requirement on all cases. The STC was submitted to the FAA with the complete technical data package. Zero drawing returns from the DER review.',
    },
  },
  {
    slug: 'medical-devices',
    name: 'Medical Devices',
    icon: '🏥',
    overview:
      'Medical device engineering demands a level of precision, traceability, and regulatory awareness that sets it apart from other industries. Every design decision must be documented, every tolerance justified, and the design history file (DHF) maintained meticulously. DesignX supports medical device companies with precision CAD design, tolerance analysis, and documentation that supports ISO 13485 quality management systems and regulatory submissions.',
    challenges: [
      'Sterility-critical surface finish and geometric requirements on sealing and mating surfaces',
      'Biocompatibility material selection constraints narrowing design options',
      'FDA 510(k) and CE technical file documentation requirements demanding complete design traceability',
      'Tight assembly tolerances for reliable fluid control in infusion and surgical systems',
    ],
    solutions: [
      'Precision CAD modeling with surface finish specifications aligned to ISO 1302 and ASME Y14.36',
      'Material selection within biocompatible material families (ISO 10993 classified)',
      'Design History File documentation structured for 510(k) and CE technical file submission',
      'Tolerance stack-up analysis ensuring sealing and assembly function at production volume',
    ],
    services: ['Mechanical Product Design', 'Tolerance Stack-Up Analysis', 'GD&T', 'CAD Design & Drafting'],
    serviceslugs: ['product-design', 'tolerance-analysis', 'gdt', 'cad-design'],
    benefits: [
      'ISO 13485-aware design documentation practices',
      'Experience with infusion pumps, surgical instruments, and implant components',
      'Design Risk Analysis (ISO 14971) support available',
      'Strict NDA and IP confidentiality on all medical projects',
    ],
    caseStudy: {
      title: 'Infusion Pump Housing — FDA Submission Support',
      challenge: 'A medical device startup needed a redesigned housing for their infusion pump that would meet FDA sterility requirements, support a new internal mechanism layout, and reduce unit manufacturing cost by 25%. The design needed to support their 510(k) submission with a complete technical file.',
      solution: 'The housing was redesigned with revised mating surface geometry and tighter form controls on critical sealing faces. DFM analysis identified opportunities to reduce the number of housing sub-components from 4 to 2. Tolerance stack-up analysis verified sealing function across worst-case manufacturing variation. A complete Design History File including design rationale, DFMEA, and drawing revision history was maintained throughout.',
      result: 'Manufacturing cost reduced by 28% versus the original design. All sealing requirements met with a 15% margin to the worst-case tolerance scenario. Design History File accepted by the FDA without a major deficiency letter on the 510(k) submission.',
    },
  },
  {
    slug: 'industrial-machinery',
    name: 'Industrial Machinery',
    icon: '🏭',
    overview:
      'Industrial machinery engineering involves the design of robust, long-life mechanical systems that must operate reliably in demanding production environments. From conveyor systems and packaging machines to press tools and material handling equipment, DesignX brings structural design, mechanism development, and assembly engineering expertise to machinery manufacturers and system integrators across India and internationally.',
    challenges: [
      'High duty-cycle fatigue loading requiring rigorous structural validation over the machine life',
      'Complex multi-axis mechanisms with tight kinematic requirements and motion envelope constraints',
      'Maintenance accessibility and serviceability requirements competing with compact machine envelope targets',
      'CE Machinery Directive and ISO 4413 (pneumatics) compliance documentation for export markets',
    ],
    solutions: [
      'Fatigue-optimised structural frame design using FEA load analysis across the full operational cycle',
      'Kinematic mechanism design with motion study validation and secondary interference checks',
      'DFA analysis for maintainability — service access, component replacement, and lubrication points',
      'CE Machinery Directive-aware design documentation and risk assessment support',
    ],
    services: ['Assembly Design', 'FEA Analysis', 'CAD Design & Drafting', 'Product Development'],
    serviceslugs: ['assembly-design', 'fea-analysis', 'cad-design', 'product-development'],
    benefits: [
      'Experience across conveyor systems, presses, material handling, and automation cells',
      'Proficient in welded fabrication, castings, and machined component design',
      'Motion study capability for mechanism validation before build',
      'Strong understanding of maintenance and service requirements',
    ],
    caseStudy: {
      title: 'Automated Welding Cell Frame Redesign',
      challenge: 'A machine builder needed to redesign the structural frame of a robotic welding cell to reduce fabrication cost by 30% while maintaining rigidity under the dynamic loads imposed by the robot. The existing frame was over-engineered but used complex weld joint geometries that were expensive to produce.',
      solution: 'FEA was used to map frame deflection under the robot\'s maximum rated dynamic load. Sections with low stress were identified for size reduction. Weld joint geometries were rationalised to use standard configurations achievable without special positioning. A modal analysis confirmed the natural frequency remained above the robot\'s operational frequency range.',
      result: 'Fabrication cost reduced by 34%. Frame stiffness improved by 8% despite the weight reduction due to better material placement. Robot positioning accuracy met specification with margin. Weld joint rationalisation reduced fabrication time by 22%.',
    },
  },
  {
    slug: 'robotics',
    name: 'Robotics',
    icon: '🤖',
    overview:
      'Robotics mechanical engineering requires precision design of linkages, joints, end-effectors, and structural frames that must be simultaneously lightweight, stiff, and accurately manufactured. DesignX provides mechanical design services for robotic arms, collaborative robots (cobots), custom automation end-of-arm tooling (EOAT), and mobile robot chassis — bridging the gap between electrical system design and manufacturable mechanical structures.',
    challenges: [
      'Minimising arm deflection and joint backlash to achieve positioning accuracy targets',
      'Payload-to-weight ratio optimisation for collaborative robot applications',
      'Cable and pneumatic line routing through articulating joints without fatigue failure',
      'IP65/IP67 sealing requirements for washdown and harsh environment applications',
    ],
    solutions: [
      'Topology-optimised link structures using FEA-driven material removal for maximum stiffness at minimum weight',
      'Precision joint design with pre-loaded bearings to eliminate backlash',
      'Integrated cable routing channels and strain relief designed into the structural members',
      'Sealed housing design with O-ring groove GD&T and IP rating simulation',
    ],
    services: ['Mechanical Product Design', 'Assembly Design', 'FEA Analysis', 'CAD Design & Drafting'],
    serviceslugs: ['product-design', 'assembly-design', 'fea-analysis', 'cad-design'],
    benefits: [
      'Experience with 6-axis arms, SCARA, delta, and collaborative robot architectures',
      'Proficient in EOAT design — grippers, vacuum, welding, and dispensing tools',
      'Motion study validation of full robot workspace kinematics',
      'Lightweight structural design expertise for maximising payload capacity',
    ],
    caseStudy: {
      title: 'Collaborative Robot End-Effector — Multi-Tool Gripper',
      challenge: 'A systems integrator needed a custom multi-tool end-effector for a collaborative robot that could switch between vacuum gripping, mechanical finger gripping, and a barcode scanner tool — all within the robot\'s 5kg payload limit and UR5e interface flange.',
      solution: 'The EOAT was designed as a modular tool changer system with a central mounting hub and three interchangeable tool modules. The hub was optimised using FEA to minimise weight while meeting the stiffness requirement for positioning accuracy. All components were designed for CNC aluminium machining with integrated pneumatic channels avoiding external hose routing.',
      result: 'Complete EOAT system weighed 1.8kg, well within the 5kg payload budget. Tool change cycle achieved in 8 seconds. All three tool modes functioned correctly on first prototype. System deployed in production without design modifications.',
    },
  },
  {
    slug: 'consumer-products',
    name: 'Consumer Products',
    icon: '📱',
    overview:
      'Consumer product mechanical design must balance aesthetics, ergonomics, manufacturing efficiency, and cost with a level of care not always required in industrial applications — because end consumers interact with these products daily and form opinions about brand quality based on every touch point. DesignX provides DFM-focused product design and engineering for injection-moulded, die-cast, and sheet metal consumer products from concept through tooling-ready drawings.',
    challenges: [
      'Achieving consistent cosmetic surface quality across high-volume injection-moulded parts',
      'Snap-fit and living hinge design requiring precise material and geometry optimisation',
      'Meeting drop test and product safety standards (IEC 62368, UL, BIS) with minimal added weight',
      'Cost reduction pressure on tooling and per-part cost across global supply chains',
    ],
    solutions: [
      'DFM analysis specifically for injection moulding — draft angles, wall thickness, sink mark prevention, and weld line management',
      'Snap-fit and living hinge design with hand calculation and FEA validation of engagement force and fatigue life',
      'Structural FEA for drop test and static load case validation before physical testing',
      'Tool-friendly split line and gate location recommendation in coordination with your toolmaker',
    ],
    services: ['Mechanical Product Design', 'CAD Design & Drafting', 'FEA Analysis', 'Reverse Engineering'],
    serviceslugs: ['product-design', 'cad-design', 'fea-analysis', 'reverse-engineering'],
    benefits: [
      'Injection moulding, die casting, and sheet metal DFM expertise',
      'Experience with consumer electronics, appliances, tools, and lifestyle products',
      'Aesthetic design sensitivity alongside engineering rigour',
      'Cost-conscious design delivering value without compromising quality',
    ],
    caseStudy: {
      title: 'Power Tool Housing DFM Redesign',
      challenge: 'A power tool manufacturer needed to reduce injection mould cycle time by 30% and eliminate a surface sink defect on the handle of their bestselling drill, without changing the external appearance or ergonomic feel of the product.',
      solution: 'Wall thickness analysis identified a region 40% thicker than the nominal wall — the root cause of both the extended cycle time and the sink mark. The internal rib structure was redesigned to maintain stiffness with a consistent 2.8mm wall. Draft angles were reviewed and corrected on all internal features. Weld line positions were relocated away from high-stress snap-fit features.',
      result: 'Mould cycle time reduced by 36%. Sink defect eliminated on first tool trial. Product passed full UL drop test. No external appearance change required, preserving the approved industrial design.',
    },
  },
  {
    slug: 'oil-gas',
    name: 'Oil & Gas',
    icon: '🔧',
    overview:
      'Oil and gas engineering operates in some of the most demanding mechanical environments — high pressure, corrosive media, extreme temperatures, and remote deployment locations where failure consequences are severe. DesignX provides pressure equipment design, piping component engineering, subsea structure design, and ASME VIII / PED-compliant documentation for operators and equipment manufacturers across the upstream, midstream, and downstream sectors.',
    challenges: [
      'Sour service (H₂S) environments requiring specific material and weld procedure requirements per NACE MR0175',
      'High-pressure design requiring ASME VIII Div.1/Div.2 or PED compliance documentation',
      'Fatigue loading from pressure cycling, flow-induced vibration, and thermal transients',
      'Weight constraints on offshore topsides and subsea structures',
    ],
    solutions: [
      'Material selection per NACE MR0175 for sour service with hardness compliance verification',
      'ASME VIII pressure vessel design calculations with full U-stamp documentation support',
      'Fatigue analysis including pressure cycle counting and S-N curve validation',
      'Weight-optimised structural steel design for topsides and skid packages',
    ],
    services: ['FEA Analysis', 'CAD Design & Drafting', 'GD&T', 'Product Development'],
    serviceslugs: ['fea-analysis', 'cad-design', 'gdt', 'product-development'],
    benefits: [
      'ASME VIII, PED, and NACE MR0175 aware design practices',
      'Experience with pressure vessels, heat exchangers, valve bodies, and skid packages',
      'Understanding of piping system flexibility analysis requirements',
      'Strict NDA for confidential upstream development projects',
    ],
    caseStudy: {
      title: 'Subsea Pipeline Clamp Assembly — North Sea Application',
      challenge: 'An offshore service company needed a structural repair clamp for a 12-inch subsea gas pipeline operating at 150 bar with a 30-year design life. The clamp had to be deployable by ROV at 150m water depth and certified to DNV-ST-F101.',
      solution: 'The clamp body was designed as a two-half bolted assembly with integrated seal grooves and structural ribs. FEA analysed the clamp under internal pressure, bending moment, and hydrodynamic loads. Material selected as duplex stainless steel UNS S31803 for sour service compatibility. All weld joint designs developed for subsea qualification. Drawing package structured per DNV requirements.',
      result: 'Clamp design qualified per DNV-ST-F101 requirements. Successfully deployed and installed subsea by ROV within the allocated offshore vessel time window. Seal integrity confirmed at 1.5× design pressure during subsea hydrostatic test.',
    },
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    icon: '🏗️',
    overview:
      'Manufacturing companies depend on precision tooling, jigs, fixtures, and production aids that are themselves engineering products — yet they often lack dedicated design resources for these items. DesignX provides engineering design services for production tooling, welding fixtures, inspection gauges, die and mould components, and process improvement engineering that directly improves manufacturing efficiency and quality.',
    challenges: [
      'Fixture design that locates and clamps parts consistently to achieve required machining or weld dimensional tolerances',
      'Tool life improvement requiring detailed analysis of cutting forces and thermal loading',
      'Press tool and die design for sheet metal forming, requiring springback prediction and wear analysis',
      'Production bottleneck analysis and process flow engineering for capacity improvement',
    ],
    solutions: [
      '3-2-1 locating principle fixture design with tolerance analysis verifying achievable machining accuracy',
      'FEA of cutting forces on tool bodies and fixture components to predict deflection and fatigue',
      'Sheet metal die design with springback compensation built into tool geometry',
      'Process engineering layout drawings and cycle time analysis for production line design',
    ],
    services: ['CAD Design & Drafting', 'Assembly Design', 'FEA Analysis', 'GD&T'],
    serviceslugs: ['cad-design', 'assembly-design', 'fea-analysis', 'gdt'],
    benefits: [
      'Deep understanding of manufacturing processes — machining, welding, forming, casting',
      'Experience designing jigs, fixtures, gauges, dies, and moulds',
      'DFM expertise applicable to tooling as well as product design',
      'Close collaboration with your production engineers for practical, shop-floor-ready designs',
    ],
    caseStudy: {
      title: 'Welding Fixture for Automotive Sub-Frame',
      challenge: 'An automotive sub-frame manufacturer was experiencing dimensional variation of ±1.5mm on a critical mounting point, causing rework at the OEM assembly line. The existing welding fixture had worn reference surfaces and no quick-change capability for the three sub-frame variants in production.',
      solution: 'A new modular welding fixture was designed with hardened and ground reference pads on all primary locating surfaces. The 3-2-1 locating scheme was reworked to correctly constrain all six degrees of freedom. Quick-change pin sets were designed for the three variants. Tolerance analysis verified the fixture would maintain the ±0.3mm mounting point position required by the OEM.',
      result: 'Mounting point variation reduced from ±1.5mm to ±0.25mm. OEM rework reduced by 94%. Fixture change-over time between variants reduced from 45 minutes to 8 minutes. Fixture design paid back in reduced rework cost within the first production month.',
    },
  },
]

export default INDUSTRIES
