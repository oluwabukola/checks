import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { displayReferee } from './store/actions/displayActions';
import Nav from './Nav';


class RefereeInfo extends React.Component{
    constructor(props) {
        super(props);
       
    }
    async componentDidMount() {
        const data = this.props.match.params.id;
      
      await  this.props.displayReferee(data)

    }
    
    render() {
     
        const { referee} = this.props;
  
        const data = this.props.match.params.id;
    
        return (
            <div className="home-page">
                <Nav />
                <div className="rest4">
                <div className="card"  >
                    <div className="content">
                        <div className="created"><h6>First Name</h6> </div>
                        <div className="created">{referee.firstname}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Last Name</h6> </div>
                        <div className="created">{ referee.lastname}</div>
                    </div>
                    <hr/>

                    <div className="content">
                        <div className="created"><h6>Email</h6></div>
                        <div className="created">{referee.email}</div>
                    </div>
                    <hr/>
                    <div className="content">
                        <div className="created"><h6>Phone Number</h6></div>
                        <div className="created">{ referee.phonenumber}</div>
                    </div>
                        <hr />
                        <div className="content">
                        <div className="created"><h6>Address</h6></div>
                        <div className="created">{ referee.address}</div>
                    </div>
                    <hr/>
                    <div className="content">
                    <div className="button-update">
                    <div className="button-update">
                            <div>Date Created: { referee != null && referee.created_at != null && referee.created_at.split('T')[0] }</div>
                      </div>
                      </div>
                        <div className="button-update">
                            <button type="button"> <Link to={`/editReferee/${data}`}>Edit</Link></button>
                            
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
        referee: state.referee.oneReferee,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        displayReferee: (referee) => dispatch(displayReferee(referee))
            
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RefereeInfo);