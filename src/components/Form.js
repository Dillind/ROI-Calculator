import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import "../index.css"

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// const defaultValues = {
//     region: "", // 6 different regions
//     role: "", // PMC or AO
//     purpose: [""], // project, program, portfolio/enterprise
//     projects: [{label: "", value: 0}], // label for each project value, and no. of projects
//     staff: [{label: "", value: 0}] // label for roles, number of each role.
// }

// ***** todos ****
// add the projectTiersInitialState structure to projects initial state - DONE
// update the correct object in the state which can be found by the rowName key - DONE

const projectTiersInitialState = [
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

export default function Form() {
    // state that stores data from each question
    // const [formAnswers, setFormAnswers] = useState(defaultValues)
    const [region, setRegion] = useState("")
    const [role, setRole] = useState("")
    const [purpose, setPurpose] = useState([])
    const [projects, setProjects] = useState(projectTiersInitialState)
    // const [projects, setProjects] = useState({id: "1", range: '1-10M', count: 0})
    // const [projects, setProjects] = useState(0)
    const [staff, setStaff] = useState()

    // console.log(projects.count)

    // WHAT I WANT
    function projectsCounter(rowName, rowProject) {
        return (
            <div>
                <ButtonGroup>
                    {/* {projects.map((item, index) => {
                        return (
                            <div>
                                <Button variant="contained" onClick={() => countDecrease(rowName, item.count)}>-</Button>
                                <p>Count: {item.count}, Value: {rowName}</p>
                                <Button onClick={() => countIncrease(rowName, item.count)}>+</Button>
                            </div>
                        )
                    })} */}
                    <Button variant="contained" onClick={() => countDecrease(rowName, rowProject)} name="projects">-</Button>
                    <h3>Count: {rowProject}</h3>
                    <Button variant="contained" onClick={() => countIncrease(rowName, rowProject)} name="projects">+</Button>
                </ButtonGroup>
            </div>
        )
    }

    function countIncrease(rowName, rowProject) {
        // UPDATES OBJECTS INDIVIDUALLY - VICTORY!
        const newData = projects.map((item) => {
            if (item.range === rowName && item.count >= 0) {
                item.count += 1
            }
            return item;
        })
        setProjects(newData)
        console.log('increase', rowName, rowProject)
    }

    function countDecrease(rowName, rowProject) {
        const newData = projects.map((item) => {
            if (item.range === rowName && item.count > 0) {
                item.count -= 1
            }
            return item;
        })
        setProjects(newData)
        console.log('decrease', rowName, rowProject)
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
                // enable later
                // setProjects([...projects, value])
            default:
                break
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        // check if all questions have been answered.
        console.log(region, role, purpose, projects)
    }

    function createData(name, projects) {
        return { name, projects };
      }

    // Populate data for projects + value
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


    // Populate data for staff
    const staffRows = [
        // map over, forEach, etc. // make more DRY
        createData('Project Manager', 20),
        createData('Project Director', 5),
        createData('Program Manager', 9),
        createData('Portfolio Manager', 4),
        createData('Snr. Project Manager', 2),
        createData('Associate Project Manager', 8),
        createData('Consultant', 5)
    ];

    return (
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
                                <FormControlLabel control={<Radio size="medium"/>} value="consultant" label="Consultant"/>
                                <FormControlLabel control={<Radio size="medium"/>} value="asset owner" label="Asset Owner"/>
                        </RadioGroup>
                    </FormControl> 
                </Grid>
                <Grid item>
                    <h3>Question 3: What do you want to use Mastt for?</h3>
                    <FormGroup
                        id="purpose-select"
                        value={purpose}>
                            <FormControlLabel control={<Checkbox />} onChange={handleInputChange} name="purpose" value="project" label="Project" />
                            <FormControlLabel control={<Checkbox />} onChange={handleInputChange} name="purpose" value="program" label="Program"/>
                            <FormControlLabel control={<Checkbox />} onChange={handleInputChange} name="purpose" value="project/enterprise" label="Portfolio/Enterprise" />
                    </FormGroup>
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
                                    {/* { row.projects }  default */} 
                                    <TableCell> {projectsCounter(row.name, row.projects)} </TableCell> 
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item>

                    {/* Question 5 - Staff Table */}
                    <h3>Question 5: How many staff members do you employ?</h3>
                    <TableContainer sx={{ width: 500 }} component={Paper}>
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
                                    {/* { row.projects }  default */} 
                                    <TableCell> {row.projects} </TableCell> 
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Button sx={{ width: 80, marginTop: 1 }} variant="contained" type="submit" className="submit-btn">Submit</Button>
            {/* <Grid/> */}
        </form>
    )
}
    // EXAMPLE OF WHAT I WANT. - COUNTER****
    // const [counters, setCounters] = useState([0, 0, 0, 0]);
    // const setCount = (index, newCounter) => {
    //     const newCounters = Object.assign([], counters); // target, sources
    //     newCounters[index] = newCounter;
    //     setCounters(newCounters);
    // };

    // function testCounter() {
    //     return (
    //         <div>
    //           {counters.map((counter, index) => (
    //             <Counter index={index} counter={counter} setCount={setCount} />
    //           ))}
    //         </div>
    //       );
    // }

    // const Counter = ({ index, counter, setCount }) => {
    //     return (
    //       <div>
    //         <button onClick={() => setCount(index, counter + 1)}>Increment</button>
    //             {counter}
    //         <button onClick={() => setCount(index, counter - 1)}>Decrement</button>

    //       </div>
    //     );
    //   };

