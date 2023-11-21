import React from 'react';

const TitleComponent = ({ text, type }) => {
  if (type === 'h1') return <h1>{text}</h1>;
  return <p>{text}</p>;
};

export default TitleComponent;
