import React from 'react';

const ThemedText = ({ children, className }) => {
  return <p className={`text-white ${className}`}>{children}</p>;
};

export default ThemedText;
