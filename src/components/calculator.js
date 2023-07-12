import React, { useState } from 'react';
import RenderCalculator from './functions/renderCalculator';

const Calculator = () => {
  const [data, setData] = useState({});

  return (
    <div className="calculatorPage container flex">
      <div className="calcTitle">
        <h2>Let&lsquo;s do some math!</h2>
      </div>
      <div className="calculator grid">
        <form className="flex form">
          <input className="number" type="number" placeholder="0" value={`${data.next !== null ? data.next : data.total}`} onChange={(e) => setData(e.target.value)} />
        </form>
        <RenderCalculator data={data} setData={setData} />
      </div>
    </div>
  );
};

export default Calculator;
