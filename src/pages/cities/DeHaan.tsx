import CityTemplate from '../CityTemplate';
import { cities } from '../../data/cities';

export default function DeHaan() {
  const city = cities.find(c => c.slug === 'de-haan')!;
  return <CityTemplate cityName={city.name} mapEmbedUrl={city.mapEmbedUrl} heroImage={city.heroImage} />;
}
