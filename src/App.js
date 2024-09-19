// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Employee from './pages/Employee';
import Depatment from './pages/Department';
import Request from './pages/Request'
import Masterlist from './pages/Masterllist';
// import AuthenticatedLayout from './Component/Layout/AuthenticatedLayout';
 
const App = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/employee" element={<Employee></Employee>} />
            <Route path="/department" element={<Depatment></Depatment>} />
            <Route path="/request" element={<Request></Request>} />
            <Route path="/masterlist" element={<Masterlist></Masterlist>} />
         </Routes>

        
      </>
   );
};
 
export default App;