import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/Home';
import DevelopmentPage from './pages/Development';
import ConsultingPage from './pages/Consulting';
import NotFoundPage from './pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <MainLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/development" element={<DevelopmentPage />} />
              <Route path="/consulting" element={<ConsultingPage />} />
              <Route path="*" element={<NotFoundPage />} /> {/* Catch-all 404 Route */}
            </Routes>
          </MainLayout>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
