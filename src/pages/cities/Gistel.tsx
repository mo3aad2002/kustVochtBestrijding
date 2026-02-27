import CityTemplate from '../CityTemplate';
import { cities } from '../../data/cities';

export default function Gistel() {
  const city = cities.find(c => c.slug === 'gistel')!;
  return <CityTemplate cityName={city.name} mapEmbedUrl={city.mapEmbedUrl} />;
}
