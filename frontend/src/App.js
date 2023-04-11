import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import InterviewerDashboard from './pages/Interviewer/InterviewerDashboard';
import StudentFinalForm from './pages/StudentRegister/Studentfinalform'
import AskSchoolCode from './pages/StudentRegister/AskSchoolCode';
import Questionnaire from './pages/StudentRegister/Questionnaire';
import AddUserForm from './pages/UserManagement/AddUserForm';
// import SimpleTable from './pages/UserManagement/externalusers';
// import EnhancedTable from './pages/UserManagement/internalusers';

import EnhancedTable from './pages/UserManagement/ExternalUser';
import Homepage from './pages/general/Homepage';
import Login from './pages/general/Login';
import Dashboard from './pages/BusinessAdmin/Dashboard'; 
import InternalUserTable from './pages/UserManagement/InternalUser';




function App() {
  return (
    
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Homepage/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/interview' element={<InterviewerDashboard/>}/>
      <Route path='/student-register' element={<StudentFinalForm/>}/>
      <Route path='/askcode' element={<AskSchoolCode/>}/>
      <Route path='/questions' element={<Questionnaire/>}/>
      <Route path='/adduser' element={<AddUserForm/>}/>
      <Route path='/internaluser' element={<InternalUserTable/>}/>
      <Route path='/externaluser' element={<EnhancedTable/>}/>

      
      </Routes>
      </BrowserRouter>
      
    </div>
   
   
  );
}

export default App;
