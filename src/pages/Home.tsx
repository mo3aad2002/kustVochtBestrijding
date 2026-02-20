import { Link } from 'react-router-dom';
import { Award, Users, ClipboardCheck, Clock, ChevronDown, Phone } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';
import { useState } from 'react';
import moistureInspectionImage from '../assets/Elektricien_(4).png';
import heroImage from '../assets/hero_image_kust_vocht.png';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ExplanationSection />
      <CTASection1 />
      <FAQSection />
      <CTASection2 />
    </div>
  );
}

function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Dark overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'white', padding: '0 20px' }}>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Permanente oplossingen voor uw vochtprobleem
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Definitieve oplossingen voor vocht en schimmel. Actief in Oost- en West-Vlaanderen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-[#34B8C3] text-white px-8 py-4 rounded-lg hover:bg-[#2a9aa3] transition-all transform hover:scale-105 font-semibold text-lg"
          >
            Gratis Inspectie
          </Link>
          <a
            href="tel:+32467616349"
            className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#233D60] transition-all font-semibold text-lg flex items-center justify-center gap-2"
          >
            <Phone size={20} />
            <span>Bel nu</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const { count: clientCount, ref: clientRef } = useCountUp(500, 2500);

  return (
    <section className="py-12 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="text-center">
            <Award className="mx-auto mb-3 text-[#34B8C3]" size={40} />
            <h3 className="text-3xl font-bold text-gray-800 mb-1">10+</h3>
            <p className="text-sm text-gray-600">Jaar Ervaring</p>
          </div>

          <div ref={clientRef} className="text-center">
            <Users className="mx-auto mb-3 text-[#34B8C3]" size={40} />
            <h3 className="text-3xl font-bold text-gray-800 mb-1">{clientCount}+</h3>
            <p className="text-sm text-gray-600">Tevreden Klanten</p>
          </div>

          <div className="text-center">
            <ClipboardCheck className="mx-auto mb-3 text-[#34B8C3]" size={40} />
            <h3 className="text-3xl font-bold text-gray-800 mb-1">Gratis</h3>
            <p className="text-sm text-gray-600">Inspectie</p>
          </div>

          <div className="text-center">
            <Clock className="mx-auto mb-3 text-[#34B8C3]" size={40} />
            <h3 className="text-3xl font-bold text-gray-800 mb-1">24/7</h3>
            <p className="text-sm text-gray-600">Spoedinterventie</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExplanationSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Waarom Vochtbestrijding Essentieel Is
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={moistureInspectionImage}
              alt="Vochtschade inspectie door professional"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              Vochtproblemen zijn meer dan alleen vervelend. Ze vormen een ernstige bedreiging voor zowel uw gezondheid als de structurele integriteit van uw woning of bedrijfspand. Vocht kan leiden tot schimmelvorming, structurele schade aan muren en funderingen, en een ongezond binnenklimaat.
            </p>

            <p className="text-lg text-gray-700">
              Bij Kust Vochtbestrijding begrijpen we de urgentie van vochtproblemen. Met meer dan 10 jaar ervaring in de sector, beschikken we over de kennis en apparatuur om elke vorm van vochtoverlast professioneel aan te pakken. Of het nu gaat om opstijgend vocht, condensatie, of lekkages, wij bieden definitieve oplossingen.
            </p>

            <p className="text-lg text-gray-700">
              Onze aanpak is grondig en transparant. We starten altijd met een gratis inspectie waarbij we de exacte oorzaak van het vochtprobleem identificeren met professionele meetapparatuur. Vervolgens stellen we een duidelijk plan op met een prijsopgave, zonder verborgen kosten.
            </p>

            <p className="text-lg text-gray-700">
              Dankzij ons gebruik van moderne technieken en kwalitatieve materialen, kunnen we u langdurige garantie bieden op onze werkzaamheden. Uw woning verdient de beste bescherming tegen vocht, en daar zorgen wij voor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection1() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-0 rounded-lg overflow-hidden shadow-xl">
          <div className="bg-white p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Vochtprobleem? We Helpen Direct
            </h2>
            <p className="text-gray-600 mb-6">
              Aarzel niet om contact met ons op te nemen. We staan klaar om uw vochtproblemen snel en professioneel op te lossen.
            </p>
          </div>

          <div className="bg-[#34B8C3] p-12 flex flex-col justify-center text-white">
            <h3 className="text-2xl font-bold mb-6">Neem Direct Contact Op</h3>
            <a
              href="tel:+32467616349"
              className="bg-white text-[#34B8C3] px-8 py-4 rounded-lg hover:bg-gray-100 transition font-bold text-xl text-center mb-4 flex items-center justify-center space-x-2"
            >
              <Phone size={24} />
              <span>Bel nu</span>
            </a>
            <p className="text-center mb-2">Of</p>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#34B8C3] transition font-semibold text-center"
            >
              Vraag Gratis Inspectie Aan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Hoe weet ik of ik een vochtprobleem heb?',
      answer: 'Vochtproblemen uiten zich op verschillende manieren: vochtplekken op muren, schimmelvorming, afbladderende verf, muffe geur, of condensatie op ramen. Ook een verhoogde luchtvochtigheid of koude muren kunnen wijzen op een vochtprobleem. Bij twijfel bieden wij een gratis inspectie aan waarbij we met professionele meetapparatuur de oorzaak identificeren.',
    },
    {
      question: 'Wat kost een vochtbestrijding?',
      answer: 'De kosten variëren afhankelijk van de omvang en oorzaak van het vochtprobleem. Na onze gratis inspectie ontvang je een duidelijke offerte op maat, zonder verrassingen. We werken transparant en zorgen voor de beste prijs-kwaliteit verhouding.',
    },
    {
      question: 'Hoe lang duurt de behandeling?',
      answer: 'De duur van de behandeling hangt af van het type vochtprobleem en de omvang. Tijdens de offerte geven we een duidelijke planning en houden we ons aan de afgesproken deadlines.',
    },
    {
      question: 'Geven jullie garantie?',
      answer: 'Ja, wij bieden langdurige garantie op al onze werkzaamheden. De exacte garantieperiode hangt af van het type behandeling. We gebruiken enkel kwalitatieve materialen en bewezen technieken, waardoor we vol vertrouwen garantie kunnen geven op duurzame resultaten.',
    },
    {
      question: 'Werken jullie ook in weekends?',
      answer: 'Ja, we zijn flexibel in onze planning en kunnen ook in weekends werken indien gewenst. Voor spoedgevallen bieden we zelfs 24/7 interventie. Neem contact met ons op om een afspraak te maken die het beste bij jouw agenda past.',
    },
    {
      question: 'Is een inspectie echt gratis?',
      answer: 'Absoluut! Onze inspectie is volledig gratis en vrijblijvend. We komen ter plaatse, analyseren het vochtprobleem met professionele meetapparatuur, en stellen een duidelijke offerte op. Er zijn geen verborgen kosten en je bent niet verplicht om met ons in zee te gaan. We vinden het belangrijk dat je goed geïnformeerd een beslissing kunt nemen.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Veelgestelde Vragen
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 border-[#34B8C3] rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition flex items-center justify-between"
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                <ChevronDown
                  className={`text-[#34B8C3] transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t-2 border-[#34B8C3]">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection2() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#34B8C3] opacity-10 rounded-full blur-3xl transform -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#233D60] opacity-10 rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-[#34B8C3] opacity-5 rounded-full blur-2xl"></div>
      </div>

      {/* Diagonal stripe pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #34B8C3 0px, #34B8C3 2px, transparent 2px, transparent 12px)',
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-br from-[#34B8C3] via-[#2a9aa3] to-[#233D60] rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative">
            {/* Decorative circles */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-white opacity-10 rounded-full"></div>
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-white opacity-10 rounded-full"></div>
            <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-white opacity-5 rounded-full"></div>

            <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
              <div className="inline-block mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-2">
                  <span className="text-white font-semibold text-sm uppercase tracking-wider">
                    Start Vandaag
                  </span>
                </div>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Klaar om uw vochtprobleem<br className="hidden md:block" />
                <span className="text-white/90">definitief op te lossen?</span>
              </h2>

              <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                Neem vandaag nog contact op en profiteer van onze gratis inspectie.
                Onze experts staan voor u klaar!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="bg-white text-[#34B8C3] px-10 py-4 rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 hover:shadow-xl font-bold text-lg shadow-lg min-w-[200px]"
                >
                  Vraag Offerte Aan
                </Link>
                <a
                  href="tel:+32467616349"
                  className="border-3 border-white text-white px-10 py-4 rounded-xl hover:bg-white hover:text-[#34B8C3] transition-all transform hover:scale-105 font-bold text-lg flex items-center justify-center space-x-3 backdrop-blur-sm bg-white/10 min-w-[200px]"
                >
                  <Phone size={22} strokeWidth={2.5} />
                  <span>Bel Direct</span>
                </a>
              </div>

              <p className="text-white/80 mt-8 text-sm">
                Actief in heel Oost- en West-Vlaanderen
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
