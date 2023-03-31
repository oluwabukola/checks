import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { displayResult } from './store/actions/displayActions';
import Nav from './Nav';
import User from './User';

class ResultInfo extends React.Component{
    constructor(props) {
        super(props);
       
    }
   async  componentDidMount() {
        const data = this.props.match.params.id;
       
        await this.props.displayResult(data)
 
    }
    
    render() {
     
        const { result } = this.props;
 
        const data = this.props.match.params.id;
        
    
        return (
            <div className="home-page">
                <Nav />
            <div className="rest4">
                <div className="card"  >
                    <div className="content">
                        <div className="created"><h6>Institution</h6> </div>
                        <div className="created">{result.institution}</div>
                    </div>
                    <hr/>
                     <div className="content">
                        <div className="created"><h6>Course</h6> </div>
                        <div className="created">{ result.course}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Certificate Name</h6></div>
                        <div className="created">{result.CertificateName}</div>
                    </div>
                        <hr />
                        <div className="content">
                        <div className="created"><h6>Certificate File</h6></div>
                        <div className="created">{ result.CertificateFile}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Date Earned</h6></div>
                        <div className="created">{ result.DateEarned}</div>
                    </div>
                    <hr/> 
                    <div className="content">
                    <div className="button-update">
                    <div className="button-update">
                            <div>Date Created: { result != null && result.created_at != null && result.created_at.split('T')[0] }</div>
                      </div>
                      </div>
                        <div className="button-update">
                            <button type="button"> <Link to={`/editResult/${data}`}>Edit</Link></button>
                            
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
        result: state.result.oneresult,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        displayResult: (result) => dispatch(displayResult(result))
            
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultInfo);