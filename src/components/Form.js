import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// import RenderTable from '../components/TableForm.js'
import "../index.css"

const projectTiersInitialState = [
    // what if the scope increased? how would you account for that? as it is currently just looping over and checking each, when it could go straight to a key (i.e. range) and improve time + space complexity.
    {id: "1", range: '1-10M', count: 0},
    {id: "2", range: '10-20M', count: 0},
    {id: "3", range: '20-30M', count: 0},
    {id: "4", range: '30-40M', count: 0},
    {id: "5", range: '40-50M', count: 0},
    {id: "6", range: '50-60M', count: 0},
    {id: "7", range: '60-70M', count: 0},
    {id: "8", range: '70-80M', count: 0},
    {id: "9", range: '80-90M', count: 0},
    {id: "10", range: '90-100M', count: 0},
    {id: "11", range: '100M+', count: 0} 
]

const staffRolesInitialState = [
    {id: "1", role: 'Project Manager', count: 0},
    {id: "2", role: 'Project Director', count: 0},
    {id: "3", role: 'Program Manager', count: 0},
    {id: "4", role: 'Portfolio Manager', count: 0},
    {id: "5", role: 'Snr. Project Manager', count: 0},
    {id: "6", role: 'Associate Project Manager', count: 0},
    {id: "7", role: 'Consultant', count: 0},
]

