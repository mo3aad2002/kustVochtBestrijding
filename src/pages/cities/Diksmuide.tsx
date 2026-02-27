import CityTemplate from '../CityTemplate';
import { cities } from '../../data/cities';

export default function Diksmuide() {
  const city = cities.find(c => c.slug === 'diksmuide')!;
  return <CityTemplate cityName={city.name} mapEmbedUrl={city.mapEmbedUrl} heroImage={city.heroImage} />;
}
