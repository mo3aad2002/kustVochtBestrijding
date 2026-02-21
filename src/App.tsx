import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingContactWidget from './components/FloatingContactWidget';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Diensten from './pages/Diensten';
import OverOns from './pages/OverOns';
import Contact from './pages/Contact';
import Privacybeleid from './pages/Privacybeleid';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diensten" element={<Diensten />} />
            <Route path="/over-ons" element={<OverOns />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacybeleid" element={<Privacybeleid />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContactWidget />
      </div>
    </Router>
  );
}

export default App;
