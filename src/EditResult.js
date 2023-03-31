import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import { connect } from 'react-redux';
import { displayResult, editResult } from './store/actions/displayActions';
import Nav from './Nav';
import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';

import { Chart } from "react-google-charts";


let letters = RegExp(/^[A-Za-z]+$/);

const loaderCss = css`
margin: 150px auto 10px auto;
border-color:white;
`

class EditResult extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          result:{},
            loading: false,
            errors: {}
        }
    }
    async componentDidMount() {
        const params = this.props.match.params;
      
        await this.props.displayResult(params.id);
        this.setState({
            result: this.props.result
        })
         
    }

    onFileChange = (event)=> { 
        event.preventDefault()
         this.setState({ CertificateFile: event.target.files[0] }); 
    }
    
    handleValidation() {
        
        let errors = {};
        let formIsValid = true;
        const { result } = this.state;

        if(!this.state.result.institution){
           formIsValid = false;
           errors['institution'] = "Cannot be empty";
        }

        if(!this.state.result.DateEarned){
            formIsValid = false;
            errors['DateEarned'] = "Cannot be empty";
        }

        if(!this.state.result.course){
            formIsValid = false;
            errors['course'] = "Cannot be empty";
        }
        
       this.setState({errors: errors});
       return formIsValid;
   }

   handleBack = (event) => {
    const params = this.props.match.params.id;
    event.preventDefault();
     this.props.history.push(`/resultInfo/${params}`);
   
    }
    
    handleSubmit = async (event) => {
        event.preventDefault();
       
        if (this.handleValidation()) {
             const id = this.props.match.params.id;
            
            const { result } = this.state;
            
            const data = new FormData();
          
               data.append('id', id)
                data.append('institution', this.state.result.institution)
               data.append('course', this.state.result.course)
               data.append('DateEarned', this.state.result.DateEarned)
                data.append('CertificateName', this.state.result.CertificateName)
            data.append('CertificateFile', this.state.result.CertificateFile)
            data.append('_method','POST')
          
        
            this.setState({
                loading: true
            });

    

            this.setState({
                            loading: false
                        });
            
            await this.props.editResult(data, id).then(datum => {
                // console.log([...data]);
                this.setState({
                    loading: false
                });
                // console.log('datum', datum)
                 
                // if (datum.message === 'No result') {
                //     toast.notify('Result not edited!');
                //  }
                //  else {
                //     toast.notify('Result successfully edited!');
                //  }
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
        const { result }= this.state;
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
        
        result[name] = value
        this.setState({result})
       
        
    }
    render() {
        const { result } = this.state;
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
                            <form className="create">
                                <div className="field">
                                    <div>
                                    <label>Institution<span style={{color: "red"}}>*</span></label><br />
                                <input type="text"
                                    name="institution"
                                    onChange={this.handleChange}
                                    defaultValue={result.institution}
                                    className="addname"
                                    placeholder="Oluwabukola" />
                                     <span style={{color: "red"}}>{this.state.errors["institution"]}</span>
                                    </div>
                                    <div>
                            
                                    <label>Course<span style={{color: "red"}}>*</span></label><br />
                                <input type="text"
                                    name="course"
                                    onChange={this.handleChange}
                                    defaultValue={result.course}
                                    className="addname"
                                     placeholder="Oluwabukola" />
                                     <span style={{color: "red"}}>{this.state.errors["course"]}</span>
                                        
                                    </div>
                                    </div>
                                
                                <div className="field">
                                    <div>
                                <label>CertificateName</label><br />
                                <input type="text"
                                    name="CertificateName"
                                    onChange={this.handleChange}
                                    defaultValue={result.CertificateName}
                                    className="addname"
                                            placeholder="Oluwabukola" />
                                         <span style={{color: "red"}}>{this.state.errors["CertificateName"]}</span>
                                    </div>
                                    <div>
                                    <label>Date Earned<span style={{color: "red"}}>*</span></label><br />
                                <input type="date"
                                    name="DateEarned"
                                    onChange={this.handleChange}
                                    defaultValue={result.DateEarned}
                                    className="addname"
                                     placeholder="Oluwabukola" />
                                    <span style={{color: "red"}}>{this.state.errors["DateEarned"]}</span>
                                        
                                    </div>
                                    </div>
                                    
                                    <div className="field">
                                    <div>
                                <label>Certificate File</label><br />
                                <input type="file"
                                    name="CertificateFile"
                                    onChange={this.handleChange}
                                    defaultValue={result.CertificateFile}
                                    className="addname"
                                            placeholder="Oluwabukola" />
                                          <span style={{color: "red"}}>{this.state.errors["CertiicateFile"]}</span>
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
        result: state.result.oneresult
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        displayResult:(result) => dispatch(displayResult(result)),
        editResult: (result, id) => dispatch(editResult(result, id))
        
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditResult));

 