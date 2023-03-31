import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from './store/actions/loginActions';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class User extends React.Component{
    constructor(props) {
        super(props);
    }
    handleSubmit = (event) => {
        event.preventDefault();
    
        const token = localStorage.getItem('token');
        const response = fetch('http://hotelanywhere.ng/background/api/auth/logout', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
                  
        })
          .then(response => {
            console.log('log out response', response)
            return response.json();
                      
          })
          .then(data => {
            
            this.props.history.push('/Login')
              
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      
      }
    
    render() {
        const { login } = this.props;
   
        return (

            <div className="userName">
        <Navbar collapseOnSelect expand="lg"  >
     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> 
   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="mr-auto ">
       <Nav.Link ><li className="person res"><i class="fas fa-user-circle"></i><h5>{login !== null && login.user.name}</h5></li></Nav.Link>
       <Nav.Link><li className="res"><Link to='/home'><i class="fas fa-house-user"></i>Home</Link></li></Nav.Link>
       <Nav.Link ><li className="res"><Link to='/createEmployee'><i class="fas fa-user"></i>Create Employee</Link></li></Nav.Link>
        <Nav.Link ><li className="res"><Link to='/verification'><i class="fas fa-certificate"></i>Verification</Link></li></Nav.Link>
        <Nav.Link><li className="res"><Link to='/verified'><i class="fas fa-user-check"></i>Verified</Link></li></Nav.Link>
         <Nav.Link><li  className="res" onClick={this.handleSubmit}><a href="#"><i className="fas fa-sign-out-alt "></i>Signout</a></li></Nav.Link>                   
   </Nav>
     
   </Navbar.Collapse>
 </Navbar> 
            
            </div>
                
    )
    }
}

const mapStateToProps = (state) => {
  
    return {
        login: state.login.login,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (login) => dispatch(loginUser(login))
        
    }
    
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User)) ;