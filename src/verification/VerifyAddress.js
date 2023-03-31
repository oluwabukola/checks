import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {  oneEmployee, verifyAddress } from '../store/actions/verificationAction';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import toast from 'toasted-notes'; 
import Modal from 'react-bootstrap/Modal';
import 'toasted-notes/src/styles.css';


const loaderCss = css`
margin: 150px auto 10px auto;
border-color:white;
`


class VerifyAddress extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            id: '',
            employeeAddress: null,
            IsAddressVerified: 0,
            comment: '',
        }
    }
   async componentDidMount() {
        const data = this.props.id;
      await this.props.oneEmployee(data);
    }
    
    handleOpen = (employeeAddress) => {
        this.setState({
            show: true,
            employeeAddress: employeeAddress,
        });
      
    }
    handleClose = () => {
        this.setState({
        show: false
})
    }
    handleVerification =  (event) => {
        event.preventDefault();
        const { employeeAddress} = this.props;
                const data = {
                    
                    id: this.state.employeeAddress.employee_id,
                    IsAddressVerified : this.state.IsAddressVerified, 
                    comment: this.state.comment
        }
       
            this.setState({
                loading: true
            });
                
             this.props.verifyAddress(data);
            this.setState({
                loading: false,
            });
            this.handleClose();
            toast.notify('Address successfully verified!');
            
    }
    handleUpdate = (event) => {
        
        this.setState({

            [event.target.name] : event.target.checked == true ? 1 : 0
        })
    }
   
    render() {
        const { employeeAddress } = this.props;
   
    
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
                                         name="IsAddressVerified"
                                         defaultChecked={this.state.employeeAddress !== null && this.state.employeeAddress.IsAddressVerified == "1" ? true : false}
                                     
                                        onChange={this.handleUpdate} /> </div>
                                    <h5><span>V</span>erify</h5>
                                </div>
                                <div className="comment">
                                    <textarea maxLength={50}
                                         name="comment"
                                         defaultValue={this.state.employeeAddress!== null && this.state.employeeAddress.comment }
                                         onChange={this.handleChange}
                                        placeholder="comment.." />
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <div className="verify-submission">
                                    <button className="verify-submit" onClick={this.handleVerification}>Done</button>
                                </div>
                            </Modal.Footer>
                        </Modal>
                        <table>
                            <thead>
                                <tr>
                                
                                    <th>Address</th>
                                    <th>Town</th>
                                    <th>State</th>
                                   
                                    <th>Verify</th>
                                    <th>Status</th>
        
                                </tr>
                            </thead>
                            <tbody>
                                    
                                <tr key={employeeAddress !== null && employeeAddress.id}>
                                             <td>{employeeAddress!== null && employeeAddress.address}</td>
                                            <td>{employeeAddress !== null && employeeAddress.currentTown }</td>
                                            <td>{employeeAddress !== null && employeeAddress.currentState}</td>
                                            <td><button className="verify-now " onClick={() =>this.handleOpen(employeeAddress)} >Verify Now</button></td>
                                            <td><button className="notverified" style={{ backgroundColor: employeeAddress.IsAddressVerified !== null && employeeAddress.IsAddressVerified == "1" ? '#008000' : '#e62020' }}>{ employeeAddress.IsAddressVerified !== null && employeeAddress.IsAddressVerified == "1" ? 'Verified' : 'unverified' }</button></td>
                                            
                                        </tr>
                                
                            </tbody>
                        </table>
                        <div className="no-guarantor" style={{ display: employeeAddress == null || employeeAddress.length === 0 ? 'block' : 'none' }}>
                            <h6> Employee's address not available... </h6>
                        </div>
                    </div>
                }
                    </div>
               
                            
                    )
                }
            }
           
            const mapStateToProps = (state) => {
          
                return {
                    employeeAddress: state.verification.oneEmployee,
                    verifyAddress: state.verification.verifyAddress
            
                }
            }
            const mapDispatchToProps = (dispatch) => {
                return {
                    
                    oneEmployee: (employeeAddress) => dispatch(oneEmployee(employeeAddress)),
                    verifyAddress: (address) => dispatch(verifyAddress(address)),
                    
                    
                }
                
            }
            

export default connect(mapStateToProps, mapDispatchToProps)(VerifyAddress);