import React from 'react';
import RenderCalculator from './functions/RenderCalculator.js';

const Calculator = () => (
  <div className="grid">
    <form className="form">
      <input className="number" type="number" placeholder="0" />
    </form>
    <RenderCalculator />
  </div>
);

export default Calculator;
