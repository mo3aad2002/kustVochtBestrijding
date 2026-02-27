import CityTemplate from '../CityTemplate';
import { cities } from '../../data/cities';

export default function Veurne() {
  const city = cities.find(c => c.slug === 'veurne')!;
  return <CityTemplate cityName={city.name} mapEmbedUrl={city.mapEmbedUrl} />;
}
