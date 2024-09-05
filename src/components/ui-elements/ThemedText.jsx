import React from 'react';

const ThemedText = ({ children, className }) => {
  return (
    <p className={`dark:text-white text-darkprimary ${className}`}>
      {children}
    </p>
  );
};

export default ThemedText;
