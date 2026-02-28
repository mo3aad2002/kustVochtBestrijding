import CityTemplate from '../CityTemplate';
import { cities } from '../../data/cities';

export default function Nieuwpoort() {
  const city = cities.find(c => c.slug === 'nieuwpoort')!;
  return <CityTemplate cityName={city.name} mapEmbedUrl={city.mapEmbedUrl} heroImage={city.heroImage} aboutImage={city.aboutImage} />;
}
