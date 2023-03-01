import React,{ useState } from 'react'
import ReactDOM from 'react-dom'
// import { useState } from 'react'

import CalculatorForm from './components/CalculatorForm.js'
// Only use hooks at the top level of your React function, otherwise you will run into errors.

function App() {

  const [isInProgress, setIsInProgress] = useState(true)

  return (
    <div>
      <div className='display-container'>
        <CalculatorForm/>
        {/* { isInProgress ? null : <RenderPricing/>} */}
      </div>
    </div>
  );
}
 
ReactDOM.render(
React.createElement(App, {}, null),
document.getElementById('react-target')
);

  // const [investment, setInvestment] = useState()
  // const [gross, setGross] = useState()

  // // let removeComma = "100,000"
  // // removeComma = removeComma.replace(',','')
  // // console.log(removeComma)

  // // Annualized ROI
  // function onSubmit(e) {
  //   e.preventDefault()
  //   let investmentGain = `$${gross - investment}`
  //   console.log(investmentGain)
  //   let calculateROI = `${((gross - investment) / investment * 100).toFixed(2)}%`
  //   console.log(calculateROI)
  //   // console.log(removeComma)
  //   // console.log(calculateROI)
  //   // console.log(typeof calculateROI)
  //   console.log('Submitted!')
  // }
  //   // sets investment variable to value typed in the input field.
  // function originalInvestment(e) {
  //   setInvestment(e.target.value)
  // }
  // // sets gross variable to value typed in the input field.
  // function grossReturned(e) {
  //   setGross(e.target.value)
  // }

