import React, { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Head from '../../components/Head/Head';
import AuctionProcess from '../../components/PageSections/Investor/AuctionUnits/AuctionProcess';
import AuctionObjetives from '../../components/PageSections/Investor/AuctionUnits/AuctionObjetives';

const AuctionUnits = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/soy-inversionista/unidades-en-remate') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

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
