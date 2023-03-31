import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { connect } from 'react-redux';
import { createResult, creatingEmployee } from './store/actions/employeeActions';
import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';


let letters = RegExp(/^[a-zA-Z\s]*$/);

const loaderCss = css`
margin: 150px auto 10px auto;
border-color:white;
`

class ResultForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            CertificateName: '',
            DateEarned: '',
            course: '',
            institution: '',
            CertificateFile: null,
            loading: false,
            errors: {},
           
        }
    }

    onFileChange = (event)=> { 
       event.preventDefault()
        this.setState({ CertificateFile: event.target.files[0] }); 
    }
    
    handleValidation() {
        
        let errors = {};
        let formIsValid = true;

        if(!this.state.institution){
           formIsValid = false;
           errors['institution'] = "Cannot be empty";
        }

        if(!this.state.DateEarned){
            formIsValid = false;
            errors['DateEarned'] = "Cannot be empty";
        }

        if(!this.state.course){
            formIsValid = false;
            errors['course'] = "Cannot be empty";
        }
        
       this.setState({errors: errors});
       return formIsValid;
   }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const id = this.props.id;
      
        if (this.handleValidation()) {

            const formData = new FormData();
                 formData.append('employee_id', id)
                 formData.append('institution', this.state.institution)
                formData.append('course', this.state.course)
                formData.append('DateEarned', this.state.DateEarned)
                 formData.append('CertificateName', this.state.CertificateName)
                  formData.append('CertificateFile', this.state.CertificateFile)
            
            this.setState({
                loading: true
            });
            
             this.props.createResult(formData).then(datum => {
                this.setState({
                    loading: false,
                    institution:'',
                    course: '',
                    CertificateName: '',
                    DateEarned: '',
                    CertificateFile: '',

                });
                 if (datum.success === false) {
                    toast.notify('Result not captured!');
                 }
                 else {
                    toast.notify('Result successfully captured!');
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
        const { name, value } = event.target;
        let errors = this.state.errors;
        switch (name) {
            case 'institution': errors.institution = letters.test(value) &&  value.length > 2 
                ? "" : 'minimum of 3 letters required' ;
                break;
            
            case 'course': errors.course = letters.test(value) && value.length > 2
                ? "" : 'minimum of 3 lettters required';
                break;
            
                case 'DateEarned': errors.dateEarned =  value.length > 2
                ?  "" : 'invalid date';
                break;
                case 'CertificateName': errors.CertificateName = value.length > 2
                ? "" : 'minimum of 3 letters required'  ;
                break;
               
            default:
                break;
        }
        this.setState({ errors, [name]: value });
        
    }
    render() {
        return (
            <div>
                {this.state.loading ?
                    <div className="sweet-loading">
                        <CircleLoader css={loaderCss} size={100}
                            color={"#2b4f81"}
                            loading={true} />
                    </div> :
                    <div className="rest1">
                        
                            <form className="form-data">
                                <div className="field">
                                    <div>
                                <label>Institution<span style={{color: "red"}}>*</span></label><br />
                                <input type="text"
                                    name="institution"
                                    onChange={this.handleChange}
                                    value={this.state.institution}
                                    className="addname"
                                        placeholder="Oluwabukola" />
                                       <span style={{color: "red"}}>{this.state.errors["institution"]}</span>
                                    </div>
                                    <div>
                            
                                <label>Course<span style={{color: "red"}}>*</span></label><br />
                                <input type="text"
                                    name="course"
                                    onChange={this.handleChange}
                                    value={this.state.course}
                                    className="addname"
                                     placeholder="accounting" />
                                     <span style={{color: "red"}}>{this.state.errors["course"]}</span>
                                    </div>
                                    </div>
                            <div className="field">
                            <div>
                                <label>Certificate Name<span style={{color: "red"}}>*</span></label><br />
                                <input type="text"
                                    name="CertificateName"
                                    onChange={this.handleChange}
                                    value={this.state.CertificateName}
                                    className="addname"
                                     placeholder="Oluwabukola" />
                                     <span style={{color: "red"}}>{this.state.errors["CertificateName"]}</span>
                                </div>
                                     <div>
                                <label>File Upload</label><br />
                                <input type='file'
                                    name="CertificateFile"
                                    onChange={this.onFileChange}
                                    className="addname"
                                        placeholder="upload result" />
                                     <span style={{color: "red"}}>{this.state.errors["CertiicateFile"]}</span>
                                    </div>    
                            </div>
                            <div className="field">

                                    <div>
                                <label>Date Earned<span style={{color: "red"}}>*</span></label><br />
                                <input type='date'
                                    name="DateEarned"
                                    onChange={this.handleChange}
                                    value={this.state.DateEarned}
                                    className="addname"
                                    placeholder="Oluwabukola" />
                                    <span style={{color: "red"}}>{this.state.errors["DateEarned"]}</span>
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
        createResult: (formData) => dispatch(createResult(formData)),
        creatingEmployee: (employee) => dispatch(creatingEmployee(employee))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ResultForm));
