import {
  NavBar, 
  Home, 
  About, 
  Courses, 
  Teacher, 
  Contact, 
  Responsables, 
  Footer, 
  SignUp, 
  SignIn, 
  RegisterFormation, 
  PrivateRoute,
  PrivateRouteUnauthencited,
  StudentFormation
} from "./components/index";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>


        <Switch>
          <Route exact path={"/"}>
            <div className="font-Poppins bg-PrimaryBlue">
              <NavBar/>
              <Home/>
              <About/>
              <Courses/>
              <Teacher/>
              <Responsables />
              <Contact/>
              <Footer/>
            </div>
          </Route>

          <PrivateRouteUnauthencited path={"/signup"} >
            <SignUp /> 
          </PrivateRouteUnauthencited>

          <PrivateRouteUnauthencited path={"/signin"} >
            <SignIn />
          </PrivateRouteUnauthencited>

          <PrivateRoute path={"/formation"} >
            <RegisterFormation />
          </PrivateRoute>

          <PrivateRoute path={"/mes/formations"} >
            <StudentFormation />
          </PrivateRoute>
        </Switch>


        
      
      
    </Router>
  )
}

export default App
