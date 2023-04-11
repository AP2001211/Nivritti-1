import React, { useContext, useState } from "react";
import { Card, CardContent, FormControl, FormHelperText, Grid, Input, InputLabel, MenuItem, Select, TextField, Typography, FormGroup, Checkbox, FormControlLabel } from "@mui/material";
import { multiStepContext } from "../../StepContext"

import '../general/Homepage.css'
const Additionaldetails = () => {

    const { setStep, userData, setUserData } = useContext(multiStepContext)
    const [charCount, setCharCount] = useState((userData['textfield'] || '').length);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleTextFieldChange = (e) => {
        const value = e.target.value;
        setUserData({ ...userData, "textfield": value });
        setCharCount(value.length);
    };

    const handleCheckboxChange = (e) => {
        const itemName = e.target.name;
        if (e.target.checked) {
            setSelectedItems([...selectedItems, itemName]);
        } else {
            setSelectedItems(selectedItems.filter(item => item !== itemName));
        }
    };

    return (
        <div>
            <form>
                <Card style={{ width: "90%", marginLeft: "60px" }}>
                    <CardContent>
                        <Typography class="prose lg:prose-xl" variant="h5" component="h2" style={{ "color": "darkgreen", "margin-top": "10px", "margin-bottom": "10px" }}>
                            Additional Details
                        </Typography>
                        <Grid container spacing={3} style={{ display: 'flex', alignItems: 'center' }}>

                            <Grid item xs={12} sm={5.4} style={{ flexGrow: 1 }}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Extra Cirricular Information"
                                    value={userData['textfield'] || ''}
                                    onChange={handleTextFieldChange}
                                    inputProps={{ maxLength: 200 }}
                                    error={(userData['textfield'] || '').length > 200}
                                    helperText={(userData['textfield'] || '').length > 200 ? 'Please enter no more than 200 characters' : ''}
                                    multiline
                                    rows={4}
                                    style={{ marginLeft: "18px" }}
                                />
                                <Grid item xs={12} sm={4} style={{ textAlign: 'right', marginLeft: 'auto' }}>
                                    <div style={{ color: 'grey', fontWeight: 'lighter', fontSize: '12px' }}>{charCount}/200 characters</div>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sm={5.4} style={{ flexGrow: 1 }}>
                                <TextField
                                    required
                                    fullWidth
                                    label="What are the top 3 things you are most grateful for in your school life? Why?"
                                    value={userData['textfield'] || ''}
                                    onChange={handleTextFieldChange}
                                    inputProps={{ maxLength: 200 }}
                                    error={(userData['textfield'] || '').length > 200}
                                    helperText={(userData['textfield'] || '').length > 200 ? 'Please enter no more than 200 characters' : ''}
                                    multiline
                                    rows={4}
                                    style={{ marginLeft: "18px" }}
                                />
                                <Grid item xs={12} sm={4} style={{ textAlign: 'right', marginLeft: 'auto' }}>
                                    <div style={{ color: 'grey', fontWeight: 'lighter', fontSize: '12px' }}>{charCount}/200 characters</div>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sm={5.4} style={{ flexGrow: 1 }}>
                                <TextField
                                    required
                                    fullWidth
                                    label="What are the top 3 things you would wish to change in India? Why?"
                                    value={userData['textfield'] || ''}
                                    onChange={handleTextFieldChange}
                                    inputProps={{ maxLength: 200 }}
                                    error={(userData['textfield'] || '').length > 200}
                                    helperText={(userData['textfield'] || '').length > 200 ? 'Please enter no more than 200 characters' : ''}
                                    multiline
                                    rows={4}
                                    style={{ marginLeft: "18px" }}
                                />
                                <Grid item xs={12} sm={4} style={{ textAlign: 'right', marginLeft: 'auto' }}>
                                    <div style={{ color: 'grey', fontWeight: 'lighter', fontSize: '12px' }}>{charCount}/200 characters</div>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sm={5.4} style={{ flexGrow: 1 }}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Which is your favourite subject in school? Why?"
                                    value={userData['textfield'] || ''}
                                    onChange={handleTextFieldChange}
                                    inputProps={{ maxLength: 200 }}
                                    error={(userData['textfield'] || '').length > 200}
                                    helperText={(userData['textfield'] || '').length > 200 ? 'Please enter no more than 200 characters' : ''}
                                    multiline
                                    rows={4}
                                    style={{ marginLeft: "18px" }}
                                />
                                <Grid item xs={12} sm={6} style={{ textAlign: 'right', marginLeft: 'auto' }}>
                                    <div style={{ color: 'grey', fontWeight: 'lighter', fontSize: '12px' }}>{charCount}/200 characters</div>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sm={5.4} style={{ flexGrow: 1 }}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Why do you wish to join Nivritti Gurukul?"
                                    value={userData['textfield'] || ''}
                                    onChange={handleTextFieldChange}
                                    inputProps={{ maxLength: 200 }}
                                    error={(userData['textfield'] || '').length > 200}
                                    helperText={(userData['textfield'] || '').length > 200 ? 'Please enter no more than 200 characters' : ''}
                                    multiline
                                    rows={4}
                                    style={{ marginLeft: "18px" }}
                                />
                                <Grid item xs={12} sm={6} style={{ textAlign: 'right', marginLeft: 'auto' }}>
                                    <div style={{ color: 'grey', fontWeight: 'lighter', fontSize: '12px' }}>{charCount}/200 characters</div>
                                </Grid>
                            </Grid>

                            <Grid item xs={12} sm={5.4} style={{ flexGrow: 1, marginLeft: "25px" }}>
                                <FormControl fullWidth>
                                    <InputLabel id="vehicle-label">Vehicles if any (to facilitate the service projects during holidays?)</InputLabel>
                                    <Select
                                        labelId="vehicle-label"
                                        label="select an option"
                                        id="vehicle"
                                        value={userData['vehicle']}
                                        onChange={(e) => setUserData({ ...userData, caste: e.target.value })}
                                    >
                                        <MenuItem value={'car'}>car</MenuItem>
                                        <MenuItem value={'scooter'}>scooter</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} sm={8} style={{marginLeft:"25px"}}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <Typography variant="subtitle1">Select one of the options:</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl component="fieldset">
                                            <FormGroup>
                                                <FormControlLabel
                                                    control={<Checkbox checked={selectedItems.includes('smartphone')} onChange={handleCheckboxChange} name="smartphone" />}
                                                    label="Smartphone"
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox checked={selectedItems.includes('television')} onChange={handleCheckboxChange} name="television" />}
                                                    label="Television"
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox checked={selectedItems.includes('computer')} onChange={handleCheckboxChange} name="computer" />}
                                                    label="Computer/Laptop"
                                                />
                                            </FormGroup>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                                </Grid>
                                <Grid item xs={12} sm={8}>
                                    <p>You have selected: {selectedItems.join(', ')}</p>
                                </Grid>
                            </Grid>


                            <FormControl fullWidth style={{ flexDirection: "row-reverse", marginTop: "30px" }}>
                                <button className="secondary-button" style={{ marginLeft: '10px' }}>Submit</button>
                                <button className="secondary-button" style={{ marginLeft: 'auto' }} onClick={() => setStep(5)}>Prev</button>
                            </FormControl>
                    </CardContent>
                </Card>
            </form>

        </div>
    )
}

export default Additionaldetails;
