import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route,  withRouter,  } from "react-router-dom";
import ClientList from './ClientList/ClientList';
import Nav from '../Nav';
import AllCandidates from './ClientData/AllCandidates';
import CompanyRequest from './CompanyRequest/CompanyRequest';
import LinkedCandidates from './LinkedCandidates/LinkedCandidates';
import Verify from './Verify/Verify';


const Dex = withRouter(({location}) => {
    
    return (
        <div style={{display: 'flex'}}>
        <Router>
        <div >
           <Nav /> 
            </div>
            <Switch>
            <div style={{  width: '100%'}}>

            <Route path='/internal/client' exact component={ClientList}>
            </Route>

            <Route path='/internal/allCandidates/:user_id/:order_id' exact component={AllCandidates}>
            </Route>

            <Route path ='/internal/companyRequest/:user_id' exact component={CompanyRequest}>
            </Route>

            <Route path = '/internal/linkedCandidates/:order_id/:company_id/:employee_id' exact component={LinkedCandidates}>
            </Route>

            <Route path = '/veryfiy' exact component={Verify}>
            </Route>
            
             </div>
            </Switch>
        </Router>
        </div>
    )
}
)

export default withRouter(Dex);
