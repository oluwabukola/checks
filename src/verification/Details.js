import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'react-bootstrap';
import Results from '../Results';
import GuarantorDetails from './GuarantorDetails';
import EmployerDetails from './EmployerDetails';
import RefereeDetails from './RefereeDetails';
import ResultDetails from './ResultDetails';
import EmployeeDetails from './EmployeeDetails';
import User from '../User';



class Details extends React.Component{
    componentDidMount() {
        const params = this.props.match.params.id;
    }
    
    render() {
        const params = this.props.match.params;
        return (
            <div className="home-page">
        <Nav />
                <div className="rest">
               
                <Tabs defaultActiveKey="Guarantor" id={`${params.id}`} >
                    <Tab eventKey="Guarantor" title="Guarantor">
                  <GuarantorDetails id ={`${params.id}`} /> 
                 </Tab>
                 <Tab eventKey="Previous Employer" title="Previous Employer">
                 <EmployerDetails id ={`${params.id}`} /> 
                        </Tab>
                   <Tab eventKey="Referee" title="Referee">
                 <RefereeDetails id ={`${params.id}`} /> 
                    </Tab>
                 <Tab eventKey="Employee" title="Employee" >
                  <EmployeeDetails id={`${params.id}`} /> 
                        </Tab>

                    <Tab eventKey="Result" title="Result">
                 <ResultDetails id ={`${params.id}`} /> 
                    </Tab>
               
                    </Tabs>
              
        
                </div>
                </div>
        )
    }
}
const mapStateToProps = (state) => {
    
    return {
        candidate: state.verification.candidate,
    }
}
export default connect(mapStateToProps)(Details);