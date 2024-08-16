import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import './App.css';
// import BlogPage from './components/dashboard/blog/blog';
import Layout from './components/dashboard/layout/layout';
import Card from './components/dashboard/adminblogs/doctorcard';
import DoctorProfile from './components/dashboard/adminblogs/doctorprofile';
import AdminBlogUploadForm from './components/dashboard/AdminBlogUploadForm/AdminBlogUploadForm';
import InsuranceManagement from './components/dashboard/insurence/insurance';
import DoctorRow from './components/dashboard/doctorproflie/dctorprofile';
import EditDoctor from './components/dashboard/doctorproflie/doctoredit';
import Viewadminblog from './components/dashboard/Viewadminblog/Viewadminblog';
import DoctorSubscription from './components/dashboard/DoctorSubscription/DoctorSubscription';
import PatientRow from './components/dashboard/patient/Patientsprofile';
import EditPatient from './components/dashboard/patient/Patientsprofiledit';

function App() {
  return (
    <Router>
    {/* <BlogPage/> */}
      <Routes> 
      <Route path="/" element={< Layout/>} >

        <Route path="/doctorprofile" element={<Card />} />
        <Route path="/profile/:doctorId" element={<DoctorProfile />} />
        <Route path="/doctorblog" element={<AdminBlogUploadForm />} />
        <Route path="/InsuranceManagement" element={< InsuranceManagement/>} />
        <Route path="/ViewDoctors" element={<DoctorRow />} />
        <Route path="/edit-doctor" element={<EditDoctor />} />
        <Route path="/Patientprofile" element={< PatientRow/>} />
        <Route path="/edit-patient" element={< EditPatient/>} />
        <Route path="/DoctorSubscription" element={< DoctorSubscription/>} />
        <Route path="/Viewadminblog" element={< Viewadminblog/>} />
        

        </Route>
      </Routes>

    </Router>
  );
}

export default App;
