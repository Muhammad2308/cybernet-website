import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { Home } from './pages/Home';
import { Capabilities } from './pages/Capabilities';
import { Governance } from './pages/Governance';
import { ShagoPage } from './pages/solutions/ShagoPage';
import { RidoPage } from './pages/solutions/RidoPage';
import { IsmsPage } from './pages/solutions/IsmsPage';
import { MedXPage } from './pages/solutions/MedXPage';
import { SokIpcrsPage } from './pages/solutions/SokIpcrsPage';

// Scroll to top helper component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen selection:bg-cyber-purple-light selection:text-white">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/capabilities" element={<Capabilities />} />
              <Route path="/governance" element={<Governance />} />
              <Route path="/solutions/shago" element={<ShagoPage />} />
              <Route path="/solutions/rido" element={<RidoPage />} />
              <Route path="/solutions/isms" element={<IsmsPage />} />
              <Route path="/solutions/med-x" element={<MedXPage />} />
              <Route path="/solutions/sok-ipcrs" element={<SokIpcrsPage />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
