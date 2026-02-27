import CityTemplate from '../CityTemplate';
import { cities } from '../../data/cities';

export default function Ichtegem() {
  const city = cities.find(c => c.slug === 'ichtegem')!;
  return <CityTemplate cityName={city.name} mapEmbedUrl={city.mapEmbedUrl} heroImage={city.heroImage} />;
}
