import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { connect } from 'react-redux';
import { editEmployer } from './store/actions/displayActions';
import { displayEmployer } from './store/actions/displayActions';
import Nav from './Nav';
import User from './User';
import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';


let letters = RegExp(/^[A-Za-z]+$/);
let numbers = RegExp(/^[0-9]+$/);
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const loaderCss = css`
margin: 150px auto 10px auto;
border-color:white;
`

class EditEmployer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            employer:{},
            loading: false,
            errors:{},
        }
    }
    componentDidMount() {
        const params = this.props.match.params;
      
        this.props.displayEmployer(params.id);
        this.setState({
            employer: this.props.employer
        })
    }
   
    handleValidation(){

        let errors = {};
        let formIsValid = true;

        if(!this.state.employer.employer_name){
           formIsValid = false;
           errors['employer_name'] = "Cannot be empty";
        }
        if(!this.state.employer.monthly_salary){
            formIsValid = false;
            errors['monthly_salary'] = "Cannot be empty";
        }
        if(!this.state.employer.jobtitle){
            formIsValid = false;
            errors['jobtitle'] = "Cannot be empty";
         }
         if(!this.state.employer.startmonth){
            formIsValid = false;
            errors['startmonth'] = "Cannot be empty";
         }
          if(!this.state.employer.startyear){
            formIsValid = false;
            errors['startyear'] = "Cannot be empty";
         }
  
        if(!this.state.employer.endmonth){
           formIsValid = false;
           errors["endmonth"] = "Cannot be empty";
        }

        if(!this.state.employer.endyear){
            formIsValid = false;
            errors['endyear'] = "Cannot be empty";
         }

       this.setState({errors: errors});
       return formIsValid;
   }
    
   handleBack = (event) => {
    const params = this.props.match.params.id;
    event.preventDefault();
     this.props.history.push(`/employerInfo/${params}`);
   
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
     
        if (this.handleValidation()) {

            const params = this.props.match.params;
    
               const { employer } = this.state;
            
            const data = {
                id:params.id,
                employer_name: this.state.employer.employer_name,
                monthly_salary: this.state.employer.monthly_salary,
                 startmonth: this.state.employer.startmonth,
                startyear: this.state.startyear,
                endmonth: this.state.employer.endmonth,
                endyear: this.state.employer.endyear,
                jobtitle: this.state.employer.jobtitle, 
                   
            }
            this.setState({
                loading: true
            });
            
             this.props.editEmployer(data).then(datum => {
                this.setState({
                    loading: false
                });
                 
                if (datum.success == false) {
                    toast.notify('Employer not successfully edited!');
                }
                else {
                    toast.notify('Employer information successfully edited!');
                }
                
                 // this.props.history.push(`/employers/${params.id}`)
                    
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
        const { employer } = this.state;
        switch (name) {
            case 'employer_name': errors.employer_name = value.length > 2 
                ? "" : 'minimum of 3 letters required' ;
                break;
            
                case 'monthly_salary': errors.monthly_salary=  value.length > 2
                ?  "" : 'please enter numbers only';
                break;
               
                case 'startmonth': errors.startmonth =  value.length > 2
                ? "" :'minimum of 3 characters required' ;
                break;
                case 'startyear': errors.startyear =  value.length > 2
                ? "" :'minimum of 3 characters required' ;
                break;
                case 'endmonth': errors.endmonth =  value.length > 2
                ? "" :'minimum of 3 characters required' ;
                break;
                case 'endyear': errors.endyear =  value.length > 2
                ? "" :'minimum of 3 characters required' ;
                break;
                case 'jobtitle': errors.jobtitle =  value.length > 2
                ? "" :'minimum of 3 characters required' ;
                break;
            default:
                break;
        }
        this.setState({ errors, [name]: value });
        employer[name] = value;
        this.setState({ employer });
        
    }
    render() {
        
      
        const { employer } = this.state;
    
        return (
            <div>
                {this.state.loading ?
                    <div className="sweet-loading">
                        <CircleLoader css={loaderCss} size={100}
                            color={"#2b4f81"}
                            loading={true} />
                    </div> :
                    <div className="home-page">
                        <Nav/>
                        <div className="rest1">
                        <button type="button" className="back-btn" onClick={this.handleBack}><i class="fas fa-arrow-left"></i>Back</button>
                            <hr />
                                <form className="create">
                                   <div className="field">
                                <div>
                                <label>Organisation Name<span style={{color: "red"}}>*</span></label><br />
                                            <input type="text"
                                            name="employer_name"
                                                onChange={this.handleChange}
                                               defaultValue={employer.employer_name}
                                                className="addname"
                                            placeholder="Oluwabukola" />
                                         <span style={{color: "red"}}>{this.state.errors["employer_name"]}</span>
                                        </div>
                               
                                    
                                        <div>
                                
                                        <label>Monthly salary<span style={{color: "red"}}>*</span></label><br />
                                            <input type="text"
                                                name="monthly_salary"
                                                 onChange={this.handleChange}
                                                 defaultValue={employer.monthly_salary}
                                                className="addname"
                                            placeholder="Oluwabukola" />
                                         <span style={{color: "red"}}>{this.state.errors["monthly_salary"]}</span>
                                    </div>
                                </div>
                                
                                    <div className="field">
                                        <div>
                                        <label>Start Month<span style={{color: "red"}}>*</span></label><br />
                                            <input type="text"
                                                name="startmonth"
                                                 onChange={this.handleChange}
                                                defaultValue={employer.startmonth}
                                                className="addname"
                                            placeholder="Oluwabukola" />
                                        <span style={{color: "red"}}>{this.state.errors["startmonth"]}</span>
                                        </div>
                                    
                                        <div>
                                        <label>Start Year<span style={{color: "red"}}>*</span></label><br />
                                            <input type="text"
                                                name="startyear"
                                                onChange={this.handleChange}
                                             defaultValue={employer.startyear}
                                                className="addname"
                                            placeholder="Oluwabukola" />
                                         <span style={{color: "red"}}>{this.state.errors["startyear"]}</span>
                                    </div>
                                </div>
                                <div className="field">
                                        <div>
                                        <label>End Month<span style={{color: "red"}}>*</span></label><br />
                                            <input type="text"
                                                name="endmonth"
                                                onChange={this.handleChange}
                                                 defaultValue={employer.endmonth}
                                                className="addname"
                                            placeholder="Oluwabukola" />
                                        <span style={{color: "red"}}>{this.state.errors["endmonth"]}</span>
                                        </div>
                                  
                                  
                                        <div>
                                        <label>End Year<span style={{color: "red"}}>*</span></label><br />
                                            <input type="text"
                                                name="endyear"
                                                 onChange={this.handleChange}
                                                 defaultValue={employer.endyear}
                                                className="addname"
                                            placeholder="Oluwabukola" />
                                        <span style={{color: "red"}}>{this.state.errors["endyear"]}</span>
                                    </div>
                                </div>
                                <div className="field">
                                        <div>
                                        <label>Job title<span style={{color: "red"}}>*</span></label><br />
                                            <input type="text"
                                                name="jobtitle"
                                                 onChange={this.handleChange}
                                                 defaultValue={employer.jobtitle}
                                                className="addname"
                                            placeholder="Oluwabukola" />
                                         <span style={{color: "red"}}>{this.state.errors["jobtitle"]}</span>
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
        employer: state.employer.oneemployer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        displayEmployer: (employer) => dispatch(displayEmployer(employer)),
        editEmployer: (employer) => dispatch(editEmployer(employer))
        
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditEmployer));