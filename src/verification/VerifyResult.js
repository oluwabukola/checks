import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';
import {Results} from '../store/actions/verificationAction';
import Modal from 'react-bootstrap/Modal';
import { verifyResult} from '../store/actions/verificationAction';
import 'toasted-notes/src/styles.css';
import '../index';



const loaderCss = css`
margin: 150px auto 10px auto;
border-color:white;
`

class VerifyGuarantors extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            id: '',
            result: null,
        CertificateFileIsVerified:0,
            comment: '',
        }
    }

    async componentDidMount() {
        const data = this.props.id
        await this.props.Results(data);
       
    }
    handleOpen = async (employ) => {
    
       await this.setState({
            show: true,
            result: employ,
        });
    }
    handleClose = () => {
        this.setState({
            show: false
        });
    }

    
    handleVerification = async (event) => {
       
        event.preventDefault();
        const { results } = this.props;
 

        const data = {
            id: this.state.result.result_id,
            CertificateFileIsVerified: this.state.CertificateFileIsVerified,
            comment: this.state.comment,
        }
        this.setState({
            loading: true
        });
              
        await this.props.verifyResult(data);

        this.setState({
            loading: false,
    
        });
        this.handleClose();
                toast.notify('Result successfully verified!');
            
    }

    handleUpdate = (event) => {
        this.setState({

            [event.target.name] : event.target.checked  ? 1  : 0 
        })
    }
    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }
   
    render() {
        const { results } = this.props;
        const { text } = this.state;
        
        return (
            <div>
                {this.state.loading ?
                    <div className="sweet-loading">
                        <CircleLoader css={loaderCss} size={100}
                            color={"#2b4f81"}
                            loading={true} />
                    </div> :
            <div className="table-cont">
        
    <Modal show={this.state.show} onHide={this.handleClose}>
      <Modal.Header closeButton>
      </Modal.Header>
                 <Modal.Body>
                           
                 <div className="vef"> 
                <div className="check"> <input type="checkbox"
                 name="CertificateFileIsVerified"
                 defaultChecked={this.state.result !== null && this.state.result.CertificateFileIsVerified == "1" ? true : false}
                                    
                onChange={this.handleUpdate} />
                                    </div>
            <h5><span>V</span>erify</h5>
                                      
             </div>
                    <div className="comment">
                                    <textarea maxLength={50} name="comment" defaultValue={this.state.result !== null && this.state.result.comment }
                                        onChange={this.handleChange}
                                        placeholder="comment.." />
                                </div>
                                
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="verify-submission">
                        <button className="verify-submit"onClick={this.handleVerification} >Done</button>
                        </div>
      </Modal.Footer>
    </Modal> 
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Institution</th>
                                    <th>Certificate Name</th>
                                            {/* <th>View</th> */}
                                    <th>Verify</th>
                                    <th>Download  file</th>
                                         <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                        {
                            results != null && results.map((employ) =>
                                <tr key={employ.id} >
                                    <td>{employ.institution }</td>
                                    <td>{ employ.CertificateName}</td>
                                    {/* <td className="eyes"><Link to={`/resultDetails/${employ.result_id}`}><i class="far fa-eye eye"></i></Link></td> */}
                                    <td><button className="verify-now " onClick={() => this.handleOpen(employ)}>Verify Now</button></td>
                                    <td className="download"><a href={`${employ.filepath}${employ.CertificateFile}` } target="_blank"><i class="fas fa-cloud-download-alt"></i></a></td>
                                    <td><button className="notverified" style={{ backgroundColor: employ.CertificateFileIsVerified !== null && employ.CertificateFileIsVerified == "1" ? '#008000' : '#e62020' }}>{ employ.CertificateFileIsVerified !== null && employ.CertificateFileIsVerified == "1" ? 'Verified' : 'unverified' }</button></td>
                                  
                                </tr>   
                            )}
                                         </tbody>
                </table>

               <div className="no-guarantor" style={{ display: results == null || results.length === 0 ? 'block' : 'none' }}>
                                <h6>Result not available... </h6>
                        </div>
                        </div>
                }
                </div>    
                
                    )
                }
            }
           
            const mapStateToProps = (state) => {
              
                return {
                   results: state.verification.results,
                    verifyResult: state.verification.verifyResult,
                  
                  
                    
                }
            }
            const mapDispatchToProps = (dispatch) => {
            
                return {
              
                   Results: (results) => dispatch(Results(results)),
                    verifyResult: (result) => dispatch(verifyResult(result)),
            
                 

                    
                }
                
            }   
            
export default connect(mapStateToProps, mapDispatchToProps)(VerifyGuarantors);