import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { oneEmployee, displayCandidate } from '../store/actions/verificationAction';
import Nav from '../Nav';


class EmployeeDetails extends React.Component{
    constructor(props) {
        super(props);
    }
    async componentDidMount() {
        const data = this.props.match.params.id;
       
       await this.props.oneEmployee(data)
       
    }

    handleBack = (event) => {
        const params = this.props.match.params.id;
        event.preventDefault();
         this.props.history.push('/verification');
    }
    render() {
        const { employee} = this.props;
        

        return (
            <div className="home-page">
            
                <Nav />
                <div className="rest2">
              
                <div className="card">
                <div className="content">
                        <div className="created"><h6>Title</h6> </div>
                        <div className="created">{employee.title}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>First Name</h6> </div>
                        <div className="created">{employee.first_name}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Other Name</h6> </div>
                        <div className="created">{ employee.other_name}</div>
                    </div>
                    <hr/>

                    <div className="content">
                        <div className="created"><h6>Last Name</h6></div>
                        <div className="created">{employee.last_name}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Email</h6></div>
                        <div className="created">{ employee.email}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Address</h6></div>
                        <div className="created">{ employee.address}</div>
                    </div>
                    <hr/>
                    
                    <div className="content">
                        <div className="created"><h6>Cuttent Town</h6> </div>
                        <div className="created">{employee.currentTown}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Current State</h6> </div>
                        <div className="created">{employee.currentState}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Date of Birth</h6></div>
                    <div className="created">{employee.date_of_birth}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Designation</h6></div>
                        <div className="created">{employee.designation}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Employment Date</h6></div>
                        <div className="created">{employee.employmentdate}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Permanent Address</h6></div>
                        <div className="created">{ employee.permanentAddress}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Permanent Town</h6></div>
                        <div className="created">{ employee.permanentTown}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Permanent State</h6></div>
                        <div className="created">{ employee.permanentState}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Phone Number</h6></div>
                        <div className="created">{ employee.phone_number}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Preferred Location</h6></div>
                        <div className="created">{ employee.preferredLocation}</div>
                    </div>

                </div>
                </div>
                </div>
        );
    }
}
const mapStateToProps = (state) => {
    
    return {
        employee: state.verification.oneEmployee,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
        oneEmployee: (employee) => dispatch(oneEmployee(employee)),
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetails);