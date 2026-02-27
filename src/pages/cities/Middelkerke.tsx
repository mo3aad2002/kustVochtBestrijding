import CityTemplate from '../CityTemplate';
import { cities } from '../../data/cities';

export default function Middelkerke() {
  const city = cities.find(c => c.slug === 'middelkerke')!;
  return <CityTemplate cityName={city.name} mapEmbedUrl={city.mapEmbedUrl} heroImage={city.heroImage} />;
}
