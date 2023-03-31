import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { onePreviousEmployer } from '../store/actions/verificationAction';
import Nav from '../Nav';


class EmployerDetails extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const data = this.props.match.params.id;
      
        this.props.onePreviousEmployer(data)
       
    }
    
    render() {
        const { employer} = this.props;
    
        const data = this.props.match.params.id;

        return (
            <div className="home-page">
            
            <Nav />
                <div className="rest3">
                   
                <div className="card">
                    <div className="content">
                        <div className="created"><h6>Employer Name</h6> </div>
                        <div className="created"><h6>{employer!==null && employer.employer_name}</h6></div>
                    </div>
                    <hr/>
                     <div className="content">
                        <div className="created"><h6>Start Month</h6></div>
                        <div className="created">{employer.startmonth}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Start Year</h6></div>
                        <div className="created">{ employer.startyear}</div>
                    </div>
                        <hr />
                        <div className="content">
                        <div className="created"><h6>Job Title</h6></div>
                        <div className="created">{employer.jobtitle}</div>
                        </div>
                        <hr />
                        <div className="content">
                        <div className="created"><h6>Monthly Salary(#)</h6></div>
                        <div className="created">{employer.monthly_salary}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>End Month</h6></div>
                        <div className="created">{employer.endmonth}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>End Year </h6> </div>
                        <div className="created">{ employer.endyear}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Level</h6></div>
                        <div className="created">{ employer.joblevel_id}</div>
                    </div>
                  
                    </div>
                    </div>  
                </div>
        );
    }
}
const mapStateToProps = (state) => {
  
    return {
        employer: state.verification.oneEmployer,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        
        onePreviousEmployer: (employer) => dispatch(onePreviousEmployer(employer)),
        
        
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployerDetails);