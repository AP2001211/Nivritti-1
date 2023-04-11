import React, { useContext, useState } from "react";
import { Card, CardContent, FormControl,FormHelperText, Grid, Input, InputLabel, MenuItem, Select, TextField, Typography, Button } from "@mui/material";
import { multiStepContext } from "../../StepContext"
import '../general/Homepage.css'


const indianLanguages = [
    'Assamese',
    'Bengali',
    'Bodo',
    'Dogri',
    'Gujarati',
    'Hindi',
    'Kannada',
    'Kashmiri',
    'Konkani',
    'Maithili',
    'Malayalam',
    'Manipuri',
    'Marathi',
    'Nepali',
    'Oriya',
    'Punjabi',
    'Sanskrit',
    'Santhali',
    'Sindhi',
    'Tamil',
    'Telugu',
    'Urdu',
];

const allReligions = [
    'Christianity',
    'Islam',
    'Hinduism',
    'Buddhism',
    'Judaism',
    'Sikhism',
    'Taoism',
    'Confucianism',
    'Baháʼí Faith',
    'Jainism',
    'Shintoism',
];


function StudentRegtry() {

    const { setStep, userData, setUserData } = useContext(multiStepContext)
   
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isFormValid, setIsFormValid] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isValidEmail) {
            return;
        }

        setStep(2);

    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

   

    return (
        <form onSubmit={handleSubmit}>
            <Card style={{width:"90%",marginLeft:"60px"}}>
                <CardContent>
                    <Typography class="prose lg:prose-xl" variant="h5" component="h2" style={{ "color": "darkgreen", "margin-top": "10px", "margin-bottom": "10px" }}>
                        General Details
                    </Typography>
                    <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                fullWidth
                                label="Student Name"
                                value={userData['studentname']}
                                onChange={(e) => setUserData({ ...userData, "studentname": e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                fullWidth
                                label="Mother Name"
                                value={userData['mothername']}
                                onChange={(e) => setUserData({ ...userData, "mothername": e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                fullWidth
                                label="Father Name"
                                value={userData['fathername']}
                                onChange={(e) => setUserData({ ...userData, "fathername": e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                fullWidth
                                label="Student's Mobile Number"
                                value={userData['studentmobile']}
                                onChange={(e) => setUserData({ ...userData, "studentmobile": e.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                fullWidth
                                label="Date of Birth"
                                type="date"
                                value={userData['dob']}
                                onChange={(e) => setUserData({ ...userData, dob: e.target.value })}
                                InputLabelProps={{
                                    shrink: true
                                }}
                            />
                        </Grid>

                        {/* <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel>Year</InputLabel>
                                <Select label="select an option" value={year} onChange={handleYearChange}>
                                    {years.map((year) => (
                                        <MenuItem key={year} value={year}>
                                            {year}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid> */}
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel id="gender-label">Gender</InputLabel>
                                <Select
                                    labelId="gender-label"
                                    label="select an option"
                                    id="gender"
                                    value={userData['gender']}
                                    onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
                                >
                                    <MenuItem value={'male'}>Male</MenuItem>
                                    <MenuItem value={'female'}>Female</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel id="gender-label">Caste</InputLabel>
                                <Select
                                    labelId="caste-label"
                                    label="select an option"
                                    id="caste"
                                    value={userData['caste']}
                                    onChange={(e) => setUserData({ ...userData, caste: e.target.value })}
                                >
                                    <MenuItem value={'sc'}>SC</MenuItem>
                                    <MenuItem value={'st'}>ST</MenuItem>
                                    <MenuItem value={'general'}>General</MenuItem>
                                    <MenuItem value={'obc'}>OBC</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                fullWidth
                                type="email"
                                error={!isValidEmail}
                                helperText={!isValidEmail ? 'Please enter a valid email' : ''}
                                label="Student's Email"
                                value={userData['studentemail']}
                                onChange={(e) => { setUserData({ ...userData, studentemail: e.target.value }); setIsValidEmail(e.target.checkValidity()); }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel id="mother-tongue-label">Mother Tongue</InputLabel>
                                <Select
                                    labelId="mother-tongue-label"
                                    id="mother-tongue"
                                    value={userData['mothertoungue']}
                                    onChange={(e) => setUserData({ ...userData, mothertoungue: e.target.value })}
                                >
                                    {indianLanguages.map((language) => (
                                        <MenuItem key={language} value={language}>
                                            {language}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl required fullWidth>
                                <InputLabel required id="religion-label">Religion</InputLabel>
                                <Select
                                    labelId="religion-label"
                                    id="religion"
                                    value={userData['religion']}
                                    onChange={(e) => setUserData({ ...userData, religion: e.target.value })}
                                >
                                    {allReligions.map((religion) => (
                                        <MenuItem key={religion} value={religion}>
                                            {religion}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <FormControl fullWidth>
                       
                        <button className="secondary-button" style={{marginLeft:'auto'}} onClick={()=>setStep(2)}>Next</button>
                    </FormControl>
                </CardContent>
            </Card>
        </form>
    );
}

export default StudentRegtry;