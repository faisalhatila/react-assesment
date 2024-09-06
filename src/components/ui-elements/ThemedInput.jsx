import React, { useEffect, useState } from 'react';
import ThemedText from './ThemedText';

const ThemedInput = (props) => {
  //   const [value, setValue] = useState('');
  //   useEffect(() => {
  //     setValue(props.initValue);
  //   }, []);

  return (
    <div>
      <ThemedText className="font-urbanist text-[12px] mb-2">
        {props.placeholder}
      </ThemedText>
      <div className="flex flex-col flex-1 px-2 py-1 bg-darkprimary  border-2 border-border rounded">
        <input
          className="bg-transparent border-border outline-none"
          {...props}
        />
      </div>
    </div>
  );
};

export default ThemedInput;
