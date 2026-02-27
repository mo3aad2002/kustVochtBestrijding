import CityTemplate from '../CityTemplate';
import { cities } from '../../data/cities';

export default function Torhout() {
  const city = cities.find(c => c.slug === 'torhout')!;
  return <CityTemplate cityName={city.name} mapEmbedUrl={city.mapEmbedUrl} />;
}
