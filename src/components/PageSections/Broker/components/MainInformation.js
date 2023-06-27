import React from 'react';
import Section from '../../../Section/Section';
import ContactForm from '../../../Form/ContactForm';
import Info from './Info';
import { AssociateData } from '../../../../data';
import { Fade } from 'react-awesome-reveal';

const MainInformation = () => {
  const titleFont = 'text-3xl md:text-5xl';
  const listFont = 'text-lg';
  const spanFont = 'text-xs';

  return (
    <Section>
      <div className="grid grid-cols-1 xl:grid-cols-3">
        <div className="xl:col-start-1 xl:col-end-3 py-5 px-4 sm:pl-20">
          <Fade direction="left" delay={200} cascade>
            {AssociateData?.length > 0 &&
              AssociateData?.map((e) => (
                <Info
                  key={e.id}
                  data={e}
                  titleFont={titleFont}
                  listFont={listFont}
                  spanFont={spanFont}
                />
              ))}
          </Fade>
        </div>
        <Fade direction="right" delay={200} cascade>
          <div className="w-full flex justify-center">
            <div className="max-w-2xl">
              <ContactForm title="Comienza tu experiencia en Unne" />
            </div>
          </div>
        </Fade>
      </div>
    </Section>
  );
};

export default MainInformation;
