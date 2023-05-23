import React, { Fragment } from 'react';
import Head from '../../components/Head/Head';
import Layout from '../../components/Layout/Layout';
import MainCarousel from '../../components/Carousel/MainCarousel';
import WhyUnneSection from '../../components/PageSections/Owner/ToLease/whyUnneSection';
import CircleSection from '../../components/PageSections/Owner/ToLease/CircleSection';


/* Data */
import {
  mainCarouselData,
  whyUnneLeaseData,
  CircleArrendarData,
} from '../../data/index';


import { Fade } from 'react-awesome-reveal';

const ToLease = () => {
  const margin = 'my-20';

  return (
    <Fragment>
      {/* HERO SECTION */}
      <Layout>
      <section>
        <MainCarousel data={mainCarouselData}/>
      </section>
      

      <section className={`${margin}`}>
        <Fade delay={300} cascade>
          {whyUnneLeaseData?.length > 0 &&
            whyUnneLeaseData?.map((e) => (
              <WhyUnneSection key={e.id} data={e} />
          ))}
        </Fade>
      </section>



      <section className={`${margin} bg-gray-50 py-8`}>
          <Fade delay={300} cascade>
            <CircleSection
              ubicationData={CircleArrendarData}
              ColorBorder="border-[#2E3641]"
              ColorBg="bg-[#2E3641]"
              ColorNumberBG="bg-[#F7B092]"
              ColorTextBG="bg-[#EF6025]"
              ColorText="text-white"
            />
          </Fade>
      </section>
        

      </Layout>
    </Fragment>

    );
    
};

export default ToLease;
