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

export const FlexContent = ({flexGrow, textAlign, margin, children}) => (
  <div style={{
    flexGrow: flexGrow,
    textAlign: textAlign || 'left',
    margin: margin || 'inherit'
  }}>
    {children}
  </div>
)
