import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect,  withRouter,  } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Sidebar from './Home/Home';
import Dashboard from './Dashboard/Dashboard';
import Verification from './Verification/Verification';
import Candidates from './Candidates/Candidates';
import Transaction from './Transaction/Transaction';
import EmployeeForm from './VerificationForms/EmployeeForm/EmployeeForm';
import ResultForm from './VerificationForms/ResultForm/ResultForm';
import PreviousEmployer from './VerificationForms/PreviousEmployer/PreviousEmployer';
import RefereeForm from './VerificationForms/RefereeForm/RefereeForm';
import GuarantorForm from './VerificationForms/GuarantorForm/GuarantorForm';
import ResidentialAddress from './VerificationForms/ResidentalForm/ResidentialAddress';
import HomeTown from './VerificationForms/HomeTown/HomeTown';
import Payment from './Payment/Payment';
import VerificationTypes from './VerificationType/VerificationType';
import Nysc from './VerificationForms/Nysc/Nysc';
import CreditChecks from './VerificationForms/CreditChecks/CreditChecks';
import CriminalStatus from './VerificationForms/CrimalStatus/CriminalStatus';
import FormView from './VerificationForms/FormView';
import Orders from './Orders/Order';
import { useSelector } from 'react-redux';
import CandidateInformation from './CandidateInformation/CandidateInformation';
import RefereeData from './CandidateInformation/RefereeData';
import HomeTownData from './CandidateInformation/HomeTownData';
import DataView from './CandidateInformation/DataView';
import CriminalStatusData from './CandidateInformation/CriminalStatusData';
import CreditChecksData from './CandidateInformation/CreditChecksData';
import ResultsData from './CandidateInformation/ResultsData';
import NyscData from './CandidateInformation/NyscData';
import PreviousEmployerData from './CandidateInformation/PreviousEmployerData';
import ResidentialData from './CandidateInformation/ResidentialData';
import GuarantorData from './CandidateInformation/GuarantorData';
import CandidateLogin from './CandidateSetup/CandidateLogin/CandidateLogin';
import Cart from './Verification/Cart/Cart';
import CandidatesSignup from './CandidateSetup/CandidatesSignup/CandidatesSignup';


const Index = withRouter(({location}) => {
     const login = useSelector(state => state.login.access);
     const [token, setToken] = useState(null);
     const Token = localStorage.getItem('token');
     
    return (
        <div style={{display: 'flex'}}>
            <Router>
            <div>
            <Sidebar /> 
            </div>
            <Switch>
            <div style={{    width: '100%'}}>

            {/* <Route path='/candidatesLogin' exact component={CandidateLogin}>
            </Route> */}

            {/* <Route path='/candidatesSignup/:link' exact component={CandidatesSignup}>
            </Route> */}

            <Route path='/candidatesSignup/:link' exact component={CandidatesSignup}>
            </Route>
            
            <Route path='/external/dashboard' exact component={Dashboard}>
            </Route>

            <Route path='/external/verification' exact component={Verification}>
             </Route>

             <Route path='/external/verificationType' exact component={VerificationTypes}>
             </Route>

             <Route path='/external/candidates/:order_id' exact component={Candidates}>
             </Route>

             <Route path='/external/candidatesInformation/:employee_id' exact component={CandidateInformation}>
             </Route>

             <Route path='/external/orders/:user_id/:order_id' exact component={Orders}>
            </Route>

             <Route path='/eternal/transaction' exact component={Transaction}>
            </Route>

            {/* <Route path='/external/employee_signup/:link' exact component={EmployeeForm}>
            </Route> */}

            <Route path='/resultForm/:order_id/:company_id/:employee_id' exact component={ResultForm}>
            </Route>

            <Route path='/previousEmployerForm/:order_id/:company_id/:employee_id' exact component={PreviousEmployer}>
            </Route>

            <Route path='/refereeForm/:order_id/:company_id/:employee_id' exact component={RefereeForm}>
            </Route>

            <Route path='/guarantorForm/:order_id/:company_id/:employee_id' exact component={GuarantorForm}>
            </Route>

            <Route path='/external/payment/:user_id/:order_id' exact component={Payment}>
            </Route>

            <Route path='/residentialAddress/:order_id/:company_id/:employee_id' exact component={ResidentialAddress}>
            </Route>
            <Route path='/nysc/:order_id/:company_id/:employee_id' exact component={Nysc}>
            </Route>

            <Route path='/homeTown/:order_id/:company_id/:employee_id' exact component={HomeTown}>
            </Route>

            <Route path='/creditChecks/:order_id/:company_id/:employee_id' exact component={CreditChecks}>
            </Route>

            <Route path='/criminalStatus/:order_id/:company_id/:employee_id' exact component={CriminalStatus}>
            </Route>

            {/* <Route path='/formView/:order_id/:company_id/:employee_id' exact component={FormView}>
            </Route> */}

            <Route path='/refereeData/:id' exact component={RefereeData}>
            </Route>
            
            <Route path='/homeTownData/:id' exact component={HomeTownData}>
            </Route>

            <Route path='/criminalStatusData' exact component={CriminalStatusData}>
            </Route>

            <Route path='/creditChecksData' exact component={CreditChecksData}>
            </Route>

            <Route path='/resultsData/:id' exact component={ResultsData}>
            </Route>

            <Route path='/nyscData' exact component={NyscData}>
            </Route>

            <Route path='/previousEmployerData' exact component={PreviousEmployerData}>
            </Route>

            <Route path='/residentialData' exact component={ResidentialData}>
            </Route>

            <Route path='/guarantorData' exact component={GuarantorData}>
            </Route>

            <Route path='/dataView' exact component={DataView}>
            </Route>
            
            <Route path='/cart' exact component={Cart}>
            </Route>

             </div>
            </Switch>
        </Router>
        </div>
    )
}
)

export default Index
