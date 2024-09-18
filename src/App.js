// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Employee from './pages/Employee';
import Depatment from './pages/Department';
import AuthenticatedLayout from './Component/Layout/AuthenticatedLayout';
 
const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employee" element={<Employee></Employee>} />
            <Route path="/department" element={<Depatment></Depatment>} />
         </Routes>

        
      </>
   );
};
 
export default App;