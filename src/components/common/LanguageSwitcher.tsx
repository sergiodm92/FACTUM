import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as 'es' | 'en' | 'fr')}
      className="p-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    >
      <option value="es">ES</option>
      <option value="en">EN</option>
      <option value="fr">FR</option>
    </select>
  )
}

export default LanguageSwitcher