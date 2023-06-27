import React, { Fragment, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ClientsContext } from '../../context/clients/ClientsContext';
import { plansCardData } from '../../data/index';

/** Components */
import Head from '../../components/Head/Head';
import Layout from '../../components/Layout/Layout';
import InvestmentInfo from '../../components/PageSections/Investor/AdminLease/InvestmentInfo';
import PropertyManagmentSteps from '../../components/PageSections/Investor/AdminLease/PropertyManagmentSteps';
import PlanCard from '../../components/Card/PlanCard';
import ContactForm from '../../components/Form/ContactForm';
import ReactSlickComponent from '../../components/Carousel/ReactSlickComponent';
import ClientCard from '../../components/Card/ClientCard';

const LeaseAdmin = () => {
  const { contextData } = useContext(ClientsContext);
  const [clients, setClients, getClientList] = contextData;

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/soy-inversionista/administracion-de-arriendo') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <Fragment>
      <Head title="Admin. de arriendo" />

      <section className="relative mt-10 xl:mt-16 px-4 xl:px-56">
        <InvestmentInfo />
      </section>

      <section className="relative my-10 xl:mt-16 px-4 py-16 xl:px-56">
        <PropertyManagmentSteps />
      </section>

      <section className="relative my-10 w-full xl:mt-40 px-4 lg:px-4 xl:px-24 2xl:px-32  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-0 xl:gap-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 col-span-12 xl:col-span-2">
          {plansCardData?.length > 0 &&
            plansCardData?.map((plan) => (
              <PlanCard key={plan.id} data={plan} />
            ))}
        </div>

        <ContactForm
          title="¡Despreocúpate por tu propiedad de inversión!"
          subtitle="COMPLETA EL FORMULARIO Y ENTÉRATE CÓMO"
        />
      </section>

      <section className="relative my-24 xl:mt-40 px-4 xl:px-56">
        <ReactSlickComponent
          RenderComponent={ClientCard}
          data={clients}
          slidesToShow={3}
          xl={1}
        />
      </section>
    </Fragment>
  );
};

export default LeaseAdmin;
