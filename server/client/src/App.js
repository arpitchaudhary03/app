import NavBar from "./components/NavBar";
import CrudApp from "./components/CrudApp";
import AllUsers from "./components/AllUsers";
import AddUser from "./components/AddUser";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NotFound from "./components/NotFound";
import EditUser from "./components/EditUser";




function App() {
  return ( 
    <BrowserRouter>    
     <NavBar />
     <Routes>
     <Route path="/" element={<CrudApp />} />
     <Route path="/all" element={<AllUsers />} />
     <Route path="/add" element={<AddUser />} /> 
     <Route path="/edit/:id" element={<EditUser />} /> 
     <Route path="*" element={<NotFound />} />    
     </Routes>
     </BrowserRouter>
   
  );
}

export default App;
