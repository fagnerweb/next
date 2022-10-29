import config from '../config';
import { mapData } from './map-data';

export const loadPages = async (slug = '') => {
  const cleanSlug = slug ? `${slug.replace(/[^a-z0-9-_]/gi, '')}` : '';
  const url = `${config.url}/api/pages/?filters=[slug]=${cleanSlug}`;

  const raw = await fetch(url + '&populate=deep');
  const json = await raw.json();
  const { attributes } = json.data[0];
  const data = mapData([attributes]);

  return data;
};
