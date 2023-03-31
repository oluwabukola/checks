import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect,  withRouter,  } from "react-router-dom";
// import './App.css';
import Signup from './Signup';
import Login from './login';
import Home from './Home';
import Employee from './Employee';
import EmployeeForm from './EmployeeForm'
import CreateEmployee from './CreateEmployee';
import Verify from './verification/Verify';
import GuarantorForm from './GuarantorForm';
import ResultForm from './ResultForm';
import EmployerForm from './EmployerForm';
import Update from './Update';
import View from './View';
import EmployeeInfo from './EmployeeInfo';
import GuarantorInfo from './GuarantorInfo';
import EmployerInfo from './EmployerInfo';
import RefereeInfo from './RefereeInfo';

import Results from './Results';
import RefereeForm from './RefereeForm';
import ResultInfo from './ResultInfo';
import EditEmployee from './EditEmployee';
import Guarantors from './Guarantors';
import Referees from './Referees';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditEmployer from './EditEmployer';
import EditResult from './EditResult';
import EditReferee from './EditReferee';
import Employers from './Employers';
import EditGuarantor from './EditGuarantor';
import Verification from './verification/Verification';
import VerifyGuarantors from './verification/VerifyGuarantors';
import VerifyPrevEmployers from './verification/VerifyPrevEmployers';
import VerifyAddress from './verification/VerifyAddress';
import VerifyReferees from './verification/VerifyReferees';
import Details from './verification/Details';
import Conditions from './settings/Conditions';
import Users from './settings/Users';
import Roles from './settings/Roles';
import Permissions from './settings/Permissions';
import UserDetails from './settings/UserDetails';
import GuarantorDetails from './verification/GuarantorDetails';
import EmployerDetails from './verification/EmployerDetails';
import RefereeDetails from './verification/RefereeDetails';
import EmployeeDetails from './verification/EmployeeDetails';
import ResultDetails from './verification/ResultDetails';
import Verified from './verification/Verified';
import { useSelector } from 'react-redux';
import { loginUser} from './store/actions/loginActions';
import Nav from './Nav';
import { LandingPage } from './LandingPage/Landingpage';
import GlobalStyle from './globalStyles';
import Dex from './ExternalComponent/index'

import { connect } from 'react-redux';

function PrivateRoute({ component : Component, ...rest }) {
 const user = useSelector(state => state.login.login);

  return (
    <Route
      {...rest}
      render={props => (
        user !== null ?
          <Component {...props} />
          : <Redirect to="/login" />
      )}
      />
  );
}

