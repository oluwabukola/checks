import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { connect } from 'react-redux';
import { displayReferee, editReferee } from './store/actions/displayActions';
import User from './User';
import Nav from './Nav';
import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';

let numbers = RegExp(/^[0-9]+$/);
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
let letters = RegExp(/^[A-Za-z]+$/);


const loaderCss = css`
margin: 150px auto 10px auto;
border-color:white;
`

class EditReferee extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            referee: {},
            loading: false,
            errors:{},
        }
    }
  async componentDidMount() {
         const params = this.props.match.params;
       
       await this.props.displayReferee(params.id);
        this.setState({
            referee: this.props.referee
        })
     
    }
    handleValidation() {
        
        let errors = {};
        let formIsValid = true;
        const { referee } = this.state;

        if(!this.state.referee.firstname){
           formIsValid = false;
           errors['firstname'] = "Cannot be empty";
        }

        if(!this.state.referee.lastname){
            formIsValid = false;
            errors['lastname'] = "Cannot be empty";
        }

        if(!this.state.referee.email){
            formIsValid = false;
            errors['email'] = "Cannot be empty";
        }
          if(!this.state.referee.address){
            formIsValid = false;
            errors['address'] = "Cannot be empty";
        }
        
       this.setState({errors: errors});
       return formIsValid;
   }

   handleBack = (event) => {
    const params = this.props.match.params.id;
    event.preventDefault();
     this.props.history.push(`/refereeInfo/${params}`);
   
}
    handleSubmit = (event) => {
        event.preventDefault();
     
        if (this.handleValidation()) {
            const params = this.props.match.params;
               const { referee} = this.state;
            
            const data = {
                
                id: params.id,
                firstname: referee.firstname,
                lastname: referee.lastname,
                email: referee.email, 
                phonenumber: referee.phonenumber,
                address: referee.address,    
            }
            this.setState({
                loading: true
            });
            
             this.props.editReferee(data).then(datum => {
                this.setState({
                    loading: false
                });
                if (datum.message === 'Employee result details updated successfully') {
                    toast.notify('Referee successfully edited!');
                 }
                 else {
                    toast.notify('Referee not edited!');
                 };
                  
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
        const { referee } = this.state;
    
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
        referee[name] = value;
        
        this.setState({ referee });
        
    }
    render() {
        
        const { referee } = this.state;
        return (
            <div>
                {this.state.loading ?
                    <div className="sweet-loading">
                        <CircleLoader css={loaderCss} size={100}
                            color={"#2b4f81"}
                            loading={true} />
                    </div> :
                    <div className="home-page">
                        <Nav />
                    <div className="rest5">
                    <button type="button" className="back-btn" onClick={this.handleBack}><i class="fas fa-arrow-left"></i>Back</button>
                            <hr />
                            <form className="create">
                                <div className="field">
                                    <div>
                                    <label>First Name <span style={{color: "red"}}>*</span></label><br />
                                <input type="text"
                                    name="firstname"
                                    onChange={this.handleChange}
                                    defaultValue={referee.firstname}
                                    className="addname"
                                            placeholder="Oluwabukola" />
                                         <span style={{color: "red"}}>{this.state.errors["firstname"]}</span>
                                    </div>
                                    <div>
                            
                                    <label>Last Name<span style={{color: "red"}}>*</span></label><br />
                                <input type="text"
                                    name="lastname"
                                     onChange={this.handleChange}
                                    defaultValue={referee.lastname}
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
                                    defaultValue={ referee.email}
                                    className="mails"
                                            placeholder="o@gmail.com" />
                                         <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                                    </div>
                                    <div>
                                        <label> Phone Number<span style={{ color: "red" }}>*</span></label><br />
                                <input type='text'
                                    name="phonenumber"
                                    onChange={this.handleChange}
                                    defaultValue={referee.phonenumber}
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
                                    defaultValue={referee.address}
                                    className="addname"
                                     placeholder="address" />
                                    <span style={{color: "red"}}>{this.state.errors["address"]}</span>
                                    </div>
                                </div>
                                <button type='button' className="form-submit" onClick={this.handleSubmit}>Save</button>
                            </form>
                    </div>
                        </div>
                        
                }
                </div>
        );
    }
}

const mapStateToProps = (state) => {
 
    return {
        referee: state.referee.oneReferee
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        displayReferee:(referee) => dispatch(displayReferee(referee)),
        editReferee: (referee) => dispatch(editReferee(referee))
        
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditReferee));

 