import React, { useContext } from 'react'
import { Typography, Stepper, StepLabel, Step } from '@mui/material'
import Generaldetails from './Generaldetails'
import Familydetails from './Familydetails'
import Educationdetails from './Educationdetails'
import { multiStepContext } from '../../StepContext'
import Addressdetails from './Addressdetails'
import Additionaldetails from './Additionaldetails'



const Studentfinalform = () => {

  const { currentStep } = useContext(multiStepContext)
  function showStep(step) {
    switch (step) {
      case 1:
        return <Generaldetails />

      case 2:
        return <Familydetails />

      case 3:
        return <Educationdetails />

      case 4:
        return <Addressdetails />

      case 5:
        return <Additionaldetails />
    }
  }

  return (
    <>

      <div>
        <h1 className='secondary-heading' style={{ color: "#354E6C",textAlign:'center', marginTop:"30px"}}>
          Student registration form
        </h1>


        <div className="center-stepper" style={{ marginLeft: "290px", marginTop: '40px', marginBottom: '70px', color: "green", width: "60%" }}>
          <Stepper style={{ justifyContent: "center", alignItems: "center" }} activeStep={currentStep - 1} orientation='horizontal'>
            <Step>
              <StepLabel style={{ flexDirection: "column", alignContent: 'center', justifyContent: 'center' }}>
                general details
              </StepLabel>
            </Step>
            <Step>
              <StepLabel style={{ flexDirection: "column", alignContent: 'center', justifyContent: 'center' }}>
                family details
              </StepLabel>
            </Step>


            <Step>
              <StepLabel style={{ flexDirection: "column", alignContent: 'center', justifyContent: 'center' }}>
                education details
              </StepLabel>
            </Step>

            <Step>
              <StepLabel style={{ flexDirection: "column", alignContent: 'center', justifyContent: 'center' }}>
                address details
              </StepLabel>
            </Step>

            <Step>
              <StepLabel style={{ flexDirection: "column", alignContent: 'center', justifyContent: 'center' }}>
                Submit
              </StepLabel>
            </Step>

          </Stepper>
        </div>
        {/* <Generaldetails/>
        <br></br>
        <Familydetails/>
        <br></br>
        <Educationdetails/> */}
        {showStep(currentStep)}

      </div>
    </>

  )
}

export default Studentfinalform;
