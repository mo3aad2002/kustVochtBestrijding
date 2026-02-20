import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, X, Upload, Image as ImageIcon } from 'lucide-react';
import heroImage from '../assets/04611d2b-e43e-42dd-b4bf-97a949fb357c.png';

export default function Contact() {
  return (
    <div>
      <HeroSection />
      <ContactSection />
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Neem Contact Op</h1>
        <p className="text-xl md:text-2xl">We staan klaar om te helpen</p>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });

  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);
  const [uploadError, setUploadError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setUploadError('');

    const MAX_FILE_SIZE = 5 * 1024 * 1024;
    const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    const MAX_FILES = 3;

    if (selectedImages.length + files.length > MAX_FILES) {
      setUploadError(`U kunt maximaal ${MAX_FILES} afbeeldingen uploaden`);
      return;
    }

    const validFiles: File[] = [];
    const newPreviewUrls: string[] = [];

    for (const file of files) {
      if (!ALLOWED_TYPES.includes(file.type)) {
        setUploadError('Alleen JPEG, PNG, GIF en WebP afbeeldingen zijn toegestaan');
        continue;
      }

      if (file.size > MAX_FILE_SIZE) {
        setUploadError('Afbeeldingen mogen maximaal 5MB groot zijn');
        continue;
      }

      validFiles.push(file);
      newPreviewUrls.push(URL.createObjectURL(file));
    }

    if (validFiles.length > 0) {
      setSelectedImages([...selectedImages, ...validFiles]);
      setImagePreviewUrls([...imagePreviewUrls, ...newPreviewUrls]);
    }
  };

  const removeImage = (index: number) => {
    URL.revokeObjectURL(imagePreviewUrls[index]);
    setSelectedImages(selectedImages.filter((_, i) => i !== index));
    setImagePreviewUrls(imagePreviewUrls.filter((_, i) => i !== index));
    setUploadError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setIsError(false);

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;

      const imageDataPromises = selectedImages.map(async (file) => {
        return new Promise<{ filename: string; content: string; type: string }>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            const base64 = (reader.result as string).split(',')[1];
            resolve({
              filename: file.name,
              content: base64,
              type: file.type,
            });
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      });

      const imageData = await Promise.all(imageDataPromises);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          ...formData,
          images: imageData,
        }),
      });

      if (!response.ok) {
        throw new Error('Email verzenden mislukt');
      }

      imagePreviewUrls.forEach(url => URL.revokeObjectURL(url));

      setIsError(false);
      setShowSuccessModal(true);
      setIsFormSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: '',
      });
      setSelectedImages([]);
      setImagePreviewUrls([]);
      setUploadError('');
    } catch (error) {
      setIsError(true);
      setSubmitMessage('Er is iets misgegaan. Probeer het opnieuw of bel ons direct op +32 467 61 63 49.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Stuur ons een bericht
            </h2>

            {isFormSubmitted ? (
              <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-xl p-8 text-center">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-4">
                    <CheckCircle className="text-white" size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    Bericht Verzonden!
                  </h3>
                  <p className="text-gray-700 text-lg mb-2">
                    Bedankt voor uw bericht! We hebben uw aanvraag ontvangen.
                  </p>
                  <p className="text-gray-600">
                    We nemen zo snel mogelijk contact met u op.
                  </p>
                </div>
                <div className="space-y-3">
                  <a
                    href="tel:+32467616349"
                    className="block bg-[#34B8C3] text-white px-6 py-3 rounded-lg hover:bg-[#2a9aa3] transition font-semibold"
                  >
                    Of bel ons direct: +32 467 61 63 49
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Naam *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34B8C3] focus:border-transparent outline-none transition"
                  placeholder="Uw naam"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34B8C3] focus:border-transparent outline-none transition"
                  placeholder="uw.email@voorbeeld.be"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefoonnummer *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34B8C3] focus:border-transparent outline-none transition"
                  placeholder="+32 123 45 67 89"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                  Adres *
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34B8C3] focus:border-transparent outline-none transition"
                  placeholder="Straat, nummer, postcode, stad"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Bericht
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34B8C3] focus:border-transparent outline-none transition resize-none"
                  placeholder="Beschrijf uw vochtprobleem..."
                />
              </div>

              <div>
                <label htmlFor="images" className="block text-sm font-semibold text-gray-700 mb-2">
                  Foto's van het probleem (optioneel)
                </label>
                <p className="text-sm text-gray-500 mb-3">
                  Upload maximaal 3 foto's (JPEG, PNG, GIF, WebP - max 5MB per foto)
                </p>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#34B8C3] transition">
                  <input
                    type="file"
                    id="images"
                    accept="image/jpeg,image/png,image/gif,image/webp"
                    multiple
                    onChange={handleImageChange}
                    className="hidden"
                    disabled={selectedImages.length >= 3}
                  />
                  <label
                    htmlFor="images"
                    className={`cursor-pointer inline-flex flex-col items-center ${selectedImages.length >= 3 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <Upload className="text-gray-400 mb-2" size={40} />
                    <span className="text-gray-600 font-medium">
                      {selectedImages.length >= 3 ? 'Maximaal aantal bereikt' : 'Klik om foto\'s te uploaden'}
                    </span>
                    <span className="text-gray-500 text-sm mt-1">
                      of sleep ze hierheen
                    </span>
                  </label>
                </div>

                {uploadError && (
                  <div className="mt-3 bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-sm">
                    {uploadError}
                  </div>
                )}

                {imagePreviewUrls.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {imagePreviewUrls.map((url, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={url}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg border-2 border-gray-200"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition hover:bg-red-600"
                        >
                          <X size={16} />
                        </button>
                        <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded flex items-center">
                          <ImageIcon size={12} className="mr-1" />
                          {selectedImages[index].name.length > 15
                            ? selectedImages[index].name.substring(0, 15) + '...'
                            : selectedImages[index].name}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#34B8C3] text-white px-8 py-4 rounded-lg hover:bg-[#2a9aa3] transition font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Verzenden...' : 'Verstuur Bericht'}
              </button>

              {submitMessage && (
                <div className={`${isError ? 'bg-red-50 border-red-200 text-red-800' : 'bg-green-50 border-green-200 text-green-800'} border px-4 py-3 rounded-lg`}>
                  {submitMessage}
                </div>
              )}
            </form>
            )}
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Contact Informatie
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#34B8C3] p-3 rounded-lg">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Telefoon</h3>
                  <a href="tel:+32467616349" className="text-[#34B8C3] hover:underline">
                    +32 467 61 63 49
                  </a>
                  <p className="text-gray-600 text-sm mt-1">Bel ons direct voor spoedinterventies</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#34B8C3] p-3 rounded-lg">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">E-mail</h3>
                  <a href="mailto:info@kustvochtbestrijding.be" className="text-[#34B8C3] hover:underline">
                    info@kustvochtbestrijding.be
                  </a>
                  <p className="text-gray-600 text-sm mt-1">We reageren binnen 24 uur</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#34B8C3] p-3 rounded-lg">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Adres</h3>
                  <p className="text-gray-600">Kemmelbergstraat 40, Oostende</p>
                  <p className="text-gray-600">Gent</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Werkgebied: Oost-Vlaanderen & West-Vlaanderen
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#34B8C3] p-3 rounded-lg">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Beschikbaarheid</h3>
                  <p className="text-gray-600">24/7 beschikbaar</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Voor spoedinterventies en reguliere afspraken
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#34B8C3] to-[#2a9aa3] text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Gratis Inspectie</h3>
              <p className="mb-6">
                Twijfelt u of u een vochtprobleem heeft? We komen graag langs voor een
                vrijblijvende inspectie. Volledig gratis en zonder verplichtingen.
              </p>
              <a
                href="tel:+32467616349"
                className="inline-block bg-white text-[#34B8C3] px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold"
              >
                Plan een Inspectie
              </a>
            </div>
          </div>
        </div>
      </div>

      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-scale-in">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <X size={24} />
            </button>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-6">
                <CheckCircle className="text-white" size={48} />
              </div>

              <h3 className="text-3xl font-bold text-gray-800 mb-3">
                Succesvol Verzonden!
              </h3>

              <p className="text-gray-600 text-lg mb-2">
                Bedankt voor uw bericht!
              </p>

              <p className="text-gray-500 mb-6">
                We hebben uw aanvraag ontvangen en nemen zo snel mogelijk contact met u op.
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="w-full bg-gradient-to-r from-[#34B8C3] to-[#2a9aa3] text-white px-6 py-3 rounded-lg hover:shadow-lg transition font-semibold"
                >
                  Sluiten
                </button>

                <a
                  href="tel:+32467616349"
                  className="block w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition font-semibold"
                >
                  Of bel ons: +32 467 61 63 49
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
