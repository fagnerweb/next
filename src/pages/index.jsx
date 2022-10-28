import P from 'prop-types';
import React from 'react';
import config from '../config';
import { mapData } from '../api/map-data';
import { Home } from '../templates/Home';

export default function Index({ data = null }) {
  return <Home data={data[0]} />;
}

export const getStaticProps = async () => {
  const raw = await fetch(config.url + config.defaultSlug + '&populate=deep');
  const json = await raw.json();
  const { attributes } = json.data[0];
  const data = mapData([attributes]);

  return {
    props: {
      data,
    },
  };
};

Index.propTypes = {
  data: P.array,
};
