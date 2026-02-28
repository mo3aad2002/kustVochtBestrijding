import CityTemplate from '../CityTemplate';
import { cities } from '../../data/cities';

export default function Oudenburg() {
  const city = cities.find(c => c.slug === 'oudenburg')!;
  return <CityTemplate cityName={city.name} mapEmbedUrl={city.mapEmbedUrl} heroImage={city.heroImage} aboutImage={city.aboutImage} />;
}
