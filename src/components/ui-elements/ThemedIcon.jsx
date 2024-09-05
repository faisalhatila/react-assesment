import React from 'react';

const ThemedIcon = ({ Icon, size, className }) => {
  return <Icon className={`text-white ${className}`} size={size} />;
};

export default ThemedIcon;
