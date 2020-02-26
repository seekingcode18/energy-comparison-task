import React, { useState, useEffect } from 'react';
import Result from '../Result/Result';

export default function Results() {
  const [data, setData] = useState({ elecResults: [] });

  const getData = () => {
    const apiKey = 'a8823b4b-1abe-41de-a5b3-ab6700c08d98';
    const url = `https://demo.staging.energyhelpline-aws.com/api/results/${apiKey}`;
    fetch(url)
      .then(res => res.json())
      .then(json => {
        // set fetched data to state
        setData({ elecResults: json.elecResults });
      });
  };

  useEffect(() => {
    // set fetch only once when the component has mounted
    getData();
  }, []);

  return (
    <div>
      {data.elecResults.sort((a,b) => a.expectedAnnualSpend > b.expectedAnnualSpend) // sort results - lowest first
        .map((result, index) => (
          // render each result with relevant data
          <Result
            key={index}
            supplierName={result.supplierName}
            expectedAnnualSpend={result.expectedAnnualSpend}
          />
        ))}
    </div>
  );
}
