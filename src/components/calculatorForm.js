import React, { useState } from 'react'
import { Form, useFormAnswers } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
registerCoreBlocks();
import RenderPricing from './RenderPricing' 
import '../index.css'
import '../my-custom-block/custom-block.js'
import '../my-custom-block/display.js'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function CalculatorForm() {
// Only use hooks at the top level of your React function, otherwise you will run into errors.
    const [showData, setShowData] = useState(false)
    const formAnswers = useFormAnswers()
    const [collectData, setCollectData] = useState()
    const [isInProgress, setIsInProgress] = useState(true)

    // stores form data in the collectData state variable.
    function storeData() {
        setCollectData(formAnswers);
        console.log(formAnswers)
    }

    // converts value to an integer.
    // still need to figure out how I can create an error message if non-number is entered.
    function checkNumber(num) {
        let newValue = Number(num)
        return newValue;
    }

    // function renderData() {
    //     return (
    //         <div>
    //             { showData ? 
    //                 <div className='form-answers'>
    //                     <p><b>Selected region:</b> {collectData["region"].value}</p>
    //                     <p>Role: {collectData["role"].value[0]}</p>
    //                     <p>What do you want to use Mastt for? {collectData["mastt-reason"].value}</p>
    //                     <p>How many projects do you have? {checkNumber(collectData["projects"].value)}</p>
    //                     <p>How much value will be assigned to each project? {collectData["project-value"].value[0]}</p>
    //                     <p>How many staff do you have? {checkNumber(collectData["staff"].value)}</p>
    //                     <p>What do you rate our service? {collectData["rating"].value}</p>
    //                 </div>
    //             : null }
    //             <button onClick={() => setShowData(!showData)}>Populate Questions</button>
    //         </div>
    //     )
    // }

    function renderForm() {

        return (
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
                                url: "https://quillforms.com/wp-content/uploads/2022/01/4207-ai-1.jpeg"
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
                        // region is fine, but could create another one to specify country in that region.
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
                            multiple: true,
                            verticalAlign: true,
                            label: "What do you want to use Mastt for?",
                            description: "You can select multiple options.",
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
                    // RESTRICT TO NUMBERS ONLY.
                    {
                        name: "short-text",
                        id: "projects",
                        attributes: {
                            required: true,
                            label: "What is the total number of projects you have?",
                            setMaxCharacters: false,
                            maxCharacters: 0
                        }
                    },
                    // Step 4 - Approximately, how much value will be attributed to each project?
                    {
                        name: "multiple-choice",
                        id: "project-value",
                        attributes: {
                            required: true,
                            multiple: false, // set to true
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

                    // Step 5. How many staff do you currently have employed?
                    
                    // Project Manager
                    // Project Director
                    // Program Manager
                    // Portfolio Manager
                    // Snr. Project Manager
                    // Associate Project Manager
                    // Consultant
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
                    // Turn this into a counter that lets you select how many staff you have.
                    // {
                    //     name: "user-review",
                    //     id: "rating",
                    //     attributes: {
                    //       label: "From 0 to 10 rate our first service",
                    //       required: true,
                    //       start: 0,
                    //       end: 10
                    //     }
                    // }
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
        )
    }

    function calculateROI(net, initial) {
        // Formula: [(Financial Value - Project Cost)/Project Cost]*100 = ROI
        const ROI = (net/initial) * 100
        console.log(ROI)
    }

    function calculateOpex() {
        //
    }

    function calculateCapex() {
        //
    }

    // function that returns a number to two decimal places
    function ccyFormat(num) {
        return `${num.toFixed(2)}`;
    }

    // function that returns the total cost
    function priceRow(qty, unit) {
        return qty * unit;
    }

    // function that creates a row with desc, qty, unit and price
    function createRow(desc, qty, unit) {
        const price = priceRow(qty, unit);
        return { desc, qty, unit, price };
    }

    const rows = [
        // createRow('title', opex, capex)
        createRow('Project', 100, 1.15),
        createRow('Program', 10, 45.99),
        createRow('Portfolio/Enterprise', 2, 17.99),
        // createRow() - creates an empty row
        createRow('Grand Total', 5, 12.22)
    ];

    // Render data on the table

    function spanningTable() {
        return (
            <div>
                <div>
                    <button onClick={() => setShowData(!showData)}>Populate ROI Data</button>
                </div>
                { showData ?
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" colSpan={3}>
                                Role: {collectData["role"].value[0]}
                                </TableCell>
                                <TableCell align="right"/>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="right">Opex</TableCell>
                                <TableCell align="right">Capex</TableCell>
                                <TableCell align="right">Savings</TableCell>
                                </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                            <TableRow key={row.desc}>
                                <TableCell>{row.desc}</TableCell>
                                <TableCell align="right">{row.qty}</TableCell>
                                <TableCell align="right">{row.unit}</TableCell>
                                <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                            </TableRow>
                            ))}
                            {/* <TableRow>
                                <TableCell rowSpan={3} />
                                <TableCell colSpan={2}>Subtotal</TableCell>
                                <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Projects</TableCell>
                                <TableCell align="right">{checkNumber(collectData["projects"].value)}</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell colSpan={2}>Total</TableCell>
                                <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                            </TableRow> */}
                        </TableBody>
                    </Table>
                </TableContainer> : null}
            </div>
        );
    }

    return (
        <>
            {isInProgress ? renderForm() : spanningTable()}
            {isInProgress ? null : <RenderPricing/>}
        </>
    );
}


