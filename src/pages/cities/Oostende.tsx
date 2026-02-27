import CityTemplate from '../CityTemplate';
import { cities } from '../../data/cities';

export default function Oostende() {
  const city = cities.find(c => c.slug === 'oostende')!;
  return <CityTemplate cityName={city.name} mapEmbedUrl={city.mapEmbedUrl} heroImage={city.heroImage} />;
}
