import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import PageLayout from './components/layout/PageLayout'
import Home from './pages/Home'
import About from './pages/About'
import ServicesPage from './pages/ServicesPage'
import ServiceDetail from './pages/ServiceDetail'
import IndustryDetail from './pages/IndustryDetail'
import PricingPage from './pages/PricingPage'
import Portfolio from './pages/Portfolio'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center pt-20">
      <div className="text-7xl mb-6 opacity-30">404</div>
      <h1 className="font-display font-bold text-3xl text-white mb-3">Page Not Found</h1>
      <p className="text-white/50 mb-8 max-w-md">
        The page you're looking for doesn't exist. Let's get you back to something useful.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link to="/" className="btn-primary">Go to Homepage</Link>
        <Link to="/services" className="btn-secondary">View Services</Link>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout><Home /></PageLayout>} />
        <Route path="/about" element={<PageLayout><About /></PageLayout>} />
        <Route path="/services" element={<PageLayout><ServicesPage /></PageLayout>} />
        <Route path="/services/:slug" element={<PageLayout><ServiceDetail /></PageLayout>} />
        <Route path="/industries/:slug" element={<PageLayout><IndustryDetail /></PageLayout>} />
        <Route path="/portfolio" element={<PageLayout><Portfolio /></PageLayout>} />
        <Route path="/pricing" element={<PageLayout><PricingPage /></PageLayout>} />
        <Route path="/privacy-policy" element={<PageLayout><PrivacyPolicy /></PageLayout>} />
        <Route path="/terms" element={<PageLayout><Terms /></PageLayout>} />
        <Route path="*" element={<PageLayout><NotFound /></PageLayout>} />
      </Routes>
    </BrowserRouter>
  )
}
