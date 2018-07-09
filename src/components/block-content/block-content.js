import React from 'react';

const BlockContent = ({title, subTitle, paragraph}) => (
  <div>
    <h4><small>{subTitle}</small>{title}</h4>
    <p>{paragraph}</p>
  </div>
);

export default BlockContent;
