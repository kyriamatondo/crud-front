import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import NewUser from "./components/NewUser";
import Navbar from "./components/Navbar";
import EditUser from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/users" element={<Users/>}></Route>
            <Route path="/newuser" element={<NewUser/>}></Route>
            <Route path="/edituser/:id" element={<EditUser/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
