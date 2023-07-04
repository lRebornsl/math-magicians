import React from 'react';
// eslint-disable-next-line
import RenderCalculator from './functions/RenderCalculator';

const Calculator = () => (
  <div className="grid">
    <form className="form">
      <input className="number" type="number" placeholder="0" />
    </form>
    <RenderCalculator />
  </div>
);

export default Calculator;
