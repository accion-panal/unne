import React from 'react';
import { Tab } from '@headlessui/react';

const TabComponent = ({ renderTabs, renderTabPanel }) => {
  return (
    <Tab.Group>
      <Tab.List className="grid grid-cols-3 g-0 w-full xl:w-5/6 mx-auto bg-gray-400 text-white rounded-t-[25px]">
        {renderTabs}
      </Tab.List>
      <div className="bg-gray-100 border-2 border-white h-full rounded-b-[50px] w-full xl:w-5/6 mx-auto">
        <Tab.Panels>{renderTabPanel}</Tab.Panels>
      </div>
    </Tab.Group>
  );
};

export default TabComponent;
