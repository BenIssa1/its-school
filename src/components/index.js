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
import { ForgotPassword } from "./ResetPassword/ForgortPassword";
import { ResetPassword } from "./ResetPassword/ResetPassword";
import { PrivateRoute } from "../utils/PrivateRoute";
import { PrivateRouteUnauthencited } from "../utils/PrivateRouteUnauthencited";
import { StudentFormation } from "../components/formation/StudentFormation";
import Profile from "../components/profile/Profile";
import { PrivateRouteAdmin } from "../utils/PrivateRouteAdmin";
import { AdminStudentFormation } from "../components/formation/AdminStudentFormation";
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
    StudentFormation,
    Profile,
    PrivateRouteAdmin,
    AdminStudentFormation,
    ForgotPassword,
    ResetPassword
}