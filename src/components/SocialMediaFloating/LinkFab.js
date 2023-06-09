import React from 'react';

const LinkFab = ({ href, IconComponent, iconColor, bgColor }) => {
  const hoverEffect = `hover:scale-105`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`overflow-hidden rounded-full w-[60px] h-[60px] flex items-center justify-center drop-shadow-lg shadow-black ${bgColor} transition-all ${hoverEffect}`}
    >
      <IconComponent size="1.7rem" color={iconColor} />
    </a>
  );
};

export default LinkFab;
