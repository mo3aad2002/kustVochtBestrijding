import CityTemplate from '../CityTemplate';
import { cities } from '../../data/cities';

export default function Zedelgem() {
  const city = cities.find(c => c.slug === 'zedelgem')!;
  return <CityTemplate cityName={city.name} mapEmbedUrl={city.mapEmbedUrl} heroImage={city.heroImage} aboutImage={city.aboutImage} />;
}
