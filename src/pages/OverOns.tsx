import { Heart, Award, Users, Shield, Wrench, BookOpen, TrendingUp, MapPin, Home } from 'lucide-react';
import heroImage from '../assets/files_6493991-2026-02-17T13-29-18-237Z-db14c3e3-88f8-49c4-b686-5832c0a98312.webp';
import onsVerhaalImage from '../assets/files_6493991-2026-02-17T14-03-08-619Z-Elektricien_(3).png';

export default function OverOns() {
  return (
    <div>
      <HeroSection />
      <AboutContent />
      <ValuesSection />
      <ServiceAreaSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[400px] flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-70" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Over Ons</h1>
        <p className="text-xl md:text-2xl">
          Uw specialist in vochtbestrijding met meer dan 10 jaar ervaring
        </p>
      </div>
    </section>
  );
}

function AboutContent() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ons Verhaal</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Kust Vochtbestrijding is opgericht vanuit een passie voor vakmanschap en een diepe zorg voor de gezondheid en het welzijn van onze klanten. Met meer dan 10 jaar ervaring in de vochtbestrijding hebben we honderden woningen en bedrijfspanden bevrijd van vochtproblemen.
              </p>
              <p>
                Wat begon als een klein bedrijf, is uitgegroeid tot een gerespecteerde naam in Oost- en West-Vlaanderen. Onze groei is te danken aan onze toewijding aan kwaliteit, eerlijkheid en klanttevredenheid.
              </p>
              <p>
                We geloven dat iedereen recht heeft op een gezonde, droge leefomgeving. Daarom zetten we ons elke dag in om vochtproblemen definitief op te lossen met bewezen technieken en moderne apparatuur.
              </p>
            </div>
          </div>
          <div>
            <img
              src={onsVerhaalImage}
              alt="Vochtbestrijding specialist aan het werk"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Expertise en Certificeringen</h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            Ons team bestaat uit gecertificeerde specialisten die regelmatig bijgeschoold worden in de nieuwste technieken en ontwikkelingen in de vochtbestrijding. We investeren continu in kennis en apparatuur om u de beste service te kunnen bieden.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-[#34B8C3] to-[#2a9aa3] rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <Shield size={48} className="stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Gecertificeerd</h3>
              <p className="text-sm text-center opacity-90">
                Professioneel gecertificeerde specialisten volgens industrienormen
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#233D60] to-[#1a2d4a] rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <Wrench size={48} className="stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Moderne Apparatuur</h3>
              <p className="text-sm text-center opacity-90">
                State-of-the-art meetinstrumenten en behandelapparatuur
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#34B8C3] to-[#2a9aa3] rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <BookOpen size={48} className="stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Continue Training</h3>
              <p className="text-sm text-center opacity-90">
                Regelmatige bijscholing in nieuwste technieken en ontwikkelingen
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#233D60] to-[#1a2d4a] rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <TrendingUp size={48} className="stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">10+ Jaar Ervaring</h3>
              <p className="text-sm text-center opacity-90">
                Bewezen expertise in zelfs de meest complexe vochtproblemen
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function ValuesSection() {
  const values = [
    {
      icon: <Award size={48} />,
      title: 'Betrouwbaarheid',
      description: 'We staan voor ons woord en leveren wat we beloven. Onze langdurige garanties en tevreden klanten getuigen van onze betrouwbaarheid.',
    },
    {
      icon: <Heart size={48} />,
      title: 'Professionaliteit',
      description: 'Gecertificeerde specialisten, moderne apparatuur en bewezen technieken. We werken volgens de hoogste normen in de branche.',
    },
    {
      icon: <Users size={48} />,
      title: 'Klanttevredenheid',
      description: 'Uw tevredenheid is ons succes. We gaan pas tevreden naar huis als u dat ook bent. Nazorg en persoonlijke aandacht zijn vanzelfsprekend.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Onze Waarden
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-md text-center border-2 border-[#34B8C3] hover:shadow-lg transition-shadow">
              <div className="text-[#34B8C3] mb-4 flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceAreaSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Actief in heel Vlaanderen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Van de bruisende steden tot de rustige kustgemeenten - waar vocht ook opduikt in Oost- of West-Vlaanderen,
            <span className="text-[#34B8C3] font-semibold"> wij zijn er voor u</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-16">
          <div className="group">
            <div className="bg-white rounded-2xl p-10 shadow-lg border-2 border-[#34B8C3] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-br from-[#34B8C3] to-[#2a9aa3] rounded-full p-6 shadow-lg">
                  <MapPin size={48} className="text-white" strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-center text-gray-800 mb-4">
                Oost-Vlaanderen
              </h3>
              <p className="text-center text-gray-600 text-lg leading-relaxed">
                Van Gent tot Sint-Niklaas, van Aalst tot de Wase regio - we kennen de vochtproblematiek van uw streek door en door.
              </p>
            </div>
          </div>

          <div className="group">
            <div className="bg-white rounded-2xl p-10 shadow-lg border-2 border-[#233D60] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-br from-[#233D60] to-[#1a2d4a] rounded-full p-6 shadow-lg">
                  <Home size={48} className="text-white" strokeWidth={2} />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-center text-gray-800 mb-4">
                West-Vlaanderen
              </h3>
              <p className="text-center text-gray-600 text-lg leading-relaxed">
                Van Brugge tot Kortrijk, van de kust tot het binnenland - uw vochtproblemen zijn bij ons in vertrouwde handen.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#34B8C3] via-[#2a9aa3] to-[#233D60] rounded-2xl p-8 md:p-12 shadow-2xl text-white max-w-4xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center justify-center bg-white/20 rounded-full p-4 mb-6 backdrop-blur-sm">
              <MapPin size={40} className="text-white" strokeWidth={2.5} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ook buiten deze regio's?
            </h3>
            <p className="text-lg md:text-xl mb-6 opacity-95 leading-relaxed">
              Heeft u een vochtprobleem in een andere gemeente? Aarzel niet om contact op te nemen.
              We bekijken graag de mogelijkheden om ook u te helpen!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="bg-white text-[#34B8C3] font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
              >
                Neem Contact Op
              </a>
              <a
                href="tel:+32467616349"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/20 transition-colors"
              >
                Bel Nu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
