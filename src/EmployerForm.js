import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { connect } from 'react-redux';
import { creatingEmployee } from './store/actions/employeeActions';
import { createEmployer } from './store/actions/employeeActions';
import Nav from './Nav';

import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';

let numbers = RegExp(/^(\d+-?)+\d+$/);
let letters = RegExp(/^[a-zA-Z\s]*$/);
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);


const loaderCss = css`
margin: 150px auto 10px auto;
border-color:white;
`

class EmployerForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            employer_name: '',
            monthly_salary: '',
            startmonth: '',
            startyear: '',
            endmonth: '',
            endyear: '',
            jobtitle:'',
            loading: false,
            errors:{},
        }
    }
   
    handleValidation(){

        let errors = {};
        let formIsValid = true;

        if(!this.state.employer_name){
           formIsValid = false;
           errors['employer_name'] = "Cannot be empty";
        }
        if(!this.state.monthly_salary){
            formIsValid = false;
            errors['monthly_salary'] = "Cannot be empty";
        }
        if(!this.state.jobtitle){
            formIsValid = false;
            errors['jobtitle'] = "Cannot be empty";
         }
         if(!this.state.startmonth){
            formIsValid = false;
            errors['startmonth'] = "Cannot be empty";
         }
          if(!this.state.startyear){
            formIsValid = false;
            errors['startyear'] = "Cannot be empty";
         }
  
        if(!this.state.endmonth){
           formIsValid = false;
           errors["endmonth"] = "Cannot be empty";
        }

        if(!this.state.endyear){
            formIsValid = false;
            errors['endyear'] = "Cannot be empty";
         }

       this.setState({errors: errors});
       return formIsValid;
   }
    
    handleSubmit =  (event) => {
        event.preventDefault();
        const id = this.props.id;
      
        if (this.handleValidation()) {
         
            const data = {
             employee_id: id,
                employer_name: this.state.employer_name,
               monthly_salary: this.state.monthly_salary,
                startmonth: this.state.startmonth,
                startyear: this.state.startyear,
                endmonth: this.state.endmonth,
                endyear: this.state.endyear,
               jobtitle: this.state.jobtitle, 
            
            }
          
            this.setState({
                loading: true
            });
           
            this.props.createEmployer(data).then(datum => {
                this.setState({
                    loading: false,
                    employer_name: '',
                    monthly_salary: '',
                    startmonth: '',
                    startyear: '',
                    endmonth: '',
                    endyear: '',
                    jobtitle:'',
                    loading: false,
                });
                if (datum.success == false) {
                    toast.notify('Employer not captured!');
                }
                else {
                    toast.notify('Employer information successfully captured!');
                }
                
                // console.log('Success:', datum)
                // this.props.history.push('/createEmployee')
                    
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
        this.setState({ errors, [name]: value }, console.log(this.state));
        
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
                   
                            <form className="create">
                                <div className="field">
                                    
                                        <div>
                                            <label>Organisation Name<span style={{color: "red"}}>*</span></label><br />
                                            <input type="text"
                                                name="employer_name"
                                                 onChange={this.handleChange}
                                                value={this.state.employer_name}
                                                className="addname"
                                        placeholder="Tvc" />
                                    <span style={{color: "red"}}>{this.state.errors["employer_name"]}</span>
                                        </div>
                                    
                                        <div>
                                            <label>Monthly salary<span style={{color: "red"}}>*</span></label><br />
                                            <input type="text"
                                                name="monthly_salary"
                                                 onChange={this.handleChange}
                                                 value={this.state.monthly_salary}
                                                className="addname"
                                        placeholder="50000" />
                                    <span style={{color: "red"}}>{this.state.errors["monthly_salary"]}</span>
                                </div>
                                </div>
                                 
                            <div className="field">
                                         <div>
                                            <label>Start Month<span style={{color: "red"}}>*</span></label><br />
                                            <input type="text"
                                                name="startmonth"
                                                 onChange={this.handleChange}
                                                value={this.state.startmonth}
                                                className="addname"
                                        placeholder="January" />
                                    <span style={{color: "red"}}>{this.state.errors["startmonth"]}</span>
                                        </div>
                                        <div>
                                            <label>Start Year<span style={{color: "red"}}>*</span></label><br />
                                            <input type="text"
                                                name="startyear"
                                                onChange={this.handleChange}
                                             value={this.state.startyear}
                                                className="addname"
                                        placeholder="2018" />
                                    <span style={{color: "red"}}>{this.state.errors["startyear"]}</span>
                                        </div>
                                       
                                    </div>
                            <div className="field">
                                                <div>
                                            <label>End Month<span style={{color: "red"}}>*</span></label><br />
                                            <input type="text"
                                                name="endmonth"
                                                onChange={this.handleChange}
                                                 value={this.state.endmonth}
                                                className="addname"
                                        placeholder="may" />
                                    <span style={{color: "red"}}>{this.state.errors["endmonth"]}</span>
                                        </div>
                                        <div>
                                            <label>End Year<span style={{color: "red"}}>*</span></label><br />
                                            <input type="text"
                                                name="endyear"
                                                 onChange={this.handleChange}
                                                 value={this.state.endyear}
                                                className="addname"
                                                 placeholder="2020" />
                                    <span style={{color: "red"}}>{this.state.errors["endyear"]}</span>
                                </div>
                                </div>
                                         <div className="field">
                                        <div>
                                            <label>Job title<span style={{color: "red"}}>*</span></label><br />
                                            <input type="text"
                                                name="jobtitle"
                                                 onChange={this.handleChange}
                                                 value={this.state.jobtitle}
                                                className="addname"
                                        placeholder="admin" />
                                    <span style={{color: "red"}}>{this.state.errors["jobtitle"]}</span>
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
        employee: state.employee.display,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createEmployer: (employer) => dispatch(createEmployer(employer)),
        creatingEmployee: (employee) => dispatch(creatingEmployee(employee))
        
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EmployerForm));