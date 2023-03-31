import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { connect } from 'react-redux';
import { createGuarantor, creatingEmployee } from './store/actions/employeeActions';
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';



let numbers = RegExp(/^(\d+-?)+\d+$/);
let letters = RegExp(/^[a-zA-Z\s]*$/);
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);


 
const loaderCss = css`
margin: 150px auto 10px auto;
border-color:white;
`

class GuarantorForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name:"",
            email: "",
            occupation: "",  
            OfficeName: "",
            officephonenumber: "",
            CACNo: "",
            position: "",
            homeaddress: "",
            phone_number: "",
            relationship: "",
            loading: false,
            errors:{}
        }
    }

    handleValidation(){

        let errors = {};
        let formIsValid = true;

        if(!this.state.first_name){
           formIsValid = false;
           errors['first_name'] = "Cannot be empty";
        }
        if(!this.state.last_name){
            formIsValid = false;
            errors['last_name'] = "Cannot be empty";
        }
        if(!this.state.homeaddress){
            formIsValid = false;
            errors['homeaddress'] = "Cannot be empty";
         }
         if(!this.state.phone_number){
            formIsValid = false;
            errors['phone_number'] = "Cannot be empty";
         }
  
        if(!this.state.email){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
        }

       this.setState({errors: errors});
       return formIsValid;
   }
    
    handleSubmit = (event) => {
        event.preventDefault();
         const id = this.props.id;
        //this.props.history.push('/home');
         const { employee } = this.props;
      
         if (this.handleValidation()) {
       
             const data = {
                employee_id: id,
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                occupation: this.state.occupation,
                OfficeName: this.state.OfficeName,
                officephonenumber: this.state.officephonenumber,
                relationship: this.state.relationship,
                position: this.state.position,
                homeaddress: this.state.homeaddress,
                CACNo: this.state.CACNo,
                phone_number: this.state.phone_number,
            
            }
            this.setState({
                loading: true
            });
          
             this.props.createGuarantor(data).then(datum => {
                this.setState({
                    loading: false,
                    first_name:'',
                    last_name: '',
                    email: '',
                    occupation: '',
                      OfficeName: '',
                     officephonenumber: '',
                     position: "",
                     homeaddress: "",
                    CACNo:'',
                    relationship:'',
                     phone_number: "",
                    
                });
                
             
                if (datum.success === false) {
                    toast.notify('Guarantor not captured!');
                 }
                 else {
                    toast.notify('Guarantor successfully captured!');
                 }
                //this.props.history.push('/employerForm/:id')
                
                    
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
            case 'first_name': errors.first_name = letters.test(value) && value.length > 2  
                ? "" : 'minimum of 3 letters required' ;
                break;
            
            case 'last_name': errors.last_name = letters.test(value) && value.length > 2
                ? "" : 'minimum of 3 characters required';
                break;
            
                case 'email': errors.email= emailRegex.test(value)  && value.length > 0
                ?  "" : 'invalid email addreess';
                break;
            
                case 'occupation': errors.occupation = value.length > 2
                ? "" : 'minimum of 3 characters'  ;
                break;
                case 'OfficeName': errors.OfficeName =  value.length > 2
                ? "" :'minimum of 3 characters required' ;
                break;
                
                case 'officephonenumber': errors.officephonenumber = numbers.test(value)  && value.length > 5 
                ? "" : 'numbers  only' ;
                break;
                case 'phone_number':errors.phone_number= numbers.test(value)  && value.length > 5
                ? "" : 'numbers only' ;
                break;

                case 'position': errors.position =  value.length > 2
                ? "" :'minimum of 3 characters required' ;
                break;
                case 'homeaddress': errors.homeaddress =  value.length > 2
                ? "" :'Invalid address' ;
                break;
                case 'CACNo': errors.CACNo =  value.length > 2
                ? "" :'minimum of 3 characters required' ;
                break;
                case 'relationship': errors.relationship = letters.test(value) && value.length > 2
                ? "" : 'minimum of 3 characters required';
                break;
               
            default:
                break;
         }
       
        this.setState({ errors, [name]: value });
        
    }
    render() {
         const { employee } = this.props;
       
        
        return (
            <div>
                {this.state.loading ?
                    <div className="sweet-loading">
                        <CircleLoader css={loaderCss} size={100}
                            color={"#2b4f81"}
                            loading={true} />
                    </div> :
                             <div className="rest1"> 
                                {/* "update-form" */}
                                <form className="create">
                                  
                                    <div className="field">
                                        <div>
                                            <label>First Name<span style={{color: "red"}}>*</span></label><br />
                                            <input type="text"
                                                name="first_name"
                                                onChange={this.handleChange}
                                                value={this.state.first_name}
                                                className="addname"
                                        placeholder="Oluwabukola" /><br />
                                     <span style={{color: "red"}}>{this.state.errors["first_name"]}</span>
                                        </div>
                                        <div>
                                            <label>Last Name<span style={{color: "red"}}>*</span></label><br />
                                            <input type="text"
                                                name="last_name"
                                                onChange={this.handleChange}
                                                value={this.state.last_name}
                                                className="addname"
                                        placeholder="Oluwabukola" />
                                    <span style={{color: "red"}}>{this.state.errors["last_name"]}</span>
                                        </div>
                                    </div>
                            <div className="field">
                            <div>
                                
                                <label>Email<span style={{color: "red"}}>*</span></label><br />
                                <input type="email"
                                    name="email"
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                    className="mails"
                                        placeholder="joy@gmail.com" />
                                     <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                                </div>
                                <div>
                                            <label>Ocupation</label><br />
                                            <input type="text"
                                                name="occupation"
                                                onChange={this.handleChange}
                                                value={this.state.occupation}
                                                className="addname"
                                        placeholder="lawyer" />
                                      <span style={{color: "red"}}>{this.state.errors["occupation"]}</span>
                                        </div>
                                    </div>
                                    <div className="field">

                                    <div>
                                            <label>OfficeName</label><br />
                                            <input type="text"
                                                name="OfficeName"
                                                onChange={this.handleChange}
                                                value={this.state.OfficeName}
                                                className="addname"
                                                placeholder="gtb" />
                                                <span style={{color: "red"}}>{this.state.errors["OfficeName"]}</span>
                                </div>
                                <div>
                                            <label>Office Phone Number</label><br />
                                            <input type="text"
                                                name="officephonenumber"
                                                onChange={this.handleChange}
                                                value={this.state.officephonenumber}
                                                className="addname"
                                              placeholder="08099234578" />
                                    <span style={{color: "red"}}>{this.state.errors["officephonenumber"]}</span>
                                        </div>
                                    </div>
                            <div className="field">
                            <div>
                                            <label>CACNo</label><br />
                                            <input type="text"
                                                name="CACNo"
                                                onChange={this.handleChange}
                                                value={this.state.CACNo}
                                                className="addname"
                                                placeholder="234bg" />
                                        </div>
                                       
                                        <div>
                                            <label>Position</label><br />
                                            <input type="text"
                                                name="position"
                                                onChange={this.handleChange}
                                                value={this.state.position}
                                                className="addname"
                                        placeholder="manager" />
                                    <span style={{color: "red"}}>{this.state.errors["position"]}</span>
                                        </div>
                                    
                                    </div>
                                    <div className="field">
                                        <div>
                                            <label>Home Address<span style={{color: "red"}}>*</span></label><br />
                                            <input type="text"
                                                name="homeaddress"
                                                onChange={this.handleChange}
                                                value={this.state.homeaddress}
                                                className="addname"
                                        placeholder="19,olusoji" />
                                    <span style={{color: "red"}}>{this.state.errors["homeaddress"]}</span>
                                        </div>
                                        <div>
                                            <label>Personal Number<span style={{color: "red"}}>*</span></label><br />
                                            <input type="text"
                                                name="phone_number"
                                                onChange={this.handleChange}
                                                value={this.state.phone_number}
                                                className="addname"
                                        placeholder="0902346789" />
                                    <span style={{color: "red"}}>{this.state.errors["phone_number"]}</span>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div>
                                            <label>Relationship<span style={{color: "red"}}>*</span></label><br />
                                            <input type="text"
                                                name="relationship"
                                                onChange={this.handleChange}
                                                value={this.state.relationship}
                                                className="addname"
                                        placeholder="niece" />
                                    <span style={{color: "red"}}>{this.state.errors["relationship"]}</span>
                                        </div>
                                        
                            </div>
                            
                                    <button type='button' className="form-submit" onClick={this.handleSubmit}>Save</button>
                                </form>
                            </div>
                            
                            
                }
                </div>
        )
    }
}
const mapStateToProps = (state) => {
 
    return {
        employee: state.employee.display
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createGuarantor: (guarantor) => dispatch(createGuarantor(guarantor)),
        creatingEmployee: (employee) => dispatch(creatingEmployee(employee))
        
    }
}

    export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GuarantorForm));