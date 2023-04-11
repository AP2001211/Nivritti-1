import React, { useContext, useState } from "react";
import { Card, CardContent, FormControl, Grid, Input, InputLabel, MenuItem, Select, TextField, Typography, Button } from "@mui/material";
import { multiStepContext } from "../../StepContext";


const incomeTiers = [
    { label: 'Below 1 Lakh', value: '<1' },
    { label: '1 Lakh to 2 Lakh', value: '1-2' },
    { label: '2 Lakh to 3 Lakh', value: '2-3' },
    { label: '3 Lakh to 4 Lakh', value: '3-4' }
]


const FatherOccupation = [
    "Business Owner",
    "Engineer",
    "Doctor",
    "Lawyer",
    "Government Employee",
    "Private Sector Employee",
    "Teacher",
    "Farmer",
    "Self-employed",
    // "Other"
];

const MotherOccupation = [
    "Housewife/Homemaker",
    "Teacher",
    "Nurse",
    "Accountant",
    "Lawyer",
    "Government Employee",
    "Self-employed",
    "Doctor",
    "Entrepreneur",
    "Other"
];

const RelativesOccupation = [
    "Doctor",
    "Engineer",
    "Teacher",
    "Lawyer",
    "Business Owner",
    "Accountant",
    "Government Employee",
    "IT Professional",
    "Farmer",
    "Other"
];

