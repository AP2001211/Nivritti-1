import React, { useState,useContext } from "react";
import { Card, CardContent, FormControl, Grid, Input, InputLabel, MenuItem, Select, TextField, Typography, Button } from "@mui/material";
import { multiStepContext } from "../../StepContext";
import '../general/Homepage.css'

const years = Array.from({ length: 34 }, (_, i) => 1990 + i);
const JNVclasses = Array.from({ length: 12 }, (_, i) => 0 + i);



function Educationdetails() {
    const {setStep,userData,setUserData}=useContext(multiStepContext);
    const [year, setYear] = useState("");
    const [classes, setClasses] = useState("");
    const [stream, setStream] = useState("");
    const [selectedState, setSelectedState] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [percentage9, setPercentage9] = useState('');
    const [percentage8,setPercentage8]=useState("");

    const handleNinthPercentageChange = (event) => {
        const input = event.target.value;
        if (input === '' || (parseFloat(input) >= 1 && parseFloat(input) <= 100)) {
            setPercentage9(input);
        }
    };

    const handleEigthPercentageChange=(event)=>{
        const input = event.target.value;
        if (input === '' || (parseFloat(input) >= 1 && parseFloat(input) <= 100)) {
            setPercentage8(input);
        }
    }

    const handleYearChange = (event) => {
        setYear(event.target.value);
    }

    const handleStreamChange = (event) => {
        setStream(event.target.value);
        console.log(event.target.value)
    }

    const handleClassChange = (event) => {
        setClasses(event.target.value);
    }

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
        setSelectedDistrict('');
    };

    const handleDistrictChange = (event) => {
        setSelectedDistrict(event.target.value);
    };

    const getDistrictOptions = () => {
        switch (selectedState) {
            case 'Andhra Pradesh':
                return ['Anantapur', 'Chittoor', 'East Godavari', 'Guntur', 'Krishna', 'Kurnool', 'Nellore', 'Prakasam', 'Srikakulam', 'Visakhapatnam', 'Vizianagaram', 'West Godavari', 'YSR Kadapa'];
            case 'Arunachal Pradesh':
                return ['Anjaw', 'Changlang', 'Dibang Valley', 'East Kameng', 'East Siang', 'Kamle', 'Kra Daadi', 'Kurung Kumey', 'Lepa Rada', 'Lohit', 'Longding', 'Lower Dibang Valley', 'Lower Siang', 'Lower Subansiri', 'Namsai', 'Pakke Kessang', 'Papum Pare', 'Shi Yomi', 'Siang', 'Tawang', 'Tirap', 'Upper Siang', 'Upper Subansiri', 'West Kameng', 'West Siang'];
            case 'Assam':
                return ['Baksa', 'Barpeta', 'Biswanath', 'Bongaigaon', 'Cachar', 'Charaideo', 'Chirang', 'Darrang', 'Dhemaji', 'Dhubri', 'Dibrugarh', 'Dima Hasao', 'Goalpara', 'Golaghat', 'Hailakandi', 'Hojai', 'Jorhat', 'Kamrup', 'Kamrup Metropolitan', 'Karbi Anglong', 'Karimganj', 'Kokrajhar', 'Lakhimpur', 'Majuli', 'Morigaon', 'Nagaon', 'Nalbari', 'Sivasagar', 'Sonitpur', 'South Salamara-Mankachar', 'Tinsukia', 'Udalguri', 'West Karbi Anglong'];
            case 'Bihar':
                return ['Araria', 'Arwal', 'Aurangabad', 'Banka', 'Begusarai', 'Bhagalpur', 'Bhojpur', 'Buxar', 'Darbhanga', 'East Champaran', 'Gaya', 'Gopalganj', 'Jamui', 'Jehanabad', 'Kaimur', 'Katihar', 'Khagaria', 'Kishanganj', 'Lakhisarai', 'Madhepura', 'Madhubani', 'Munger', 'Muzaffarpur', 'Nalanda', 'Nawada', 'Patna', 'Purnia', 'Rohtas', 'Saharsa', 'Samastipur', 'Saran', 'Sheikhpura', 'Sheohar', 'Sitamarhi', 'Siwan', 'Supaul', 'Vaishali', 'West Champaran'];
            case 'Chhattisgarh':
                return ['Balod', 'Baloda Bazar', 'Balrampur', 'Bastar', 'Bemetara', 'Bijapur', 'Bilaspur', 'Dantewada', 'Dhamtari', 'Durg', 'Gariaband', 'Gaurela-Pendra-Marwahi', 'Janjgir-Champa', 'Jashpur', 'Kanker', 'Kawardha', 'Kondagaon']
            case 'Tamil Nadu':
                return ['Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul', 'Erode', 'Kallakurichi', 'Kanchipuram', 'Kanyakumari', 'Karur', 'Krishnagiri', 'Madurai', 'Mayiladuthurai', 'Nagapattinam', 'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai', 'Ramanathapuram', 'Ranipet', 'Salem', 'Sivaganga', 'Tenkasi', 'Thanjavur', 'Theni', 'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli', 'Tirupathur', 'Tiruppur', 'Tiruvallur', 'Tiruvannamalai', 'Tiruvarur', 'Vellore', 'Viluppuram', 'Virudhunagar'];
            case 'Telangana':
                return ['Adilabad', 'Bhadradri Kothagudem', 'Hyderabad', 'Jagtial', 'Jangaon', 'Jayashankar Bhupalpally', 'Jogulamba Gadwal', 'Kamareddy', 'Karimnagar', 'Khammam', 'Kumuram Bheem', 'Mahabubabad', 'Mahabubnagar', 'Mancherial', 'Medak', 'Medchal–Malkajgiri', 'Mulugu', 'Nagarkurnool', 'Nalgonda', 'Nirmal', 'Nizamabad', 'Peddapalli', 'Rajanna Sircilla', 'Ranga Reddy', 'Sangareddy', 'Siddipet', 'Suryapet', 'Vikarabad', 'Wanaparthy', 'Warangal Rural', 'Warangal Urban', 'Yadadri Bhuvanagiri'];
            case 'Tripura':
                return ['Dhalai', 'Gomati', 'Khowai', 'North Tripura', 'Sepahijala', 'South Tripura', 'Unakoti', 'West Tripura'];
            default:
                return [];
        }
    };



    return (
        <form>
            <Card style={{width:"90%",marginLeft:"60px"}}>
            <CardContent>
            <Typography class="prose lg:prose-xl" variant="h5" component="h2" style={{ "color": "darkgreen", "margin-top": "10px", "margin-bottom": "10px" }}>
                        Education Details
            </Typography>
                
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel>Class 12 year of completion</InputLabel>
                                <Select label="select Academic Year" value={year} onChange={handleYearChange}>
                                    {years.map((year) => (
                                        <MenuItem key={year} value={year}>
                                            {year}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <FormControl fullWidth>
                                <InputLabel>Since which class have you been studying in JNV?</InputLabel>
                                <Select label="select Academic Year" value={classes} onChange={handleClassChange}>
                                    {JNVclasses.map((classes) => (
                                        <MenuItem key={classes} value={classes}>
                                            {classes}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel>Stream</InputLabel>
                                <Select label="select your stream" value={stream} onChange={handleStreamChange} id="stream">
                                    <MenuItem value={'science'}>Science</MenuItem>
                                    <MenuItem value={'commerce'}>Commerce</MenuItem>
                                    <MenuItem value={'Arts'}>Arts</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth>
                                <InputLabel>Since which class have you been studying in JNV?</InputLabel>
                                <Select label="select Academic Year" value={classes} onChange={handleClassChange}>
                                    {JNVclasses.map((classes) => (
                                        <MenuItem key={classes} value={classes}>
                                            {classes}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>
                                <TextField
                                    id="class8percentage"
                                    label="Class 8 Percentage"
                                    value={percentage8}
                                    onChange={handleEigthPercentageChange}
                                    type="number"
                                    inputProps={{
                                        min: '1',
                                        max: '100'
                                    }}
                                    error={parseFloat(percentage8) > 100}
                                    helperText={parseFloat(percentage8) > 100 ? 'Percentage must be between 1 and 100' : ''}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>
                                <Select value={selectedState} onChange={handleStateChange} displayEmpty>
                                    <MenuItem value="" disabled>
                                        Select a state
                                    </MenuItem>
                                    <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
                                    <MenuItem value="Arunachal Pradesh">Arunachal Pradesh</MenuItem>
                                    <MenuItem value="Assam">Assam</MenuItem>
                                    <MenuItem value="Bihar">Bihar</MenuItem>
                                    <MenuItem value="Chhattisgarh">Chhattisgarh</MenuItem>
                                    <MenuItem value="Goa">Goa</MenuItem>
                                    <MenuItem value="Gujarat">Gujarat</MenuItem>
                                    <MenuItem value="Haryana">Haryana</MenuItem>
                                    <MenuItem value="Himachal Pradesh">Himachal Pradesh</MenuItem>
                                    <MenuItem value="Jharkhand">Jharkhand</MenuItem>
                                    <MenuItem value="Karnataka">Karnataka</MenuItem>
                                    <MenuItem value="Kerala">Kerala</MenuItem>
                                    <MenuItem value="Madhya Pradesh">Madhya Pradesh</MenuItem>
                                    <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                                    <MenuItem value="Manipur">Manipur</MenuItem>
                                    <MenuItem value="Meghalaya">Meghalaya</MenuItem>
                                    <MenuItem value="Mizoram">Mizoram</MenuItem>
                                    <MenuItem value="Nagaland">Nagaland</MenuItem>
                                    <MenuItem value="Odisha">Odisha</MenuItem>
                                    <MenuItem value="Punjab">Punjab</MenuItem>
                                    <MenuItem value="Rajasthan">Rajasthan</MenuItem>
                                    <MenuItem value="Sikkim">Sikkim</MenuItem>
                                    <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
                                    <MenuItem value="Telangana">Telangana</MenuItem>
                                    <MenuItem value="Tripura">Tripura</MenuItem>
                                    <MenuItem value="Uttar Pradesh">Uttar Pradesh</MenuItem>
                                    <MenuItem value="Uttarakhand">Uttarakhand</MenuItem>
                                    <MenuItem value="West Bengal">West Bengal</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>
                                <Select
                                    value={selectedDistrict}
                                    onChange={handleDistrictChange}
                                    disabled={!selectedState}
                                    displayEmpty
                                >
                                    <MenuItem value="" disabled>
                                        {selectedState ? `Select a district in ${selectedState}` : 'Select a state first'}
                                    </MenuItem>
                                    {getDistrictOptions().map((district) => (
                                        <MenuItem key={district} value={district}>
                                            {district}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>
                                <TextField
                                    id="class9percentage"
                                    label="Class 9 Percentage"
                                    value={percentage9}
                                    onChange={handleNinthPercentageChange}
                                    type="number"
                                    inputProps={{
                                        min: '1',
                                        max: '100'
                                    }}
                                    error={parseFloat(percentage9) > 100}
                                    helperText={parseFloat(percentage9) > 100 ? 'Percentage must be between 1 and 100' : ''}
                                />
                            </FormControl>
                        </Grid>
                        

                    </Grid>
                    <FormControl fullWidth style={{flexDirection:"row-reverse",marginTop:"30px"}}>
                    <button className="secondary-button" style={{marginLeft:'10px'}} onClick={()=>setStep(4)}>Next</button>
                    <button className="secondary-button" style={{marginLeft:'auto'}} onClick={()=>setStep(2)}>Prev</button>
                    </FormControl>
                </CardContent>
            </Card>
        </form>
    )
}

export default Educationdetails;
