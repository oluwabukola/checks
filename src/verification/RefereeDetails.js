import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { oneReferee } from '../store/actions/verificationAction';
import Nav from '../Nav';


class RefereeDetails extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const data = this.props.match.params.id;
    
        this.props.oneReferee(data)
       
    }
    
    render() {
        const { referee} = this.props;
      
        const data = this.props.match.params.id;

        return (
            <div className="home-page">
                  
            <Nav />
                <div className="rest6">
                 
                <div className="card">
                    <div className="content">
                        <div className="created"><h6>First Name</h6> </div>
                        <div className="created"><h6>{referee!==null && referee.firstname}</h6></div>
                    </div>
                    <hr/>
                     <div className="content">
                        <div className="created"><h6>Last Name</h6></div>
                        <div className="created">{referee.lastname}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Email</h6></div>
                        <div className="created">{ referee.email}</div>
                    </div>
                        <hr />
                        <div className="content">
                        <div className="created"><h6>Phone Number</h6></div>
                        <div className="created">{referee.phonenumber}</div>
                        </div>
                        <hr />
                        <div className="content">
                        <div className="created"><h6>Address</h6></div>
                        <div className="created">{referee.address}</div>
                    </div>
                  
                    </div>
                    </div>  
                </div>
        );
    }
}
const mapStateToProps = (state) => {
   
    return {
        referee: state.verification.oneReferee,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        
        oneReferee: (referee) => dispatch(oneReferee(referee)),
        
        
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(RefereeDetails);