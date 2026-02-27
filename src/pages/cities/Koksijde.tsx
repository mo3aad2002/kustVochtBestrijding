import CityTemplate from '../CityTemplate';
import { cities } from '../../data/cities';

export default function Koksijde() {
  const city = cities.find(c => c.slug === 'koksijde')!;
  return <CityTemplate cityName={city.name} mapEmbedUrl={city.mapEmbedUrl} heroImage={city.heroImage} />;
}
