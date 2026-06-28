import { useEffect } from 'react'
import ScrollReveal from '../components/ui/ScrollReveal'

const sections = [
  {
    title: '1. Introduction',
    content: `DesignX Engineering Services ("we", "our", "us") is a mechanical engineering consultancy operated by Sanjeevi, based in Chennai, Tamil Nadu, India. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or contact us about engineering services. By using our website, you agree to the practices described in this policy. If you have any questions, contact us at sanjeevimech076@gmail.com.`,
  },
  {
    title: '2. Information We Collect',
    content: `We collect information you provide directly when you submit an enquiry form or contact us. This includes: your full name, company name, email address, phone number, country of residence, the type of engineering service you require, your project budget range, your preferred timeline, and a description of your project. We may also collect your IP address automatically when you visit our website, and basic browser and device information through standard web server logs. We do not collect payment card information directly — all payments are processed through bank transfer or UPI outside of this website.`,
  },
  {
    title: '3. How We Use Your Information',
    content: `We use the information you provide solely to respond to your engineering enquiry, provide project quotations, communicate about ongoing projects, and improve our services. Your project details and design files shared with us are used exclusively for delivering the agreed engineering services. We do not use your information for automated decision-making or profiling. We do not sell, rent, or share your personal information with any third party for marketing purposes.`,
  },
  {
    title: '4. Confidentiality and NDA',
    content: `Confidentiality of your engineering data is treated with the same seriousness as any other engineering standard we work to. All project-related information, design files, specifications, and business information shared with us is treated as strictly confidential. For formal projects, we sign a Non-Disclosure Agreement (NDA) before any confidential information is shared. We delete your design files from our systems upon project completion or at your request.`,
  },
  {
    title: '5. Cookies and Tracking',
    content: `Our website uses minimal cookies necessary for its operation. We use Google Fonts, which loads font files from Google's servers and may set a cookie. We do not use advertising cookies, tracking pixels, or third-party analytics services that profile individual users. If we implement analytics in the future, this policy will be updated and you will be notified.`,
  },
  {
    title: '6. Third-Party Services',
    content: `Our contact forms use Formsubmit (formsubmit.co), a form processing service, to deliver your enquiry to our email. Your submitted form data is transmitted through Formsubmit's servers. We recommend reviewing Formsubmit's own privacy policy. We also load fonts from Google Fonts (fonts.google.com). No other third-party services are used that receive your personal data.`,
  },
  {
    title: '7. Data Security',
    content: `We take reasonable technical precautions to protect your information. Project files are stored on password-protected systems and are not shared with anyone other than Sanjeevi. Email communications containing project details are handled through secured email accounts. We do not store your personal information on publicly accessible servers. Despite these measures, no internet transmission is entirely secure, and we cannot guarantee absolute security.`,
  },
  {
    title: '8. Data Retention',
    content: `We retain your contact enquiry information for up to 2 years after the last communication, in case you have follow-up questions about a previous project. Project files and technical documents are retained for up to 1 year after project completion, after which they are securely deleted unless you request otherwise. You may request deletion of your data at any time by emailing sanjeevimech076@gmail.com.`,
  },
  {
    title: '9. Your Rights',
    content: `You have the right to access the personal information we hold about you, request correction of inaccurate information, request deletion of your information (subject to any legal retention obligations), withdraw consent for processing where consent is the legal basis, and lodge a complaint with the relevant data protection authority in your jurisdiction. To exercise any of these rights, contact us at sanjeevimech076@gmail.com or +91 98434 27966.`,
  },
  {
    title: '10. Children\'s Privacy',
    content: `Our services are directed at businesses and professional clients. We do not knowingly collect personal information from anyone under the age of 18. If you believe we have inadvertently collected information from a minor, please contact us immediately and we will delete it.`,
  },
  {
    title: '11. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. The "Last Updated" date at the bottom of this page will be updated accordingly. We encourage you to review this policy periodically. Continued use of our website after a policy update constitutes acceptance of the updated policy.`,
  },
  {
    title: '12. Contact Us',
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact:\n\nSanjeevi\nDesignX Engineering Services\nChennai, Tamil Nadu, India\nEmail: sanjeevimech076@gmail.com\nPhone: +91 98434 27966\nLinkedIn: linkedin.com/in/sanjeevi-s-742a2a238`,
  },
]

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = 'Privacy Policy | DesignX Engineering Services'
  }, [])

  return (
    <div className="relative">
      <section className="relative py-16 overflow-hidden blueprint-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-primary-500/20">
            <span className="text-xs font-medium text-primary-300 tracking-wider uppercase">Legal</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl lg:text-5xl text-white mb-4">Privacy Policy</h1>
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
