import { Shield, Mail, Phone, MapPin, Lock, FileText, Clock, UserCheck } from 'lucide-react';

export default function Privacybeleid() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#34B8C3] to-[#2a9aa3] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Shield className="mr-4" size={48} />
            <h1 className="text-4xl md:text-5xl font-bold">Privacybeleid</h1>
          </div>
          <p className="text-xl text-center text-white/90">
            Laatste update: {new Date().toLocaleDateString('nl-BE', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="prose prose-lg max-w-none">

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="mr-3 text-[#34B8C3]" size={32} />
                1. Algemene Informatie
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#34B8C3]">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kust Vochtbestrijding, gevestigd te Kemmelbergstraat 40, 8400 Oostende, is verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.
                </p>
                <div className="space-y-2 text-gray-700">
                  <p className="flex items-start">
                    <MapPin className="mr-2 mt-1 flex-shrink-0 text-[#34B8C3]" size={18} />
                    <span><strong>Adres:</strong> Kemmelbergstraat 40, 8400 Oostende</span>
                  </p>
                  <p className="flex items-start">
                    <Phone className="mr-2 mt-1 flex-shrink-0 text-[#34B8C3]" size={18} />
                    <span><strong>Telefoon:</strong> <a href="tel:+32467616349" className="text-[#34B8C3] hover:underline">+32 467 61 63 49</a></span>
                  </p>
                  <p className="flex items-start">
                    <Mail className="mr-2 mt-1 flex-shrink-0 text-[#34B8C3]" size={18} />
                    <span><strong>E-mail:</strong> <a href="mailto:info@kustvochtbestrijding.be" className="text-[#34B8C3] hover:underline">info@kustvochtbestrijding.be</a></span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <UserCheck className="mr-3 text-[#34B8C3]" size={32} />
                2. Welke Persoonsgegevens Verzamelen Wij?
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#34B8C3]">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kust Vochtbestrijding verwerkt uw persoonsgegevens wanneer u gebruik maakt van onze diensten en/of omdat u deze zelf aan ons verstrekt. Hieronder vindt u een overzicht van de persoonsgegevens die wij verwerken:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Voor- en achternaam</li>
                  <li>E-mailadres</li>
                  <li>Telefoonnummer</li>
                  <li>Adresgegevens</li>
                  <li>Bericht- en communicatiegegevens die u met ons deelt</li>
                  <li>Foto's die u optioneel uploadt via ons contactformulier</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="mr-3 text-[#34B8C3]" size={32} />
                3. Waarom Verwerken Wij Uw Gegevens?
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#34B8C3]">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kust Vochtbestrijding verwerkt uw persoonsgegevens voor de volgende doeleinden:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Het behandelen van uw aanvraag en beantwoorden van uw vragen</li>
                  <li>U te bellen of e-mailen indien dit nodig is om onze dienstverlening uit te kunnen voeren</li>
                  <li>Het maken van een offerte op basis van uw aanvraag</li>
                  <li>Het uitvoeren van de door u gevraagde diensten</li>
                  <li>Het analyseren van uw gedrag op de website om daarmee de website te verbeteren</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  <strong>Rechtsgrondslag:</strong> De verwerking van uw persoonsgegevens is gebaseerd op uw toestemming en ons gerechtvaardigd belang om contact met u op te nemen naar aanleiding van uw aanvraag.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <Clock className="mr-3 text-[#34B8C3]" size={32} />
                4. Hoe Lang Bewaren Wij Uw Gegevens?
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#34B8C3]">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kust Vochtbestrijding bewaart uw persoonsgegevens niet langer dan strikt nodig is om de doelen te realiseren waarvoor uw gegevens worden verzameld. Wij hanteren de volgende bewaartermijnen:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Contactformulier gegevens:</strong> Maximaal 2 jaar na laatste contact, tenzij een zakelijke relatie is ontstaan</li>
                  <li><strong>Klantgegevens:</strong> 7 jaar na laatste opdracht (wettelijke bewaartermijn voor facturen en administratie)</li>
                  <li><strong>Offerte gegevens:</strong> 1 jaar na datum offerte indien deze niet is geaccepteerd</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  U kunt te allen tijde verzoeken om verwijdering van uw gegevens, tenzij wettelijke verplichtingen ons dwingen deze langer te bewaren.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <Shield className="mr-3 text-[#34B8C3]" size={32} />
                5. Delen Met Derden
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#34B8C3]">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kust Vochtbestrijding verstrekt uitsluitend aan derden en alleen als dit nodig is voor de uitvoering van onze overeenkomst met u of om te voldoen aan een wettelijke verplichting. Wij werken samen met de volgende dienstverleners:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>E-mail dienstverlener (Resend):</strong> Voor het verzenden van e-mails vanuit ons contactformulier</li>
                  <li><strong>Hosting provider (Supabase):</strong> Voor het veilig opslaan van gegevens</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Met deze partijen hebben wij verwerkersovereenkomsten gesloten om te zorgen voor eenzelfde niveau van beveiliging en vertrouwelijkheid van uw gegevens. Kust Vochtbestrijding verkoopt uw gegevens niet aan derden.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="mr-3 text-[#34B8C3]" size={32} />
                6. Beveiliging
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#34B8C3]">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kust Vochtbestrijding neemt de bescherming van uw gegevens serieus en neemt passende maatregelen om misbruik, verlies, onbevoegde toegang, ongewenste openbaarmaking en ongeoorloofde wijziging tegen te gaan. Als u het idee heeft dat uw gegevens niet goed beveiligd zijn of er aanwijzingen zijn van misbruik, neem dan contact met ons op via <a href="mailto:info@kustvochtbestrijding.be" className="text-[#34B8C3] hover:underline">info@kustvochtbestrijding.be</a>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Wij nemen onder andere de volgende maatregelen:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
                  <li>Gebruik van SSL-certificaten voor veilige communicatie</li>
                  <li>Versleutelde opslag van persoonsgegevens</li>
                  <li>Beperkte toegang tot persoonsgegevens (alleen geautoriseerd personeel)</li>
                  <li>Regelmatige updates van beveiligingssystemen</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <UserCheck className="mr-3 text-[#34B8C3]" size={32} />
                7. Uw Rechten
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#34B8C3]">
                <p className="text-gray-700 leading-relaxed mb-4">
                  U heeft recht op inzage, rectificatie of verwijdering van de persoonsgegevens die wij van u ontvangen hebben. Tevens kunt u bezwaar maken tegen de verwerking van uw persoonsgegevens (of een deel hiervan) door ons of door één van onze verwerkers. Ook heeft u het recht om de door u verstrekte gegevens door ons te laten overdragen aan uzelf of in opdracht van u direct aan een andere partij. Wij kunnen u vragen om u te legitimeren voordat wij gehoor kunnen geven aan voornoemde verzoeken.
                </p>
                <div className="bg-white p-4 rounded-lg mt-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Uw rechten in het kort:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Recht op inzage:</strong> U mag ons vragen welke gegevens wij van u verwerken</li>
                    <li><strong>Recht op rectificatie:</strong> U mag ons vragen onjuiste gegevens aan te passen</li>
                    <li><strong>Recht op vergetelheid:</strong> U mag ons vragen uw gegevens te verwijderen</li>
                    <li><strong>Recht op beperking:</strong> U mag ons vragen de verwerking te beperken</li>
                    <li><strong>Recht op dataportabiliteit:</strong> U mag uw gegevens in een digitaal formaat opvragen</li>
                    <li><strong>Recht van bezwaar:</strong> U mag bezwaar maken tegen bepaalde verwerkingen</li>
                    <li><strong>Recht om toestemming in te trekken:</strong> Als verwerking op basis van toestemming plaatsvindt</li>
                  </ul>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Om gebruik te maken van deze rechten, kunt u contact met ons opnemen via <a href="mailto:info@kustvochtbestrijding.be" className="text-[#34B8C3] hover:underline">info@kustvochtbestrijding.be</a> of telefonisch op <a href="tel:+32467616349" className="text-[#34B8C3] hover:underline">+32 467 61 63 49</a>.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="mr-3 text-[#34B8C3]" size={32} />
                8. Wijzigingen in dit Privacybeleid
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#34B8C3]">
                <p className="text-gray-700 leading-relaxed">
                  Kust Vochtbestrijding kan dit privacybeleid van tijd tot tijd aanpassen. Wij raden u daarom aan om dit privacybeleid geregeld te raadplegen, zodat u op de hoogte blijft van deze wijzigingen. Dit privacybeleid is voor het laatst aangepast op de datum bovenaan deze pagina.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
