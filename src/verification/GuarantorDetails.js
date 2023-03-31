import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { oneGuarantor } from '../store/actions/verificationAction';
import Nav from '../Nav';


class GuarantorDetails extends React.Component{
    constructor(props) {
        super(props);
    }
   async componentDidMount() {
        const data = this.props.match.params.id;
       await this.props.oneGuarantor(data)
       
    }

    handleBack = (event) => {
        event.preventDefault();
        const params = this.props.id;
    }
    
    render() {
        const { guarantor} = this.props;
       
        const data = this.props.match.params.id;

        return (
            <div className="home-page">
              
            <Nav />
                <div className="rest2">
                {/* <button type="button" className="back-btn" onClick={this.handleBack}><i class="fas fa-arrow-left"></i>Back</button>
                            <hr /> */}
                <div className="card">
                    <div className="content">
                        <div className="created"><h6>First Name</h6> </div>
                        <div className="created"><h6>{guarantor!==null && guarantor.first_name}</h6></div>
                    </div>
                    <hr/>
                     <div className="content">
                        <div className="created"><h6>Last Name</h6></div>
                        <div className="created">{guarantor.last_name}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Email</h6></div>
                        <div className="created">{ guarantor.email}</div>
                    </div>
                        <hr />
                        <div className="content">
                        <div className="created"><h6>Office Name</h6></div>
                        <div className="created">{guarantor.OfficeName}</div>
                        </div>
                        <hr />
                        <div className="content">
                        <div className="created"><h6>CAC Number</h6></div>
                        <div className="created">{guarantor.CACNo}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Position</h6></div>
                        <div className="created">{guarantor.position}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Home Address</h6> </div>
                        <div className="created">{ guarantor.homeaddress}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Office Phone</h6></div>
                        <div className="created">{ guarantor.officephonenumber}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Relationship</h6></div>
                    <div className="created">{guarantor.relationship}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Occupation</h6></div>
                        <div className="created">{guarantor.occupation}</div>
                    </div>
                    
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Level</h6></div>
                        <div className="created">{ guarantor.level}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Phone Number</h6></div>
                        <div className="created">{ guarantor.phone_number}</div>
                    </div>
                    <hr /> 
                    
                    <div className="content">
                    <div className="button-update">
                            <div>Date Updated:</div>
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
        guarantor: state.verification.oneGuarantor,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        
        oneGuarantor: (guarantor) => dispatch(oneGuarantor(guarantor)),
        
        
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(GuarantorDetails);