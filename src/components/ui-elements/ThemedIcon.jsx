import React from 'react';

const ThemedIcon = ({ Icon, size }) => {
  return <Icon className={`dark:text-white text-darkprimary`} size={size} />;
};

export default ThemedIcon;
