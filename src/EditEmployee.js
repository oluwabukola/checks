import React from 'react'; 
import { Link, withRouter } from 'react-router-dom';
import { displayRegion } from './store/actions/employeeActions';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { connect } from 'react-redux';
import EmployerInfo from './EmployerInfo';
import { editEmployee } from './store/actions/displayActions';
import { displayEmployee } from './store/actions/displayActions';
import Nav from './Nav';

import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';
import employeeReducer from './store/reducers/employeeReducer';


let numbers = RegExp(/^[0-9]+$/);
let letters = RegExp(/^[A-Za-z]+$/);
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const formValid =({formErrors, ...rest} ) => {
    let valid = true;
    console.log(formErrors);
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

class Edit extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            employee: {},
            loading: false,
            formErrors: {
                first_name:'',
                last_name: '',
                other_name: '',
                email: '',
                gender: '',
                address: '',
                state: '',
                phone_number: '',
                date_of_birth: '',
            }
        }
    }

    componentDidMount() {
        const params = this.props.match.params;
      
        this.props.getEmployee(params.id);
        this.setState({
            employee: this.props.employee
        })
        
  
    }
    handleBack = (event) => {
        const params = this.props.match.params.id;
        event.preventDefault();
         this.props.history.push(`/employeeInfo/${params}`);
       
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let errors = this.state.formErrors
        if (formValid(this.state)) {
            const params = this.props.match.params;
    
            const { employee } = this.state;
            
            const data = {
                employee_id: params.id,
                title: employee.title,
                first_name: employee.first_name,
                last_name:  employee.last_name,
                other_name: employee.other_name,
                email: employee.email,
                address: employee.address,
                currentTown: employee.currentTown,
                currentState: employee.currentState,
                date_of_birth: employee.date_of_birth,
                designation: employee.designation,
                employmentdate:employee.employmentdate,
                permanentAddress:employee.permanentAddress,
                permanentTown: employee.permanentTown,
                permanentState:employee.permanentState,
                phone_number: employee.phone_number,
                preferredLocation:  employee.preferredLocation,
            
            }
            this.setState({
                loading: true
            });

            this.props.editEmployee(data).then(datum => {
                this.setState({
                    loading: false
                });
                toast.notify('Employee successfully edited!');
                // console.log('Success:', datum)
                // this.props.history.push('/employerInfo')
                    
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
        let employee = this.state.employee

        switch (name) {
            case 'first_name': formErrors.first_name = letters.test(value) &&  value.length > 2 
                ? "" : 'minimum of 3 letters required' ;
                break;
            
                case 'last_name': formErrors.last_ame = letters.test(value)  && value.length > 2
                ? "" : 'minimum of 3 characters required';
                break;
                case 'other_name': formErrors.other_ame = letters.test(value)  && value.length > 2
                ? "" :  'minimum of 3 characters required' ;
                break;
            
                case 'email': formErrors.email= emailRegex.test(value)  && value.length > 0
                ?  "" : 'invalid email addreess';
                break;
                case 'gender': formErrors.gender = value.length > 2
                ? "" : 'select'  ;
                break;
                case 'address': formErrors.address =  value.length > 2
                ? "" :'minimum of 3 characters required' ;
                break;
                case 'state': formErrors.state= letters.test(value)  && value.length > 2
                ? "" : 'invalid state'  ;
                break;
                case 'phone_number': formErrors.phone_number = numbers.test(value)  && value.length > 5
                ? "" : 'invalid phone number' ;
                break;
                case 'date_of_birth': formErrors.date_of_birth =  value.length > 1
                ? "" :  'invalid age' ;
                break;
                case 'region_name': formErrors.region_name =  value.length > 2
                ? "" :  'invalid region' ;
                break;
 
                
            default:
                break;
        }
        this.setState({ formErrors: formErrors });
        employee[name] = value
        this.setState({employee})
    }
    render() {
        const { formErrors } = this.state;
        const { employee } = this.state;
        const { regionName } = this.props;
       
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
                                        <label>Title</label><br />
                                        <select className="addname" name="title"
                                            onChange={this.handleChange}
                                            value={employee.title} >
                                          
                                            <option value="miss">Miss</option>
                                            <option  value="mr">Mr</option>
                                            <option  value="mrs">Mrs</option>

                                        </select>
                                      
                                    </div>
                                
                                    <div>
                                        <label>First Name</label><br />
                                        <input type="text"
                                            name="first_name"
                                            onChange={this.handleChange}
                                            defaultValue={employee.first_name}
                                            className="addname"
                                            placeholder="Oluwabukola" /><br />
                                        <span className="errorMessage">{formErrors.first_name}</span>
                                    </div>
                                    </div>
                                    <div className="field">
                                    <div>
                                        <label>Other Name</label><br />
                                        <input type="text"
                                            name="other_name"
                                            className="addname"
                                            onChange={this.handleChange}
                                            defaultValue={employee.other_name}
                                            placeholder="Oluwabukola" />
                                        <span className="errorMessage">{formErrors.other_name}</span>
                                    </div> 
                                      <div>
                                        <label>Last Name</label><br />
                                        <input type="text"
                                            name="last_name"
                                            onChange={this.handleChange}
                                            defaultValue={employee.last_name}
                                            className="addname"
                                            placeholder="Oluwabukola" />
                                        <span className="errorMessage">{formErrors.last_name}</span>
                                    </div> 
                                   
                                </div>
                                <div className="field">
                                    <div>
                                        <label>Email</label>
                                        <input type="email"
                                            name="email"
                                            onChange={this.handleChange}
                                            defaultValue={employee.email}
                                            className="mails"
                                            placeholder="bb@gmail.com" />
                                        <span className="errorMessage">{formErrors.email}</span>
                                    </div>
                                    <div>
                                        <label>Address</label><br/>
                                        <input type="text"
                                            name="address"
                                            onChange={this.handleChange}
                                            defaultValue={employee.address}
                                            className="addname"
                                            placeholder="bb@gmail.com" />
                                        <span className="errorMessage">{formErrors.address}</span>
                                    </div>
                                   
                                   
                                </div>
                                <div className="field">
                                <div>
                                <label>Current Town</label><br />
                                <input type="text"
                                    name="currentTown"
                                    onChange={this.handleChange}
                                    defaultValue={employee.currentTown}
                                    className="addname"
                                    placeholder="Enter town" />
                                        <span className="errorMessage">{formErrors.currentTown}</span>
                                    </div>
                                    <div>
                                <label>Current State</label><br />
                                <input type="text"
                                    name="currentState"
                                    onChange={this.handleChange}
                                    defaultValue={employee.currentState}
                                    className="addname"
                                    placeholder="Enter state" />
                                    <span className="errorMessage">{formErrors.currentState}</span>
                                        </div>
                                  
                                        </div>
                                <div className="field">
                                <div>
                                <label>Designation</label><br/>
                                <input type="text"
                                    name="designation"
                                    onChange={this.handleChange}
                                    defaultValue={employee.designation}
                                    className="addname"
                                    placeholder="Enter designation" />
                                <span className="errorMessage">{formErrors.designation}</span>
                                    </div>
                                    <div>
                                <label>Employment Date</label><br />
                                <input type="date"
                                    name="employmentdate"
                                    className="addname"
                                    onChange={this.handleChange}
                                    defaultValue={employee.employmentdate}
                                     />
                                        <span className="errorMessage">{formErrors.employmentdate}</span>
                                    </div>
                                </div>
                                <div className="field">

                                       <div>
                                <label>Permanent Address</label><br />
                                <input type="text"
                                    name="permanentAddress"
                                    onChange={this.handleChange}
                                    defaultValue={employee.permanentAddress}
                                    className="addname"
                                    placeholder="Enter permanent address" />
                                        <span className="errorMessage">{formErrors.permanentAddress}</span>
                                    </div>
                                    <div>
                                <label>Permanent Town</label><br/>
                                <input type="text"
                                    name="permanentTown"
                                    className="addname"
                                    onChange={this.handleChange}
                                    defaultValue={employee.permanentTown}
                                    placeholder="Enter age" />
                                <span className="errorMessage">{formErrors.permanentTown}</span>
                                    </div>
                                  
                                </div>

                     <div className="field">
                        <div>
                        <label>Date of Birth</label><br/>
                        <input type="date"
                            name="date_of_birth"
                        className="addname"
                        onChange={this.handleChange}
                        defaultValue={employee.date_of_birth}
                        placeholder="Enter state" />
                        <span className="errorMessage">{formErrors.date_of_birth}</span>
                        </div>
                        
                        <div>
                                <label>Permanent State</label> <br />
                                <input type="text"
                                    name="permanentState"
                                    className="addname"
                                    onChange={this.handleChange}
                                    value={employee.permanentState}
                                    placeholder="Enter state" />
                                <span className="errorMessage">{formErrors.permanentState}</span>
                                    </div>
                    
                                </div>
                                
                                <div className="field">

                                <div>
                         <label>phone number</label> <br />
                         <input type="text"
                        name="phone_number"
                         className="addname"
                            onChange={this.handleChange}
                         defaultValue={employee.phone_number}
                             placeholder="Enter state" />
                    <span className="errorMessage">{formErrors.phone_number}</span>
                    </div>
                                    <div>
                                <label>Preferred Location</label> <br />
                                <input type="text"
                                    name="preferredLocation"
                                    className="addname"
                                    onChange={this.handleChange}
                                    value={employee.preferredLocation}
                                    placeholder="Enter state" />
                                <span className="errorMessage">{formErrors.preferredLocation}</span>
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
        employee: state.employee.display,
        regionName: state.region.regionName,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getRegions: (regionName) => dispatch(displayRegion(regionName)),
        getEmployee: (employee) => dispatch(displayEmployee(employee)),
        editEmployee: (employee) => dispatch(editEmployee(employee))
        
    }
    
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));
