import React from 'react'

export default function Result(props) {
  return (
    <div>
      <h3>Supplier: {props.supplierName}</h3>
      <p>Expected Annual Savings: </p>
      <p>Expected Annual Spend: </p>
      <p>Expected Monthly Spend: </p>
    </div>
  )
}
