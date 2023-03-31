import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { displayEmployee } from './store/actions/displayActions';

import Nav from './Nav';


class EmployeeInfo extends React.Component{
    constructor(props) {
        super(props);
       
    }
   async componentDidMount() {
        
        const data = this.props.match.params.id;
      await  this.props.displayEmployee(data)
        
    }
    
    render() {
        const { employee } = this.props;
        const data = employee.employee_id
       
    
        return (
            <div className="home-page">
             
                <Nav />
               
            <div className="rest">
              
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
                    <hr/>
                   
                    <hr/>
                    <div className="content">
                    <div className="button-update">
                            <div>Date Created: { employee != null && employee.created_at != null && employee.created_at.split('T')[0] }</div>
                      </div>
                        <div className="button-update">
                        <button type="button"><Link to={`/editEmployee/${data}`}>Edit</Link></button>
                          
                      </div>
                    </div>

                </div>
                </div>
            </ div>
                        
        );
    }
}
const mapStateToProps = (state) => {
    return {
        employee: state.employee.display
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        displayEmployee: (employee) => {
            dispatch(displayEmployee(employee));
        }
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeInfo);