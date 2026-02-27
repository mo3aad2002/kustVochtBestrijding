import CityTemplate from '../CityTemplate';
import { cities } from '../../data/cities';

export default function Brugge() {
  const city = cities.find(c => c.slug === 'brugge')!;
  return <CityTemplate cityName={city.name} mapEmbedUrl={city.mapEmbedUrl} heroImage={city.heroImage} />;
}
