import React from 'react'
import Navbar from '../components/common/Navbar'
import { Footer } from './Footer'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout