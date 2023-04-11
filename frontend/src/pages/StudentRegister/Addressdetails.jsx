import React, { useContext, useState } from "react";
import { Card, CardContent, FormControl, FormHelperText, Grid, Input, InputLabel, MenuItem, Select, TextField, Typography, Button } from "@mui/material";
import { multiStepContext } from "../../StepContext"
import '../general/Homepage.css'

// const countryOptions =[
//     {
//         country:"India",
//         states:[
//             "Andhra Pradesh",
//             "Arunachal Pradesh",
//             "Assam",
//             "Bihar",
//             "Chhattisgarh",
//             "Goa",
//             "Gujarat"
//         ],
//     },
//     {
//         name:"USA",
//         states:[
//             "Alabama",
//             "Alaska",
//             "Arizona",
//             "Arkansas",
//             "California",
//             "Colorado"
//         ],
//     },
// ];


const Addressdetails = () => {

    const { setStep, userData, setUserData } = useContext(multiStepContext)
    const [isFormValid, setIsFormValid] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isFormValid) {
            setStep(3);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
        validateForm();
    };


    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
        setSelectedState("");
    };


    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    }

    const validateForm = () => {
        setIsFormValid(userData.doorNumber && userData.streetName && userData.country && userData.state && userData.district && userData.taluka && userData.village && userData.pincode);
    };


    const countryOptions = () => {
        switch (selectedCountry) {
            case 'India':
                return ["Andhra Pradesh", "Assam", "Karnataka", "Punjab"];

            case "USA":
                return ["Alabama", "California", "Colorado", "Arizona"];

            default:
                return [];
        }
    }



    return (


        <div>

            <form>
                <Card style={{ width: "90%", marginLeft: "60px" }}>
                    <CardContent>
                        <Typography class="prose lg:prose-xl" variant="h5" component="h2" style={{ "color": "darkgreen", "margin-top": "10px", "margin-bottom": "10px" }}>
                            Student Residence Address Details
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Door No."
                                    value={userData['doornumber']}
                                    onChange={(e) => setUserData({ ...userData, "doornumber": e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Street name"
                                    value={userData['streetname']}
                                    onChange={(e) => setUserData({ ...userData, "streetname": e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <FormControl fullWidth>
                                    <Select value={selectedCountry} onChange={handleCountryChange} displayEmpty>
                                        <MenuItem value="" disabled>
                                            Select a Country
                                        </MenuItem>
                                        <MenuItem value="India">India</MenuItem>
                                        <MenuItem value="USA">USA</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <FormControl fullWidth>
                                    <Select
                                        value={selectedState}
                                        onChange={handleStateChange}
                                        disabled={!selectedCountry}
                                        displayEmpty
                                    >
                                        <MenuItem value="" disabled>
                                            {selectedCountry ? `Select a district in ${selectedCountry}` : 'Select a country first'}
                                        </MenuItem>
                                        {countryOptions().map((state) => (
                                            <MenuItem key={state} value={state}>
                                                {state}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    required
                                    fullWidth
                                    label="District"
                                    value={userData['districtname']}
                                    onChange={(e) => setUserData({ ...userData, "districtname": e.target.value })}
                                />
                                <FormHelperText style={{ color: 'green' }}>Please type if not in options</FormHelperText>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Taluka"
                                    value={userData['talukaname']}
                                    onChange={(e) => setUserData({ ...userData, "talukaname": e.target.value })}
                                />
                                <FormHelperText style={{ color: 'green' }}>Please type if not in options</FormHelperText>
                            </Grid>


                            <Grid item xs={12} sm={4}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Pin Code"
                                    value={userData['pincode']}
                                    onChange={(e) => setUserData({ ...userData, "pincode": e.target.value })}
                                    inputProps={{ pattern: "^\\d{6}$", maxLength: 6 }}
                                    error={userData['pincode'] !== '' && !/^\d{6}$/.test(userData['pincode'])}
                                    helperText={userData['pincode'] !== '' && !/^\d{6}$/.test(userData['pincode']) ? 'Please enter a valid 6-digit Pin Code' : ''}
                                />
                            </Grid>


                        </Grid>
                        <FormControl fullWidth style={{ flexDirection: "row-reverse", marginTop: "30px" }}>
                            <button className="secondary-button" style={{ marginLeft: '10px' }} onClick={() => setStep(5)}>Next</button>
                            <button className="secondary-button" style={{ marginLeft: 'auto' }} onClick={() => setStep(3)}>Prev</button>
                        </FormControl>
                    </CardContent>
                </Card>
            </form>

        </div>
    )
}

export default Addressdetails
