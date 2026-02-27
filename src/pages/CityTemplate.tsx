import { Link } from 'react-router-dom';
import { Award, Users, Shield, CheckCircle2, Phone, Clock, Droplets } from 'lucide-react';
import vochtOpMuurImg from '../assets/vocht_op_muur.png';
import schimmelOpMuurImg from '../assets/schimmel_op_muur.png';
import condensatieImg from '../assets/condensatie.jpg';
import aboutImage from '../assets/0065fc17-c4e5-41dc-a19a-1ea18cb075a6.png';
import heroImageKust from '../assets/hero_image_kust_vocht.png';

interface CityPageProps {
  cityName: string;
  mapEmbedUrl: string;
  heroImage?: string;
}

export default function CityTemplate({ cityName, mapEmbedUrl, heroImage }: CityPageProps) {
  return (
    <div>
      <HeroSection cityName={cityName} heroImage={heroImage} />
      <TrustSection />
      <ServicesSection cityName={cityName} />
      <AboutSection cityName={cityName} />
      <MapSection cityName={cityName} mapEmbedUrl={mapEmbedUrl} />
      <CTASection cityName={cityName} />
    </div>
  );
}

function HeroSection({ cityName, heroImage }: { cityName: string; heroImage?: string }) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {heroImage ? (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroImage})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#233D60]/90 via-[#2a4d6e]/85 to-[#34B8C3]/90" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[#233D60] via-[#2a4d6e] to-[#34B8C3]" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)',
            }}></div>
          </div>
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Droplets className="mr-2" size={20} />
            <span className="text-sm font-semibold">Erkend Specialist</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Vochtbestrijding in {cityName}
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Uw partner voor vochtbestrijding in {cityName} en omstreken.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#233D60] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold text-lg inline-flex items-center justify-center"
            >
              Gratis Inspectie Aanvragen
            </Link>
            <a
              href="tel:+32467616349"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#233D60] transition-all font-semibold text-lg flex items-center justify-center space-x-2"
            >
              <Phone size={22} />
              <span>Bel ons</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Waarom Kiezen Voor Kust Vochtbestrijding?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Uw vertrouwde partner met jarenlange ervaring in de regio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#34B8C3]/10 rounded-full mb-4">
              <Award className="text-[#34B8C3]" size={32} strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">10+ Jaar</h3>
            <p className="text-gray-600">Ervaring in vochtbestrijding</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#34B8C3]/10 rounded-full mb-4">
              <Users className="text-[#34B8C3]" size={32} strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
            <p className="text-gray-600">Tevreden klanten</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#34B8C3]/10 rounded-full mb-4">
              <Shield className="text-[#34B8C3]" size={32} strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Garantie</h3>
            <p className="text-gray-600">Op al onze werkzaamheden</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#34B8C3]/10 rounded-full mb-4">
              <Clock className="text-[#34B8C3]" size={32} strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">24/7</h3>
            <p className="text-gray-600">Spoedinterventie mogelijk</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ cityName }: { cityName: string }) {
  const services = [
    {
      image: vochtOpMuurImg,
      title: 'Opstijgend Vocht',
      description: 'Behandeling van opstijgend vocht met professionele injectietechnieken en vochtschermen.',
    },
    {
      image: schimmelOpMuurImg,
      title: 'Schimmel',
      description: 'Schimmel in huis is ongezond en kan voor vieze vlekken zorgen. Wij zorgen ervoor dat het niet meer terugkomt.',
    },
    {
      image: condensatieImg,
      title: 'Condensatie',
      description: 'Verbetering van ventilatie en isolatie om condensatieproblemen te voorkomen.',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Onze Diensten in {cityName}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professionele oplossingen voor elk vochtprobleem
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/diensten"
            className="inline-flex items-center text-[#34B8C3] hover:text-[#233D60] font-semibold text-lg transition-colors"
          >
            Bekijk alle diensten
            <CheckCircle2 className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function AboutSection({ cityName }: { cityName: string }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Wie Is Kust Vochtbestrijding?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Kust Vochtbestrijding is uw lokale specialist voor het behandelen van vochtproblemen in {cityName} en de ruime omgeving. Met meer dan 10 jaar ervaring hebben wij honderden woningen en bedrijfspanden geholpen om definitief van vochtoverlast af te komen.
              </p>

              <p>
                Onze aanpak is grondig en klantgericht. We starten altijd met een gratis inspectie waarbij we de exacte oorzaak van uw vochtprobleem identificeren met professionele meetapparatuur. Op basis daarvan stellen we een duidelijk plan op met transparante prijsopgave.
              </p>

              <p>
                Of het nu gaat om opstijgend vocht, condensatie, lekkages of schimmelvorming, wij bieden duurzame oplossingen met langdurige garantie. Onze technici zijn volledig gekwalificeerd en werken met de nieuwste technieken en kwalitatieve materialen.
              </p>

              <p className="font-semibold text-[#233D60]">
                Voor bewoners van {cityName}: wij staan klaar om uw vochtprobleem snel en professioneel aan te pakken!
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                alt="Kust Vochtbestrijding specialist aan het werk"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MapSection({ cityName, mapEmbedUrl }: { cityName: string; mapEmbedUrl: string }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {cityName} en Omstreken
          </h2>
          <p className="text-gray-600 text-lg">
            Wij zijn actief in heel {cityName} en de omliggende gemeenten
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden" style={{ height: '450px' }}>
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Kaart van ${cityName}`}
          ></iframe>
        </div>
      </div>
    </section>
  );
}

function CTASection({ cityName }: { cityName: string }) {
  return (
    <section className="py-20 bg-gradient-to-br from-[#34B8C3] to-[#233D60] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Vochtprobleem in {cityName}?
        </h2>
        <p className="text-xl mb-10 text-white/90">
          Neem vandaag nog contact op voor een gratis inspectie en vrijblijvende offerte.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-white text-[#34B8C3] px-10 py-4 rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 font-bold text-lg shadow-lg"
          >
            Vraag Gratis Inspectie Aan
          </Link>
          <a
            href="tel:+32467616349"
            className="border-2 border-white text-white px-10 py-4 rounded-xl hover:bg-white hover:text-[#34B8C3] transition-all transform hover:scale-105 font-bold text-lg flex items-center justify-center space-x-2"
          >
            <Phone size={22} />
            <span>Bel ons</span>
          </a>
        </div>
      </div>
    </section>
  );
}