function Internal() {

  return (

    <Router>
      <GlobalStyle />
      <Switch>
        <PrivateRoute path="/internal/home" exact component={Home} >
         </PrivateRoute>
      
        <PrivateRoute path='/employeeForm' component={EmployeeForm}>
        </PrivateRoute>

        <PrivateRoute path='/internal/createEmployee' component={CreateEmployee}>
        </PrivateRoute>
          
        <PrivateRoute path='/getConditions' component={Conditions}>
          </PrivateRoute>
       
        <PrivateRoute path='/users' component={Users}>
        </PrivateRoute>

        <PrivateRoute path='/roles' component={Roles}>
        </PrivateRoute>

        <PrivateRoute path='/permission/:id/:name' component={Permissions}>
        </PrivateRoute>
        
        <PrivateRoute path='/userDetails/:id' component={UserDetails}>
      </PrivateRoute>
      
        <PrivateRoute path='/employee' component={Employee}>
        </PrivateRoute>
         
        <PrivateRoute path='/internal/verified' >
          <Verified />
        </PrivateRoute>

        <PrivateRoute  path='/guarantorForm/:id' component={GuarantorForm}>
       </PrivateRoute>
        
        <PrivateRoute path='/refereeForm/:id' component={RefereeForm}>
        </PrivateRoute>
        
        <PrivateRoute path='/employerForm/:id' component={EmployerForm}>
        </PrivateRoute >
        
        <PrivateRoute path='/resultForm/:id' component={ResultForm}>
        </PrivateRoute>

        <PrivateRoute path='/update/:id' component={Update}>
        </PrivateRoute>
        
         <PrivateRoute path='/view/:id' component={View }>
          </PrivateRoute> 
        {/* <PrivateRoute path='/regionView/:id'>
          <RegionView />
        </PrivateRoute> */}
        
        <PrivateRoute   path='/employeeInfo/:id' component={EmployeeInfo}>
        </PrivateRoute> 
        <PrivateRoute path='/refereeInfo/:id' component={RefereeInfo }>
        </PrivateRoute>
     
        <PrivateRoute path='/employerInfo/:id' component={EmployerInfo }>
        </PrivateRoute>

        <PrivateRoute path='/guarantorInfo/:id' component={GuarantorInfo}>
          </PrivateRoute>
        
        <PrivateRoute path='/resultInfo/:id' component={ResultInfo}>
        </PrivateRoute>

        <PrivateRoute path='/results/:id' component={Results}>
        </PrivateRoute>

        {/* <Route path='/regionInfo/:id' component={RegionInfo}>
        </Route> */}

        <PrivateRoute path='/referees/:id' component={Referees}>
        </PrivateRoute>
        
        <PrivateRoute path='/editEmployee/:id' component={EditEmployee}>
        </PrivateRoute>
         
        <PrivateRoute path='/editReferee/:id' component={EditReferee}>
        </PrivateRoute>
        
        <PrivateRoute path='/editEmployer/:id' component={EditEmployer}>
        </PrivateRoute>
         
        <PrivateRoute path='/guarantors/:id' component={Guarantors}>  
        </PrivateRoute>

        <PrivateRoute path='/editResult/:id' component={EditResult}>
        </PrivateRoute>
         
        <PrivateRoute path='/employers/:id' component={Employers} >
        </PrivateRoute>
        
        <PrivateRoute path='/editGuarantor/:id'  component={EditGuarantor}>
        </PrivateRoute>

        <PrivateRoute path='/internal/verification' >
          <Verification /> 
        </PrivateRoute>

        <PrivateRoute path='/verify/:id' component={Verify} >
        </PrivateRoute>

        <PrivateRoute path='/verifyguarantors/:id'  component={VerifyGuarantors}>
        </PrivateRoute>

        <PrivateRoute path='/verifyprevemployers/:id' component={VerifyPrevEmployers} >
        </PrivateRoute>

        <PrivateRoute path='/verifyreferees/:id' component={VerifyReferees} >
        </PrivateRoute>

        <PrivateRoute path='/verifyAddress/:id' component={VerifyAddress} >
        </PrivateRoute>

        <PrivateRoute path='/details/:id' component={Details }>
        </PrivateRoute>
        
        <PrivateRoute path='/guarantorDetails/:id' component={GuarantorDetails} >
        </PrivateRoute>

        <PrivateRoute path='/employerDetails/:id' component={EmployerDetails} >
        </PrivateRoute>

        <PrivateRoute path='/refereeDetails/:id' component={RefereeDetails}>
        </PrivateRoute>

        <PrivateRoute path='/employeeDetails/:id' component= {EmployeeDetails}>
        </PrivateRoute>

        <PrivateRoute path='/resultDetails/:id' component={ResultDetails}>
        </PrivateRoute>

        {/* <PrivateRoute path='/internal/client' exact component={ClientList}>
            </PrivateRoute> */}
          <Dex />
        {/* <PrivateRoute  path='/internal/client' exact> */}
              {/* <Dex /> */}
        {/* </PrivateRoute> */}

       
      </Switch>
      </Router>

  );
}

const mapStateToProps = (state) => {
  
  return {
      login: state.login.login,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      loginUser: (login) => dispatch(loginUser(login))
      
  }
  
}

 export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Internal)) ;
// export default App;