const HouseType = [

]
function Familydetails() {

    const {setStep,userData,setUserData}=useContext(multiStepContext)
    const [fatherName, setFatherName] = useState("");
    const [income, setIncome] = useState("");
    const [deceased, setdeceased] = useState("");
    const [familyMembers, setfamilyMembers] = useState("");
    const [mothermobile, setMotherMobile] = useState("");
    const [siblings, setSiblings] = useState("");
    const [houseType, setHouseType] = useState("");
    const [fatherOccupation, setFatherOccupation] = useState("");
    const [motherOccupation, setMotherOccupation] = useState("");
    const [relatives, setRelatives] = useState("");
    const [bplCard, setBplCard] = useState("")
    const [otherFatherOccupation, setOtherFatherOccupation] = useState(false);
    const [otherFOccupation, setOtherFOccupation] = useState("");
    const [otherMotherOccupation,setOtherMotherOccupation]=useState(false)
    const [otherMOccupation, setOtherMOccupation] = useState("");
    const [otherRelativeOccupation,setOtherRelativeOccupation]=useState(false);
    const [otherROccupation, setOtherROccupation] = useState("");





    const familyNumbers = Array.from({ length: 10 }, (_, i) => 0 + i);

    const allSiblings = Array.from({ length: 10 }, (_, i) => 0 + i);


    const handleIncomeChange = (event) => {
        setIncome(event.target.value);
    };
    const handleDeceasedChange = (event) => {
        setdeceased(event.target.value);
        
    }

    const handleRelativesChange=(event)=>{
        setRelatives(event.target.value);
        if (event.target.value === "Other") {
            setOtherRelativeOccupation(true);
          
        } else {
            setOtherRelativeOccupation(false);
        }
    }
   


    const handleMembersChange = (event) => {
        setfamilyMembers(event.target.value);
    }

    const handleSiblingChange = (event) => {
        setSiblings(event.target.value)
    }
    const handleBplCardChange = (event) => {
        setBplCard(event.target.value)
    }

    const handleMotherOccupationChange = (event) => {
        setMotherOccupation(event.target.value)
        if (event.target.value === "Other") {
            setOtherMotherOccupation(true);
        } else {
            setOtherMotherOccupation(false);
        }
    }
    const handleHouseTypeChange = (event) => {
        setHouseType(event.target.value)
    }
    

    const handleOtherFatherOccupationChange = (event) => {
        setOtherFOccupation(event.target.value);
        console.log(event.target.name,event.target.value)
        
    };

    const handleOtherMotherOccupationChange = (event) => {
        setOtherMOccupation(event.target.value);
        console.log(event.target.name,event.target.value)
        
    };

    const handleOtherRelativeOccupation = (event) => {
        setOtherROccupation(event.target.value);
        console.log(event.target.name,event.target.value)
        
    };

    const handleFatherOcuupationChange = (event) => {
        setFatherOccupation(event.target.value);
        if (event.target.value === "Other") {
            setOtherFatherOccupation(true);
          
        } else {
            setOtherFatherOccupation(false);
        }
    };




    return (
        <form>
            <Card style={{width:"90%",marginLeft:"60px"}}>
                <CardContent>
                    <Typography class="prose lg:prose-xl" variant="h5" component="h2" style={{ "color": "darkgreen", "margin-top": "10px", "margin-bottom": "10px" }}>
                        Family Details
                    </Typography>

                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                fullWidth
                                label=" Father Name"
                                value={fatherName}
                                onChange={(e) => setFatherName((e.target.value))
                                }
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel id="family-income-label">Family Income</InputLabel>
                                <Select
                                    label="Family income"
                                    labelId="family-income-label"
                                    id="family-income"
                                    value={income}
                                    onChange={handleIncomeChange}
                                >
                                    {incomeTiers.map((tier) => (
                                        <MenuItem key={tier.value} value={tier.value}>
                                            {tier.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel id="deceased-label">Mention if Mother/Father deceased</InputLabel>
                                <Select
                                    labelId="caste-label"
                                    label="select an option"
                                    id="caste"
                                    value={deceased}
                                    onChange={handleDeceasedChange}
                                >
                                    <MenuItem value={'yes'}>yes</MenuItem>
                                    <MenuItem value={'no'}>no</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel>Number of family members</InputLabel>
                                <Select label="select an option" value={familyMembers} onChange={handleMembersChange}>
                                    {familyNumbers.map((members) => (
                                        <MenuItem key={members} value={members}>
                                            {members}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                required
                                fullWidth
                                label=" Mother's Mobile Number"
                                value={mothermobile}
                                onChange={(e) => setMotherMobile((e.target.value))
                                }
                            />
                        </Grid>


                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel>Number of siblings(Brothers and Sisters)</InputLabel>
                                <Select label="select an option" value={siblings} onChange={handleSiblingChange}>
                                    {allSiblings.map((siblings) => (
                                        <MenuItem key={siblings} value={siblings}>
                                            {siblings}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel id="deceased-label">House Type</InputLabel>
                                <Select
                                    labelId="houseType-label"
                                    label="select an option"
                                    id="house"
                                    value={houseType}
                                    onChange={handleHouseTypeChange}
                                >
                                    {HouseType.map((house) => (
                                        <MenuItem key={house} value={house}>
                                            {house}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel id="deceased-label">Father Occupation</InputLabel>
                                <Select
                                    labelId="fatherOccupation-label"
                                    label="select an option"
                                    id="fatherOccupation"
                                    value={fatherOccupation}
                                    onChange={handleFatherOcuupationChange}
                                >
                                    {FatherOccupation.map((Foccupation) => (
                                        <MenuItem key={Foccupation} value={Foccupation}>
                                            {Foccupation}
                                        </MenuItem>
                                    ))}
                                    <MenuItem value="Other">Other</MenuItem>
                                </Select>
                            </FormControl>
                            {otherFatherOccupation && (
                                <FormControl fullWidth>
                                    <TextField style={{ marginTop: '20px' }}
                                        required
                                        fullWidth
                                        label="Other Occupation"
                                        value={otherFOccupation}
                                        onChange={handleOtherFatherOccupationChange}
                                    />
                                </FormControl>
                            )}
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel id="deceased-label">Mother Occupation</InputLabel>
                                <Select
                                    labelId="motherOccupation-label"
                                    label="select an option"
                                    id="motherOccupation"
                                    value={motherOccupation}
                                    onChange={handleMotherOccupationChange}
                                >
                                    {MotherOccupation.map((occupation) => (
                                        <MenuItem key={occupation} value={occupation}>
                                            {occupation}
                                        </MenuItem>
                                    ))}
                                </Select>
                                </FormControl>
                                    {otherMotherOccupation && (
                                        <FormControl fullWidth>
                                            <TextField style={{ marginTop: '20px' }}
                                                required
                                                fullWidth
                                                label="Other Occupation"
                                                value={otherMOccupation}
                                                onChange={handleOtherMotherOccupationChange}
                                            />
                                        </FormControl>
                                    )}
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel id="relatives-label">Close Relatives in</InputLabel>
                                <Select
                                    labelId="relatives-occupation"
                                    label="select an option"
                                    id="relatives"
                                    value={relatives}
                                    onChange={handleRelativesChange}
                                >
                                    {RelativesOccupation.map((relative) => (
                                        <MenuItem key={relative} value={relative}>
                                            {relative}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            {otherRelativeOccupation && (
                                <FormControl fullWidth>
                                <TextField style={{ marginTop: '20px' }}
                                    required
                                    fullWidth
                                    label="Other Occupation"
                                    value={otherROccupation}
                                    onChange={handleOtherRelativeOccupation}
                                />
                            </FormControl>
                            )}
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <FormControl fullWidth>
                                <InputLabel id="bpl-label">Do you have a BPL/Similar card?</InputLabel>
                                <Select
                                    labelId="bpl-label"
                                    label="select an option"
                                    id="bplCard"
                                    value={bplCard}
                                    onChange={handleBplCardChange}
                                >
                                    <MenuItem value={'yes'}>yes</MenuItem>
                                    <MenuItem value={'no'}>no</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <FormControl fullWidth style={{flexDirection:"row-reverse"}}>
                    
                    <button className="secondary-button" style={{marginLeft:'10px'}} onClick={()=>setStep(3)}>Next</button>
                    <button className="secondary-button" style={{marginLeft:'auto'}} onClick={()=>setStep(2)}>Prev</button>
                    </FormControl>
                </CardContent>
            </Card>
        </form>

    );
};

export default Familydetails



