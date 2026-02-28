import CityTemplate from '../CityTemplate';
import { cities } from '../../data/cities';

export default function Jabbeke() {
  const city = cities.find(c => c.slug === 'jabbeke')!;
  return <CityTemplate cityName={city.name} mapEmbedUrl={city.mapEmbedUrl} heroImage={city.heroImage} aboutImage={city.aboutImage} />;
}
