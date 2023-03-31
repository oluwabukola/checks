import React from 'react';
import Nav from '../Nav';
import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { Link,  withRouter } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button'
import { createUser, getConditions, getAllUsers, deleteUser, getRoles } from '../store/actions/settingActions';


let letters = RegExp(/^[a-zA-Z\s]*$/);

let numbers = RegExp(/^[0-9]+$/);

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const loaderCss = css`
margin: 150px auto 10px auto;
border-color:white;
`

class Users extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            conditions: null,
            show: false,
            name: '',
            email: '',
            firstname: '',
            lastname: '',
            password: '',
            role_id: '',
            id: '',
            loading: false,
            errors: {},
            user: null,
            show2: false,
        }
      
    }
    async componentDidMount() {
      await  this.props.getAllUsers();
       await  this.props.getRoles();
    }

    handleOpen = (conditions) => {
        this.setState({
            show: true,
            conditions: conditions,
        });
      
    }

    handleOpenDelete = (user) => {
        this.setState({
            show2: true,
            id: user.id,
        });
      
    }

    handleCloseDelete = () => {
        this.setState({
        show2: false
})
    }
    handleClose = () => {
        this.setState({
        show: false
})
    }

    handleDelete = async (id) => {
       
        await this.props.deleteUser(id).then(datum => {
         
            console.log('datum', datum.message);
            this.handleCloseDelete();
            if (datum.message =='User deleted successfully') {
               
                toast.notify('User deleted!');
            }
            else {
                
                toast.notify('User not deleted!');
            }
            
             })
             .catch((error) => {
                 console.error('Error:', error);
             });
     }
    handleValidation() {
        
        let errors = {};
        let formIsValid = true;

        // if(!this.state.name){
        //    formIsValid = false;
        //    errors['name'] = "Cannot be empty";
        // }

        if(!this.state.email){
            formIsValid = false;
            errors['email'] = "Cannot be empty";
        }

        if(!this.state.password){
            formIsValid = false;
            errors['password'] = "Cannot be empty";
        }
        
     
       this.setState({errors: errors});
       return formIsValid;
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
   
        if (this.handleValidation()) {
            const data = {
                name: this.state.firstname + this.state.lastname,
                email: this.state.email,
               password: this.state.password, 
                role_id: this.state.role_id,
               
            }
      
            this.setState({
                loading: true
            });
            
             this.props.createUser(data).then(datum => {
                this.setState({
                    loading: false,
                    name: '',
                    email: '',
                    password: '',
                    role_id: '',
                    firstname: '',
                     lastname: '',
                    
                });
                 
                 if (datum.message == 'Successfully created user! & Role successfully assigned to User!') {
                    toast.notify('User created!');
                 }
                 else {
                     toast.notify('user not created');
                 }
               
                 this.handleClose();
               
             
             })
            .catch((error) => {
                console.error('Error:', error);
            });
  
        }
        
        else {
            console.error('Form inValid');
            }
    }

     handleRole = (event) => {
         const { roles } = this.props
         
         let newrole = roles;
     
         const { name, value } = event.target;
         
        const index = newrole.data.findIndex(x => x.id == event.target.value);
      
        this.setState({
       
            role_id: value,
        })
         console.log(value)
        
    }

    handleChange = (event) => {
        event.preventDefault();
        const {name, value } = event.target;
        let errors = this.state.errors
        switch (name) {
            case 'firstname': errors.firstname= letters.test(value) && value.length > 0
                ? "" : "minimum of one digit"
                break;
                case 'lastname': errors.lastname= letters.test(value) && value.length > 0
                ? "" : "minimum of one digit"
                break;
            case 'email': errors.email = emailRegex.test(value) && value.length > 3
                ? "" : 'minimum of one digit'
                break;
            case 'password': errors.password= numbers.test(value) && value.length > 0
                ? "" : 'minimum of one digit'
                break;
        }
        this.setState({ errors, [name]: value });
    }
    render() {
        const { roles } = this.props;
        const { allUsers } = this.props;
        
        return (
            <div className="home-page">
                <Nav />
                <div className="table-cont2">
                <Modal show={this.state.show2} onHide={this.handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Delete criteria</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to permanently delete this user?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleCloseDelete}>
            Close
          </Button>
          <Button variant="danger" onClick={() => this.handleDelete(this.state.id)}>
            Delete
          </Button>
        </Modal.Footer>
                </Modal>
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        
                        <Modal.Header closeButton>
                            User form
                            </Modal.Header>
                            <Modal.Body>
                        <form  className="condition-container">
                            <div className="verification-condition">
                               <div><label>First Name</label></div> 
                               <div><input type="text" placeholder="first name"
                                name="firstname" onChange={this.handleChange}
                                    value={this.state.firstname} /></div> 
                            </div>
                            <div className="verification-condition">
                                <div><label>Last Name</label></div>
                                <div><input type="text" placeholder="last name"
                                name="lastname" onChange={this.handleChange}
                                    value={this.state.lastname} /></div>
                            </div>
                            <div className="verification-condition">
                                <div><label>Email</label></div> 
                                <div><input type="text" placeholder="email@gmail.com"
                                name="email" onChange={this.handleChange}
                                    value={this.state.email} /></div>
                            </div>
                      
                            <div className="verification-condition">
                            <div><label>Password</label></div>
                                <div><input type="text" placeholder="enter password"
                                name="password" onChange={this.handleChange}
                                    value={this.state.password} /></div>
                            </div>
                          
                            <div className="verification-condition">
                            <div><label>Role</label></div>
                        <div> <select onChange={this.handleRole} name="role_id">
                                <option>--select role--</option>
                                {
                             roles != null && roles.data !== null && roles.data.map((role) =>
                             <option  value={role.id}>{role.name }</option>
                                 )
                                    }
                                        </select></div>
                               
                            </div>
                        </form>
                 
                            </Modal.Body>
                            <Modal.Footer>
                         <button className="submit-condition"  onClick={this.handleSubmit}>Submit</button>
                       
                            </Modal.Footer>
                        </Modal>
                    <div className='wrap'>
                        <div></div>
                    <button type="button" className="add-employee" onClick={() =>this.handleOpen()}><Link>Create User</Link></button>
                        {/* <form className="search-container">
                            <input type="text" placeholder="search...."
                             name="search" value={this.state.search}
                             onChange={this.handleChange}/>
                            <button ><i class="fas fa-search"></i></button>
                                </form>
                                <button className="return-button" onClick={this.handleReturn}><i class="fas fa-chevron-left"></i>Return</button> */}
                       
                        </div>
                <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th> Email</th>
                                <th>Role</th> 
                                <th>view</th>
                                <th>Delete</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allUsers !== null && allUsers.map((user) =>
                                    <tr>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.roles.length > 0 && user.roles[0].name}</td>
                                        <td className='eyes'><Link to={`/userDetails/${user.id}`}><i class="far fa-eye eye"></i></Link></td>
                                       
                                        <td className="eyes"  ><Link><i onClick={() => this.handleOpenDelete(user)} class="fas fa-trash-alt"></i></Link></td>
                                         {/* <td className="eyes"><Link><i class="fas fa-lock"></i></Link></td> */}
                                </tr>
                            )}
                            </tbody>
                    </table>
              
                </div>
            </ div>         
        );
    }
}
const mapStateToProps = (state) => {
 
    return {
        user: state.settings.user,
        allUsers: state.settings.allUsers,
        roles: state.settings.roles
    }
}
const mapDispatchToProps = (dispatch) => {

    return {
        createUser: (user) => dispatch(createUser(user)),
        getConditions: (user) => dispatch(getConditions(user)),
        getAllUsers: (allUsers) => dispatch(getAllUsers(allUsers)),
        deleteUser: (allUsers) => dispatch(deleteUser(allUsers)),
        getRoles: (roles) => dispatch(getRoles(roles)),
    }
    
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Users));

