import React, { useState } from 'react'
import { createContext } from 'react';
import Studentfinalform from './pages/StudentRegister/Studentfinalform';


export const multiStepContext=createContext();
const StepContext = () => {
    const [currentStep,setStep]=useState(1);
    const [userData,setUserData]=useState([]);
    const [finalData, setFinalData]=useState([]);
  return (
    <div>
        <multiStepContext.Provider value={{currentStep,setStep,userData,setUserData,finalData,setFinalData}}>
            <Studentfinalform/>
        </multiStepContext.Provider>
     
    </div>
  )
}

export default StepContext
