import React from 'react';
import calculate from '../logic/calculate';

const RenderCalculator = ({ data, setData }) => {
  const calcData = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];

  const updateData = (item) => {
    const updateObj = calculate(data, item);
    setData(updateObj);
  };

  return (
    calcData.map((item) => (
      <div key={item} className={`calcItem ${item === '0' ? 'itemZero' : ''} ${item === '÷' || item === 'x' || item === '-' || item === '+' || item === '=' ? 'itemOperation' : ''}`}>
        <button type="button" onClick={() => updateData(item)}>
          {item}
        </button>
      </div>
    ))
  );
};

export default RenderCalculator;
