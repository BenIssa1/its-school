import NavBar from "./NavBar/NavBar";
import About from "./container/About";
import Home from "./container/Home";
import Contact from "./container/Contact";
import Footer from "./container/Footer";
import Teacher from "./container/Teacher";
import Responsables from "./container/Responsables";
import Courses from "./container/courses/Courses";
import SignUp from "./Register/SignUp";
import RegisterFormation from "./RegisterFormation/RegisterFormation";
import { SignIn } from "./SignIn/SignIn";
import { PrivateRoute } from "../utils/PrivateRoute";
import { PrivateRouteUnauthencited } from "../utils/PrivateRouteUnauthencited";
import { StudentFormation } from "../components/formation/StudentFormation";
export {
    NavBar, 
    About, 
    Home, 
    Contact, 
    Footer, 
    Teacher, 
    Responsables, 
    Courses, 
    SignUp, 
    SignIn, 
    RegisterFormation,
    PrivateRoute,
    PrivateRouteUnauthencited,
    StudentFormation
}