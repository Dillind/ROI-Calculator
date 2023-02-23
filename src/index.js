import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import { Form, useFormAnswers } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
registerCoreBlocks();
import '../src/index.css'

// Only use hooks at the top level of your React function, otherwise you will run into errors.

function App() {

  const [showPricing, setShowPricing] = useState(false)
  const [showData, setShowData] = useState(false)

  function displayPricing() {
    return (
      <div>
        {
          showPricing ? <h1>PRICING GOES HERE</h1> : null
        }
        <button onClick={() => setShowPricing(!showPricing)}>Show Pricing</button>
      </div>
    )
  }

  // displays the data from the user input 
  function displayData() {
    return (
      <div>
        {
        showData ? 
        <div className='display-data'>
          <p><b>Selected region:</b> {collectData["region"].value}</p>
          <p>Role: {collectData["role"].value[0]}</p>
          <p>What do you want to use Mastt for? {collectData["mastt-reason"].value}</p>
          <p>How many projects do you have? {collectData["projects"].value}</p>
          <p>How much value will be assigned to each project? {collectData["project-value"].value[0]}</p>
          <p>How many staff do you have? {collectData["staff"].value}</p>
        </div>
        : null 
        }
        <button onClick={() => setShowData(!showData)}>Show ROI Data</button>
      </div>
    )
  }

  // collects data from form answers
  const formAnswers = useFormAnswers()

  const [collectData, setCollectData] = useState()

  const [isInProgress, setIsInProgress] = useState(true)

  // const [showForm, setShowForm] = useState(true)

  // stores form data in the collectData state variable.
  function storeData() {
    setCollectData(formAnswers);
    console.log(formAnswers)
  }

  return (
    <div>
      {
        isInProgress ?
          <div style={{ width: "100%", height: "100vh" }}>
          <Form
            formId="1"
            formObj={{
            blocks: [
            // Welcome Screen
            {
              name: "welcome-screen",
              id: "welcome",
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
              id:"region",
              attributes: {
                required: true,
                multiple: false,
                label: "Please select your region.",
                choices: [
                  // by region or by country?
                  { 
                    label: "Americas",
                    value: "Americas",
                  },
                  { 
                    label: "Asia Pacific",
                    value: "Asia Pacific",
                  },
                  { 
                    label: "Europe",
                    value: "Europe",
                  },
                  { 
                    label: "Middle East",
                    value: "Middle East",
                  },
                  { 
                    label: "Africa",
                    value: "Africa",
                  },
                ]
              }
            },
            // // Step 1: Are you a consultant or Asset owner?
            {
              name: "multiple-choice",
              id: "role",
              attributes: {
                required: true,
                multiple: false,
                verticalAlign: true,
                label: "Are you a Consultant or Asset Owner?",
                choices: [
                  {
                    label: "Consultant",
                    value: "Consultant"
                  },
                  {
                    label: "Asset Owner",
                    value: "Asset Owner"
                  },
                ]
              }
            },
            // // Step 2: What do you want to use Mastt for?
            {
              name: "multiple-choice",
              id: "mastt-reason",
              attributes: {
                required: true,
                multiple: false,
                verticalAlign: true,
                label: "What do you want to use Mastt for?",
                choices: [
                  {
                    label: "Project",
                    value: "Project"
                  },
                  {
                    label: "Program",
                    value: "Program"
                  },
                  {
                    label: "Portfolio/Enterprise",
                    value: "Portfolio/Enterprise"
                  },
                ]
              }
            },
            // Step 3 - How many projects do you have?
            {
              name: "short-text",
              id: "projects",
              attributes: {
                required: true,
                label: "What is the total number of projects you have?",
                setMaxCharacters: false,
                maxCharacters: 0,
              }
            },
            // Step 4 - Approximately, how much value will be attributed to each project?
            {
              name: "multiple-choice",
              id: "project-value",
              attributes: {
                required: true,
                multiple: false,
                verticalAlign: true,
                label: "How much value will be attributed to each project?",
                // Is this enough choices? Does the price range work for the ROI calculations?
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

            // // Step 5. How many staff do you currently have employed?
            // // No. of Project Controllers

            {
              name: "short-text",
              id: "staff",
              attributes: {
                required: true,
                label: "How many staff members do you employ?",
                setMaxCharacters: false,
                maxCharacters: 0,
              }
            },
          ],
        }}
        
        onSubmit={(data, { completeForm, setIsSubmitting, goToBlock, setSubmissionErr},) => {
          storeData()
          setTimeout(() => {
            setIsSubmitting(true);
            completeForm();
            setIsInProgress(false)
          }, 500);
        }}
        
      />
      </div>
      : console.log("Error")
    }
      <div className='display-container'>
        {isInProgress ? "" : displayData()}
        {isInProgress ? "" : displayPricing()}
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

