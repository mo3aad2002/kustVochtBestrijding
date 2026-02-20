import { Droplets, Bug, Home, Wind, Shield, Search, ArrowRight, ClipboardCheck, MessageSquare, Award } from 'lucide-react';
import heroImage from '../assets/a46db951-dba9-450d-acf7-d53ceb163c37.png';

export default function Diensten() {
  return (
    <div>
      <HeroSection />
      <ServicesGrid />
      <ProcessSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[400px] flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-[center_top_20%]"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-70" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Onze Diensten</h1>
        <p className="text-xl md:text-2xl">
          Professionele oplossingen voor elk vochtprobleem
        </p>
      </div>
    </section>
  );
}

function ServicesGrid() {
  const services = [
    {
      icon: <Droplets size={56} />,
      title: 'Vocht op Muren',
      description: 'Heeft u natte muren of vochtplekken aan de onderkant van uw muur? Dit komt doordat vocht uit de grond omhoog kruipt in uw muren. Wij stoppen dit opstijgend vocht definitief zodat uw muren weer helemaal droog worden en blijven',
      gradient: 'from-[#34B8C3] to-[#2a9aa3]',
    },
    {
      icon: <Bug size={56} />,
      title: 'Schimmel',
      description: 'Schimmel in huis is ongezond en kan voor vieze vlekken zorgen. Wij zoeken uit waar de schimmel vandaan komt, verwijderen het volledig en zorgen ervoor dat het niet meer terugkomt.',
      gradient: 'from-[#233D60] to-[#1a2d4a]',
    },
    {
      icon: <Wind size={56} />,
      title: 'Condensatie',
      description: 'Beslagen ramen, natte muren of vocht in de lucht? Dit komt door condensatie. Wij zorgen voor betere ventilatie en lossen uw condensatieproblemen op, zodat uw huis gezond en droog blijft.',
      gradient: 'from-[#34B8C3] to-[#2a9aa3]',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#34B8C3] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#233D60] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Onze Specialiteiten
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professionele oplossingen voor elk vochtprobleem
          </p>
        </div>

        {/* Featured Service - Gratis Inspectie */}
        <div className="mb-12 group">
          <div className="relative bg-gradient-to-br from-[#34B8C3] via-[#2a9aa3] to-[#233D60] rounded-3xl p-1 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="bg-white rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#34B8C3] to-[#233D60] rounded-full blur-xl opacity-50 animate-pulse"></div>
                    <div className="relative bg-gradient-to-br from-[#34B8C3] to-[#233D60] rounded-full p-8 text-white transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Search size={80} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block bg-gradient-to-r from-[#34B8C3] to-[#233D60] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    GRATIS & VRIJBLIJVEND
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Gratis Vocht Inspectie
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Wij komen gratis bij u langs om te kijken waar het vocht vandaan komt. We meten alles goed op en vertellen u precies wat er aan de hand is. U bent nergens toe verplicht.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid - Diagonal/Zigzag Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="relative h-full">
                {/* Decorative corner element */}
                <div className={`absolute -top-3 -right-3 w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 blur-2xl`}></div>

                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-transparent hover:border-gray-100 h-full flex flex-col">
                  {/* Icon with gradient background */}
                  <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#34B8C3] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Decorative gradient bar at bottom */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} rounded-b-2xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Onze Werkwijze</h2>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Van eerste contact tot nazorg - we begeleiden u door het hele proces met transparantie en professionaliteit. Dit is hoe we te werk gaan:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          <div className="relative">
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[#34B8C3] hover:shadow-lg transition-shadow h-full">
              <div className="flex justify-center mb-4">
                <div className="bg-[#34B8C3] rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-bold">
                  1
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">Contact</h3>
              <p className="text-gray-600 text-sm text-center">
                U neemt contact op via telefoon, mail of het contactformulier. We luisteren naar uw vochtprobleem en plannen een afspraak in.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[#233D60] hover:shadow-lg transition-shadow h-full">
              <div className="flex justify-center mb-4">
                <div className="bg-[#233D60] rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-bold">
                  2
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">Plaatsbezoek</h3>
              <p className="text-gray-600 text-sm text-center">
                Onze specialist komt langs voor een grondige inspectie. We analyseren het probleem met professionele meetapparatuur.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[#34B8C3] hover:shadow-lg transition-shadow h-full">
              <div className="flex justify-center mb-4">
                <div className="bg-[#34B8C3] rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-bold">
                  3
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">Offerte</h3>
              <p className="text-gray-600 text-sm text-center">
                U ontvangt een gedetailleerde offerte met uitleg over de oorzaak, oplossing en kosten. Geen verrassingen.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[#233D60] hover:shadow-lg transition-shadow h-full">
              <div className="flex justify-center mb-4">
                <div className="bg-[#233D60] rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-bold">
                  4
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">Uitvoering</h3>
              <p className="text-gray-600 text-sm text-center">
                Na uw akkoord starten we met de behandeling. Netjes, efficiënt en met respect voor uw woning of bedrijfspand.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-[#34B8C3] hover:shadow-lg transition-shadow h-full">
              <div className="flex justify-center mb-4">
                <div className="bg-[#34B8C3] rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-bold">
                  5
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">Nazorg & Garantie</h3>
              <p className="text-gray-600 text-sm text-center">
                Na afronding volgen we op en bieden langdurige garantie. Vragen? We blijven beschikbaar voor u.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#34B8C3] to-[#233D60] rounded-lg p-8 text-white">
          <div className="flex items-center justify-center gap-4 mb-6">
            <ClipboardCheck size={32} />
            <h3 className="text-2xl font-bold">Waarom Voor Ons Kiezen?</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <MessageSquare size={32} />
              </div>
              <p className="font-semibold mb-2">Duidelijke Communicatie</p>
              <p className="text-sm opacity-90">
                We houden u op de hoogte tijdens elk stadium van het proces
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Shield size={32} />
              </div>
              <p className="font-semibold mb-2">Eerlijke Prijzen</p>
              <p className="text-sm opacity-90">
                Transparante offertes zonder verborgen kosten of verrassingen
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Award size={32} />
              </div>
              <p className="font-semibold mb-2">Kwaliteitsgarantie</p>
              <p className="text-sm opacity-90">
                Langdurige garantie op al onze uitgevoerde werkzaamheden
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
