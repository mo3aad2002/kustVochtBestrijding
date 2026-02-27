import CityTemplate from '../CityTemplate';
import { cities } from '../../data/cities';

export default function Oostkamp() {
  const city = cities.find(c => c.slug === 'oostkamp')!;
  return <CityTemplate cityName={city.name} mapEmbedUrl={city.mapEmbedUrl} heroImage={city.heroImage} />;
}
