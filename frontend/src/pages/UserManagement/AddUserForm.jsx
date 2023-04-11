import { FormGroup, FormControl, InputLabel, Input, Typography, MenuItem , styled, Button, Grid} from "@mui/material";
import React, { useState } from 'react';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import * as yup from 'yup';
//import { AddUserForm } from "../service/api";
import '../general/Homepage.css'



const Container = styled(FormGroup)`
    background-color: #FAF9F6;
    padding: 1%;
    width: 50%;
    margin: 5% auto 0 auto;
`
const ContInp = styled(FormControl)`
    margin-top: 20px;
`
const ContSel = styled(Select)`
    margin-top: 40px;
`
const ContInpSc = styled(FormControl)`
    margin-top: 20px;
`




const defaultUser = {

}


    const AddUserForm = () => {
    
        const [typeValue, setTypeValue] = React.useState("1");
        const [user, setUser] = useState(defaultUser);
        const handleChange = (event, newValue) => {
            setTypeValue(newValue);
            
        };

        const onValueChange = (e) =>{
            // console.log(e.target.name, e.target.value)
            setUser({...user, [e.target.name]:e.target.value})
            console.log(user)
        }
        const addUserDetails = async ()=>{
            await AddUserForm(user)
        }

        


      return (
        <Container>
          
          <Typography variant="h4">Add User</Typography>
          
            <ContInp>
            <InputLabel>User Type</InputLabel>    
            <ContSel
            defaultValue= "1"
            onChange={handleChange} name="uType">
              <Option value="1">Internal User</Option>
              <Option value="2">External User</Option>
            </ContSel>
          </ContInp>
          {typeValue === "1" ? (
            <FormGroup>
            <FormControl>
                <InputLabel>Organization Name</InputLabel>
                <ContSel name="oType" onChange={(e)=> onValueChange(e)}>
                    <Option value="tangent tech">Tangent Tech Solutions</Option>
                    <Option value="India Now">India Now Foundation</Option>
                </ContSel>
            </FormControl>
            <FormControl>
            <InputLabel>System Role</InputLabel>
            <ContSel name="sRole" onChange={(e)=> onValueChange(e)}>
                <Option value="business admin">Business Admin</Option>
                <Option value="devloper">Developer</Option>
                <Option value="interviewer">Interviewer</Option>
                <Option value="project coordinator">Project Coordinator</Option>
            </ContSel>
        </FormControl></FormGroup>
          ):(
            <FormGroup>
            <FormControl>
                <InputLabel>Organization Name</InputLabel>
                <ContSel name="oType" onChange={(e)=> onValueChange(e)}>
                    <Option value="school">School</Option>
                </ContSel>
            </FormControl>
            <FormControl>
            <InputLabel>System Role</InputLabel>
            <ContSel name="sRole" onChange={(e)=> onValueChange(e)}>
                <Option value="principal">Principal</Option>
            </ContSel>
        </FormControl></FormGroup>
          )}
          <ContInp>
            <InputLabel>Title</InputLabel>
            <Input name="title" onChange={(e)=> onValueChange(e)}/>
          </ContInp>
          <ContInp>
            <InputLabel>First Name</InputLabel>
            <Input name="fName" onChange={(e)=> onValueChange(e)} />
          </ContInp>
          <ContInp>
            <InputLabel>Middle Name</InputLabel>
            <Input name="mName" onChange={(e)=> onValueChange(e)}/>
          </ContInp>
          <ContInp>
            <InputLabel>Last Name</InputLabel>
            <Input name="lName" onChange={(e)=> onValueChange(e)} />
          </ContInp>
          <ContInp>
            <InputLabel>Phone</InputLabel>
            <Input name="phone" onChange={(e)=> onValueChange(e)} />
          </ContInp>
      
          {typeValue === "2" ? (
            <FormGroup>
                <ContInpSc>
                <InputLabel>School Email</InputLabel>
                <Input name="sEmail" onChange={(e)=> onValueChange(e)}/>
                </ContInpSc>
                <ContInpSc>
                <InputLabel>Principal Mobile No</InputLabel>
                <Input name="principalNo" onChange={(e)=> onValueChange(e)} />
                </ContInpSc>
                <ContInpSc>
                <InputLabel>School Landline</InputLabel>
                <Input name="sLandline" onChange={(e)=> onValueChange(e)}/>
                </ContInpSc>
                <ContInpSc>
                <InputLabel>School State</InputLabel>
                <Input name="sState" onChange={(e)=> onValueChange(e)}/>
                </ContInpSc>
                <ContInpSc>
                <InputLabel>School District</InputLabel>
                <Input name="sDistrict" onChange={(e)=> onValueChange(e)}/>
                </ContInpSc>
    
            </FormGroup>
            
          ):(
            <FormGroup>
                <ContInpSc>
                <InputLabel>Email</InputLabel>
                <Input name="email" onChange={(e)=> onValueChange(e)}/>
            </ContInpSc>
            </FormGroup>

          )}
        <ContInp>
            <button className="secondary-button" style={{ width: '100px', marginLeft: 'auto' }} size="large" variant="contained" color="success" onClick={()=> addUserDetails()}>Submit</button>
        </ContInp>
        </Container>
      );
    }

export default AddUserForm;