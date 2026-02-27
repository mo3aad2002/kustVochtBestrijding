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

import Bredene from './pages/cities/Bredene';
import Middelkerke from './pages/cities/Middelkerke';
import Gistel from './pages/cities/Gistel';
import Oudenburg from './pages/cities/Oudenburg';
import DeHaan from './pages/cities/DeHaan';
import Jabbeke from './pages/cities/Jabbeke';
import Ichtegem from './pages/cities/Ichtegem';
import Zuienkerke from './pages/cities/Zuienkerke';
import Zedelgem from './pages/cities/Zedelgem';
import Blankenberge from './pages/cities/Blankenberge';
import Brugge from './pages/cities/Brugge';
import Diksmuide from './pages/cities/Diksmuide';
import Torhout from './pages/cities/Torhout';
import Alveringem from './pages/cities/Alveringem';
import KnokkeHeist from './pages/cities/KnokkeHeist';
import Nieuwpoort from './pages/cities/Nieuwpoort';
import Koksijde from './pages/cities/Koksijde';
import Veurne from './pages/cities/Veurne';
import Oostkamp from './pages/cities/Oostkamp';
import Beernem from './pages/cities/Beernem';
import Oostende from './pages/cities/Oostende';

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

            <Route path="/werkgebied/bredene" element={<Bredene />} />
            <Route path="/werkgebied/middelkerke" element={<Middelkerke />} />
            <Route path="/werkgebied/gistel" element={<Gistel />} />
            <Route path="/werkgebied/oudenburg" element={<Oudenburg />} />
            <Route path="/werkgebied/de-haan" element={<DeHaan />} />
            <Route path="/werkgebied/jabbeke" element={<Jabbeke />} />
            <Route path="/werkgebied/ichtegem" element={<Ichtegem />} />
            <Route path="/werkgebied/zuienkerke" element={<Zuienkerke />} />
            <Route path="/werkgebied/zedelgem" element={<Zedelgem />} />
            <Route path="/werkgebied/blankenberge" element={<Blankenberge />} />
            <Route path="/werkgebied/brugge" element={<Brugge />} />
            <Route path="/werkgebied/diksmuide" element={<Diksmuide />} />
            <Route path="/werkgebied/torhout" element={<Torhout />} />
            <Route path="/werkgebied/alveringem" element={<Alveringem />} />
            <Route path="/werkgebied/knokke-heist" element={<KnokkeHeist />} />
            <Route path="/werkgebied/nieuwpoort" element={<Nieuwpoort />} />
            <Route path="/werkgebied/koksijde" element={<Koksijde />} />
            <Route path="/werkgebied/veurne" element={<Veurne />} />
            <Route path="/werkgebied/oostkamp" element={<Oostkamp />} />
            <Route path="/werkgebied/beernem" element={<Beernem />} />
            <Route path="/werkgebied/oostende" element={<Oostende />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContactWidget />
      </div>
    </Router>
  );
}

export default App;
