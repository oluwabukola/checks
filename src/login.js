import React, {useState} from 'react';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { useForm } from "react-hook-form";
import { loginUser, updatedLogin } from './store/actions/loginActions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    FormBase, Form, FormInput, FormSubmit,
    FormError, FormTitle, FormText, FormLink
} from './Compenet/Login/Login.elements';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// const Login = () => {
//     const history = useHistory();
//     const [loading, setLoading] = useState(false);
//     const [emailAddress, setEmailAddress] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const isInvalid = password === '' || emailAddress === '';

//     const loaderCss = css`
//     margin: 150px auto 10px auto;
//     border-color:white;
//     `
//     const handleSubmit = async (event) => {
//                event.preventDefault();
            
                    
//                     const data = {
//                          email: emailAddress,
//                         password:password,
//                     }
                    
//                     setLoading(true);

//                     await this.props.loginUser(data).then(datum => {

//                         console.log('hooks datum', datum)
//                             setLoading(false);
                            

//                        this.props.updatedLogin(datum.data!==undefined && datum.data);
//                             const { access_token } = datum;
//                             localStorage.setItem('token', access_token);
//                             if (datum.message == 'Unauthorized') {
//                                 document.querySelector('.unauthorized').style.display = "block";
                               
//                             }
                     
//                             else {
//                                 history.push('/Home')
        
//                             }
                            
//                         })
//                         .catch((error) => {
//                             console.error('Error:', error);
//                         });
                          
//                 }
                

//     return (
//         <>
//            <div>                
//                 {loading ?
//                      <div className="sweet-loading">
//                          <CircleLoader css={loaderCss} size={100}
//                              color={"#2b4f81"}
//                              loading={true} />
//                      </div> :
//                      <Form>
//                    {/* {
//                       <FormError></FormError> 

//                      }  */}
//                   <FormBase  >
//                       <FormTitle>Sign In</FormTitle>
//                       <FormInput type="email" placeholder="Email address"
//                         value={emailAddress}
//                         onChange={({target}) => setEmailAddress(target.val)}
//                       />
//                       <FormInput type="password" placeholder="Password"
//                          autoComplete="off" autoComplete="off" value={password}
//                          onChange = {({target}) => setPassword(target.value)}
//                          />
                         
//                          <FormSubmit  type="submit" disabled={isInvalid} onClick={handleSubmit} >Login</FormSubmit>
//                   </FormBase>
//                   <FormText >
//                       New to IBC? <FormLink to='/signupExternal'>SignUp.</FormLink>
//                   </FormText>
//                   </Form>  
//                    }
//                </div>
//         </>
//     )
// }

// const mapStateToProps = (state) => {
//     console.log(state.login.login);
//         return {
//             login: state.login.login
//         }
//     }
//     const mapDispatchToProps = (dispatch) => {
//         return {
//             loginUser: (login) => dispatch(loginUser(login)),
//         updatedLogin: (data) => dispatch(updatedLogin(data)),
           
//             }
//         }

// export default Login


const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const formValid =({formErrors, ...rest} ) => {
   
    let valid = true;
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });
    Object.values(rest).forEach(val => {
        val.length === 0 && (valid = false);
    
    });
        return valid;
}
const loaderCss = css`
margin: 150px auto 10px auto;
border-color:white;
`


const instance = axios.create({
    baseURL:'http://hotelanywhere.ng/background/api/auth',
    timeout: 20000,
     headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }

});


 
class Login extends React.Component{
        state = {
            email:'',
            password: '',
          
            loading: false,
           
            formErrors: {
                email:'',
                password: '',
            }
        }
    
        
         
        
    handleSubmit = async (event) => {
        event.preventDefault();
      
        if (formValid(this.state)) {
            
            const data = {
                email: this.state.email,
                password:this.state.password,
            }
            this.setState({
                loading: true
            });
            await this.props.loginUser(data).then(datum => {
              
                    this.setState({
                        loading: false,
                       
                    })
                 
               this.props.updatedLogin(datum.data!==undefined && datum.data);
                    const { access_token } = datum;
                    localStorage.setItem('token', access_token);
                    if (datum.message == 'Unauthorized') {
                        document.querySelector('.unauthorized').style.display = "block";
                       
                    }
             
                    else {
                        this.props.history.push('/Home')

                    }
                    
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
                  
        }
        else {
            console.error('form invalid');
        }
    }

    

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let formErrors = this.state.formErrors;
        switch (name) {
            
                case 'email': formErrors.email= emailRegex.test(value)  && value.length > 0
                ?  "" : 'invalid email addreess';
                break;
                case 'password': formErrors.password = value.length < 6 && value.length > 0
                ? 'minimum of 6 characters required' : "";
                break;
            default:
                break;
        }
        
    
        this.setState({ formErrors, [name]: value });
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
                    {/* {
                       <FormError></FormError> 

                    }  */}
                 <FormBase onSubmit={this.handleSubmit}>
                     <FormTitle>Sign In</FormTitle>
                     <FormInput type="email" placeholder="Email address"
                        name="email"
                                    onChange={this.handleChange}
                                    placeholder="Email"
                     />
                     <FormInput type="password" placeholder="Password"
                         autoComplete="off" name="password"
                                onChange={this.handleChange}
                                placeholder="Password"
                         />
                         
                         <FormSubmit  type="submit" >Login</FormSubmit>
                 </FormBase>
                 <FormText>
                     New to IBC? <FormLink to='/signupExternal'>SignUp.</FormLink>
                 </FormText>
                 </Form>
            
                  
                }
                </div>
        )
    }
}
    
const mapStateToProps = (state) => {
        
    return {
         login: state.login.login
     }
 }
 const mapDispatchToProps = (dispatch) => {
     return {
         loginUser: (login) => dispatch(loginUser(login)),
     updatedLogin: (data) => dispatch(updatedLogin(data)),
       
         }
     }
    

 export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

  // <div className="login-container">
                    //     <h3>LOGIN</h3>
               
                    //     <form className="login" noValidate>
                    //         <div className="unauthorized">
                    //             <h3>email or password not found!</h3>
                    //         </div>
                    //         <input type="email" name="email"
                    //             onChange={this.handleChange}
                    //             placeholder="Email"
                    //         />
                    //         <span className="errorMessage">{formErrors.email}</span>
                    //         <input type="password"
                    //             name="password"
                    //             onChange={this.handleChange}
                    //             placeholder="Password"
                    //         />
                    //         <span className="errorMessage">{formErrors.password}</span>
                   
                    //         <button type="button" className="login-button" onClick={this.handleSubmit}>Login</button>
                    //     </form>
                    // </div>