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
  const formAnswers = useFormAnswers();
  console.log(formAnswers);



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
                  // depending on region selected, retrieve the internal $ rate for the region
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
              id: "gqr1294c",
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
              name: "long-text",
              id: "masd24q",
              attributes: {
                required: true,
                label: "How many projects do you have?",
                setMaxCharacters: false, // Default: false
                maxCharacters: 10,
              }
            },

            // {
            //   name: "multiple-choice",
            //   id: "tmdn83q",
            //   attributes: {
            //     required: true,
            //     multiple: false,
            //     verticalAlign: true,
            //     label: "How many projects do you have?", // volume
            //     choices: [
            //       {
            //         label: "1 - 5",
            //         value: "1 - 5"
            //       },
            //       {
            //         label: "6 - 10",
            //         value: "6 - 10"
            //       },
            //       {
            //         label: "11 - 15",
            //         value: "11 - 15"
            //       },
            //       {
            //         label: "16 - 19",
            //         value: "16 - 19"
            //       },
            //       {
            //         label: "20 +",
            //         value: "20 +"
            //       }
            //     ]
            //   }
            // },

            // Step 4 - Approximately, how much value will be attributed to each project?
            {
              name: "multiple-choice",
              id: "gq345da",
              attributes: {
                required: true,
                multiple: false,
                verticalAlign: true,
                label: "What type of value will be attributed to each project?", // value
                choices: [
                  {
                    label: "$0 - $10,000",
                    value: "$0 - $10,000"
                  },
                  {
                    label: "$10,001 - $50,000",
                    value: "$10,001 - $50,000"
                  },
                  {
                    label: "$50,001 - $99,999",
                    value: "$50,001 - 99,999"
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
              name: "multiple-choice",
              id: "gk579an",
              attributes: {
                required: true,
                multiple: false,
                verticalAlign: true,
                label: "How many staff do you currently have employed?",
                choices: [
                  {
                    label: "5-10",
                    value: "5-10"
                  },
                  {
                    label: "10-20",
                    value: "10-20"
                  },
                  {
                    label: "30-40",
                    value: "30-40"
                  },
                  {
                    label: "50-60",
                    value: "50-60"
                  },
                ]
              }
            },


            // No. of Project Managers 
            


            // // Step 6. Present ROI Data / Pricing
            // {
              





            // }
          ],
        }}
        onSubmit={(data, { completeForm, setIsSubmitting, goToBlock, setSubmissionErr }) => {
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

