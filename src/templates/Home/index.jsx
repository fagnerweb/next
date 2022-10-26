import { mockBase } from '../Base/mock';
import { Base } from '../Base';
import { useEffect } from 'react';

export const Home = () => {
  useEffect(() => {
    const load = async () => {
      const data = await fetch(
        'http://localhost:1337/api/landing-page?populate=deep',
      );
      const json = await data.json();
      console.log(json);
    };

    load();
  }, []);
  return <Base {...mockBase} />;
};
