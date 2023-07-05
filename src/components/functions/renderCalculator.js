import React from 'react';

const RenderCalculator = () => {
  const calcData = ['AC', '+/-', '%', '/', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  return (
    calcData.map((item) => (
      <div key={item} className={`calcItem ${item === '0' ? 'itemZero' : ''} ${item === '/' || item === 'x' || item === '-' || item === '+' || item === '=' ? 'itemOperation' : ''}`}>
        <p>{item}</p>
      </div>
    ))
  );
};

export default RenderCalculator;
