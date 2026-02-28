export interface City {
  name: string;
  slug: string;
  mapEmbedUrl: string;
  heroImage?: string;
}

import heroImageKust from '../assets/hero_image_kust_vocht.png';
import vochtImage1 from '../assets/04611d2b-e43e-42dd-b4bf-97a949fb357c.png';
import vochtImage2 from '../assets/1560d7a0-acb8-408b-8393-617b083e506d.png';
import vochtImage3 from '../assets/3646fab1-235e-450b-8198-51dccfc52325.png';
import vochtImage4 from '../assets/5a2c50ba-8ce8-4695-94d6-9cd818759236.png';
import vochtImage5 from '../assets/db14c3e3-88f8-49c4-b686-5832c0a98312.png';
import vochtImage6 from '../assets/a46db951-dba9-450d-acf7-d53ceb163c37.png';
import newHeroImage from '../assets/ChatGPT_Image_Feb_28,_2026,_12_36_24_PM.png';

export const cities: City[] = [
  {
    name: 'Bredene',
    slug: 'bredene',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20164.948203247!2d2.949!3d51.235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcde9f8d8c8d8d%3A0x8d8d8d8d8d8d8d8d!2sBredene!5e0!3m2!1snl!2sbe!4v1234567890',
    heroImage: vochtImage1,
  },
  {
    name: 'Middelkerke',
    slug: 'middelkerke',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20164.948203247!2d2.811!3d51.185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcde9f8d8c8d8d%3A0x8d8d8d8d8d8d8d8d!2sMiddelkerke!5e0!3m2!1snl!2sbe!4v1234567890',
    heroImage: vochtImage2,
  },
  {
    name: 'Gistel',
    slug: 'gistel',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20164.948203247!2d2.960!3d51.158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcde9f8d8c8d8d%3A0x8d8d8d8d8d8d8d8d!2sGistel!5e0!3m2!1snl!2sbe!4v1234567890',
    heroImage: vochtImage3,
  },
  {
    name: 'Oudenburg',
    slug: 'oudenburg',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20164.948203247!2d3.001!3d51.182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcde9f8d8c8d8d%3A0x8d8d8d8d8d8d8d8d!2sOudenburg!5e0!3m2!1snl!2sbe!4v1234567890',
    heroImage: newHeroImage,
  },
  {
    name: 'De Haan',
    slug: 'de-haan',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20164.948203247!2d3.034!3d51.274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcde9f8d8c8d8d%3A0x8d8d8d8d8d8d8d8d!2sDe%20Haan!5e0!3m2!1snl!2sbe!4v1234567890',
    heroImage: vochtImage5,
  },
  {
    name: 'Jabbeke',
    slug: 'jabbeke',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20164.948203247!2d3.085!3d51.180!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcde9f8d8c8d8d%3A0x8d8d8d8d8d8d8d8d!2sJabbeke!5e0!3m2!1snl!2sbe!4v1234567890',
    heroImage: vochtImage6,
  },
  {
    name: 'Ichtegem',
    slug: 'ichtegem',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20164.948203247!2d3.015!3d51.096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcde9f8d8c8d8d%3A0x8d8d8d8d8d8d8d8d!2sIchtegem!5e0!3m2!1snl!2sbe!4v1234567890',
    heroImage: heroImageKust,
  },
  {
    name: 'Zuienkerke',
    slug: 'zuienkerke',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20164.948203247!2d3.165!3d51.273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcde9f8d8c8d8d%3A0x8d8d8d8d8d8d8d8d!2sZuienkerke!5e0!3m2!1snl!2sbe!4v1234567890',
    heroImage: heroImageKust,
  },
  {
    name: 'Zedelgem',
    slug: 'zedelgem',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20164.948203247!2d3.135!3d51.143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcde9f8d8c8d8d%3A0x8d8d8d8d8d8d8d8d!2sZedelgem!5e0!3m2!1snl!2sbe!4v1234567890',
    heroImage: vochtImage1,
  },
  {
    name: 'Blankenberge',
    slug: 'blankenberge',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20164.948203247!2d3.132!3d51.313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcde9f8d8c8d8d%3A0x8d8d8d8d8d8d8d8d!2sBlankenberge!5e0!3m2!1snl!2sbe!4v1234567890',
    heroImage: vochtImage2,
  },
  {
    name: 'Brugge',
    slug: 'brugge',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20164.948203247!2d3.224!3d51.209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcde9f8d8c8d8d%3A0x8d8d8d8d8d8d8d8d!2sBrugge!5e0!3m2!1snl!2sbe!4v1234567890',
    heroImage: vochtImage3,
  },
  {
    name: 'Diksmuide',
    slug: 'diksmuide',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20164.948203247!2d2.864!3d51.033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcde9f8d8c8d8d%3A0x8d8d8d8d8d8d8d8d!2sDiksmuide!5e0!3m2!1snl!2sbe!4v1234567890',
    heroImage: newHeroImage,
  },
  {
    name: 'Torhout',
    slug: 'torhout',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20164.948203247!2d3.100!3d51.067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcde9f8d8c8d8d%3A0x8d8d8d8d8d8d8d8d!2sTorhout!5e0!3m2!1snl!2sbe!4v1234567890',
    heroImage: vochtImage5,
  },
  {
    name: 'Alveringem',
    slug: 'alveringem',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20164.948203247!2d2.710!3d51.005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcde9f8d8c8d8d%3A0x8d8d8d8d8d8d8d8d!2sAlveringem!5e0!3m2!1snl!2sbe!4v1234567890',
    heroImage: vochtImage6,
  },
  {
    name: 'Knokke-Heist',
    slug: 'knokke-heist',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20164.948203247!2d3.282!3d51.350!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcde9f8d8c8d8d%3A0x8d8d8d8d8d8d8d8d!2sKnokke-Heist!5e0!3m2!1snl!2sbe!4v1234567890',
    heroImage: heroImageKust,
  },
  {
    name: 'Nieuwpoort',
    slug: 'nieuwpoort',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20164.948203247!2d2.745!3d51.129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcde9f8d8c8d8d%3A0x8d8d8d8d8d8d8d8d!2sNieuwpoort!5e0!3m2!1snl!2sbe!4v1234567890',
    heroImage: vochtImage6,
  },
  {
    name: 'Koksijde',
    slug: 'koksijde',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20164.948203247!2d2.634!3d51.116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcde9f8d8c8d8d%3A0x8d8d8d8d8d8d8d8d!2sKoksijde!5e0!3m2!1snl!2sbe!4v1234567890',
    heroImage: vochtImage1,
  },
  {
    name: 'Veurne',
    slug: 'veurne',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20164.948203247!2d2.663!3d51.074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcde9f8d8c8d8d%3A0x8d8d8d8d8d8d8d8d!2sVeurne!5e0!3m2!1snl!2sbe!4v1234567890',
    heroImage: vochtImage2,
  },
  {
    name: 'Oostkamp',
    slug: 'oostkamp',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20164.948203247!2d3.231!3d51.157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcde9f8d8c8d8d%3A0x8d8d8d8d8d8d8d8d!2sOostkamp!5e0!3m2!1snl!2sbe!4v1234567890',
    heroImage: vochtImage3,
  },
  {
    name: 'Beernem',
    slug: 'beernem',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20164.948203247!2d3.332!3d51.146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcde9f8d8c8d8d%3A0x8d8d8d8d8d8d8d8d!2sBeernem!5e0!3m2!1snl!2sbe!4v1234567890',
    heroImage: newHeroImage,
  },
  {
    name: 'Oostende',
    slug: 'oostende',
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20164.948203247!2d2.918!3d51.229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcde9f8d8c8d8d%3A0x8d8d8d8d8d8d8d8d!2sOostende!5e0!3m2!1snl!2sbe!4v1234567890',
    heroImage: vochtImage5,
  },
];
