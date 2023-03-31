import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { displayGuarantor } from './store/actions/displayActions';
import { getGuarantors } from './store/actions/displayActions';
import Nav from './Nav';
import User from './User';

class GuarantorInfo extends React.Component{
    constructor(props) {
        super(props);
    }
    async componentDidMount() {
        const data = this.props.match.params.id;

        await this.props.displayGuarantor(data)
       
    }
    
    render() {
        const { guarantor} = this.props;
   
        const data = this.props.match.params.id;
        

        return (
            <div className="home-page">
                     <Nav />
                <div className="rest">
          
                    <div className="card">
                  
                        <div className="content">
                            
                        <div className="created"><h6>First Name</h6> </div>
                        <div className="created"><h6>{guarantor !==null && guarantor.first_name}</h6></div>
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
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Occupation</h6></div>
                        <div className="created">{guarantor.occupation}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Office Name</h6> </div>
                        <div className="created">{guarantor.OfficeName}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Office Number</h6></div>
                        <div className="created">{guarantor.officephonenumber}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>CACNo</h6></div>
                    <div className="created">{guarantor.CACNo}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Position</h6></div>
                        <div className="created">{guarantor.position}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Home Address</h6></div>
                        <div className="created">{guarantor.homeaddress}</div>
                    </div>
                    
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Phone Number</h6></div>
                        <div className="created">{guarantor.phone_number}</div>
                    </div>
                    <hr />
                    <div className="content">
                        <div className="created"><h6>Relationship</h6></div>
                        <div className="created">{ guarantor.relationship}</div>
                    </div>
                    <hr /> 
                    
                    <div className="content">
                    <div className="button-update">
                    <div className="button-update">
                            <div>Date Created: { guarantor != null && guarantor.created_at != null && guarantor.created_at.split('T')[0] }</div>
                      </div>
                      </div>
                        <div className="button-update">
                            <button type="button"> <Link to={`/editGuarantor/${data}`}>Edit</Link></button>
                            
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
        guarantor: state.guarantor.oneguarantor,

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        
        displayGuarantor: (guarantor) => dispatch(displayGuarantor(guarantor))
        
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(GuarantorInfo);