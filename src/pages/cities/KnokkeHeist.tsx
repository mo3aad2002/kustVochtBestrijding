import CityTemplate from '../CityTemplate';
import { cities } from '../../data/cities';

export default function KnokkeHeist() {
  const city = cities.find(c => c.slug === 'knokke-heist')!;
  return <CityTemplate cityName={city.name} mapEmbedUrl={city.mapEmbedUrl} heroImage={city.heroImage} />;
}
