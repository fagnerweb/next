import P from 'prop-types';
import { Base } from '../Base';

import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridImage } from '../../components/GridImage';
import { GridText } from '../../components/GridText';
import Head from 'next/head';
import config from '../../config';

export const Home = ({ data }) => {
  const { menu, sections, footerHtml, title } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      <Head>
        <title>
          {title} | {config.sitename}
        </title>
      </Head>
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${index}-${Math.random().toFixed()}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumn key={key} {...section} />;
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...section} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
};

Home.propTypes = {
  data: P.object,
};
