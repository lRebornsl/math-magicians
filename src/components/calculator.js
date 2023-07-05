import React, { useState } from 'react';
// eslint-disable-next-line
import RenderCalculator from './functions/renderCalculator';

const Calculator = () => {
  const [data, setData] = useState({});

  return (
    <div className="grid">
      <form className="form">
        <input className="number" type="number" placeholder="0" value={`${data.next !== null ? data.next : data.total}`} onChange={(e) => setData(e.target.value)} />
      </form>
      <RenderCalculator data={data} setData={setData} />
    </div>
  );
};

export default Calculator;
