import CityTemplate from '../CityTemplate';
import { cities } from '../../data/cities';

export default function Alveringem() {
  const city = cities.find(c => c.slug === 'alveringem')!;
  return <CityTemplate cityName={city.name} mapEmbedUrl={city.mapEmbedUrl} heroImage={city.heroImage} aboutImage={city.aboutImage} />;
}
