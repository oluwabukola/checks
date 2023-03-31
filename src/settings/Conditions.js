import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { verificationCondition, getConditions } from '../store/actions/settingActions';
import User from '../User';
import Nav from '../Nav';
import Modal from 'react-bootstrap/Modal';
import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';
import { css } from '@emotion/core';


let numbers = RegExp(/^[0-9]+$/);

class Conditions extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            conditions: null,
            show: false,
            guarantor: '',
            referee: '',
            previous_employee: '',
            employee_result: '',
            address: '',
            // total_required: '',
            loading: false,
            errors:{},
        }
    }

    async componentDidMount() {
       
      await this.props.getConditions()
      this.setState({
        conditions: this.props.conditions
    })
    }

    handleOpen = (conditions) => {
        this.setState({
            show: true,
            conditions: conditions,
        });
      
    }
    handleClose = () => {
        this.setState({
        show: false
})
    }

    handleValidation() {
        
        let errors = {};
        let formIsValid = true;

        if(!this.state.conditions.guarantor){
           formIsValid = false;
           errors['guarantor'] = "Cannot be empty";
        }

        if(!this.state.conditions.referee){
            formIsValid = false;
            errors['referee'] = "Cannot be empty";
        }

        if(!this.state.conditions.previous_employee){
            formIsValid = false;
            errors['previous_employee'] = "Cannot be empty";
        }
        
        if(!this.state.conditions.employee_result){
            formIsValid = false;
            errors['employee_result'] = "Cannot be empty";
        }
          if(!this.state.conditions.address){
            formIsValid = false;
            errors['address'] = "Cannot be empty";
        }
        // if(!this.state.conditions.total_required){
        //     formIsValid = false;
        //     errors['total_required'] = "Cannot be empty";
        // }
        
       this.setState({errors: errors});
       return formIsValid;
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
   
        if (this.handleValidation()) {
            const data = {
                guarantor: this.state.conditions.guarantor,
                referee: this.state.conditions.referee,
               previous_employee: this.state.conditions.previous_employee, 
                employee_result: this.state.conditions.employee_result,
                address: this.state.conditions.address,
                //  total_required : this.state.conditions.total_required
            }
          
            this.setState({
                loading: true
            });
            console.log("data", data);
            
             this.props.verificationCondition(data).then(datum => {
                this.setState({
                    loading: false,
                });
                
                 if (datum.message === " setting details updated successfully") {

                    toast.notify('Conditions set!');
                 }
                 else {
                    toast.notify('Conditions not set!');
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

    handleChange = (event) => {
        event.preventDefault();
        const { conditions } = this.state;
        const {name, value } = event.target;
        let errors = this.state.errors
        switch (name) {
            case 'guarantor': errors.guarantor = numbers.test(value) && value.length > 0
                ? "" : "minimum of one digit"
                break;
            case 'referee': errors.referee = numbers.test(value) && value.length > 0
                ? "" : 'minimum of one digit'
                break;
            case 'previous_employee': errors.previous_employee = numbers.test(value) && value.length > 0
                ? "" : 'minimum of one digit'
                break;
            case 'employee_result': errors.employee_result = numbers.test(value) && value.length > 0
                ? "" : 'minimum of one digit'
                break;
            
            case 'address': errors.address = numbers.test(value) && value.length > 0
                ? "" : 'minimum of one digit'
                break;
            
                // case 'total_required': errors.total_required = numbers.test(value) && value.length > 0
                // ? "" : 'minimum of one digit'
                // break;
        }
        this.setState({ errors, [name]: value });
      
        conditions[name] = value;
        
        this.setState({ conditions});
    }
   
    
    render() {
        const { conditions } = this.props;

        console.log(this.state.conditions);
        
        return (
            <div className="home-page">
            
                <Nav />
               
                <div className="rest8">
                <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            Verification Conditions
                            </Modal.Header>
                            <Modal.Body>
                            
                        <form  className="condition-container">
                            <div className="verification-condition">
                                    <div><label>Guarantor</label></div> 
                                    <div> <input type="text" placeholder="enter number"
                                name="guarantor" onChange={this.handleChange}
                                    defaultValue={this.state.conditions !== null && this.state.conditions.guarantor} /></div>
                               
                            </div>
                           
                                <div className="verification-condition">
                                    <div className="con"><label>Previous employer</label></div>
                                <div className="con"><input type="text" placeholder="enter number"
                                name="previous_employee" onChange={this.handleChange}
                                    defaultValue={this.state.conditions !== null && this.state.conditions.previous_employee} /></div>
                            </div>
                            <div className="verification-condition">
                                <div><label>Referee</label></div>
                                <div><input type="text" placeholder="enter number"
                                name="referee" onChange={this.handleChange}
                                    defaultValue={this.state.conditions !== null && this.state.conditions.referee} /></div>
                             
                            </div>
                          
                            <div className="verification-condition">
                            <div><label>Result</label></div>
                               <div><input type="text" placeholder="enter number"
                                name="employee_result" onChange={this.handleChange}
                                defaultValue={this.state.conditions !== null && this.state.conditions.employee_result} /></div> 
                            </div>
                           
                            <div className="verification-condition">
                            <div><label>Address</label></div>
                               <div><input type="text" placeholder="enter number"
                                name="address" onChange={this.handleChange}
                                 defaultValue={this.state.conditions !== null && this.state.conditions.address} /></div> 
                            </div>
                            
                            {/* <div className="verification-condition">
                            <div><label>Total</label></div>
                               <div><input type="text" placeholder="total number"
                                name="total_required" onChange={this.handleChange}
                                defaultValue={this.state.conditions !== null && this.state.conditions.total_required} /></div> 
                            </div> */}
                        </form>
                 
                            </Modal.Body>
                            <Modal.Footer>
                         <button className="submit-condition"  onClick={this.handleSubmit}>Submit</button>
                       
                            </Modal.Footer>
                        </Modal>
                    <div className="card">
                        
                <div className="content2">   
                         <div className="created"><h6>Guarantor</h6> </div>
                        <div className="created"><h6>{conditions !== null && conditions.guarantor}</h6></div> 
                    </div>
                        <hr />
                       
                    <div className="content2">
                        <div className="created"><h6>Referee</h6> </div>
                        <div className="created">{conditions !== null && conditions.referee}</div>
                        </div>
                        <hr/>
                    <div className="content2">
                        <div className="created"><h6>Result</h6> </div>
                        <div className="created">{conditions !== null && conditions.employee_result}</div>
                    </div>
                    <hr/>
                    <div className="content2">
                        <div className="created"><h6>Previous employer</h6> </div>
                        <div className="created">{ conditions !== null && conditions.previous_employee}</div>
                    </div>
                    <hr/>

                    <div className="content2">
                        <div className="created"><h6>Address</h6></div>
                        <div className="created">{conditions !== null && conditions.address}</div>
                    </div>
                    <hr/>
                    {/* <div className="content2">
                        <div className="created"><h6>Total</h6></div>
                        <div className="created"><h6>{ conditions !== null && conditions.total_required}</h6></div>
                    </div>
                    <hr/> */}
                    <div className="content">
                    <button type="button" className="submit-condition" onClick={() =>this.handleOpen(conditions)} >Change conditions</button>
                     
                    </div>
                </div>
                </div>
            </ div>           
        );
    }
}
const mapStateToProps = (state) => {
   console.log(state.settings.conditions)
    return {
        conditions: state.settings.conditions
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getConditions: (conditions) => dispatch(getConditions(conditions)),
        verificationCondition: (condition) => dispatch(verificationCondition(condition)),
        
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Conditions);