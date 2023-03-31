import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { displayEmployer } from './store/actions/displayActions';
import Nav from './Nav';
import User from './User';

class EmployerInfo extends React.Component{
    constructor(props) {
        super(props);
       
    }
   async componentDidMount() {
        const data = this.props.match.params.id;
      
    await this.props.displayEmployer(data) 
    }
    
    render() {
        const { employer } = this.props;
      
        const data = this.props.match.params.id;
     
        return (
            <div className="home-page">
                <Nav />
                <div className="rest3">
                <div className="card">
                    <div className="content">
                        <div className="created"><h6>Employer Name</h6> </div>
                        <div className="created"><h6>{ employer.employer_name}</h6></div>
                    </div>
                        <hr />
                    
                    <div className="content">
                        <div className="created"><h6>Monthly Salary</h6></div>
                    <div className="created">{employer.monthly_salary}</div>
                        </div>
                        <hr />
                      
                    <div className="content">
                        <div className="created"><h6>Job Titlte</h6></div>
                    <div className="created">{employer.jobtitle}</div>
                        </div>
                        <hr/>
                    <div className="content">
                        <div className="created"><h6>Start Month</h6> </div>
                        <div className="created">{ employer.startmonth}</div>
                    </div>
                    <hr/>

                    <div className="content">
                        <div className="created"><h6>Start Year</h6></div>
                        <div className="created">{employer.startyear}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>End Month</h6></div>
                        <div className="created">{ employer.endmonth}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>End Year</h6></div>
                        <div className="created">{ employer.endyear}</div>
                    </div>
                    
                    
                    <hr/>
                    <div className="content">
                    <div className="button-update">
                    <div className="button-update">
                            <div>Date Created: { employer != null && employer.created_at != null && employer.created_at.split('T')[0] }</div>
                      </div>
                      </div>
                        <div className="button-update">
                            <button type="button"> <Link to={`/editEmployer/${data}`}>Edit</Link></button>
                           
                      </div>
                    </div>
                    </div>
                    </div>    
                </div>
                
        );
    }
}
const mapStateToProps = (state) => {
  
    return {
        employer: state.employer.oneemployer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        displayEmployer: (employer) => dispatch(displayEmployer(employer))
        
        
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployerInfo);