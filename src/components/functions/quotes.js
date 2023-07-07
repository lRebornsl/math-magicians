import { useState, useEffect } from 'react';
import axios from 'axios';

const Quote = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const url = 'https://api.api-ninjas.com/v1/quotes?category=courage';

  useEffect(() => {
    const getData = async () => {
      const quote = await axios.get(url, {
        headers: { 'X-Api-Key': '0/oKKV8YUUh7h5bLfAzX0g==AiN9WmbJgj4beaWU' },
      })
        .catch((error) => {
          setError(true);
          if (error.response) {
            const errorArray = { data: [{ quote: 'We learn from mistakes', author: 'lRebornsl', category: '' }] };
            return errorArray;
          }
          return null;
        });

      setData(quote.data[0]);
    };

    if (!loaded) {
      setLoaded(true);
      getData();
    }
  }, [loaded]);

  if (error) {
    return (
      <div className="quote">
        <h3>We learn from mistakes -lRebornsl</h3>
      </div>
    );
  }

  return (
    <div className="quote">
      <h3>
        {data.quote}
        {' -'}
        {data.author}
      </h3>
    </div>
  );
};

export default Quote;
