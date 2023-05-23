import React, { Fragment } from 'react';
import Layout from '../../components/Layout/Layout';
import AuctionProcess from '../../components/PageSections/Investor/AuctionUnits/AuctionProcess';
import AuctionObjetives from '../../components/PageSections/Investor/AuctionUnits/AuctionObjetives';
const AuctionUnits = () => {
  return (
    <Fragment>
      <Layout>
        <section className=' my-24'>
          <AuctionProcess/>
        </section>

        <section className=' mt-20'>
         <AuctionObjetives/>
        </section>
      </Layout>

    </Fragment>

  )
};

export default AuctionUnits;
