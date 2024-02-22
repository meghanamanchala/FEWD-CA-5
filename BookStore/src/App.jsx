// eslint-disable-next-line no-unused-vars
import React from "react";
// import { Routes, Route } from "react-router-dom";
import './App.css';
// import Navbar from "./Components/Navbar/Navbar";
// import Books from "./Components/Books/Books.jsx";
// import RegistrationForm from "./Registration/RegistrationForm.jsx";
// import Info from "./Components/Info/Info.jsx";
import AllRoutes from "./Components/Routes/AllRoutes.jsx";
function App() {
  // const [searchQuery, setSearchQuery] = useState("");

  return (
//     <Routes> 
//     <Route path='/' element={<>
//         <Navbar setSearchQuery={setSearchQuery} />
//         <Books searchQuery={searchQuery} />
//     </>} /> 
//     <Route path='/register' element={<div className="form"><RegistrationForm /></div>} />
// <Route path='/info' element={<Info />} />
    
//     </Routes>
<>
<AllRoutes />
</>
  );
}

export default App;
