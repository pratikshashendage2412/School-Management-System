import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './Component/SignUp/SignUp';
import Login from './Component/login/Login'; 
import Class from './Component/Teachersection/classes/Class';
import Teacher from './Component/Teachersection/Teacher';
import Profile from './Component/Teachersection/profiles/Profile';
import Contact from './Component/Teachersection/contact/Contact';
import Timetable from './Component/Teachersection/timetable/Timetable';
import Student from './Component/Student/Student';
import Assignments from './Component/Student/Assignments';
import Form from './Component/Student/Form';
import Query from './Component/Student/Query';

import Fees from './Component/parents/Fees';
import Exam from './Component/parents/Exam';
import Result from './Component/parents/Result';
import Parent from './Component/parents/Parent';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Teacher" element={<Teacher />} />
         <Route path="/Class/:className" element={<Class />} />
        <Route path="/Profile" element={<Profile></Profile>} />
        <Route path="/" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path='/Timetable'element={<Timetable></Timetable>}/>
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Student" element={<Student/>} />
        <Route path="/Assignments" element={<Assignments/>} />
        <Route path="/Test" element={<Form/>} />
        <Route path="/Query" element={<Query/>} />
        {/* parent routing */}
        <Route path='/Parent' element={<Parent/>}/>
        <Route path='/Fees' element={< Fees/>}/>
        <Route path='/Exam' element={< Exam/>}/>
        <Route path='/Result' element={< Result/>}/>
        <Route path='/Timetable' element={< Timetable/>}/>
       
      </Routes>
    </Router>
  );
}

export default App;
