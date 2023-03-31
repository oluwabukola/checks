import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { connect } from 'react-redux';
import { createReferee, creatingEmployee } from './store/actions/employeeActions';
import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';


let numbers = RegExp(/^(\d+-?)+\d+$/);
let letters = RegExp(/^[a-zA-Z\s]*$/);
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const loaderCss = css`
margin: 150px auto 10px auto;
border-color:white;
`

class RefereeForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
           phonenumber: '',
            address: '',
            loading: false,
            errors: {}
        }
    }

    handleValidation() {
        
        let errors = {};
        let formIsValid = true;

        if(!this.state.firstname){
           formIsValid = false;
           errors['firstname'] = "Cannot be empty";
        }

        if(!this.state.lastname){
            formIsValid = false;
            errors['lastname'] = "Cannot be empty";
        }

        if(!this.state.email){
            formIsValid = false;
            errors['email'] = "Cannot be empty";
        }
          if(!this.state.address){
            formIsValid = false;
            errors['address'] = "Cannot be empty";
        }
        
       this.setState({errors: errors});
       return formIsValid;
   }
    handleSubmit = (event) => {
        event.preventDefault();
   
        const id = this.props.id;
   
        if (this.handleValidation()) {
            const data = {
                employee_id:id,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email, 
                phonenumber: this.state.phonenumber,
                address: this.state.address,
            }
            this.setState({
                loading: true
            });
            
             this.props.createReferee(data).then(datum => {
                this.setState({
                    loading: false,
                    firstname: '',
                    lastname: '',
                   email: '',
                   phonenumber: '',
                    address:'',

                });
                 if (datum.success === false) {
                    toast.notify('Referee not captured!');
                 }
                 else {
                    toast.notify('Referee successfully captured!');
                 }
              
                //  console.log('Success:', datum);    
                 {/* console.log(datum.data);*/ }
             })
            .catch((error) => {
                console.error('Error:', error);
            });
  
        }
        
        else {
            console.error('Form inValid');
            }

    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'firstname': errors.firstname = letters.test(value) &&  value.length > 2 
                ? "" : 'minimum of 3 letters required' ;
                break;
            
            case 'lastname': errors.lastname = letters.test(value) && value.length > 2
                ? "" : 'minimum of 3 characters required';
                break;
            
            case 'email': errors.email = emailRegex.test(value) && value.length > 0
                ? "" : 'invalid email addreess';
                break;
                case 'phonenumber': errors.phonenumber =  numbers.test(value) && value.length > 5
                ? "" : 'invalid phone number';

            default:
                break;
        }
        
        this.setState({ errors, [name]: value });
        
    }
    render() {
        return (
            <div>
                {this.state.loading ?
                    <div className="sweet-loading">
                        <CircleLoader css={loaderCss} size={100}
                            color={"#2b4f81"}
                            loading={true} />
                    </div> :
                    <div className="rest1">
                       
                            <form className="create">
                                <div className="field">
                                    <div>
                                <label>First Name <span style={{color: "red"}}>*</span></label><br />
                                <input type="text"
                                    name="firstname"
                                    onChange={this.handleChange}
                                    value={this.state.firstname}
                                    className="addname"
                                        placeholder="first name" />
                                     <span style={{color: "red"}}>{this.state.errors["firstname"]}</span>
                                    </div>
                                    <div>
                            
                                <label>Last Name<span style={{color: "red"}}>*</span></label><br />
                                <input type="text"
                                    name="lastname"
                                    onChange={this.handleChange}
                                    value={this.state.lastname}
                                    className="addname"
                                        placeholder="Oluwabukola" />
                                     <span style={{color: "red"}}>{this.state.errors["lastname"]}</span>
                                    </div>
                                    </div>
                                
                              
                                <div className="field">
                                <div>
                                <label> Email<span style={{color: "red"}}>*</span></label><br />
                                <input type="email"
                                    name="email"
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                    className="mails"
                                        placeholder="o@gmail.com" />
                                     <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                                    </div>
                                    <div>
                                <label> Phone Number<span style={{color: "red"}}>*</span></label><br />
                                <input type='text'
                                    name="phonenumber"
                                    onChange={this.handleChange}
                                    value={this.state.phonenumber}
                                    className="addname"
                                        placeholder="08045667892" />
                                     <span style={{color: "red"}}>{this.state.errors["phonenumber"]}</span>
                                    </div>  
                                  
                                </div>
                                
                                <div className="field">
                                <div>
                                <label> Address<span style={{color: "red"}}>*</span></label><br />
                                <input type="text"
                                    name="address"
                                    onChange={this.handleChange}
                                    value={this.state.address}
                                    className="addname"
                                        placeholder="address" />
                                     <span style={{color: "red"}}>{this.state.errors["address"]}</span>
                                    </div>
                                </div>
                                
                                <button type='button' className="form-submit" onClick={this.handleSubmit}>Save</button>
                            
                            </form>
                        </div>
                   
                }
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    
    return {
        referee: state.referee.referee,
      
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createReferee: (referee) => dispatch(createReferee(referee)),
     
        
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RefereeForm));

 