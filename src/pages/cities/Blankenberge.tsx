import CityTemplate from '../CityTemplate';
import { cities } from '../../data/cities';

export default function Blankenberge() {
  const city = cities.find(c => c.slug === 'blankenberge')!;
  return <CityTemplate cityName={city.name} mapEmbedUrl={city.mapEmbedUrl} heroImage={city.heroImage} aboutImage={city.aboutImage} />;
}
