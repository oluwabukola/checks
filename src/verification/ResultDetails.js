import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { oneResult } from '../store/actions/verificationAction';
import Nav from '../Nav';
import User from '../User';

class ResultDetails extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const data = this.props.match.params.id;

        this.props.oneResult(data)
       
    }
    
    render() {
        const { result} = this.props;
      
        const data = this.props.match.params.id;

        return (
            <div className="home-page">
             
                        <Nav />
                <div className="rest7">
              
                <div className="card">
                    <div className="content">
                        <div className="created"><h6>Institution</h6> </div>
                        <div className="created"><h6>{result!==null && result.institution}</h6></div>
                    </div>
                    <hr/>
                     
                        <div className="content">
                        <div className="created"><h6>Certificate Name</h6></div>
                        <div className="created">{result.CertificateName}</div>
                        </div>
                        <hr />
                        <div className="content">
                        <div className="created"><h6>Course</h6></div>
                        <div className="created">{ result.course}</div>
                    </div>
                    <hr />
                        <div className="content">
                        <div className="created"><h6>Date Earned</h6></div>
                        <div className="created">{result.DateEarned}</div>
                    </div>
                    
                    </div>
                    </div>  
                </div>
        );
    }
}
const mapStateToProps = (state) => {
  
    return {
        result: state.verification.oneResult,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        
        oneResult: (result) => dispatch(oneResult(result)),
        
        
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultDetails);