import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'


import '../src/index.css'

function App() {

  const [investment, setInvestment] = useState()

  const [gross, setGross] = useState()

  let removeComma = "100,000"
  removeComma = removeComma.replace(',','')
  console.log(removeComma)

  // Annualized ROI
  // Remove comma from input field
  // Dollar sign for value entered into input field.
  // Only want it to accept NUMBERS, not other values - RegEx??
  function onSubmit(e) {
    e.preventDefault()
    let investmentGain = `$${gross - investment}`
    console.log(investmentGain)
    let calculateROI = `${((gross - investment) / investment * 100).toFixed(2)}%`
    console.log(calculateROI)
    // let removeComma = calculateROI.replace(',','')
    // console.log(removeComma)
    // console.log(calculateROI)
    // console.log(typeof calculateROI)
    console.log('Submitted!')
  }

    // sets investment variable to value typed in the input field.
  function originalInvestment(e) {
    setInvestment(e.target.value)
  }

  
  // sets gross variable to value typed in the input field.
  function grossReturned(e) {
    setGross(e.target.value)
  }

  return (
    <div className='app-container'>
      <div className='app-title'>
        <h1>ROI CALCULATOR</h1>
      </div>
        <form className='form-container'>
          <div className='invested-input'>
            <span>Amount Invested</span>
              <input
              type="text"
              placeholder=''
              name='investment'
              onChange={originalInvestment}
              className="input"
              />
          </div>
          <div className='returned-input'>
            <span>Amount Returned</span>
              <input
              type="text"
              placeholder=''
              name='return'
              onChange={grossReturned}
              className="input"
              />
          </div>
          <button className="calculate-btn"type="submit" onClick={onSubmit}>Calculate</button>
        </form>
        <div className='result-container'>
          <h1>Result</h1>
            <div className='statistics'>
              <span>Investment Gain:</span>
              <span>ROI:</span>
              <span>Annualized ROI</span>
            </div>
        </div>
    </div>
  );
}

ReactDOM.render(
React.createElement(App, {}, null),
document.getElementById('react-target')
);

// ReactDOM.createRoot(document.getElementById('react-target').render(
// <React.StrictMode>
//   <App/>
// </React.StrictMode>
// ))

