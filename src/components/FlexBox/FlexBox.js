import React from 'react';

export const Flex = ({direction, justify, children}) =>(
  <div
    style={{
      display: 'flex',
      flexDirection:direction || 'row',
      justifyContent: 'space-evenly'
    }}
    >
    {children}
  </div>
);

export const FlexContent = ({flexGrow, children}) => (
  <div style={{
    flexGrow: flexGrow
  }}>
    {children}
  </div>
)
