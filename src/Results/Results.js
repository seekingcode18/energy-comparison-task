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
        console.log(json.elecResults);
        setData({ elecResults: json.elecResults });
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Results</h2>
      {data.elecResults.map((result, index) => (
        <Result
        key={index}
        supplierName={result.supplierName}
        expectedAnnualSavings={result.expectedAnnualSavings}
        expectedAnnualSpend={result.expectedAnnualSpend}
        />
      ))}
    </div>
  );
}
