// import all components of the form into here.
import React,{ useState } from 'react'
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import "../index.css"

const defaultValues = {
    region: "", // 6 different regions
    role: "", // PMC or AO
    purpose: [""], // project, program, portfolio/enterprise
    projects: [{label: "", value: 0}], // label for each project value, and no. of projects
    staff: [{label: "", value: 0}] // label for roles, number of each role.
}

export default function Form() {
    // state that stores the data from the form
    const [formAnswers, setFormAnswers] = useState(defaultValues)
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormAnswers({...formAnswers, [name]: value,})
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formAnswers)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container alignitems="center" justify="center" direction="column"/>
                <Grid item>
                    <h3>Question 1: Please Select Your Region</h3>
                    <FormControl sx={{ width: 200 }}>
                        <InputLabel id="region-select-label">Region</InputLabel>
                        <Select
                        name="region" // important
                        id="region-select"
                        value={formAnswers.region}
                        label="Region"
                        onChange={handleInputChange}>
                            <MenuItem key="Americas" value="Americas">Americas</MenuItem>
                            <MenuItem key="Asia Pacific" value="Asia Pacific">Asia Pacific</MenuItem>
                            <MenuItem key="Europe" value="Europe">Europe</MenuItem>
                            <MenuItem key="Middle East" value="Middle East">Middle East</MenuItem>
                            <MenuItem key="Africa" value="Africa">Africa</MenuItem>
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
                            value={formAnswers.role}
                            label="Role"
                            onChange={handleInputChange}>
                                <FormControlLabel 
                                key="consultant" 
                                control={<Radio size="medium" />} 
                                value="consultant"
                                label="Consultant"/>
                                <FormControlLabel 
                                key="asset owner" 
                                control={<Radio size="medium"/>} 
                                value="asset owner" 
                                label="Asset Owner" />
                        </RadioGroup>
                    </FormControl> 
                </Grid>
                <Grid item>
                    <h3>Question 3: What do you want to use Mastt for?</h3>

                </Grid>
                <Button sx={{ width: 80, marginTop: 1 }} variant="contained" type="submit" className="submit-btn">Submit</Button>
            <Grid/>
        </form>
    )
}