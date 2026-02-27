import CityTemplate from '../CityTemplate';
import { cities } from '../../data/cities';

export default function Zuienkerke() {
  const city = cities.find(c => c.slug === 'zuienkerke')!;
  return <CityTemplate cityName={city.name} mapEmbedUrl={city.mapEmbedUrl} />;
}
