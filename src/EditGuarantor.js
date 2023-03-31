import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { connect } from 'react-redux';
import { editGuarantor } from './store/actions/displayActions';
import { displayGuarantor } from './store/actions/displayActions';
import Nav from './Nav';
import User from './User';
import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';




let numbers = RegExp(/^[0-9]+$/);
let letters = RegExp(/^[A-Za-z]+$/);
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const loaderCss = css`
margin: 150px auto 10px auto;
border-color:white;
`

class EditGuarantor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            guarantor:{},
            loading: false,
            errors:{}
        }
    }
    
     async componentDidMount() {
        const params = this.props.match.params;
    
      await this.props.displayGuarantor(params.id);
       this.setState({
           guarantor: this.props.guarantor
       })
    }
    
    handleValidation(){

        let errors = {};
        let formIsValid = true;

        if(!this.state.guarantor.first_name){
           formIsValid = false;
           errors['first_name'] = "Cannot be empty";
        }
        if(!this.state.guarantor.last_name){
            formIsValid = false;
            errors['last_name'] = "Cannot be empty";
        }
        if(!this.state.guarantor.homeaddress){
            formIsValid = false;
            errors['homeaddress'] = "Cannot be empty";
         }
         if(!this.state.guarantor.phone_number){
            formIsValid = false;
            errors['phone_number'] = "Cannot be empty";
         }
  
        if(!this.state.guarantor.email){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
        }

       this.setState({errors: errors});
       return formIsValid;
    }
    handleBack = (event) => {
        const params = this.props.match.params.id;
        event.preventDefault();
         this.props.history.push(`/guarantorInfo/${params}`);
    }
    
    handleSubmit =  async (event) => {
        event.preventDefault();
        if (this.handleValidation()) {
            const params = this.props.match.params;
         const { guarantor } =  this.state;

                const data = {
                id: params.id,
                first_name: guarantor.first_name,
                last_name: guarantor.last_name,
                email: guarantor.email,
                CACNo: guarantor.CACNo,
               position: guarantor.position,
                homeaddress: guarantor.homeaddress,
                phone_number: guarantor.phone_number,
                relationship: guarantor.relationship,
                occupation: guarantor.occupation,
                OfficeName: guarantor.OfficeName,
                officephonenumber: guarantor.officephonenumber
            
            }
            this.setState({
                loading: true
            });
            
             await this.props.editGuarantor(data).then(datum => {
                this.setState({
                    loading: false
                });
                if (datum.success === false) {
                    toast.notify('Guarantor not edited!');
                 }
                 else {
                    toast.notify('Guarantor successfully edited!');
                 }
             
            })
            .catch((error) => {
                console.error('Error:', error);
            });   
        }
        else {
            console.error('Form inValid');
            }

    }
    handleChange = async (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
        const { guarantor } = this.state;
        

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
        guarantor[name] = value;
        this.setState({ guarantor });
        
    }
    render() {
        const { guarantor } = this.props;
        
       
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
                        <div className="rest2">
                        <button type="button" className="back-btn" onClick={this.handleBack}><i class="fas fa-arrow-left"></i>Back</button>
                            <hr />
                                <form className="create">
                                <div className="field">
                                        <div>
                                        <label>First Name<span style={{color: "red"}}>*</span></label><br />
                                            <input type="text"
                                                name="first_name"
                                                onChange={this.handleChange}
                                                defaultValue={guarantor.first_name}
                                                className="addname"
                                            placeholder="Oluwabukola" /><br />
                                        <span style={{color: "red"}}>{this.state.errors["first_name"]}</span>
                                        </div>
                                        <div>
                                        <label>Last Name<span style={{color: "red"}}>*</span></label><br />
                                            <input type="text"
                                                name="last_name"
                                                onChange={this.handleChange}
                                                defaultValue={guarantor.last_name}
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
                                                defaultValue={guarantor.email}
                                             className="mails"
                                            placeholder="Oluwabukola" />
                                        <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                                </div>
                                <div>
                                            <label>Ocupation</label><br />
                                            <input type="text"
                                                name="occupation"
                                                onChange={this.handleChange}
                                                defaultValue={guarantor.occupation}
                                                className="addname"
                                            placeholder="Oluwabukola" />
                                        <span style={{color: "red"}}>{this.state.errors["occupation"]}</span>
                                        </div>
                                       
                                       
                                    </div>
                                    <div className="field">

                                    <div>
                                            <label>OfficeName</label><br />
                                            <input type="text"
                                                name="OfficeName"
                                                onChange={this.handleChange}
                                               defaultValue ={guarantor.OfficeName}
                                                className="addname"
                                            placeholder="Oluwabukola" />
                                        <span style={{color: "red"}}>{this.state.errors["OfficeName"]}</span>
                                </div>
                                <div>
                                            <label>Office Phone Number</label><br />
                                            <input type="text"
                                                name="officephonenumber"
                                                onChange={this.handleChange}
                                                defaultValue={guarantor.officephonenumber}
                                                className="addname"
                                            placeholder="Oluwabukola" />
                                         <span style={{color: "red"}}>{this.state.errors["officephonenumber"]}</span>
                                        </div>

                                    </div>
                            <div className="field">
                            <div>
                                            <label>CACNo</label><br />
                                            <input type="text"
                                                name="CACNo"
                                                onChange={this.handleChange}
                                                defaultValue={guarantor.CACNo}
                                                className="addname"
                                            placeholder="Oluwabukola" />
                                              <span style={{color: "red"}}>{this.state.errors["CACNo"]}</span>
                                        </div>
                                       
                                        <div>
                                            <label>Position</label><br />
                                            <input type="text"
                                                name="position"
                                                onChange={this.handleChange}
                                                defaultValue={guarantor.position}
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
                                                defaultValue={guarantor.homeaddress}
                                                className="addname"
                                            placeholder="olusoji" />
                                        <span style={{color: "red"}}>{this.state.errors["homeaddress"]}</span>
                                        </div>
                                        <div>
                                        <label>Personal Number<span style={{color: "red"}}>*</span></label><br />
                                            <input type="text"
                                                name="phone_number"
                                                onChange={this.handleChange}
                                                defaultValue={guarantor.phone_number}
                                                className="addname"
                                            placeholder="0902346789" />
                                        <span style={{color: "red"}}>{this.state.errors["phone_number"]}</span>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div>
                                        <label>Relationship<span style={{color: "red"}}>*</span></label><br />
                                            <input type="email"
                                                name="relationship"
                                                onChange={this.handleChange}
                                                defaultValue={guarantor.relationship}
                                                className="mails"
                                            placeholder="Oluwabukola" />
                                              <span style={{color: "red"}}>{this.state.errors["relationship"]}</span>
                                        </div>
                                        
                                        </div>
                            
                                    <button type='button' className="form-submit" onClick={this.handleSubmit}>Save</button>
                                   

                                </form>
                            </div>
                        </div>
                        
                }
                </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        guarantor: state.guarantor.oneguarantor,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        displayGuarantor: (guarantor) => dispatch(displayGuarantor(guarantor)),
        editGuarantor: (guarantor) => dispatch(editGuarantor(guarantor))
        
    }
}

    export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditGuarantor));