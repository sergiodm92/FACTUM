import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import MainLayout from './layouts/MainLayout'

import HomePage from './pages/Home'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainLayout>
          <HomePage/>
        </MainLayout>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App