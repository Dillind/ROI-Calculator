import React, { useState } from 'react'
import { ReactDOM } from 'react-dom'

export default function Pricing() {

  const [showPricing, setShowPricing] = useState(false)


    return (
        <>
         {
          showPricing ? <h1>PRICING GOES HERE</h1> : null
        }
        <button onClick={() => setShowPricing(!showPricing)}>Show Pricing</button>
        </>
    )
}


// function displayPricing() {
//     return (
//       <div>
//         {
//           showPricing ? <h1>PRICING GOES HERE</h1> : null
//         }
//         <button onClick={() => setShowPricing(!showPricing)}>Show Pricing</button>
//       </div>
//     )
//   }