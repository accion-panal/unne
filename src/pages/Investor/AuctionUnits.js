import React, { Fragment } from 'react';
import Head from '../../components/Head/Head';
import AuctionProcess from '../../components/PageSections/Investor/AuctionUnits/AuctionProcess';
import AuctionObjetives from '../../components/PageSections/Investor/AuctionUnits/AuctionObjetives';
const AuctionUnits = () => {
  return (
    <Fragment>
      <Head title="Unidades de remate" />

      <section className=" my-24">
        <AuctionProcess />
      </section>

      <section className=" mt-20">
        <AuctionObjetives />
      </section>
    </Fragment>
  );
};

export default AuctionUnits;
