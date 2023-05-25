import React, { Fragment } from 'react';
import { companyQualities } from '../../../../data/index';

/** Components */
import HeadingSection from '../../../HeadingSection/HeadingSection';
import BasicCard from '../../../Card/BasicCard';

const InvestmentInfo = () => {
    return (
        <Fragment>
            <HeadingSection
                title="Deja tu propiedad de inversión en mano de los expertos"
                subtitle="En alianza con Aulén"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {companyQualities.map((item) => (
                    <BasicCard key={item.id} data={item} backgroundColor="bg-orange-50" />
                ))}
            </div>
        </Fragment>
    );
};

export default InvestmentInfo;
