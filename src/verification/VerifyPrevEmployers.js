import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {  PreviousEmployers, verifyEmployer } from '../store/actions/verificationAction';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/core';
import toast from 'toasted-notes'; 
import 'toasted-notes/src/styles.css';
import Modal from 'react-bootstrap/Modal';
import 'toasted-notes/src/styles.css';



const loaderCss = css`
margin: 150px auto 10px auto;
border-color:white;
`

class VerifyPrevEmployers extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            id: '',
            employer: null,
            IsVerified:0,
            comment: '',
        }
    }
    componentDidMount() {
        const data = this.props.id;
     
       this.props.PreviousEmployers(data);
    }
    
    handleOpen = (employ) => {
        this.setState({
            show: true,
            employer: employ,
        });
      
    }
    handleClose = () => {
        this.setState({
        show: false
})
    }
    handleVerification = async (event) => {
       
        event.preventDefault();
        const { prevEmployers} = this.props;


        const data = {
            id: this.state.employer.previousemployer_id,
            IsVerified: this.state.IsVerified,
            comment: this.state.comment,
        }
        this.setState({
            loading: true
        });
              
        await this.props.verifyEmployer(data);

        this.setState({
            loading: false,
    
        });
        this.handleClose();
                toast.notify('Previous Employer successfully verified!');
            
    }

  
    handleUpdate = (event) => {
        
        this.setState({

            [event.target.name]: event.target.checked == true ? 1 : 0
        })
     
    }
    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }
     
    render() {
        const { prevEmployers } = this.props;
       
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
                         name="IsVerified"
                   defaultChecked={this.state.employer !== null && this.state.employer.IsVerified == "1" ? true : false}
                      onChange={this.handleUpdate} />
                                    </div>
            <h5><span>V</span>erify</h5>
             </div>
                    <div className="comment">
                    <textarea maxLength={50}  name="comment"
                  defaultValue={this.state.employer !== null && this.state.employer.comment }
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
                                            {/*<th>Id</th>*/}
                                            <th>Company Name</th>
                                            <th>Role</th>
                                             <th>End Year</th>
                                            {/* <th>View</th> */}
                                            <th>Verify</th>
                                         <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                            {
                           prevEmployers != null && prevEmployers.map((employ) => 
                                    
                                    <tr key={employ.id}>
                                        <td>{employ.employer_name}</td>
                                        <td>{employ.jobtitle}</td>
                                   <td>{employ.endyear}</td> 
                                   {/* <td className="eyes"><Link to={`/employerDetails/${employ.previousemployer_id}`}><i class="far fa-eye eye"></i></Link></td> */}
                                        <td><button className="verify-now "onClick={() =>this.handleOpen(employ)} >Verify Now</button></td>
                                        <td><button className="notverified" style={{ backgroundColor: employ.IsVerified !== null && employ.IsVerified == "1" ? '#008000' : '#e62020' }}>{ employ.IsVerified !== null && employ.IsVerified == "1" ? 'Verified' : 'unverified' }</button></td>
                                     {/* <td><button type="button" className="view-btn"><Link to={`/guarantorForm/${employ.id}`}>Update</Link></button></td> */}
                                     </tr>
                                )
                                 } 
                                        </tbody>
                                    </table>
                                    <div className="no-guarantor" style={{ display: prevEmployers == null || prevEmployers.length === 0 ? 'block' : 'none' }}>
                                <h6> Previous employer not available... </h6>
                        </div>
                        </div>
            }
                      
                </div>
                            
                    )
                }
            }
           
    const mapStateToProps = (state) => {
 
    return {
        prevEmployers: state.verification.prevEmployers,
        verifyEmployer: state.verification.verifyEmployer,
       
    }
}
const mapDispatchToProps = (dispatch) => {

    return {

         PreviousEmployers: (prevEmployers) => dispatch(PreviousEmployers(prevEmployers)),
         verifyEmployer: (employer) => dispatch(verifyEmployer(employer)),
    }
    
}   

export default connect(mapStateToProps, mapDispatchToProps)(VerifyPrevEmployers);