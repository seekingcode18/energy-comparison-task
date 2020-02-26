import React from 'react'

export default function Result(props) {
  return (
    <div>
      <h3>Supplier: {props.supplierName}</h3>
      <p>Expected Annual Spend: £{props.expectedAnnualSpend}</p>
    </div>
  )
}
