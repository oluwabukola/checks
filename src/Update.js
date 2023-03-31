import React from 'react';
// import { TabContainer }from 'react-bootstrap';
import { Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import EmployerForm from './EmployerForm';
import GuarantorForm from './GuarantorForm';
import ResultForm from './ResultForm';
import RefereeForm from './RefereeForm';
import User from './User';
import Nav from './Nav';
import { createEmployee } from './store/actions/employeeActions';

class Update extends React.Component{
    render() {
        const params = this.props.match.params;
  
        
        return (
            <div className="home-page">
               
                <Nav />
                <div className="tabs">
                <Tabs defaultActiveKey="Guarantor Form" id="uncontrolled-tab-example">
                <Tab eventKey="Guarantor Form" title="Guarantor Form">
                 <GuarantorForm id={`${params.id}`} />
                 </Tab>
                <Tab eventKey="Previous Employer" title="Previous Employer">
                 <EmployerForm  id={`${params.id}`} />
                    </Tab>
                 <Tab eventKey="Result Form" title="Result Form" >
                  <ResultForm  id={`${params.id}`} />
                        </Tab>
                        <Tab eventKey="Referee Form" title="Referee Form" >
                  <RefereeForm  id={`${params.id}`} />
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

export default connect(mapStateToProps)(Update);
