import React, { Fragment } from 'react';
import AuctionProcess from '../../components/PageSections/Investor/AuctionUnits/AuctionProcess';
import AuctionObjetives from '../../components/PageSections/Investor/AuctionUnits/AuctionObjetives';
const AuctionUnits = () => {
  return (
    <Fragment>
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
