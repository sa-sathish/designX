import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Services from '../components/sections/Services'
import Industries from '../components/sections/Industries'
import Workflow from '../components/sections/Workflow'
import Portfolio from '../components/sections/Portfolio'
import Pricing from '../components/sections/Pricing'
import Testimonials from '../components/sections/Testimonials'
import FAQ from '../components/sections/FAQ'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <WhyChooseUs />
      <Services />
      <Industries />
      <Workflow />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}
