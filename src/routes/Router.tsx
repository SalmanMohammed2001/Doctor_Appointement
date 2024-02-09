import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home.tsx";
import Doctors from "../pages/Doctors/Doctors.tsx";
import DoctorsDetails from "../pages/Doctors/DoctorsDetails.tsx";
import Login from "../pages/Login.tsx";
import Signup from "../pages/Signup.tsx";
import Contact from "../pages/Contact.tsx";
import Service from "../pages/Service.tsx";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/home"} element={<Home/>}/>
                <Route path={"/doctors"} element={<Doctors/>}/>
                <Route path={"/doctors/:id"} element={<DoctorsDetails/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/register"} element={<Signup/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
                <Route path={"/service"} element={<Service/>}/>
            </Routes>
        </div>
    );
};

export default Router;