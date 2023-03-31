import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect,  withRouter,  } from "react-router-dom";
import './App.css';
import Index from './Compenet';
import Internal from './Internal';
import Login from './Compenet/Login/Login';
import RegisterExternal from './Compenet/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './globalStyles';
import CandidateLogin from './Compenet/CandidateSetup/CandidateLogin/CandidateLogin';
import FormView from './Compenet/VerificationForms/FormView';
import EmployeeForm from './Compenet/VerificationForms/EmployeeForm/EmployeeForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
        return (
               <Router>
                   <ToastContainer/>
                    <GlobalStyle />

                <Switch>
            <Route  path='/'  exact component={Login} >
            </Route>

            <Route path='/register' exact  component={RegisterExternal}>
            </Route>

            <Route path='/external/employee_signup/:link' exact component={EmployeeForm}>
            </Route>

            <Route path='/candidatesLogin' exact component={CandidateLogin}>
            </Route>

            <Route path='/formView/:order_id/:company_id/:employee_id' exact component={FormView}>
            </Route>
            <Route  path ='/external' >
            <Index exact />
            </Route>
            <Route path='/internal'> 
            <Internal exact />
     </Route> 
</Switch>
</Router>    

)
}
export default (App) ;