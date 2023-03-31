import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {userDetails, editUser, getRoles } from '../store/actions/settingActions';
import Nav from '../Nav';
import Modal from 'react-bootstrap/Modal';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
let letters = RegExp(/^[A-Za-z]+$/);


class UserDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            user: {},
            errors: {}
        }
    }

    handleOpen = () => {
        this.setState({
            show: true,
        });
    }

    handleClose = () => {
        this.setState({
        show: false
})
    }

    async componentDidMount() {

    const data = this.props.match.params.id;
        await this.props.userDetails(data);
       
        this.setState({
            user: this.props.userinfo
        })
        
    }

    handleValidation() {
        
        let errors = {};
        let formIsValid = true;
        if(!this.state.user.name){
           formIsValid = false;
           errors['name'] = "Cannot be empty";
        }

        if(!this.state.user.email){
            formIsValid = false;
            errors['email'] = "Cannot be empty";
        }
         
       this.setState({errors: errors});
       return formIsValid;
    }
    
   handleChange =  (event) => {
       event.preventDefault();
       
    const { name, value } = event.target;
    const { user } = this.state;

    let errors = this.state.errors;

    switch (name) {
        case 'name': errors.name = letters.test(value) &&  value.length > 2 
            ? "" : 'minimum of 3 letters required' ;
            break;
        case 'email': errors.email = emailRegex.test(value) && value.length > 0
            ? "" : 'invalid email addreess';
        default:
            break;
    }
    
    this.setState({ errors, [name]: value });
   this.state.user[name] = value;
    
    this.setState({ user });
    
    }
    
handleSubmit =  async (event) => {
    event.preventDefault();
    const id = this.props.match.params.id
    if (this.handleValidation()) {
        const data = {
            name: this.state.user.name,
            email: this.state.user.email,
        }
       
        this.setState({
            loading: true
        });
    
      await this.props.editUser(data, id).then(datum => {
          
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    
    else {
        console.error('Form inValid');
        }
}
    render() {
        
        const { userinfo } = this.props;
        const { user } = this.state;
        
        return (
            <div className="home-page">
              
                <Nav />
               
            <div className="rest7">
            <Modal show={this.state.show} onHide={this.handleClose} >
                        <Modal.Header closeButton>
                           Edit user
                            </Modal.Header>
                            <Modal.Body>
                            <form  className="condition-container">
                            <div className="verification-condition">
                               <div><label> Name</label></div> 
                               <div><input type="text" 
                               name = "name"
                                 onChange={this.handleChange}
                                 defaultValue={user!== null &&  user.name} />
                                    </div> 
                            </div>
                            
                            <div className="verification-condition">
                                <div><label>Email</label></div> 
                                <div><input type="text" placeholder="email@gmail.com"
                                name="email" onChange={this.handleChange}
                                    defaultValue={user !== null  && user.email} /></div>
                            </div>
                        </form>
                            </Modal.Body>
                            <Modal.Footer>
                         <button className="submit-condition" onClick={this.handleSubmit}>Submit</button>
                       
                            </Modal.Footer>
                        </Modal>
             <div className="card">
               
                    <div className="content">
                        <div className="created"><h6> Name</h6> </div>
                        <div className="created">{userinfo !== null && userinfo.name !== null && userinfo.name}</div>
                    </div>
                   
                    <div className="content">
                        <div className="created"><h6>Email</h6> </div>
                        <div className="created">{ userinfo !== null && userinfo.email !== null && userinfo.email}</div>
                        </div>

                        {/* <div className="content">
                            <div className="created"><h6>Role</h6> </div>
                        
                                <div className="created">{  userinfo !== null && userinfo.roles !== null && userinfo.roles}</div>
                            
                        </div> */}
                        
                        <div className="content">
                        <div className="created"><h6>Date</h6> </div>
                        <div className="created">{ userinfo !== null && userinfo.updated_at != null && userinfo.updated_at.split('T')[0] }</div>
                        </div>
                        
                        <button type="button" onClick={() => this.handleOpen()}><Link>Edit</Link></button>
                 
  
                    {/* <div className="content"> */}
                    {/* <div className="button-update">
                            <div> { userinfo != null && userinfo.updated_at != null && userinfo.updated_at.split('T')[0] }</div>
                      </div> */}
                            {/* <div className="button-update">
                         
                        <button type="button"><Link >Edit</Link></button> */}
                          
                      {/* </div>
                    </div> */}
                    </div> 
                   
                </div>
            </ div>
                        
        );
    }
}
const mapStateToProps = (state) => {
    
    return {
        userinfo: state.settings.userinfo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        userDetails: (userinfo) =>  dispatch(userDetails(userinfo)),
        
        editUser: (user, id) => dispatch(editUser(user, id))
        
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);