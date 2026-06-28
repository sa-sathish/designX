import { useState } from 'react'

export interface FormData {
  name: string
  company: string
  email: string
  phone: string
  country: string
  service: string
  budget: string
  timeline: string
  description: string
}

const RECIPIENT = 'sanjeevimech076@gmail.com'

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export function useContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const submit = async (data: FormData) => {
    setStatus('submitting')
    setErrorMessage('')

    const now = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })

    const payload = {
      _subject: `[DesignX] New Enquiry from ${data.name} — ${data.service}`,
      _template: 'table',
      _captcha: 'false',
      _replyto: data.email,
      name: data.name,
      company: data.company || '—',
      email: data.email,
      phone: data.phone || '—',
      country: data.country || '—',
      service_required: data.service,
      budget: data.budget || '—',
      timeline: data.timeline || '—',
      project_description: data.description,
      submitted_at: now,
    }

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${RECIPIENT}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`)
      }

      const json = await res.json()
      if (json.success !== 'true' && json.success !== true) {
        throw new Error(json.message || 'Submission rejected')
      }

      setStatus('success')
    } catch (err) {
      // Open mailto so the enquiry is never lost, but show error state
      const body = Object.entries(payload)
        .filter(([k]) => !k.startsWith('_'))
        .map(([k, v]) => `${k.replace(/_/g, ' ').toUpperCase()}: ${v}`)
        .join('\n')
      const mailtoHref = `mailto:${RECIPIENT}?subject=${encodeURIComponent(payload._subject)}&body=${encodeURIComponent(body)}`
      window.open(mailtoHref, '_blank')

      setErrorMessage(mailtoHref)
      setStatus('error')
    }
  }

  const reset = () => {
    setStatus('idle')
    setErrorMessage('')
  }

  return { status, errorMessage, submit, reset }
}
