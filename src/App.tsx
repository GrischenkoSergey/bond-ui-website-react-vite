import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './pages/Home';
import AddinManual from './pages/AddinManual';
import ProgramPicker from './pages/ProgramPicker';
import ProgramPickerManual from './pages/ProgramPickerManual';
import BuyNow from './pages/BuyNow';
import Support from './pages/Support';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PrivacyNotice from './pages/PrivacyNotice';
import RefundPolicy from './pages/RefundPolicy';
import './styles/global.css';
import './styles/carousel.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addinmanual" element={<AddinManual />} />
            <Route path="/programpicker" element={<ProgramPicker />} />
            <Route path="/programpickermanual" element={<ProgramPickerManual />} />
            <Route path="/buynow" element={<BuyNow />} />
            <Route path="/support" element={<Support />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/privacynotice" element={<PrivacyNotice />} />
            <Route path="/refundpolicy" element={<RefundPolicy />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
