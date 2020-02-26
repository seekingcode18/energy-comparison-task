import React, {useState, useEffect} from 'react';
import Result from '../Result/Result';

export default function Results() {
  const [data, setData] = useState({data: [
    {
      "id": "tariffSelectionE724083",
      "supplyDetailsId": "1789",
      "canApply": false,
      "name": "Colleague",
      "logoUri": "https://rest.staging.energyhelpline.com/Uploads/SupplierLogos/coop_TRANS_sep13.png?t=QtT9F_RfNGiloVcwLpCkGELowyI",
      "expectedAnnualSavings": 144,
      "expectedAnnualSpend": "437.50",
      "expectedMonthlySpend": "36.46",
      "messages": [
          "No early exit fees",
          "Variable rate plan"
      ],
      "tags": [],
      "tariffType": "variable",
      "paymentMethod": "Monthly Direct Debit",
      "supplierName": "Co-operative Energy",
      "supplierId": "102",
      "isBigSix": false,
      "hasPaperBilling": false,
      "hasExitFees": false
  },
  {
      "id": "tariffSelectionE716598",
      "supplyDetailsId": "1795",
      "canApply": true,
      "name": "Covalent Capped With Fee",
      "logoUri": "https://rest.staging.energyhelpline.com/Uploads/SupplierLogos/Woodland_TRANS.gif?t=QtT9F_RfNGiloVcwLpCkGELowyI",
      "expectedAnnualSavings": 112,
      "expectedAnnualSpend": "469.67",
      "expectedMonthlySpend": "39.14",
      "messages": [
          "Early exit fee: £30.00"
      ],
      "tags": [],
      "tariffType": "unknown",
      "paymentMethod": "Monthly Direct Debit",
      "supplierName": "Covalent Energy",
      "supplierId": "136",
      "isBigSix": false,
      "hasPaperBilling": true,
      "hasExitFees": true
  },
  {
      "id": "tariffSelectionE716668",
      "supplyDetailsId": "1796",
      "canApply": true,
      "name": "Covalent Fixed Six Months",
      "logoUri": "https://rest.staging.energyhelpline.com/Uploads/SupplierLogos/Woodland_TRANS.gif?t=QtT9F_RfNGiloVcwLpCkGELowyI",
      "expectedAnnualSavings": 112,
      "expectedAnnualSpend": "469.67",
      "expectedMonthlySpend": "39.14",
      "messages": [
          "No early exit fees",
          "Fixed until 26 February 2017"
      ],
      "tags": [],
      "tariffType": "fixed",
      "paymentMethod": "Monthly Direct Debit",
      "supplierName": "Covalent Energy",
      "supplierId": "136",
      "isBigSix": false,
      "hasPaperBilling": true,
      "hasExitFees": false
  }
  ]})
  const getData = () => {
    const apiKey = 'a8823b4b-1abe-41de-a5b3-ab6700c08d98'
    const url = `https://demo.staging.energyhelpline-aws.com/api/results/${apiKey}`
    fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setData({elecResults: json.elecResults})
      })
  }
  
  useEffect(() => {
    getData()
  }, []);
  
  return (
    <div>
      <h2>
        Results
      </h2>
      <Result/>
    </div>
  )
}
