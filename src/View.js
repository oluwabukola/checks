import React from 'react';
// import { TabContainer }from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import EmployeeInfo from './EmployeeInfo';
//import GuarantorInfo from './GuarantorInfo';
import Employers from './Employers';
import Results from './Results';
import Referees from './Referees';
import Guarantors from './Guarantors';
import User from './User';
import Nav from './Nav'

class View extends React.Component{
    render() {
      const params = this.props.match.params;
     
        return (
              <div className="home-page">
                    <Nav/>
              <div className="tabs">  
           
                <Tabs defaultActiveKey="Guarantor" id={`${params.id}`}>
                    <Tab eventKey="Guarantor" title="Guarantor">
                  <Guarantors id={`${params.id}`} /> 
                 </Tab>
                <Tab eventKey="Previous Employer" title="Previous Employer">
                 <Employers  id={`${params.id}`} /> 
                        </Tab>
                <Tab eventKey="Referee" title="Referee" >
                  <Referees id={`${params.id}`} /> 
                    </Tab>
                 <Tab eventKey="Result" title="Result" >
                  <Results  id={`${params.id}`} /> 
                    </Tab>
                    </Tabs>
                      </div>  
                     </div>
        
        )
    }
}

const mapStateToProps = (state) => {
    return {
        employee: state.employee.employee
    }
}

export default connect(mapStateToProps)(View);
