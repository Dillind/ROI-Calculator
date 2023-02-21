import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'

import { Form, useFormAnswers } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
registerCoreBlocks();


import '../src/index.css'

function App() {
  // const formAnswers = useFormAnswers();
  // console.log('answers', formAnswers)

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


  // collect data from selected answers - push to a new collectData array?

  function collectData() {
    const formAnswers = useFormAnswers();
    console.log(formAnswers)
  }

  console.log(collectData());

  return (
    // <div className='app-container'>
    //   <div className='app-title'>
    //     <h1>ROI CALCULATOR</h1>
    //   </div>
    //     <form className='form-container'>
    //       <div className='invested-input'>
    //         <span>Amount Invested</span>
    //           <input
    //           type="text"
    //           placeholder=''
    //           name='investment'
    //           onChange={originalInvestment}
    //           className="input"
    //           />
    //       </div>
    //       <div className='returned-input'>
    //         <span>Amount Returned</span>
    //           <input
    //           type="text"
    //           placeholder=''
    //           name='return'
    //           onChange={grossReturned}
    //           className="input"
    //           />
    //       </div>
    //       <button className="calculate-btn"type="submit" onClick={onSubmit}>Calculate</button>
    //     </form>
    //     <div className='result-container'>
    //       <h1>Result</h1>
    //         <div className='statistics'>
    //           <span>Investment Gain:</span>
    //           <span>ROI:</span>
    //           <span>Annualized ROI</span>
    //         </div>
    //     </div>

        <div style={{ width: "100%", height: "100vh" }}>
      <Form
        formId="1"
        formObj={{
          blocks: [
            {
              name: "welcome-screen",
              id: "jg1401r",
              attributes: {
                label: "ROI Calculator",
                description: "Calculate your ROI with Mastt.",
                attachment: {
                  type: "image",
                  url:
                    "https://quillforms.com/wp-content/uploads/2022/01/4207-ai-1.jpeg"
                }
              }
            },
            // Step 0: Get the region to know the internal $ rate for the region.
            {
              name: "dropdown",
              id:"q4ti234",
              attributes: {
                required: true,
                multiple: false,
                label: "Please select your region.",
                choices: [
                  // if (value === region) push internal $ rate for that region into an array?
                  { 
                    label: "Americas",
                    value: "americas",
                  },
                  { 
                    label: "Asia Pacific",
                    value: "asia pacific",
                  },
                  { 
                    label: "Europe",
                    value: "europe",
                  },
                  { 
                    label: "Middle East/Africa",
                    value: "middle east/africa",
                  },
                ]
              }
            },
            // Step 1: Are you a consultant or Asset owner?
            {
              name: "multiple-choice",
              id: "kd12edg",
              attributes: {
                required: true,
                multiple: false,
                verticalAlign: true,
                label: "Are you a Consultant or Asset Owner?",
                choices: [
                  {
                    label: "Consultant",
                    value: 'consultant'
                  },
                  {
                    label: "Asset Owner",
                    value: 'asset owner'
                  },
                ]
              }
            },
            // Step 2: What do you want to use Mastt for?
            {
              name: "multiple-choice",
              id: "t5fcv35",
              attributes: {
                required: true,
                multiple: false,
                verticalAlign: true,
                label: "What do you want to use Mastt for?",
                choices: [
                  {
                    label: "Project",
                    value: "project"
                  },
                  {
                    label: "Program",
                    value: "program"
                  },
                  {
                    label: "Portfolio/Enterprise",
                    value: "portfolio/enterprise"
                  },
                ]
              }
            },
            // Step 3 - How many projects do you have? - input field.

            {
              name: "short-text",
              id: "masd24q",
              attributes: {
                required: true,
                label: "What is the total number of projects you have?",
                setMaxCharacters: true,
                maxCharacters: 3,
              }
            },

            // Step 4 - Approximately, how much value will be attributed to each project?
            {
              name: "multiple-choice",
              id: "gq345da",
              attributes: {
                required: true,
                multiple: false,
                verticalAlign: true,
                label: "What type of value will be attributed to each project?",
                choices: [
                  {
                    label: "$0 - $9,999",
                    value: "$0 - $9,999"
                  },
                  {
                    label: "$10,000 - $49,999",
                    value: "$10,000 - $49,999"
                  },
                  {
                    label: "$50,000 - $99,999",
                    value: "$50,000 - 99,999"
                  },
                  {
                    label: "$100,000 +",
                    value: "$100,000 +"
                  },
                ]
              }
            },

            // Step 5. How many staff do you currently have employed?
            // No. of Project Controllers

            {
              name: "short-text",
              id: "p56t35q",
              attributes: {
                required: true,
                label: "How many staff members do you employ?",
                setMaxCharacters: true,
                maxCharacters: 5,
              }
            },

            // No. of Project Managers 
            
            // // Step 6. Present ROI Data / Pricing
            // {
              
            // }
          ],
        }}
        onSubmit={(data, { completeForm, setIsSubmitting, goToBlock, setSubmissionErr},) => {
          console.log("Submitted!")
          setTimeout(() => {
            setIsSubmitting(false);
            completeForm();
          }, 500);
        }}
      />
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

