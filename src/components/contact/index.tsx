import React, { useState } from 'react'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'
import { useLanguage } from '../../contexts/LanguageContext'
import { sendEmail } from '../../api/send-email'
import { siteConfig } from '../../site-config'

const Contact: React.FC = () => {
  const { t } = useLanguage()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)

    try {
      await sendEmail(name, email, message)
      setSubmitResult({ success: true, message: 'Message sent successfully!' })
      setName('')
      setEmail('')
      setCompany('')
      setMessage('')
    } catch (error) {
      setSubmitResult({ success: false, message: 'Failed to send message. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 pb-24 bg-orange-300 dark:bg-orange-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">{t('contact.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">{t('contact.info')}</h3>
            <div className="space-y-4">
              <a href='mailto:comercial@factumconsultora.com' className="flex items-center text-gray-600 dark:text-white">
                <Mail size={20} className="mr-2" />
                {siteConfig.email}
              </a>
              <p className="flex items-center text-gray-600 dark:text-white">
                <Phone size={20} className="mr-2" />
                {siteConfig.phone}
              </p>
              <p className="flex items-center text-gray-600 dark:text-white">
                <MapPin size={20} className="mr-2" />
                {siteConfig.location}
              </p>
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 dark:text-gray-300">
                <Linkedin size={20} className="mr-2" />
                {siteConfig.linkedinName}
              </a>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 dark:text-white mb-2">{t('contact.form.name')}</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 dark:text-white mb-2">{t('contact.form.email')}</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-gray-700 dark:text-white mb-2">{t('contact.form.company')}</label>
                <input
                  type="string"
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 dark:text-white mb-2">{t('contact.form.message')}</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : t('contact.form.submit')}
              </button>
              {submitResult && (
                <p className={`mt-4 ${submitResult.success ? 'text-green-500' : 'text-red-500'}`}>
                  {submitResult.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact