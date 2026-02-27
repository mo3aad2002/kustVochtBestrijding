import CityTemplate from '../CityTemplate';
import { cities } from '../../data/cities';

export default function Bredene() {
  const city = cities.find(c => c.slug === 'bredene')!;
  return <CityTemplate cityName={city.name} mapEmbedUrl={city.mapEmbedUrl} heroImage={city.heroImage} />;
}
