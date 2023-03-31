import React from 'react';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { Link } from 'react-router-dom';
import Login from './login';
import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';
import {
    Form, FormInput, FormBase, FormTitle, 
    FormText, FormLink, FormError, FormSubmit
} from './Compenet/Login/Login.elements';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const formValid =({formErrors, ...rest} ) => {
    let valid = true;
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });
    Object.values(rest).forEach(val => {
        val.length === 0 && (valid = false);
        // val === null && (valid = false);
    });
        return valid;
 }
const loaderCss = css`
margin: 150px auto 10px auto;
border-color:white;
`

class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            first:'',
            last: '',
            loading: false,
            email: '',
            password: '',
            confirmPassword: '',
          
            formErrors: {
                first:'',
                last: '',
                password: '',
                email: '',
                confirmPassword: ''
            }
        }
    }

//      isInvalid =  () => {
//          this.state.first === '' || this.state.email === '' || this.state.last
//         || this.state.password === '' || this.state.confirmPassword === '';
// }
    handleSubmit = (event) => {
        event.preventDefault();
        

        if (formValid(this.state)) {
            const { password, confirmPassword } = this.state
            const name = `${this.state.first} ${this.state.last}`;
            if (this.state.password !== this.state.confirmPassword) {
                this.state.password = null;
                toast.notify('Password and confirm password does not match!' ); 
                
                return;
               
            }
            
            const data = {
                name,
                email: this.state.email,
                password: this.state.password

                }
           
            this.setState({
                loading: true
            });
            
            const response = fetch('http://hotelanywhere.ng/background/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                
            })
                .then(response => {
                  return  response.json();
                    
                })
                .then(datum => {
                    this.setState({
                        loading: false,
                        
                    })
               
                    this.props.history.push('/Login')
                    
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
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'first': formErrors.first = value.length < 3 && value.length > 0 
                ? 'minimum of 3 characters required': "";
                break;
            
                case 'last': formErrors.last = value.length < 3 && value.length > 0 
                ? 'minimum of 3 characters required' : "";
                break;
            
                case 'email': formErrors.email= emailRegex.test(value)  && value.length > 0
                ?  "" : 'invalid email addreess';
                break;
            // case 'password':
            //     formErrors.password = value.length < 6 && value.length > 0 
            //         ? 'minimum of 6 characters required' : "";
            
            //     break;
            case 'password':
                formErrors.password = value.length < 6 && value.length > 0 
                    ? 'minimum of 6 characters required' : "";
            
                break;
                case 'confirmPassword': formErrors.confirmPassword =  value !== this.state.password
                ? 'password does not match' : "";
                break;
                
            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, console.log(this.state));
        
    }
    render() {
       const { formErrors } = this.state;
        
        return (
            <div>
                {this.state.loading ?
                    <div className="sweet-loading">
                    <CircleLoader css={loaderCss} size={100}
                            color={"#2b4f81"}
                            loading={true} />
                </div> : 
                <Form>
                   
                <FormBase onSubmit={this.handleSubmit}>
                <FormTitle>Sign Up</FormTitle>
                    <FormInput placeholder='Name'  type="text"
                    onChange={this.handleChange}
                    className="name"
                    value={this.state.first}
                    name="first"
                  placeholder="First Name" />
                <span className="errorMessage">{formErrors.first}</span>
                        
                <FormInput placeholder='Name'  type="text"
                   onChange={this.handleChange}
                     name="last"
                    value={this.state.last}
                      placeholder="Last Name" />
                    <span className="errorMessage">{formErrors.last}</span>
                    
                    <FormInput placeholder='Email address' type="email" 
                    name="email"
                     value={this.state.email}
                    onChange={this.handleChange}
                    placeholder="Email" />
                     <span className="errorMessage">{formErrors.email}</span> 
                    
                    <FormInput type="password" placeholder="password"
                         name="password"
                        onChange={this.handleChange}
                      value={this.state.password}
                     placeholder="Password" />
                    <span className="errorMessage">{formErrors.password}</span> 
                    
                    <FormInput type="password" placeholder="confirm password"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                         placeholder="Confirm Password" />
                     <span className="errorMessage">{formErrors.confirmPassword}</span> 
                    
                   <FormSubmit   type="submit">Sign Up</FormSubmit>
                </FormBase>
               <FormText>Already a user? <FormLink>Login</FormLink></FormText>
            </Form>
        //             <div className="signup-container">
        //         <form className="signup"  noValidate>
        //             <input type="text" onChange={this.handleChange}
        //                 className="name"
        //                 value={this.state.first}
        //                 name="first"
        //                 placeholder="First Name" />
        //             <span className="errorMessage">{formErrors.first}</span>
        //             <input type="text" className="name"
        //                 onChange={this.handleChange}
        //                 name="last"
        //                 value={this.state.last}
        //                 placeholder="Last Name" />
        //             <span className="errorMessage">{formErrors.last}</span>
        //             <input type="email" name="email"
        //                 value={this.state.email}
        //                 onChange={this.handleChange}
                            
        //                 placeholder="Email" />
        //             <span className="errorMessage">{formErrors.email}</span>
        //             <input type="password" name="password"
        //                 onChange={this.handleChange}
        //                 value={this.state.password}
        //                 placeholder="Password" />
        //             <span className="errorMessage">{formErrors.password}</span>
        //             <input type="password" name="confirmPassword"
        //                 value={this.state.confirmPassword}
        //                 onChange={this.handleChange}
        //                 placeholder="Confirm Password" />
        //             <span className="errorMessage">{formErrors.confirmPassword}</span>
        // <button type="button" className="signup-button" onClick={this.handleSubmit}>Create Account</button>
        //         </form>
               
        //         <p>Already have an acount? <span className="log"><Link to='/login'>Login</Link></span></p>
        //             </div>
                }
            </div>
        );
    }
    
}
    export default Signup;