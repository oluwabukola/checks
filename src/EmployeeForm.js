import React from 'react'; 
import { Link, withRouter } from 'react-router-dom';
import { displayRegion, creatingEmployee } from './store/actions/employeeActions';
import Home from './Home';
import Regions from './Regions';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { connect } from 'react-redux';
import Nav from './Nav';
import User from './User';

import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';


const token = localStorage.getItem('token');
let numbers = RegExp(/^[0-9]+$/);
// let letters = RegExp(/^[A-Za-z]+$/);
let letters = RegExp(/^[a-zA-Z\s]*$/);
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


class EmployeeForm extends React.Component{
    async componentDidMount() {
        await this.props.displayRegion();
        const { regionName } = this.props
       
    }
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            first_name: "",
            last_name: "",
            other_name: "",
            email: "",
            address: "",
            currentTown: "",
            currentState: "",
            date_of_birth: "",
            designation: "",
            employmentdate:"",
            permanentAddress:"",
            permanentState:"",
            permanentTown: "",
            phone_number: "",
            preferredLocation: "",
            loading: false,
            formErrors: {
                title: "",
                first_name: "",
                last_name: "",
                other_name: "",
                email: "",
                address: "",
                currentTown: "",
                currentState: "",
                date_of_birth: "",
                designation: "",
                employmentdate:"",
                permanentAddress:"",
                permanentState:"",
                permanentTown: "",
                phone_number: "",
                preferredLocation: "",
            }
        }
            }

    
    handleSubmit = (event) => {
        event.preventDefault();
            
        if (formValid(this.state)) {
            
            const data = {
                title: this.state.title,
                first_name: this.state.first_name,
                last_name:  this.state.last_name,
                other_name: this.state.other_name,
                email: this.state.email,
                address: this.state.address,
                currentTown: this.state.currentTown,
                currentState: this.state.currentState,
                date_of_birth: this.state.date_of_birth,
                designation: this.state.designation,
                employmentdate:this.state.employmentdate,
                permanentAddress:this.state.permanentAddress,
                permanentTown: this.state.permanentTown,
                permanentState:this.state.permanentState,
                phone_number: this.state.phone_number,
                preferredLocation:  this.state.preferredLocation,
            
            }
            this.setState({
                loading: true,
            });
          
            this.props.creatingEmployee(data).then(datum => {
             
                this.setState({
                    loading: false,
                    title: "",
                    first_name: "",
                    last_name: "",
                    other_name: "",
                    email: "",
                    address: "",
                    currentTown: "",
                    currentState: "",
                    date_of_birth: "",
                    designation: "",
                    employmentdate:"",
                    permanentAddress:"",
                    permanentState:"",
                    permanentTown: "",
                    phone_number: "",
                    preferredLocation: "",
        
                });
                if (datum.success === false) {
                    toast.notify('Employee not created!');
                 }
                 else {
                    toast.notify('Employee successfully created!');
                 }
              
                this.props.history.push('/createEmployee');
                     
            })
                .catch((error) => {
                    console.error('Error:', error);
                });
                  
         }
        else {
        console.error('Form inValid');
            toast.notify('All fields must be filled!', {
                color: 'red',
            });
        }
    }
    handleBack = (event) => {
        event.preventDefault();
        this.props.history.push('/createEmployee');
       
    }
    // handleRegion = (event) => {
    //     const { regionName } = this.props
     
    //     const { name, value } = event.target;
        
    //     const index = regionName.findIndex(x => x.id == event.target.value);
    //     alert(index);
    //     this.setState({
    //     region_name:regionName[index].name,
    //         region_id: value,
    //     })
        
    // }

    handleChange = (event) => {
        event.preventDefault();
       const { name, value } = event.target; 
        let formErrors = this.state.formErrors;
        

        switch (name) {
            case 'title': formErrors.title = letters.test(value) && value.length > 1
            ? "" : 'minimum of 2 letters required';
                break;
            
            case 'first_name': formErrors.first_name = letters.test(value) && value.length > 2
                ? "" : 'minimum of 3 letters required';
                break;
            
            case 'last_name': formErrors.last_ame = letters.test(value) && value.length > 2
                ? "" : 'minimum of 3 characters required';
                break;
            case 'other_name': formErrors.other_ame = letters.test(value) && value.length > 2
                ? "" : 'minimum of 3 characters required';
                break;
            
            case 'email': formErrors.email = emailRegex.test(value) && value.length > 0
                ? "" : 'invalid email addreess';
                break;
            case 'address': formErrors.address = value.length > 2
                ? "" : 'Incorrect address';
                break;
            case 'currentTown': formErrors.currentTown = letters.test(value) && value.length > 2
                ? "" : 'minimum of 3 characters required';
                break;
            case 'currentState': formErrors.currentState = letters.test(value) && value.length > 2
                ? "" : 'invalid state';
                break;
                case 'date_of_birth': formErrors.date_of_birth = value.length > 2
                ? "" : 'invalid age';
                break;
                case 'designation': formErrors.designation = value.length > 2
                ? "" : 'field must be filled';
                break;
                case 'employmentdate': formErrors.employmentdate = value.length > 2
                ? "" : 'select date';
                break;
                case 'permanentAddress': formErrors.permanentAddress = value.length > 2
                ? "" : 'field must be filled';
                break;
                case 'permanentTown': formErrors.permanentTown = value.length > 2
                ? "" : 'field must be filled';
                break;
            
                case 'permanentState': formErrors.permanentState = value.length > 2
                ? "" : 'field must be filled';
                break;
            case 'phone_number': formErrors.phone_number = numbers.test(value) && value.length > 4
                ? "" : 'invalid phone number';
                break;
            
                case 'preferredLocation': formErrors.preferredLocation = letters.test(value) && value.length > 2
                ? "" : 'alphabets only';
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
                                            value={this.state.title} onChange={this.handleChange}>
                                        <option>--select title--</option>
                                            <option value="miss">Miss</option>
                                            <option  value="mr" >Mr</option>
                                            <option  value="mrs">Mrs</option>

                                        </select>
                                     
                                    </div>
                                    <div>
                                    <label>First Name</label><br />
                                        <input type="text"
                                            name="first_name"
                                            onChange={this.handleChange}
                                            value={this.state.first_name}
                                            className="addname"
                                            placeholder="Oluwabukola" /><br />
                                        <span className="errorMessage">{formErrors.first_name}</span>
                                    </div>
                                </div>

                                <div className="field">
                                    
                                    <div>
                                        <label>Last Name</label><br />
                                        <input type="text"
                                            name="last_name"
                                            onChange={this.handleChange}
                                            value={this.state.last_name}
                                            className="addname"
                                            placeholder="Oluwabukola" />
                                        <span className="errorMessage">{formErrors.last_name}</span>
                                    </div>
                                    <div>
                                        <label>Other Name</label><br />
                                        <input type="text"
                                            name="other_name"
                                            className="addname"
                                            onChange={this.handleChange}
                                            value={this.state.other_name}
                                            placeholder="Oluwabukola" />
                                        <span className="errorMessage">{formErrors.other_name}</span>
                                    </div>
                                </div>
                                <div className="field">
                                    <div>
                                        <label>Email</label><br />
                                        <input type="email"
                                            name="email"
                                            onChange={this.handleChange}
                                            value={this.state.email}
                                            className="mails"
                                            placeholder="bb@gmail.com" />
                                        <span className="errorMessage">{formErrors.email}</span>
                                    </div>
                                    <div>
                                        <label>Address</label><br/>
                                        <input type="text"
                                            name="address"
                                            onChange={this.handleChange}
                                            value={this.state.address}
                                            className="addname"
                                            placeholder="ibadan" />
                                        <span className="errorMessage">{formErrors.address}</span>
                                    </div>
                                </div>
                                <div className="field">
                                    <div>
                                <label>Current Town</label><br />
                                <input type="text"
                                    name="currentTown"
                                    onChange={this.handleChange}
                                    value={this.state.currentTown}
                                    className="addname"
                                    placeholder="Enter town" />
                                        <span className="errorMessage">{formErrors.currentTown}</span>
                                    </div>
                                    <div>
                                <label>Current State</label><br />
                                <input type="text"
                                    name="currentState"
                                    onChange={this.handleChange}
                                    value={this.state.currentState}
                                    className="addname"
                                    placeholder="Enter state" />
                                    <span className="errorMessage">{formErrors.currentState}</span>
                                        </div>
                                </div>
                                <div className="field">
                                    <div>
                                <label>Permanent Address</label><br />
                                <input type="text"
                                    name="permanentAddress"
                                    onChange={this.handleChange}
                                    value={this.state.permanentAddress}
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
                                    value={this.state.permanentTown}
                                    placeholder="Enter age" />
                                <span className="errorMessage">{formErrors.permanentTown}</span>
                                    </div>
                                </div>

                                <div className="field">

                                <div>
                                <label>Permanent State</label> <br />
                                <input type="text"
                                    name="permanentState"
                                    className="addname"
                                    onChange={this.handleChange}
                                        value={this.state.permanentState}
                                        placeholder="Enter state" />
                                    <span className="errorMessage">{formErrors.permanentState}</span>
                                        </div>
                                        <div>
                                    <label>Preferred Location</label> <br />
                                    <input type="text"
                                        name="preferredLocation"
                                        className="addname"
                                        onChange={this.handleChange}
                                        value={this.state.preferredLocation}
                                        placeholder="Enter state" />
                                    <span className="errorMessage">{formErrors.preferredLocation}</span>
                                        </div>
                                    
                                    </div>

                                    <div className="field">
                                    <div>
                                <label>Designation</label><br/>
                                <input type="text"
                                    name="designation"
                                    onChange={this.handleChange}
                                    value={this.state.designation}
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
                                    value={this.state.employmentdate}
                                     />
                                    <span className="errorMessage">{formErrors.employmentdate}</span>
                                    </div>
                                </div>

                               <div className="field">

                                <div>
                            <label>Date of Birth</label><br/>
                                <input type="date"
                                    name="date_of_birth"
                            className="addname"
                         onChange={this.handleChange}
                         value={this.state.date_of_birth}
                      placeholder="date-of-birth" />
                        <span className="errorMessage">{formErrors.date_of_birth}</span>
                                 </div>
                                 
                                <div>
                            <label>phone number</label> <br />
                                <input type="text"
                                    name="phone_number"
                            className="addname"
                         onChange={this.handleChange}
                         value={this.state.phone_number}
                         placeholder="Enter state" />
                        <span className="errorMessage">{formErrors.phone_number}</span>
                                 </div>
                              </div>
                               
                                  {/* <div>

                                <label>Region</label>
                                <select className="addname" onChange={this.handleRegion}>
                                <option>--select region--</option>
                                {
                             regionName != null && regionName.map((regionName) =>
                             <option  value={regionName.id}>{regionName.name }</option>
        
                                 )
                                    }
                                        </select>
                                    </div>
                                     */}
                 <button type='button' className="form-submit" onClick={this.handleSubmit}>Submit</button>
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
        regionName: state.region.regionName
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        displayRegion: (regionName) => dispatch(displayRegion(regionName)),
        creatingEmployee: (employee) => dispatch(creatingEmployee(employee))
        }
    }
    

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EmployeeForm));
