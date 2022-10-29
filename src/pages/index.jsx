import P from 'prop-types';
import React from 'react';
import { Home } from '../templates/Home';
import { loadPages } from '../api/load-pages';

export default function Index({ data = null }) {
  return <Home data={data[0]} />;
}

export const getStaticProps = async () => {
  let data = null;

  try {
    data = await loadPages('landing-page');
  } catch (e) {
    //
  }

  if (!data || !data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
};

Index.propTypes = {
  data: P.array,
};