export default function Form() {
    // state that stores data from each question
    const [region, setRegion] = useState("")
    const [role, setRole] = useState("")
    const [purpose, setPurpose] = useState([])
    const [projects, setProjects] = useState(projectTiersInitialState)
    const [staff, setStaff] = useState(staffRolesInitialState)
    const [isInProgress, setIsInProgress] = useState(true) 
    const [validation, setValidation] = useState(false)

    const projectHoursSavedPerMonth = 20
    const programHoursSavedPerMonth = 15
    const portfolioHoursSavedPerMonth = 10

    function projectsCounter(value, projectCount) {
        return (
            <div>
                <ButtonGroup>
                    <Button variant="contained" onClick={() => countDecrease(value, projectCount)} onChange={handleInputChange} name="projects">-</Button>
                        <h3>Count: {projectCount}</h3>
                    <Button variant="contained" onClick={() => countIncrease(value, projectCount)} onChange={handleInputChange} name="projects">+</Button>
                </ButtonGroup>
            </div>
        )
    }

    function staffCounter(role, staffCount) {
        return (
            <div>
                <ButtonGroup>
                    <Button variant="contained" onClick={() => decreaseStaffCount(role, staffCount)} onChange={handleInputChange} name="staff">-</Button>
                        <h3>Count: {staffCount}</h3>
                    <Button variant="contained" onClick={() => increaseStaffCount(role, staffCount)} onChange={handleInputChange} name="staff">+</Button>
                </ButtonGroup>
            </div>
        )
    }

    // increase project count
    function countIncrease(value, projectCount) {
        const newData = projects.map((project) => {
            if (project.range === value && project.count >= 0) {
                project.count += 1
            }
            return project;
        })
        setProjects(newData)
        console.log('increase', value, projectCount)
    }

    // decrease project count
    function countDecrease(value, projectCount) {
        const newData = projects.map((project) => {
            if (project.range === value && project.count > 0) {
                project.count -= 1
            }
            return project;
        })
        setProjects(newData)
        console.log('decrease', value, projectCount)
    }

    // increase staff counter
    function increaseStaffCount(role, staffCount) {
        const staffData = staff.map((item) => {
            if (item.role === role) {
                item.count += 1
            }
            return item;
        })
        setStaff(staffData)
        console.log('increase', role, staffCount)
    }

    // decrease staff counter
    function decreaseStaffCount(role, staffCount) {
        const staffData = staff.map((item) => {
            if (item.role === role && item.count > 0) {
                item.count -= 1
            }
            return item;
        })
        setStaff(staffData)
        console.log('decrease', role, staffCount)

    }
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        // let newArray = formAnswers.purpose.push(value)
        // make sure array has unique values, eg no duplicate project
        // console.log('jc', newArray)
        // setFormAnswers({...formAnswers, [name]: value})
        switch(name) {
            case "region":
                // const { name, value } = e.target;
                setRegion(value)
                break
            case "role":
                // const { name, value } = e.target;
                setRole(value)
                break
            case "purpose":
                // allows for multiple clicks, which then renders and adds to the array multiple times.s
                setPurpose([...purpose, value])
                break
            case "projects":
                setProjects([...projects, value])
                break
            case "staff":
                setStaff([...staff, value])
            default:
                break
        }
    };

    // handles form submit button
    function handleSubmit(e) {
        e.preventDefault();
        // check if all questions have been answered.
        console.log(region, role, purpose, projects, staff)
        setTimeout(() => {
            setIsInProgress(false)
            console.log("Submitting form.")
        }, 500)
    }

    function createData(name, count) {
        return { name, count };
      }
    
    // Populates data for value + project count
    const projectRows = [
        // HOW CAN I MAKE THIS MORE DRY? - forEach? Map?
        createData(projects[0].range, projects[0].count),
        createData(projects[1].range, projects[1].count),
        createData(projects[2].range, projects[2].count),
        createData(projects[3].range, projects[3].count),
        createData(projects[4].range, projects[4].count),
        createData(projects[5].range, projects[5].count),
        createData(projects[6].range, projects[6].count),
        createData(projects[7].range, projects[7].count),
        createData(projects[8].range, projects[8].count),
        createData(projects[9].range, projects[9].count),
        createData(projects[10].range, projects[10].count),
    ];

    // Populates data for staff
    const staffRows = [
        // map over, forEach, etc. // make more DRY
        createData(staff[0].role, staff[0].count),
        createData(staff[1].role, staff[1].count),
        createData(staff[2].role, staff[2].count),
        createData(staff[3].role, staff[3].count),
        createData(staff[4].role, staff[4].count),
        createData(staff[5].role, staff[5].count),
        createData(staff[6].role, staff[6].count)
    ];



    // renders the ROI calculator form
    function renderForm() {
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <Grid container alignItems="center" justify="center" direction="column"/>
                        <Grid item>
                            <h3>Question 1: Please Select Your Region</h3>
                            <FormControl sx={{ width: 200 }}>
                                <InputLabel id="region-select-label">Region</InputLabel>
                                <Select
                                name="region" // important
                                id="region-select"
                                value={region}
                                label="Region"
                                onChange={handleInputChange}>
                                    <MenuItem value="americas" label="Americas">Americas</MenuItem>
                                    <MenuItem value="asia pacific" label="Asia Pacific">Asia Pacific</MenuItem>
                                    <MenuItem value="europe" label="Europe">Europe</MenuItem>
                                    <MenuItem value="middle east" label="Middle East">Middle East</MenuItem>
                                    <MenuItem value="africa" label="Africa">Africa</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <h3>Question 2: Are you a Consultant or Asset Owner?</h3>
                            <FormControl>
                                <FormLabel>Role</FormLabel>
                                <RadioGroup
                                    name="role"
                                    id="role-select"
                                    value={role}
                                    label="Role"
                                    onChange={handleInputChange}>
                                        <FormControlLabel control={<Radio size="medium"/>} value="Consultant" label="Consultant"/>
                                        <FormControlLabel control={<Radio size="medium"/>} value="Asset Owner" label="Asset Owner"/>
                                </RadioGroup>
                            </FormControl> 
                        </Grid>
                        <Grid item>
                            <h3>Question 3: What do you want to use Mastt for?</h3>
                            <FormControl>
                                <FormGroup
                                    id="purpose-select"
                                    value={purpose}
                                    required={true}>
                                        <FormControlLabel control={<Checkbox />} onChange={handleInputChange} name="purpose" value="project" label="Project" />
                                        <FormControlLabel control={<Checkbox />} onChange={handleInputChange} name="purpose" value="program" label="Program"/>
                                        <FormControlLabel control={<Checkbox />} onChange={handleInputChange} name="purpose" value="project/enterprise" label="Portfolio/Enterprise" />
                                </FormGroup>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            {/* Question 4 - Total Projects + Value Table */}
                            <h3>Question 4: How many projects do you have in total and what is the assigned value for each project?</h3>
                            <TableContainer sx={{ width: 500 }} component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Value ($)</TableCell>
                                            <TableCell>Projects</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {projectRows.map((row) => (
                                        <TableRow
                                        key={ row.name } sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell component="th" scope="row">{ row.name }</TableCell>
                                            <TableCell> {projectsCounter(row.name, row.count)} </TableCell> 
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid item>
                            {/* Question 5 - Staff Table */}
                            <h3>Question 5: How many staff members do you employ?</h3>
                            <TableContainer sx={{ width: 600 }} component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Role</TableCell>
                                            <TableCell>Number of Staff</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {staffRows.map((row) => (
                                        <TableRow
                                        key={ row.name } sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell component="th" scope="row">{ row.name }</TableCell>
                                            <TableCell> {staffCounter(row.name, row.count)} </TableCell> 
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        {/* Submit button */}
                        <Button size="medium" sx={{ width: 100, marginTop: 1 }} variant="contained" type="submit" className="submit-btn">CALCULATE</Button>
                    {/* <Grid/> */}
                </form>
            </>

        )
    }

    // renders the 

    // function that creates a row on description, total projects, total staff, time saved per month
    function createRow(desc, projectQty, staffQty, timeSaved) {
        return { desc, projectQty, staffQty, timeSaved };
    }

    // adds the total count of projects/staff together.
    function calculateTotal(data) {
        const total = data.reduce((total, project) => {
            return total + project.count
        }, 0)
        return total;
    }

    function calculateTimeSaved(hours, numberOfStaff) {
        return hours * numberOfStaff;
    }

    const rows = [
        // createRow('title', projects, staff, timeSaved)


        createRow('Project', calculateTotal(projects), calculateTotal(staff), calculateTimeSaved(projectHoursSavedPerMonth, calculateTotal(staff))),


        createRow('Program', 10, 50, 0),
        createRow('Portfolio/Enterprise', 2, 60, 0),
        createRow('Grand Total', 5, 120, 0)
    ];

    // function that returns a number to two decimal places
    function toDecimalPlace(num) {
        return `${num.toFixed(0)}`;
    }

    function renderTable() {
        return (
            <div>
                <div>
                    <h3>CALCULATE ROI DATA</h3>
                </div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left" colSpan={3}>
                                <h3>Role: {role} </h3>
                                </TableCell>
                                <TableCell align="right"/>
                            </TableRow>
                            <TableRow>
                                <TableCell></TableCell>
                                <TableCell align="center">Total Projects</TableCell>
                                <TableCell align="center">Total Staff</TableCell>
                                <TableCell align="center">Time Saved Per Month</TableCell>
                                <TableCell align="center">Cost Saved Per Month</TableCell>
                                <TableCell align="center">Quality Saved Per Month</TableCell>
                                </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                            <TableRow key={row.desc}>
                                <TableCell>{row.desc}</TableCell>
                                <TableCell align="center">{row.projectQty}</TableCell>
                                <TableCell align="center">{row.staffQty}</TableCell>
                                <TableCell align="center">{row.timeSaved} hrs</TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            ))}
                            {/* <TableRow>
                                <TableCell>Project</TableCell>
                                <TableCell align="center">{projects[0].count}</TableCell>
                                <TableCell align="center">{staff[0].count}</TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell rowSpan={3} />
                                <TableCell colSpan={2}>Subtotal</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Projects</TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Total</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow> */}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }

    return (
        <>
        {/* {isInProgress ? renderForm() : renderTable()} */}
        {renderTable()}
        </>
       
    )
}
