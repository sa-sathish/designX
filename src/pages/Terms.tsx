import { useEffect } from 'react'
import ScrollReveal from '../components/ui/ScrollReveal'

const sections = [
  {
    title: '1. Introduction and Acceptance',
    content: `These Terms of Service govern all engineering services provided by Sanjeevi operating as DesignX Engineering Services ("DesignX", "we", "us"), based in Chennai, Tamil Nadu, India. By engaging our services or submitting a project enquiry, you ("Client") agree to these terms in their entirety. If you do not agree to these terms, please do not use our services. These terms may be updated periodically; the current version is always available on this page.`,
  },
  {
    title: '2. Services Description',
    content: `DesignX Engineering Services provides mechanical engineering consulting services including but not limited to: CAD design and drafting, 3D solid modeling, assembly design, Finite Element Analysis (FEA), reverse engineering, Geometric Dimensioning and Tolerancing (GD&T), tolerance stack-up analysis, and product development support. The specific scope of services for each engagement is defined in a Project Brief or Statement of Work agreed between DesignX and the Client prior to project commencement.`,
  },
  {
    title: '3. Project Engagement Process',
    content: `All projects begin with a written Project Brief that defines the scope, deliverables, timeline, and price. Work commences only after the Client has confirmed the Project Brief and the advance payment has been received. Changes to the project scope after commencement may result in revised pricing and timelines, which will be agreed in writing before additional work is performed. DesignX reserves the right to decline any project enquiry at its discretion.`,
  },
  {
    title: '4. Intellectual Property Rights',
    content: `Upon receipt of full payment for the project, the Client owns all intellectual property rights in the final deliverables created by DesignX for that project. This includes 3D CAD models, 2D drawings, analysis reports, and other project documents. DesignX retains the right to use non-confidential aspects of the work (such as general design approaches or methodologies) for internal knowledge development. DesignX does not retain rights to use Client-specific designs, proprietary information, or confidential technical data for any other purpose. Any background intellectual property brought to the project by DesignX (such as standard calculation methods or reusable templates) remains the property of DesignX.`,
  },
  {
    title: '5. Confidentiality',
    content: `DesignX treats all client project information, design data, and business information as strictly confidential. A Non-Disclosure Agreement (NDA) is signed for all formal project engagements before confidential information is exchanged. DesignX will not disclose Client information to any third party without the Client's written consent, except where required by law. These confidentiality obligations survive the termination of the project engagement indefinitely.`,
  },
  {
    title: '6. Payments and Pricing',
    content: `Project pricing is agreed in writing in the Project Brief. Unless otherwise agreed, payment terms are 50% advance before project commencement and 50% on delivery of final files. Invoices are issued in Indian Rupees (INR). For Indian clients, GST at the applicable rate is added to all invoices. For international clients, services are zero-rated for GST as export of services. Overdue invoices accrue interest at 2% per month. DesignX reserves the right to withhold final deliverables until full payment is received. Returned payments (bounced cheques, disputed transactions) will incur an administrative fee.`,
  },
  {
    title: '7. Revisions Policy',
    content: `Each plan includes a defined number of revision rounds (Basic: 3, Professional: 5, Enterprise: unlimited). A revision round is defined as a consolidated set of changes communicated in a single round of feedback. Changes that represent new requirements beyond the agreed project scope are not included in revision rounds and will be quoted separately. Revision requests must be submitted within 14 days of delivery of each project milestone.`,
  },
  {
    title: '8. Delivery and Timelines',
    content: `Project timelines are agreed in the Project Brief. DesignX will communicate promptly if any circumstances arise that may affect the agreed timeline. Timelines may be affected by delayed receipt of required information from the Client, changes to project scope, or force majeure events outside DesignX's control. DesignX is not liable for consequential losses arising from delivery delays that are caused by factors outside its reasonable control.`,
  },
  {
    title: '9. Client Responsibilities',
    content: `The Client is responsible for providing accurate, complete, and timely input information required for the engineering work. The Client is responsible for reviewing deliverables and providing feedback within agreed timelines. The Client is responsible for ensuring that the engineering deliverables are appropriate for their intended application and that any design is reviewed by a qualified professional before manufacture of safety-critical components. DesignX provides engineering services and documentation; final engineering responsibility for a product's suitability for its intended application rests with the Client.`,
  },
  {
    title: '10. Limitation of Liability',
    content: `DesignX's total liability to the Client for any claim arising out of or related to the services provided shall not exceed the total fees paid by the Client for the specific project giving rise to the claim. DesignX shall not be liable for any indirect, consequential, incidental, or special damages, including loss of profit, loss of production, or damage to other property, arising from the use of or reliance on the engineering deliverables. The Client is solely responsible for the engineering approval, certification, and manufacture of any products developed using our deliverables.`,
  },
  {
    title: '11. Termination',
    content: `Either party may terminate a project engagement with 7 days' written notice. In the event of termination by the Client, payment is due for all work completed to date at a pro-rated daily rate, in addition to any advance already paid. In the event of termination by DesignX due to non-payment or material breach by the Client, the full project price remains payable for work completed. Upon termination, DesignX will deliver all work completed to date to the Client, subject to receipt of payment for that work.`,
  },
  {
    title: '12. Governing Law and Dispute Resolution',
    content: `These Terms of Service are governed by the laws of India. Any disputes arising from these terms or from the provision of engineering services shall first be subject to good-faith negotiation between the parties. If negotiation fails, disputes shall be resolved by arbitration in Chennai, Tamil Nadu, India, under the Arbitration and Conciliation Act, 1996. The language of arbitration shall be English. The decision of the arbitrator shall be final and binding on both parties.`,
  },
  {
    title: '13. Contact',
    content: `For any questions about these Terms of Service, please contact:\n\nSanjeevi\nDesignX Engineering Services\nChennai, Tamil Nadu, India\nEmail: sanjeevimech076@gmail.com\nPhone: +91 98434 27966`,
  },
]

export default function Terms() {
  useEffect(() => {
    document.title = 'Terms of Service | DesignX Engineering Services'
  }, [])

  return (
    <div className="relative">
      <section className="relative py-16 overflow-hidden blueprint-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-primary-500/20">
            <span className="text-xs font-medium text-primary-300 tracking-wider uppercase">Legal</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl lg:text-5xl text-white mb-4">Terms of Service</h1>
          <p className="text-white/40 text-sm">Last Updated: January 2024 · DesignX Engineering Services</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          {sections.map((sec, i) => (
            <ScrollReveal key={i} delay={i * 30}>
              <div className="glass rounded-xl border border-white/5 p-6">
                <h2 className="font-display font-bold text-white text-lg mb-4">{sec.title}</h2>
                <p className="text-white/55 text-sm leading-relaxed whitespace-pre-line">{sec.content}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}
