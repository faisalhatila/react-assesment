import React from 'react';

const ThemedText = ({ children, className }) => {
  return <p className={`text-whit ${className}`}>{children}</p>;
};

export default ThemedText;
