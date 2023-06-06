import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Head from '../../components/Head/Head';
import MainCarousel from '../../components/Carousel/MainCarousel';
import WhyUnneSection from '../../components/PageSections/Owner/ToLease/whyUnneSection';
import CircleSection from '../../components/PageSections/Owner/ToLease/CircleSection';
import { Fade } from 'react-awesome-reveal';

/* Data */
import {
  CircleVenderData,
  mainCarouselSellData,
  whyUnneSellData,
} from '../../data/index';

const ToSell = () => {
  const margin = 'my-20';

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/soy-propietario/quiero-vender') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <Fragment>
      <Head title="Quiero vender" />
      <section>
        <MainCarousel data={mainCarouselSellData} />
      </section>
      <section className={`${margin}`}>
        <Fade delay={300} cascade>
          {whyUnneSellData?.length > 0 &&
            whyUnneSellData?.map((e) => <WhyUnneSection key={e.id} data={e} />)}
        </Fade>
      </section>
      <section className={`${margin} bg-gray-50 py-8`}>
        <Fade delay={300} cascade>
          <CircleSection
            ubicationData={CircleVenderData}
            ColorBorder="border-[#FBB916]"
            ColorBg="bg-[#FBB916]"
            ColorNumberBG="bg-[#fb923c]"
            ColorTextBG="bg-[#e5e7eb]"
            ColorText="text-black"
          />
        </Fade>
      </section>
    </Fragment>
  );
};

export default ToSell;
