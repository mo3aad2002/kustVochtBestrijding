import CityTemplate from '../CityTemplate';
import { cities } from '../../data/cities';

export default function Beernem() {
  const city = cities.find(c => c.slug === 'beernem')!;
  return <CityTemplate cityName={city.name} mapEmbedUrl={city.mapEmbedUrl} heroImage={city.heroImage} aboutImage={city.aboutImage} />;
}
