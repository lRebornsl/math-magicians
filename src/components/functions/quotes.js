import { useState, useEffect } from 'react';
import axios from 'axios';

const Quote = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const url = 'https://api.api-ninjas.com/v1/quotes?category=courage';

  useEffect(() => {
    const getData = async () => {
      setLoaded(true);
      await axios.get(url, {
        headers: { 'X-Api-Key': '0/oKKV8YUUh7h5bLfAzX0g==AiN9WmbJgj4beaWU' },
      })
        .then((response) => {
          const [qData] = response.data;
          setData(qData);
        })
        .catch(() => {
          setError(true);
        });

      setLoaded(false);
    };

    getData();
  }, [setLoaded, setData]);

  return (
    <div className="container quote flex">
      {loaded && (
        <h3>Loading...</h3>
      )}
      {error && (
        <h3>We learn from mistakes -lRebornsl</h3>
      )}
      {!loaded && !error && (
        <h3>
          {data.quote}
          {' -'}
          {data.author}
        </h3>
      )}
    </div>
  );
};

export default Quote;
