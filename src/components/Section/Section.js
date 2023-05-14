import React from 'react';

const Section = ({ children, className }) => {
  const defaultSectionClass = 'relative px-4 my-14 md:my-16 xl:my-28 xl:px-32';

  return (
    <section className={`${defaultSectionClass} ${className}`}>
      {children}
    </section>
  );
};

export default Section;
